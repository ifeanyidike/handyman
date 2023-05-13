import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Navigation } from '../types/basic';

const BackButton = ({ navigation }: Navigation) => {
  return (
    <Pressable style={styles.nav} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  nav: {
    marginHorizontal: 25,
  },
});
