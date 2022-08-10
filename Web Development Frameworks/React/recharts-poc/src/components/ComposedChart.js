import React from 'react'

const ComposedChart=(props)=> {
  return (
    <div>
        <ComposedChart
          width={500}
          height={400}
          data={props.data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey={props.x} scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey={props.y} barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey={props.y} stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>

    </div>
  )
}

export default ComposedChart