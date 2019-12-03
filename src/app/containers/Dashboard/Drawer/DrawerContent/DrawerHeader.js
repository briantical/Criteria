import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from '_styles';

export class DrawerHeader extends Component {
  render() {
    return (
      <View style={styles.drawercontent}>
        <Text> Lutaaya Brian Ivan </Text>
        <Text> lutbrianivan@gmail.com </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerHeader);
