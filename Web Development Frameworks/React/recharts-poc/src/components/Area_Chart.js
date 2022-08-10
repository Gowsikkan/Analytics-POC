import React, { Component } from 'react'
import { LineChart, RadarChart,PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, Pie,PieChart, Scatter,ScatterChart, AreaChart, ComposedChart,Tooltip,Legend,Area, Bar,BarChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';


const Area_Chart=(props)=>{
return(
      <div>
        <AreaChart
          width={500}
          height={400}
          data={props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Horsepower" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        
      </div>
    )
}
export default Area_Chart