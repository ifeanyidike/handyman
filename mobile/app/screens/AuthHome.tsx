import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomLogin from '../components/CustomLogin';
import { customLoginData } from '../utils/pagesUtils';
import TextInBetweenLines from '../components/TextInBetweenLines';
import Button from '../components/Button';
import AuthCall from '../components/AuthCall';
import BackButton from '../components/BackButton';
import { defaultContainer } from '../styles/general';

const AuthHome = ({ navigation }: Navigation) => {
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
        <Button
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
