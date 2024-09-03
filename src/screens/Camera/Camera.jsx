import React, {useEffect, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import {MainLayout, Text, View} from '@health/wrappers';
import {AppBar, WorkOutCard} from '@health/components';

//styles
import styles from './Camera.styles';
import assets from '@health/assets';
import {Image, useWindowDimensions} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const Camera = () => {
  const [image, setImage] = useState(null);
  const {width} = useWindowDimensions();
  const isFoucsed = useIsFocused();

  const postImage = image => {
    setImage(image);
  };

  useEffect(() => {
    isFoucsed &&
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        postImage(image);
      });
  }, [isFoucsed]);

  return (
    <MainLayout>
      {image ? (
        <View style={{width: width*0.9, height: width,overflow:'hidden'}}>
          <Image
            source={{uri: image?.path}}
            style={{width: '100%', height: '100%',padding:10}}
          />
        </View>
      ) : (
        <View>
          <Text>No Image Selected</Text>
        </View>
      )}
    </MainLayout>
  );
};

export default Camera;
