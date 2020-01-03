import Code from '../../types/Code'
import promiseCsv from '../../promise-csv'

export default () =>
  promiseCsv(
    '../data/Ward_to_Westminster_Parliamentary_Constituency_to_Local_Authority_District_December_2018_Lookup_in_the_United_Kingdom.csv',
  )
  .then(
    wardToParliamentaryConstituency => ({
      wardToLocalAuthorities:
        wardToParliamentaryConstituency
          .slice(1)
          .reduce(
            (
              acc,
              lsoa,
            ) =>
              acc.set(
                lsoa[0],
                {
                  code: lsoa[4],
                  name: lsoa[5],
                },
              ),
            new Map<string, Code>(),
          ),
      wardToParliamentaryConstituencies:
        wardToParliamentaryConstituency
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
          ),
        parliamentaryConstituencyToLocalAuthorities:
          wardToParliamentaryConstituency
            .slice(1)
            .reduce(
              (
                acc,
                lsoa,
              ) =>
                acc.set(
                  lsoa[2],
                  {
                    code: lsoa[4],
                    name: lsoa[5],
                  },
                ),
              new Map<string, Code>(),
            ),
    }),
  )

