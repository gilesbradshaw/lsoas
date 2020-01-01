import Code from './Code'
import LSOA from './LSOA'

export default interface LocalAuthority {
  la: Code;
  percentRemain: number;
  percentLeave: number;
  lsoas: LSOA[]
}