import Index from '../../types/Index'
import Decile from '../../types/Decile'

const decile: (index: number) => (indexes: Index[]) => () => Decile =
  index =>
    indexes =>
      () => {
        const filtered = indexes
          .filter(({ decile }) => decile === index)
        return {
          count: filtered
            .length,
          percentage: (
            filtered
              .length /
            indexes
              .length
          ) * 100,
        }
      }
export default decile
