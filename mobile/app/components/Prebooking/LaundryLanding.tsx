import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import CustomInput from '../CustomInput';
import Button from '../Button';

const optionList = [
  { key: '1', value: 'Yes' },
  { key: '2', value: 'No' },
];

const LaundryLanding = () => {
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [plateNumber, setPlateNumber] = useState<string>('');
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.actionText}>
          Enter the weight and the service you need.
        </Text>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Weight Total Clothing</Text>
          <CustomInput
            SuffixIcon={
              <View style={{ marginRight: 10 }}>
                <Text style={{ fontFamily: 'Urbanist_400Regular' }}>kg</Text>
              </View>
            }
            placeholder="ex. 12"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Ironing Service</Text>
          <SelectList
            setSelected={(val: string) => setModel(val)}
            data={optionList}
            save="value"
            fontFamily="Urbanist_400Regular"
            placeholder="Need ironing service?"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Fragrance Service</Text>
          <SelectList
            setSelected={(val: string) => setPlateNumber(val)}
            data={optionList}
            save="value"
            fontFamily="Urbanist_400Regular"
            placeholder="Need fragrance service?"
          />
        </View>
      </ScrollView>
      <Button text="Continue" onPress={() => {}} />
    </>
  );
};

export default LaundryLanding;

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
