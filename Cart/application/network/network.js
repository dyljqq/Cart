import React, { Component } from 'react'

export function call(url, method, params, callback) {
  var str = ''
  var index = 0
  console.log("url: " + url + " method: " + method);
  for(var p of params) {
    console.log(p);
    str += p[0] + '=' + p[1]
    if(index < (params.size - 1)) {
      str += '&'
      index++
    }
  }
  fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: str
  }).then(response => {
    return response.json()
  }).then(responseJson => {
    callback(responseJson.code, responseJson.message, responseJson.data)
  })
}
