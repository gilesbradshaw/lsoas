import { gql } from 'apollo-server';

export default gql`
  type Index {
    score: Float!
    rank: Int!
    decile: Int!
  }
  type Code {
    name: String!
    code: String!
  }

  type Band {
    count: Int!
    percentage: Float!
  }
  type Bands {
    gini: Float!
    band01: Band!
    band02: Band!
    band03: Band!
    band04: Band!
    band05: Band!
    band06: Band!
    band07: Band!
    band08: Band!
    band09: Band!
    band10: Band!
  }
  type Decile {
    count: Int!
    percentage: Float!
  }
  type Deciles {
    decile01: Decile!
    decile02: Decile!
    decile03: Decile!
    decile04: Decile!
    decile05: Decile!
    decile06: Decile!
    decile07: Decile!
    decile08: Decile!
    decile09: Decile!
    decile10: Decile!
  }
  type Stat {
    gini: Float!
    mean: Float!
    totalCount: Int!
    deciles: Deciles
  }
  type IMDStats {
    imd: Stat!
    income: Stat!
    employment: Stat!
    educationSkillsAndTraining: Stat!
    healthDeprivationAndDisability: Stat!
    crime: Stat!
    barriersToHousingAndServices: Stat!
    livingEnvironment: Stat!
    incomeDeprivationAffectingChildren: Stat!
    incomeDeprivationAffectingOlderPeople: Stat!
    childrenAndYoungPeopleSubDomain: Stat!
    adultSkillsSubDomain: Stat!
    geographicalBarriersSubDomain: Stat!
    widerBarriersSubDomain: Stat!
    indoorsSubDomain: Stat!
    outdoorsSubDomain: Stat!
  }
  type Stats {
    imds: IMDStats!
    totalCount: Int!
    individualPayBands: Bands!
    totalPopulation: Stat!
    dependentChildren0_15: Stat!
    population16_59: Stat!
    population60: Stat!
    workingAgePopulation: Stat!
  }
  type IMDS {
    imd: Index!
    income: Index!
    employment: Index!
    educationSkillsAndTraining: Index!
    healthDeprivationAndDisability: Index!
    crime: Index!
    barriersToHousingAndServices: Index!
    livingEnvironment: Index!
    incomeDeprivationAffectingChildren: Index!
    incomeDeprivationAffectingOlderPeople: Index!
    childrenAndYoungPeopleSubDomain: Index!
    adultSkillsSubDomain: Index!
    geographicalBarriersSubDomain: Index!
    widerBarriersSubDomain: Index!
    indoorsSubDomain: Index!
    outdoorsSubDomain: Index!
  }
  type LSOA {
    id: String!
    name: String!
    region: Region!
    localAuthority: LocalAuthority!
    parliamentaryConstituency: ParliamentaryConstituency!
    ward: Ward!
    imds: IMDS!
    totalPopulation: Index!
    dependentChildren0_15: Index!
    population16_59: Index!
    population60: Index!
    workingAgePopulation: Index!
    individualPayBands: Bands!
  }
  type Region {
    id: String!
    name: String!
    localAuthorities: [LocalAuthority]!
    parliamentaryConstituencies: [ParliamentaryConstituency]!
    wards: [Ward]!
    lsoas: [LSOA]!
    stats: Stats
  }
  type LocalAuthority {
    id: String!
    name: String!
    region: Region!
    parliamentaryConstituencies: [ParliamentaryConstituency]!
    wards: [Ward]!
    lsoas: [LSOA]!
    stats: Stats
    percentLeave: Float!
    percentRemain: Float!
    leave: Int!
    remain: Int!
  }
  type ParliamentaryConstituency {
    id: String!
    name: String!
    region: Region!
    localAuthority: LocalAuthority!
    wards: [Ward]!
    lsoas: [LSOA]!
    stats: Stats
  }
  type Ward {
    id: String!
    name: String!
    region: Region!
    localAuthority: LocalAuthority!
    parliamentaryConstituency: ParliamentaryConstituency!
    lsoas: [LSOA]!
    stats: Stats
  }  
  type Query {
    """
    Test Message. 
    """
    regions: [Region]!
    localAuthorities: [LocalAuthority]!
    lsoas: [LSOA]!
    parliamentaryConstituencies: [ParliamentaryConstituency]!
    wards: [Ward]!
  }
`;
