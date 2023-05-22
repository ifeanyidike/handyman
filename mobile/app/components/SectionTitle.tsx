import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../utils/generalUtils';

type Props = {
  caption: string;
  action: string;
};
const SectionTitle = ({ caption, action }: Props) => {
  return (
    <View style={styles.sectionTitle}>
      <Text style={[styles.sectionTitleText, styles.sectionTitleCaption]}>
        {caption}
      </Text>
      <Text style={[styles.sectionTitleText, styles.sectionTitleAction]}>
        {action}
      </Text>
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
