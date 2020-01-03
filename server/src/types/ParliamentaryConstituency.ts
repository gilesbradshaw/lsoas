import Code from './Code'
import LSOA from './LSOA'
import GeneralElection from '../data/general-election/GeneralElection'

export default interface ParliamentaryConstituency {
  pc: Code;
  region: Code;
  localAuthority: Code;
  generalElections: GeneralElection[];
  lsoas: LSOA[]
}