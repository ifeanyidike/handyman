import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  strokeColor?: string;
  fillColor?: string;
};
const Filter = ({
  strokeColor = colors.buttonPrimaryColor,
  fillColor = 'none',
}: Props) => {
  return (
    <View>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill={fillColor}>
        <Path
          d="M8.60802 13.8274H3.35742"
          stroke={strokeColor}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.9502 5.75023H16.2008"
          stroke={strokeColor}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.27158 5.70521C7.27158 4.6255 6.38978 3.75 5.30229 3.75C4.21481 3.75 3.33301 4.6255 3.33301 5.70521C3.33301 6.78492 4.21481 7.66042 5.30229 7.66042C6.38978 7.66042 7.27158 6.78492 7.27158 5.70521Z"
          stroke={strokeColor}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.6661 13.7948C16.6661 12.7151 15.785 11.8396 14.6975 11.8396C13.6093 11.8396 12.7275 12.7151 12.7275 13.7948C12.7275 14.8745 13.6093 15.75 14.6975 15.75C15.785 15.75 16.6661 14.8745 16.6661 13.7948Z"
          stroke={strokeColor}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Filter;
