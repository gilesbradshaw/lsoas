import promiseCsv from '../../promise-csv'

export default () =>
  promiseCsv(
    '../data/Wards_December_2018_Names_and_Codes_in_the_United_Kingdom.csv',
  )
  .then(
    localAuthorities =>
      localAuthorities
        .slice(1)
        .map(
          lsoa => ({
            code: lsoa[0],
            name: lsoa[1],
          })
        )
  )
