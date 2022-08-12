import React from 'react'
import { LineChart, RadarChart,PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, Pie,PieChart, Scatter,ScatterChart, AreaChart, ComposedChart,Tooltip,Legend,Area, Bar,BarChart, Line, XAxis, YAxis, CartesianGrid} from 'recharts';

const Composed_Chart=(props)=> {
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
          <Area type="monotone" dataKey={props.y1} fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey={props.y2} barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey={props.y3} stroke="#ff7300" />
          <Scatter dataKey={props.y4} fill="red" />
        </ComposedChart>

    </div>
  )
}

export default Composed_Chart