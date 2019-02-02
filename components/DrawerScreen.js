import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

class DrawerScreen extends Component {
  

  render () {
    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Home')}>
                Home
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('About')}>
               About
              </Text>
            </View>
            <View style={styles.menuItem}>
              <Text onPress={this.navigateToScreen('Contact')}>
              Contact
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}


export default DrawerScreen;