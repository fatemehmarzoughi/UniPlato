/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import React, { ReactNode, Component } from 'react';
import Router from './src/route';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './src/reducer';

/* -------------------------------------------------------------------------- */
/*                                  Class App                                 */
/* -------------------------------------------------------------------------- */

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends Component {
  render() : ReactNode {
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
