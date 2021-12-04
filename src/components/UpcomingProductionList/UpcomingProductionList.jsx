/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import UpcomingProduction from '../UpcomingProduction/UpcomingProduction.jsx';

const UpcomingProductionList = ({ list }) => (
  <ul>
    Suggested Production Runs
    {list.map((item) => <UpcomingProduction item={item}/>)}
  </ul>
)

UpcomingProductionList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.number)
}

export default UpcomingProductionList;