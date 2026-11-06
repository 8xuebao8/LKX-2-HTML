# Gem Guide 宝石选购指南 · v2.0.0

**Learn before you buy. 先了解，再购买。**

面向宝石新手的宝石探索、知识学习与购买决策平台。纯静态网页，无需安装依赖或构建，中英文双语。
A beginner-friendly gemstone discovery and buying guide. Static site, no build step, Chinese / English.

## 功能 / Features

- **探索 Explore**：按颜色、预算、佩戴方式、切工、品种、处理方式筛选 33 种常见宝石，另有 77 种 GIA 图表收录的冷门、有机、合成与仿制宝石。
- **百科 Encyclopedia**：110 种宝石的硬度、折射率、比重、光性、晶系、光学效应与内含物。
- **💰 预算换算 Budget**：输入预算，看同样的钱在不同宝石上能买多大（按真实比例显示）。
- **🎮 玩一玩 Play**：5 题选宝石测验、"火眼金睛"鉴别小游戏。
- **对比 Compare**：最多 3 种宝石并排比较价格、耐久度、处理和专业参数。
- **处理指南 Treatments**：13 种常见处理方式，天然、优化、处理、合成、仿制、拼合的区别。
- **购买指南 Buying guide**：购买步骤、性价比替代、警惕信号、名称陷阱、证书机构、保养建议。
- 右上角可切换中文 / English，并记住上次的选择。

## 部署到 GitHub Pages / Deploy

把压缩包里的所有文件上传到仓库根目录（`index.html` 位于根目录），然后在仓库 **Settings → Pages** 中选择从分支部署，选择对应分支和根目录（`/ (root)`）。
Upload all files to the repository root (with `index.html` at the root). In **Settings → Pages**, deploy from your branch and the root folder.

本地预览：直接双击 `index.html` 即可。 / Local preview: just open `index.html`.

## 文件 / Files

| 文件 File | 内容 Contents |
| --- | --- |
| `index.html` | 页面、样式与程序 / page, styles and app |
| `gems-data.js` | 33 种宝石的中文选购资料、颜色、价格档位、处理类型、每克拉参考价 |
| `gems-data-en.js` | 上述资料的英文版 / English gem content |
| `gems-gia.js` | 103 条 GIA 图表原始记录（中英文）/ 103 GIA chart records |
| `guides-data.js` | 处理指南与购买指南（中文）|
| `guides-data-en.js` | 处理指南与购买指南（英文）/ English guide content |

## 数据说明 / Data notes

颜色、硬度、物理性质及 103 条原始记录来自 [jewelry-index](https://github.com/8xuebao8/jewelry-index) 中转录的 GIA Gem Property Chart A/B（© 1992 Gemological Institute of America）。公开发布前请确认转载和使用权限。
Colours, hardness, physical properties and the 103 records come from GIA Gem Property Charts A/B (© 1992 GIA) as transcribed in jewelry-index. Confirm redistribution rights before public publication.

价格、处理、优缺点与选购建议为编辑参考，仅用于比较不同品种，不构成报价或鉴定结论。本工具不是 GIA 官方软件，也不能替代专业鉴定。
Prices, treatments, pros and cons and buying advice are editorial references for comparing varieties – not quotes or identification results. This is not official GIA software and does not replace professional gemmological testing.
