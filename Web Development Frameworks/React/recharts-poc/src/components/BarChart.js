import React from 'react'

const BarChart=(props)=> {
  return (
    <div>
        <BarChart
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
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey={props.x} height={30} stroke="#8884d8" />
          <Bar dataKey={props.y} fill="#8884d8" />
          <Bar dataKey={props.y} fill="#82ca9d" />
        </BarChart>
    </div>
  )
}

export default BarChart