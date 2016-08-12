import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage,
         TouchableOpacity,
         Image} from 'react-native'
import Login from './login'
import SureButton from '../weidget/sure-button.js'
import * as Network from '../common/network.js'
import Api from '../common/api.js'
import Util from '../common/util.js'
import SimpleItem from '../weidget/simple_item.js'

class Mine extends Component {
  constructor(props) {
    super(props)
    this.onButtonChanged = this.onButtonChanged.bind(this)
    this.state = {
      isLogin: false,
      user: {},
      inf: Api.mine.logout,
    }
  }

  verify() {
    var isLogin = this.state.isLogin
    if (!isLogin) {
      this.props.navigator.push({
        title: '登陆',
        component: Login
      })
    }
    return isLogin
  }

  // 回调
  onButtonChanged() {
    this.setState({isLogin: false})
    AsyncStorage.removeItem('user', (err)=> {
      if (err) {
        console.log('登出失败');
      }
    })
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    var user = AsyncStorage.getItem('user', (err, result)=> {
      if (err) {
        console.log('mine:' + err);
        return ;
      }
      if (result) {
        this.setState({isLogin: true})
        var user = JSON.parse(result)
        this.setState({user: user})
      } else {
        this.setState({isLogin: false })
        this.setState({user: {}})
      }
    })
  }

  // <SureButton
  //   style={{marginBottom: 64}}
  //   content={content}
  //   updateChange={this.onButtonChanged}
  //   verify={this.verify.bind(this)}
  //   params={{
  //     uid: this.state.user.uid,
  //     verify: this.state.verify,
  //     inf: this.state.inf
  //   }}/>
  render() {
    var content = this.state.isLogin ? '退出登陆' : '登陆'
    return (
      <View style={{flex: 1, backgroundColor: '#F1F2F3'}}>
          <View style={styles.main}>
            <Image source={require('image!default_icon')} style={styles.image} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.name}>
                { this.state.isLogin ? this.state.user.name : '请登陆' }
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
              <Image source={require('image!back')} style={{marginRight: 15}}/>
            </View>
          </View>
          <SimpleItem
            content='我的收藏'
            imageName='collect'
            style={{marginTop: 10}}
            />
      </View>
    )
  }
}

var styles = {
  main: {
    marginTop: 20,
    height: 80,
    flexDirection: 'row',
    borderBottomWidth: Util.pixel,
    borderTopWidth: Util.pixel,
    borderColor: '#DDDDDD',
    backgroundColor: 'white'
  },
  name: {
    marginLeft: 10,
    fontSize: 15
  },
  button_view: {
    flexDirection: 'row',
    backgroundColor: '#1DBAF1',
    borderRadius: 5,
    height: 44,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    textAlign:'center',
    color: 'white',
    fontSize: 20,
  },
  image: {
    borderRadius: 3,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Mine
