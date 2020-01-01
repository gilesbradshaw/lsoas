import promiseCsv from '../../promise-csv'

export default () =>
  promiseCsv(
    '../data/Local_Authority_Districts_April_2019_Names_and_Codes_in_the_United_Kingdom.csv',
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

