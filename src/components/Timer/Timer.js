import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { connect } from 'react-redux';

import formatNumber from '../../utils/formatNumber';

const Timer = (props) => {
  return (
    <View>
      <View style={{ top: 120 }}>
        <Text style={styles.timerText}>
          {formatNumber(Math.floor(props.timer / 60))} :{' '}
          {formatNumber(props.timer % 60)}
        </Text>
      </View>
      <View style={styles.timerContainer}>
        <AnimatedProgressWheel
          size={200}
          width={5}
          progress={(props.timer / props.initialTimer) * 100}
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
    fontSize: 35,
    fontWeight: 'bold',
    color: '#4a4a4a',
  },
});

const mapStateToProps = state => {
  return {
    timer: state.timer.timer,
    initialTimer: state.timer.initialTimer,
  };
};

export default connect(mapStateToProps)(Timer);
