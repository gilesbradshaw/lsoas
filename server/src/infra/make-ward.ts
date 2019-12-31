import WardToParliamentaryConstituency from '../types/WardToParliamentaryConstituency'
import LsoaToWard from '../types/LsoaToWard'
import Code from '../types/Code'

const makeWard: (
  lsoa: string,
  lsoaToWards: LsoaToWard[],
  wardToParliamentaryConstituencies: WardToParliamentaryConstituency[],
) => {
  ward: Code;
  parliamentaryConstituency: Code;
} = (
  lsoa,
  lsoaToWard,
  wardToParliamentaryConstituency
) => {
  const ward = (lsoaToWard
    .find(
      ({
        lsoa: {
          code,
        },
      }) => code === lsoa
    ) as LsoaToWard).ward
  const parliamentaryConstituency = (wardToParliamentaryConstituency
    .find(
      ({
        ward: {
          code,
        },
      }) => code === ward.code
    ) as WardToParliamentaryConstituency).parliamentaryConstituency
  return {
    ward,
    parliamentaryConstituency,
  }
}

export default makeWard
