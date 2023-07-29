import * as React from 'react';
import Svg, { G, Rect, Path, Defs } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  size: number;
  bg: string;
};
function FloatingIconSvg(props: Props) {
  const { size, bg } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 102 106"
      fill="none"
      {...props}
    >
      <G filter="url(#filter0_d_1153_32875)">
        <Rect x={20} y={16} width={58} height={58} rx={29} fill={bg} />
        <Path
          d="M49.06 39.103v11.915M55.024 45.06H43.098"
          stroke={colors.white}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default FloatingIconSvg;
