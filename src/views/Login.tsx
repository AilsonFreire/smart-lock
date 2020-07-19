import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (email: string) => setEmail(email);

  const handlePassword = (password: string) => setPassword(password);

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
        <Button title="login" />
      </SafeAreaView>
    </>
  )
}

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
export default Login;
