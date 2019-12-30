import LSOA from './LSOA'
import Stats from './Stats'
import Code from './Code'

export default interface Result {
  laDistrict: Code;
  lsoas: LSOA[];
  stats: Stats;
}
