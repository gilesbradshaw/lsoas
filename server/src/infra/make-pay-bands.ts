import gini from 'gini'
import LSOA from '../types/LSOA'
import CountedPayBand from '../types/CountedPayBand'
import GiniPayBands from '../types/GiniPayBands'
import bands from './bands'

const makePayBands: (
  payBands: string[],
  population: number,
) => GiniPayBands =
  (
    payBands,
    population,
  ) => {
    const countedPayBands = payBands
      .map(
        percent =>
          parseFloat(
            percent.replace('%', '')
          ),
      )
      .map(
        percentage => ({
          percentage,
          count: Math.round(
            (percentage/100) * population,
          )
        })
      )
      return {
        bands: countedPayBands,
        gini: gini.ordered(
          countedPayBands
            .slice(0,9)
            .reduce(
              (acc, val, index) => [
                ...acc,
                ...Array(val.count).fill(
                  (bands[index][1]-bands[index][0])/2
                )
              ],
              [] as number[],
            )
        ),
      }
  }

export default makePayBands
