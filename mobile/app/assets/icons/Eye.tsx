import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};
const Eye = (props: Props) => {
  const { width = 24, height = 20 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 20" fill="none">
      <Path
        clipRule="evenodd"
        d="M15.693 10.06a3.69 3.69 0 11-7.38 0 3.69 3.69 0 017.38 0z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M1.209 10.06c0 3.827 4.832 8.519 10.794 8.519 5.96 0 10.794-4.689 10.794-8.519s-4.834-8.519-10.794-8.519c-5.962 0-10.794 4.692-10.794 8.519z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Eye;
