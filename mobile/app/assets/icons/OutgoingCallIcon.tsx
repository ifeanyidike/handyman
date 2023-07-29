import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
};
function OutgoingCallIcon(props: Props) {
  const { size = 16 } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.666 5.28v5.447c0 2.354-1.514 3.94-3.773 3.94h-5.78c-2.26 0-3.78-1.586-3.78-3.94V5.281c0-2.36 1.52-3.947 3.78-3.947h5.78c2.26 0 3.773 1.587 3.773 3.947zM7.5 6.488v4.234c0 .28.226.5.5.5.28 0 .5-.22.5-.5V6.487l1.646 1.654a.512.512 0 00.354.146.525.525 0 00.353-.146.503.503 0 000-.707l-2.5-2.513a.516.516 0 00-.707 0l-2.5 2.513a.503.503 0 000 .707c.2.193.514.193.714 0L7.5 6.487z"
        fill="#4ADE80"
      />
    </Svg>
  );
}

export default OutgoingCallIcon;
