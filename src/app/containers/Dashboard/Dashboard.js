import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import Drawer from './Drawer';

import {showDrawer} from '_actions';

import MenuDrawer from 'react-native-side-drawer';

export class Dashboard extends Component {
  toggleDrawer = () => {
    this.props.showDrawer(true);
  };

  render() {
    const {drawer} = this.props;
    return (
      <View>
        <MenuDrawer
          open={drawer}
          drawerContent={<Drawer />}
          drawerPercentage={75}
          animationTime={150}
          overlay={true}
          opacity={0.1}>
          <TouchableOpacity onPress={this.toggleDrawer}>
            <Text>Open Drawer</Text>
          </TouchableOpacity>
          <Text> Dashboard </Text>
        </MenuDrawer>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {drawer} = state;
  return {drawer};
};

const mapDispatchToProps = {showDrawer};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
