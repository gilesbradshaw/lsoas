import Code from './Code'
import LSOA from './LSOA'
import EUReferendum from '../data/eu-ref/EUReferendum'

export default interface LocalAuthority {
  localAuthority: Code;
  region: Code;
  euReferendum?: EUReferendum;
  lsoas: LSOA[]
}