import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Navigator
} from 'react-native';

class Navigation extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Navigator
        initialRoute={{name: '', component: this.props.component, index:0}}
        configureScene={()=>{return Navigator.SceneConfigs.PushFromRight;}}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return (
            <View style={{flex: 1,marginTop: 20}}>
              <Component navigator={navigator} route={route} {...this.props} {...route.passProps}/>
            </View>
          );
        }}/>
    );
  }
}

export default Navigation
