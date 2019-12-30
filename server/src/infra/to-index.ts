import Index from '../types/Index'

const toIndex: (
  totals: number[],
  lsoa: string[],
  lsoas: string[][],
  index: number,
) => Index = (
  totals,
  lsoa,
  lsoas,
  index,
  ) => ({
    score: parseInt(lsoa[index], 10),
    rank: totals
      .indexOf(
        parseInt(lsoa[index], 10),
      ),
    decile: Math
      .ceil(
        (
          totals
            .indexOf(
              parseInt(lsoa[index], 10),
            ) / lsoas.length
        ) * 10
      )
  })

export default toIndex
