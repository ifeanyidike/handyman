import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../styles/general';
import Notification from '../assets/icons/Notification';
import Bookmark from '../assets/icons/Bookmark';
import CustomInput from '../components/CustomInput';
import Search from '../assets/icons/Search';
import Filter from '../assets/icons/Filter';
import { colors } from '../utils/generalUtils';
import Slider from '../components/Slider';
import { promoSliderData } from '../utils/pagesUtils';
import SectionTitle from '../components/SectionTitle';
import Cleaning from '../assets/icons/cleaning';
import Repairing from '../assets/icons/repairing';
import Painting from '../assets/icons/painting';
import Laundry from '../assets/icons/laundry';
import Appliance from '../assets/icons/appliance';
import Plumbing from '../assets/icons/plumbing';
import Shifting from '../assets/icons/shifting';
import More from '../assets/icons/more';
import NavButton from '../components/NavButton';
import ServiceCard from '../components/ServiceCard';
import HrLine from '../components/HrLine';

const navButtonsArray = [
  'All',
  'Cleaning',
  'Repairing',
  'Painting',
  'Laundry',
  'Appliance',
  'Plumbing',
  'Shifting',
];

const cardEntries = [
  {
    Icon: require('../assets/card_image1.png'),
    userName: 'Kylee Danford',
    serviceName: 'House Cleaning',
    serviceCost: '$25',
    averageRating: 4.8,
    numReviews: 8289,
  },
  {
    Icon: require('../assets/card_image2.png'),
    userName: 'Alfonzo Schuessler',
    serviceName: 'Floor Cleaning',
    serviceCost: '$20',
    averageRating: 4.9,
    numReviews: 6182,
  },
  {
    Icon: require('../assets/card_image3.png'),
    userName: 'Sanjuanita Ordonez',
    serviceName: 'Washing Clothes',
    serviceCost: '$22',
    averageRating: 4.7,
    numReviews: 7938,
  },
  {
    Icon: require('../assets/card_image4.png'),
    userName: 'Freida Varnes',
    serviceName: 'Bathroom Cleaning',
    serviceCost: '$24',
    averageRating: 4.9,
    numReviews: 6182,
  },
];
const Home = () => {
  const customImageStyle = {
    flex: 0,
    width: '95%',
  };
  const [navClicked, toggleNavClicked] = useState({
    index: 0,
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.topContent}>
          <View style={styles.leftHeader}>
            <Image
              style={styles.person}
              source={require('../assets/avatar.png')}
            />
            <View style={styles.greetings}>
              <Text style={styles.headerText}>Good Morning</Text>
              <Text style={[styles.headerText, styles.boldHeader]}>
                Ifeanyi Dike
              </Text>
            </View>
          </View>
          <View style={styles.rightHeader}>
            <TouchableOpacity>
              <Notification />
            </TouchableOpacity>
            <TouchableOpacity>
              <Bookmark />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchBox}>
          <CustomInput
            Icon={<Search />}
            placeholder="Search"
            SuffixIcon={<Filter />}
          />
        </View>
        <View style={styles.offer}>
          <SectionTitle caption="Special Offer" action="See All" />

          <View style={styles.offerImage}>
            <Slider
              data={promoSliderData}
              customImageStyle={customImageStyle}
            />
          </View>
        </View>

        <View style={styles.services}>
          <SectionTitle caption="Services" action="See All" />
          <View style={styles.serviceItems}>
            <TouchableOpacity style={styles.serviceItem}>
              <Cleaning />
              <Text>Cleaning</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Repairing />
              <Text>Repairing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Painting />
              <Text>Painting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Laundry />
              <Text>Laundry</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.serviceItems}>
            <TouchableOpacity style={styles.serviceItem}>
              <Appliance />
              <Text>Appliance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Plumbing />
              <Text>Plumbing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <Shifting />
              <Text>Shifting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceItem}>
              <More />
              <Text>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <HrLine space={30} />

        <View style={styles.popularServices}>
          <SectionTitle caption="Most Popular Services" action="See All" />
          <FlatList
            style={{ marginVertical: 20 }}
            data={navButtonsArray}
            renderItem={({ item, index }) => {
              return (
                <NavButton
                  hasBackground={index === navClicked.index}
                  index={index}
                  isSmall={index === 0}
                  text={item}
                  toggleNavClicked={toggleNavClicked}
                />
              );
            }}
            horizontal
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.cards}>
            {cardEntries.map((items, index) => (
              <ServiceCard key={index} {...items} index={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    ...defaultContainer,
    paddingHorizontal: 10,
  },
  topContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  person: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
  leftHeader: {
    flexDirection: 'row',
  },
  greetings: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  rightHeader: {
    flexDirection: 'row',
    width: '20%',
  },
  headerText: {
    fontFamily: 'Urbanist_300Light',
    fontSize: 16,
  },
  boldHeader: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 18,
  },
  searchBox: {
    marginTop: 40,
  },
  offer: {
    marginTop: 30,
    justifyContent: 'center',
  },
  offerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginTop: 10,
  },
  services: {
    gap: 20,
  },
  serviceItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  serviceItem: {
    alignItems: 'center',
  },
  popularServices: {},
  cards: {
    marginTop: 10,
    marginBottom: 20,
  },
});
