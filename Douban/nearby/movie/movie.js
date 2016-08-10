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
import MovieItem from './movie_item.js'
import Util from '../common/util.js'
import Search from '../common/search.js'

class MovieList extends Component {
  constructor(props) {
    super(props)
    this._getData = this._getData.bind(this)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})
    this.state = {
      keywords: '功夫熊猫',
      show: false,
      dataSource: ds.cloneWithRows([])
    }
  }

  render() {
    return (
      <View style={[styles.flex_1, {marginBottom: 44}]}>
        <View style={[styles.search, styles.row]}>
          <View style={styles.flex_1}>
            <Search placeholder="请输入电影名称" onChangeText={this._changeText.bind(this)} defaultValue={this.state.keywords}/>
          </View>
          <TouchableOpacity style={styles.btn} onPress={this._search.bind(this)}>
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
    console.log('row:' + row);
    return <MovieItem row={row} navigator={this.props.navigator}/>
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
    let url = Api.movie.search + '?count=10&q=' + this.state.keywords
    // 开始加载数据
    this.setState({
      show: false
    })
    Network.get(url, (data)=> {
      if(!data.subjects || !data.subjects.length){
        return alert('电影搜索出错...')
      }
      let movies = data.subjects
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2})
      this.setState({
        dataSource: ds.cloneWithRows(movies),
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

export default MovieList
