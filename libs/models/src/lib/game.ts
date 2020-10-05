import { IMerchant } from './merchant';

export interface IGame {
  id: number;
  name: string;
  categoryId: number[];
  merchant: IMerchant;
  image: string;
}
