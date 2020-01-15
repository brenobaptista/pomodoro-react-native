import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Checkmark from './Checkmark';
import Play from './Play';
import Timer from './Timer';

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
            <Timer />
            <Play />
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

export default Index;
