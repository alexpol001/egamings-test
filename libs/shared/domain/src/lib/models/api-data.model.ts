import { Dictionary, NumericDictionary } from 'lodash';

export interface ApiData {
  categories: ApiCategory[];
  games: ApiGame[];
  merchants: NumericDictionary<ApiMerchant>;
}

export interface ApiCategory {
  ID: number;
  Name: Dictionary<string>;
}

export interface ApiGame {
  ID: number;
  Name: Dictionary<string>;
  CategoryID: number[];
  MerchantID: number;
  ImageFullPath: string;
}

export interface ApiMerchant {
  ID: number;
  Name: string;
  MenuId: string;
}
