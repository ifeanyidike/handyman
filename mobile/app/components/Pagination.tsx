import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Item } from '../types/basic';
import { colors } from '../utils/generalUtils';

interface Props {
  data: Item[];
  scrollX: Animated.Value;
  index: number;
  customPaginationStyle?: any;
}

const { width } = Dimensions.get('screen');
const Pagination = (props: Props) => {
  const { data, scrollX, index, customPaginationStyle } = props;
  return (
    <View style={[styles.container, { ...customPaginationStyle }]}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={idx}
            style={[
              styles.dot,
              { width: dotWidth, opacity },
              idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 75,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: colors.primaryColor,
  },
});
