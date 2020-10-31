import * as path from 'path';
import * as webpack from 'webpack';

export default (config: webpack.Configuration) => {
  config.resolve.alias['@egamings/theming'] = path.resolve(
    __dirname,
    'libs/shared/client/ng-ui/theming/_theming'
  );
  return config;
};
