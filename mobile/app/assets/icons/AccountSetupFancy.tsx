import { View } from 'react-native';
import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const AccountSetupFancy = () => {
  return (
    <View>
      <Svg width="83" height="80" viewBox="0 0 83 80" fill="none">
        <Circle cx="42.5" cy="40.5" r="31.5" fill="#4ADE80" />
        <Circle cx="79.5" cy="12.5" r="3.5" fill="#4ADE80" />
        <Circle cx="8.5" cy="4.5" r="4.5" fill="#4ADE80" />
        <Circle cx="4" cy="59" r="2" fill="#4ADE80" />
        <Circle cx="73" cy="71" r="1" fill="#4ADE80" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.7359 34.899C47.7359 38.0807 45.1848 40.632 42.0008 40.632C38.8178 40.632 36.2656 38.0807 36.2656 34.899C36.2656 31.7172 38.8178 29.167 42.0008 29.167C45.1848 29.167 47.7359 31.7172 47.7359 34.899ZM41.9997 50.8335C37.3006 50.8335 33.333 50.0698 33.333 47.1231C33.333 44.1753 37.3255 43.4386 41.9997 43.4386C46.6999 43.4386 50.6663 44.2024 50.6663 47.1491C50.6663 50.0969 46.6738 50.8335 41.9997 50.8335Z"
          fill="white"
        />
        <Circle cx="47" cy="2" r="1" fill="#4ADE80" />
        <Circle cx="27.5" cy="78.5" r="1.5" fill="#4ADE80" />
        <Circle cx="54.5" cy="76.5" r="0.5" fill="#4ADE80" />
        <Circle cx="76" cy="49" r="1" fill="#4ADE80" />
        <Circle cx="0.5" cy="33.5" r="0.5" fill="#4ADE80" />
      </Svg>
    </View>
  );
};

export default AccountSetupFancy;
