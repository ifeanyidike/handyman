import { StyleSheet } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import MarkerImageIcon from '../assets/icons/MarkerImageIcon';
import { MarkerImage } from '../styles/utils';

type Props = {
  mapStyle: any;
  latitude: number;
  longitude: number;
  markerSize?: number;
};
const Map = (props: Props) => {
  const { mapStyle, latitude, longitude, markerSize = 35 } = props;
  const delta = { latitudeDelta: 0.0932, longitudeDelta: 0.0456 };
  return (
    <MapView style={mapStyle} region={{ latitude, longitude, ...delta }}>
      <Marker
        coordinate={{ latitude, longitude }}
        title="Ifeanyi Dike"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, dolorum!"
      >
        <MarkerImageIcon>
          <MarkerImage
            markerSize={markerSize}
            style={[
              styles.markerImage,
              {
                marginLeft: 8,
                marginTop: 8,
              },
            ]}
            resizeMode="contain"
            source={require('../assets/Person2.png')}
          />
        </MarkerImageIcon>
      </Marker>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  markerImage: {
    marginLeft: 8,
    marginTop: 8,
  },
});
