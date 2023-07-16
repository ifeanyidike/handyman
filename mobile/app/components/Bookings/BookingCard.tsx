import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../utils/generalUtils';
import ChatAlt from '../../assets/icons/ChatAlt';
import { shadowElevation } from '../../utils/general';
import HrLine from '../HrLine';
import ArrowDown from '../../assets/icons/ArrowDown';
import ArrowUp from '../../assets/icons/ArrowUp';
import Map from '../Map';
import ButtonGroup from '../ButtonGroup';
import { bookingStatus } from '../../types/basic';
import Button from '../Button';
import Dialog from '../Dialog';

type Props = {
  Icon: number;
  serviceName: string;
  userName: string;
  status: bookingStatus;
  address: string;
  lat: number;
  lng: number;
};

const { width } = Dimensions.get('screen');
const BookingCard = (props: Props) => {
  const { Icon, serviceName, userName, status } = props;
  const [open, toggleOpen] = useState(false);
  const [cancelBooking, toggleCancelBooking] = useState<boolean>(false);

  const leftAction = {
    btn: () => toggleCancelBooking(true),
    text: 'Cancel Booking',
  };
  const rightAction = { btn: () => {}, text: 'View E-Receipt' };

  const leftCancelBookingAction = {
    btn: () => {
      toggleCancelBooking(false);
    },
    text: 'Cancel',
  };
  const rightCancelBookingAction = {
    btn: () => {},
    text: 'Yes, Cancel Booking',
  };
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
                  status === bookingStatus.upcoming
                    ? colors.primaryColor
                    : status === bookingStatus.completed
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
            {status === bookingStatus.upcoming ? (
              <ButtonGroup
                padding={8}
                leftAction={leftAction}
                rightAction={rightAction}
                customWidth={150}
                groupWidth="100%"
                justifyType="space-between"
              />
            ) : status === bookingStatus.completed ? (
              <Button
                padding={10}
                customWidth="100%"
                text="View  E-Receipt"
                onPress={() => {}}
              />
            ) : (
              <></>
            )}
          </View>
        </View>
      )}
      <TouchableOpacity
        style={styles.toggleBtn}
        onPress={() => toggleOpen(!open)}
      >
        {open ? <ArrowUp size="25" /> : <ArrowDown size="25" />}
      </TouchableOpacity>

      {cancelBooking && (
        <Dialog
          modalOpen={!!cancelBooking}
          fullWidth={true}
          flatBottom={true}
          pinToBottom={true}
          grayBackground={true}
        >
          <Text style={styles.modalTitle}>Cancel Booking</Text>
          <HrLine space={20} bg={colors.fainterText} />
          <Text style={styles.prompt}>
            Are you sure you want to cancel your service booking?
          </Text>
          <Text style={styles.text}>
            You will be refunded only 80% of the money from your payment
            according to our policy
          </Text>
          <HrLine space={20} bg={colors.fainterText} />

          <ButtonGroup
            leftAction={leftCancelBookingAction}
            rightAction={rightCancelBookingAction}
            leftCustomWidth={width / 3}
            rightCustomWidth={(2 * width) / 3 - 40}
          />
        </Dialog>
      )}
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
    right: 5,
    bottom: 0,
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
  modalTitle: {
    fontFamily: 'Urbanist_700Bold',
    color: colors.status,
    fontSize: 20,
  },
  prompt: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 12,
    marginVertical: 10,
    textAlign: 'center',
  },
});
