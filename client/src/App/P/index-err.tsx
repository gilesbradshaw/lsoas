// @ts-nocheck
import React from 'react'
import Chart from 'react-apexcharts'


const options = {
  fill: {
    type: 'solid',
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 0,
        size: 50,
      },
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        size: 10
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        size: 20
      },
      {
        seriesIndex: 1,
        dataPointIndex: 0,
        size: 50
      },
      {
        seriesIndex: 1,
        dataPointIndex: 1,
        size: 10
      },
      {
        seriesIndex: 1,
        dataPointIndex: 2,
        size: 20
      },
    ],
  },
  legend: {
    show: false
  },
  xaxis: {
    type: 'numeric',
    min: 0,
    max: 3,
  },
  yaxis: {
    min: 0,
    max: 3,
  },
}

const series = [
  {
    name: 'series1',
    data: [
      [0,1],
      [2,2],
      [3,3],
    ]
  },
  {
    name: 'series2',
    data: [
      [3,0],
      [2,0],
      [1,0]
    ]
  }
]
export default () =>
  <div
    style={{
      width: '300px',
      height: '200px'
    }}
  >
    {/*<Chart data={chartData} axes={axes} />*/}
    <Chart
      options={options}
      series={series}
      type="scatter"
      width="300"
      height="200"
    />
  </div>
