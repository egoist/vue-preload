import register from './register'
import './main.css'

export default {
  install(Vue, options = {}) {
    register(Vue, options)
  }
}
