import React from 'react';
import {TextInput} from 'react-native';

const TextField = (props) => {
  const {input, ...restOfProps} = props;

  return (
    <TextInput
      value={props.input.value}
      onChangeText={props.input.onChange}
      {...restOfProps}
    />
  );
};

export default TextField;
