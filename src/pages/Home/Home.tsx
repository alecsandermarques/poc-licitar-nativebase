import {Button} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Processes')}>
        Listar processos
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
