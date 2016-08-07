/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry,
          NavigatorIOS} from 'react-native'
import App from './src/views/App'
import Cart from './application/cart/view/cart.js'

class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: '水果列表',
          component: Cart
        }}
        style={{flex: 1}}
      />
    )
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
