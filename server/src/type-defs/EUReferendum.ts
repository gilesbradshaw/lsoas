export default `
  type EUReferendum {
    electorate: Int!
    expectedBallots: Int!
    verifiedBallotPapers: Int!
    percentTurnout: Float!
    votesCast: Int!
    validVotes: Int!
    remain: Int!
    leave: Int!
    rejectedBallots: Int!
    noOfficialMark: Int!
    votingForBothAnswers: Int!
    writingOrMark: Int!
    unmarkedOrVoid: Int!
    percentRemain: Float!
    percentLeave: Float!
    percentRejected: Float!
  }
`
