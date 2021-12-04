/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import OpenProduction from '../OpenProduction/OpenProduction.jsx'

const OpenProductionList = ({ list, getAll }) => (
  <div>
    <h2>
      Open Production Runs
    </h2>
      {list.map((item) => item.openBool === 1 ? <OpenProduction key={item.id.toString()} item={item} getAll={getAll}/>: null)}
    <h2>
      Closed Production Runs
    </h2>
      {list.map((item) => item.openBool === 0 ? <OpenProduction key={item.id.toString()} item={item} getAll={getAll}/>: null)}
  </div>
)

// OpenProductionList.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.number)
// }

export default OpenProductionList;