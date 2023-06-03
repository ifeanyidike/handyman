import { Dimensions } from 'react-native';
import { colors } from '../utils/generalUtils';
const { width, height } = Dimensions.get('screen');
console.log('height', height);
export const defaultContainer = {
  width,
  height: height - 80,
  paddingTop: 30,
  fontFamily: 'Urbanist_800ExtraBold',
  backgroundColor: colors.backgroundColor,
};
