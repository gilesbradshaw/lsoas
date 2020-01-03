import Code from '../../../types/Code'

const makeParliamentaryConstituency: (
  ward: Code,
  wardToParliamentaryConstituencies: Map<string, Code>,
) => {
  ward: Code;
  parliamentaryConstituency: Code;
} = (
  ward,
  wardToParliamentaryConstituencies
) => {
  return {
    ward,
    parliamentaryConstituency:
      wardToParliamentaryConstituencies
        .get(
          ward.code,
        ) as Code,
  }
}

export default makeParliamentaryConstituency
