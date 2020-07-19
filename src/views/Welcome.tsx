import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
  navigation: NavigationStackProp
}

const Welcome: React.FC<Props> = ({ navigation }) => {

  const logout = async () => await AsyncStorage.clear()
    .then(() => navigation.navigate('Login'));

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={stlyes.container}>
        <Text style={stlyes.title}>
          Welcome
        </Text>
        <Button title="logout" onPress={logout} />
      </SafeAreaView>
    </>
  )
}

export default Welcome;

const stlyes = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24
  },
  title: {
    fontSize: 24,
    marginVertical: 10
  }
})

