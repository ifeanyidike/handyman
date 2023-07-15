import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LogoSmall from '../assets/icons/LogoSmall';

interface Props {
  title: string;
}
const LogoTitle = ({ title }: Props) => {
  return (
    <View style={styles.nav}>
      <LogoSmall />
      <Text style={styles.navTitle}>{title}</Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  navTitle: {
    marginLeft: 15,
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 20,
  },
});
