import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  fillColor: string;
};
const Chat = ({ fillColor = '#9E9E9E' }: Props) => {
  return (
    <View style={styles.container}>
      <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
        <Path
          fill-rule="evenodd"
          clipRule="evenodd"
          d="M19.671 19.0699C16.6148 22.1263 12.0894 22.7867 8.38603 21.074C7.83932 20.8539 7.39109 20.676 6.96498 20.676C5.7781 20.683 4.30077 21.8339 3.53297 21.067C2.76516 20.2991 3.91687 18.8206 3.91687 17.6266C3.91687 17.2004 3.74603 16.7602 3.52593 16.2124C1.81244 12.5096 2.47372 7.98269 5.52987 4.92721C9.43121 1.02443 15.7696 1.02443 19.671 4.9262C23.5793 8.83501 23.5723 15.1681 19.671 19.0699Z"
          stroke={fillColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.5394 12.4131H16.5484"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5297 12.4131H12.5387"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.52089 12.4131H8.52989"
          stroke={fillColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
