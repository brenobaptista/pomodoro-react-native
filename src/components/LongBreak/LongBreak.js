import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { connect } from 'react-redux';

import formatNumber from '../../utils/formatNumber';

const LongBreak = (props) => {
  return (
    <View>
      <View style={{ top: 20 }}>
        <Text style={styles.timerText}>
          LONG BREAK
        </Text>
      </View>
      <View style={{ top: 120 }}>
        <Text style={styles.timerText}>
          {formatNumber(Math.floor(props.longBreak / 60))} :{' '}
          {formatNumber(props.longBreak % 60)}
        </Text>
      </View>
      <View style={styles.timerContainer}>
        <AnimatedProgressWheel
          size={200}
          width={5}
          progress={(props.longBreak / props.initialLongBreak) * 100}
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
    longBreak: state.longBreak.longBreak,
    initialLongBreak: state.longBreak.initialLongBreak,
  };
};

export default connect(mapStateToProps)(LongBreak);
