import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  size?: number;
};
function CircleMicIcon(props: Props) {
  const { size = 56 } = props;

  return (
    <Svg width={size} height={size} viewBox="0 0 56 56" fill="none" {...props}>
      <Rect
        width={size}
        height={size}
        rx={size / 2}
        fill="url(#paint0_linear_1153_32805)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.175 31.217h-.35c-2.403 0-4.351-1.924-4.351-4.297v-4.623c0-2.373 1.948-4.297 4.351-4.297h.35c2.403 0 4.352 1.924 4.352 4.297v4.623c0 2.373-1.949 4.297-4.352 4.297zm6.388-4.434c0-.53.434-.957.968-.957.535 0 .969.428.969.957 0 4.304-3.3 7.857-7.53 8.335v1.925A.963.963 0 0128 38a.962.962 0 01-.968-.957v-1.925c-4.233-.478-7.532-4.031-7.532-8.335 0-.53.434-.957.969-.957.534 0 .968.428.968.957 0 3.573 2.944 6.48 6.563 6.48 3.619 0 6.563-2.907 6.563-6.48z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1153_32805"
          x1={size}
          y1={size}
          x2={-10.635}
          y2={36.6798}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors.primaryColor} />
          <Stop offset={1} stopColor="#9D59FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default CircleMicIcon;
