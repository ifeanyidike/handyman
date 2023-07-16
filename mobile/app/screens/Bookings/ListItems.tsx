import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, testBookings } from '../../utils/generalUtils';
import BookingCard from '../../components/Bookings/BookingCard';
import { bookingStatus } from '../../types/basic';
import NotFound from './NotFound';

type Props = {
  data: any;
  status: bookingStatus;
};
const ListItems = (props: Props) => {
  const { data, status } = props;
  return (
    <View style={styles.container}>
      {data?.length ? (
        <>
          <FlatList
            contentContainerStyle={styles.contentContainer}
            data={testBookings}
            renderItem={({ item, index }) => (
              <BookingCard
                Icon={item.Icon}
                serviceName={item.serviceName}
                userName={item.userName}
                status={status}
                address={item.location}
                lat={item.lat}
                lng={item.lng}
              />
            )}
            snapToAlignment="center"
            showsVerticalScrollIndicator={true}
            style={{ flex: 1 }}
          />
        </>
      ) : (
        <NotFound status={status} />
      )}
    </View>
  );
};

export default ListItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    gap: 30,
    marginVertical: 30,
    paddingBottom: 100,
  },
});
