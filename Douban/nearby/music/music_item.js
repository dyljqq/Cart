import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import Util from '../common/util.js'
import DetailWebView from '../common/webview.js'

class MusicItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let row = this.props.row
    var name = ''
    if (row.author.length > 0) {
      name = row.author[0].name
    }
    return (
      <View style={styles.item}>
        <View style={styles.center}>
          <Image source={{uri: row.image}} style={styles.img} />
        </View>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={[{flex: 1}, {marginLeft:20}]}>曲目: {row.title}</Text>
          <Text style={styles.textRight}>演唱: {name}</Text>
        </View>
        <View style={[styles.row, {marginTop: 10}]}>
          <Text style={[{flex: 1}, {marginLeft:20}]}>时间: {row.attrs.pubdate}</Text>
          <Text style={styles.textRight}>评分: {row.rating.average}</Text>
        </View>
        <View style={[styles.center]}>
          <TouchableOpacity style={[styles.goDou, styles.center]} onPress={this._goMusicDtail.bind(this, row.title, row.mobile_link)}>
            <Text>详情</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _goMusicDtail(title, link) {
    // TODO webview
    this.props.navigator.push({
      component: DetailWebView,
      passProps: {
        title: title,
        url: link,
        backName: '音乐'
      }
    })
  }
}

var styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  item:{
    marginTop:10,
    borderTopWidth:Util.pixel,
    borderBottomWidth:Util.pixel,
    borderColor:'#ddd',
    paddingTop:10,
    paddingBottom:10
  },
  row: {
    flexDirection: 'row'
  },
  textWidth: {
    width: Util.size.width / 2
  },
  textRight: {
    marginRight: 20
  },
  goDou:{
    justifyContent:'center',
    alignItems:'center',
    height:32,
    width:60,
    borderWidth:Util.pixel,
    borderColor:'#3C9BFD',
    marginLeft:10,
    marginTop:0,
    borderRadius:3
  }
})

export default MusicItem
