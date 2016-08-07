import React, { Component } from 'react'
import {
  Provider,
  Platform,
  View,
  Navigator
} from 'react-native'
import PageContainer from '../components/PageContainer'

const INITIAL_ROUTE = {
  location: '/'
}

class App extends Component {
  configureScene (route) {
    if (route.configure)
      return route.configure
    if (Platform.OS == 'ios')
      return Navigator.SceneConfigs.PushFromRight
    return Navigator.SceneConfigs.FloatFromBottomAndroid
  }

  renderScene (route, navigator) {
    return (
      <PageContainer
        extraProps = {route.extraProps}
        location = {route.location}
        navigator = {navigator}
        rootBackAndroid = {this.onBackAndroid}
      />
    )
  }

  render () {
    return (
      <Navigator
        ref="navigator"
        initialRoute={INITIAL_ROUTE}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}
export default App
module.exports = exports['default']
