import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

type Props = {
  space: number;
};
const HrLine = ({ space }: Props) => {
  return <View style={[styles.container, { marginVertical: space }]}></View>;
};

export default HrLine;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
    backgroundColor: colors.nearWhiteAlt,
  },
});
