import { IPaginationConfig } from './games/pagination/pagination.model';

export interface IDataAccessConfig {
  apiUrl: string;
  pagination: IPaginationConfig;
}
