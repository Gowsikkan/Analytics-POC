import React, {Component} from 'react';
import data from './components/cars.json';
import Line_Chart from './components/lineChart';
import Area_Chart  from './components/areaChart';
import Bar_Chart from './components/barChart';
import Pie_Charts from './components/pieCharts';
import Scatter_Chart from './components/scatterChart';
import Composed_Chart from './components/composedChart';

class App extends Component {
  state={
    mydata:data,
  }
  render(){
    return (

    <div className="App" align="center">
      <Line_Chart data={this.state.mydata} x="Name" y="Displacement"/>
      <Area_Chart data={this.state.mydata} x="Origin" y="Horsepower"/>
      <Bar_Chart data={this.state.mydata} x="Name" y="Weight_in_lbs"/>
      <Composed_Chart data={this.state.mydata} x="Year" y1="Displacement" y2="Horsepower" y3="Accleratiom" y4="Weight_in_lbs"/>
      <Scatter_Chart data={this.state.mydata} x="Displacement" y="Horsepower"/>
      <Pie_Charts data={this.state.mydata} x="Cylinders"/>

    </div>
  );
}}

export default App;





