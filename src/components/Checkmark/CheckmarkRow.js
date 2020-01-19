import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Checkmark from './Checkmark';

const CheckmarkRow = (props) => {
  return (
    <View>
      <View style={styles.row}>
        <Checkmark check={props.check1} />
        <Checkmark check={props.check2} />
        <Checkmark check={props.check3} />
        <Checkmark check={props.check4} />
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

export default connect(mapStateToProps)(CheckmarkRow);
