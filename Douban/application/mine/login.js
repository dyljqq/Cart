import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage} from 'react-native'
import LoginTextField from '../weidget/login-textfield.js'
import SureButton from '../weidget/sure-button.js'
import * as Network from '../common/network.js'
import Api from '../common/api.js'
import Registe from './registe'
import ForgetPassword from './forget_password.js'
import Header from '../common/header.js'

const Type = {
  REGISTER: 1,
  FORGET_PASSWORD: 2
}

class Login extends Component {

  constructor(props) {
    super(props)
    this.onNameTextChanged = this.onNameTextChanged.bind(this)
    this.onPasswordChanged = this.onPasswordChanged.bind(this)
    this.onButtonChanged = this.onButtonChanged.bind(this)
    this.state = {
      name: '',
      password: '',
      inf: Api.mine.login,
      verify: false,
    }
  }

  onNameTextChanged(name) {
    this.setState({name: name})
  }

  onPasswordChanged(password) {
    this.setState({password: password})
  }

  onButtonChanged(data) {
    try {
      AsyncStorage.setItem('user', JSON.stringify(data))
      this.props.navigator.pop()
    } catch(error) {
      console.log('error:' + error);
    }
  }

  verify() {
    var name = this.state.name
    var password = this.state.password
    if (name == '') {
      alert('用户名不能为空...')
      return ;
    } else if (password == '') {
      alert('密码不能为空...')
      return ;
    }
    this.setState({verify: true})
    return true
  }

  goTo(type) {
    var component = null
    var title = ''
    switch (type) {
      case Type.REGISTER:
        component = Registe
        title = '注册'
        break;

      case Type.FORGET_PASSWORD:
        component = ForgetPassword
        title = '忘记密码'
        break;

      default: break
    }
    this.props.navigator.push({
      title: title,
      component: component
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          navigator={this.props.navigator}
          obj={{backName: '返回',
                title: '登陆'
              }} />
        <View style={{flex: 1}}>
          <LoginTextField
            imageName="phone"
            isOn='false'
            placeHolder='请输入手机号'
            isSecure='false'
            style={{marginTop: 20}}
            updateChange={this.onNameTextChanged}/>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#ECEDF1'}}></View>
          </View>
          <LoginTextField
            imageName="lock"
            isOn='true'
            isPassword='true'
            placeHolder='请输入密码'
            isSecure='true'
            style={{marginTop: 0}}
            updateChange={this.onPasswordChanged}/>
          <SureButton
            style={{marginTop: 20}}
            content='登陆'
            updateChange={this.onButtonChanged}
            verify={this.verify.bind(this)}
            params={{
              name: this.state.name,
              password: this.state.password,
              verify: this.state.verify,
              inf: this.state.inf
            }}/>
          <View style={styles.bottom}>
            <View style={styles.bottomView}>
              <View style={styles.bottomBtnLeft}>
                <Text style={styles.text}
                      onPress={this.goTo.bind(this, Type.FORGET_PASSWORD)}>忘记密码?</Text>
              </View>
              <View style={styles.bottomBtnRight}>
                <Text style={styles.text}
                      onPress={this.goTo.bind(this, Type.REGISTER)}>用户注册</Text>
              </View>
            </View>
          </View>
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F2F3',
    flex: 1
  },
  bottom: {
    flex: 1,
    marginBottom: 44,
    justifyContent: 'flex-end',
  },
  bottomView: {
    flexDirection: 'row',
  },
  bottomBtnLeft: {
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: 15,
    marginBottom: 10
  },
  bottomBtnRight: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginBottom: 10
  },
  text: {
    color: '#1DBAF1',
    fontSize: 16
  },
})

export default Login
