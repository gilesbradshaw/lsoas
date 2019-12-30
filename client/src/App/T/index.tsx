// @ts-nocheck
import React, { useMemo } from 'react'
//import { Chart } from 'react-charts'
import Chart from 'react-apexcharts'
import { useQuery } from '@apollo/react-hooks'
import query from './query'
import Pre from '../Pre'
import Scroll from '../Scroll'
const options = {
  fill: {
    type: 'solid',
  },
  markers: {
    size: 1,
    strokeWidth: 0,
  },
  tooltip: {
    shared: false,
    intersect: true,
  },
  legend: {
    show: false
  },
  xaxis: {
    type: 'numeric',
    min: 0,
    max: 12,
    tickAmount: 12
  },
  xaxis: {
    // min: 0,
    // max: 100,
    tickAmount: 10,
    labels: {
        formatter: function (val: string) {
            return parseFloat(val).toFixed(2)
        }
    }
  },
  yaxis: {
    tickAmount: 10,
    labels: {
      formatter: function (val: string) {
          return parseFloat(val).toFixed(1)
      }
    }
  },
}

export default () => {
  const { data } = useQuery(query)
  const series = useMemo(
    () => data
      ?.result
      ?.map(
        ({
          laDistrict: {
            name,
          },
          lsoas,
        }) => ({
          name,
          data: lsoas
            .map(
              ({
                individualPayBands: {
                  gini
                },
                imd: {
                  score,
                }
              }) => [
                gini * 100,
                score,
              ]
            )
        })
      ),
      [data || 1]
  )  
  return <Scroll>
    <div
      style={{
        width: '800px',
        height: '600px'
      }}
    >
      {series && <Chart
        options={options}
        series={series}
        type="scatter"
        width="800"
        height="600"
      />}
    </div>
    <Pre>
      {JSON.stringify(series, null, 2)}
    </Pre>
  </Scroll>
}