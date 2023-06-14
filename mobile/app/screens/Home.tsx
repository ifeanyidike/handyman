import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../styles/general';
import Notification from '../assets/icons/Notification';
import Bookmark from '../assets/icons/Bookmark';
import CustomInput from '../components/CustomInput';
import Search from '../assets/icons/Search';
import Filter from '../assets/icons/Filter';
import { allServices, servicesList, testServices } from '../utils/generalUtils';
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
import { Navigation } from '../types/basic';
import SearchBlock from '../components/SearchBlock';

const Home = ({ navigation }: Navigation) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchExists, setSearchExists] = useState<boolean>();
  const [searchItems, setSearchItems] = useState<string[]>(allServices);
  const customImageStyle = {
    flex: 0,
    width: '95%',
  };
  const [navClicked, toggleNavClicked] = useState({
    index: 0,
  });

  const handleSpecialOfferPress = () => {
    navigation.navigate('SpecialOffers');
  };

  const handleSearchSubmit = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    const text = e.nativeEvent.text;
    const exists = allServices.some(
      s => s.toLowerCase() === text.trim().toLowerCase()
    );
    setSearchExists(exists);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.topContainer}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}
            >
              <Notification />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Bookmarks')}>
              <Bookmark />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchBox}>
          <CustomInput
            Icon={<Search />}
            placeholder="Search"
            value={searchText}
            setSearchText={setSearchText}
            handleSubmit={handleSearchSubmit}
            SuffixIcon={<Filter />}
          />

          {searchText && (
            <SearchBlock
              searchExists={searchExists}
              searchItems={searchItems}
              setSearchItems={setSearchItems}
              searchText={searchText}
            />
          )}
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.offer}>
          <SectionTitle
            caption="Special Offer"
            onPress={handleSpecialOfferPress}
            action="See All"
          />

          <View style={styles.offerImage}>
            <Slider
              data={promoSliderData}
              customImageStyle={customImageStyle}
              disableAnimation={true}
            />
          </View>
        </View>

        <View style={styles.services}>
          <SectionTitle
            caption="Services"
            onPress={() => navigation.navigate('AllServices')}
            action="See All"
          />
          <View style={styles.serviceItems}>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate('ServiceProviders', {
                  serviceKey: 'Cleaning',
                })
              }
            >
              <Cleaning />
              <Text>Cleaning</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate('ServiceProviders', {
                  serviceKey: 'Repairing',
                })
              }
            >
              <Repairing />
              <Text>Repairing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate('ServiceProviders', {
                  serviceKey: 'Painting',
                })
              }
            >
              <Painting />
              <Text>Painting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate('ServiceProviders', {
                  serviceKey: 'Laundry',
                })
              }
            >
              <Laundry />
              <Text>Laundry</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.serviceItems}>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate('ServiceProviders', {
                  serviceKey: 'Appliance',
                })
              }
            >
              <Appliance />
              <Text>Appliance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate('ServiceProviders', {
                  serviceKey: 'Plumbing',
                })
              }
            >
              <Plumbing />
              <Text>Plumbing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() =>
                navigation.navigate('ServiceProviders', {
                  serviceKey: 'Shifting',
                })
              }
            >
              <Shifting />
              <Text>Shifting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.serviceItem}
              onPress={() => navigation.navigate('AllServices')}
            >
              <More />
              <Text>More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <HrLine space={30} />

        <View style={styles.popularServices}>
          <SectionTitle
            caption="Most Popular Services"
            onPress={() => navigation.navigate('PopularServices')}
            action="See All"
          />
          <FlatList
            style={{ marginVertical: 20 }}
            data={servicesList}
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
            {testServices.map((item, index) => (
              <ServiceCard key={index} item={item} index={index} />
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
  topContainer: {
    width: defaultContainer.width,
    paddingTop: defaultContainer.paddingTop,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: defaultContainer.backgroundColor,
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
