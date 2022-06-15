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

  const onSubmit = (data: any) => {
    const {cpf, password} = data;
    if (cpf === '1' && password === '1') {
      setState({id: '1', isLogged: true, name: 'Misael'});
    } else if (cpf === '2' && password === '2') {
      setState({id: '2', isLogged: true, name: 'Alecsander'});
    } else {
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
