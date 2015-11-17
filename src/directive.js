import { util as _ } from 'vue'

export const directive = {
  bind() {
    this.preLoading = false
    this.handler = (e) => {
      this.preLoading = true
      this.vm[this.expression].call(null, this, e)
    }
    _.on(this.el, 'mouseover', this.handler)
  },
  reset() {
    _.off(this.el, 'mouseover', this.handler)
  },
  unbind() {
    this.reset()
  }
}
