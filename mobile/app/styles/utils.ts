import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/generalUtils';

export const ButtonStyle = styled.TouchableOpacity<{
  backgroundColor: string;
  width: number | string;
  padding: number;
}>`
  padding: ${props => props.padding}px;
  border-radius: 50px;
  shadow-color: ${colors.black};
  shadow-opacity: 0.25;
  shadow-radius: 50px;
  elevation: 1;
  background-color: ${props => props.backgroundColor};
  width: ${props =>
    typeof props.width === 'number' ? `${props.width}px` : props.width};
`;

export const MarkerImage = styled.Image<{ markerSize: number }>`
  width: ${props => props.markerSize}px;
  height: ${props => props.markerSize}px;
  border-radius: 999px;
`;
