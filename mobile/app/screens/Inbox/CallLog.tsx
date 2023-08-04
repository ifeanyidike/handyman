import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils/generalUtils';
import FloatingIcon from '../../components/FloatingIcon';
import CallCard from './CallCard';
import Empty from './Empty';
import { CallType, InboxType } from '../../types/basic';
const { height } = Dimensions.get('window');

const ChatLog = () => {
  return (
    <View style={styles.container}>
      <FloatingIcon onPress={() => {}} />
      {data?.length ? (
        <>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={data}
            renderItem={({ item, index }) => (
              <CallCard
                pic={item.pic}
                userName={item.userName}
                date={item.date}
                type={item.type}
              />
            )}
            snapToAlignment="center"
            style={{ flex: 1 }}
          />
        </>
      ) : (
        <Empty type={InboxType.call} />
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
  },
});

const data = [
  {
    pic: require('../../assets/Person.png'),
    userName: 'Kylee Danford',
    date: new Date(),
    type: CallType.incoming,
  },
  {
    pic: require('../../assets/Person2.png'),
    userName: 'Alfonzo Schuessler',
    date: new Date(new Date().setDate(new Date().getDate() - 1)),
    type: CallType.outgoing,
  },
  {
    pic: require('../../assets/Person3.png'),
    userName: 'Benny Spanbauer',
    date: new Date(),
    type: CallType.missed,
  },
  {
    pic: require('../../assets/Person.png'),
    userName: 'Marci Senter',
    date: new Date(new Date().setDate(new Date().getDate() - 2)),
    type: CallType.outgoing,
  },
  {
    pic: require('../../assets/Person2.png'),
    userName: 'Kylee Danford',
    date: new Date(),
    type: CallType.incoming,
  },
  {
    pic: require('../../assets/Person3.png'),
    userName: 'Merrill Kervin',
    date: new Date(new Date().setDate(new Date().getDate() - 3)),
    type: CallType.outgoing,
  },
  {
    pic: require('../../assets/Person.png'),
    userName: 'Pedro Huard',
    date: new Date(),
    type: CallType.incoming,
  },
  {
    pic: require('../../assets/Person2.png'),
    userName: 'Edgar Torrey',
    date: new Date(new Date().setDate(new Date().getDate() - 4)),
    type: CallType.missed,
  },
];
