export default `
  type Query {
    """
    Test Message. 
    """
    regions: [Region]!
    localAuthorities: [LocalAuthority]!
    lsoas: [LSOA]!
    parliamentaryConstituencies: [ParliamentaryConstituency]!
    wards: [Ward]!
  }
`
