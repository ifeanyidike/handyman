import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  size: string;
};
const ArrowDown = ({ size }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.8337 7.08301L10.0003 12.9163L4.16699 7.08301"
        stroke="#212121"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowDown;

const styles = StyleSheet.create({});
