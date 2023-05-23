import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  fillColor?: string;
  strokeColor?: string;
};
const Bookmark = ({ strokeColor = '#212121', fillColor = 'none' }: Props) => {
  return (
    <View style={styles.container}>
      <Svg width="28" height="28" viewBox="0 0 28 28">
        <Path
          d="M9.96582 10.754H17.9633"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9653 2.91675C6.51378 2.91675 5.25495 4.00408 5.25495 12.7506C5.25495 22.5424 5.07178 25.0834 6.93378 25.0834C8.79462 25.0834 11.8338 20.7854 13.9653 20.7854C16.0968 20.7854 19.1359 25.0834 20.9968 25.0834C22.8588 25.0834 22.6756 22.5424 22.6756 12.7506C22.6756 4.00408 21.4168 2.91675 13.9653 2.91675Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
