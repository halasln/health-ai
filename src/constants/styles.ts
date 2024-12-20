import {StyleSheet} from 'react-native';

const mainStyles = StyleSheet.create({
  screenPaddingX: {paddingHorizontal: 15, flex: 1, backgroundColor: '@screen'},
  screenNoPadding: {flex: 1, backgroundColor: '@screen'},
  flex1: {flex: 1},
  flex2: {flex: 2},
  flex3: {flex: 3},

  //width
  width10: {width: '10%'},
  width20: {width: '20%'},
  width30: {width: '30%'},
  width40: {width: '40%'},
  width50: {width: '50%'},
  width60: {width: '60%'},
  width70: {width: '70%'},
  width80: {width: '80%'},
  width90: {width: '90%'},
  width100: {width: '100%'},

  //height
  height10: {height: '10%'},
  height20: {height: '20%'},
  height30: {height: '30%'},
  height40: {height: '40%'},
  height50: {height: '50%'},
  height60: {height: '60%'},
  height70: {height: '70%'},
  height80: {height: '80%'},
  height90: {height: '90%'},
  height100: {height: '100%'},

  //row
  row: {flexDirection: 'row'},
  rowCenterXY: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenterY: {flexDirection: 'row', alignItems: 'center'},
  rowCenterX: {flexDirection: 'row', justifyContent: 'center'},
  rowBetween: {flexDirection: 'row', justifyContent: 'space-between'},

  column: {flexDirection: 'column'},
  columnCenterXY: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {flexDirection: 'column', alignItems: 'center'},
  columnCenterY: {flexDirection: 'column', justifyContent: 'center'},

  //margins
  m5: {margin: 5},
  m10: {margin: 10},
  m15: {margin: 15},
  m20: {margin: 20},
  m25: {margin: 25},
  m30: {margin: 30},
  m35: {margin: 35},
  m40: {margin: 40},
  m45: {margin: 45},
  m50: {margin: 50},
  m60: {margin: 60},
  m70: {margin: 70},
  m80: {margin: 80},
  m90: {margin: 90},
  m100: {margin: 100},

  ms5: {marginStart: 5},
  ms10: {marginStart: 10},
  ms15: {marginStart: 15},
  ms20: {marginStart: 20},
  ms25: {marginStart: 25},
  ms30: {marginStart: 30},
  ms35: {marginStart: 35},
  ms40: {marginStart: 40},
  ms45: {marginStart: 45},
  ms50: {marginStart: 50},
  ms60: {marginStart: 60},
  ms70: {marginStart: 70},
  ms80: {marginStart: 80},
  ms90: {marginStart: 90},
  ms100: {marginStart: 100},

  me5: {marginEnd: 5},
  me10: {marginEnd: 10},
  me15: {marginEnd: 15},
  me20: {marginEnd: 20},
  me25: {marginEnd: 25},
  me30: {marginEnd: 30},
  me35: {marginEnd: 35},
  me40: {marginEnd: 40},
  me45: {marginEnd: 45},
  me50: {marginEnd: 50},
  me60: {marginEnd: 60},
  me70: {marginEnd: 70},
  me80: {marginEnd: 80},
  me90: {marginEnd: 90},
  me100: {marginEnd: 100},

  mt5: {marginTop: 5},
  mt10: {marginTop: 10},
  mt15: {marginTop: 15},
  mt20: {marginTop: 20},
  mt25: {marginTop: 25},
  mt30: {marginTop: 30},
  mt35: {marginTop: 35},
  mt40: {marginTop: 40},
  mt45: {marginTop: 45},
  mt50: {marginTop: 50},
  mt60: {marginTop: 60},
  mt70: {marginTop: 70},
  mt80: {marginTop: 80},
  mt90: {marginTop: 90},
  mt100: {marginTop: 100},

  mb5: {marginBottom: 5},
  mb10: {marginBottom: 10},
  mb15: {marginBottom: 15},
  mb20: {marginBottom: 20},
  mb25: {marginBottom: 25},
  mb30: {marginBottom: 30},
  mb35: {marginBottom: 35},
  mb40: {marginBottom: 40},
  mb45: {marginBottom: 45},
  mb50: {marginBottom: 50},
  mb60: {marginBottom: 60},
  mb70: {marginBottom: 70},
  mb80: {marginBottom: 80},
  mb90: {marginBottom: 90},
  mb100: {marginBottom: 100},

  mx5: {marginHorizontal: 5},
  mx10: {marginHorizontal: 10},
  mx15: {marginHorizontal: 15},
  mx20: {marginHorizontal: 20},
  mx25: {marginHorizontal: 25},
  mx30: {marginHorizontal: 30},
  mx35: {marginHorizontal: 35},
  mx40: {marginHorizontal: 40},
  mx45: {marginHorizontal: 45},
  mx50: {marginHorizontal: 50},
  mx60: {marginHorizontal: 60},
  mx70: {marginHorizontal: 70},
  mx80: {marginHorizontal: 80},
  mx90: {marginHorizontal: 90},
  mx100: {marginHorizontal: 100},

  my5: {marginVertical: 5},
  my10: {marginVertical: 10},
  my15: {marginVertical: 15},
  my20: {marginVertical: 20},
  my25: {marginVertical: 25},
  my30: {marginVertical: 30},
  my35: {marginVertical: 35},
  my40: {marginVertical: 40},
  my45: {marginVertical: 45},
  my50: {marginVertical: 50},
  my60: {marginVertical: 60},
  my70: {marginVertical: 70},
  my80: {marginVertical: 80},
  my90: {marginVertical: 90},
  my100: {marginVertical: 100},

  //paddings
  p5: {padding: 5},
  p10: {padding: 10},
  p15: {padding: 15},
  p20: {padding: 20},
  p25: {padding: 25},
  p30: {padding: 30},
  p35: {padding: 35},
  p40: {padding: 40},
  p45: {padding: 45},
  p50: {padding: 50},
  p60: {padding: 60},
  p70: {padding: 70},
  p80: {padding: 80},
  p90: {padding: 90},
  p100: {padding: 100},

  ps5: {paddingStart: 5},
  ps10: {paddingStart: 10},
  ps15: {paddingStart: 15},
  ps20: {paddingStart: 20},
  ps25: {paddingStart: 25},
  ps30: {paddingStart: 30},
  ps35: {paddingStart: 35},
  ps40: {paddingStart: 40},
  ps45: {paddingStart: 45},
  ps50: {paddingStart: 50},
  ps60: {paddingStart: 60},
  ps70: {paddingStart: 70},
  ps80: {paddingStart: 80},
  ps90: {paddingStart: 90},
  ps100: {paddingStart: 100},

  pe5: {paddingEnd: 5},
  pe10: {paddingEnd: 10},
  pe15: {paddingEnd: 15},
  pe20: {paddingEnd: 20},
  pe25: {paddingEnd: 25},
  pe30: {paddingEnd: 30},
  pe35: {paddingEnd: 35},
  pe40: {paddingEnd: 40},
  pe45: {paddingEnd: 45},
  pe50: {paddingEnd: 50},
  pe60: {paddingEnd: 60},
  pe70: {paddingEnd: 70},
  pe80: {paddingEnd: 80},
  pe90: {paddingEnd: 90},
  pe100: {paddingEnd: 100},

  pt5: {paddingTop: 5},
  pt10: {paddingTop: 10},
  pt15: {paddingTop: 15},
  pt20: {paddingTop: 20},
  pt25: {paddingTop: 25},
  pt30: {paddingTop: 30},
  pt35: {paddingTop: 35},
  pt40: {paddingTop: 40},
  pt45: {paddingTop: 45},
  pt50: {paddingTop: 50},
  pt60: {paddingTop: 60},
  pt70: {paddingTop: 70},
  pt80: {paddingTop: 80},
  pt90: {paddingTop: 90},
  pt100: {paddingTop: 100},

  pb5: {paddingBottom: 5},
  pb10: {paddingBottom: 10},
  pb15: {paddingBottom: 15},
  pb20: {paddingBottom: 20},
  pb25: {paddingBottom: 25},
  pb30: {paddingBottom: 30},
  pb35: {paddingBottom: 35},
  pb40: {paddingBottom: 40},
  pb45: {paddingBottom: 45},
  pb50: {paddingBottom: 50},
  pb60: {paddingBottom: 60},
  pb70: {paddingBottom: 70},
  pb80: {paddingBottom: 80},
  pb90: {paddingBottom: 90},
  pb100: {paddingBottom: 100},

  px5: {paddingHorizontal: 5},
  px10: {paddingHorizontal: 10},
  px15: {paddingHorizontal: 15},
  px20: {paddingHorizontal: 20},
  px25: {paddingHorizontal: 25},
  px30: {paddingHorizontal: 30},
  px35: {paddingHorizontal: 35},
  px40: {paddingHorizontal: 40},
  px45: {paddingHorizontal: 45},
  px50: {paddingHorizontal: 50},
  px60: {paddingHorizontal: 60},
  px70: {paddingHorizontal: 70},
  px80: {paddingHorizontal: 80},
  px90: {paddingHorizontal: 90},
  px100: {paddingHorizontal: 100},

  py5: {paddingVertical: 5},
  py10: {paddingVertical: 10},
  py15: {paddingVertical: 15},
  py20: {paddingVertical: 20},
  py25: {paddingVertical: 25},
  py30: {paddingVertical: 30},
  py35: {paddingVertical: 35},
  py40: {paddingVertical: 40},
  py45: {paddingVertical: 45},
  py50: {paddingVertical: 50},
  py60: {paddingVertical: 60},
  py70: {paddingVertical: 70},
  py80: {paddingVertical: 80},
  py90: {paddingVertical: 90},
  py100: {paddingVertical: 100},

  bottomSheetPadding: {
    paddingHorizontal: 15,
  },
});

export default mainStyles;
