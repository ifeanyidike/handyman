import { Dimensions } from 'react-native';
import { colors } from '../utils/generalUtils';
const { width, height } = Dimensions.get('window');

export const defaultContainer = {
  width,
  height,
  paddingTop: 30,
  fontFamily: 'Urbanist_800ExtraBold',
  backgroundColor: colors.backgroundColor,
};
