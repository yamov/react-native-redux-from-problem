import React from 'react';
import {TextInput} from 'react-native';

const MyInputWrapper = ({input, placeholder}) => {
  console.log('input val', input.value);
  return (
    <TextInput
      value={input.value || ''}
      onChange={input.onChange}
      placeholder={placeholder}
    />
  );
};

export default MyInputWrapper;
