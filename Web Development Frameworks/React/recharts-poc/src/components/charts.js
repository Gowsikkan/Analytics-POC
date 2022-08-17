import React from 'react'
import Line_Chart from './lineChart';
import Area_Chart  from './areaChart';
import Bar_Chart from './barChart';
import Pie_Charts from './pieCharts';
import Scatter_Chart from './scatterChart';
import Composed_Chart from './composedChart';


const charts=({data})=> {
  return (
    <div>
        <Line_Chart 
          data={data} 
          x="Name" 
          y="Displacement" 
          width={500} 
          height={300}
        />
        <Area_Chart 
          data={data} 
          x="Origin" 
          y="Horsepower" 
          width={500} 
          height={300}
        />
        <Bar_Chart 
          data={data} 
          x="Name" 
          y="Weight_in_lbs" 
          width={1500} 
          height={300}
        />
        <Composed_Chart 
          data={data} 
          x="Origin" 
          y1="Displacement" 
          y2="Horsepower" 
          y3="Weight_in_lbs"
          width={500} 
          height={300}
        />
        <Scatter_Chart 
        data={data} 
          x="Name" 
          y="Displacement" 
          width={1500} 
          height={300}
        />
        <Pie_Charts 
          data={data} 
          x="Origin" 
          width={500} 
          height={300}
        />
    </div>
  )
}

export default charts