import React from 'react'
import { ReferenceLine, Brush, Tooltip, Legend, Bar, BarChart, XAxis, YAxis, CartesianGrid} from 'recharts';


const barChart=(props)=> {
  return (
    <div>
        <BarChart
          width={props.width}
          height={props.height}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={props.x}  type="category" allowDuplicatedCategory={false}  />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey={props.x} height={30} stroke="#8884d8" />
          <Bar dataKey={props.y} fill="#8884d8" />
        </BarChart>
    </div>
  )
}

export default barChart