import LSOA from './types/LSOA'
import Result from './types/Result'
import Index from './types/Index'
import Stat from './types/Stat'
import Decile from './types/Decile'
import gini from 'gini'
import reducePayBands from './infra/reduce-pay-bands'

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
const stat: (fn: (lsoa: LSOA) => Index) =>
  (lsoas: LSOA[]) => Stat = 
    fn => lsoas => {
      const indexes = lsoas
        .map(fn)
      return {
        mean: () => indexes
          .map(({ score }) => score)  
          .reduce(
            (acc, val) => acc + val,
            0,
          )/ indexes.length,
        deciles: () => {
          return {
            decile01: decile(1)(indexes),
            decile02: decile(2)(indexes),
            decile03: decile(3)(indexes),
            decile04: decile(4)(indexes),
            decile05: decile(5)(indexes),
            decile06: decile(6)(indexes),
            decile07: decile(7)(indexes),
            decile08: decile(8)(indexes),
            decile09: decile(9)(indexes),
            decile10: decile(10)(indexes),
          }
        },
        gini: () =>
          gini
            .unordered(
              indexes
                .map(({ score }) => score)
            ),
        totalCount: () =>
          lsoas.length,
      }
    }

export default (lsoasStart: LSOA[]) => ({
  Query: {
    result: (_: any, { laDistricts }: { laDistricts: string[] }): Result[] => {
      const lsoas = lsoasStart
        /*.filter(
          ({
            laDistrict : {
              code,
            }
          }) => laDistricts.includes(code)
        )*/
        /*.filter(
          ({
            class: {
              code,
            }
          }) => code === 'A1',
        )*/
      const all = lsoas
        .reduce(
          (
            acc,
            { laDistrict: { code }},
          ) => [
            ...acc,
            ...acc.find(c => c === code ) ? [] : [ code ],
          ],
          [] as string[],
        )
      return all
        .filter(
          laDistrict =>
            lsoas
            .find(
              ({
                laDistrict: lad,
              }) => lad.code === laDistrict,
            ),
        )
        .map(
          laDistrict => ({
            laDistrict: (lsoas
              .find(
                ({
                  laDistrict: lad,
                }) => lad.code === laDistrict
              ) as LSOA).laDistrict,
            districtLsoas: lsoas
              .filter(
                ({ laDistrict: lad }) =>
                  lad.code === laDistrict,
              )
          })
        )
        .map(
          ({
            laDistrict,
            districtLsoas,
          }) => ({
            laDistrict,
            lsoas: districtLsoas,
            stats: {
              individualPayBands: reducePayBands(
                districtLsoas,
                laDistrict,
              ),
              totalCount: districtLsoas.length,
              imd:
                stat(({ imd }) => imd)(districtLsoas),
              income:
                stat(({ income }) => income)(districtLsoas),
              employment:
                stat(({ employment }) => employment)(districtLsoas),
              educationSkillsAndTraining:
                stat(({ educationSkillsAndTraining }) => educationSkillsAndTraining)(districtLsoas),
              healthDeprivationAndDisability:
                stat(({ healthDeprivationAndDisability }) => healthDeprivationAndDisability)(districtLsoas),
              crime:
                stat(({ crime }) => crime)(districtLsoas),
              barriersToHousingAndServices:
                stat(({ barriersToHousingAndServices }) => barriersToHousingAndServices)(districtLsoas),
              livingEnvironment:
                stat(({ livingEnvironment }) => livingEnvironment)(districtLsoas),
              incomeDeprivationAffectingChildren:
                stat(({ incomeDeprivationAffectingChildren }) => incomeDeprivationAffectingChildren)(districtLsoas),
              incomeDeprivationAffectingOlderPeople:
                stat(({ incomeDeprivationAffectingOlderPeople }) => incomeDeprivationAffectingOlderPeople)(districtLsoas),
              childrenAndYoungPeopleSubDomain:
                stat(({ childrenAndYoungPeopleSubDomain }) => childrenAndYoungPeopleSubDomain)(districtLsoas),
              adultSkillsSubDomain:
                stat(({ adultSkillsSubDomain }) => adultSkillsSubDomain)(districtLsoas),
              geographicalBarriersSubDomain:
                stat(({ geographicalBarriersSubDomain }) => geographicalBarriersSubDomain)(districtLsoas),
              widerBarriersSubDomain:
                stat(({ widerBarriersSubDomain }) => widerBarriersSubDomain)(districtLsoas),
              indoorsSubDomain:
                stat(({ indoorsSubDomain }) => indoorsSubDomain)(districtLsoas),
              outdoorsSubDomain:
                stat(({ outdoorsSubDomain }) => outdoorsSubDomain)(districtLsoas),
              totalPopulation:
                stat(({ totalPopulation }) => totalPopulation)(districtLsoas),
              dependentChildren0_15:
                stat(({ dependentChildren0_15 }) => dependentChildren0_15)(districtLsoas),
              population16_59:
                stat(({ population16_59 }) => population16_59)(districtLsoas),
              population60:
                stat(({ population60 }) => population60)(districtLsoas),
              workingAgePopulation:
                stat(({ workingAgePopulation }) => workingAgePopulation)(districtLsoas),
            },
          })
        )
    },
  },
})
