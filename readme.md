<div align="center">
  <h3 align="center">github-link</h3>
  <p align="center">A component that allows you to set up a link for github , by simply set a tag.</p>
  <p><a href="https://github.com/ivgtr/github-link/blob/master/docs/README_ja.md" >日本語</a> | ENGLISH</p>
</div>

---

```html
<script
  src="https://unpkg.com/github-link/dist/esm/github-link.js"
  type="module"
></script>

<github-link url="https://github.com/ivgtr/github-link" />
```

### Demo
[demo](https://ivgtr.github.io/github-link/)	

### Usages
#### Script tag
- Set a script tag like this.
`<script src="https://unpkg.com/github-link/dist/esm/github-link.js" type="module"></script>`
- Call `<github-link />` at any place.

#### Vue
- Install it with `npm i github-link --save`
- Call the loader as follows.
```vue
<script>
import { applyPolyfills, defineCustomElements } from 'github-link/loader'

applyPolyfills().then(() => {
  defineCustomElements()
})

export default {
  name: "App"
}
</script>
```
```js
<templeate>
  <div id="app">
    <github-link url="https://github.com/ivgtr/github-link" />
  </div>
</templeate>
```

#### React
- Install it with `npm i github-link --save`
- Call the loader as follows
```jsx
import { applyPolyfills, defineCustomElements } from 'github-link/loader'

applyPolyfills().then(() => {
  defineCustomElements()
});

export default function App() {
  return (
    <div className="App">
       <github-link url="https://github.com/ivgtr/github-link" />
    </div>
  );
}

```


### Configs
| Property | Attribute | Description                               | Type                    | Default                 |
| -------- | --------- | ----------------------------------------- | ----------------------- | ----------------------- |
| `mode`   | `mode`    | Reverse to Lightmode and Darkmode Themes. | `"normal" \| "reverse"` | `'normal'`              |
| `url`    | `url`     | The Github link you want to configure.    | `string`                | `'https://github.com/'` |


----------------------------------------------

## License
MIT ©[ivgtr](https://github.com/ivgtr)

[![Github Follow](https://img.shields.io/github/followers/ivgtr?style=social)](https://github.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)  
