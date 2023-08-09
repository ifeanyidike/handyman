import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useState } from 'react';
import { colors } from '../utils/generalUtils';

const SimpleToggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Pressable
      onPress={() => setIsToggled(!isToggled)}
      style={[
        styles.container,
        {
          ...(isToggled && { justifyContent: 'flex-end' }),
          backgroundColor: colors.fainterText,
          width: 36,
          height: 19,
        },
      ]}
    >
      <Ball />
    </Pressable>
  );
};

export default SimpleToggle;

const Ball: FC<{}> = () => {
  return (
    <TouchableOpacity
      style={[
        styles.ball,
        {
          width: 18,
          height: 18,
          backgroundColor: colors.white,
          borderColor: colors.fainterText,
        },
      ]}
    ></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ball: {
    borderRadius: 999,
    borderWidth: 1,
  },
});
