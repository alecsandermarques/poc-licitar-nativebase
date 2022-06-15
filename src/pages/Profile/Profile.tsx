import {Button, Text} from 'native-base';
import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import UserContext from '../../context/UserContext';

function Profile() {
  const {state, setState} = useContext(UserContext);
  const {name} = state;

  const handleLogout = () => {
    setState(oldState => ({...oldState, isLogged: false}));
  };

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Button style={styles.processosButton} onPress={handleLogout}>
        Deslogar
      </Button>
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
