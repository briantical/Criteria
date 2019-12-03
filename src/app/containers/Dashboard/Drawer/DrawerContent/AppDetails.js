import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from '_styles';

export class AppDetails extends Component {
  render() {
    return (
      <View style={styles.drawercontent}>
        <Text> Settings </Text>
        <Text> Live chat </Text>
        <Text> Info </Text>
        <Text> Log out </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppDetails);
