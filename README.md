# LIFF Sandobox

LIFF App で OIDC を利用するための実験をおこなうための環境

※ 現時点では、LIFF でログイン後、Amplify Data での OIDC の認証を利用した CRUD ができていない

## 必要なもの

### LINE 関連

[LINE Developer Console](https://developers.line.biz/console/) にて、以下のものを用意する

- LINE ログインチャネル
- LINE ログインチャネルでの LIFF アプリの追加

### Amplify Console で設定が必要なもの

リポジトリを接続した Amplify アプリ を接続し、用意した LINE ログインチャネルの情報を元に、以下を設定する

#### 環境変数

| 変数名              | 内容                 |
| ------------------- | -------------------- |
| LIFF_URL            | 作成した LIFF の URL |
| NEXT_PUBLIC_LIFF_ID | 作成した LIFF の ID  |

#### シークレット

| 変数名              | 内容                                         |
| ------------------- | -------------------------------------------- |
| LINE_CHANNEL_ID     | 作成した LINE ログインチャネルの ID          |
| LINE_CHANNEL_SECRET | 作成した LINE ログインチャネルのシークレット |

## 開発

### パッケージインストール

```bash
npm i
```

### Amplify のリソースの検証

sandobox が作成できるかを検証する

#### 必要なシークレットの設定

```bash
npx ampx sandbox secret LINE_CHANNEL_ID --profile "YOUR_AWS_PROFILE"
npx ampx sandbox secret LINE_CHANNEL_SECRET --profile "YOUR_AWS_PROFILE"
```

#### sandbox の立ち上げ

```bash
npx ampx sandbox --profile "YOUR_AWS_PROFILE"
```

### ビルドの検証

```bash
npm run build
```

### 開発サーバーの起動

※ 現時点では、Amplify に Deploy して検証しているため、明確な開発方法を提示できない。

> TODO
