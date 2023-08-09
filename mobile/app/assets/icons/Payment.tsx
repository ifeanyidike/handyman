import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};
const Payment = (props: Props) => {
  const { width = 24, height = 23 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 23" fill="none">
      <Path
        d="M22.7 14.122h-4.535a2.99 2.99 0 010-5.981h4.499M18.675 11.063h-.347M6.873 6.503h4.737"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M1.166 11.296c0-7.472 2.712-9.962 10.851-9.962 8.138 0 10.85 2.49 10.85 9.962 0 7.471-2.712 9.962-10.85 9.962-8.139 0-10.851-2.49-10.851-9.962z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Payment;
