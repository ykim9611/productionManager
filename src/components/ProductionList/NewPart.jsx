import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class NewPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editInput: false,
      newETD: "",
      received: this.props.part.received,
    };
  }

  setNewETD(event) {
    this.setState({
      newETD: event.target.value,
    });
  }

  handleEdit() {
    axios
      .patch("/editLeadTime", {
        totalETD: this.props.etd,
        newPartETD: this.state.newETD,
        partId: this.props.part.id,
        product_id: this.props.part.product_id,
      })
      .then(() => {
        if (this.state.newETD > this.props.etd) {
          axios.patch("/updateTotalLeadTime", {
            totalETD: this.props.etd,
            newPartETD: this.state.newETD,
            partId: this.props.part.id,
            product_id: this.props.part.product_id,
          });
        }
      })
      .then(() => this.props.getParts())
      .then(() => this.setState({ editInput: false }))
      .then(() => this.props.getAll());
  }

  handleReceived() {
    axios
      .patch("/updateReceived", {
        partId: this.props.part.id,
        received: !this.state.received,
      })
      .then(() => this.setState({ received: !this.state.received }))
      .then(() => this.props.getParts());
  }

  render() {
    return (
      <div>
        <div>
          Part Name: {this.props.part.partName}
          {" | "}
          EDD: {this.props.part.etd.slice(0, 10).split("-").join("/")}
          {" | "}
          Received:{" "}
          <input
            type="checkbox"
            id="received"
            checked={this.state.received}
            onChange={() => this.handleReceived()}
          />
          {" | "}
        </div>
        {this.state.editInput ? (
          <div>
            <label htmlFor="edit">Enter new ETD : </label>
            <input type="date" onChange={() => this.setNewETD(event)}></input>
            <button onClick={() => this.handleEdit()}>Submit</button>
          </div>
        ) : (
          <button onClick={() => this.setState({ editInput: true })}>
            Edit
          </button>
        )}
      </div>
    );
  }
}

// NewPart.propTypes = {
//   part: PropTypes.number
// }

export default NewPart;
