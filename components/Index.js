import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';

import Checkmark from './Checkmark';
import Play from './Play';
import Timer from './Timer';
import ShortBreak from './ShortBreak';
import ShortBreakPlay from './ShortBreakPlay';
import LongBreak from './LongBreak';
import LongBreakPlay from './LongBreakPlay';

class Index extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#93C6F9', '#97B4FA', '#A768FE']}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.container}>
          <View style={styles.card}>
            <Checkmark />

            {this.props.isLongBreakMode ? (
              <View><LongBreak /><LongBreakPlay /></View>
            ) : (
              this.props.isShortBreakMode ? (
                <View><ShortBreak /><ShortBreakPlay /></View>
              ) : (
                <View><Timer /><Play /></View>
              )
            )}
            
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
});

const mapStateToProps = state => {
  return {
    isShortBreakMode: state.timer.isShortBreakMode,
    isLongBreakMode: state.timer.isLongBreakMode,
  };
};

export default connect(mapStateToProps)(Index);
