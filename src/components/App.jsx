import React from 'react';
import styles from './styles.css';
import axios from 'axios';
import NewItem from './NewItem/NewItem.jsx';
import NewProduction from './NewProduction/NewProduction.jsx';
import OpenProductionList from './OpenProductionList/OpenProductionList.jsx';
import UpcomingProductionList from './UpcomingProductionList/UpcomingProductionList.jsx';
import sampleData from '../../sampleData/sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openProductionList: [],
      upcomingProductionList: [5,6,7,8]
    };
  }
  componentDidMount() {
    this.getOpenProductionList();
  }

  getOpenProductionList() {
    axios.get('/openProductionList')
    .then(({data}) => this.setState({openProductionList: data}))
  }

  render() {
    return (
      <div className={styles.titleSection}>
        <h1>Production Manager</h1>
        <NewProduction getAll={this.getOpenProductionList.bind(this)}/>
        {/* <NewItem/> */}
        <OpenProductionList list={this.state.openProductionList} getAll={this.getOpenProductionList.bind(this)}/>
        {/* <UpcomingProductionList list={this.state.upcomingProductionList}/> */}
      </div>
    )
  }
}

export default App;