import React, {useState, useEffect} from 'react';
import data from './components/cars.json';
import Charts from './components/charts';
import * as d3 from 'd3';

const App=()=>{
  
const [merchants, setMerchants] = useState(false);

useEffect(() => {getMerchant();}, []);

function getMerchant() {
  fetch('http://localhost:3001')
    .then(response => {
      return response.text();
    })
    .then(data => {
      setMerchants(data);
    });
}



    return (
    <div className="App" align="center">
      {merchants}
      <Charts data={data}/>
    </div>
  );
} 

export default App;
