import { IApiData } from '../models/api-data.model';

export interface IDataGateway {
  getData(): Promise<IApiData>;
}
