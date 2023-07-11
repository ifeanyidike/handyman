import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../utils/generalUtils';

export const ButtonStyle = styled.TouchableOpacity<{
  backgroundColor: string;
  width: number | string;
}>`
  padding: 15px;
  border-radius: 50px;
  shadow-color: ${colors.black};
  shadow-opacity: 0.25;
  shadow-radius: 50px;
  elevation: 1;
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width}px;
`;

export const MarkerImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 999px;
  border-width: 2px;
`;
