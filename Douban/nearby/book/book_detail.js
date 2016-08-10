import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Image,
    ScrollView
} from 'react-native';
import BookListItem from './book_list_item.js'
import Util from '../common/util.js'
import Header from '../common/header.js'
import Api from '../common/api.js'
import * as Network from '../common/network.js'

class BookDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F1F2F3'}}>
        <Header
          navigator={this.props.navigator}
          obj={{backName: '图书',
                title: this.state.data ? this.state.data.title : ''
              }} />
        <ScrollView style={{flex: 1}}>
        {
          this.state.data ?
          <View>
            <BookListItem row={this.state.data} />
            <View>
              <Text style={styles.title}>图书简介</Text>
              <Text style={styles.text}>{this.state.data.summary}</Text>
            </View>
            <View>
            <Text style={styles.title}>作者简介</Text>
            <Text style={styles.text}>{this.state.data.author_intro}</Text>
            </View>
            <View style={{height:50}}></View>
          </View>
          : Util.loading
        }
        </ScrollView>
      </View>
    )
  }

  componentDidMount() {
    var id = this.props.id
    var url = Api.book.search_id + '/' + id
    Network.get(url, (data)=> {
      this.setState({
        data: data
      })
    }, (err)=> {
      alert(err)
    })
  }
}

var styles = StyleSheet.create({
  m10:{
    flex:1,
  },
  title:{
    fontSize:16,
    marginLeft:10,
    marginTop:10,
    marginBottom:10
  },
  text:{
    marginLeft:10,
    marginRight:10,
    color:'#000D22'
  }
});

export default BookDetail
