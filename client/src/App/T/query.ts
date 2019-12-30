import { gql } from 'apollo-boost'

export default gql`
  query TT {
    result(laDistricts: [
      "E07000098"
      "E07000008"
      "E06000009"
      "E07000043"
      "E06000010"
      "E07000214"
      "E07000242"
    ]) {
      laDistrict {
        name 
        code
      }
      lsoas {
        lsoa {
          name,
          code,
        }
        individualPayBands {
          gini
        }
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
`