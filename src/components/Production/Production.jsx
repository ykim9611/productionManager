import React, { useState, useEffect } from "react";
import styles from "../styles.css";
import axios from "axios";
import NewProductionForm from "./NewProductionForm/NewProductionForm.jsx";
import ProductionList from "./ProductionList/ProductionList.jsx";
import UpcomingProductionList from "./UpcomingProductionList/UpcomingProductionList.jsx";

export default function Production() {
  const [openProductionList, setOpenProductionList] = useState([]);
  const [upcomingProductionList, setUpcomingProductionList] = useState([]);

  useEffect(() => {
    getOpenProductionList();
  }, []);

  function getOpenProductionList() {
    axios.get("/openProductionList").then(({ data }) => {
      setOpenProductionList(data);
    });
  }

  return (
    <div className={styles.titleSection}>
      <h1>Production Runs</h1>
      <NewProductionForm getAll={getOpenProductionList} />
      <ProductionList
        list={openProductionList}
        getAll={getOpenProductionList}
      />
      <UpcomingProductionList list={upcomingProductionList} />
    </div>
  );
}
