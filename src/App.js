import React, { Component } from 'react';
import './App.css';
import Range from './Components/Range';
import Outputs from './Components/Outputs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height:170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

heightChange(height){
  this.setState({height:height}, function(){
    console.log(this.state);
  });
}

weightChange(weight){
  this.setState({weight:weight}, function(){
    console.log(this.state);
  });
}

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label>Height</label>
            <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
          </div>
          <div>
            <label>Weight</label>
            <Range value={this.state.weight} onChange={this.weightChange.bind(this)}/>
          </div>
        </form>
        <br /><br />
        <output />
      </div>
    );
  }
}

export default App;
