import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import EditSquare from '../assets/icons/EditSquare';

type Props = {
  defaultImage?: number;
  size?: number;
};
const PickImage = (props: Props) => {
  const { defaultImage = require('../assets/Ellipse.png'), size = 150 } = props;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handlePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    const assets = result.assets;
    const uri = assets?.length ? assets[0].uri : null;

    setSelectedImage(uri);
  };
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={selectedImage ? { uri: selectedImage } : defaultImage}
        style={styles.userImage}
        resizeMode="cover"
      />
      <TouchableOpacity onPress={handlePress} style={styles.edit}>
        <EditSquare size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default PickImage;

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 9999,
    position: 'relative',
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 9999,
  },
  edit: {
    position: 'absolute',
    bottom: 7,
    right: 7,
  },
});
