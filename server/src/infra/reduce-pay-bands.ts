import LSOA from '../types/LSOA'
import Code from '../types/Code'
import GiniPayBands from '../types/GiniPayBands'
import makeGini from './make-gini'

const reducePayBands: (lsoas: LSOA[], code: Code) => GiniPayBands = 
  (
    lsoas,
    code,
   ) => {
    console.log(code)
    const bands = lsoas
      .map(
        ({
          individualPayBands: {
            bands,
          }
        }) =>
          bands
            .map(
              ({
                count,
              }) => count
            )
      )
      .reduce(
        (acc, val) => acc
          .map(
            (a, i) => a + val[i]
          )
      )
      .map(
        (count, i, is) => ({
          count,
          percentage: (count/is.reduce((a, b) => a + b)) * 100,
        })
      )
      return {
        bands,
        gini: makeGini(
          bands,
        )
      }
  }

export default reducePayBands
