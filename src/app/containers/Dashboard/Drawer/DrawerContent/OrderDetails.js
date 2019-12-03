import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from '_styles';

export class OrderDetails extends Component {
  render() {
    return (
      <View style={styles.drawercontent}>
        <Text> Your Location </Text>
        <Text> Vendors </Text>
        <Text> Deals </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
