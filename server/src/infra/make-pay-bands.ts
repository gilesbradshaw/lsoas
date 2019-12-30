import gini from 'gini'
import LSOA from '../types/LSOA'
import CountedPayBand from '../types/CountedPayBand'
import GiniPayBands from '../types/GiniPayBands'
import makeGini from './make-gini'

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
        gini: makeGini(
          countedPayBands,
        ),
      }
  }

export default makePayBands
