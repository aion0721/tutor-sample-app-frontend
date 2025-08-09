# React + TypeScript + Vite

## API エンドポイント

基本は以下を API エンドポイントとしている

`/api/open`, `/api/notify`, `/api/history`

### Mock 使い方

以下の`"mockDefault": true`を修正することによってモックの切り替えができる。

```json [public/config.json]
{ "apiBaseUrl": "", "mockDefault": true }
```

また、アクセス URL のパラメーターとして`mock=1`でも切り替えができる。
