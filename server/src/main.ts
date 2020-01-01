///<reference types="webpack-env" />

import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers'
import typeDefs from './type-defs'
import lsoaToWard from './data/lsoa-to-ward'
import ward from './data/ward'
import wardToParliamentaryConsituency from './data/ward-to-parliamentary-constituency'
import individualPayAndBenefit from './data/pay-and-benefits/individual'
import householdPayAndBenefit from './data/pay-and-benefits/household'
import ruralUrbanClassification from './data/rural-urban-classification'
import lsoa from './data/lsoa'
import localAuthority from './data/local-authority'
import parliamentaryConstituency from './data/parliamentary-constituency'
import euReferendum from './data/eu-ref'

Promise
  .all([
    ruralUrbanClassification(),
    individualPayAndBenefit(),
    householdPayAndBenefit(),
    lsoaToWard(),
    wardToParliamentaryConsituency(),
    localAuthority(),
    parliamentaryConstituency(),
    ward(),
    euReferendum(),
  ])
  .then(
    ([
      ruralClassifications,
      individualPayAndBenefits,
      householdPayAndBenefits,
      lsoaToWards,
      wardToParliamentaryConstituencies,
      localAuthorities,
      parliamentaryConstituencies,
      wards,
      euReferendums,
    ]) =>
      lsoa({
        ruralClassifications,
        individualPayAndBenefits,
        householdPayAndBenefits,
        lsoaToWards,
        wardToParliamentaryConstituencies,
      })
        .then(
          lsoas => {
            console.log(euReferendums)
            const server = new ApolloServer({
              resolvers: resolvers({
                wards:
                  wards
                    .map(
                      (wd) => ({
                        wd,
                        lsoas: lsoas
                          .filter(
                            ({
                              ward
                            }) =>
                              ward.code === wd.code
                          )
                      })
                    ).filter(
                      ({
                        lsoas,
                      }) =>
                        lsoas.length,
                    ),
                parliamentaryConstituencies:
                  parliamentaryConstituencies
                    .map(
                      (pc) => ({
                        pc,
                        lsoas: lsoas
                          .filter(
                            ({
                              parliamentaryConstituency
                            }) =>
                              parliamentaryConstituency.code === pc.code
                          )
                      })
                    ).filter(
                      ({
                        lsoas,
                      }) =>
                        lsoas.length,
                    ),
                lsoas,
                localAuthorities:
                  localAuthorities
                    .map(
                      (la) => ({
                        la,
                        percentRemain: parseFloat(
                          (euReferendums
                            .find(
                              ({ area: { code }}) => {
                                console.log(la.code, code)
                                return la.code === code
                              },
                            ) || { percentRemain: '0' } as { percentRemain: string }).percentRemain
                        ),
                        percentLeave: parseFloat(
                          (euReferendums
                            .find(
                              ({ area: { code }}) => la.code === code,
                            ) || { percentLeave: '0' } as { percentLeave: string }).percentLeave
                        ),
                        lsoas: lsoas
                          .filter(
                            ({
                              laDistrict
                            }) =>
                              laDistrict.code === la.code
                          )
                      })
                    ).filter(
                      ({
                        lsoas,
                      }) =>
                        lsoas.length,
                    )
              }),
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
    )
    .catch(
      console.error
    )
