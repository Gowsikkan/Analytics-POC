import React from 'react'

const ScatterChart=(props)=> {
  return (
    <div>
<ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey={props.x} name="stature" unit="cm" />
          <YAxis type="number" dataKey={props.y} name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={props.data} fill="#8884d8" />
        </ScatterChart>
        </div>
  )
}
