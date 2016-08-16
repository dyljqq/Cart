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
import Account from './account.js'
import Global from '../common/global.js'
import MyCollection from './my_collection.js'

class Mine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      user: {},
      content: '请登陆'
    }
  }

  componentDidMount() {
    this.updateUser()
  }

  componentWillReceiveProps() {
    console.log('aaaaa');
    this.updateUser()
  }

  updateUser() {
    if (Global.user && Global.user.sid) {
      this.setState({
        isLogin: true,
        user: Global.user,
        content: Global.user.name
      })
    } else {
      this.setState({
        isLogin: false,
        user: {},
        content: '请登陆'
      })
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F2F3'}}>
          <View style={styles.main}>
            <Image source={require('image!default_icon')} style={styles.image} />
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.name} onPress={this.goAccount.bind(this)}>
                { this.state.content }
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end', flex: 1}}>
              <Image source={require('image!back')} style={{marginRight: 15}}/>
            </View>
          </View>
          <SimpleItem
            content='我的图书'
            imageName='collect'
            style={{marginTop: 10}}
            num={0}
            onPress={this.press.bind(this)}
            />
      </View>
    )
  }

  press(num) {
    console.log(num);
    var component = null
    switch (num) {
      case 0:
        component = MyCollection
        break;
      default: break
    }
    this.props.navigator.push({
      component: component
    })
  }

  goAccount() {
    var component = null
    if (this.state.user && this.state.user.sid) {
      component = Account
    } else {
      component = Login
    }
    this.props.navigator.push({
      component: component
    })
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
