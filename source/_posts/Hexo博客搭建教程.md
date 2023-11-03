---
title: Hexo博客搭建教程
date: 2023-07-19 10:19:30
categories: 学习笔记
tags: Hexo
description: 
top_img: https://i.imgtg.com/2023/07/25/Oh8OoI.jpg
cover: https://i.imgtg.com/2023/07/25/Oh8OoI.jpg
comments: true
toc: true
toc_number: true
toc_style_simple: true
copyright: true

---

## 安装环境

Hexo 基于 Node.js，且部署到 GitHub 需要使用到 Git 工具，因此安装 Hexo 前需要先安装 Node.js（自带nmp） 和 Git

[Node.js (nodejs.org)](https://nodejs.org/zh-cn)

![](https://i.imgtg.com/2023/07/27/OiWPdS.jpg)

[Git - Downloads (git-scm.com)](https://git-scm.com/downloads)

![](https://i.imgtg.com/2023/07/27/OiWpUK.jpg)

安装比较简单，安装完成后检查一下，Win+R 输入 cmd，进入窗口输入以下命令，出现版本号即可

![](https://i.imgtg.com/2023/07/27/OiWJya.jpg)



## 本地安装 Hexo 博客程序

### 安装 Hexo 博客程序

在 C 盘外的其它盘新建一个 HexoBlog（名称随意）文件夹，存放 Hexo 程序文件，进入该文件右键选择 Git Bash Here

使用 npm 一键安装 Hexo 博客程序：

``` 
npm install -g hexo-cli
```

### Hexo 初始化和本地预览

输入以下命令完成初始化

```
hexo init      # 初始化
npm install    # 安装组件
```

初始化后输入以下命令启动服务并预览

```
hexo g   # 生成页面
hexo s   # 启动服务预览(默认端口4000)
hexo server -p 5000 (如果出现端口被占用的情况，使用其它端口启动服务预览)
```

打开浏览器输入 localhost:4000，出现 Hexo 默认页面表示安装成功

![](https://i.imgtg.com/2023/07/27/OiWfGq.jpg)



## 连接 GitHub

<font size="3" > 没有账号的先注册账号，注册完后在本地桌面空白处右键选择 Git Bash Here，设置连接的 GitHub 账号 </font>

```
git config --global user.name "GitHub 用户名"
git config --global user.email "GitHub 邮箱"
```

创建 SSH 密钥，输入以下命令后一路回车 

```
ssh-keygen -t rsa -C "GitHub 邮箱"
```

添加密钥，进入 [C:\Users\用户名\.ssh] 目录（要勾选显示“隐藏的项目”），用记事本打开公钥 id_rsa.pub 文件并复制里面的内容

登录 GitHub 点击右上角的圆形图片选择 Settings 进入设置界面

![](https://i.imgtg.com/2023/07/27/OibvQv.jpg)![](https://i.imgtg.com/2023/07/27/OibyCq.md.jpg)

选择左边菜单栏的 SSH and GPG keys，点击 New SSH key

![](https://i.imgtg.com/2023/07/27/Oibmic.md.jpg)![](https://i.imgtg.com/2023/07/27/OibZrY.jpg)

Title 随便取个名字，复制的 id_rsa.pub 内容粘贴到 Key 中，点击 Add SSH key 完成添加

![](https://i.imgtg.com/2023/07/27/Oikd7v.jpg)

验证是否配置成功：

打开 Git Bash，输入以下命令出现 “Are you sure……”，输入 yes 回车确认，最后显示 “Hi xxx! You've successfully……” 即连接成功

```
ssh -T git@github.com
```



## 创建 GitHub Pages 仓库

GitHub 页面右上角点击加号选择 New repository ，Repository name 中的”用户名“一定要和前面的 Owner 中的一样

![](https://i.imgtg.com/2023/07/27/OixFPX.md.jpg)

创建后默认自动启用 HTTPS，博客地址为：`https://用户名.github.io`



## 将本地 Hexo 部署到 GitHub Pages

将博客部署到 GitHub Pages 使其能通过网络访问

安装 hexo-deployer-git

```
npm install hexo-deployer-git --save
```

找到本地的 HexoBlog 目录，打开里面的 _config.yml 配置文件，修改末尾的 deploy 属性，如下所示：

```
deploy:
  type: git
  repository: git@github.com:用户名/用户名.github.io.git
  branch: main
```

main：新建仓库的默认分支，默认分支为 master 的需要改成 master

修改完成后在 HexoBlog 目录下右键打开 Git Bash Here，输入以下命令部署到 GitHub Pages：

```
hexo d
```

完成后访问我们的 GitHub 域名 `https://用户名.github.io` 就可以看到 Hexo 网站了



## 绑定域名（可选）

### 域名注册

目前博客访问的是 GitHub 的子域名，不是很简洁和美观，注册一个域名绑定自己的域名，逼格拉满，这里使用国外的域名商 [Namesilo](https://www.namesilo.com/) 进行注册，便宜好用，com 域名只需要10$ 左右，且不需要备案，使用优惠码 `okoff` 可以优惠一美元（只限第一次）

先注册网站账号，注册完后登录主页，搜索自己喜欢的域名

![](https://i.imgtg.com/2023/07/27/OizzQF.jpg)

搜索到喜欢的域名后点击域名右侧的 `Add` 按钮添加到购物车

![](https://i.imgtg.com/2023/07/27/OiziiP.md.jpg)

点击后右上角的购物车图标，然后点击弹出框的 `View cart` 按钮进入购物车界面

![](https://i.imgtg.com/2023/07/27/OizxrD.jpg)

在购物车右侧界面的 `Have a Coupon or Promontion Code?` 输入框输入优惠码 `okoff` 后，点击下方的 `CHECKOUT` 按钮进入支付界面，选择支付宝进行支付即可

![](https://i.imgtg.com/2023/07/27/OizF36.md.jpg)

### 域名解析

购买完成后进行域名解析，点击上方的 `My Account` 进入个人中心

![](https://i.imgtg.com/2023/07/27/OizjSD.jpg)

进入个人中心后点击左侧菜单中的 `Domain Manager` 进入域名管理界面

![](https://i.imgtg.com/2023/07/27/Oiz9AI.jpg)

点击域名右侧的圆形图标进行解析

![](https://i.imgtg.com/2023/07/27/Oiz8n6.jpg)

点击右侧的删除图标将默认的信息删除，手动添加信息，下面的是添加好后的信息，有两种类型的信息，一种是 `A` 类型的，一种是 `CNAME` 类型的

![](https://i.imgtg.com/2023/07/27/OizXDP.jpg)

使用下面的模板添加 `A` 类型信息，找到 GitHub 模板，点击右侧的 `Apply Template` 按钮

![Oiz2wF.jpg](https://i.imgtg.com/2023/07/27/Oiz2wF.jpg)

在弹出框中点击 `Accept` 按钮，即可自动添加四条 `A` 类型信息

![](https://i.imgtg.com/2023/07/27/Oizu8b.jpg)

点击 `Add/Edit a Resource Record` 框中的 `CNAME` 添加 `CNAME` 信息，左侧输入 `www` ，右侧输入 Hexo 博客域名，点击 `SUBMIT` 按钮提交即可

![](https://i.imgtg.com/2023/07/27/Oiz3kl.jpg)



### Hexo 博客绑定域名

进入本地博客 HexoBlog 文件夹的 source 目录，创建一个 `CNAME` 文件(没有后缀名)，里面输入自己的域名，如 `http://xyjblog.top`

清除缓存并重新部署

```
hexo clean   # 清除缓存文件等
hexo g       # 生成页面
hexo d       # 部署
```

然后输入域名就可以访问博客了

### 开启HTTPS

配置域名后无法使用 HTTPS 进行访问，需要手动开启 HTTPS，进入博客界面点击上方的 `Settings` 按钮后，选择左侧菜单的 `Pages` ，在右侧的 Custom domain 下将 `Enforce HTTPS` 勾选，就可以通过 HTTPS 进行访问了

![OiFU8L.md.jpg](https://i.imgtg.com/2023/07/27/OiFU8L.md.jpg)



