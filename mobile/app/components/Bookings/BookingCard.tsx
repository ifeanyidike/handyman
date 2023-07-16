import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../utils/generalUtils';
import ChatAlt from '../../assets/icons/ChatAlt';
import { shadowElevation } from '../../utils/general';
import HrLine from '../HrLine';
import ArrowDown from '../../assets/icons/ArrowDown';
import ArrowUp from '../../assets/icons/ArrowUp';
import Map from '../Map';
import ButtonGroup from '../../screens/ButtonGroup';
import { BookingStatus } from '../../types/basic';

type Props = {
  Icon: number;
  serviceName: string;
  userName: string;
  status: BookingStatus;
  address: string;
  lat: number;
  lng: number;
};
const BookingCard = (props: Props) => {
  const { Icon, serviceName, userName, status } = props;
  const tag = status?.toLowerCase();
  const [open, toggleOpen] = useState(false);

  const leftAction = { btn: () => {}, text: 'Cancel Booking' };
  const rightAction = { btn: () => {}, text: 'View E-Receipt' };
  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Image style={styles.image} source={Icon} resizeMode="contain" />
        <View style={styles.content}>
          <Text style={styles.title}>{serviceName}</Text>
          <Text style={styles.user}>{userName}</Text>
          <View
            style={[
              styles.status,
              {
                backgroundColor:
                  tag === 'upcoming'
                    ? colors.primaryColor
                    : tag === 'completed'
                    ? colors.green
                    : colors.status,
              },
            ]}
          >
            <Text style={styles.statusText}>{status}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.chat}>
          <ChatAlt />
        </TouchableOpacity>
      </View>
      <HrLine space={20} bg={colors.secondaryColor} />
      {open && (
        <View style={styles.togglePanel}>
          <View style={styles.infoContent}>
            <View style={styles.item}>
              <Text style={styles.caption}>Date & Time</Text>
              <Text style={styles.desc}>Dec 23, 2024 | 10:00 - 12:00 AM</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.caption}>Location</Text>
              <Text style={styles.desc}>{props.address}</Text>
            </View>
          </View>
          <Map
            latitude={props.lat}
            longitude={props.lng}
            mapStyle={styles.mapStyle}
            markerSize={35}
          />
          <View style={styles.action}>
            <ButtonGroup
              padding={8}
              leftAction={leftAction}
              rightAction={rightAction}
              customWidth={150}
              groupWidth="100%"
              justifyType="space-between"
            />
          </View>
        </View>
      )}
      <TouchableOpacity
        style={styles.toggleBtn}
        onPress={() => toggleOpen(!open)}
      >
        {open ? <ArrowUp size="25" /> : <ArrowDown size="25" />}
      </TouchableOpacity>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 8,
    ...shadowElevation,
  },
  topContent: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  content: {
    gap: 10,
  },
  title: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 16,
  },
  user: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 11,
  },
  status: {
    borderRadius: 8,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  statusText: {
    fontFamily: 'Urbanist_500Medium',
    fontSize: 10,
    color: colors.white,
  },
  chat: {
    position: 'absolute',
    right: 10,
    bottom: 25,
  },
  toggleBtn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  togglePanel: {
    gap: 15,
  },
  infoContent: {
    gap: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caption: { fontFamily: 'Urbanist_400Regular', fontSize: 12 },
  desc: { fontFamily: 'Urbanist_500Medium', fontSize: 12 },
  mapStyle: {
    width: '100%',
    height: 200,
    borderRadius: 50,
  },
  action: {},
});
