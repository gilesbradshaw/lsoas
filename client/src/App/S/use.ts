// @ts-nocheck
import color from 'color'

import { useMemo } from 'react'
import { useQuery } from '@apollo/react-hooks'

const winner = percentages =>
  Object.entries(percentages)
    .sort(
      ([ , votes1 ], [ , votes2 ]) =>
        votes2 - votes1
    )[0][0]
const percent = (
  party,
  election,
) => {
  const result = election
    .results
    .find(
      ({ name }) => name === party
    )
  if (result) {
    return result.votes/election.totalVotes
  }
}

const percentages = election =>
  election.results
    .reduce(
      (acc, { name }) => ({
        ...acc,
        [name]: percent(name, election)
      }),
      {},
    )

export default ({
  query,
  get,
}) => {
  const { data } = useQuery(query)
  return useMemo(
    () => {
      const stats = get(data)
        ?.reverse()
        ?.map(
          ({
            name,
            localAuthority: {
              euReferendum: {
                percentLeave,
                percentRemain,
              } = {}
            } = {},
            generalElections,
            stats: {
              totalCount,
            },
          }) => ({
            name,
            percentLeave,
            percentRemain,
            totalCount,
            ge2010: percentages(
              generalElections
                .find(
                  ({
                    date,
                  }) => date === '2010-05-05',
                )
            ),
            ge2015: percentages(
              generalElections
                .find(
                  ({
                    date,
                  }) => date === '2015-05-06',
                )
            ),
            ge2017: percentages(
              generalElections
                .find(
                  ({
                    date,
                  }) => date === '2017-06-07',
                )
            ),
            ge2019:  percentages(
              generalElections
                .find(
                  ({
                    date,
                  }) => date === '2019-12-12',
                ),
            ),
          })
        )
        .filter(
          ({
            ge2010,
            ge2015,
          }) => ge2010 && ge2015
        ) || []
      const meanCount = stats
        .reduce(
          (acc, { totalCount }) => acc + totalCount,
          0,
        )/stats.length
      return {
        stats,
        options: {
          fill: {
            type: 'solid',
          },
          colors:
            stats
            .map(
              ({
                ge2010: pre,
                ge2019: now,
                name,
              }) => {
                const winnerPre = winner(pre)
                switch(winner(now)) {
                  case 'con':
                    if (winnerPre === 'con') {
                      return color('#0066ff').darken(.5).hex()
                    }
                    return '#0066ff'
                  case 'ld':
                    if (winnerPre === 'ld') {
                      return color('#ffcc00').darken(.5).hex()
                    }
                    return '#ffcc00'
                  case 'lab':
                    if (winnerPre === 'lab') {
                      return color('#ff0000').darken(.5).hex()
                    }
                    return '#ff0000'
                  case 'green':
                    if (winnerPre === 'green') {
                      return color('#00ff00').darken(.5).hex()
                    }
                    return '#00ff00'
                      
                  default:
                    return '#000000'
                }
              }
            )
            .filter(x => x),
          markers: {
            size: [4],
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
            min: 20,
            max: 80,
            title: {
              text: '% leave vote',
            },
            tickAmount: 10,
            labels: {
                formatter: function (val: string) {
                    return parseFloat(val)
                }
            }
          },
          yaxis: {
            title: {
              text: '% swing lab -> con',
            },
            tickAmount: 10,
            labels: {
              offsetX: 10,
              formatter: function (val: string) {
                  return parseFloat(val)
              }
            }
          },
          title: {
            text: 'GE2019 English results swing from 2010 - brighter colors are 2019 gains from 2010',
          },
        },
        series:stats
          ?.map(
            ({
              name,
              percentLeave,
              ge2010: pre,
              ge2019: now,
            }) => ({
              name,
              data: [[
                //16.4, 5.4
                percentLeave,
                //( CON(2017) − LAB(2017) − [ CON(2015) − LAB(2015) ] ) / 2
                ((pre.lab - pre.con) - (now.lab - now.con)) * 50,
                //mean,
                //percentage10,
                // percentage10 + percentage09,
                // percentage08 + percentage09 + percentage10,
                //percentage10 + percentage09 + percentage08 + percentage07 + percentage06,
                // percentage01 + percentage02 + percentage03 + percentage04 + percentage05,
                
                //percentage04 + percentage05 + percentage06 + percentage07,
                // percentage01 + percentage02 + percentage03,
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
