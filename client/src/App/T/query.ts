import { gql } from 'apollo-boost'

export default gql`
  query TT {
    localAuthorities {
      name 
      id
      lsoas {
        name,
        id,
        individualPayBands {
          gini
        }
        imds {
          imd {
            score
            decile
          }
          income {
            score
            decile
          }
        }
      }
    }
  }
`