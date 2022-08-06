import React from 'react'
import { LineChart, RadarChart,PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, Pie,PieChart, Scatter,ScatterChart, AreaChart, ComposedChart,Tooltip,Legend,Area, Bar,BarChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';
  
const Greet=(props)=> {
  
const datas= props.name.map((names) =>{
  return(
    <div className='av'>
    </div>
  )
});
return(
    <div>
    <LineChart width={500} height={300} data={props.name}>
    <XAxis dataKey="bore"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="stroke" stroke="#82ca9d" />
  </LineChart>
</div>
)
}

export default Greet