import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions/actionTypes';

class Timer extends React.Component {
  formatNumber = number => {
    return ('0' + number).slice(-2);
  };

  render() {
    return (
      <View>
        <View style={{ top: 120 }}>
          <Text style={styles.timerText}>
            {this.formatNumber(Math.floor(this.props.timer / 60))} :{' '}
            {this.formatNumber(this.props.timer % 60)}
          </Text>
        </View>
        <View style={styles.timerContainer}>
          <AnimatedProgressWheel
            size={200}
            width={5}
            progress={(this.props.timer / this.props.initialTimer) * 100}
            color={'#ff7057'}
            fullColor={'#97B4FA'}
            backgroundColor={'#ededed'}
          />
        </View>
      </View>
    );
  }
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
