import Code from './Code'
import LSOA from './LSOA'

export default interface ParliamentaryConstituency {
  pc: Code;
  region: Code;
  localAuthority: Code;
  lsoas: LSOA[]
}