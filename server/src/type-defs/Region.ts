export default `
  type Region {
    id: String!
    name: String!
    localAuthorities: [LocalAuthority]!
    parliamentaryConstituencies: [ParliamentaryConstituency]!
    wards: [Ward]!
    lsoas: [LSOA]!
    stats: Stats
  }
`
