import { Dimensions } from 'react-native';
import { colors } from '../utils/generalUtils';
const { width, height } = Dimensions.get('screen');

export const defaultContainer = {
  width,
  height,
  paddingTop: 30,
  backgroundColor: colors.backgroundColor,
};
