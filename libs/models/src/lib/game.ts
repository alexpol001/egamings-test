import { ICategory } from './category';
import { IMerchant } from './merchant';

export interface IGame {
  id: number;
  categoryId: string[];
  merchantId: string;
  image: string;
}
