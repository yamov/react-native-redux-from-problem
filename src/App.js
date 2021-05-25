import React from 'react';
import {Provider} from 'react-redux';

import {store} from './store';
import TestForm from './TestForm';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <TestForm />
    </Provider>
  );
};

export default App;
