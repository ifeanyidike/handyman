import { StyleSheet, TextInput, View, Dimensions } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

interface Props {
  Icon: any;
  SuffixIcon?: any;
  showPassword?: any;
  placeholder: string;
}

const { width } = Dimensions.get('screen');
const InputWithIcon = (props: Props) => {
  const { Icon, SuffixIcon, placeholder, showPassword } = props;

  return (
    <View style={styles.section}>
      {Icon}
      <TextInput
        secureTextEntry={showPassword !== undefined ? !showPassword : false}
        style={styles.input}
        onChangeText={() => {}}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
      ></TextInput>
      {SuffixIcon}
    </View>
  );
};

export default InputWithIcon;

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
    letterSpacing: 1.2,
    fontFamily: 'Urbanist_500Medium',
  },
});
