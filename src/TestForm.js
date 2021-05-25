import React from 'react';
import {reduxForm, Field} from 'redux-form';

import TextField from './TextField';

const normalizer = (val) =>
  String(val || '')
    .replace(/-/g, '')
    .split('')
    .join('-');

const formatter = (val) => String(val || '').toUpperCase();

const TestForm = () => {
  return (
    <Field
      name="field"
      placeholder="Type here..."
      component={TextField}
      normalize={normalizer}
      format={formatter}
    />
  );
};

export default reduxForm({
  form: 'testForm',
})(TestForm);
