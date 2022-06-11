import {Button} from 'native-base';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import UserContext from '../../context/UserContext';

function Profile({navigation}: any) {
  const {setState} = useContext(UserContext);

  const handleLogout = () => {
    setState({isLogged: false});
  };

  return (
    <View style={styles.container}>
      <Button style={styles.processosButton} onPress={handleLogout}>
        Deslogar
      </Button>
      <Button onPress={() => navigation.navigate('Login')}>Login</Button>
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
  processosButton: {
    marginBottom: 16,
  },
});
