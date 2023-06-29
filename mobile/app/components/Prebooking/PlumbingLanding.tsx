import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomInput from '../CustomInput';
import Button from '../Button';

const PlumbingLanding = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.actionText}>
          Enter the number of pipes and the damage.
        </Text>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Number of Water Pipes</Text>
          <CustomInput placeholder="ex. 7" />
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Damage Occurred</Text>
          <CustomInput placeholder="Water pipe jammed and leaking" />
        </View>
      </ScrollView>
      <Button text="Continue" onPress={() => {}} />
    </>
  );
};

export default PlumbingLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  actionText: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 12,
    marginVertical: 20,
  },
  content: {
    gap: 5,
    marginBottom: 25,
  },
  contentTitle: {
    fontFamily: 'Urbanist_600SemiBold',
  },
});
