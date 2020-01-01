import decile from './decile'
import LSOA from '../../types/LSOA'
import Index from '../../types/Index'
import Stat from '../../types/Stat'
import gini from 'gini'

const stat: (fn: (imd: LSOA) => Index) =>
  (lsoas: LSOA[]) => Stat =
  fn => lsoas => {
    const indexes = lsoas
      .map(fn)
    return {
      mean: () => indexes
        .map(({ score }) => score)
        .reduce(
          (acc, val) => acc + val,
          0,
        ) / indexes.length,
      deciles: () => {
        return {
          decile01: decile(1)(indexes),
          decile02: decile(2)(indexes),
          decile03: decile(3)(indexes),
          decile04: decile(4)(indexes),
          decile05: decile(5)(indexes),
          decile06: decile(6)(indexes),
          decile07: decile(7)(indexes),
          decile08: decile(8)(indexes),
          decile09: decile(9)(indexes),
          decile10: decile(10)(indexes),
        }
      },
      gini: () =>
        gini
          .unordered(
            indexes
              .map(({ score }) => score)
          ),
      totalCount: () =>
        lsoas.length,
    }
  }

export default stat
