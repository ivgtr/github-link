<div align="center">
  <h3 align="center">github-link</h3>
  <p align="center">タグを設置するだけでGithubのリンクを設置できるコンポーネント</p>
  <p>日本語 | <a href="https://github.com/ivgtr/github-link/blob/master/README.md" >ENGLISH</a></p>
</div>

---

```html
<script
  src="https://unpkg.com/github-link/dist/esm/github-link.js"
  type="module"
></script>

<github-link url="https://github.com/ivgtr/github-link" />
```

### デモ
[demo](https://ivgtr.github.io/github-link/)	

### 使い方
#### Script tag
- `<script src="https://unpkg.com/github-link/dist/esm/github-link.js" type="module"></script>` このようなscriptタグを設置します
- 任意の場所で`<github-link />` を設置してください

#### Vue
- `npm i github-link --save` を実行してください
- 次のようにloaderを呼び出し、タグを設置してください
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
- `npm i github-link --save` を実行してください
- 次のようにloaderを呼び出し、タグを設置してください
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


### 追加の設定
| Property | Attribute | Description                             | Type                    | Default                 |
| -------- | --------- | --------------------------------------- | ----------------------- | ----------------------- |
| `mode`   | `mode`    | ライトモード/ダークモードの設定を反転させます。 | `"normal" \| "reverse"` | `'normal'`              |
| `url`    | `url`     | 設定したいGithubのURLを指定します。         | `string`                | `'https://github.com/'` |


----------------------------------------------

## License
MIT ©[ivgtr](https://github.com/ivgtr)


[![Twitter Follow](https://img.shields.io/twitter/follow/mawaru_hana?style=social)](https://twitter.com/mawaru_hana) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)  