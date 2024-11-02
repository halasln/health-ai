import React from 'react';
import {Image, ImageProps} from 'react-native';

const AppImage: React.FC<Props> = (props) => {
  return <Image {...props} />;
};

export default AppImage;

interface Props extends ImageProps {}
