const toNumbers: (index: number) => (arr: string[][]) => number[] =
  index =>
    arr =>
      arr
        .slice(1)
        .map(
          (lsoa: string[]): number =>
            parseInt(
              lsoa[index],
              10,
            ),
        )
        .sort(
          (a, b) => a - b,
        )

export default toNumbers
