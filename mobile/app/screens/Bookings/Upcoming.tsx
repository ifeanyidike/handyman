import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, testBookings } from '../../utils/generalUtils';
import BookingCard from '../../components/Bookings/BookingCard';

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={testBookings}
        renderItem={({ item, index }) => (
          <BookingCard
            Icon={item.Icon}
            serviceName={item.serviceName}
            userName={item.userName}
            status="Upcoming"
            address={item.location}
            lat={item.lat}
            lng={item.lng}
          />
        )}
        snapToAlignment="center"
        showsVerticalScrollIndicator={true}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    gap: 30,
    marginVertical: 30,
  },
});
