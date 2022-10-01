import React from 'react'
import {AreaChart,Tooltip,Area,XAxis, YAxis, CartesianGrid} from 'recharts';


const areaChart=(props)=>{
return(
      <div>
        <AreaChart
          width={props.width}
          height={props.height}
          data={props.data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis interval={30} type="category"  dataKey={props.x} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={props.y} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        
      </div>
    )
}
export default areaChart