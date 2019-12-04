import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-ionicons';

import styles from '_styles';

export class AppDetails extends Component {
  render() {
    return (
      <View style={styles.drawercontent}>
        <TouchableOpacity style={styles.drawertabs}>
          <Icon name="settings" />
          <Text> Settings </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawertabs}>
          <Icon name="chatbubbles" />
          <Text> Live chat </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawertabs}>
          <Icon name="information-circle-outline" />
          <Text> Info </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawertabs}>
          <Icon name="log-out" />
          <Text> Log out </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AppDetails);
