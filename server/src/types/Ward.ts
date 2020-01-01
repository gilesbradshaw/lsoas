import Code from './Code'
import LSOA from './LSOA'

export default interface Ward {
  wd: Code;
  lsoas: LSOA[]
}