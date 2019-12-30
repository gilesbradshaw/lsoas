import Index from './Index'
import GiniPayBands from './GiniPayBands'
import Code from './Code'

export default interface LSOA {
  lsoa: Code;
  laDistrict: Code;
  class: Code;
  individualPayBands: GiniPayBands,
  householdPayBands: string[],
  imd: Index;
  income: Index;
  employment: Index;
  educationSkillsAndTraining: Index;
  healthDeprivationAndDisability: Index;
  crime: Index;
  barriersToHousingAndServices: Index;
  livingEnvironment: Index;
  incomeDeprivationAffectingChildren: Index;
  incomeDeprivationAffectingOlderPeople: Index;
  childrenAndYoungPeopleSubDomain: Index;
  adultSkillsSubDomain: Index;
  geographicalBarriersSubDomain: Index;
  widerBarriersSubDomain: Index;
  indoorsSubDomain: Index;
  outdoorsSubDomain: Index;
  totalPopulation: Index;
  dependentChildren0_15: Index;
  population16_59: Index;
  population60: Index;
  workingAgePopulation: Index;
}