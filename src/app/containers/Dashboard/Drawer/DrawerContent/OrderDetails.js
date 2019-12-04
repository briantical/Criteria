import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-ionicons';

import styles from '_styles';

export class OrderDetails extends Component {
  render() {
    return (
      <View style={styles.drawercontent}>
        <TouchableOpacity style={styles.drawertabs}>
          <View style={styles.drawertab_icon}>
            <Icon name="pin" />
          </View>
          <View style={styles.drawertab_name}>
            <Text> Your location </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawertabs}>
          <View style={styles.drawertab_icon}>
            <Icon name="restaurant" />
          </View>
          <View style={styles.drawertab_name}>
            <Text> Vendors </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawertabs}>
          <View style={styles.drawertab_icon}>
            <Icon name="cut" />
          </View>
          <View style={styles.drawertab_name}>
            <Text> Deals </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetails);
