import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Part({ part, etd, getAll, getParts }) {
  const [receivedStatus, setReceivedStatus] = useState(part.received);
  const [updateButtonClicked, setUpdateButtonClicked] = useState(false);
  const [updatedETD, setUpdatedETD] = useState("");

  function handleReceived() {
    axios
      .patch("/updateReceived", {
        partId: part.id,
        received: !receivedStatus,
      })
      .then(() => setReceivedStatus(!receivedStatus))
      .then(() => getParts());
  }

  function handleETDEdit() {
    axios
      .patch("/editLeadTime", {
        totalETD: etd,
        newPartETD: updatedETD,
        partId: part.id,
        product_id: part.product_id,
      })
      .then(() => {
        if (updatedETD > etd) {
          axios.patch("/updateTotalLeadTime", {
            totalETD: etd,
            newPartETD: updatedETD,
            partId: part.id,
            product_id: part.product_id,
          });
        }
      })
      .then(() => setUpdateButtonClicked(false))
      .then(() => getAll());
  }

  return (
    <div>
      <div>
        Part Name: {part.partName}
        {" | "}
        EDD: {part.etd.slice(0, 10).split("-").join("/")}
        {" | "}
        Received:{" "}
        <input
          type="checkbox"
          id="received"
          checked={receivedStatus}
          onChange={handleReceived}
        />
        {" | "}
      </div>
      {updateButtonClicked ? (
        <div>
          <label htmlFor="edit">Enter new ETD : </label>
          <input
            type="date"
            onChange={(e) => setUpdatedETD(e.target.value)}
          ></input>
          <button onClick={handleETDEdit}>Submit</button>
        </div>
      ) : (
        <button onClick={() => setUpdateButtonClicked(true)}>Edit</button>
      )}
    </div>
  );
}

Part.propTypes = {
  part: PropTypes.object.isRequired,
  etd: PropTypes.string.isRequired,
  getAll: PropTypes.func.isRequired,
  getParts: PropTypes.func.isRequired,
};

export default Part;
