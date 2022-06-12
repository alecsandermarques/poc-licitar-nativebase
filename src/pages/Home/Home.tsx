import firestore from '@react-native-firebase/firestore';
import {Button, FlatList, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

type ProductProps = {
  id: string;
  description: string;
  done: boolean;
  createdAt: Date;
};

const Home = ({navigation}: any) => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('products')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];

        console.log(data);
        setProducts(data);
      });

    return () => subscriber();
  }, []);

  const handleFirestore = () => {
    firestore()
      .collection('products')
      .add({
        description: 'Macarrão',
        quantity: 6,
        done: false,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Produto adicionado com sucesso!');
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Processes')}>
        Listar processos
      </Button>
      <View style={styles.firestoreBox}>
        <Text>Conexão com firestore</Text>
        <Button onPress={handleFirestore}>Adicionar produto</Button>

        <View>
          <FlatList
            data={products}
            renderItem={({item}) => <Text>{item.description}</Text>}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </View>
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
  firestoreBox: {
    marginTop: 16,
  },
});
