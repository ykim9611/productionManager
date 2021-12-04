/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import OpenProduction from '../OpenProduction/OpenProduction.jsx'

const OpenProductionList = ({ list }) => (
  <div>
    <h2>
      Open Production Runs
    </h2>
      {list.map((item) => <OpenProduction key={item.id.toString()} item={item}/>)}
  </div>
)

// OpenProductionList.propTypes = {
//   list: PropTypes.arrayOf(PropTypes.number)
// }

export default OpenProductionList;