import React from 'react'

const PieChart=(props)=> {
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
