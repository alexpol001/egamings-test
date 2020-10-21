import { ICoreConfig } from './core.types';

export const CORE_DEFAULT_CONFIG: ICoreConfig = {
  apiUrl: 'http://localhost:3333/api',
  pagination: {
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
  },
};
