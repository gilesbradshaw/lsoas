export default `
  type GeneralElection {
    date: Date!
    county: String!
    country: String!
    electorate: Int!
    totalVotes: Int!
    majority: Int!
    results: [PartyResult]!
  }
`
