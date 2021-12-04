import React from 'react';
import PropTypes from 'prop-types';

const NewPart = ({part}) => (
  <li>{part}</li>
)

NewPart.propTypes = {
  part: PropTypes.number
}

export default NewPart;