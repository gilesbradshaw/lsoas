import Code from '../../types/Code'

export default interface EUReferendum {
  area: Code;
  region: Code;
  electorate: number;
  expectedBallots: number;
  verifiedBallotPapers: number;
  percentTurnout: number;
  votesCast: number;
  validVotes: number;
  remain: number;
  leave: number;
  rejectedBallots: number;
  noOfficialMark: number;
  votingForBothAnswers: number;
  writingOrMark: number;
  unmarkedOrVoid: number;
  percentRemain: number;
  percentLeave: number;
  percentRejected: number;
}
