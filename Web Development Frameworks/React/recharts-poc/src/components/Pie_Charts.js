import React from 'react'
import { Pie,PieChart, Tooltip} from 'recharts';


const Pie_Charts=(props)=> {
  return (
    <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey={props.x}
            isAnimationActive={false}
            data={props.data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
    </div>
  )
}
export default Pie_Charts