import PartyResult from './PartyResult'

const results: (
  format: Record<string,number>,
  cells: string[]
) => PartyResult[] = (
  format,
  cells,
) => Object.entries(format)
  .map(
    ([key, value]) =>
      cells[value] && {
        name: key,
        votes: parseInt(cells[value].replace(',', ''), 10)
      }
  )
  .filter(
    x => x
  ) as PartyResult[]

  export default results