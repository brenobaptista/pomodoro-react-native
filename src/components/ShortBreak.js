import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { connect } from 'react-redux';

import formatNumber from '../utils/formatNumber';

const ShortBreak = (props) => {
  return (
    <View>
      <View style={{ top: 20 }}>
        <Text style={styles.timerText}>
          SHORT BREAK
        </Text>
      </View>
      <View style={{ top: 120 }}>
        <Text style={styles.timerText}>
          {formatNumber(Math.floor(props.shortBreak / 60))} :{' '}
          {formatNumber(props.shortBreak % 60)}
        </Text>
      </View>
      <View style={styles.timerContainer}>
        <AnimatedProgressWheel
          size={200}
          width={5}
          progress={(props.shortBreak / props.initialShortBreak) * 100}
          color={'tomato'}
          fullColor={'#94EFFF'}
          backgroundColor={'#ccc'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
});

const mapStateToProps = state => {
  return {
    shortBreak: state.shortBreak.shortBreak,
    initialShortBreak: state.shortBreak.initialShortBreak,
  };
};

export default connect(mapStateToProps)(ShortBreak);
