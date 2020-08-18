import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './store';
import ReduxFormInput from './ReduxFormInput';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={{alignItems: 'center', paddingTop: 50}}>
            <ReduxFormInput />
          </ScrollView>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
