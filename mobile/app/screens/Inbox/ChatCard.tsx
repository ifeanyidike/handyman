import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { truncateText } from '../../utils/general';
import { colors } from '../../utils/generalUtils';
import { getFormattedTime } from '../../utils/date';

type Props = {
  pic: number;
  userName: string;
  text: string;
  date: Date;
  numUnread: null | number;
  navigation: any;
};
const ChatCard = (props: Props) => {
  const { numUnread, navigation } = props;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Chat', {
          receiverName: props.userName,
        })
      }
    >
      <Image source={props.pic} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.name}>{truncateText(props.userName, 20)}</Text>
        <Text style={styles.text}>{truncateText(props.text, 30)}</Text>
      </View>
      <View style={styles.tags}>
        {numUnread ? (
          <View style={styles.numUnread}>
            <Text style={styles.numUnreadText}>
              {numUnread > 9 ? '9+' : numUnread}
            </Text>
          </View>
        ) : null}
        <Text style={styles.date}>{getFormattedTime(props.date)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 60,
    height: 60,
  },
  content: {
    marginLeft: 12,
  },
  name: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 16,
    marginBottom: 8,
  },
  text: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 12,
  },

  tags: {
    marginLeft: 'auto',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  numUnread: {
    backgroundColor: colors.primaryColor,
    borderRadius: 9999,
    marginBottom: 8,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  numUnreadText: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 10,
    color: colors.white,
  },

  date: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 13,
  },
});
