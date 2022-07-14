# vite vue3 开发 Chrome 扩展

## 开发
```
npm run dev
```

## 构建
```
npm run build
```


## 说明

1. 使用 vite 加 [crxjs](https://github.com/crxjs/chrome-extension-tools) 插件构建打包，具体使用方式，请看 [crxjs](https://github.com/crxjs/chrome-extension-tools)  官网
2. 由于 vite.config.js 放在根目录，会导致build生成的文件夹有src层级目录。所以不得已将vite.config.js放在src里面。
