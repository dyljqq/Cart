import React, { Component } from 'react'
import {
    View,
    WebView
} from 'react-native';
import Header from './header.js'
import Util from './util.js'

class DetailWebView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Header
          navigator={this.props.navigator}
          obj={{
            backName: this.props.backName,
            title: this.props.title
          }}
          />
        <WebView
          style={{width: Util.size.width, height:Util.size.height - Util.navigationHeight - 44}}
          source={{uri:this.props.url}} />
      </View>
    );
  }

}

export default DetailWebView
