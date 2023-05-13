import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Item } from '../types/basic';
import { colors } from '../utils/generalUtils';

const { width, height } = Dimensions.get('screen');
const CustomLogin = ({ img, text }: Item) => {
  return (
    <View style={styles.container}>
      <Image source={img} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default CustomLogin;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lineFaintColor,
    borderRadius: 15,
    width: width - 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
  },
  text: {
    marginLeft: 10,
  },
});
