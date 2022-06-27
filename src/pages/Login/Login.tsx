import {yupResolver} from '@hookform/resolvers/yup';
import {useToast} from 'native-base';
import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import UserContext from '../../context/UserContext';
import LoginView from './LoginView';

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
  const {setState} = useContext(UserContext);

  const [show, setShow] = useState(false);

  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch(
        'https://manager-api-dev.licitardigital.com.br/auth/doLogin',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            origin: 'https://dev.licitardigital.com.br',
          },
        },
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      toast.show({
        description: 'Usuário ou senha inválidos',
      });
    }
  };

  const handleNewAccount = () => {
    console.log('reference');
  };

  return (
    <LoginView
      {...{
        control,
        errors,
        show,
        setShow,
        handleSubmit,
        onSubmit,
        handleNewAccount,
      }}
    />
  );
}

export default Login;
