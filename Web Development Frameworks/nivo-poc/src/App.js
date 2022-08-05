import React, {Component} from 'react';
import Greet from './components/Greet';
import data from './components/Car.json';


class App extends Component{
  state={
    mydata:data
  }
  render(){
  return (
    <div className="App">
      <Greet name={this.state.mydata}/>
      
    </div>
  );
}
}

export default App;
