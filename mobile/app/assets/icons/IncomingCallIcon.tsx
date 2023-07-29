import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
};
function IncomingCallIcon(props: Props) {
  const { size = 16 } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.333 10.72V5.275c0-2.353 1.514-3.94 3.773-3.94h5.78c2.26 0 3.78 1.587 3.78 3.94v5.447c0 2.36-1.52 3.946-3.78 3.946h-5.78c-2.259 0-3.773-1.586-3.773-3.946zM8.5 9.515V5.281a.5.5 0 00-.5-.5c-.28 0-.5.22-.5.5v4.233L5.853 7.861a.511.511 0 00-.353-.147.525.525 0 00-.354.147.503.503 0 000 .706l2.5 2.514c.187.186.52.186.707 0l2.5-2.514a.503.503 0 000-.706.511.511 0 00-.713 0L8.5 9.514z"
        fill="#246BFD"
      />
    </Svg>
  );
}

export default IncomingCallIcon;
