import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import PaintBall from './PaintBall';
import { colors } from '../../utils/generalUtils';
import Button from '../Button';

const sizeList = [
  { key: '1', value: 'Small' },
  { key: '2', value: 'Medium' },
  { key: '3', value: 'Large' },
  { key: '4', value: 'Extra Large' },
];

const paintColors = [
  colors.white,
  colors.black,
  colors.blueGray,
  colors.pink,
  colors.purple,
  colors.indigo,
  colors.blue,
  colors.lightBlue,
  colors.cyan,
  colors.teal,
  colors.green,
  colors.lime,
  colors.yellow,
  colors.amber,
  colors.orange,
  colors.deepOrange,
  colors.brown,
];

const PaintingLanding = () => {
  const [size, setSize] = useState<string>('');
  const _paint = paintColors.map(p => ({ color: p, selected: false }));
  const [selectedPaint, setSelectedPaint] = useState(_paint);
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.actionText}>
          Choose the size of the house & the color you want.
        </Text>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Size of House</Text>
          <SelectList
            setSelected={(val: string) => setSize(val)}
            data={sizeList}
            save="value"
            fontFamily="Urbanist_400Regular"
            placeholder="Select house size"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.contentTitle}>Select Paint Color</Text>
          <View style={styles.paintList}>
            {selectedPaint.map(p => (
              <PaintBall
                key={p.color}
                backgroundColor={p.color}
                selectedPaint={selectedPaint}
                setSelectedPaint={setSelectedPaint}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <Button text="Continue" onPress={() => {}} />
    </>
  );
};

export default PaintingLanding;

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
    marginBottom: 30,
  },
  contentTitle: {
    fontFamily: 'Urbanist_600SemiBold',
  },
  paintList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
});
