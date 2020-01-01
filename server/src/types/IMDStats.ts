import Stat from './Stat'
import GiniPayBands from './GiniPayBands'

export default interface IMDStats {
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
}
