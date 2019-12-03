import {StyleSheet, Dimensions} from 'react-native';
let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    height: height,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  drawercontent: {
    flex: 1,
    minHeight: height / 4,
    paddingLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderColor: 'rgb(0,0,0)',
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;
