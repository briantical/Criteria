import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {showDrawer} from '_actions';
import styles from '_styles';
import {
  AccountDetails,
  AppDetails,
  OrderDetails,
  DrawerHeader,
} from './DrawerContent';

export class Drawer extends Component {
  toggleDrawer = () => {
    this.props.showDrawer(false);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.drawer}>
          <DrawerHeader />
          <OrderDetails />
          <AccountDetails />
          <AppDetails />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {showDrawer};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
