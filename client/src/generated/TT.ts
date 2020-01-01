/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TT
// ====================================================

export interface TT_localAuthorities_lsoas_individualPayBands {
  __typename: "Bands";
  gini: number;
}

export interface TT_localAuthorities_lsoas_imds_imd {
  __typename: "Index";
  score: number;
  decile: number;
}

export interface TT_localAuthorities_lsoas_imds_income {
  __typename: "Index";
  score: number;
  decile: number;
}

export interface TT_localAuthorities_lsoas_imds {
  __typename: "IMDS";
  imd: TT_localAuthorities_lsoas_imds_imd;
  income: TT_localAuthorities_lsoas_imds_income;
}

export interface TT_localAuthorities_lsoas {
  __typename: "LSOA";
  name: string;
  id: string;
  individualPayBands: TT_localAuthorities_lsoas_individualPayBands;
  imds: TT_localAuthorities_lsoas_imds;
}

export interface TT_localAuthorities {
  __typename: "LocalAuthority";
  name: string;
  id: string;
  lsoas: (TT_localAuthorities_lsoas | null)[];
}

export interface TT {
  /**
   * Test Message. 
   */
  localAuthorities: (TT_localAuthorities | null)[];
}
