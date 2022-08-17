import React, {Component} from 'react';
import data from './components/cars.json';
import Charts from './components/charts';

class App extends Component {
  state={
    mydata:data,
  }
  render(){
    return (
    <div className="App" align="center">
      <Charts data={this.state.mydata}/>
    </div>
  );
}}

export default App;