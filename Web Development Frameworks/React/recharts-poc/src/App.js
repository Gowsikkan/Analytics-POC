import React, {Component} from 'react';
import Chart from './components/Chart';
import data from './components/cars.json';

class App extends Component {
  state={
    mydata:data
  }
  render(){
  return (
    <div className="App">
      <Chart name={this.state.mydata}/>
      
    </div>
  );
}
}

export default App;
