import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { defaultContainer } from '../utils/general';
import BackButton from '../components/BackButton';
import { CardItem, RootStackParamsList } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { testServices } from '../utils/generalUtils';
import ServiceCard from '../components/ServiceCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Search from '../assets/icons/Search';

const { width } = Dimensions.get('screen');

type ServiceProviderProps = NativeStackScreenProps<
  RootStackParamsList,
  'ServiceProviders'
>;

const ServiceProvidersList = (props: ServiceProviderProps) => {
  const { route, navigation } = props;
  const [navClicked, toggleNavClicked] = useState({
    index: 0,
  });
  const customButtonWidth = width / 2 - 20;
  const [modelItem, toggleBookmarkModal] = useState<CardItem | undefined>();

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <View style={styles.backBtn}>
          <BackButton navigation={navigation} title={route.params.serviceKey} />
          <Search />
        </View>
        <ScrollView style={styles.viewContainer}>
          <View style={styles.cards}>
            {testServices.map((item, index) => {
              const data = { ...item, serviceKey: route.params.serviceKey };
              return (
                <ServiceCard
                  key={index}
                  item={data}
                  index={index}
                  navigation={navigation}
                />
              );
            })}
          </View>
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ServiceProvidersList;

const styles = StyleSheet.create({
  container: { ...defaultContainer },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  title: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 16,
    marginLeft: 20,
  },
  viewContainer: {
    marginVertical: 25,
    marginLeft: 15,
  },
  content: {
    marginBottom: 20,
  },
  cards: {
    marginTop: 10,
    marginBottom: 20,
    marginRight: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    width,
    justifyContent: 'space-around',
  },
  modalTitle: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 20,
  },
});
