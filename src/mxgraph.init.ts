import { environment } from './environments/environment';
import factory from 'mxgraph';

(window as any)['mxBasePath'] = environment.mxAssets;

export default factory({
  // not working see https://github.com/jgraph/mxgraph/issues/479
  mxBasePath: 'assets/mxgraph',
});