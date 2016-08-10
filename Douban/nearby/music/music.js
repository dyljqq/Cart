import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ListView
} from 'react-native';
import Api from '../common/api.js'
import * as Network from '../common/network.js'
import MusicItem from './music_item.js'
import Util from '../common/util.js'
import Search from '../common/search.js'

class MusicList extends Component {

  constructor(props) {
    super(props)
    this._getData = this._getData.bind(this)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})
    this.state = {
      keywords: '偏偏喜欢你',
      show: false,
      dataSource: ds.cloneWithRows([])
    }
  }

  render() {
    return (
      <View style={[styles.flex_1, {marginBottom: 44}]}>
        <View style={[styles.search, styles.row]}>
          <View style={styles.flex_1}>
            <Search placeholder="请输入歌曲/歌手名称" onChangeText={this._changeText.bind(this)} defaultValue={this.state.keywords}/>
          </View>
          <TouchableOpacity style={styles.btn} onPress={this._search}>
            <Text style={styles.font}>搜索</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.show ?
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            />
            : Util.loading
        }
      </View>
    )
  }

  componentDidMount() {
    this._getData()
  }

  _renderRow(row) {
    return <MusicItem row={row} navigator={this.props.navigator}/>
  }

  _changeText(val) {
    this.setState({
      keywords: val
    })
  }

  _search() {
    this._getData()
  }

  _getData() {
    let url = Api.music.search + '?count=10&q=' + this.state.keywords
    // 开始加载数据
    this.setState({
      show: false
    })
    Network.get(url, (data)=> {
      if(!data.musics || !data.musics.length){
        return alert('音乐搜索出错...')
      }
      let musics = data.musics
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})
      this.setState({
        dataSource: ds.cloneWithRows(musics),
        show: true
      })
    }, (err)=> {
      console.log(err);
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
  }
});

export default MusicList
