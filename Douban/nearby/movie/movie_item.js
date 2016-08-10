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

class MovieItem extends Component {
  render() {
    let row = this.props.row
    console.log(row);
    var casts = row.casts
    var names = []
    for(var i in casts) {
      names.push(casts[i].name)
    }
    return (
      <View style={[styles.row, styles.item]}>
        <View>
          <Image source={{uri: row.images.medium}} style={styles.img} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.textWitdh} numberOfLines={1}>名称: {row.title}</Text>
          <Text style={styles.textWitdh} numberOfLines={1}>演员: {names}</Text>
          <Text style={styles.textWitdh} numberOfLines={1}>评分: {row.rating.average}</Text>
          <Text style={styles.textWitdh} numberOfLines={1}>时间: {row.year}</Text>
          <Text style={styles.textWitdh} numberOfLines={1}>标签: {row.genres}</Text>
          <TouchableOpacity style={styles.goDou} onPress={this._goMovieDtail.bind(this, row.title, row.alt)}>
            <Text>详情</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _goMovieDtail(title, link) {
    this.props.navigator.push({
      component: DetailWebView,
      passProps: {
        title: title,
        url: link,
        backName: '电影'
      }
    })
  }

}

var styles = StyleSheet.create({
  flex_1:{
    flex:1,
  },
  search:{
    paddingLeft:5,
    paddingRight:5,
    marginBottom:5,
    height:40,
  },
  btn:{
    width:40,
    backgroundColor:'#0091FF',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:Util.pixel,
  },
  fontFFF:{
    color:'#fff'
  },
  row:{
    flexDirection:'row'
  },
  img:{
    width:80,
    height:110,
    resizeMode: Image.resizeMode.contain
  },
  textWitdh:{
    flex:1,
    marginLeft:10
  },
  item:{
    marginTop:10,
    height:140,
    paddingTop:15,
    paddingBottom:5,
    paddingLeft:10,
    borderBottomWidth:Util.pixel,
    borderTopWidth:Util.pixel,
    borderColor:"#ddd"
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
});

export default MovieItem
