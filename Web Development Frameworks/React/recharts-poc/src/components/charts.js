import React from 'react'
import Line_Chart from './lineChart';
import Area_Chart  from './areaChart';
import Bar_Chart from './barChart';
import Pie_Charts from './pieCharts';
import Scatter_Chart from './scatterChart';
import Composed_Chart from './composedChart';

const charts=({data})=> {
  
  return (
    <g>
      <div class="header">
        <h1>Dashboard</h1>
      </div>
    <div class="mainView">
        <Line_Chart 
          data={data} 
          x="Name" 
          y="Displacement" 
          width={670} 
          height={300}
        />
        <Area_Chart 
          data={data} 
          x="Origin" 
          y="Horsepower" 
          width={670} 
          height={300}
        />
    </div>
    <div class="mainView">
      
    <Bar_Chart 
          data={data} 
          x="Name" 
          y="Weight_in_lbs" 
          width={670} 
          height={300}
        />
        <Composed_Chart 
          data={data} 
          x="Origin" 
          y1="Displacement" 
          y2="Horsepower" 
          y3="Weight_in_lbs"
          width={670} 
          height={300}
        />
    </div>
    <div class='mainView'>
      
    <Scatter_Chart 
        data={data} 
          x="Name" 
          y="Displacement" 
          width={670} 
          height={300}
        />
        <Pie_Charts 
          data={data} 
          x="Displacement" 
          width={670} 
          height={300}
        />
    </div>
    </g>
  )
}

export default charts
