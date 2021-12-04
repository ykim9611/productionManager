import React from 'react';
import axios from 'axios';

class NewProduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
      partsName: '',
      leadTime: '',
      parts: [],
    }
  }

  buttonHandler() {
    this.setState({
      buttonClicked: true
    })
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onAddClick(event) {
    this.state.parts.push({partsName: this.state.partsName, leadTime: this.state.leadTime});
    event.preventDefault();
    this.setState({
    })
  }

  onSubmitClick() {
    event.preventDefault();
    axios.post('/addNewProductionRun', {
        productName: this.state.productName,
        annualSales: this.state.annualSales,
        parts: this.state.parts
    })
    .then(()=> this.setState({
        buttonClicked: false,
        productName: '',
        annualSales: '',
        partsName: '',
        leadTime: '',
        parts: []
    }))
    .then(()=> this.props.getAll());
  }

  render() {
    return (
      <div>
          {this.state.buttonClicked ?
              <div>
                <h3>Add New Production Run</h3>
                <form>
                    <label htmlFor='productName'>Product Name : </label>
                    <input type='text' id='productName' name='productName' onChange={() => this.handleInputChange(event)}/><br/>
                    <label htmlFor='annualSales'>Annual Sales # : </label>
                    <input type='text' id='annualSales' name='annualSales' onChange={() => this.handleInputChange(event)}/><br/>
                    Part Name: <input type='text' id='partsName' name='partsName' onChange={() => this.handleInputChange(event)}></input>
                    {' '}
                    Lead Time(days): <input type='text' id='leadTime' name='leadTime' onChange={() => this.handleInputChange(event)}></input>
                    <button onClick={()=>this.onAddClick(event)}>Add</button>
                    <ul>
                        {this.state.parts.map((part)=> <li key={part.partsName}>Part Name: {part.partsName} {' | '} Lead Time: {part.leadTime} days</li>)}
                    </ul>
                    <button onClick={()=>this.onSubmitClick()}>Submit</button>
                </form>
              </div>
              : <button onClick={() => this.buttonHandler()}>New Production Run</button>}
      </div>
    )
  }
}

export default NewProduction;