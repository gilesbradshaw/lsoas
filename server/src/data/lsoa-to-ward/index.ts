import promiseCsv from '../../promise-csv'
export default () =>
  promiseCsv(
    '../data/Lower_Layer_Super_Output_Area_2011_to_Ward_2018_Lookup_in_England_and_Wales_v3.csv',
  )
  .then(
    lsoaToWard =>
      lsoaToWard
          .slice(1)
          .map(
            lsoa => ({
              lsoa: {
                code: lsoa[0],
                name: lsoa[1],
              },
              ward: {
                code: lsoa[2],
                name: lsoa[3],
              }
            })
          )
  )

