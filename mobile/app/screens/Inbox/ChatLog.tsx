import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/generalUtils';
import ChatCard from './ChatCard';
import Empty from './Empty';

import FloatingIcon from '../../components/FloatingIcon';
import { InboxType } from '../../types/basic';
const { height } = Dimensions.get('window');

type Props = {
  route: any;
  navigation: any;
};

const ChatLog = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <FloatingIcon onPress={() => {}} />
      {data?.length ? (
        <>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={({ item, index }) => (
              <ChatCard
                pic={item.pic}
                userName={item.userName}
                text={item.text}
                date={item.date}
                numUnread={item.numUnread}
                navigation={navigation}
              />
            )}
            snapToAlignment="center"
            style={{ flex: 1 }}
          />
        </>
      ) : (
        <Empty type={InboxType.chat} />
      )}
    </View>
  );
};

export default ChatLog;

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    gap: 30,
    marginVertical: 30,
    paddingBottom: 100,
  },
});

const data = [
  {
    pic: require('../../assets/Person.png'),
    userName: 'Kylee Danford',
    text: 'I have booked your house',
    date: new Date(),
    numUnread: 2,
  },
  {
    pic: require('../../assets/Person2.png'),
    userName: 'Alfonzo Schuessler',
    text: 'I just finished it 😄🤣',
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    numUnread: 3,
  },
  {
    pic: require('../../assets/Person3.png'),
    userName: 'Benny Spanbauer',
    text: 'Omg! This is amazing.🔥🔥🔥',
    date: new Date(),
    numUnread: null,
  },
  {
    pic: require('../../assets/Person.png'),
    userName: 'Marci Senter',
    text: 'Wow, this is really epic 😎',
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    numUnread: 2,
  },
  {
    pic: require('../../assets/Person2.png'),
    userName: 'Kylee Danford',
    text: 'Just ideas for next time 😆',
    date: new Date(),
    numUnread: null,
  },
  {
    pic: require('../../assets/Person3.png'),
    userName: 'Merrill Kervin',
    text: 'How are you? 😄😄',
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
    numUnread: null,
  },
  {
    pic: require('../../assets/Person.png'),
    userName: 'Pedro Huard',
    text: 'perfect! 💯💯💯',
    date: new Date(),
    numUnread: null,
  },
  {
    pic: require('../../assets/Person2.png'),
    userName: 'Edgar Torrey',
    text: 'Just ideas for next time 😆',
    date: new Date(new Date().setDate(new Date().getDate() - 4)),
    numUnread: null,
  },
];
