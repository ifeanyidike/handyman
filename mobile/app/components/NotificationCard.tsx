import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

type Props = {
  Icon: any;
  title: string;
  text: string;
};
const NotificationCard = (props: Props) => {
  const { title, text, Icon } = props;

  return (
    <View style={styles.container}>
      {Icon}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    gap: 20,
    padding: 20,
    fontFamily: 'Urbanist_400Regular',
    marginVertical: 10,
    marginHorizontal: 5,
    backgroundColor: colors.backgroundColor,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 3,
  },
  content: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  title: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontFamily: 'Urbanist_300Light',
    fontSize: 12,
  },
});
