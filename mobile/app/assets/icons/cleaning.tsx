import { StyleSheet, View } from 'react-native';
import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const Cleaning = () => {
  return (
    <View>
      <Svg width="61" height="60" viewBox="0 0 61 60" fill="none">
        <Rect
          x="0.5"
          width="60"
          height="60"
          rx="30"
          fill="#7210FF"
          fillOpacity="0.08"
        />
        <Path
          d="M35.1667 28.8334H34V19.5001C34 18.2167 32.95 17.1667 31.6667 17.1667H29.3333C28.05 17.1667 27 18.2167 27 19.5001V28.8334H25.8333C22.6133 28.8334 20 31.4467 20 34.6667V42.8334H41V34.6667C41 31.4467 38.3867 28.8334 35.1667 28.8334ZM38.6667 40.5001H36.3333V37.0001C36.3333 36.3584 35.8083 35.8334 35.1667 35.8334C34.525 35.8334 34 36.3584 34 37.0001V40.5001H31.6667V37.0001C31.6667 36.3584 31.1417 35.8334 30.5 35.8334C29.8583 35.8334 29.3333 36.3584 29.3333 37.0001V40.5001H27V37.0001C27 36.3584 26.475 35.8334 25.8333 35.8334C25.1917 35.8334 24.6667 36.3584 24.6667 37.0001V40.5001H22.3333V34.6667C22.3333 32.7417 23.9083 31.1667 25.8333 31.1667H35.1667C37.0917 31.1667 38.6667 32.7417 38.6667 34.6667V40.5001Z"
          fill="#7210FF"
        />
      </Svg>
    </View>
  );
};

export default Cleaning;

const styles = StyleSheet.create({});
