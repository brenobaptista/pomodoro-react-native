import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { connect } from 'react-redux';

class ShortBreak extends React.Component {
  formatNumber = number => {
    return ('0' + number).slice(-2);
  };

  render() {
    return (
      <View>
        <View style={{ top: 20 }}>
          <Text style={styles.timerText}>
            SHORT BREAK
          </Text>
        </View>
        <View style={{ top: 120 }}>
          <Text style={styles.timerText}>
            {this.formatNumber(Math.floor(this.props.shortBreak / 60))} :{' '}
            {this.formatNumber(this.props.shortBreak % 60)}
          </Text>
        </View>
        <View style={styles.timerContainer}>
          <AnimatedProgressWheel
            size={200}
            width={5}
            progress={(this.props.shortBreak / this.props.initialShortBreak) * 100}
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
    shortBreak: state.shortBreak.shortBreak,
    initialShortBreak: state.shortBreak.initialShortBreak,
  };
};

export default connect(mapStateToProps)(ShortBreak);
