export default `
  type LocalAuthority {
    id: String!
    name: String!
    region: Region!
    parliamentaryConstituencies: [ParliamentaryConstituency]!
    wards: [Ward]!
    lsoas: [LSOA]!
    stats: Stats
    euReferendum: EUReferendum
  }
`
