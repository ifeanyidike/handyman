import React, { ReactNode } from 'react';
import { Image } from 'react-native';
import {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Pattern,
  Rect,
  Stop,
  Svg,
  Use,
} from 'react-native-svg';

type Props = {
  children: ReactNode;
};
const MarkerImageIcon = ({ children }: Props) => {
  return (
    <Svg width="53" height="62" viewBox="0 0 53 62" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.1341 57.0564C31.2862 53.3289 34.9754 50.8366 38.7295 48.7313C46.6728 44.2767 52.0409 35.7754 52.0409 26.0204C52.0409 11.6497 40.3911 0 26.0204 0C11.6497 0 0 11.6497 0 26.0204C0 35.7756 5.36823 44.277 13.3117 48.7315C17.066 50.8369 20.7554 53.3291 22.9075 57.0568L25.1547 60.9489C25.5396 61.6156 26.5018 61.6156 26.8867 60.9489L29.1341 57.0564Z"
        fill="url(#paint0_linear_1149_27737)"
      />
      <Rect
        x="8.5"
        y="8.5"
        width="35"
        height="35"
        rx="17.5"
        fill="url(#paint1_linear_1149_27737)"
      />
      <Circle cx="26" cy="26" r="16" fill="url(#pattern0)" />
      <Rect
        x="8.5"
        y="8.5"
        width="35"
        height="35"
        rx="17.5"
        stroke="white"
        strokeWidth="3"
      />

      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use xlinkHref="#image0_1149_27737" transform="scale(0.00333333)" />
        </Pattern>
        <LinearGradient
          id="paint0_linear_1149_27737"
          x1="52.0409"
          y1="61.4489"
          x2="-11.2714"
          y2="45.9026"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7210FF" />
          <Stop offset="1" stopColor="#9D59FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1149_27737"
          x1="42"
          y1="42"
          x2="3.92287"
          y2="30.9599"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7210FF" />
          <Stop offset="1" stopColor="#9D59FF" />
        </LinearGradient>
        {children}
      </Defs>
    </Svg>
  );
};

export default MarkerImageIcon;
