import promiseCsv from '../../promise-csv'
import RuralClassification from './RuralClassification'

export default () =>
  promiseCsv(
    '../data/Rural_Urban_Classification_2011_of_Lower_Layer_Super_Output_Areas_in_England_and_Wales.csv',
  )
    .then(
      ruralClassification =>
        ruralClassification
        .slice(1)
        .map(
          (lsoa: string[]): RuralClassification => ({
            lsoa: {
              code: lsoa[0],
              name: lsoa[1],
            },
            class: {
              code: lsoa[2],
              name: lsoa[3],
            },
            fid: lsoa[4],
          })
        )
    )
