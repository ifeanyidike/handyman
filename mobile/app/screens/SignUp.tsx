import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { defaultContainer } from '../utils/general';
import BackButton from '../components/BackButton';
import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '../components/CustomInput';
import CheckBox from '../components/CheckBox';
import Button from '../components/Button';
import TextInBetweenLines from '../components/TextInBetweenLines';
import AuthIconsList from '../components/AuthIconsList';
import AuthCall from '../components/AuthCall';

const SignUp = ({ navigation }: Navigation) => {
  const [showPassword, toggleShowPassword] = useState(false);
  const [isChecked, toggleCheck] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton navigation={navigation} />
        <Text style={styles.title}>Create your Account</Text>
        <View style={styles.inputGroup}>
          <CustomInput
            Icon={<MaterialIcons name="email" size={20} />}
            placeholder="Email"
          />
          <CustomInput
            Icon={<MaterialIcons name="lock" size={20} />}
            showPassword={showPassword}
            SuffixIcon={
              <Pressable onPress={() => toggleShowPassword(!showPassword)}>
                {!showPassword ? (
                  <Entypo name="eye-with-line" size={20} />
                ) : (
                  <Entypo name="eye" size={20} />
                )}
              </Pressable>
            }
            placeholder="Password"
          />
        </View>
        <View style={styles.check}>
          <CheckBox isChecked={isChecked} toggleCheck={toggleCheck} />
          <Text>Remember me</Text>
        </View>
        <Button onPress={() => navigation.navigate('Profile')} text="Sign up" />

        <View>
          <TextInBetweenLines text="or continue with" />
          <AuthIconsList />
        </View>

        <AuthCall
          text="Already have an account?"
          call="Sign in"
          onPress={() => navigation.navigate('LogIn')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { ...defaultContainer, gap: 20 },
  title: {
    fontSize: 38,
    fontFamily: 'Urbanist_700Bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 40,
  },
  inputGroup: {
    gap: 20,
  },
  check: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
