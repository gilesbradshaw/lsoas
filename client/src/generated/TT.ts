/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TT
// ====================================================

export interface TT_result_laDistrict {
  __typename: "Code";
  name: string;
  code: string;
}

export interface TT_result_lsoas_lsoa {
  __typename: "Code";
  name: string;
  code: string;
}

export interface TT_result_lsoas_individualPayBands {
  __typename: "Bands";
  gini: number;
}

export interface TT_result_lsoas_imd {
  __typename: "Index";
  score: number;
  decile: number;
}

export interface TT_result_lsoas_income {
  __typename: "Index";
  score: number;
  decile: number;
}

export interface TT_result_lsoas {
  __typename: "LSOA";
  lsoa: TT_result_lsoas_lsoa;
  individualPayBands: TT_result_lsoas_individualPayBands;
  imd: TT_result_lsoas_imd;
  income: TT_result_lsoas_income;
}

export interface TT_result {
  __typename: "Result";
  laDistrict: TT_result_laDistrict;
  lsoas: (TT_result_lsoas | null)[];
}

export interface TT {
  /**
   * Test Message. 
   */
  result: (TT_result | null)[] | null;
}
