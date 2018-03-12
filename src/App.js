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
  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label>Height</label>
            <Range />
          </div>
          <div>
            <label>Weight</label>
            <Range />
          </div>
        </form>
        <br /><br />
        <output />
      </div>
    );
  }
}

export default App;
