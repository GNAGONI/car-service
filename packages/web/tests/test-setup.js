import 'core-js/es6/map'
import 'core-js/es6/set'
import 'raf/polyfill'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener() {},
    removeListener() {},
  }))

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  (callback => {
    setTimeout(callback, 0)
  })
