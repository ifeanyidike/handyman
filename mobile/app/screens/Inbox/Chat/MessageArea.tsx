import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Message from './Message';

const MessageArea = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={messageData}
        renderItem={({ item, index }) => <Message {...item} />}
        snapToAlignment="center"
        showsVerticalScrollIndicator={true}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MessageArea;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    // marginLeft: 15,
    // marginRight: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: 20,
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  contentContainer: {
    gap: 30,
    marginVertical: 30,
    paddingBottom: 100,
  },
});

const messageData = [
  {
    userId: 'me',
    text: 'Hi Jenny, good morning 😄',
    date: new Date(),
  },
  {
    userId: 'me',
    text: 'I have booked your house cleaning service for December 23 at 10 AM 😁',
    date: new Date(),
  },
  {
    userId: 'other_user',
    text: 'Hi, morning too Andrew!',
    date: new Date(),
  },
  {
    userId: 'other_user',
    text: 'Yes, I have received your order. I will come on that date! 😁😁',
    date: new Date(),
  },
  {
    userId: 'me',
    text: 'Good, thanks Jenny...',
    date: new Date(),
  },
  {
    userId: 'me',
    text: 'Here I send a photo of room & my house 😁😁',
    date: new Date(),
  },
  {
    userId: 'other_user',
    text: 'Hi, morning too Andrew!',
    date: new Date(),
  },
  {
    userId: 'other_user',
    text: 'Yes, I have received your order. I will come on that date! 😁😁',
    date: new Date(),
  },
];
