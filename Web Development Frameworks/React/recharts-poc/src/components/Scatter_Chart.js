import React from 'react'
import { LineChart, RadarChart,PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, Pie,PieChart, Scatter,ScatterChart, AreaChart, ComposedChart,Tooltip,Legend,Area, Bar,BarChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';


const Scatter_Chart=(props)=> {
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
export default Scatter_Chart