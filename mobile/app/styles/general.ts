import { Dimensions } from 'react-native';
import { colors } from '../utils/generalUtils';
const { width, height } = Dimensions.get('screen');

export const defaultContainer = {
  width,
  height,
  paddingTop: 15,
  fontFamily: 'Urbanist_800ExtraBold',
  backgroundColor: colors.backgroundColor,
};
