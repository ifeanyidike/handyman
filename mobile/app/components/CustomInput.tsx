import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

interface Props {
  Icon?: any;
  SuffixIcon?: any;
  showPassword?: any;
  placeholder: string;
  value?: string;
}

const { width } = Dimensions.get('screen');
const CustomInput = (props: Props) => {
  const { Icon, SuffixIcon, placeholder, showPassword, value } = props;

  return (
    <View style={styles.section}>
      {Icon}
      <TextInput
        secureTextEntry={showPassword !== undefined ? !showPassword : false}
        style={styles.input}
        onChangeText={() => {}}
        underlineColorAndroid="transparent"
        placeholder={placeholder || ''}
        value={value || ''}
      ></TextInput>
      {SuffixIcon}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.nearWhiteAlt,
    borderColor: colors.lineFainterColor,
    borderWidth: 1,
    height: 60,
    width: width - 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  icon: {},
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: '#424242',
    fontFamily: 'Urbanist_500Medium',
  },
});
