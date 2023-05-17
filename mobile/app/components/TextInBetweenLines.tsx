import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

interface Props {
  text: string;
}

const { width } = Dimensions.get('screen');
const TextInBetweenLines = ({ text }: Props) => {
  return (
    <View style={styles.divider}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TextInBetweenLines;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: colors.lineFaintColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  text: {
    position: 'absolute',
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: 10,
    color: colors.faintText,
    fontFamily: 'Urbanist_500Medium',
  },
});
