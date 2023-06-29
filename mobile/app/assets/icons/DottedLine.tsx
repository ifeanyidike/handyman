import React from 'react';
import { Line, Svg } from 'react-native-svg';

const DottedLine = () => {
  return (
    <Svg width="1" height="40" viewBox="0 0 1 40" fill="none">
      <Line
        x1="0.5"
        y1="0.5"
        x2="0.499998"
        y2="39.5"
        stroke="#9E9E9E"
        strokeLinecap="round"
        strokeDasharray="6 6"
      />
    </Svg>
  );
};

export default DottedLine;
