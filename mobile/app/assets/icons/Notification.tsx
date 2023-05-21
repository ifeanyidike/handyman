import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  strokeColor?: string;
  fillColor?: string;
};
const Notification = ({
  strokeColor = '#212121',
  fillColor = 'none',
}: Props) => {
  return (
    <View style={styles.container}>
      <Svg width="28" height="28" viewBox="0 0 28 28" fill={fillColor}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9957 2.93311C8.82237 2.93311 6.57459 7.61755 6.57459 10.7142C6.57459 13.0287 6.91014 12.3475 5.62903 15.1709C4.06459 19.1942 10.3557 20.8387 13.9957 20.8387C17.6346 20.8387 23.9257 19.1942 22.3624 15.1709C21.0813 12.3475 21.4168 13.0287 21.4168 10.7142C21.4168 7.61755 19.1679 2.93311 13.9957 2.93311Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.6908 23.9307C15.1808 25.6173 12.8252 25.6373 11.3008 23.9307"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
