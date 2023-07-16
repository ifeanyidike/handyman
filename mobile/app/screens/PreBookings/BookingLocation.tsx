import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { defaultContainer } from '../../utils/general';
import { colors } from '../../utils/generalUtils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamsList } from '../../types/basic';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BackButton from '../../components/BackButton';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { MarkerImage } from '../../styles/utils';
import MarkerImageIcon from '../../assets/icons/MarkerImageIcon';
import Dialog, { ModalContent } from '../../components/Dialog';
import HrLine from '../../components/HrLine';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import { Ionicons } from '@expo/vector-icons';
import { getMapAddr } from '../../utils/pagesUtils';
import Map from '../../components/Map';
const { width } = Dimensions.get('screen');

type BookingDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  'BookingLocation'
>;
const BookingLocation = (props: BookingDetailsProps) => {
  const { navigation } = props;

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [addr, setAddr] = useState<string | undefined>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // let subscription = await Location.watchPositionAsync(
      //   {
      //     accuracy: Location.LocationAccuracy.BestForNavigation,
      //     timeInterval: 5000, // Interval between location updates (in milliseconds)
      //     distanceInterval: 0, // Minimum distance between location updates (in meters)
      //   },
      //   location => {
      //     // Handle updated location data here
      //     console.log('location from subscription', location);
      //     setLocation(location);
      //   }
      // );
      // console.log('subscription', subscription);
      const addr = await getMapAddr(location);
      setAddr(addr);
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (!location?.coords) return <></>;

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} title="Your Address/Location" />

      {location?.coords?.latitude && (
        <View style={styles.mapView}>
          <Map
            latitude={location.coords.latitude}
            longitude={location.coords.longitude}
            mapStyle={styles.map}
          />

          <ModalContent
            modalOpen={true}
            fullWidth={true}
            flatBottom={true}
            pinToBottom={true}
            grayBackground={false}
            isNotModal={true}
          >
            <Text style={styles.locationTitle}>Location Details</Text>
            <HrLine space={10} />

            <Text style={styles.addr}>Address</Text>
            <View style={{ marginBottom: 15 }}>
              <CustomInput
                placeholder="Your address"
                value={addr}
                customWidth={width - 30}
                SuffixIcon={
                  <Ionicons name="location" size={24} color="black" />
                }
              />
            </View>
            <Button
              onPress={() => {}}
              text="Continue"
              backgroundColor={colors.primaryColor}
              textColor={colors.white}
            />
          </ModalContent>
        </View>
      )}
    </SafeAreaView>
  );
};

export default BookingLocation;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    backgroundColor: colors.nearWhite,
    flex: 1,
  },
  mapView: {
    marginTop: 20,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    backgroundColor: colors.primaryColor,
    padding: 5,
    borderRadius: 999,
  },
  markerImage: {
    marginLeft: 8,
    marginTop: 8,
  },
  locationTitle: {
    fontFamily: 'Urbanist_800ExtraBold',
    fontSize: 24,
  },
  addr: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 18,
    marginBottom: 15,
    alignSelf: 'flex-start',
  },
});
