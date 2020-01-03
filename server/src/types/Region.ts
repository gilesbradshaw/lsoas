import Code from './Code'
import LSOA from './LSOA'

export default interface Region {
  rg: Code;
  lsoas: LSOA[]
}