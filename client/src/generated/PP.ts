/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PP
// ====================================================

export interface PP_parliamentaryConstituencies_stats_individualPayBands {
  __typename: "Bands";
  gini: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile01 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile02 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile03 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile04 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile05 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile06 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile07 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile08 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile09 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile10 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd_deciles {
  __typename: "Deciles";
  decile01: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile01;
  decile02: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile02;
  decile03: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile03;
  decile04: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile04;
  decile05: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile05;
  decile06: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile06;
  decile07: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile07;
  decile08: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile08;
  decile09: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile09;
  decile10: PP_parliamentaryConstituencies_stats_imds_imd_deciles_decile10;
}

export interface PP_parliamentaryConstituencies_stats_imds_imd {
  __typename: "Stat";
  gini: number;
  mean: number;
  deciles: PP_parliamentaryConstituencies_stats_imds_imd_deciles | null;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile01 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile02 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile03 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile04 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile05 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile06 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile07 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile08 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile09 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles_decile10 {
  __typename: "Decile";
  count: number;
  percentage: number;
}

export interface PP_parliamentaryConstituencies_stats_imds_income_deciles {
  __typename: "Deciles";
  decile01: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile01;
  decile02: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile02;
  decile03: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile03;
  decile04: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile04;
  decile05: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile05;
  decile06: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile06;
  decile07: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile07;
  decile08: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile08;
  decile09: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile09;
  decile10: PP_parliamentaryConstituencies_stats_imds_income_deciles_decile10;
}

export interface PP_parliamentaryConstituencies_stats_imds_income {
  __typename: "Stat";
  gini: number;
  mean: number;
  deciles: PP_parliamentaryConstituencies_stats_imds_income_deciles | null;
}

export interface PP_parliamentaryConstituencies_stats_imds {
  __typename: "IMDStats";
  imd: PP_parliamentaryConstituencies_stats_imds_imd;
  income: PP_parliamentaryConstituencies_stats_imds_income;
}

export interface PP_parliamentaryConstituencies_stats {
  __typename: "Stats";
  totalCount: number;
  individualPayBands: PP_parliamentaryConstituencies_stats_individualPayBands;
  imds: PP_parliamentaryConstituencies_stats_imds;
}

export interface PP_parliamentaryConstituencies {
  __typename: "ParliamentaryConstituency";
  name: string;
  id: string;
  stats: PP_parliamentaryConstituencies_stats;
}

export interface PP {
  parliamentaryConstituencies: (PP_parliamentaryConstituencies | null)[];
}
