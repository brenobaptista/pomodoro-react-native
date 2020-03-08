import React, { useEffect } from 'react';
import { View, StyleSheet, Vibration } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux';

import CheckmarkRow from '../components/Checkmark/CheckmarkRow';
import Play from '../components/Timer/Play';
import Timer from '../components/Timer/Timer';
import ShortBreak from '../components/ShortBreak/ShortBreak';
import ShortBreakPlay from '../components/ShortBreak/ShortBreakPlay';
import LongBreak from '../components/LongBreak/LongBreak';
import LongBreakPlay from '../components/LongBreak/LongBreakPlay';

const Index = (props) => {
  useEffect(() => {
    const PATTERN = [1000, 1000, 1000];

    if (props.ringAlarm) {
      Vibration.vibrate(PATTERN, true);
      setTimeout(() => {
        Vibration.cancel();
      }, 60000);
    } else {
      Vibration.cancel();
    }
  }, [props.ringAlarm]);

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#BAF4FF', '#94EFFF', '#6DE9FF', '#47E3FF']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.container}
      >
        <View style={styles.card}>
          <CheckmarkRow />

          {props.isLongBreakMode ? (
            <View>
              <LongBreak />
              <LongBreakPlay />
            </View>
          ) : (
            props.isShortBreakMode ? (
              <View>
                <ShortBreak />
                <ShortBreakPlay />
              </View>
            ) : (
              <View>
                <Timer />
                <Play />
              </View>
            )
          )}

        </View>
      </LinearGradient>
    </View>
  );
};

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

const mapStateToProps = (state) => ({
  isShortBreakMode: state.timer.isShortBreakMode,
  isLongBreakMode: state.timer.isLongBreakMode,
  ringAlarm: state.alarm.ringAlarm,
});

export default connect(mapStateToProps)(Index);
