import Index from '../types/Index'

export default (arr: string[]): Index => ({
  score: parseFloat(
    arr[0],
  ),
  rank: parseInt(
    arr[1],
    10,
  ),
  decile: parseInt(
    arr[2],
    10,
  ),
})
