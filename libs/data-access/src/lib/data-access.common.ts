import { IDataAccessConfig } from './data-access.model';

export const DATA_ACCESS_DEFAULT_CONFIG: IDataAccessConfig = {
  apiUrl: 'http://localhost:3333/api',
  pagination: {
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};
