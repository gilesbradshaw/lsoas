import Index from './Index'
import GiniPayBands from './GiniPayBands'
import Code from './Code'

export default interface IMDS {
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
}