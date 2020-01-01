import promiseCsv from '../../promise-csv'
import LsoaToWard from '../lsoa-to-ward/LsoaToWard'
import PayBands from '../pay-and-benefits/PayBands'
import RuralClassification from '../rural-urban-classification/RuralClassification'
import WardToParliamentaryConstituency from '../ward-to-parliamentary-constituency/WardToParliamentaryConstituency'
import toNumbers from './infra/to-numbers'
import makeWard from './infra/make-ward'
import makePayBands from './infra/make-pay-bands'
import makeIndex from './infra/make-index'
import toIndex from './infra/to-index'

import LSOA from '../../types/LSOA'

export default ({
  ruralClassifications,
  individualPayAndBenefits,
  householdPayAndBenefits,
  lsoaToWards,
  wardToParliamentaryConstituencies,
}: {
  ruralClassifications: RuralClassification[];
  individualPayAndBenefits: PayBands[];
  householdPayAndBenefits: PayBands[];
  lsoaToWards: LsoaToWard[];
  wardToParliamentaryConstituencies: WardToParliamentaryConstituency[];
}) =>
  promiseCsv(
    '../data/File_7_-_All_IoD2019_Scores__Ranks__Deciles_and_Population_Denominators_3.csv',
  )
  .then(
    allIMD => {  
      const totalPopulation = toNumbers(52)(allIMD)
      const dependentChildren0_15 = toNumbers(53)(allIMD)
      const population16_59 = toNumbers(54)(allIMD)
      const population60 = toNumbers(55)(allIMD)
      const workingAgePopulation = toNumbers(56)(allIMD)
      return allIMD
        .slice(1)
        .map(
          (lsoa: string[], i: number, lsoas: string[][]): LSOA => ({
            lsoa: {
              code: lsoa[0],
              name: lsoa[1],
            },
            laDistrict: {
              code: lsoa[2],
              name: lsoa[3]
            },
            class: (ruralClassifications
              .find(
                ({
                  lsoa: {
                    code,
                  },
                }) => code === lsoa[0]
              ) as RuralClassification).class,
            ...makeWard(
              lsoa[0],
              lsoaToWards,
              wardToParliamentaryConstituencies,
            ),
            individualPayBands: makePayBands(
              (individualPayAndBenefits
                .find(
                  ({
                    lsoa: {
                      code,
                    },
                  }) => code === lsoa[0]
                ) as PayBands).bands,
                parseInt(lsoa[54], 10) + parseInt(lsoa[55], 10),
            ),
            householdPayBands: (
              householdPayAndBenefits
                .find(
                  ({
                    lsoa: {
                      code,
                    },
                  }) => code === lsoa[0]
                ) as PayBands).bands,
            imds: {
              imd: makeIndex(
                lsoa.slice(4)
              ),
              income: makeIndex(
                lsoa.slice(7)
              ),
              employment: makeIndex(
                lsoa.slice(10)
              ),
              educationSkillsAndTraining: makeIndex(
                lsoa.slice(13)
              ),
              healthDeprivationAndDisability: makeIndex(
                lsoa.slice(16)
              ),
              crime: makeIndex(
                lsoa.slice(19)
              ),
              barriersToHousingAndServices: makeIndex(
                lsoa.slice(22)
              ),
              livingEnvironment: makeIndex(
                lsoa.slice(25)
              ),
              incomeDeprivationAffectingChildren: makeIndex(
                lsoa.slice(28)
              ),
              incomeDeprivationAffectingOlderPeople: makeIndex(
                lsoa.slice(31)
              ),
              childrenAndYoungPeopleSubDomain: makeIndex(
                lsoa.slice(34)
              ),
              adultSkillsSubDomain: makeIndex(
                lsoa.slice(37)
              ),
              geographicalBarriersSubDomain: makeIndex(
                lsoa.slice(40)
              ),
              widerBarriersSubDomain: makeIndex(
                lsoa.slice(43)
              ),
              indoorsSubDomain: makeIndex(
                lsoa.slice(46)
              ),
              outdoorsSubDomain: makeIndex(
                lsoa.slice(49)
              ),  
            },
            totalPopulation: toIndex(
              totalPopulation,
              lsoa,
              lsoas,
              52,
            ),
            dependentChildren0_15: toIndex(
              dependentChildren0_15,
              lsoa,
              lsoas,
              53,
            ),
            population16_59: toIndex(
              population16_59,
              lsoa,
              lsoas,
              54,
            ),
            population60: toIndex(
              population60,
              lsoa,
              lsoas,
              55,
            ),
            workingAgePopulation: toIndex(
              workingAgePopulation,
              lsoa,
              lsoas,
              56,
            ),
          })
        ) //
      },
  )
