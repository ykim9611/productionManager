/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import OpenProduction from '../OpenProduction/OpenProduction.jsx'

const OpenProductionList = ({ list, getAll }) => (
  <div>
    <h2 className={styles.title}>
      Open Production Runs
    <div className={styles.edd}>
      * EDD: Estimated Delivery Date
    </div>
    </h2>
    <div className={styles.list}>
      {list.map((item) => item.openBool === 1 ? <OpenProduction key={item.id.toString()} item={item} getAll={getAll}/>: null)}
    </div>
    <h2>
      Closed Production Runs
    </h2>
    <div>
      {list.map((item) => item.openBool === 0 ? <OpenProduction key={item.id.toString()} item={item} getAll={getAll}/>: null)}
    </div>
  </div>
)

// OpenProductionList.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.number)
// }

export default OpenProductionList;