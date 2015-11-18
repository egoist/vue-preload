import directive from './directive'
import './main.css'

export default {
  install(Vue, options = {}) {
    directive(Vue, options)
  }
}
