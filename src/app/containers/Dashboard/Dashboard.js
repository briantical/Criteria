import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import Drawer from './Drawer/Drawer';

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
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}>
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
