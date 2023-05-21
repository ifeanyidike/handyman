import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};
const Search = ({ fillColor = 'none', strokeColor = '#BDBDBD' }: Props) => {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill={fillColor}>
        <Circle
          cx="9.80589"
          cy="9.80541"
          r="7.49047"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.0156 15.4043L17.9523 18.3334"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Search;
