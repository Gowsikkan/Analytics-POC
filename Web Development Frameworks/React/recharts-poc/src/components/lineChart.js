import React from 'react'
import { LineChart, Tooltip,Legend,Line, XAxis, YAxis} from 'recharts';
  

const lineChart=(props)=> {
  return(
     <LineChart
          width={props.width}
          height={props.height}
          data={props.data}
          margin={{ top: 1, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey={props.x} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={props.y} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
) 
}

export default lineChart



