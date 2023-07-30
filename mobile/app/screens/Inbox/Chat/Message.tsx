import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../../utils/generalUtils';
import { getTime } from '../../../utils/date';

const { width } = Dimensions.get('window');

type Props = {
  userId: string;
  text: string;
  date: Date;
};
const Message = (props: Props) => {
  const { userId, text, date } = props;
  return (
    <View
      style={[
        styles.commonContainer,
        userId === 'me' ? styles.userContainer : styles.receiverContainer,
      ]}
    >
      <Text
        style={[
          styles.commonText,
          userId === 'me' ? styles.userText : styles.receiverText,
        ]}
      >
        {text}
      </Text>
      <Text
        style={[
          styles.commonText,
          styles.date,
          userId === 'me' ? styles.userText : styles.receiverText,
        ]}
      >
        {getTime(date, ':')}
      </Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  commonContainer: {
    borderRadius: 15,
    padding: 16,
    maxWidth: width * 0.72,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'flex-end',
  },
  commonText: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 13,
    flexWrap: 'wrap',
    width: '90%',
  },
  userContainer: {
    marginLeft: 'auto',
    backgroundColor: colors.primaryColor,
    borderTopRightRadius: 0,
  },
  userText: {
    color: colors.white,
  },
  receiverContainer: {
    marginRight: 'auto',
    backgroundColor: colors.dim,
    borderTopLeftRadius: 0,
  },
  receiverText: {
    color: colors.textColor,
  },
  date: {
    fontSize: 12,
  },
});
