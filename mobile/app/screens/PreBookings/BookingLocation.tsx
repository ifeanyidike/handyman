import { Image, StyleSheet, Text, View } from 'react-native';
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

type BookingDetailsProps = NativeStackScreenProps<
  RootStackParamsList,
  'BookingLocation'
>;
const BookingLocation = (props: BookingDetailsProps) => {
  const { navigation } = props;

  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

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
          <MapView
            style={styles.map}
            region={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location?.coords?.latitude,
                longitude: location?.coords?.longitude,
              }}
              title="Ifeanyi Dike"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, dolorum!"
              //   image={require('../../assets/Person.png')}
            >
              <View style={styles.marker}>
                <MarkerImage
                  style={styles.markerImage}
                  resizeMode="contain"
                  source={require('../../assets/Person.png')}
                />
              </View>
            </Marker>
          </MapView>
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
    backgroundColor: colors.buttonPrimaryColor,
    padding: 6,
    borderRadius: 999,
  },
  markerImage: {
    borderColor: colors.white,
  },
});
