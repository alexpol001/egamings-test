import { IDataAccessConfig } from './data-access.model';

export const DATA_ACCESS_CONFIG_DEFAULT: IDataAccessConfig = {
  apiUrl: '/assets/api.json',
  pagination: {
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};
