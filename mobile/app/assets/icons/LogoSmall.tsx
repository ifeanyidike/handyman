import React from 'react';
import {
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
} from 'react-native-svg';

const LogoSmall = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <G id="Type=Logo Default, Component=Logo">
        <Rect
          id="Rectangle"
          width="32"
          height="32"
          rx="12"
          fill="url(#paint0_linear_1522_27586)"
        />
        <G id="Vector">
          <Path
            d="M10.1328 6.40732V17.2422C10.3769 22.6958 17.3212 20.8974 17.3073 19.292C16.9595 19.8384 14.1214 20.366 14.1739 18.3842V8.98426C13.969 6.9345 12.3477 6.32677 10.1328 6.40732Z"
            fill="white"
          />
          <Path
            d="M21.9926 25.5935V14.7586C21.7485 9.30499 14.8043 11.1034 14.8182 12.7088C15.1659 12.1624 18.004 11.6348 17.9515 13.6165V23.0165C18.1564 25.0663 19.7778 25.674 21.9926 25.5935Z"
            fill="white"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1522_27586"
          x1="32"
          y1="32"
          x2="-6.07713"
          y2="20.9599"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7210FF" />
          <Stop offset="1" stopColor="#9D59FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default LogoSmall;
