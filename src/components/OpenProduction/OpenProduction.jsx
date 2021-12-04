/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import NewPart from '../NewPart/NewPart.jsx';

class OpenProduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partList: [9,10,11,12]
    }
  }

  render() {
    return (
      <li>
          {this.props.item}
        <ul>
          {this.state.partList.map((part) => <NewPart part={part}/>)}
        </ul>
      </li>
    )
  }
}

OpenProduction.propTypes = {
  item: PropTypes.number
}

export default OpenProduction;