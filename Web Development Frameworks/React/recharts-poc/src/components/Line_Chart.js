import React from 'react'
import { LineChart, Tooltip,Legend,Line, XAxis, YAxis} from 'recharts';
  

const Line_Chart=(props)=> {
  return(
     <LineChart
          width={500}
          height={300}
          data={props.data}
        >
          <XAxis dataKey={props.x} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={props.y} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
)
}

export default Line_Chart



