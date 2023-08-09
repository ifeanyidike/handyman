import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};
const Logout = (props: Props) => {
  const { width = 26, height = 24, color = colors.status } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 26 24" fill="none">
      <Path
        d="M24.423 12.142H10.375M21.009 8.74l3.416 3.402-3.416 3.402M18.087 6.902C17.702 2.726 16.139 1.21 9.92 1.21c-8.284 0-8.284 2.695-8.284 10.792 0 8.096 0 10.791 8.284 10.791 6.219 0 7.782-1.516 8.167-5.693"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Logout;
