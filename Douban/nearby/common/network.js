import React from 'react'

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
