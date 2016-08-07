import React, { Component } from 'react'
import { AppRegistry,
         Text,
         Image,
         StyleSheet,
         View,
         TouchableOpacity,
         Dimensions,
         AsyncStorage,
         ScrollView} from 'react-native'
import ListItem from './list_item.js'

class CartDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      price: 0.00
    }
  }

  componentWillMount() {
    var that = this
    AsyncStorage.getAllKeys(function(err, keys) {
      console.log("keys:" + keys);
      if(err) {
        console.log("取出数据错误：" + err);
        return ;
      }
      AsyncStorage.multiGet(keys, function(err, result) {
        var arr = []
        for(var i in result) {
          arr.push(JSON.parse(result[i][1]))
        }
        that.setState({data: arr})
      })
    })
  }

  render() {
    var str = null
    var price = this.state.price
    var data = this.state.data
    var list = []
    for(var i in data) {
      var row = (
        <ListItem
          key={i}
          desc={data[i].title + data[i].desc}
          price={data[i].price + '元'}
          />
      )
      price += data[i].price
      list.push(row)
    }
    if(price) {
      str = ", 共" + price.toFixed(1) + '元'
    }
    return (
      <ScrollView style={{marginTop: 10}}>
        {list}
        <Text style={styles.btn}>支付{str}</Text>
        <Text style={styles.clear} onPress={this.clearStorage.bind(this)}>清空购物车</Text>
      </ScrollView>
    );
  }

  clearStorage() {
    var that = this
    AsyncStorage.clear(function(err) {
      if (err) {
        console.log("清空购物车失败");
        return ;
      }
      that.setState({
        data: [],
        price: 0
      })
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
    fontSize: 18,
  },
  clear: {
    marginTop: 10,
    backgroundColor: '#FFF',
    color: '#000',
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 24,
    height: 33,
    fontSize: 18,
    textAlign: 'center'
  }
}

export default CartDetail
