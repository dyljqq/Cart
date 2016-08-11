import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ListView
} from 'react-native';
import Search from '../common/search.js'
import Util from '../common/util.js'
import * as Network from '../common/network.js'
import Api from '../common/api.js'
import BookListItem from './book_list_item.js'
import BookDetail from './book_detail.js'

class Book extends Component {

  constructor(props) {
    super(props)
    this._changeText = this._changeText.bind(this)
    this._search = this._search.bind(this)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      keywords: 'dyl',
      dataSource: ds.cloneWithRows([]),
      show: false
    }
  }

  render() {
    return (
      <View style={[styles.flex_1, {marginBottom: 44}]}>
        <View style={[styles.search, styles.row]}>
          <View style={styles.flex_1}>
            <Search placeholder="请输入图书的名称" onChangeText={this._changeText} defaultValue={this.state.keywords}/>
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

  _changeText(val) {
    this.setState({
      keywords: val
    })
  }

  _search() {
    //TODO search
    this._getData()
  }

  _renderRow(row) {
    return <BookListItem row={row} onPress={this._loadPage.bind(this, row.id)}/>
  }

  _getData() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let url = Api.book.search + '?count=10&q=' + this.state.keywords
    this.setState({
      show: false
    });
    Network.get(url, (data)=> {
      if(!data.books || !data.books.length) {
        return alert('图书服务出错')
      }
      var books = data.books
      this.setState({
        dataSource: ds.cloneWithRows(books),
        show: true
      })
    }, (err)=> {
      console.log(err);
    })
  }

  _loadPage(id) {
    this.props.navigator.push({
      component: BookDetail,
      passProps: {
        id: id
      },
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

export default Book
