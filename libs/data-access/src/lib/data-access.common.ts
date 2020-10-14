import { IDataAccessConfig } from './data-access.model';

export const DATA_ACCESS_DEFAULT_CONFIG: IDataAccessConfig = {
  apiUrl: 'http://localhost:4200/assets/api.json',
  pagination: {
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};
