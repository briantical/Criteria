import {StyleSheet, Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    height: height,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRightColor: 'rgb(0,0,0)',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  drawercontent: {
    flex: 1,
    minHeight: height / 4,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderColor: 'rgb(0,0,0)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  drawertabs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  drawertab_icon: {
    paddingLeft: 10,
  },
  drawertab_name: {
    paddingLeft: 10,
  },
});

export default styles;
