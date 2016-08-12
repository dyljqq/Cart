/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {  AppRegistry,
          View,
          Navigator,
          Text,
          TabBarIOS,
          AsyncStorage} from 'react-native'
import App from './src/views/App'
import Navigation from './application/common/navigation.js'
import Book from './application/book/book.js'
import MusicList from './application/music/music.js'
import MovieList from './application/movie/movie.js'
import Mine from './application/mine/mine.js'
import Global from './application/common/global.js'

class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    this.loadData()
    this.state = {
      selectedTap: '图书'
    }
  }
  render() {
    return(
      <TabBarIOS tintColor="white"
                 barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="图书"
          selected={this.state.selectedTap == '图书'}
          icon={require('image!book')}
          onPress={()=> {
            this.setState({
              selectedTap: '图书'
            })
          }}>
          <Navigation component={Book} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="电影"
          selected={this.state.selectedTap == '电影'}
          icon={require('image!movie')}
          onPress={()=> {
            this.setState({
              selectedTap: '电影'
            })
          }}>
          <Navigation component={MovieList} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="音乐"
          selected={this.state.selectedTap == '音乐'}
          icon={require('image!music')}
          onPress={()=> {
            this.setState({
              selectedTap: '音乐'
            })
          }}>
          <Navigation component={MusicList} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="我的"
          selected={this.state.selectedTap == '我的'}
          icon={require('image!user_unselect')}
          onPress={()=> {
            this.setState({
              selectedTap: '我的'
            })
          }}>
          <Navigation component={Mine} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }

  loadData() {
    AsyncStorage.getItem('user', (err, result)=> {
      if (err) {
        console.log('mine:' + err);
        return ;
      }
      if (result) {
        Global.user = JSON.parse(result)
      }
    })
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
