# Uber Eats 取餐单生成器

一个基于 React 和 Next.js 的取餐单生成工具，可以自定义生成 Uber Eats 风格的取餐单并下载为 PNG 图片。

## 功能特性

- 🏪 自定义门店名称
- 👤 自定义顾客姓名
- 📋 自定义订单号
- 🏷️ 自定义品牌标识（左右文字）
- 🍽️ 动态添加/删除菜品项目
- 📏 可调节缩放比例（0.5x - 3x）
- 🎨 支持经典和紧凑两种风格
- 📱 响应式设计，支持移动端
- 💾 一键下载为高质量 PNG 图片

## 技术栈

- **前端框架**: React 18 + Next.js 14
- **样式**: Tailwind CSS
- **UI 组件**: Radix UI + 自定义组件
- **图标**: Lucide React
- **图片生成**: html-to-image
- **类型安全**: TypeScript

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/                    # Next.js 13+ App Router
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/             # React 组件
│   ├── ui/                # 基础 UI 组件
│   │   ├── button.tsx     # 按钮组件
│   │   ├── card.tsx       # 卡片组件
│   │   ├── input.tsx      # 输入框组件
│   │   └── label.tsx      # 标签组件
│   └── UberEatsSlipBuilder.tsx  # 主组件
├── lib/                    # 工具函数
│   └── utils.ts           # 通用工具函数
├── globals.css             # 全局样式
├── tailwind.config.js      # Tailwind 配置
├── postcss.config.js       # PostCSS 配置
├── next.config.js          # Next.js 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 项目依赖
```

## 使用方法

1. **填写基本信息**: 输入门店名称、顾客姓名、订单号
2. **设置品牌标识**: 自定义左右品牌文字
3. **添加菜品**: 设置数量和菜品名称
4. **调整样式**: 选择风格和缩放比例
5. **预览效果**: 右侧实时预览生成的取餐单
6. **下载图片**: 点击"下载 PNG"按钮保存图片

## 自定义配置

### 添加新的菜品项目

点击"新增一行"按钮，然后填写数量和菜品名称。

### 调整缩放比例

使用缩放输入框调整取餐单大小，支持 0.5x 到 3x 的缩放。

### 切换风格

在风格选择器中切换"Classic"和"Compact"两种显示风格。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License
