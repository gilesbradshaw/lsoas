import Deciles from './Deciles'
export default interface Stat {
  gini: () => number;
  mean: () => number;
  deciles: () => Deciles;
}