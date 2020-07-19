import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import AsyncStorage from '@react-native-community/async-storage';

type Props = {
  navigation: NavigationStackProp
}

const AuthLoadingScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    checkUserIsLoged()
  }, [])

  const checkUserIsLoged = async () => {
    const userIsLoged = await AsyncStorage.getItem('userToken');

    navigation.navigate(userIsLoged ? 'Welcome' : 'Login');
  }

  return (
    <View style={styles.containter}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
  containter: {
    flex: 1
  }
})