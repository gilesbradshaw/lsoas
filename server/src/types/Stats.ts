import Stat from './Stat'
import GiniPayBands from './GiniPayBands'
import IMDStats from './IMDStats'

export default interface Stats {
  imds: IMDStats;
  totalPopulation: Stat;
  dependentChildren0_15: Stat;
  population16_59: Stat;
  population60: Stat;
  workingAgePopulation: Stat;
  totalCount: number;
  individualPayBands: GiniPayBands,
}
