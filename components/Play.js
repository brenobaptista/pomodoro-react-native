import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions/actionTypes';

class Play extends React.Component {
  startTimer = () => {
    const maintainTimer = () => {
      if (!this.props.playPressed) {
        clearInterval(timerId);
      } else if (this.props.timer > 0) {
        this.props.decreaseTimer();
      } else {
        clearInterval(timerId);
        this.props.changePlay();
        if (this.props.check3) {
          this.props.checkmark4();
        } else if (this.props.check2) {
          this.props.checkmark3();
        } else if (this.props.check1) {
          this.props.checkmark2();
        } else {
          this.props.checkmark1();
        }
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
                this.startTimer();
              } else {
                Alert.alert(
                  'Warning!',
                  'What do you want to do?',
                  [
                    {
                      text: 'Reset This Checkpoint',
                      onPress: () => {
                        this.props.resetTimer();
                        this.props.changePlay();
                      },
                      style: 'destructive',
                    },
                    {
                      text: 'Just Pause',
                      onPress: () => console.log('Nothing changed.'),
                      style: 'cancel',
                    },
                  ],
                  { cancelable: true }
                );
              }
              this.props.changePlay();
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
    backgroundColor: '#ff7057',
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
    check1: state.check.checkmark1,
    check2: state.check.checkmark2,
    check3: state.check.checkmark3,
    check4: state.check.checkmark4,
    playPressed: state.timer.playPressed,
    timer: state.timer.timer,
    initialTimer: state.timer.initialTimer,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    checkmark1: () => dispatch({ type: actionTypes.CHECKMARK1 }),
    checkmark2: () => dispatch({ type: actionTypes.CHECKMARK2 }),
    checkmark3: () => dispatch({ type: actionTypes.CHECKMARK3 }),
    checkmark4: () => dispatch({ type: actionTypes.CHECKMARK4 }),
    changePlay: () => dispatch({ type: actionTypes.CHANGE_PLAY }),
    decreaseTimer: () => dispatch({ type: actionTypes.DECREASE_TIMER }),
    resetTimer: () => dispatch({ type: actionTypes.RESET_TIMER }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
