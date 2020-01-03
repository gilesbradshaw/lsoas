import promiseCsv from '../../promise-csv'
import EUReferendum from './EUReferendum'
export default () =>
  promiseCsv(
    '../data/EU-referendum-result-data.csv',
  )
  .then(
    localAuthorities =>
      localAuthorities
        .slice(1)
        .map(
          (lsoa): EUReferendum => ({
            region: {
              code: lsoa[1],
              name: lsoa[2],
            },
            area: {
              code: lsoa[3],
              name: lsoa[4],
            },
            electorate: parseInt(lsoa[5], 10),
            expectedBallots: parseInt(lsoa[6], 10),
            verifiedBallotPapers: parseInt(lsoa[7], 10),
            percentTurnout: parseFloat(lsoa[8]),
            votesCast: parseInt(lsoa[9], 10),
            validVotes: parseInt(lsoa[10], 10),
            remain: parseInt(lsoa[11], 10),
            leave: parseInt(lsoa[12], 10),
            rejectedBallots: parseInt(lsoa[13], 10),
            noOfficialMark: parseInt(lsoa[14], 10),
            votingForBothAnswers: parseInt(lsoa[15], 10),
            writingOrMark: parseInt(lsoa[16], 10),
            unmarkedOrVoid: parseInt(lsoa[17], 10),
            percentRemain: parseFloat(lsoa[18]),
            percentLeave: parseFloat(lsoa[19]),
            percentRejected: parseFloat(lsoa[20])
          })
        )
  )
