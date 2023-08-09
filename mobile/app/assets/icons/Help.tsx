import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  size?: number;
};
const Help = (props: Props) => {
  const { size = 24 } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        clipRule="evenodd"
        d="M22.792 12.001c0 8.094-2.699 10.792-10.792 10.792S1.21 20.095 1.21 12.001C1.209 3.908 3.907 1.21 12 1.21S22.792 3.908 22.792 12z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 16.545V12M12.006 7.917h-.01"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Help;
