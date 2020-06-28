---
image: /img/og-image.jpg
templateKey: blog-post
title: Next.js+TypeScriptでの環境構築
date: 2020-06-28T14:54:43.591Z
description: Next.jsとTypeScriptで環境構築を行う手順を開発しています。
featuredpost: true
featuredimage: /img/og-image.jpg
tags:
  - javascript
---
## Next.jsとは？
Reactでサーバーサイドレンダリングを行うフレームワーク
[Next.js公式サイト](https://nextjs.org/)

## Next.jsとTypeScriptでの環境構築の手順一覧
今回の環境構築はNext.jsを触ってみるのに最低限のものをインストールしています。

### 環境構築の前準備
- リポジトリ作成
- `package.json`を生成

```
$ npm init
```

### react関連をインストール
- `react`をインストール
- `react-dom`をインストール

#### ここの手順でインストールしたツール
- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)

```
$ npm install --save next react react-dom
```

### TypeScriptとSassをインストールする
TypeScriptを導入するのでファイルの拡張子に注意`.tsx`

#### ここの手順でインストールしたツール
- [@zeit/next-typescript](https://www.npmjs.com/package/@zeit/next-typescript
)
- [@zeit/next-sass](https://www.npmjs.com/package/@zeit/next-sass)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [@types/react](https://www.npmjs.com/package/@types/react)
- [@types/node](https://www.npmjs.com/package/@types/node)


```
$ npm install --save-dev @zeit/next-typescript @zeit/next-sass node-sass
$ npm install --save-dev typescript @types/react @types/node
```



### ディレクトリとファイルを作成・更新する

- `pages`ディレクトリを作成
- `index.tsx`を記載する
- `package.json`を更新する


```
$ mkdir pages
＄ vim pages/index.tsx
```

とりあえずHello Worldをかく

``` index.tsx
export default () => <div>Hello World</div>
```

`package.json`にスクリプトを記載する。

``` package.json
"scripts": {
  "start": "next start",
  "build": "next build",
  "dev": "next dev",
}
```

### スクリプトを実行する

記載したスクリプトを実行

```
$ npm run dev
```

実行結果
`http://localhost:3000/`にアクセス

![スクリーンショット 2020-06-24 18.57.40.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/199085/e5af24d5-2c4e-07e0-afd9-327cf360f81b.png)


`Next.js`の立ち上げができました。
`index.tsx`に記載したHelloWorldが表示できました。

### gitignoreを記載
`.gitignore`に`.nuxt`と`node_modules`を追加しgitの管理から除外する


```
.gitignoreに下記を記載
.next
node_modules
```

ここまで完了すればひとまず環境構築が完了です。
