import { gql } from 'apollo-boost'

export default gql`
  query GG {
    result(laDistricts: [
      "E07000098"
      "E07000008"
      "E06000009"
    ]) {
      laDistrict {
        name 
        code
      }
      stats {
        totalCount
        individualPayBands {
          gini
        }
        imd {
          gini
          mean,
          deciles {
            decile01 {
              count
              percentage
            }
            decile02 {
              count
              percentage
            }
            decile03 {
              count
              percentage
            }
            decile04 {
              count
              percentage
            }
            decile05 {
              count
              percentage
            }
            decile06 {
              count
              percentage
            }
            decile07 {
              count
              percentage
            }
            decile08 {
              count
              percentage
            }
            decile09 {
              count
              percentage
            }
            decile10 {
              count
              percentage
            }
          }
        }
        income {
          gini
          mean,
          deciles {
            decile01 {
              count
              percentage
            }
            decile02 {
              count
              percentage
            }
            decile03 {
              count
              percentage
            }
            decile04 {
              count
              percentage
            }
            decile05 {
              count
              percentage
            }
            decile06 {
              count
              percentage
            }
            decile07 {
              count
              percentage
            }
            decile08 {
              count
              percentage
            }
            decile09 {
              count
              percentage
            }
            decile10 {
              count
              percentage
            }
          }
        }
      }
    }
  }
`
