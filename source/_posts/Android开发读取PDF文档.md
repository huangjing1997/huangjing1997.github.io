---
title: Android开发读取PDF文档
comments: true
toc: true
toc_number: true
toc_style_simple: true
copyright: true
date: 2023-11-08 14:45:39
updated: 2023-11-08 14:45:39
categories: 学习笔记
tags: 
 - Android
 - MuPDF
description:
top_img: https://ooo.0x0.ooo/2023/11/09/Oexd71.jpg
cover: https://ooo.0x0.ooo/2023/11/09/Oexd71.jpg

---



{% tip fa-gear %}

开发环境 Android Studio 4.2.2

{% endtip %}

##  下载源文件

Android读取PDF文档的方式有多种，这里选择移植MuPDF工具到项目内，使用网上已经编译好的so库文件导入到项目内，GitHub上搜索 {% label mupdf-android blue %} 进行下载

![](https://ooo.0x0.ooo/2023/11/09/OezDEs.png)

![](https://ooo.0x0.ooo/2023/11/09/OezHIK.png)

## 项目导入MuPDF

下载好的源文件解压后，将src/mian/jniLibs目录下的文件全部复制到项目app/libs内，没有则自己创建一个

![](https://ooo.0x0.ooo/2023/11/09/Oezjhp.png)

在build.gradle文件内添加如下内容，接着点击 {%label Build red%} -> {%label MakeProject red%} ,会在app/libs下生成一个{%label Native_Libs2.jar blue%}文件

```
task nativeLibsToJar(type: Zip, description: "create a jar archive of the native libs") {
    destinationDir file("$projectDir/libs")
    baseName "Native_Libs2"
    extension "jar"
    from fileTree(dir: "libs", include: "**/*.so")
    into "lib"
}
tasks.withType(JavaCompile) {
    compileTask -> compileTask.dependsOn(nativeLibsToJar)
}
```

将src/main/java/com/artifex目录下的所有文件复制到项目内，包名需要和源文件一致，不可修改 {%label com.artifex.mupdfdemo blue%} {%label com.artifex.utils blue%}

![](https://ooo.0x0.ooo/2023/11/09/OeFzQB.png)

![](https://ooo.0x0.ooo/2023/11/09/OeFegC.png)



如果是新建的项目就将src/main/res目录下所有文件都复制到项目内，不是则选择性的复制进去，否则原来的文件可能会被覆盖掉

![](https://ooo.0x0.ooo/2023/11/09/OeFvQt.png)

如有一些文件报错则导入R包即可，AndroidManifest.xml内引入相应的权限

## 预览

```
Uri uri = Uri.parse(path);
Intent intent = new Intent(mContext, MuPDFActivity.class);
intent.setAction(Intent.ACTION_VIEW);
intent.setData(uri);
startActivity(intent);
```

效果图（部分按钮隐藏了）：

![](https://ooo.0x0.ooo/2023/11/09/OehoSX.png)

{% link https://huaweicloud.csdn.net/64f97f286b896f66024ca1b6.html,参考文档,,https://huaweicloud.csdn.net/64f97f286b896f66024ca1b6.html %}
