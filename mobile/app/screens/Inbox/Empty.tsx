import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NotFoundIcon from '../../assets/icons/NotFoundIcon';
import { InboxType } from '../../types/basic';

type Props = {
  type: InboxType;
};
const Empty = (props: Props) => {
  return (
    <View style={styles.container}>
      <NotFoundIcon />
      <Text style={styles.title}>
        You have no {props.type.toLowerCase()} log
      </Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 100,
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Urbanist_500Medium',
    fontSize: 18,
    textAlign: 'center',
  },
});
