import Code from '../../types/Code'
import promiseCsv from '../../promise-csv'

export default () =>
  promiseCsv(
    '../data/Local_Authority_District_to_Region_December_2018_Lookup_in_England.csv',
  )
  .then(
    localAuthorityToRegion => 
      localAuthorityToRegion
        .slice(1)
        .reduce(
          (
            acc,
            lsoa,
          ) =>
            acc.set(
              lsoa[0],
              {
                code: lsoa[2],
                name: lsoa[3],
              },
            ),
          new Map<string, Code>(),
        )
  )
