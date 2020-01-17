import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions/actionTypes';

class ShortBreakPlay extends Component {
  startTimer = () => {
    const maintainTimer = () => {
      if (!this.props.playPressed) {
        clearInterval(timerId);
      } else if (this.props.shortBreak > 0) {
        this.props.decreaseTimerShortBreak();
      } else {
        clearInterval(timerId);
        this.props.changePlayShortBreak();
        this.props.activateAlarm();
        this.props.timerMode();
        this.props.resetTimerShortBreak();
      }
    };

    const timerId = setInterval(maintainTimer, 1000);
  };

  render() {
    return (
      <View>
        <View style={styles.playContainer}>
          <TouchableOpacity
            style={styles.play}
            onPress={() => {
              if (!this.props.playPressed) {
                this.props.cancelAlarm();
                this.startTimer();
              } else {
                Alert.alert(
                  'Warning!',
                  'What do you want to do?',
                  [
                    {
                      text: 'Reset This Break',
                      onPress: () => {
                        this.props.resetTimerShortBreak();
                      },
                      style: 'destructive',
                    },
                    {
                      text: 'Just Pause',
                      onPress: () => console.log('Nothing changed.'),
                      style: 'cancel',
                    },
                  ],
                  { cancelable: true },
                );
              }
              this.props.changePlayShortBreak();
            }}>
            {this.props.playPressed ? (
              <FontAwesome5
                name="stop"
                size={25}
                color="white"
                style={{ textAlign: 'center' }}
              />
            ) : (
              <FontAwesome5
                name="play"
                size={25}
                color="white"
                style={{ textAlign: 'center', paddingLeft: 5 }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  play: {
    backgroundColor: 'tomato',
    borderRadius: 35,
    height: 70,
    width: 70,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  playContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 51,
  },
});

const mapStateToProps = state => {
  return {
    playPressed: state.shortBreak.playPressed,
    shortBreak: state.shortBreak.shortBreak,
    initialShortBreak: state.shortBreak.initialShortBreak,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePlayShortBreak: () => dispatch({ type: actionTypes.CHANGE_PLAY_SHORT_BREAK }),
    decreaseTimerShortBreak: () => dispatch({ type: actionTypes.DECREASE_TIMER_SHORT_BREAK }),
    resetTimerShortBreak: () => dispatch({ type: actionTypes.RESET_TIMER_SHORT_BREAK }),
    timerMode: () => dispatch({ type: actionTypes.TIMER_MODE }),
    activateAlarm: () => dispatch({ type: actionTypes.ACTIVATE_ALARM }),
    cancelAlarm: () => dispatch({ type: actionTypes.CANCEL_ALARM }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortBreakPlay);
