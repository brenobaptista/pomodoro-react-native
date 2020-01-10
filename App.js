import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import AnimatedProgressWheel from 'react-native-progress-wheel';

export default class App extends React.Component {
  state = {
    timer: 1500,
    initialTimer: 1500,
    playPressed: false,
    checkmark1: false,
    checkmark2: false,
    checkmark3: false,
    checkmark4: false,
  };

  formatNumber = number => {
    return ('0' + number).slice(-2);
  };

  changePlay = () => {
    this.setState(prevState => ({
      playPressed: !prevState.playPressed,
    }));
  };

  startTimer = () => {
    const decreaseTimer = () => {
      this.setState(prevState => ({
        timer: prevState.timer - 1,
      }));
    };

    const checkmark1 = () => {
      this.setState({
        checkmark1: true,
      });
    };

    const checkmark2 = () => {
      this.setState({
        checkmark2: true,
      });
    };

    const checkmark3 = () => {
      this.setState({
        checkmark3: true,
      });
    };

    const checkmark4 = () => {
      this.setState({
        checkmark4: true,
      });
    };

    const maintainTimer = () => {
      if (!this.state.playPressed) {
        clearInterval(timerId);
      } else if (this.state.timer > 0) {
        decreaseTimer();
      } else {
        clearInterval(timerId);
        this.changePlay();
        if (this.state.checkmark3) {
          checkmark4();
        } else if (this.state.checkmark2) {
          checkmark3();
        } else if (this.state.checkmark1) {
          checkmark2();
        } else {
          checkmark1();
        }
      }
    };

    const timerId = setInterval(maintainTimer, 1000);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#93C6F9', '#97B4FA', '#A768FE']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.container}>
          <View style={styles.card}>
            <View style={styles.row}>
              <Feather
                name={this.state.checkmark1 ? 'check-square' : 'square'}
                size={35}
                color="#4a4a4a"
              />
              <Feather
                name={this.state.checkmark2 ? 'check-square' : 'square'}
                size={35}
                color="#4a4a4a"
              />
              <Feather
                name={this.state.checkmark3 ? 'check-square' : 'square'}
                size={35}
                color="#4a4a4a"
              />
              <Feather
                name={this.state.checkmark4 ? 'check-square' : 'square'}
                size={35}
                color="#4a4a4a"
              />
            </View>
            <View>
              <View style={{ top: 120 }}>
                <Text style={styles.timerText}>
                  {this.formatNumber(Math.floor(this.state.timer / 60))} :{' '}
                  {this.formatNumber(this.state.timer % 60)}
                </Text>
              </View>
              <View style={styles.timerContainer}>
                <AnimatedProgressWheel
                  size={200}
                  width={5}
                  progress={(this.state.timer / this.state.initialTimer) * 100}
                  color={'#ff7057'}
                  fullColor={'#97B4FA'}
                  backgroundColor={'#ededed'}
                />
              </View>
            </View>
            <View style={styles.playContainer}>
              <TouchableOpacity
                style={styles.play}
                onPress={() => {
                  if (!this.state.playPressed) {
                    this.startTimer();
                  } else {
                    Alert.alert(
                      'Warning!',
                      'What do you want to do?',
                      [
                        {
                          text: 'Reset This Checkpoint',
                          onPress: () => {
                            this.setState({
                              timer: 1500,
                              playPressed: false,
                            });
                          },
                        },
                        {
                          text: 'Reset All Checkpoints',
                          onPress: () => {
                            this.setState({
                              timer: 1500,
                              playPressed: false,
                              checkmark1: false,
                              checkmark2: false,
                              checkmark3: false,
                              checkmark4: false,
                            });
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
                  this.changePlay();
                }}>
                {this.state.playPressed ? (
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
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 52,
    paddingRight: 52,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
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
