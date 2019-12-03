import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-ionicons';

import styles from '_styles';

export class AccountDetails extends Component {
  render() {
    return (
      <View style={styles.drawercontent}>
        <View>
          <Icon name="pin" />
          <Text> Account </Text>
        </View>
        <Text> Orders </Text>
        <Text> Address Book </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
