import { Path, Svg } from 'react-native-svg';

type Props = {
  size?: string;
};
const CircleSelect = ({ size = '28' }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0007 3.20898C19.96 3.20898 24.7923 8.04015 24.7923 14.0007C24.7923 19.96 19.96 24.7923 14.0007 24.7923C8.04015 24.7923 3.20898 19.96 3.20898 14.0007C3.20898 8.04132 8.04132 3.20898 14.0007 3.20898Z"
        stroke="#212121"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.5966 14.015H18.6071"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9189 14.015H13.9294"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.24215 14.015H9.25265"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CircleSelect;
