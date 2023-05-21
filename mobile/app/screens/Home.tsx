import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultContainer } from '../styles/general';
import Notification from '../assets/icons/Notification';
import Bookmark from '../assets/icons/Bookmark';
import CustomInput from '../components/CustomInput';
import Search from '../assets/icons/Search';
import Filter from '../assets/icons/Filter';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
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
            <Notification />
            <Bookmark />
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
          <View style={styles.sectionTitle}>
            <Text style={[styles.sectionTitleText, styles.sectionTitleCaption]}>
              Special Offer
            </Text>
            <Text style={[styles.sectionTitleText, styles.sectionTitleAction]}>
              See All
            </Text>
          </View>
          <View style={styles.offerImage}>
            <Image source={require('../assets/promodiscount.png')} />
          </View>
        </View>

        <View style={styles.services}>
          <View style={styles.sectionTitle}>
            <Text style={[styles.sectionTitleText, styles.sectionTitleCaption]}>
              Services
            </Text>
            <Text style={[styles.sectionTitleText, styles.sectionTitleAction]}>
              See All
            </Text>
          </View>
        </View>
      </View>
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
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitleText: {
    fontFamily: 'Urbanist_700Bold',
  },
  sectionTitleCaption: {
    fontSize: 20,
  },
  sectionTitleAction: {
    fontSize: 16,
  },
  offerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 220,
  },
  services: {},
});
