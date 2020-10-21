import React, { PureComponent, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from 'configs/createStore';
import { Routes } from 'components/Routes';
import 'assets/style.scss';

export class App extends PureComponent<{}> {
  public render(): ReactNode {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <Routes />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
