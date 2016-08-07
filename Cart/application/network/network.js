import React, { Component } from 'react'

export function call(url, method, params, callback) {
  console.log("url:" + url + " method:" + method + "params:" + params);
  let formData = new FormData()
  for(var [key, value] of params) {
    formData.append(key, value)
  }
  fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d'
    },
    body: formData
  }).then(response => {
    return response.json()
  }).then(responseJson => {
    callback(responseJson.code, responseJson.message, responseJson.data)
  })
}
