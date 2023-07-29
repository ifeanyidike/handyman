import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
};
function MissedCallIcon(props: Props) {
  const { size = 16 } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.113 1.332h5.78c2.26 0 3.773 1.587 3.773 3.947v5.447c0 2.353-1.513 3.94-3.773 3.94h-5.78c-2.26 0-3.78-1.587-3.78-3.94V5.279c0-2.36 1.52-3.947 3.78-3.947zm4.893 8.667a.579.579 0 000-.82L8.82 7.993l1.186-1.188a.587.587 0 000-.826.586.586 0 00-.826 0L8 7.165 6.813 5.98a.586.586 0 00-.827 0 .587.587 0 000 .826l1.187 1.188-1.187 1.18a.587.587 0 00.414 1c.153 0 .3-.061.413-.174L8 8.819 9.186 10c.114.12.26.174.407.174.153 0 .3-.061.413-.174z"
        fill="#F75555"
      />
    </Svg>
  );
}

export default MissedCallIcon;
