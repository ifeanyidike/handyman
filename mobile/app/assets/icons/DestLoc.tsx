import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  width?: string;
  height?: string;
};
const DestLoc = (props: Props) => {
  const { width = '24', height = '28' } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.666992 11.7573C0.666992 5.62418 5.79217 0.666992 11.9916 0.666992C18.2085 0.666992 23.3337 5.62418 23.3337 11.7573C23.3337 14.8479 22.2097 17.7172 20.3597 20.1491C18.3187 22.8317 15.8032 25.1689 12.9717 27.0036C12.3237 27.4275 11.7388 27.4595 11.0276 27.0036C8.17997 25.1689 5.66444 22.8317 3.64099 20.1491C1.78964 17.7172 0.666992 14.8479 0.666992 11.7573ZM8.2593 12.1027C8.2593 14.1573 9.93587 15.7732 11.9916 15.7732C14.0486 15.7732 15.7414 14.1573 15.7414 12.1027C15.7414 10.0641 14.0486 8.36943 11.9916 8.36943C9.93587 8.36943 8.2593 10.0641 8.2593 12.1027Z"
        fill={colors.buttonPrimaryColor}
      />
    </Svg>
  );
};

export default DestLoc;
