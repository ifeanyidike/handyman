import { Platform, Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';

import { defaultContainer } from '../styles/general';
import { Navigation } from '../types/basic';
import BackButton from '../components/BackButton';
import PickImage from '../components/PickImage';
import CustomInput from '../components/CustomInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../components/Button';

const Profile = ({ navigation }: Navigation) => {
  const [date, setDate] = useState(new Date());
  const [datePicker, setDatePicker] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <BackButton navigation={navigation} title="Fill Your Profile" />
        <View style={styles.content}>
          <PickImage />
          <View style={styles.form}>
            <CustomInput placeholder="Full Name" />
            <CustomInput placeholder="Nick Name" />
            <CustomInput
              placeholder="Date of Birth"
              value={date.toDateString()}
              SuffixIcon={
                <Pressable onPress={() => setDatePicker(true)}>
                  <AntDesign name="calendar" size={24} color="black" />
                </Pressable>
              }
            />
            <CustomInput
              placeholder="Email"
              value="ifeanyidike87@gmail.com"
              SuffixIcon={<Feather name="mail" size={24} color="black" />}
            />
            <CustomInput
              placeholder="Phone Number"
              Icon={<Feather name="phone" size={24} color="black" />}
            />
            <CustomInput
              placeholder="Address"
              SuffixIcon={
                <Ionicons name="location-outline" size={24} color="black" />
              }
            />

            <Button
              additionalStyle={styles.button}
              onPress={() => {
                navigation.navigate('FingerPrintSetup');
              }}
              text="Continue"
            />

            {datePicker && (
              <DateTimePicker
                value={date}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                onChange={(e, value) => {
                  if (value) setDate(value);
                  setDatePicker(false);
                }}
                style={styles.datePicker}
              />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
  },
  content: {
    marginTop: 30,
  },
  form: {
    marginTop: 15,
    gap: 13,
  },
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
  button: {
    marginTop: 15,
  },
});
