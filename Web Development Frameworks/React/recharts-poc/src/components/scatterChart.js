import React from 'react'
import {Scatter,ScatterChart,Tooltip,XAxis, YAxis, CartesianGrid} from 'recharts';


const scatterChart=(props)=> {
  return (
    <div>
<ScatterChart
            width={props.width}
            height={props.height}
            margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey={props.x} allowDuplicatedCategory={false} />
          <YAxis type="number" dataKey={props.y} name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={props.data} fill="#8884d8" />
        </ScatterChart>
        </div>
  )
}
export default scatterChart
