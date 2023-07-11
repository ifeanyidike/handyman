import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Navigation } from '../types/basic';

interface Props extends Navigation {
  title?: string;
  arrowColor?: string;
}
const BackButton = ({ navigation, title, arrowColor = 'black' }: Props) => {
  return (
    <Pressable style={styles.nav} onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color={arrowColor} />
      <Text style={styles.navTitle}>{title}</Text>
    </Pressable>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  nav: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTitle: {
    marginLeft: 15,
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 22,
  },
});
