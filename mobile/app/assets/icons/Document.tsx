import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  fillColor: string;
};

const Document = ({ fillColor = '#9E9E9E' }: Props) => {
  return (
    <View style={styles.container}>
      <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
        <Path
          d="M16.1155 16.2236H8.89551"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.1155 12.0371H8.89551"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.6515 7.86035H8.89648"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.3084 2.75C16.3084 2.75 8.63139 2.754 8.61939 2.754C5.85939 2.771 4.15039 4.587 4.15039 7.357V16.553C4.15039 19.337 5.87239 21.16 8.65639 21.16C8.65639 21.16 16.3324 21.157 16.3454 21.157C19.1054 21.14 20.8154 19.323 20.8154 16.553V7.357C20.8154 4.573 19.0924 2.75 16.3084 2.75Z"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Document;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
