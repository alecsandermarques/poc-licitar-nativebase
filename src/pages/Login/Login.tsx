import {Button} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

function Login({navigation}: any) {
  return (
    <View style={styles.container}>
      <Button
        style={styles.processosButton}
        onPress={() => console.log('logando...')}>
        Entrar
      </Button>
      <Button onPress={() => console.log('criando nova conta...')}>
        Criar nova conta
      </Button>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {},
  processosButton: {},
});
