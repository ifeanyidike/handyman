import React from 'react';
import { Path, Svg } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};
const Persons = (props: Props) => {
  const { width = 26, height = 22 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 26 22" fill="none">
      <Path
        clipRule="evenodd"
        d="M12.968 20.763c-3.779 0-7.007-.571-7.007-2.86 0-2.29 3.207-4.282 7.007-4.282 3.779 0 7.007 1.974 7.007 4.262 0 2.288-3.207 2.88-7.007 2.88zM12.967 10.357a4.491 4.491 0 10-4.491-4.49 4.476 4.476 0 004.46 4.49h.031z"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.422 9.125a3.385 3.385 0 00-.194-6.584M21.1 12.803c2.046 0 3.794 1.387 3.794 2.626 0 .73-.604 1.524-1.518 1.738M5.514 9.125a3.385 3.385 0 01.193-6.584M4.835 12.803c-2.046 0-3.794 1.387-3.794 2.626 0 .73.603 1.524 1.519 1.738"
        stroke="#212121"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Persons;
