import React from 'react'
import { Pie,PieChart, Tooltip} from 'recharts';


const pieCharts=(props)=> {
  return (
    <div>
        <PieChart 
            width={props.width}
            height={props.height} >
          <Pie
            dataKey={props.x}
            data={props.data}
            cx={240} 
            cy={150} 
            innerRadius={10} 
            outerRadius={120}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
    </div>
  )
}
export default pieCharts