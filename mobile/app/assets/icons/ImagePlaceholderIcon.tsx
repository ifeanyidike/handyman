import { Path, Svg } from 'react-native-svg';

type Props = {
  size?: number;
};
const ImagePlaceholderIcon = ({ size = 20 }: Props) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        clipRule="evenodd"
        d="M13.585 2.291h-7.21c-2.51 0-4.084 1.778-4.084 4.295v6.788c0 2.517 1.568 4.295 4.084 4.295h7.206c2.52 0 4.088-1.778 4.088-4.295V6.586c.003-2.517-1.565-4.295-4.084-4.295z"
        stroke="#9E9E9E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M8.918 7.32a1.538 1.538 0 11-3.075 0 1.538 1.538 0 013.075 0z"
        stroke="#9E9E9E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.672 12.46c-.769-.793-2.248-2.392-3.856-2.392-1.61 0-2.537 3.528-4.084 3.528-1.548 0-2.954-1.595-4.194-.573-1.24 1.022-2.413 3.111-2.413 3.111"
        stroke="#9E9E9E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ImagePlaceholderIcon;
