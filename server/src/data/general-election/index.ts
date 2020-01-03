import promiseCsv from '../../promise-csv'
import GeneralElection from './GeneralElection'
import format from './format-2017-2010'
import results from './results'
import get2019 from './get2019'

const get = (
  file: string,
  date: Date,
  format: Record<string, number>
) =>
  promiseCsv(
    file,
  )
  .then(
    ges =>
      ges
        .slice(4)
        .map(
          lsoa => ({
            parliamentaryConstituency: {
              name: lsoa[2],
              code: lsoa[1]
            },
            date,
            county: lsoa[3],
            country: lsoa[5],
            electorate: parseInt(lsoa[6].replace(',', ''), 10),
            totalVotes: parseInt(lsoa[47].replace(',', ''), 10),
            results: results(
              format,
              lsoa,
            ),            
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

const generalElection: () => Promise<Map<string, GeneralElection>[]> = () =>
  Promise.all([
    get2019(),
    get(
      '../data/GES/2017/data.csv',
      new Date(2017, 5, 8),
      format,
    ),
    get(
      '../data/GES/2015/data.csv',
      new Date(2015, 4, 7),
      format,
    ),
    get(
      '../data/GES/2010/data.csv',
      new Date(2010, 4, 6),
      format,
    ),
  ])

export default generalElection
