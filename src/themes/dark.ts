import {defaultTheme} from './default';

const primary = '#ffffff';
const white = '#ffffff';
const offWhite = '#F0F4F7';
const red = '#FC0032';
const redLight = '#FFCCD6';
const green = '#2EC5B6';
const greenLight = '#C9EBEA';
const greenLightBg = 'rgba(46, 197, 182, 0.2)';
const greenLight2 = '#83B3C5';
const greenDark = '#217797';
const greyDarker = '#6B6F7F';
const yellow = '#F7C90B';
const yellowLight = '#FEF4CE';
const black = '#222222';
const blackLight = '#484D62';
const blackDark = '#36394C';
const navy = '#1A203C';
const grey = '#DFE3E6';
const greyLight = '#F0F4F7';
const greyDark = '#B3B3B3';

export const dark = {
  ...defaultTheme,
  info: {
    name: 'dark',
  },
  primary: primary,
  primaryDark: navy,
  screen: navy,
  cardBg: blackDark,
  cardFooter: greyDarker,
  border: greyDark,
  red: red,
  redLight: redLight,
  green: green,
  greenLight: greenLight,
  yellow: yellow,
  yellowLight: yellowLight,

  //navigation
  barBackgroundColor: black,
  activeTintColor: primary,
  inactiveTintColor: greyDark,

  //icon
  iconBg: greyDarker,
  icon: primary,

  // text
  text: primary,
  textSecondary: greyDark,

  //textInput
  textInputPlaceholder: black,
  textInputText: black,
  textInputBg: white,
  textInputDisabledIcon: greyDark,
  textInputResetIcon: greyDark,
  textInputErrorBg: white,

  //button
  buttonBg: primary,
  buttonText: white,
  buttonBorder: primary,

  outlineButtonBg: 'transparent',
  outlineButtonText: primary,
  outlineButtonBorder: primary,

  disabledButtonBg: grey,
  disabledButtonText: greyDark,
  disabledButtonBorder: grey,

  //progressBar
  progressBarBg: greenLightBg,
};
