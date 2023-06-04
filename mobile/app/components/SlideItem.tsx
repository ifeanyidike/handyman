import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import type { Item } from '../types/basic';

interface Props {
  item: Item;
  customImageStyle: any;
  disableAnimation?: boolean;
}
const { width, height } = Dimensions.get('screen');

const SlideItem = (props: Props) => {
  const { item, disableAnimation = false, customImageStyle = {} } = props;
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();
  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            ...customImageStyle,
            ...(!disableAnimation && {
              transform: [
                {
                  translateY: translateYImage,
                },
              ],
            }),
          },
        ]}
      />
      {item.text && (
        <View style={styles.content}>
          <Text style={styles.title}>{item.text}</Text>
        </View>
      )}
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height: height - 200,
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    width: '80%',
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#333',
    fontFamily: 'Urbanist_800ExtraBold',
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
