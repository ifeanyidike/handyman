import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import EmptyCards from '../../assets/icons/EmptyCards';

const NotFound = () => {
  return (
    <View style={styles.container}>
      <EmptyCards />
      <Text style={styles.title}>You have no service booking</Text>
      <Text style={styles.text}>
        You don't have a service booking on this date.
      </Text>
    </View>
  );
};

export default NotFound;

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
    fontFamily: 'Urbanist_700Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
});
