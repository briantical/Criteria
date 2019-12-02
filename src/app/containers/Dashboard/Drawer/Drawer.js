import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {showDrawer} from '_actions';

export class Drawer extends Component {
  toggleDrawer = () => {
    this.props.showDrawer(false);
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleDrawer}>
          <Text>Close Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {showDrawer};

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
