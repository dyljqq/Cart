import React, { Component } from 'react'

const prefix = 'http://127.0.0.1:8089/api/'

export default {
  mine: {
    login: {
      url: prefix + 'v1/user/login',
      type: 'post'
    },
    registe: {
      url: prefix + 'v1/user/register',
      type: 'post'
    },
    forget_password: {
      url: prefix + 'v1/user/forgetPassword',
      type: 'post'
    },
    logout: {
      url: prefix + 'v1/user/logout',
      type: 'post'
    }
  },
  cart: {
    getItems: {
      url: prefix + 'v1/cart/getItems',
      type: 'post'
    }
  }
}
