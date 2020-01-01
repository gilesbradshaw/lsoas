import reducePayBands from './reduce-pay-bands'
import stat from './stat'

export default (
  {
    districtLsoas,
  }: {
    districtLsoas: any[],
  }
) => {
  return ({
    individualPayBands: reducePayBands(
      districtLsoas,
    ),
    totalCount: districtLsoas.length,
    imds: {
      imd:
        stat(({ imds: { imd } }) => imd)(districtLsoas),
      income:
        stat(({ imds: { income } }) => income)(districtLsoas),
      employment:
        stat(({ imds: { employment } }) => employment)(districtLsoas),
      educationSkillsAndTraining:
        stat(({ imds: { educationSkillsAndTraining } }) => educationSkillsAndTraining)(districtLsoas),
      healthDeprivationAndDisability:
        stat(({ imds: { healthDeprivationAndDisability } }) => healthDeprivationAndDisability)(districtLsoas),
      crime:
        stat(({ imds: { crime } }) => crime)(districtLsoas),
      barriersToHousingAndServices:
        stat(({ imds: { barriersToHousingAndServices } }) => barriersToHousingAndServices)(districtLsoas),
      livingEnvironment:
        stat(({ imds: { livingEnvironment } }) => livingEnvironment)(districtLsoas),
      incomeDeprivationAffectingChildren:
        stat(({ imds: { incomeDeprivationAffectingChildren } }) => incomeDeprivationAffectingChildren)(districtLsoas),
      incomeDeprivationAffectingOlderPeople:
        stat(({ imds: { incomeDeprivationAffectingOlderPeople } }) => incomeDeprivationAffectingOlderPeople)(districtLsoas),
      childrenAndYoungPeopleSubDomain:
        stat(({ imds: { childrenAndYoungPeopleSubDomain } }) => childrenAndYoungPeopleSubDomain)(districtLsoas),
      adultSkillsSubDomain:
        stat(({ imds: { adultSkillsSubDomain } }) => adultSkillsSubDomain)(districtLsoas),
      geographicalBarriersSubDomain:
        stat(({ imds: { geographicalBarriersSubDomain } }) => geographicalBarriersSubDomain)(districtLsoas),
      widerBarriersSubDomain:
        stat(({ imds: { widerBarriersSubDomain } }) => widerBarriersSubDomain)(districtLsoas),
      indoorsSubDomain:
        stat(({ imds: { indoorsSubDomain } }) => indoorsSubDomain)(districtLsoas),
      outdoorsSubDomain:
        stat(({ imds: { outdoorsSubDomain } }) => outdoorsSubDomain)(districtLsoas),
    },
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
  })
}