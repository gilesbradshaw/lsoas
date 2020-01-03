import Code from './Code'
import LSOA from './LSOA'

export default interface Ward {
  wd: Code;
  region: Code;
  localAuthority: Code;
  parliamentaryConstituency: Code;
  lsoas: LSOA[]
}