import promiseCsv from '../../promise-csv'
import Code from '../../types/Code'
export default () =>
  promiseCsv(
    '../data/Lower_Layer_Super_Output_Area_2011_to_Ward_2018_Lookup_in_England_and_Wales_v3.csv',
  )
  .then(
    lsoaToWard =>
      lsoaToWard
          .slice(1)
          .reduce(
            (acc, lsoa) =>
              acc.set(
                lsoa[0],
                {
                  localAuthority: {
                    code: lsoa[5],
                    name: lsoa[6],
                  },
                  ward: {
                    code: lsoa[2],
                    name: lsoa[3],
                  },
                }
              ),
            new Map<
              string,
              {
                localAuthority: Code,
                ward: Code,
              }
            >()
          )
  )

