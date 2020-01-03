import Code from './Code'
import LSOA from './LSOA'

export default interface LocalAuthority {
  localAuthority: Code;
  region: Code;
  percentRemain: number;
  percentLeave: number;
  lsoas: LSOA[]
}