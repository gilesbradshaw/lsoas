// @ts-nocheck
import color from 'color'

import { useMemo } from 'react'
import { useQuery } from '@apollo/react-hooks'

export default ({
  query,
  get,
}) => {
  const { data } = useQuery(query)
  return useMemo(
    () => {
      const stats = get(data)
        ?.map(
          ({
            name,
            localAuthority: {
              percentLeave,
              percentRemain,
            } = {},
            stats: {
              totalCount,
            },
          }) => ({
            //percentLeave,
            //percentRemain,
            totalCount,
          })
        ) || []
      const meanCount = stats
        .reduce(
          (acc, { totalCount }) => acc + totalCount,
          0,
        )/stats.length
      return {
        options: {
          fill: {
            type: 'solid',
          },
          colors1:
            stats
            .map(
              ({
                percentLeave,
                percentRemain,
              }, ) => {
                if (!percentLeave || !percentRemain) {
                  return
                }
                if (percentLeave < percentRemain) {
                  return color('#FF0000').darken((percentLeave / percentRemain)/1.2).hex()
                }
                return color('#00FF00').darken((percentRemain / percentLeave)/1.2).hex()    
              }
            )
            .filter(x => x),
          markers: {
            strokeWidth: 0,
            size:
              stats
                .map(
                  ({
                    totalCount,
                  }, i) =>
                      3 * totalCount/meanCount,
                )
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
        },
        series: get(data)
          ?.map(
            ({
              name,
              localAuthority: {
                percentLeave,
                percentRemain,
              } = {},
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
                //mean,
                //percentage10,
                // percentage10 + percentage09,
                // percentage08 + percentage09 + percentage10,
                //percentage10 + percentage09 + percentage08 + percentage07 + percentage06,
                // percentage01 + percentage02 + percentage03 + percentage04 + percentage05,
                
                //percentage04 + percentage05 + percentage06 + percentage07,
                percentage01 + percentage02 + percentage03,
                //percentage01,
                // (totalCount/meanCount * 10),
                /*[
                  percentLeave,
                  percentRemain,
                ],*/
              ]],
            })
          ) || []
      }
    }
  )
}
