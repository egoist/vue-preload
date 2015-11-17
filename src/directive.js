import { util as _ } from 'vue'

export const directive = {
  bind() {
    this.preLoading = false
    this.tmp = {}
    this.handleMouseOver = (e) => {
      if (this.preLoading) {
        return
      }
      this.preLoading = true
      this.vm[this.expression].call(null, this, e)
    }
    this.handleClick = (e) => {
      e.preventDefault()
      for(const key in this.tmp) {
        this.vm.$set(key, this.tmp[key])
      }
    }
    _.on(this.el, 'mouseover', this.handleMouseOver)
    _.on(this.el, 'click', this.handleClick)
  },
  set(obj) {
    this.tmp = obj
  },
  end() {
    this.preLoading = false
  },
  reset() {
    _.off(this.el, 'mouseover', this.handleMouseOver)
  },
  unbind() {
    this.reset()
  }
}
