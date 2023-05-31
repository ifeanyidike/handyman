import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { defaultContainer } from '../styles/general';
import BackButton from '../components/BackButton';
import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { servicesList, testServices } from '../utils/generalUtils';
import NavButton from '../components/NavButton';
import ServiceCard from '../components/ServiceCard';

const Bookmarks = ({ navigation }: Navigation) => {
  const [navClicked, toggleNavClicked] = useState({
    index: 0,
  });
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <BackButton navigation={navigation} title="My Bookmark" />
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
            {testServices.map((items, index) => (
              <ServiceCard key={index} {...items} index={index} />
            ))}
          </View>
          <View style={{ height: 50 }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Bookmarks;

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
});
