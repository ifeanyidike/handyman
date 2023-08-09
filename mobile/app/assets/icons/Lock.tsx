import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};
const Lock = (props: Props) => {
  const { width = 20, height = 24 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 20 24" fill="none">
      <Path
        d="M15.216 8.971V6.464a5.321 5.321 0 00-10.64-.023v2.53M9.896 14.516v2.59"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M9.896 8.295c-6.703 0-8.937 1.83-8.937 7.316 0 5.488 2.234 7.317 8.937 7.317 6.702 0 8.938-1.829 8.938-7.317 0-5.487-2.236-7.316-8.938-7.316z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Lock;
