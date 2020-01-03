import Index from './Index'
import GiniPayBands from './GiniPayBands'
import Code from './Code'
import IMDS from './IMDS'

export default interface LSOA {
  lsoa: Code;
  region: Code;
  localAuthority: Code;
  parliamentaryConstituency: Code;
  ward: Code;
  class: Code;
  individualPayBands: GiniPayBands,
  householdPayBands: string[],
  imds: IMDS;
  totalPopulation: Index;
  dependentChildren0_15: Index;
  population16_59: Index;
  population60: Index;
  workingAgePopulation: Index;
}