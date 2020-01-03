import Code from '../../../types/Code'

const makeRegion: (
  localAuthority: Code,
  localAuthorityToRegions: Map<string, Code>,
) => {
  localAuthority: Code,
  region: Code;
} = (
  localAuthority,
  localAuthorityToRegions,
) => {
  return {
    localAuthority,
    region:
      localAuthorityToRegions
        .get(
          localAuthority.code,
        ) as Code,
  }
}

export default makeRegion
