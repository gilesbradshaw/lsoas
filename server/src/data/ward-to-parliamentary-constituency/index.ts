import promiseCsv from '../../promise-csv'

export default () =>
  promiseCsv(
    '../data/Ward_to_Westminster_Parliamentary_Constituency_to_Local_Authority_District_December_2018_Lookup_in_the_United_Kingdom.csv',
  )
  .then(
    wardToParliamentaryConstituency =>
      wardToParliamentaryConstituency
        .slice(1)
        .map(
          lsoa => ({
            ward: {
              code: lsoa[0],
              name: lsoa[1],
            },
            parliamentaryConstituency: {
              code: lsoa[2],
              name: lsoa[3],
            }
          })
        )
  )

