import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { defaultContainer } from '../utils/general';
import BackButton from '../components/BackButton';
import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationCard from '../components/NotificationCard';
import PaymentCardFancy from '../assets/icons/PaymentCardFancy';
import NewCategoryFancy from '../assets/icons/NewCategoryFancy';
import SpecialOffersFancy from '../assets/icons/SpecialOffersFancy';
import CreditCardFancy from '../assets/icons/CreditCardFancy';
import AccountSetupFancy from '../assets/icons/AccountSetupFancy';

const NotificationsPane = ({ navigation }: Navigation) => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <BackButton navigation={navigation} title="Notification" />
        <ScrollView style={styles.viewContainer}>
          <View style={styles.content}>
            <Text style={styles.title}>Today</Text>
            <NotificationCard
              Icon={<PaymentCardFancy />}
              title="Payment Successful!"
              text="You have made a service payment"
            />
            <NotificationCard
              Icon={<NewCategoryFancy />}
              title="New Category Services!"
              text="Now the plumbing service is available"
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Yesterday</Text>
            <NotificationCard
              Icon={<SpecialOffersFancy />}
              title="Today's Special Offers"
              text="You get a special promo today!"
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>December 22, 2024</Text>
            <NotificationCard
              Icon={<CreditCardFancy />}
              title="Credit Card Connected!"
              text="Credit Card has been linked!"
            />
            <NotificationCard
              Icon={<AccountSetupFancy />}
              title="Account Setup Successful!"
              text="Your account has been created!"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NotificationsPane;

const styles = StyleSheet.create({
  container: { ...defaultContainer },
  title: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 16,
    marginLeft: 20,
  },
  viewContainer: {
    marginVertical: 25,
  },
  content: {
    marginBottom: 20,
  },
});
