# 车三百公共组件库


## 项目架构设计
基于lerna的Monorepo的架构设计。建议大家可以先去了解这种方式，方便后续理解。
## 文件夹功能说明
- **build** 存放所有的构建配置，包含不限于wepack配置，gulp配置。可以不用管
- **lib** 存放所有打包构建的产物
- **packages** 所有的组件集合
- **script** 所有shell脚本
- **website** demo网站

## 校验
项目继承了commitlint、eslint、changelog 一体化工作流程

## 开发新组件流程说明
>所有开发新组件必须新建分支

+ 执行yarn gen 包名 例如 yarn gen input

会生成如下的文件
```

├── __tests__
│   └── input.spec.js
├── index.js
├── package.json
└── src
    └── index.vue
```
`tests`目录是存放该组件对应的jest测试用例
`index.js`主入口文件
`src` 源码入口
`package.json`

+ package下`c3-element-plus` 中安装该组件。
> 做全局引入。

1.执行`lerna add xxx --scope=c3-element-plus`
**xxx 是你当前组件下package中的name值**
2.`c3-element-plus` 中 `index.js` 中导入你的组件`挂载`并`导出`

+ 编写组件代码

编写组件需要严格注意的几个规范
1. 如果你的组件需要样式。请为你的组件包裹一个根类 比如 `c-input`、`c-input-xx`。然后书写样式到theme-chalk下建立一个同名的文件书写样式。如`input.scss`

+ 编写demo

所有的demo文档放在`website`中的`docs`里。新建一个如`input.md`。然后在route.config.json 中配置一下路由信息即可

组件demo直接用````html demo:vue 包裹起来即可。会自动渲染成组件

编写组件文档，执行`npm run dev` 即可看到在线网站。**编写demo可以视作是调试用**

+ 调试（在其他项目中）

1. yarn link
2. 其他项目中 yarn link c3-element-plus 即可

+ 打包yarn build


## 自动发布
> 人为下不要手动触发。通过merge到master上自动触发。changlog自动获取commit提交记录，所以请大家规范约束自己的commit记录
>
**yarn relase**

自动build
自动changlog
自动打tag

## 更新版本

提交merge给相关人员CR没问题后方可入库。合并master后自动发版。
