import {
  Animated,
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
  const [animation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 4, // Duration in milliseconds
      useNativeDriver: true, // To optimize performance
    }).start();
  };

  const animatedStyles = {
    opacity: animation,
  };

  const handlePress = () => {
    startAnimation();
    setIsToggled(!isToggled);
  };

  return (
    <Pressable
      onPress={handlePress}
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
      <Ball animatedStyles={animatedStyles} />
    </Pressable>
  );
};

export default SimpleToggle;

type BallType = {
  animatedStyles: any;
};

const Ball: FC<BallType> = props => {
  return (
    <Animated.View
      style={[
        styles.ball,
        props.animatedStyles,
        {
          width: 18,
          height: 18,
          backgroundColor: colors.white,
          borderColor: colors.fainterText,
        },
      ]}
    ></Animated.View>
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
