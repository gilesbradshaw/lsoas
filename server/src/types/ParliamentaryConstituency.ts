import Code from './Code'
import LSOA from './LSOA'

export default interface ParliamentaryConstituency {
  pc: Code;
  lsoas: LSOA[]
}