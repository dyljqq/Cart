import React, { Component } from 'react'
import { AppRegistry,
         View,
         Text,
         TabBarIOS,
         StyleSheet,
         AsyncStorage,
         TouchableOpacity,
         Image} from 'react-native'
import Util from '../common/util.js'

export default class CollectionBookItem extends Component {
  render() {
    var row = this.props.row
    var image = row.image != null ? row.image : ''
    return (
      <TouchableOpacity style={[styles.row, styles.item]} {...this.props}>
        <View style={styles.center}>
          {
            row.image != null ?
            <Image source={{uri: row.image}} style={styles.book_image} />
            : <View style={{height: 100, width: 80}} />
          }
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title} numberOfLines={1}>书名: {row.name}</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.info}>作者: {row.author}</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.rate} numberOfLines={1}>星评: {row.rate}</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.price} numberOfLines={1}>价格: {row.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  item: {
    height: 120,
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: Util.pixel,
    borderTopWidth: Util.pixel,
    borderColor: '#ccc'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    margin: 10
  },
  book_image: {
    height: 100,
    width: 80,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 16,
    color: '#1DBAF1'
  },
  info: {
    fontSize: 13,
    color: '#A3A3A3'
  },
  rate: {
    fontSize: 13,
    color: 'orange'
  },
  price: {
    fontSize: 13,
    color: '#2BB2A3'
  }
})
