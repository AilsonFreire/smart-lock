import React, { useState } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput } from 'react-native';

const Welcome = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={stlyes.container}>
        <Text style={stlyes.title}>
          Welcome
        </Text>
        <Button title="login" />
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

