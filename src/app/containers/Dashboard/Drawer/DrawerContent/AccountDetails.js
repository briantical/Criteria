import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-ionicons';

import styles from '_styles';

export class AccountDetails extends Component {
  render() {
    return (
      <View style={styles.drawercontent}>
        <TouchableOpacity style={styles.drawertabs}>
          <Icon name="person" />
          <Text> Account </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawertabs}>
          <Icon name="document" />
          <Text> Orders </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawertabs}>
          <Icon name="navigate" />
          <Text> Address Book </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
