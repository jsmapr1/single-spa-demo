import { setPublicPath } from 'systemjs-webpack-interop';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import singleSpaReact, { SingleSpaContext } from 'single-spa-react';

setPublicPath('navigation');
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
      // https://reactjs.org/docs/error-boundaries.html
      return (
            <div>This renders when a catastrophic error occurs</div>
          );
    },
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
