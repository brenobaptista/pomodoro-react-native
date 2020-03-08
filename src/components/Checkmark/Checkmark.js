import React from 'react';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Checkmark = (props) => (
  <View>
    <Feather
      name={props.check ? 'check-square' : 'square'}
      size={35}
      color="#4a4a4a"
    />
  </View>
);

export default Checkmark;
