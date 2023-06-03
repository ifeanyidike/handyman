import { FlatList, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { defaultContainer } from '../styles/general';
import BackButton from '../components/BackButton';
import { Navigation } from '../types/basic';
import { SafeAreaView } from 'react-native-safe-area-context';
import { promoSliderData } from '../utils/pagesUtils';

const SpecialOffersPane = ({ navigation }: Navigation) => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <BackButton navigation={navigation} title="Notification" />
        <FlatList
          contentContainerStyle={styles.viewContainer}
          data={promoSliderData}
          renderItem={({ item }) => (
            <Image style={styles.img} resizeMode="contain" source={item.img} />
          )}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default SpecialOffersPane;

const styles = StyleSheet.create({
  container: { ...defaultContainer },
  title: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 16,
    marginLeft: 20,
  },
  img: {
    width: '100%',
  },
  viewContainer: {
    marginTop: 15,
    gap: 10,
    marginHorizontal: 15,
  },
  content: {
    marginBottom: 20,
  },
});
