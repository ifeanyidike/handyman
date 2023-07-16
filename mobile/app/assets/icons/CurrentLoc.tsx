import React from 'react';
import { Circle, Svg } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  size?: string;
};
const CurrentLoc = (props: Props) => {
  const { size = '28' } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Circle cx="14" cy="14" r="7" fill={colors.primaryColor} />
      <Circle
        cx="14"
        cy="14"
        r="13"
        stroke={colors.primaryColor}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default CurrentLoc;
