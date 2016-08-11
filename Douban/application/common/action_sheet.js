import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    ActionSheetIOS,
    TouchableOpacity,
    Image,
} from 'react-native';
import Api from './api.js'
import * as Network from './network.js'

class ActionSheet extends Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this._press.bind(this)}>
        <Image source={require('image!ic_menu_white')} style={{width: 24, height: 24, marginRight: 10}}/>
      </TouchableOpacity>
    )
  }

  _press() {
    var options = ['收藏', '分享', '取消']
    ActionSheetIOS.showActionSheetWithOptions({
      options: options,
      cancelButtonIndex: 2,
    },
    (buttonIndex)=> {
      switch (buttonIndex) {
        case 0:
          this._collect()
          break;

        case 1:

          break;

        default: break
      }
    })
  }

  _collect() {
    let url = Api.book.add
    let row = this.props.data
    var map = {
      'name': row.title,
      'author': row.author.length > 0 ? row.author[0] : '',
      'price': row.price ? row.price : 0,
      'rate': row.rating.average ? row.rating.average : 0,
      'image': row.image,
      'desc': ''
    }
    Network.post(url, map, (code, message, data)=> {
      if (code == 0) {
        alert('收藏成功...')
      } else {
        alert('收藏失败...')
      }
    }, (err)=> {
      console.log(err);
      alert(err)
    })
  }
}

export default ActionSheet
