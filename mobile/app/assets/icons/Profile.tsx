import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  fillColor: string;
};
const Profile = ({ fillColor = '#9E9E9E' }: Props) => {
  return (
    <View style={styles.container}>
      <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1851 15.3462C8.31751 15.3462 5.01465 15.931 5.01465 18.2729C5.01465 20.6148 8.29655 21.2205 12.1851 21.2205C16.0527 21.2205 19.3546 20.6348 19.3546 18.2938C19.3546 15.9529 16.0737 15.3462 12.1851 15.3462Z"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1851 12.0059C14.7232 12.0059 16.7803 9.94779 16.7803 7.40969C16.7803 4.8716 14.7232 2.81445 12.1851 2.81445C9.64699 2.81445 7.58889 4.8716 7.58889 7.40969C7.58032 9.93922 9.62413 11.9973 12.1527 12.0059H12.1851Z"
          stroke={fillColor}
          strokeWidth="1.42857"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
