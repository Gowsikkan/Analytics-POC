import React from 'react'
import { LineChart, Tooltip,Legend,Line, XAxis, YAxis, CartesianGrid} from 'recharts';
  
const centerX=900;
const centerY=900;

const Line_Chart=(props)=> {
  return(
      <g transform={`translate(${centerX},${centerY})`}>
     <LineChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.x} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={props.y} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </g>
)
}

export default Line_Chart



