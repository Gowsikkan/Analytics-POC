import React, { Component } from 'react'
import { VictoryBar, VictoryChart,VictoryAxis,VictoryScatter,VictoryTheme,VictoryErrorBar, VictoryBoxPlot, VictoryVoronoi} from 'victory';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class Victory extends Component {
  render() {
    return (
      <div><VictoryChart width={350}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryBar
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
    <VictoryChart horizontal
  domainPadding={{ x: 8 }}
>
  <VictoryBar
    style={{
      data: { fill: "#c43a31" }
    }}
    data={[
      {x:1,y:2},
      {x:2,y:3},
      {x:3,y:4},
      {x:4,y:5},
      {x:5,y:6}]
    }
  />
  <VictoryScatter
    data={[
      {x:1,y:2},
      {x:2,y:3},
      {x:3,y:4},
      {x:4,y:5},
      {x:5,y:6}]}
  />
</VictoryChart>
<VictoryChart
  domainPadding={15}
  theme={VictoryTheme.material}
>
  <VictoryErrorBar
    data={[
      {x: 15, y: 35000, error: 0.2},
      {x: 20, y: 42000, error: 0.05},
      {x: 25, y: 30000, error: 0.1},
      {x: 30, y: 35000, error: 0.2},
      {x: 35, y: 22000, error: 0.15}
    ]}
    errorX={(datum) => datum.error * datum.x}
    errorY={(datum) => datum.error * datum.y}
  />
</VictoryChart>
<VictoryChart
  theme={VictoryTheme.material}
  domain={{ x: [0, 5], y: [0, 7] }}
>
  <VictoryVoronoi
    style={{ data: { stroke: "#c43a31", strokeWidth: 2 } }}
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 7 }
    ]}
  />
</VictoryChart>
<VictoryChart minDomain={{ y: 0 }}>
  <VictoryBoxPlot
  
    data={[
      { x: 1, y: [1.5, 2, 3, 5] },
      { x: 2, y: [3, 2, 8, 10] },
      { x: 3, y: [2, 8, 6, 5] },
      { x: 4, y: [1, 3, 2, 9] }
    ]}
  />
</VictoryChart>
   </div>
    )
  }
}

export default Victory;
