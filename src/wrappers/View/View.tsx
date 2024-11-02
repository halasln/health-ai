import React from 'react';
import Theme from 'react-native-theming'

const View = ({children, style}) => {
  return <Theme.View style={style}>{children}</Theme.View>;
};

export default View;
