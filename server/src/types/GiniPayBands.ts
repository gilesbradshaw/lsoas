import CountedPayBand from './CountedPayBand'

export default interface GiniPayBands {
  bands: CountedPayBand[];
  gini: number;
}