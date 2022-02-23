/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import NewPart from "./NewPart.jsx";
import sampleData from "../../sampleData/sampleData.js";

class OpenProduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partsList: [],
      expand: false,
    };
  }

  getParts() {
    axios
      .get(`/partsList/${this.props.item.id}`)
      .then(({ data }) => {
        this.setState({
          partsList: data,
        });
        return data;
      })
      .then((data) => {
        this.updateOpenBool(data);
      });
  }

  expandHandler() {
    axios
      .get(`/partsList/${this.props.item.id}`)
      .then(({ data }) => {
        this.setState({
          expand: !this.state.expand,
          partsList: data,
        });
        return data;
      })
      .then((data) => {
        this.updateOpenBool(data);
      });
  }
  updateOpenBool(data) {
    data.every((part) => part.received === 1)
      ? (data.openBool = 0)
      : (data.openBool = 1);
    if (this.props.item.openBool !== data.openBool) {
      axios
        .patch("/updateBool", {
          openBool: data.openBool,
          id: this.props.item.id,
        })
        .then(() => this.props.getAll());
    }
  }
  render() {
    return (
      <div>
        <div>
          Product Name : {this.props.item.productName}
          {" | "}
          EDD : {this.props.item.etd.slice(0, 10).split("-").join("/")}
        </div>
        <div>
          <button onClick={() => this.expandHandler()}>
            {this.state.expand ? "Collapse" : "Expand"}
          </button>
          {this.state.expand ? (
            <div>
              {this.state.partsList.map((part) => (
                <NewPart
                  key={part.id.toString()}
                  part={part}
                  etd={this.props.item.etd.slice(0, 10)}
                  getAll={this.props.getAll}
                  getParts={this.getParts.bind(this)}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

// OpenProduction.propTypes = {
//   item: PropTypes.number
// }

export default OpenProduction;
