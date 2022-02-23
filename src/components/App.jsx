import React, { useState, useEffect } from "react";
import styles from "./styles.css";
import axios from "axios";
import NewProduction from "./NewProductionForm/NewProduction.jsx";
import OpenProductionList from "./ProductionList/OpenProductionList.jsx";
import UpcomingProductionList from "./UpcomingProductionList/UpcomingProductionList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openProductionList: [],
      upcomingProductionList: [],
    };
  }
  componentDidMount() {
    this.getOpenProductionList();
  }

  getOpenProductionList() {
    axios.get("/openProductionList").then(({ data }) => {
      console.log(data);
      this.setState({ openProductionList: data });
    });
  }

  render() {
    return (
      <div className={styles.titleSection}>
        <h1>Production Manager</h1>
        <NewProduction getAll={this.getOpenProductionList.bind(this)} />
        <OpenProductionList
          list={this.state.openProductionList}
          getAll={this.getOpenProductionList.bind(this)}
        />
        {/* <UpcomingProductionList list={this.state.upcomingProductionList}/> */}
      </div>
    );
  }
}

// function App() {
//   const [openProductionList, setOpenProductionList] = useState([]);

//   useEffect(() => {
//     getOpenProductionList();
//   }, []);

//   function getOpenProductionList() {
//     axios.get("/openProductionList").then(({ data }) => {
//       console.log(data);
//       setOpenProductionList(data);
//     });
//   }
//   return (
//     <div className={styles.titleSection}>
//       <h1>Production Manager</h1>
//       <NewProduction getAll={getOpenProductionList} />
//       <OpenProductionList
//         list={openProductionList}
//         getAll={getOpenProductionList}
//       />
//       {/* <UpcomingProductionList list={this.state.upcomingProductionList}/> */}
//     </div>
//   );
// }

export default App;
