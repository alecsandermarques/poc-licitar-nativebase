import {Text} from 'native-base';
import React from 'react';
import {View, StyleSheet} from 'react-native';

function Processes() {
  return (
    <View style={styles.container}>
      <Text>Listagem de processos</Text>
    </View>
  );
}

export default Processes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
