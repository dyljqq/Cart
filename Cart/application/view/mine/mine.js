import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage,
         TouchableOpacity} from 'react-native'
import Login from './login'
import SureButton from '../../weidget/sure-button.js'
import '../../network/network.js'
import Api from '../../network/api.js'

export default class Mine extends Component {
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

  render() {
    var content = this.state.isLogin ? '退出登陆' : '登陆'
    return (
      <View style={{flex: 1}}>
          <View style={styles.main}>
            <Text>
              { this.state.isLogin ? 'Login Successful' : 'Login' }
            </Text>
          </View>
          <SureButton
            style={{marginBottom: 20}}
            content={content}
            updateChange={this.onButtonChanged}
            verify={this.verify.bind(this)}
            params={{
              uid: this.state.user.uid,
              verify: this.state.verify,
              inf: this.state.inf
            }}/>
      </View>
    )
  }
}

var styles = {
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  button_view: {
    flexDirection: 'row',
    backgroundColor: '#1DBAF1',
    borderRadius: 5,
    height: 44,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    textAlign:'center',
    color: 'white',
    fontSize: 20,
  }
}
