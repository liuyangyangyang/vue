const home = resolve => require(['./components/home'], resolve)
const buy = resolve => require(['./components/buy'], resolve)
const my = resolve => require(['./components/my'], resolve)
const concern = resolve => require(['./components/concern'], resolve)
const cart = resolve => require(['./components/cart'], resolve)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/buy',
    component: buy
  },
  {
    path: '/my',
    component: my
  },
  {
    path: '/concern',
    component: concern
  },
  {
    path: '/cart',
    component: cart
  }
]
module.exports = routes
