import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

type Props = {
  space: number;
  bg?: string;
};
const HrLine = ({ space, bg = colors.nearWhiteAlt }: Props) => {
  return (
    <View
      style={[styles.container, { marginVertical: space, backgroundColor: bg }]}
    ></View>
  );
};

export default HrLine;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 1,
  },
});
