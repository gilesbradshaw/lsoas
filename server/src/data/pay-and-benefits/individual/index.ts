import promiseCsv from '../../../promise-csv'
import PayBands from '../PayBands'

export default () =>
  promiseCsv(
    '../data/researchoutputsincomefrompayeandbenefits201516-individual.csv',
  )
  .then(
    individualPayAndBenefit =>
      individualPayAndBenefit
      .slice(7)
      .filter(
        (lsoa) => !lsoa[1]
      )
      .map(
        (lsoa): PayBands => ({
          lsoa: {
            code: lsoa[0],
            name: lsoa[1],
          },
          bands: lsoa.slice(3, 13)
        })
      )
  )

