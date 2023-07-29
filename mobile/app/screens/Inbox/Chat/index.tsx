import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from '../../../components/BackButton';
import { RootStackParamsList } from '../../../types/basic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { defaultContainer } from '../../../utils/general';
import { SafeAreaView } from 'react-native-safe-area-context';

// type ChatProps = NativeStackScreenProps<
//   RootStackParamsList,
//   'BookingDetails'
// >;
const index = (props: any) => {
  const { navigation, route } = props;
  console.log('route', route);
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <BackButton title={route.params.receiverName} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { ...defaultContainer },
});
