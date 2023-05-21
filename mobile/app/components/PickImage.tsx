import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const PickImage = () => {
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
    <View style={styles.container}>
      <Image
        source={
          selectedImage
            ? { uri: selectedImage }
            : require('../assets/Ellipse.png')
        }
        style={styles.userImage}
      />
      <TouchableOpacity onPress={handlePress} style={styles.edit}>
        <Image source={require('../assets/icons/EditSquare.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default PickImage;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
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
