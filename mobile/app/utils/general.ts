import { Dimensions } from 'react-native';
import { colors } from './generalUtils';
const { width, height } = Dimensions.get('window');

export const defaultContainer = {
  width,
  height,
  paddingTop: 30,
  fontFamily: 'Urbanist_800ExtraBold',
  backgroundColor: colors.backgroundColor,
};

export const shadowElevation = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 1,
  elevation: 1,
  borderColor: colors.secondaryColor,
  borderWidth: 1,
};
