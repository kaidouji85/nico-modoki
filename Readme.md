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
| CLOUDINALY_CLOUD_NAME | cloudinalyのcloud-name   |
| CLOUDINALY_API_KEY    | cloudinalyのapi-key      |
| CLOUDINALY_API_SECRET | cloudinalyのapi-secret   |

こんな感じのシェルを作っておけば便利です。
というか、以下の説明ではこのシェルを作った前提でいきます。

start.sh
```bash
#!/bin/sh

CLOUDINALY_CLOUD_NAME=""
CLOUDINALY_API_KEY=""
CLOUDINALY_API_SECRET=""

export CLOUDINALY_CLOUD_NAME
export CLOUDINALY_API_KEY
export CLOUDINALY_API_SECRET

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