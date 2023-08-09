import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};
const Security = (props: Props) => {
  const { width = 20, height = 24 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 20 24" fill="none">
      <Path
        clipRule="evenodd"
        d="M9.982 23.206c2.724 0 8.95-2.709 8.95-10.181 0-7.471.325-8.056-.393-8.775-.719-.718-4.464-3.041-8.557-3.041-4.094 0-7.84 2.323-8.557 3.041-.718.72-.394 1.304-.394 8.775 0 7.472 6.228 10.181 8.95 10.181z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.95 11.853l2.208 2.21 4.547-4.55"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Security;
