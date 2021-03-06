import { Dictionary, NumericDictionary } from 'lodash';

export interface IApiData {
  categories: IApiCategory[];
  games: IApiGame[];
  merchants: NumericDictionary<IApiMerchant>;
}

export interface IApiCategory {
  ID: number;
  Name: Dictionary<string>;
}

export interface IApiGame {
  ID: number;
  Name: Dictionary<string>;
  CategoryID: number[];
  MerchantID: number;
  ImageFullPath: string;
}

export interface IApiMerchant {
  ID: number;
  Name: string;
  MenuId: string;
}
