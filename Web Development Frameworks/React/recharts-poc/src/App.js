import React, {Component} from 'react';
import data from './components/cars.json';
import LineChart from './components/LineChart';
import AreaChart  from './components/AreaChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import ScatterChart from './components/ScatterChart';
import ComposedChart from './components/ComposedChart';

class App extends Component {
  state={
    mydata:data,
  }
  render(){
    return (

    <div className="App">
      <LineChart name={this.state.mydata} x="Name" y="Displacement"/>
      <AreaChart/>
      <BarChart/>
      <ComposedChart/>
      <ScatterChart/>
      <PieChart/>
      
    </div>
  );
}}

export default App;





