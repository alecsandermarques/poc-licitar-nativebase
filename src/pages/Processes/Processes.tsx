import {Avatar, Box, FlatList, HStack, Spacer, Text, VStack} from 'native-base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import rawData from '../../mocks/processes.json';

const {data} = rawData;

function Processes() {
  return (
    <Box>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity>
            <Box
              borderBottomWidth="1"
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor="coolGray.200"
              pl="4"
              pr="5"
              py="2">
              <HStack space={3} justifyContent="space-between">
                <Avatar
                  size="48px"
                  source={{
                    uri: item.urlOriginalIcon,
                  }}
                />
                <VStack>
                  <Text
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    color="coolGray.800"
                    bold>
                    {item.organizationUnitName.split(' ')[0]}
                  </Text>
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: 'warmGray.200',
                    }}
                    style={styles.description}
                    numberOfLines={1}>
                    {item.simpleDescription}
                  </Text>
                </VStack>
                <Spacer />
                <Text
                  fontSize="xs"
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  color="coolGray.800"
                  alignSelf="flex-start">
                  {`${new Date(item.dateTimeInsert).getHours()}:${new Date(
                    item.dateTimeInsert,
                  ).getMinutes()}`}
                </Text>
              </HStack>
            </Box>
          </TouchableOpacity>
        )}
        keyExtractor={item => `${item.id}`}
      />
    </Box>
  );
}

export default Processes;

const styles = StyleSheet.create({
  description: {
    width: 200,
  },
});
