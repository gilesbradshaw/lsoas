import promiseCsv from '../../promise-csv'

export default () =>
  promiseCsv(
    '../data/EU-referendum-result-data.csv',
  )
  .then(
    localAuthorities =>
      localAuthorities
        .slice(1)
        .map(
          lsoa => ({
            region: {
              code: lsoa[1],
              name: lsoa[2],
            },
            area: {
              code: lsoa[3],
              name: lsoa[4],
            },
            electorate: lsoa[5],
            expectedBallots: lsoa[6],
            verifiedBallotPapers: lsoa[7],
            percentTurnout: lsoa[8],
            votesCast: lsoa[9],
            validVotes: lsoa[10],
            remain: lsoa[11],
            leave: lsoa[12],
            rejectedBallots: lsoa[13],
            noOfficialMark: lsoa[14],
            votingForBothAnswers: lsoa[15],
            writingOrMark: lsoa[16],
            unmarkedOrVoid: lsoa[17],
            percentRemain: lsoa[18],
            percentLeave: lsoa[19],
            percentRejected: lsoa[20]

          })
        )
  )
