export default `
  type ParliamentaryConstituency {
    id: String!
    name: String!
    region: Region!
    localAuthority: LocalAuthority!
    wards: [Ward]!
    lsoas: [LSOA]!
    generalElections: [GeneralElection]
    stats: Stats
  }
`
