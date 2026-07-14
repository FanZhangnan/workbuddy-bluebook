# WorkBuddy 蓝皮书

WorkBuddy 实战教程，面向非技术职场人。两篇结构：先认识功能，再做项目。

## 本地运行

需要 **Node.js 22** 以上。

```bash
# 1. 克隆项目
git clone https://github.com/FanZhangnan/workbuddy-bluebook.git
cd workbuddy-bluebook

# 2. 安装依赖
npm install

# 3. 启动开发服务器（支持热更新）
npm run docs:dev
```

浏览器打开 `http://localhost:5173`，修改内容自动刷新。

### 其他命令

| 命令 | 用途 |
|---|---|
| `npm run docs:dev` | 开发模式，改完即时预览 |
| `npm run docs:build` | 生成静态网站到 `docs/.vitepress/dist/` |
| `npm run docs:preview` | 预览构建后的生产版本 |
| `npm run check` | 内容校验 + 生产构建 |

## 项目结构

```
docs/
├── index.md                 # 首页
├── start/                   # 开始阅读
├── bluebook/
│   ├── part-01-getting-to-know/   # 第一篇：认识 WorkBuddy（12 章）
│   └── part-02-hands-on-projects/ # 第二篇：项目实战（7 章）
├── paths/                   # 学习路线
├── solve/                   # 问题导航
├── cases/                   # 案例库
├── templates/               # 模板库
└── public/downloads/        # 可下载模板文件
```

## 许可证

- 代码：MIT
- 教程内容：CC BY 4.0
