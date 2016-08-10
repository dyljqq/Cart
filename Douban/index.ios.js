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
          TabBarIOS} from 'react-native'
import App from './src/views/App'
import Navigation from './nearby/common/navigation.js'
import Book from './nearby/book/book.js'
import MusicList from './nearby/music/music.js'
import MovieList from './nearby/movie/movie.js'

class AwesomeProject extends Component {
  constructor(props) {
    super(props)
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
      </TabBarIOS>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)