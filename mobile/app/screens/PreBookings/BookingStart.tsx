import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../../styles/general';
import CleaningBookingLanding from '../../components/Prebooking/CleaningBookingLanding';
import { colors, services } from '../../utils/generalUtils';
import Button from '../../components/Button';
import CarRepairsLanding from '../../components/Prebooking/CarRepairsLanding';

type BookingStartProps = NativeStackScreenProps<
  RootStackParamsList,
  'BookingStart'
>;
const BookingStart = (props: BookingStartProps) => {
  const { navigation, route } = props;
  const { serviceName, serviceKey } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} title={serviceName} />
      {(() => {
        switch (serviceKey) {
          case services.cleaning:
            return <CleaningBookingLanding />;
          case services.repairing:
            return <CarRepairsLanding />;
          default:
            return null;
        }
      })()}
      <Button text="Continue" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default BookingStart;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    height: defaultContainer.height,
    backgroundColor: colors.lineFainterColor,
  },
});
