import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function HeadItem() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/imageHead.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center'
  },
  // paragraph: {
  //   margin: 24,
  //   marginTop: 0,
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  logo: {
    height: 128,
    width: '100%',
  }
});