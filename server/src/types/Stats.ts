import Stat from './Stat'

export default interface Stats {
  imd: Stat;
  income: Stat;
  employment: Stat;
  educationSkillsAndTraining: Stat;
  healthDeprivationAndDisability: Stat;
  crime: Stat;
  barriersToHousingAndServices: Stat;
  livingEnvironment: Stat;
  incomeDeprivationAffectingChildren: Stat;
  incomeDeprivationAffectingOlderPeople: Stat;
  childrenAndYoungPeopleSubDomain: Stat;
  adultSkillsSubDomain: Stat;
  geographicalBarriersSubDomain: Stat;
  widerBarriersSubDomain: Stat;
  indoorsSubDomain: Stat;
  outdoorsSubDomain: Stat;
  totalPopulation: Stat;
  dependentChildren0_15: Stat;
  population16_59: Stat;
  population60: Stat;
  workingAgePopulation: Stat;
  totalCount: number;
}
