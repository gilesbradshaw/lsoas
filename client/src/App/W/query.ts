import { gql } from 'apollo-boost'

export default gql`
  query WW {
    wards {
      name 
      id
      localAuthority {
        id
        euReferendum {
          percentRemain
          percentLeave
        }
      }
      stats {
        totalCount
        individualPayBands {
          gini
        }
        imds {
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
  }
`
