# lerna template

该项目使用 lerna 进行多包管理，便于日后对相关内容调整时，关联相工作能够一便调整与发布。

本项目使用独立模式(Independent mode),各模块包独立管理版本号

## 工程介绍


## 安装

1.全局安装 lerna

```bash
npm i -g lerna
```

2.安装工程依赖

```bash
lerna bootstrap
```

## 编译

```bash
lerna run dist
```

## 发布

```bash
lerna publish
```
