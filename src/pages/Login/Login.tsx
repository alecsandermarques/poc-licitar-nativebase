import {Box, Button, FormControl, Input} from 'native-base';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    cpf: yup.string().required('CPF é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
  })
  .required();

type FormData = {
  cpf: string;
  password: string;
};

function Login() {
  const [show, setShow] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Box alignItems="center" style={styles.container}>
        <FormControl isInvalid w="75%" maxW="300px" style={styles.boxLogin}>
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
                placeholder="Password"
              />
            )}
            name="password"
          />
          <FormControl.ErrorMessage style={styles.errorMessage}>
            {errors.password ? errors.password?.message : ' '}
          </FormControl.ErrorMessage>

          <View style={styles.boxbuttons}>
            <Button
              onPress={handleSubmit(onSubmit)}
              style={styles.signInButton}>
              Entrar
            </Button>
            <Button onPress={() => console.log('criando nova conta...')}>
              Criar nova conta
            </Button>
          </View>
        </FormControl>
      </Box>
    </>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {marginTop: 16},
  boxLogin: {marginVertical: 24},
  errorMessage: {marginBottom: 4},
  inputIconPassword: {marginRight: 8},
  boxbuttons: {marginVertical: 8},
  signInButton: {marginBottom: 16},
});
