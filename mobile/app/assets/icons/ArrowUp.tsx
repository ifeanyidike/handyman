import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  size: string;
};
const ArrowUp = ({ size }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M4.16634 12.917L9.99967 7.08366L15.833 12.917"
        stroke="#212121"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowUp;
