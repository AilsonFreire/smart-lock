import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp
}

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (email: string) => setEmail(email);

  const handlePassword = (password: string) => setPassword(password);

  const login = async () => {
    if (!email || !password) {
      Alert.alert("Preencha todos os campos");
      return;
    }
    await AsyncStorage.setItem('userToken', 'abc')
      .then(() => navigation.navigate('Welcome'));
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={stlyes.container}>
        <Text style={stlyes.title}>
          Login
        </Text>
        <TextInput
          keyboardType="email-address"
          onChangeText={handleEmail}
          placeholder="E-mail"
          style={stlyes.input}
          value={email}
        />
        <TextInput
          onChangeText={handlePassword}
          placeholder="Senha"
          secureTextEntry
          style={stlyes.input}
          value={password}
        />
        <Button title="login" onPress={login} />
      </SafeAreaView>
    </>
  )
}

export default Login;

const stlyes = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 4,
    height: 52,
    marginVertical: 10,
    width: '100%'
  },
  title: {
    fontSize: 24,
    marginVertical: 10
  }
})
