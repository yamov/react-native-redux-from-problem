import React from 'react';
import {Text} from 'react-native';
import {reduxForm, Field} from 'redux-form';

import MyInputWrapper from './MyInputWrapper';

const ReduxFormInput = () => {
  return (
    <>
      <Text>Redux Form Input Field</Text>
      <Field
        name="field"
        props={{
          placeholder: 'type something here',
        }}
        component={MyInputWrapper}
      />
    </>
  );
};

export default reduxForm({
  form: 'test-form',
  initialValues: {field: 'some'},
})(ReduxFormInput);
