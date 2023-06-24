import { View } from 'react-native';
import React from 'react';
import { Path, Rect, Svg } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  size: string;
};
const PlusIcon = ({ size }: Props) => {
  const rx = Number(size) / 2;
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        <Rect
          width={size}
          height={size}
          rx={`${rx}`}
          fill={colors.buttonSecondaryColor}
        />
        <Path
          d="M24.6663 19.3335H20.6663V15.3335H19.333V19.3335H15.333V20.6668H19.333V24.6668H20.6663V20.6668H24.6663V19.3335Z"
          fill={colors.buttonPrimaryColor}
        />
      </Svg>
    </View>
  );
};

export default PlusIcon;
