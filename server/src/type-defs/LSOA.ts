export default `
  type LSOA {
    id: String!
    name: String!
    region: Region!
    localAuthority: LocalAuthority!
    parliamentaryConstituency: ParliamentaryConstituency!
    ward: Ward!
    imds: IMDS!
    totalPopulation: Index!
    dependentChildren0_15: Index!
    population16_59: Index!
    population60: Index!
    workingAgePopulation: Index!
    individualPayBands: Bands!
  }
`
