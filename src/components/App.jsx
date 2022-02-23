import React, { useState, useEffect } from "react";
import styles from "./styles.css";
import axios from "axios";
import NewProductionForm from "./NewProductionForm/NewProductionForm.jsx";
import OpenProductionList from "./ProductionList/OpenProductionList.jsx";
import UpcomingProductionList from "./UpcomingProductionList/UpcomingProductionList.jsx";

export default function App() {
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
      <h1>Production Manager</h1>
      <NewProductionForm getAll={getOpenProductionList} />
      <OpenProductionList
        list={openProductionList}
        getAll={getOpenProductionList}
      />
      <UpcomingProductionList list={upcomingProductionList} />
    </div>
  );
}
