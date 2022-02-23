import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./styles.css";
import Home from "./Home/Home.jsx";
import Production from "./Production/Production.jsx";

export default function App() {
  return (
    <div>
      <div className={styles.topNav}>
        <h1>Production Manager</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/production">Production Runs</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="production" element={<Production />} />
      </Routes>
    </div>
  );
}
