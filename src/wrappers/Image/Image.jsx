import React from 'react';
import Theme from 'react-native-theming';

const Image = ({source, style}) => {
  return <Theme.Image style={style} source={source} />;
};

export default Image;
