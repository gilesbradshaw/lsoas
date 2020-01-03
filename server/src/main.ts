///<reference types="webpack-env" />

import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers'
import typeDefs from './type-defs'
import lsoaToWard from './data/lsoa-to-ward'
import region from './data/region'
import localAuthorityToRegion from './data/local-authority-to-region'
import ward from './data/ward'
import wardToParliamentaryConsituency from './data/ward-to-parliamentary-constituency'
import individualPayAndBenefit from './data/pay-and-benefits/individual'
import householdPayAndBenefit from './data/pay-and-benefits/household'
import ruralUrbanClassification from './data/rural-urban-classification'
import lsoa from './data/lsoa'
import localAuthority from './data/local-authority'
import parliamentaryConstituency from './data/parliamentary-constituency'
import euReferendum from './data/eu-ref'
import Code from './types/Code'

import makeRegion from './infra/region'

localAuthorityToRegion()
  .then(
    localAuthorityToRegions =>
      Promise
        .all([
          ruralUrbanClassification(),
          individualPayAndBenefit(),
          householdPayAndBenefit(),
          region(),
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
            regions,
            lsoaToWards,
            {
              wardToLocalAuthorities,
              wardToParliamentaryConstituencies,
              parliamentaryConstituencyToLocalAuthorities,
            },
            localAuthorities,
            parliamentaryConstituencies,
            wards,
            euReferendums,
          ]) =>
            lsoa({
              localAuthorityToRegions,
              ruralClassifications,
              individualPayAndBenefits,
              householdPayAndBenefits,
              lsoaToWards,
              wardToParliamentaryConstituencies,
            })
              .then(
                lsoas => {
                  const server = new ApolloServer({
                    resolvers: resolvers({
                      regions:
                        regions
                          .map(
                            region =>
                              ({
                                rg: region,
                                lsoas: lsoas
                                  .filter(
                                    ({
                                      localAuthority
                                    }) => (
                                      localAuthorityToRegions
                                        .get(localAuthority.code) as Code
                                    ).code === region.code
                                  )
                              })
                          ),
                      localAuthorities:
                        localAuthorities
                          .map(
                            localAuthority => makeRegion(
                              localAuthorityToRegions,
                              {
                                localAuthority,
                                percentRemain: parseFloat(
                                  (euReferendums
                                    .find(
                                      ({ area: { code } }) =>
                                        localAuthority.code === code,
                                    ) || { percentRemain: '0' } as { percentRemain: string }).percentRemain
                                ),
                                percentLeave: parseFloat(
                                  (euReferendums
                                    .find(
                                      ({ area: { code } }) =>
                                        localAuthority.code === code,
                                    ) || { percentLeave: '0' } as { percentLeave: string }).percentLeave
                                ),
                                lsoas: lsoas
                                  .filter(
                                    ({
                                      localAuthority: laDistrict
                                    }) =>
                                      laDistrict.code === localAuthority.code
                                  )
                              },
                            )
                          ),
                      parliamentaryConstituencies:
                        parliamentaryConstituencies
                          .map(
                            (pc) => makeRegion(
                              localAuthorityToRegions,
                              {
                                pc,
                                localAuthority:
                                  parliamentaryConstituencyToLocalAuthorities
                                    .get(pc.code) as Code,
                                lsoas: lsoas
                                  .filter(
                                    ({
                                      parliamentaryConstituency,
                                      ...rest
                                    }) =>
                                      parliamentaryConstituency.code === pc.code,
                                  )
                              },
                            )
                          ).filter(
                            ({
                              lsoas,
                            }) =>
                              lsoas.length,
                          ),
                      wards:
                        wards
                          .map(
                            (wd) => makeRegion(
                              localAuthorityToRegions,
                              {
                                wd,
                                localAuthority:
                                  wardToLocalAuthorities
                                    .get(wd.code) as Code,
                                parliamentaryConstituency:
                                  wardToParliamentaryConstituencies
                                    .get(wd.code) as Code,
                                lsoas: lsoas
                                  .filter(
                                    ({
                                      ward,
                                    }) =>
                                      ward.code === wd.code
                                  )
                              },
                            )
                          ).filter(
                            ({
                              lsoas,
                            }) =>
                              lsoas.length,
                          ),
                      lsoas,
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
  )
  .catch(
    console.error
  )
