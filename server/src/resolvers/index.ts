import LSOA from '../types/LSOA'
import LocalAuthority from '../types/LocalAuthority'
import ParliamentaryConstituency from '../types/ParliamentaryConstituency'
import Ward from '../types/Ward'
import stats from './infra/stats'

export default ({
  lsoas,
  localAuthorities,
  parliamentaryConstituencies,
  wards,
}: {
  lsoas: LSOA[];
  localAuthorities: LocalAuthority[];
  parliamentaryConstituencies: ParliamentaryConstituency[];
  wards: Ward[];
}) => ({
  Ward: {
    name: ({ wd }: Ward) =>
      wd.name, 
    id:  ({ wd }: Ward) =>
      wd.code,
    lsoas: ({ lsoas }: Ward) =>
      lsoas,
      stats: ({ lsoas }: LocalAuthority) => stats({
        districtLsoas: lsoas,
      }),  
  },
  ParliamentaryConstituency: {
    name: ({ pc }: ParliamentaryConstituency) =>
      pc.name, 
    id:  ({ pc }: ParliamentaryConstituency) =>
      pc.code,
    lsoas: ({ lsoas }: ParliamentaryConstituency) =>
      lsoas,
      stats: ({ lsoas }: LocalAuthority) => stats({
        districtLsoas: lsoas,
      }),  
  },
  LocalAuthority: {
    name: ({ la }: LocalAuthority) =>
      la.name, 
    id:  ({ la }: LocalAuthority) =>
      la.code,
    lsoas: ({ lsoas }: LocalAuthority) =>
      lsoas,
    stats: ({ lsoas }: LocalAuthority) => stats({
      districtLsoas: lsoas,
    }),
  },
  LSOA: {
    name: ({ lsoa }: LSOA) =>
      lsoa.name, 
    id:  ({ lsoa }: LSOA) =>
      lsoa.code,
    localAuthority: ({ laDistrict }: LSOA) => {
      console.log('for', laDistrict)
      const la = localAuthorities
        .find(
          ({
            la
          }) => la.code === laDistrict.code,
        )
      if(!la) {
        console.log('cannot find', laDistrict)
      }
      return la
    }
  },
  Query: {
    wards: () =>
      wards,
    parliamentaryConstituencies: () =>
      parliamentaryConstituencies,
    lsoas: () =>
      lsoas,
    localAuthorities: () =>
      localAuthorities
  },
})
