import PartyResult from './PartyResult'

export default interface GeneralElection {
  date: Date;
  county: string;
  country: string;
  electorate: number;
  totalVotes: number;
  results: PartyResult[];
}