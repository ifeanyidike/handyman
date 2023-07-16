import React from 'react';
import { colors } from '../../utils/generalUtils';
import { Defs, LinearGradient, Path, Rect, Stop, Svg } from 'react-native-svg';

const ChatAlt = () => {
  return (
    <Svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <Rect width="56" height="56" rx="28" fill={colors.secondaryColor} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 28.015C18 22.7471 22.21 18 28.02 18C33.7 18 38 22.657 38 27.985C38 34.1642 32.96 38 28 38C26.36 38 24.54 37.5593 23.08 36.698C22.57 36.3876 22.14 36.1572 21.59 36.3375L19.57 36.9384C19.06 37.0986 18.6 36.698 18.75 36.1572L19.42 33.9139C19.53 33.6034 19.51 33.2729 19.35 33.0125C18.49 31.4301 18 29.6975 18 28.015ZM26.7 28.015C26.7 28.7261 27.27 29.2969 27.98 29.307C28.69 29.307 29.26 28.7261 29.26 28.025C29.26 27.314 28.69 26.7431 27.98 26.7431C27.28 26.7331 26.7 27.314 26.7 28.015ZM31.31 28.025C31.31 28.7261 31.88 29.307 32.59 29.307C33.3 29.307 33.87 28.7261 33.87 28.025C33.87 27.314 33.3 26.7431 32.59 26.7431C31.88 26.7431 31.31 27.314 31.31 28.025ZM23.37 29.307C22.67 29.307 22.09 28.7261 22.09 28.025C22.09 27.314 22.66 26.7431 23.37 26.7431C24.08 26.7431 24.65 27.314 24.65 28.025C24.65 28.7261 24.08 29.2969 23.37 29.307Z"
        fill="url(#paint0_linear_1522_22465)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1522_22465"
          x1="38"
          y1="38"
          x2="14.2018"
          y2="31.0999"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={colors.primaryColor} />
          <Stop offset="1" stopColor="#9D59FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default ChatAlt;
