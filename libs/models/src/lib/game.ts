import { ICategory } from './category';
import { IMerchant } from './merchant';

export interface IGame {
  id: number;
  category: ICategory;
  merchant: IMerchant;
  image: string;
}
