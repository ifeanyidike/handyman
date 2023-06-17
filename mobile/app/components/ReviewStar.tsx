import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../utils/generalUtils';

type Props = {
  isClicked?: boolean;
  item: string;
};
const ReviewStar = (props: Props) => {
  const { isClicked, item } = props;
  return (
    <View style={styles.stars}>
      <AntDesign
        name="star"
        style={[styles.star, isClicked && { color: colors.backgroundColor }]}
      />
      <Text
        style={[styles.starNum, isClicked && { color: colors.backgroundColor }]}
      >
        {item}
      </Text>
    </View>
  );
};

export default ReviewStar;

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  star: {
    fontSize: 16,
    fontFamily: 'Urbanist_400Regular',
    color: colors.buttonPrimaryColor,
  },
  starNum: {
    fontFamily: 'Urbanist_600SemiBold',
    color: colors.buttonPrimaryColor,
  },
});
