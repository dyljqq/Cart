import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage,
         TouchableOpacity,
         Image} from 'react-native'
import Header from '../common/header.js'
import ContentItem from '../weidget/content_item.js'
import Constant from '../common/constant.js'
import Global from '../common/global.js'
import * as Images from '../weidget/images.js'
import SureButton from '../weidget/sure-button.js'
import Api from '../common/api.js'
import AlterName from './alter_name.js'
import AlterPassword from './alter_password.js'

class Account extends Component {

  press(num) {
    var component = null
    console.log('num: ' + num);
    switch (num) {
      case 0:
        component = AlterName
        break;

      case 1:
        component = AlterPassword
        break;
      default: break;
    }
    if (component) {
      this.props.navigator.push({
        component: component
      })
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Constant.color.backgroundColor}}>
        <Header
          navigator={this.props.navigator}
          obj={{
            backName: '返回',
            title: '我的账户'
          }}
          />
        <View style={{flexDirection: 'row', height: 60, backgroundColor: 'white', marginTop: 20}}>
          <View style={{marginLeft: 15, justifyContent: 'center'}}>
            <Text>头像</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-end', marginRight: 10, flex: 1}}>
            {Images.getImage('defaultHeadportrait', {})}
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
            <Image source={require('image!back')} style={{marginRight: 15}}/>
          </View>
        </View>
        <ContentItem
          style={{marginTop: 20}}
          title={'用户名'}
          content={Global.user.name}
          onPress={this.press.bind(this)}
          num={0}
          />
        <ContentItem
          title={'修改密码'}
          onPress={this.press.bind(this)}
          num={1}
          />
        <SureButton
          style={{marginTop: 20}}
          content='退出登陆'
          updateChange={this.callback.bind(this)}
          params={{
            inf: Api.mine.logout
          }}/>
      </View>
    )
  }

  callback(data) {
    AsyncStorage.setItem('user', JSON.stringify({}), err=> {
      if (err) {
        console.log("退出登录失败: " + err);
        return ;
      }
      Global.user = {}
      this.props.navigator.pop()
    })
  }

}

var styles = {
  flex_1: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
}

export default Account
