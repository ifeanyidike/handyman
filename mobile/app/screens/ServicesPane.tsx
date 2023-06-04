import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { defaultContainer } from '../styles/general';
import BackButton from '../components/BackButton';
import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationCard from '../components/NotificationCard';
import PaymentCardFancy from '../assets/icons/PaymentCardFancy';
import NewCategoryFancy from '../assets/icons/NewCategoryFancy';
import SpecialOffersFancy from '../assets/icons/SpecialOffersFancy';
import CreditCardFancy from '../assets/icons/CreditCardFancy';
import AccountSetupFancy from '../assets/icons/AccountSetupFancy';
import Cleaning from '../assets/icons/cleaning';
import Repairing from '../assets/icons/repairing';
import Painting from '../assets/icons/painting';
import Laundry from '../assets/icons/laundry';
import Appliance from '../assets/icons/appliance';
import Plumbing from '../assets/icons/plumbing';
import Shifting from '../assets/icons/shifting';
import Beauty from '../assets/icons/Beauty';
import ACRepairs from '../assets/icons/ACRepairs';
import Vehicle from '../assets/icons/Vehicle';
import Electronics from '../assets/icons/Electronics';
import Massage from '../assets/icons/Massage';
import MenSalon from '../assets/icons/MenSalon';

const ServicesPane = ({ navigation }: Navigation) => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <BackButton navigation={navigation} title="All Services" />
        <ScrollView style={styles.viewContainer}>
          <View style={styles.services}>
            <View style={styles.serviceItems}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Cleaning',
                  })
                }
                style={styles.serviceItem}
              >
                <Cleaning />
                <Text>Cleaning</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Repairing',
                  })
                }
                style={styles.serviceItem}
              >
                <Repairing />
                <Text>Repairing</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Painting',
                  })
                }
                style={styles.serviceItem}
              >
                <Painting />
                <Text>Painting</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Laundry',
                  })
                }
                style={styles.serviceItem}
              >
                <Laundry />
                <Text>Laundry</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.serviceItems}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Appliance',
                  })
                }
                style={styles.serviceItem}
              >
                <Appliance />
                <Text>Appliance</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Plumbing',
                  })
                }
                style={styles.serviceItem}
              >
                <Plumbing />
                <Text>Plumbing</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Shifting',
                  })
                }
                style={styles.serviceItem}
              >
                <Shifting />
                <Text>Shifting</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Beauty',
                  })
                }
                style={styles.serviceItem}
              >
                <Beauty />
                <Text>Beauty</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.serviceItems}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Ac Repairs',
                  })
                }
                style={styles.serviceItem}
              >
                <ACRepairs />
                <Text>AC Repa..</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Vehicle',
                  })
                }
                style={styles.serviceItem}
              >
                <Vehicle />
                <Text>Vehicle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Electronics',
                  })
                }
                style={styles.serviceItem}
              >
                <Electronics />
                <Text>Electronics</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: 'Massage',
                  })
                }
                style={styles.serviceItem}
              >
                <Massage />
                <Text>Massage</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.serviceItems}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ServiceProviders', {
                    serviceKey: "Men's Salon",
                  })
                }
                style={styles.serviceItem}
              >
                <MenSalon />
                <Text>Men's Sal..</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ServicesPane;

const styles = StyleSheet.create({
  container: { ...defaultContainer },
  title: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 16,
    marginLeft: 20,
  },
  viewContainer: {
    marginVertical: 25,
    gap: 20,
  },
  content: {
    marginBottom: 20,
  },
  services: {
    paddingHorizontal: 15,
    gap: 30,
  },
  serviceItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  serviceItem: {
    alignItems: 'center',
  },
});
