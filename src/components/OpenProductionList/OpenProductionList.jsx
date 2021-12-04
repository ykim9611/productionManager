/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import OpenProduction from '../OpenProduction/OpenProduction.jsx'

const OpenProductionList = ({ list }) => (
  <ul>
    Open Production Runs
    {list.map((item) => <OpenProduction item={item}/>)}
  </ul>
)

OpenProductionList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.number)
}

export default OpenProductionList;