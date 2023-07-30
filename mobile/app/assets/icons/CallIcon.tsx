import { Path, Svg } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  size?: string;
  stroke?: string;
};
const CallIcon = ({ size = '28', stroke = colors.primaryColor }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.454 14.5505C18.108 19.2031 19.1637 13.8205 22.1269 16.7816C24.9836 19.6376 26.6256 20.2098 23.0061 23.8282C22.5527 24.1925 19.6722 28.576 9.54903 18.4556C-0.575399 8.33402 3.80551 5.45053 4.16996 4.99729C7.79817 1.36884 8.3605 3.0203 11.2172 5.87623C14.1804 8.83859 8.80009 9.89783 13.454 14.5505Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CallIcon;
