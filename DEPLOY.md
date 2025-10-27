# 🚀 GitHub Pages 部署指南

## ⚠️ 重要：启用 GitHub Actions 部署

由于这个项目使用自定义 Jekyll 主题，需要使用 GitHub Actions 来构建和部署。

### 📋 部署步骤

#### 1️⃣ 推送代码到 GitHub

```powershell
cd d:\Desktop\workspace\github_page\felixx3001
git add .
git commit -m "✨ 添加超酷炫特效 + GitHub Actions 部署配置"
git push origin main
```

#### 2️⃣ 在 GitHub 启用 Actions 部署

1. **访问仓库设置**
   - 打开：`https://github.com/Felixx3001/felixx3001`
   - 点击 `Settings`（设置）

2. **配置 Pages**
   - 左侧菜单找到 `Pages`
   - **Source** 部分选择：
     - ⚠️ **不要选择分支！**
     - 选择 `GitHub Actions` ⬅️ **重要！**
   
   应该看到类似这样：
   ```
   Build and deployment
   Source: GitHub Actions  ✓
   ```

3. **等待部署**
   - 点击仓库顶部的 `Actions` 标签
   - 查看 "Deploy Jekyll site to Pages" 工作流
   - 等待绿色勾号 ✅（约 2-3 分钟）

4. **访问网站**
   - 部署成功后访问：`https://felixx3001.github.io/felixx3001/`
   - 或者在 Settings > Pages 查看网站 URL

---

## 🔧 如果遇到问题

### 问题 1: Actions 没有运行
**解决方案**:
1. 确认 `.github/workflows/pages.yml` 文件存在
2. 检查 Settings > Actions > General
3. 确保 "Allow all actions and reusable workflows" 已启用

### 问题 2: 构建失败
**解决方案**:
1. 点击 Actions 标签查看错误日志
2. 检查 Gemfile 和 _config.yml 配置
3. 查看终端输出的具体错误信息

### 问题 3: 网站样式丢失
**解决方案**:
1. 检查浏览器控制台（F12）是否有 404 错误
2. 确认 Settings > Pages > Source 选择了 "GitHub Actions"
3. 清除浏览器缓存并刷新

### 问题 4: 特效不显示
**解决方案**:
1. 确认网络可以访问 CDN (particles.js)
2. 检查浏览器控制台错误
3. 尝试使用 Chrome 或 Edge 浏览器

---

## 📊 部署流程图

```
推送代码到 GitHub
      ↓
GitHub Actions 自动触发
      ↓
安装 Ruby 和依赖
      ↓
使用 Jekyll 构建网站
      ↓
上传构建产物
      ↓
部署到 GitHub Pages
      ↓
✅ 网站上线！
```

---

## 🎨 验证特效是否生效

部署成功后，访问网站应该看到：

✅ **背景效果**
- 流动的彩色渐变背景
- 粒子在屏幕上漂浮
- 星星闪烁

✅ **交互效果**
- 鼠标移动产生彩色粒子
- 点击产生波纹
- 悬停元素有动画

✅ **README 显示**
- 顶部波浪横幅
- 动态打字效果
- GitHub 统计卡片

**如果只看到纯文字，说明：**
1. ❌ 没有选择 "GitHub Actions" 作为 Source
2. ❌ 构建失败（查看 Actions 日志）
3. ❌ 样式文件路径错误

---

## 🔍 调试技巧

### 查看构建日志
1. 进入仓库的 Actions 标签
2. 点击最新的工作流运行
3. 展开 "Build with Jekyll" 步骤
4. 查看详细日志

### 本地测试（可选）
如果想在本地测试：

```powershell
# 安装依赖
bundle install

# 本地运行
bundle exec jekyll serve

# 访问 http://localhost:4000
```

**注意**: 本地可能看不到完整效果，因为某些路径在 GitHub Pages 上会自动调整。

---

## 📝 文件清单

确保以下文件都已提交：

- ✅ `.github/workflows/pages.yml` - GitHub Actions 配置
- ✅ `_config.yml` - Jekyll 配置
- ✅ `Gemfile` - Ruby 依赖
- ✅ `_includes/extra/head.html` - CSS 特效
- ✅ `_includes/extra/body.html` - HTML 结构
- ✅ `_includes/extra/script.js` - JavaScript 特效
- ✅ `_includes/extra/styles.scss` - 额外样式
- ✅ `README.md` - 主页内容

---

## 🎉 成功标志

当你看到以下内容时，说明部署成功：

1. **Actions 标签页**
   - ✅ 绿色勾号
   - "Deploy Jekyll site to Pages" 显示成功

2. **Settings > Pages**
   - 显示："Your site is live at https://..."
   - Source 显示："GitHub Actions"

3. **访问网站**
   - 🌈 看到渐变背景
   - ✨ 粒子在移动
   - 💫 霓虹灯效果
   - 🎨 所有动画正常

---

<div align="center">

## 需要帮助？

查看 GitHub Actions 运行日志  
或在 Issues 中提问

**祝你部署成功！** 🎊

</div>
