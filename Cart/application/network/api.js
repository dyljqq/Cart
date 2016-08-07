const prefix = 'http://127.0.0.1:9998/api/v1/'

export default {
  cart: {
    getItems: {
      url: prefix + 'cart/getItems',
      type: 'post'
    }
  }
}
