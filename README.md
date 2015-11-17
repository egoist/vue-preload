# Vue Preload

Preloading data like a pro.

## How does it work

Like what [InstantClick](http://instantclick.io/) said, before visitors click on a link, they hover over that link. Between these two events, 200 ms to 300 ms usually pass by. InstantClick makes use of that time to preload the page, so that the page is already there when you click.

What the difference beween InstantClick and Vue Preload is the latter preload the data to store in state instead replace the HTML.

## How simple it could be

First install with `npm install vue-preload` and use as global directive or mixin:

```javascript
import Vue from 'vue'
// as global directive
import { directive as preload } from 'vue-preload'
Vue.directive('preload', preload)
```

Then replace your `v-on:click="handleClick"` with `v-preload:"handleClick"`, and do make a small changes:

```javascript
...
handleClick (pr) {
  fetch.then().then(data => {
    // add the following line to tell it preLoading ends
    pr.end()
  })
}
...
```

## License

MIT.
