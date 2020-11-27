import { ApiData } from '../models/api-data.model';

export interface IDataGateway {
  getData(): Promise<ApiData>;
}
