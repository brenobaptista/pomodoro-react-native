import React from 'react';
import { View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';

const Checkmark = (props) => {
  return (
    <View>
      <View style={styles.row}>
        <Feather
          name={props.check1 ? 'check-square' : 'square'}
          size={35}
          color="#4a4a4a"
        />
        <Feather
          name={props.check2 ? 'check-square' : 'square'}
          size={35}
          color="#4a4a4a"
        />
        <Feather
          name={props.check3 ? 'check-square' : 'square'}
          size={35}
          color="#4a4a4a"
        />
        <Feather
          name={props.check4 ? 'check-square' : 'square'}
          size={35}
          color="#4a4a4a"
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const mapStateToProps = state => {
  return {
    check1: state.check.checkmark1,
    check2: state.check.checkmark2,
    check3: state.check.checkmark3,
    check4: state.check.checkmark4,
  };
};

export default connect(mapStateToProps)(Checkmark);