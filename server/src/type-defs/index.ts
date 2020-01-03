import Bands from './Bands'
import Band from './Band'
import Code from './Code'
import Deciles from './Deciles'
import Decile from './Decile'
import IMDStats from './IMDStats'
import IMDS from './IMDS'
import Index from './IIndex'
import LocalAuthority from './LocalAuthority'
import LSOA from './LSOA'
import ParliamentaryConstituency from './ParliamentaryConstituency'
import Query from './Query'
import Region from './Region'
import Stats from './Stats'
import Stat from './Stat'
import Ward from './Ward'
import GeneralElection from './GeneralElection'
import PartyResult from './PartyResult'
import Person from './Person'
import EUReferendum from './EUReferendum'

export default [
  `
    scalar Date
  `,
  EUReferendum,
  Bands,
  Band,
  Code,
  Deciles,
  Decile,
  IMDStats,
  IMDS,
  Index,
  LocalAuthority,
  LSOA,
  ParliamentaryConstituency,
  Query,
  Region,
  Stats,
  Stat,
  Ward,
  Person,
  PartyResult,
  GeneralElection,
]
