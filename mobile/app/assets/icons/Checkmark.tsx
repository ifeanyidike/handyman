import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';
type Props = {
  width?: string;
  height?: string;
  color?: string;
};
const Checkmark = (props: Props) => {
  const { color = colors.backgroundColor, width = '30', height = '22' } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 30 22" fill="none">
      <Path
        d="M3 11L11 19L27 3"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Checkmark;
