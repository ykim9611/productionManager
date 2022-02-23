import React from 'react';
import PropTypes from 'prop-types';

const UpcomingProduction= ({ item }) => (
  <li>
    {item}
  </li>
)

UpcomingProduction.propTypes = {
  item: PropTypes.number
}

export default UpcomingProduction;