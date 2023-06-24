import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { AntDesign } from '@expo/vector-icons';

const carBrandList = [
  { label: 'Ford F-Series', value: 'ford-f-series' },
  { label: 'Lexus 350', value: 'lexus-330' },
  { label: 'Toyota Camry Spider', value: 'camry-spider' },
];

const CarRepairsLanding = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(carBrandList);
  return (
    <View style={styles.container}>
      <Text style={styles.actionText}>
        Enter the type and series of the car to be repaired.
      </Text>

      <View style={styles.content}>
        <Text style={styles.contentTitle}>Car Brand</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
    </View>
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
  },
  contentTitle: {
    fontFamily: 'Urbanist_600SemiBold',
  },
});
