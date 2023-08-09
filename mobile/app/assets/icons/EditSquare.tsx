import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from '../../utils/generalUtils';

type Props = {
  size?: number;
};
const EditSquare = (props: Props) => {
  const { size = 30 } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.832 2.513a6.654 6.654 0 014.907 1.736 6.726 6.726 0 011.748 4.92V20.83a6.716 6.716 0 01-1.735 4.92 6.683 6.683 0 01-4.92 1.736H9.169a6.665 6.665 0 01-4.92-1.736 6.665 6.665 0 01-1.736-4.92V9.17a6.665 6.665 0 011.736-4.92 6.665 6.665 0 014.92-1.736h11.663zm-7.106 18.543l8.404-8.429a1.982 1.982 0 000-2.784L20.507 8.22a1.975 1.975 0 00-2.797 0l-.837.849a.332.332 0 000 .462s1.986 1.973 2.023 2.023c.137.15.225.35.225.574 0 .45-.362.824-.824.824a.784.784 0 01-.55-.225l-2.085-2.072c-.1-.1-.275-.1-.375 0L9.331 16.61c-.412.412-.65.961-.662 1.548l-.075 2.96c0 .162.05.312.163.424a.595.595 0 00.424.175h2.935c.599 0 1.173-.237 1.61-.662z"
        fill={colors.primaryColor}
      />
    </Svg>
  );
};

export default EditSquare;
