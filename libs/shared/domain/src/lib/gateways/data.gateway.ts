import { ApiData } from '../models/api-data.model';

export interface DataGateway {
  getData(): Promise<ApiData>;
}
