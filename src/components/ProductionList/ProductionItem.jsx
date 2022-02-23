/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Part from "./Part.jsx";
import sampleData from "../../../sampleData/sampleData.js";

export default function ProductionItem({ item, getAll }) {
  const [expandButtonClicked, setExpandButtonClicked] = useState(false);
  const [partsList, setPartsList] = useState([]);

  function expandButtonHandler() {
    axios
      .get(`/partsList/${item.id}`)
      .then(({ data }) => {
        setExpandButtonClicked(!expandButtonClicked);
        setPartsList(data);
        return data;
      })
      .then((data) => {
        updateOpenBool(data);
      });
  }

  function updateOpenBool(data) {
    data.every((part) => part.received === 1)
      ? (data.openBool = 0)
      : (data.openBool = 1);
    if (item.openBool !== data.openBool) {
      axios
        .patch("/updateBool", {
          openBool: data.openBool,
          id: item.id,
        })
        .then(() => getAll());
    }
  }

  function getParts() {
    axios
      .get(`/partsList/${item.id}`)
      .then(({ data }) => {
        setPartsList(data);
        return data;
      })
      .then((data) => {
        updateOpenBool(data);
      });
  }

  return (
    <div>
      <div>
        Product Name : {item.productName}
        {" | "}
        EDD : {item.etd.slice(0, 10).split("-").join("/")}
      </div>
      <div>
        <button onClick={expandButtonHandler}>
          {expandButtonClicked ? "Collapse" : "Expand"}
        </button>
        {expandButtonClicked ? (
          <div>
            {partsList.map((part) => (
              <Part
                key={part.id.toString()}
                part={part}
                etd={item.etd.slice(0, 10)}
                getAll={getAll}
                getParts={getParts}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

ProductionItem.propTypes = {
  item: PropTypes.object.isRequired,
  getAll: PropTypes.func.isRequired,
};
