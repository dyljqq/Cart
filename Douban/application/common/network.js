import React from 'react'
import Global from './global.js'

export function get (url, successCallback, failureCallback) {
  console.log('url:' + url);
  fetch(url)
    .then(response => response.text())
    .then(responseText => {
      console.log(responseText);
      successCallback(JSON.parse(responseText))
    })
    .catch((err) => {
      failureCallback(err)
    })
}

export function post(url, params, successCallback, failureCallback) {
  console.log('url:' + url)
  console.log('params:' + params);
  var str = []
  if (params instanceof Map) {
    for(var p of params) {
      str.push(encodeURIComponent(p[0]) + "=" + encodeURIComponent(p[1]))
    }
  } else {
    for(var p in params) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]))
    }
  }

  if(Global.user && Global.user.sid) {
    str.push('sid=' + Global.user.sid)
    str.push('uid=' + Global.user.uid)
  }

  const body = str.join('&');
  console.log('suffix: ' + body);
  fetch(url, {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
   },
   body: body
  }).then(response => {
   return response.json()
  }).then(responseJson => {
   if(responseJson.code == 10000 || responseJson.code == -1) {
     alert('请登陆')
     return ;
   }
   successCallback(responseJson.code, responseJson.message, responseJson.data)
 }).catch(err => {
   failureCallback(err)
 })

}
