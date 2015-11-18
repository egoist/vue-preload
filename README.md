# Vue Preload

[![NPM version](https://img.shields.io/npm/v/vue-preload.svg?style=flat-square)](https://www.npmjs.com/package/vue-preload)
[![NPM download](https://img.shields.io/npm/dm/vue-preload.svg?style=flat-square)](https://www.npmjs.com/package/vue-preload)
[![David Status](https://img.shields.io/david/dev/egoist/vue-preload.svg?style=flat-square)](https://david-dm.org/egoist/vue-preload)

## How does it work

Like what [InstantClick](http://instantclick.io/) said, before visitors click on a link, they hover over that link. Between these two events, 200 ms to 300 ms usually pass by. InstantClick makes use of that time to preload the page, so that the page is already there when you click.

What the difference between InstantClick and Vue Preload is the latter preloads the data to store in state instead of replacing the HTML.

## How simple it could be

First install with `npm install vue-preload` and use the plugin, pretty neat huh?

Or even CDN: `https://npmcdn.com/vue-preload@latest`

```javascript
import Vue from 'vue'
import VuePreload from 'vue-preload'
Vue.use(VuePreload)
// with options
Vue.use(VuePreload, {
  // show the native progress bar
  // put <preloading></preloading> in your root component
  showProgress: true,
  // excutes when click
  onStart() {},
  // excutes when use .end() and after .setState()
  onEnd() {},
  // excutes when prefetching the state
  onPreLoading() {},
})
```

**Protip:** You can disable `showProgress` and define your custom progress bar with `onStart()` and `onEnd()`

Then replace your `v-on:click="handleClick"` with `v-preload="handleClick"`, and make a small change:

```javascript
...
handleClick(pr) {
  fetch.then().then(data => {
    // pre-set states
    pr.set({title: data.title})
    // add the following line to tell it preLoading ends
    pr.end()
  })
}
...
```

[More detailed usage](/tests/_entry.js)

## License

MIT.
