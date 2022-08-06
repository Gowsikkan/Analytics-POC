import React from 'react'
import { LineChart, RadarChart,PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, Pie,PieChart, Scatter,ScatterChart, AreaChart, ComposedChart,Tooltip,Legend,Area, Bar,BarChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';
  

const Chart=(props)=> {

  const groups = props.name.groupBy('Name');

console.log(groups);

  return(
    <div>
    <LineChart width={900} height={500} data={props.name}margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="Name" />
    <YAxis />
    <Tooltip />
    <Line dataKey="Displacement" stroke="violet" strokeWidth={0.9} />
    <Line dataKey="Horsepower" stroke="blue" strokeWidth={0.9}/>
    
    
  </LineChart>

  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={groups}>
          <PolarGrid />
          <PolarAngleAxis dataKey="Year" />
          <PolarRadiusAxis />
          <Radar dataKey="Horsepower" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>

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