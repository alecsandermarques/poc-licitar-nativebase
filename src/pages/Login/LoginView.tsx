import {Box, Button, Center, Divider, FormControl, Input} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import {Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './LoginStyle';

type LoginViewProps = {
  control: any;
  errors: any;
  show: any;
  setShow: any;
  handleSubmit: any;
  onSubmit: any;
  handleNewAccount: any;
};

const LoginView = ({
  control,
  errors,
  show,
  setShow,
  handleSubmit,
  onSubmit,
  handleNewAccount,
}: LoginViewProps) => {
  return (
    <Center height="100%" width="100%">
      <FormControl isInvalid w="75%" maxW="300px" style={styles.boxLogin}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logoImage}
          resizeMode="cover"
        />
        <FormControl.Label>CPF</FormControl.Label>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="number-pad"
              placeholder="Digite seu cpf..."
            />
          )}
          name="cpf"
        />
        <FormControl.ErrorMessage style={styles.errorMessage}>
          {errors.cpf ? errors.cpf?.message : ' '}
        </FormControl.ErrorMessage>

        <FormControl.Label>Senha</FormControl.Label>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Icon
                  name={show ? 'ios-eye' : 'ios-eye-off'}
                  size={20}
                  onPress={() => setShow(!show)}
                  style={styles.inputIconPassword}
                />
              }
              placeholder="Digite sua senha..."
            />
          )}
          name="password"
        />
        <FormControl.ErrorMessage style={styles.errorMessage}>
          {errors.password ? errors.password?.message : ' '}
        </FormControl.ErrorMessage>

        <View style={styles.boxbuttons}>
          <Button onPress={handleSubmit(onSubmit)}>ENTRAR</Button>
          <Button onPress={handleSubmit(onSubmit)} variant="link">
            Esqueceu a senha?
          </Button>
          <Divider w="100%" style={styles.divider} />
          <Box width="100%" alignItems="center">
            <Button
              width={180}
              style={styles.signUpButton}
              colorScheme="secondary"
              onPress={handleNewAccount}>
              CRIAR NOVA CONTA
            </Button>
          </Box>
        </View>
      </FormControl>
    </Center>
  );
};

export default LoginView;
