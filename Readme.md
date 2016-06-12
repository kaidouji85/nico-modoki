# nico-modoki

習作でニコニコ静画もどきを作ります。
まだexpressで雛形を作っただけです。

## セットアップ

###  パッケージのインストール
```
npm install
```

### 環境変数の設定

| 環境変数名              | 値                      |
|:-----------------------|:-----------------------|
| CLOUDINARY_URL | cloudinaly url   |

CLOUDINARY_URLはherokuに設定されている環境変数です。
今回の開発ではcloudinaryのheroku add onを使っている関係上、
認証系の状態はheroku側にあります。
ローカル環境だと以下コマンドで見ることができます。

```
heroku config | grep CLOUDINARY
```

こんな感じのシェルを作っておけば便利です。
というか、以下の説明ではこのシェルを作った前提でいきます。

start.sh
```bash
#!/bin/sh

CLOUDINARY_URL="値を入れる"
export CLOUDINARY_URL

npm start
```


## 実行方法
環境変数の設定をした後で、npm startで動きます。
ただ、それだと色々面倒なので、以下のように起動用シェルでスタートします。

```
./start.sh
```

起動したらブラウザから以下アドレスを開いてください

```
http://localhost:3000
```

これでトップページが表示されたら成功です。
なお、現状では以下アドレスから、ローカルファイルをcloudinaly上にアップロードするテストプログラムを実行することができます。

```
http://localhost:3000/upload-test
```