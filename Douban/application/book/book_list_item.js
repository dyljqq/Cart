import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import Util from '../common/util.js'

class BookListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var row = this.props.row
    let title = row.title
    if (row.subtitle) {
      title += ':' + row.subtitle
    }
    let info = row.author[0]
    if (row.translator) {
      info += '/' + row.translator
    }
    if (row.publisher) {
      info += '/' + row.publisher
    }
    if (row.pubdate) {
      info += row.pubdate
    }
    let rate = '星评:' + row.rating.average + '(' + row.rating.numRaters + '人评价)'
    let price = '价格：'
    if (!row.price) {
      price += '0'
    } else {
      price += row.price
    }
    price += ' 共'
    if (!row.pages) {
      price += '0'
    } else {
      price += row.pages
    }
    price += '页'
    return (
      <TouchableOpacity style={[styles.row, styles.item]} {...this.props}>
        <View style={styles.center}>
          <Image source={{uri: row.image}} style={styles.book_image} />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.info} numberOfLines={1}>{info}</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.rate} numberOfLines={1}>{rate}</Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={styles.price} numberOfLines={1}>{price}</Text>
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

export default BookListItem
