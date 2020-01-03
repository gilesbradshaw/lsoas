import LSOA from '../types/LSOA'
import Region from '../types/Region'
import LocalAuthority from '../types/LocalAuthority'
import ParliamentaryConstituency from '../types/ParliamentaryConstituency'
import Ward from '../types/Ward'
import stats from './infra/stats'

export default ({
  regions,
  lsoas,
  localAuthorities,
  parliamentaryConstituencies,
  wards,
}: {
  regions: Region[];
  lsoas: LSOA[];
  localAuthorities: LocalAuthority[];
  parliamentaryConstituencies: ParliamentaryConstituency[];
  wards: Ward[];
}) => {
  const wardMap =
    wards
      .reduce(
        (
          acc,
          val,
        ) =>
          acc
            .set(
              val.wd.code,
              val
            ),
        new Map<string,Ward>(),
      )
  const laMap = localAuthorities
    .reduce(
      (
        acc,
        val,
      ) =>
        acc
          .set(
            val.localAuthority.code,
            val
          ),
      new Map<string,LocalAuthority>(),
    )
  const parliamentaryConstituencyMap =
    parliamentaryConstituencies
      .reduce(
        (
          acc,
          val,
        ) =>
          acc
            .set(
              val.pc.code,
              val,
            ),
        new Map<string,ParliamentaryConstituency>(),
      )
  const regionMap =
    regions
      .reduce(
        (
          acc,
          val,
        ) =>
          acc
            .set(
              val.rg.code,
              val,
            ),
        new Map<string,Region>(),
      )

  return {
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
      region: (
        {
          region,
        }: Ward
      ) =>
        regionMap
          .get(
            region
              .code
          ),
      localAuthority: (
        {
          localAuthority,
        }: Ward
      ) =>
        laMap
          .get(
            localAuthority
              .code
          ),
      parliamentaryConstituency: (
        {
          parliamentaryConstituency,
        }: Ward
      ) =>
        parliamentaryConstituencyMap
          .get(
            parliamentaryConstituency
              .code
          ),  
    },
    ParliamentaryConstituency: {
      name: ({ pc }: ParliamentaryConstituency) =>
        pc.name, 
      id:  ({ pc }: ParliamentaryConstituency) =>
        pc.code,
      region: (
        {
          region,
        }: ParliamentaryConstituency
      ) =>
        regionMap
          .get(
            region
              .code
          ),
      localAuthority: (
        {
          localAuthority,
        }: ParliamentaryConstituency
      ) =>
        laMap
          .get(
            localAuthority
              .code
          ),
      wards: ({ pc: { code } }: ParliamentaryConstituency) =>
        wards
          .filter(
            ({
              parliamentaryConstituency,
            }) =>
              parliamentaryConstituency.code === code
          ),
      lsoas: ({ lsoas }: ParliamentaryConstituency) =>
        lsoas,
      stats: ({ lsoas }: LocalAuthority) => stats({
        districtLsoas: lsoas,
      }),  
    },
    Region: {
      name: ({ rg: { name } }: Region) =>
        name, 
      id:  ({ rg: { code } }: Region) =>
        code,
      lsoas: ({ lsoas }: Region) =>
        lsoas,
      stats: ({ lsoas }: Region) => stats({
        districtLsoas: lsoas,
      }),
      localAuthorities: ({ rg: { code } }: Region) =>
        localAuthorities
          .filter(
            ({
              region,
            }) =>
              region && region.code === code
          ),
      parliamentaryConstituencies: ({ rg: { code } }: Region) =>
        parliamentaryConstituencies
          .filter(
            ({
              region,
            }) =>
              region.code === region.code
          ),
      wards: ({ rg: { code } }: Region) =>
        wards
          .filter(
            ({
              region,
            }) =>
              region.code === region.code
          )
    },
    LocalAuthority: {
      name: ({ localAuthority: { name } }: LocalAuthority) =>
        name, 
      id:  ({ localAuthority: { code } }: LocalAuthority) =>
        code,
      region: (
        {
          region,
        }: LocalAuthority
      ) =>
        regionMap
          .get(
            region
              .code
          ),
        parliamentaryConstituencies: ({ localAuthority: { code } }: LocalAuthority) =>
          parliamentaryConstituencies
            .filter(
              ({
                localAuthority,
              }) =>
                localAuthority.code === localAuthority.code
            ),
        wards: ({ localAuthority: { code } }: LocalAuthority) =>
          wards
            .filter(
              ({
                localAuthority,
              }) =>
                localAuthority.code === localAuthority.code
            ),
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
      region: (
        {
          region,
        }: LSOA
      ) =>
        laMap
          .get(
            region
              .code
          ),
      localAuthority: (
        {
          localAuthority: laDistrict,
        }: LSOA
      ) =>
        laMap
          .get(
            laDistrict
              .code
          ),
      parliamentaryConstituency: (
        {
          parliamentaryConstituency,
        }: LSOA
      ) =>
        parliamentaryConstituencyMap
          .get(
            parliamentaryConstituency
              .code
          ),
      ward: (
        {
          ward,
        }: LSOA
      ) =>
        wardMap
          .get(
            ward
              .code
          )
    },
    Query: {
      wards: () =>
        wards,
      parliamentaryConstituencies: () =>
        parliamentaryConstituencies,
      lsoas: () =>
        lsoas,
      localAuthorities: () =>
        localAuthorities,
      regions: () =>
        regions
    },
  }
}
