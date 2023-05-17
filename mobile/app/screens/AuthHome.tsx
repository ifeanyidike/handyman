import { Alert, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomLogin from '../components/CustomLogin';
import { customLoginData } from '../utils/pagesUtils';
import TextInBetweenLines from '../components/TextInBetweenLines';
import HeroButton from '../components/HeroButton';
import AuthCall from '../components/AuthCall';
import BackButton from '../components/BackButton';
import { defaultContainer } from '../styles/general';
import useBiometricSignUp from '../hooks/useBiometricSignUp';
import useBiometricAuthorization from '../hooks/useBiometricAuthorization';

const AuthHome = ({ navigation }: Navigation) => {
  // useEffect(() => {
  //   (async () => {
  //     await handleBiometricAuth();
  //   })();
  // }, []);
  // const isAuthenticated = useBiometricSignUp('ifeanyidike87@gmail.com');
  // console.log('isAuthenticated', isAuthenticated);
  const email = useBiometricAuthorization();
  console.log('email', email);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton navigation={navigation} />
        <View style={styles.content}>
          <Image source={require('../assets/handy-auth.png')} />

          <Text style={styles.title}>Let's get you in</Text>

          <FlatList
            data={customLoginData}
            renderItem={({ item }) => <CustomLogin {...item} />}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TextInBetweenLines text="or" />
        <HeroButton
          onPress={() => navigation.navigate('LogIn')}
          text="Sign in with password"
        />
        <AuthCall
          text="Don't have an account?"
          call="Sign up"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHome;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
  },
  content: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    marginVertical: 20,
  },
});
