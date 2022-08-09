import React from 'react'
import { LineChart, RadarChart,PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, Pie,PieChart, Scatter,ScatterChart, AreaChart, ComposedChart,Tooltip,Legend,Area, Bar,BarChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';
  


const Chart=(props)=> {
  return(
    <div align='center'>

     <LineChart
          width={500}
          height={300}
          data={props.name}
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

        <h1>hsdh</h1>
        <AreaChart
          width={500}
          height={400}
          data={props.name}
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

export default Chart



