import gini from 'gini'
import CountedPayBand from '../../../types/CountedPayBand'
import bands from './bands'

const makeGini: (countedPayBands: CountedPayBand[]) => number =
  countedPayBands => {
    const factor = 1000/countedPayBands
      .slice(0,9)
      .reduce(
        (acc, {
          count,
        }) => acc + count,
        0,
      )
    return gini.ordered(
      countedPayBands
        .slice(0,9)
        .reduce(
          (acc, val, index) => {
            const factoredCount = Math.ceil(val.count * factor)
            const step = ((bands[index][1]-bands[index][0])/factoredCount)
            return [
              ...acc,
              ...Array(factoredCount).fill(
                1,
              )
              .reduce(
                (a, v, i) => [
                  ...a,
                  bands[index][0] + (step * i)
                ],
                [] as number[],
              )
            ]
          },
          [] as number[],
        )
    )
}

export default makeGini
