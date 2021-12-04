/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
import NewPart from '../NewPart/NewPart.jsx';
import sampleData from '../../../sampleData/sampleData.js';

class OpenProduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partList: [9,10,11,12],
      expand: false,
    }
  }

  //make axios request for parts for specific id

  expandHandler() {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    return (
      <div>
        Product Name :
        {' '}
        {this.props.item.productName}
        {' | '}
        Estimated Delivery Date :
        {' '}
        {this.props.item.etd.slice(0,10).split('-').join('/')}
        {' | '}
        <button onClick={() => this.expandHandler()}>{this.state.expand ? "Collapse" : "Expand"}</button>
        {this.state.expand ?
          <ul>
            {sampleData.openPartsList.map((part) => <NewPart part={part}/>)}
          </ul> : null
        }
      </div>
    )
  }
}

// OpenProduction.propTypes = {
//   item: PropTypes.number
// }

export default OpenProduction;