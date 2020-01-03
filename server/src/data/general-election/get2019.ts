import promiseCsv from '../../promise-csv'
import GeneralElection from './GeneralElection'
import format from './format2019'
import results from './results'

export default () =>
  promiseCsv(
    '../data/GES/2019/HoC-GE2019-by-constituency.csv',
  )
  .then(
    ges =>
      ges
        .slice(1)
        .map(
          lsoa => ({
            parliamentaryConstituency: {
              name: lsoa[2],
              code: lsoa[0]
            },
            date: new Date(2019, 11, 12),
            county: lsoa[3],
            country: lsoa[5],
            electorate: parseInt(lsoa[14], 10),
            totalVotes: parseInt(lsoa[15], 10),
            results: results(
              format,
              lsoa,
            )     
          })
        )
        .reduce(
          (acc, 
            {
              parliamentaryConstituency,
              ...rest
            }
          ) => acc.set(parliamentaryConstituency.code, rest),
          new Map<string, GeneralElection>(),
        )
  )
