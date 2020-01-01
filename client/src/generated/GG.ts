/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GG
// ====================================================

export interface GG_localAuthorities_stats_individualPayBands {
  __typename: "Bands";
  gini: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile01 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile02 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile03 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile04 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile05 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile06 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile07 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile08 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile09 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles_decile10 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_imd_deciles {
  __typename: "Deciles";
  decile01: GG_localAuthorities_stats_imds_imd_deciles_decile01;
  decile02: GG_localAuthorities_stats_imds_imd_deciles_decile02;
  decile03: GG_localAuthorities_stats_imds_imd_deciles_decile03;
  decile04: GG_localAuthorities_stats_imds_imd_deciles_decile04;
  decile05: GG_localAuthorities_stats_imds_imd_deciles_decile05;
  decile06: GG_localAuthorities_stats_imds_imd_deciles_decile06;
  decile07: GG_localAuthorities_stats_imds_imd_deciles_decile07;
  decile08: GG_localAuthorities_stats_imds_imd_deciles_decile08;
  decile09: GG_localAuthorities_stats_imds_imd_deciles_decile09;
  decile10: GG_localAuthorities_stats_imds_imd_deciles_decile10;
}

export interface GG_localAuthorities_stats_imds_imd {
  __typename: "Stat";
  gini: number;
  mean: number;
  deciles: GG_localAuthorities_stats_imds_imd_deciles | null;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile01 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile02 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile03 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile04 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile05 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile06 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile07 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile08 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile09 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles_decile10 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_localAuthorities_stats_imds_income_deciles {
  __typename: "Deciles";
  decile01: GG_localAuthorities_stats_imds_income_deciles_decile01;
  decile02: GG_localAuthorities_stats_imds_income_deciles_decile02;
  decile03: GG_localAuthorities_stats_imds_income_deciles_decile03;
  decile04: GG_localAuthorities_stats_imds_income_deciles_decile04;
  decile05: GG_localAuthorities_stats_imds_income_deciles_decile05;
  decile06: GG_localAuthorities_stats_imds_income_deciles_decile06;
  decile07: GG_localAuthorities_stats_imds_income_deciles_decile07;
  decile08: GG_localAuthorities_stats_imds_income_deciles_decile08;
  decile09: GG_localAuthorities_stats_imds_income_deciles_decile09;
  decile10: GG_localAuthorities_stats_imds_income_deciles_decile10;
}

export interface GG_localAuthorities_stats_imds_income {
  __typename: "Stat";
  gini: number;
  mean: number;
  deciles: GG_localAuthorities_stats_imds_income_deciles | null;
}

export interface GG_localAuthorities_stats_imds {
  __typename: "IMDStats";
  imd: GG_localAuthorities_stats_imds_imd;
  income: GG_localAuthorities_stats_imds_income;
}

export interface GG_localAuthorities_stats {
  __typename: "Stats";
  totalCount: number;
  individualPayBands: GG_localAuthorities_stats_individualPayBands;
  imds: GG_localAuthorities_stats_imds;
}

export interface GG_localAuthorities {
  __typename: "LocalAuthority";
  name: string;
  id: string;
  stats: GG_localAuthorities_stats;
}

export interface GG {
  /**
   * Test Message. 
   */
  localAuthorities: (GG_localAuthorities | null)[];
}
