import React, { Component } from 'react'

import { ResponsiveBar } from '@nivo/bar'


const data=[
  {
    "country": "AD",
    "hot dog": 181,
    "hot dogColor": "hsl(355, 70%, 50%)",
    "burger": 156,
    "burgerColor": "hsl(266, 70%, 50%)",
    "sandwich": 185,
    "sandwichColor": "hsl(241, 70%, 50%)",
    "kebab": 113,
    "kebabColor": "hsl(139, 70%, 50%)",
    "fries": 120,
    "friesColor": "hsl(75, 70%, 50%)",
    "donut": 15,
    "donutColor": "hsl(15, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 59,
    "hot dogColor": "hsl(233, 70%, 50%)",
    "burger": 61,
    "burgerColor": "hsl(275, 70%, 50%)",
    "sandwich": 115,
    "sandwichColor": "hsl(309, 70%, 50%)",
    "kebab": 187,
    "kebabColor": "hsl(78, 70%, 50%)",
    "fries": 17,
    "friesColor": "hsl(252, 70%, 50%)",
    "donut": 93,
    "donutColor": "hsl(291, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 62,
    "hot dogColor": "hsl(166, 70%, 50%)",
    "burger": 39,
    "burgerColor": "hsl(64, 70%, 50%)",
    "sandwich": 198,
    "sandwichColor": "hsl(335, 70%, 50%)",
    "kebab": 3,
    "kebabColor": "hsl(15, 70%, 50%)",
    "fries": 125,
    "friesColor": "hsl(192, 70%, 50%)",
    "donut": 45,
    "donutColor": "hsl(216, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 65,
    "hot dogColor": "hsl(216, 70%, 50%)",
    "burger": 27,
    "burgerColor": "hsl(235, 70%, 50%)",
    "sandwich": 44,
    "sandwichColor": "hsl(49, 70%, 50%)",
    "kebab": 100,
    "kebabColor": "hsl(212, 70%, 50%)",
    "fries": 10,
    "friesColor": "hsl(216, 70%, 50%)",
    "donut": 103,
    "donutColor": "hsl(170, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 196,
    "hot dogColor": "hsl(28, 70%, 50%)",
    "burger": 197,
    "burgerColor": "hsl(102, 70%, 50%)",
    "sandwich": 146,
    "sandwichColor": "hsl(300, 70%, 50%)",
    "kebab": 96,
    "kebabColor": "hsl(169, 70%, 50%)",
    "fries": 7,
    "friesColor": "hsl(173, 70%, 50%)",
    "donut": 1,
    "donutColor": "hsl(230, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 93,
    "hot dogColor": "hsl(130, 70%, 50%)",
    "burger": 118,
    "burgerColor": "hsl(304, 70%, 50%)",
    "sandwich": 18,
    "sandwichColor": "hsl(78, 70%, 50%)",
    "kebab": 152,
    "kebabColor": "hsl(198, 70%, 50%)",
    "fries": 10,
    "friesColor": "hsl(273, 70%, 50%)",
    "donut": 91,
    "donutColor": "hsl(202, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 189,
    "hot dogColor": "hsl(349, 70%, 50%)",
    "burger": 186,
    "burgerColor": "hsl(138, 70%, 50%)",
    "sandwich": 79,
    "sandwichColor": "hsl(246, 70%, 50%)",
    "kebab": 28,
    "kebabColor": "hsl(29, 70%, 50%)",
    "fries": 30,
    "friesColor": "hsl(81, 70%, 50%)",
    "donut": 164,
    "donutColor": "hsl(308, 70%, 50%)"
  }
]



// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
)



class App extends Component {
  render() {
    return (
      <div>
        <MyResponsiveBar/>
      </div>
    )
  }
}

export default App