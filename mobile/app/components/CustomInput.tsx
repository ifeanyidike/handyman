import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

interface Props {
  Icon?: any;
  SuffixIcon?: any;
  showPassword?: any;
  placeholder: string;
  value?: string;
  setSearchText?: (e: string) => void;
  customWidth?: number | string;
  height?: number;
  handleSubmit?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
}

const { width } = Dimensions.get('screen');
const CustomInput = (props: Props) => {
  const {
    Icon,
    SuffixIcon,
    placeholder,
    showPassword,
    value,
    customWidth = width - 20,
    height = 0,
  } = props;
  const handleChangeText = (text: string) => {
    if (!props.setSearchText) return;
    props.setSearchText(text);
  };
  return (
    <View
      style={[
        styles.section,
        { width: props.customWidth, ...(height && { height }) },
      ]}
    >
      {Icon}
      <TextInput
        secureTextEntry={showPassword !== undefined ? !showPassword : false}
        style={styles.input}
        onChangeText={handleChangeText}
        onSubmitEditing={props.handleSubmit}
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
    paddingHorizontal: 10,
    borderRadius: 20,
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
