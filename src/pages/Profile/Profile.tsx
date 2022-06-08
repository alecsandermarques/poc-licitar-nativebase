import {Button} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

function Profile({navigation}: any) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Processes')}>Deslogar</Button>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
