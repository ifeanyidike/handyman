import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  size?: number;
};
const Language = (props: Props) => {
  const { size = 24 } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        clipRule="evenodd"
        d="M1.209 12c0-8.093 2.698-10.791 10.792-10.791 8.093 0 10.791 2.698 10.791 10.792 0 8.093-2.698 10.791-10.791 10.791-8.094 0-10.792-2.698-10.792-10.791z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.74 14.218h.01M12.24 9.55h.01M8.728 14.218h.011"
        stroke="#212121"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Language;
