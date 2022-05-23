# 更新日志

## 2022/05/23 ~ v0.7.0-alpha.62

- feat(docs): add alert message
- fix(create-nocobase-app): storage path error
- fix(client): improve translation
- fix(cli): nocobase test command --db-clean option is invalid
- refactor(plugin-workflow): change column type of executed from boolean to integer (#411)

## 2022/05/22 ~ v0.7.0-alpha.58

- fix: 204 no content response (#378)
- feat: destroy association field after target collection destroy (#376)
- fix(type): use sequelize native Transactionable instead of TransactionAble (#410)
- fix(plugin-workflow): remove previous listeners when collection changed in config (#409)
- fix(plugin-acl): missing pagination parameters (#394)
- feat(client): add custom action (#396)
- refactor(plugin-workflow): multiple instances and event management (fix #384) (#408)
- feat(cli): --db-sync options
- fix(client): pagination dropdown menu is blocked (#398)
- feat: display version number (#386)
- fix: missing isTruly/isFalsy filter operators (#390)
- fix(client): reset page number to first page (#399)

## 2022/05/19 ~ v0.7.0-alpha.57

### 新功能

- 打包工具 `@nocobase/build`
- cli 工具 `@nocobase/cli`
- devtools 包 `@nocobase/devtools`
- JavaScript 版本的 SDK `@nocobase/sdk`
- 全新的文档（v0.7）

### 问题修复和改进

- 将 NocoBase 无代码平台插件放到一起 `@nocobase/preset-nocobase`
- 改进 create 脚手架 `create-nocobase-app`
- 官网文档主题 `dumi-theme-nocobase`

### Breaking changes

📢 在此之前创建的项目需要重新创建。

## 2022/05/14 ~ v0.7.0-alpha.34

- feat: add plugins:getPinned action api
- Fix(plugin workflow): fix cannot get job result properties (#382)
- feat: exist on server start throw error (#374)
- chore: application options (#375)
- fix: not in operator with null value record (#377)

## 2022/05/13 ~ v0.7.0-alpha.33

- fix: link-to field data scope error  (#1337)
- feat(plugin workflow): revisions (#379)
- fix(database): fix option-parser include list index (#371)
- fix(plugin-worklfow): fix duplicated description in fields values (#368)
- fix(database): fix type and transaction in repository (#366)
- fix(plugin workflow): fix transaction of execution (#364)

## 2022/05/05 ~ v0.7.0-alpha.30

- fix(client): upgrade formily packages
- fix(client): setFormValueChanged must be defined

## 2022/05/01 ~ v0.7.0-alpha.27

- fix: use wrapper when greater than one column
- fix: props for CreateFormBlockInitializers
- fix: add schema initializer icon
- fix: plugin workflow (#349)
- fix: db:sync not working (#348)
- fix(plugin-workflow): fix trigger bind logic to avoid duplication (#347)
- Fix(plugin workflow) (#346)
- fix: action open mode
- Fix: menu url style (#344)
- feat: action loading
- fix: compile the label field
- fix: invalid drag and drop sort

## 2022/04/25 ~ v0.7.0-alpha.16

- fix: cannot find module mkdirp (#330)
- Fix(plugin workflow): UX issues (#329)
- fix(plugin-file-manager): test failed
- fix(app-server): dist options

## 2022/04/25 ~ v0.7.0-alpha.0

- 内测版

## 2021/10/07 ~ v0.5.0

- 第二个预览版

## 2021/04/07 ~ v0.4.0

- 第一个预览版
