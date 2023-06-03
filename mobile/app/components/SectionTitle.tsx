import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

type Props = {
  caption: string;
  action: string;
  onPress?: () => void;
};
const SectionTitle = ({ caption, action, onPress }: Props) => {
  return (
    <View style={styles.sectionTitle}>
      <Text style={[styles.sectionTitleText, styles.sectionTitleCaption]}>
        {caption}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.sectionTitleText, styles.sectionTitleAction]}>
          {action}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
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
    color: colors.buttonPrimaryColor,
  },
});
