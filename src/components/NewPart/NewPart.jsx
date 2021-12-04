import React from 'react';
import PropTypes from 'prop-types';

const NewPart = ({part}) => (
  <li>
    Part Name :
    {' '}
    {part.partName}
    {' | '}
    Estimated Delivery Date :
    {' '}
    {part.etd.slice(0,10).split('-').join('/')}
    {' | '}
    <label htmlFor='received'>Received</label>
    <input type='checkbox' id='received'/>
    {' | '}
    <button>Edit</button>
  </li>
);

// NewPart.propTypes = {
//   part: PropTypes.number
// }

export default NewPart;