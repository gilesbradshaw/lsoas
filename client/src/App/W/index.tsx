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
    size: [6, 0]
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
      ?.wards
      ?.map(
        ({
          name,
          stats: {
            totalCount,
            individualPayBands: {
              gini,
            },
            imds : {
              income: {
                // gini,
                mean,
                deciles: {
                  decile01: {
                    percentage: percentage01,
                  },
                  decile02: {
                    percentage: percentage02,
                  },
                  decile03: {
                    percentage: percentage03,
                  },
                  decile04: {
                    percentage: percentage04,
                  },
                  decile05: {
                    percentage: percentage05,
                  },
                  decile06: {
                    percentage: percentage06,
                  },
                  decile07: {
                    percentage: percentage07,
                  },
                  decile08: {
                    percentage: percentage08,
                  },
                  decile09: {
                    percentage: percentage09,
                  },
                  decile10: {
                    percentage: percentage10,
                  },
                }
              }
            }
          }
        }) => ({
          name,
          data: [[
            //16.4, 5.4
            gini * 100,
            mean,
            //percentage10,
            // percentage10 + percentage09,
            // percentage08 + percentage09 + percentage10,
            //percentage10 + percentage09 + percentage08 + percentage07 + percentage06,
            // percentage01 + percentage02 + percentage03 + percentage04 + percentage05,
            
            //percentage04 + percentage05 + percentage06 + percentage07,
            //percentage01 + percentage02 + percentage03,
            //percentage01,
            // totalCount,
          ]],
        })
      ),
      [data || 1]
  )
  
  return <Scroll>
    <div
      style={{
        width: '1600px',
        height: '800px'
      }}
    >
      {/*<Chart data={chartData} axes={axes} />*/}
      {series && <Chart
        options={options}
        series={series}
        type="scatter"
        width="1600"
        height="800"
      />}
    </div>
    <Pre>
      {JSON.stringify(series, null, 2)}
    </Pre>
  </Scroll>
}