import promiseCsv from '../../promise-csv'

export default () =>
  promiseCsv(
    '../data/Regions_December_2018_Names_and_Codes_in_England.csv',
  )
  .then(
    regions =>
    regions
        .slice(1)
        .map(
          lsoa => ({
            code: lsoa[0],
            name: lsoa[1],
          })
        )
  )
