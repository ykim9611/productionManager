import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function NewProductionForm({ getAll }) {
  const [newProductionButtonClicked, setNewProductionButtonClicked] =
    useState(false);
  const [productName, setProductName] = useState("");
  const [partsName, setPartsName] = useState("");
  const [leadTime, setLeadTime] = useState("");
  const [annualSales, setAnnualSales] = useState("");
  const [partsList, setPartsList] = useState([]);

  function addPartToList(event) {
    event.preventDefault();
    var partsListCopy = partsList;
    partsListCopy.push({
      partsName: partsName,
      leadTime: leadTime,
    });
    setPartsList(partsListCopy);
    setPartsName("");
    setLeadTime("");
  }

  function submitNewProductionRun() {
    event.preventDefault();
    axios
      .post("/addNewProductionRun", {
        productName: productName,
        annualSales: annualSales,
        parts: partsList,
      })
      .then(() => {
        setNewProductionButtonClicked(false);
        setProductName("");
        setPartsName("");
        setLeadTime("");
        setAnnualSales("");
        setPartsList([]);
      })
      .then(() => getAll());
  }

  return (
    <div>
      {newProductionButtonClicked ? (
        <div>
          <h3>Enter New Production Run</h3>
          <form>
            <div>
              <label htmlFor="productName">Product Name : </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <br />
              <label htmlFor="annualSales">Annual Sales # : </label>
              <input
                type="text"
                id="annualSales"
                name="annualSales"
                value={annualSales}
                onChange={(e) => setAnnualSales(e.target.value)}
              />
              <br />
            </div>
            <div>
              Part Name:{" "}
              <input
                type="text"
                id="partsName"
                value={partsName}
                onChange={(e) => setPartsName(e.target.value)}
              ></input>{" "}
              Lead Time(days):{" "}
              <input
                type="text"
                id="leadTime"
                name="leadTime"
                value={leadTime}
                onChange={(e) => setLeadTime(e.target.value)}
              ></input>
              <button onClick={addPartToList}>Add</button>
            </div>
            <div>
              {partsList.map((part) => (
                <div key={part.partsName}>
                  Part Name: {part.partsName} {" | "} Lead Time: {part.leadTime}{" "}
                  days
                </div>
              ))}
            </div>
            <button onClick={submitNewProductionRun}>Submit</button>
          </form>
        </div>
      ) : (
        <button onClick={setNewProductionButtonClicked}>
          New Production Run
        </button>
      )}
    </div>
  );
}

NewProductionForm.propTypes = {
  getAll: PropTypes.func.isRequired,
};
