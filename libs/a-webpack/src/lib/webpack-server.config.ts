import * as nodeExternals from 'webpack-node-externals';

import * as webpack from 'webpack';
import clientWebpack from './webpack.config';

export default (config: webpack.Configuration) => {
  config = clientWebpack(config);

  config.externals = nodeExternals();

  return config;
};
