import {Box, Text} from 'native-base';
import React from 'react';
import {Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}: any) => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Box>Hello world</Box>
        <Icon name="ios-person" size={30} color="#4F8EF7" />
        <Text>
          Lorem <Icon name="ios-book" color="#4F8EF7" /> Ipsum
        </Text>
      </View>
    </>
  );
};

export default Home;
