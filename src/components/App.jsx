import React from 'react';
import styles from './styles.css';
import NewItem from './NewItem/NewItem.jsx';
import NewProduction from './NewProduction/NewProduction.jsx';
import OpenProductionList from './OpenProductionList/OpenProductionList.jsx';
import UpcomingProductionList from './UpcomingProductionList/UpcomingProductionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openProductionList: [1,2,3,4],
      upcomingProductionList: [5,6,7,8]
    };
  }

  render() {
    return (
      <div className={styles.titleSection}>
        <h1>Production Manager</h1>
        <NewItem/>
        <NewProduction/>
        <OpenProductionList list={this.state.openProductionList}/>
        <UpcomingProductionList list={this.state.upcomingProductionList}/>
      </div>
    )
  }
}

export default App;