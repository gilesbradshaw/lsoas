import { gql } from 'apollo-boost'

export default gql`
  query GG {
    result(laDistricts: [
      "E07000098"
      "E07000008"
      "E06000009"
      "E07000043"
      "E06000010"
      "E07000214"
      "E07000242"
      "E09000001"
      "E09000002"
      "E09000003"
      "E09000004"
      "E09000005"
      "E09000006"
      "E09000007"
      "E09000008"
      "E09000009"
      "E09000010"
      "E09000011"
      "E09000012"
      "E09000013"
      "E09000014"
      "E09000015"
      "E09000016"
      "E09000017"
      "E09000018"
      "E09000019"
      "E09000020"
      "E09000031"
      "E09000032"
      "E09000033"
      "E09000034"
      "E09000035"
      "E09000036"
      "E09000037"
      "E09000038"
      "E09000039"
      "E09000040"
      "E09000041"
      "E09000042"
      "E09000043"
      "E09000044"
      "E09000045"
      "E09000046"
      "E09000047"
      "E09000048"
      "E09000049"
      "E09000050"
    ]) {
      laDistrict {
        name 
        code
      }
      stats {
        totalCount
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
