import React, { Component } from 'react'
import { AppRegistry,
         Text,
         Image,
         StyleSheet,
         View,
         ScrollView,
         AsyncStorage} from 'react-native'
import Item from './item.js'
import * as Network from '../../network/network.js'
import Api from '../../network/api.js'
import CartDetail from './cart_detail.js'

class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      content: ''
    }
  }

  componentWillMount() {
    var that = this
    Network.call(Api.cart.getItems.url, Api.cart.getItems.type, new Map(), function(code, message, data){
      if(code == 0) {
        that.showView(data)
      } else {
        alert(message)
      }
    })
  }

  render() {
    return (
      <ScrollView style={{marginTop: 22}}>
        {this.state.list}
        <Text style={styles.btn} onPress={this.toCart.bind(this)}>去结算{this.state.content}</Text>
      </ScrollView>
    )
  }

  showView(data) {
    var list = []
    for(var i in data) {
      if (i % 2 == 0) {
        var item = (
          <View key={i} style={{flexDirection: 'row', marginBottom: 10}}>
          <Item
            url={data[i].url}
            title={data[i].title}
            press={this.press.bind(this, data[i])}/>
          <Item
            url={data[parseInt(i) + 1].url}
            title={data[parseInt(i) + 1].title}
            press={this.press.bind(this, data[parseInt(i) + 1])}/>
        </View>)
        list.push(item)
      }
    }
    var str = ''
    if(data.length > 0) {
      str = ', 共' + data.length + '件商品'
    }
    this.setState({content: str})
    this.setState({list: list})
  }

  press(data) {
    AsyncStorage.setItem('SP-' + this.generateId() + '-SP', JSON.stringify(data), function(err) {
      if(err) {
        console.log("err:" + err);
      }
    })
  }

  generateId() {
    return 'xxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    }).toUpperCase()
  }

  toCart() {
    this.props.navigator.push({
      component: CartDetail,
      title: '购物车'
    })
  }

}

var styles = {
  btn: {
    backgroundColor: '#FF7200',
    height: 33,
    textAlign: 'center',
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 24,
    marginTop: 40,
    marginBottom: 10,
    fontSize: 18,
  }
}

export default Cart
