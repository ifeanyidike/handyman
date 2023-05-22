import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const Painting = () => {
  return (
    <View>
      <Svg width="61" height="60" viewBox="0 0 61 60" fill="none">
        <Rect
          x="0.5"
          width="60"
          height="60"
          rx="30"
          fill="#335EF7"
          fillOpacity="0.08"
        />
        <Path
          d="M37.5003 20.6666V19.4999C37.5003 18.8583 36.9753 18.3333 36.3337 18.3333H22.3337C21.692 18.3333 21.167 18.8583 21.167 19.4999V24.1666C21.167 24.8083 21.692 25.3333 22.3337 25.3333H36.3337C36.9753 25.3333 37.5003 24.8083 37.5003 24.1666V22.9999H38.667V27.6666H28.167C27.5253 27.6666 27.0003 28.1916 27.0003 28.8333V40.4999C27.0003 41.1416 27.5253 41.6666 28.167 41.6666H30.5003C31.142 41.6666 31.667 41.1416 31.667 40.4999V29.9999H39.8337C40.4753 29.9999 41.0003 29.4749 41.0003 28.8333V21.8333C41.0003 21.1916 40.4753 20.6666 39.8337 20.6666H37.5003Z"
          fill="#1A96F0"
        />
      </Svg>
    </View>
  );
};

export default Painting;

const styles = StyleSheet.create({});
