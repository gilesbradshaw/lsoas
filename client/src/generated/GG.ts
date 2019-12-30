/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GG
// ====================================================

export interface GG_result_laDistrict {
  __typename: "Code";
  name: string;
  code: string;
}

export interface GG_result_stats_individualPayBands {
  __typename: "Bands";
  gini: number;
}

export interface GG_result_stats_imd_deciles_decile01 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile02 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile03 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile04 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile05 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile06 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile07 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile08 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile09 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles_decile10 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_imd_deciles {
  __typename: "Deciles";
  decile01: GG_result_stats_imd_deciles_decile01;
  decile02: GG_result_stats_imd_deciles_decile02;
  decile03: GG_result_stats_imd_deciles_decile03;
  decile04: GG_result_stats_imd_deciles_decile04;
  decile05: GG_result_stats_imd_deciles_decile05;
  decile06: GG_result_stats_imd_deciles_decile06;
  decile07: GG_result_stats_imd_deciles_decile07;
  decile08: GG_result_stats_imd_deciles_decile08;
  decile09: GG_result_stats_imd_deciles_decile09;
  decile10: GG_result_stats_imd_deciles_decile10;
}

export interface GG_result_stats_imd {
  __typename: "Stat";
  gini: number;
  mean: number;
  deciles: GG_result_stats_imd_deciles | null;
}

export interface GG_result_stats_income_deciles_decile01 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile02 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile03 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile04 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile05 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile06 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile07 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile08 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile09 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles_decile10 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface GG_result_stats_income_deciles {
  __typename: "Deciles";
  decile01: GG_result_stats_income_deciles_decile01;
  decile02: GG_result_stats_income_deciles_decile02;
  decile03: GG_result_stats_income_deciles_decile03;
  decile04: GG_result_stats_income_deciles_decile04;
  decile05: GG_result_stats_income_deciles_decile05;
  decile06: GG_result_stats_income_deciles_decile06;
  decile07: GG_result_stats_income_deciles_decile07;
  decile08: GG_result_stats_income_deciles_decile08;
  decile09: GG_result_stats_income_deciles_decile09;
  decile10: GG_result_stats_income_deciles_decile10;
}

export interface GG_result_stats_income {
  __typename: "Stat";
  gini: number;
  mean: number;
  deciles: GG_result_stats_income_deciles | null;
}

export interface GG_result_stats {
  __typename: "Stats";
  totalCount: number;
  individualPayBands: GG_result_stats_individualPayBands;
  imd: GG_result_stats_imd;
  income: GG_result_stats_income;
}

export interface GG_result {
  __typename: "Result";
  laDistrict: GG_result_laDistrict;
  stats: GG_result_stats;
}

export interface GG {
  /**
   * Test Message. 
   */
  result: (GG_result | null)[] | null;
}
