export default `
  type Ward {
    id: String!
    name: String!
    region: Region!
    localAuthority: LocalAuthority!
    parliamentaryConstituency: ParliamentaryConstituency!
    lsoas: [LSOA]!
    stats: Stats
  }
`
