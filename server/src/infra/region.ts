import Code from '../types/Code'

export default <T extends { localAuthority: Code }>(
  localAuthorityToRegions: Map<string, Code>,
  {
    localAuthority,
    ...item
  } : T,
) => ({
  localAuthority,
  region: localAuthorityToRegions.get(
    localAuthority.code,
  ) as Code,
  ...item
})