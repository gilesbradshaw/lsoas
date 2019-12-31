///<reference types="webpack-env" />

import { ApolloServer } from 'apollo-server';
import gini from 'gini'
import LSOA from './types/LSOA'
import RuralClassification from './types/RuralClassification'
import PayBands from './types/PayBands'
import resolvers from './resolvers'
import typeDefs from './type-defs'
import promiseCsv from './promise-csv'
import makeIndex from './infra/make-index'
import toNumbers from './infra/to-numbers'
import toIndex from './infra/to-index'
import makePayBands from './infra/make-pay-bands'
import makeWard from './infra/make-ward'

Promise
  .all([
    promiseCsv(
      '../data/File_7_-_All_IoD2019_Scores__Ranks__Deciles_and_Population_Denominators_3.csv',
    ),
    promiseCsv(
      '../data/Rural_Urban_Classification_2011_of_Lower_Layer_Super_Output_Areas_in_England_and_Wales.csv',
    ),
    promiseCsv(
      '../data/researchoutputsincomefrompayeandbenefits201516-individual.csv',
    ),
    promiseCsv(
      '../data/researchoutputsincomefrompayeandbenefits201516-household.csv',
    ),
    promiseCsv(
      '../data/Lower_Layer_Super_Output_Area_2011_to_Ward_2017_Lookup_in_England_and_Wales.csv',
    ),
    promiseCsv(
      '../data/Ward_to_Westminster_Parliamentary_Constituency_to_Local_Authority_District_December_2017_Lookup_in_the_United_Kingdom.csv',
    ),
  ])
  .then(
    ([
      allIMD,
      ruralClassification,
      individualPayAndBenefit,
      householdPayAndBenefit,
      lsoaToWard,
      wardToParliamentaryConstituency,
    ]) => {
      const lsoaToWards =
        lsoaToWard
          .slice(1)
          .map(
            lsoa => ({
              lsoa: {
                code: lsoa[0],
                name: lsoa[1],
              },
              ward: {
                code: lsoa[2],
                name: lsoa[3],
              }
            })
          )
      const wardToParliamentaryConstituencies = 
        wardToParliamentaryConstituency
          .slice(1)
          .map(
            lsoa => ({
              ward: {
                code: lsoa[0],
                name: lsoa[1],
              },
              parliamentaryConstituency: {
                code: lsoa[2],
                name: lsoa[3],
              }
            })
          )
      const individualPayAndBenefits =
        individualPayAndBenefit
          .slice(7)
          .filter(
            (lsoa) => !lsoa[1]
          )
          .map(
            (lsoa): PayBands => ({
              lsoa: {
                code: lsoa[0],
                name: lsoa[1],
              },
              bands: lsoa.slice(3, 13)
            })
          )
      const householdPayAndBenefits =
        householdPayAndBenefit
          .slice(7)
          .filter(
            (lsoa) => !lsoa[1]
          )
          .map(
            (lsoa): PayBands => ({
              lsoa: {
                code: lsoa[0],
                name: lsoa[1],
              },
              bands: lsoa.slice(3, 13)
            })
          )
        
      const ruralClassifications =
          ruralClassification
            .slice(1)
            .map(
              (lsoa: string[]): RuralClassification => ({
                lsoa: {
                  code: lsoa[0],
                  name: lsoa[1],
                },
                class: {
                  code: lsoa[2],
                  name: lsoa[3],
                },
                fid: lsoa[4],
              })
            )
        const totalPopulation = toNumbers(52)(allIMD)
        const dependentChildren0_15 = toNumbers(53)(allIMD)
        const population16_59 = toNumbers(54)(allIMD)
        const population60 = toNumbers(55)(allIMD)
        const workingAgePopulation = toNumbers(56)(allIMD)
        const server = new ApolloServer({
          resolvers: resolvers(
            allIMD
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
                  /*individualPayBands: (
                    individualPayAndBenefits
                      .find(
                        ({
                          lsoa: {
                            code,
                          },
                        }) => code === lsoa[0]
                      ) as PayBands).bands,
                  */
                  householdPayBands: (
                    householdPayAndBenefits
                      .find(
                        ({
                          lsoa: {
                            code,
                          },
                        }) => code === lsoa[0]
                      ) as PayBands).bands,
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
              ),
          ),
          typeDefs,
        });

        server.listen()
          .then(({ url }) => console.log(`Server ready at ${url}. `));
        if (module.hot) {
          module.hot.accept();
          module.hot.dispose(() => server.stop());
        }
    }
  )
