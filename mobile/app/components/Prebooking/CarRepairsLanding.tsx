import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';

const carBrandList = [
  { key: '1', value: 'Ford F-Series' },
  { key: '2', value: 'Lexus 350' },
  { key: '3', value: 'Toyota Camry Spider' },
];

const modelList = [
  { key: '1', value: 'F-450' },
  { key: '2', value: 'F-350' },
  { key: '3', value: 'C-230' },
];

const CarRepairsLanding = () => {
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [plateNumber, setPlateNumber] = useState<string>('');
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.actionText}>
        Enter the type and series of the car to be repaired.
      </Text>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Car Brand</Text>
        <SelectList
          setSelected={(val: string) => setBrand(val)}
          data={carBrandList}
          save="value"
          fontFamily="Urbanist_400Regular"
          placeholder="Select brand"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Series/Model</Text>
        <SelectList
          setSelected={(val: string) => setModel(val)}
          data={modelList}
          save="value"
          fontFamily="Urbanist_400Regular"
          placeholder="Select plate number"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Plate Number</Text>
        <SelectList
          setSelected={(val: string) => setPlateNumber(val)}
          data={modelList}
          save="value"
          fontFamily="Urbanist_400Regular"
          placeholder="Select model"
        />
      </View>
    </ScrollView>
  );
};

export default CarRepairsLanding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  actionText: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 12,
    marginVertical: 20,
  },
  content: {
    gap: 5,
    marginBottom: 25,
  },
  contentTitle: {
    fontFamily: 'Urbanist_600SemiBold',
  },
});
