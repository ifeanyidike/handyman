import { StyleSheet } from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../../styles/general';
import CleaningBookingLanding from '../../components/Prebooking/CleaningBookingLanding';
import { colors, services } from '../../utils/generalUtils';
import CarRepairsLanding from '../../components/Prebooking/CarRepairsLanding';
import PaintingLanding from '../../components/Prebooking/PaintingLanding';
import LaundryLanding from '../../components/Prebooking/LaundryLanding';
import ApplianceLanding from '../../components/Prebooking/ApplianceLanding';
import PlumbingLanding from '../../components/Prebooking/PlumbingLanding';
import HouseShiftingLanding from '../../components/Prebooking/HouseShiftingLanding';

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
            return <CleaningBookingLanding navigation={navigation} />;
          case services.repairing:
            return <CarRepairsLanding />;
          case services.painting:
            return <PaintingLanding />;
          case services.laundry:
            return <LaundryLanding />;
          case services.appliance:
            return <ApplianceLanding />;
          case services.plumbing:
            return <PlumbingLanding />;
          case services.shifting:
            return <HouseShiftingLanding navigation={navigation} />;
          default:
            return null;
        }
      })()}
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
