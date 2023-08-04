import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Message from './Message';
import { MessageData } from '../../../types/basic';

type Props = {
  messages: MessageData[];
};
const MessageArea = (props: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={props.messages}
        renderItem={({ item, index }) => <Message {...item} />}
        snapToAlignment="center"
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MessageArea;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 10,
    marginTop: 20,
    flex: 1,
  },
  contentContainer: {
    gap: 30,
    marginVertical: 30,
    paddingBottom: 100,
  },
});
