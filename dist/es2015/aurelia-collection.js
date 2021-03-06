import 'whatwg-fetch';
import { UseCollection } from './use-collection';
import { Collection } from './collection';
import { Config } from './config';

export function configure(aurelia, configCallback) {
  let config = aurelia.container.get(Config);

  if (configCallback === undefined || typeof configCallback !== 'function') {
    let error = 'You need to provide a callback method to properly configure the library';
    throw error;
  }

  configCallback(config);
}

export { UseCollection, Collection, Config };