import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { defaultContainer } from '../styles/general';
import BackButton from '../components/BackButton';
import { CardItem, Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, servicesList, testServices } from '../utils/generalUtils';
import NavButton from '../components/NavButton';
import ServiceCard from '../components/ServiceCard';
import Dialog from '../components/Dialog';
import Button from '../components/Button';

const { width } = Dimensions.get('screen');
const PopularServicesPane = ({ navigation }: Navigation) => {
  const [navClicked, toggleNavClicked] = useState({
    index: 0,
  });
  const customButtonWidth = width / 2 - 20;
  const [modelItem, toggleBookmarkModal] = useState<CardItem | undefined>();

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <BackButton navigation={navigation} title="Popular Services" />
        <ScrollView style={styles.viewContainer}>
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
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PopularServicesPane;

const styles = StyleSheet.create({
  container: { ...defaultContainer },
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
