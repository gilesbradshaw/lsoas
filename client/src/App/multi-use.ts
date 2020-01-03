// @ts-nocheck
import color from 'color'

import { useMemo } from 'react'
import { useQuery } from '@apollo/react-hooks'

const seriesFunc = data =>
  data
    ?.map(
      ({
        name,
        localAuthorities,
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
          percentage01 + percentage02,
          //percentage01,
          // (totalCount/meanCount * 10),
          /*[
            percentLeave,
            percentRemain,
          ],*/
          //name,
        ]],
        __$stats: {
          totalCount,
          euref: {
            leave: localAuthorities
                .reduce(
                  (
                    acc,
                    {
                      euReferendum: {
                        leave,
                      }
                    }
                  ) =>
                    leave + acc,
                  0,
                ),
            remain: localAuthorities
              .reduce(
                (
                  acc,
                  {
                    euReferendum: {
                      remain,
                    }
                  }
                ) =>
                  remain + acc,
                0,
              ),
          }
        }
      })
    ) || []

export default ({
  query,
  get,
}) => {
  const { data } = useQuery(query)
  return useMemo(
    () => {
      const series = seriesFunc(
        get(data),
      )
      const meanCount = series
        .reduce(
          (acc, { __$stats: { totalCount } }) => acc + totalCount,
          0,
        )/series.length
      return {
        options: {
          title: {
            text: 'Leave/Remain for English Regions',
            align: 'center',
            style: {
              fontSize:  '20px',
            },
          },
          fill: {
            type: 'solid',
          },
          labels: [
            'label 1',
            'label 2',
          ],
          colors:
            series
            .map(
              ({
                __$stats: {
                  euref: {
                    leave,
                    remain,
                  }
                }
              }, ) => {
                if (!leave || !remain) {
                  return
                }
                if (leave < remain) {
                  return color('#FF0000').darken((leave / remain)/1.2).hex()
                }
                return color('#00FF00').darken((remain / leave)/1.2).hex()    
              }
            )
            .filter(x => x),
          annotations: {
            points: series
              .map(
                ({
                  name,
                  data: [ [x, y] ],
                  __$stats: {
                    euref: {
                      remain,
                      leave,
                    }
                  }
                }, seriesIndex) => ({
                  x,
                  y,
                  seriesIndex,
                  marker: {
                    size: 0,
                    strokeWidth: 0,
                    shape: "circle",
                    radius: 0,
                    OffsetX: 0,
                    OffsetY: 0,
                    cssClass: '',
                  },
                  label: {
                    borderColor: '#c2c2c2',
                    borderWidth: 1,
                    text: `${name} ${leave}/${remain}`,
                    textAnchor: 'middle',
                    offsetX: 0,
                    offsetY: -15,
                    style: {
                        background: '#fff',
                        color: '#777',
                        fontSize: '12px',
                        cssClass: 'apexcharts-point-annotation-label',
                        padding: {
                          left: 5,
                          right: 5,
                          top: 0,
                          bottom: 2,
                        }
                    },
                  },
                }) 
              )
          },
          markers: {
            strokeWidth: 0,
            size:
              series
                .map(
                  ({
                    __$stats: {
                      totalCount,
                    }
                  }) =>
                      50 * totalCount/meanCount,
                )
          },
          tooltip: {
            shared: false,
            intersect: true,
          },
          legend: {
            show: true
          },
          xaxis: {
            // min: 0,
            // max: 100,
            title: {
              text: 'gini of income (inequality)',
            },
            tickAmount: 10,
            labels: {
                formatter: function (val: string) {
                    return parseFloat(val).toFixed(2)
                }
            }
          },
          yaxis: {
            tickAmount: 10,
            title: {
              text: 'multiple deprivation: % areas in bottom quintile',
            },
            labels: {
              formatter: function (val: string) {
                  return parseFloat(val).toFixed(1)
              }
            }
          },
        },
        series,
        data,
      }
    }
  )
}
