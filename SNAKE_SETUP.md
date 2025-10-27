# 🐍 Snake 动画配置指南

## 当前状态

现在 README 使用的是 **贡献图表** 作为替代方案，已经可以正常显示。

如果你想要真正的 **贡献蛇动画**（Snake eating contributions），需要额外配置。

---

## 🎯 方案对比

### 方案 1: 贡献图表（当前使用，推荐）
✅ **优点**:
- 无需额外配置
- 实时生成
- 始终显示最新数据
- 不依赖其他 Action

❌ **缺点**:
- 不是动画效果
- 只是静态图表

**显示效果**: 彩色的贡献活动图表

---

### 方案 2: Snake 动画（可选）
✅ **优点**:
- 超酷的动画效果
- 蛇吃贡献点的动画
- 更有视觉冲击力

❌ **缺点**:
- 需要额外的 GitHub Action
- 需要创建 output 分支
- 每天更新一次（不是实时）

**显示效果**: 动画蛇在贡献图上移动

---

## 🔧 如何启用 Snake 动画

如果你想要真正的蛇动画，按照以下步骤：

### 步骤 1: 确认文件存在
确保 `.github/workflows/snake.yml` 文件已经创建（已完成✅）

### 步骤 2: 推送代码
```powershell
git add .
git commit -m "🐍 添加 Snake 动画配置"
git push origin main
```

### 步骤 3: 手动触发 Action
1. 访问仓库的 Actions 标签
2. 在左侧找到 "Generate Snake Animation"
3. 点击 "Run workflow" > "Run workflow"
4. 等待运行完成（约 1 分钟）

### 步骤 4: 检查 output 分支
1. 成功后会自动创建 `output` 分支
2. 在这个分支中会有生成的 SVG 文件

### 步骤 5: 更新 README
将 README.md 中的贡献图表替换为：

```markdown
### 🐍 Contribution Snake

<img src="https://raw.githubusercontent.com/Felixx3001/felixx3001/output/github-contribution-grid-snake-dark.svg" alt="snake animation" />
```

---

## 📋 完整部署命令

如果选择使用 Snake 动画：

```powershell
# 1. 提交代码
cd d:\Desktop\workspace\github_page\felixx3001
git add .
git commit -m "🐍 启用 Snake 动画"
git push origin main

# 2. 等待几分钟后，手动在 GitHub Actions 中运行 "Generate Snake Animation"

# 3. 确认 output 分支创建成功

# 4. 更新 README.md 使用蛇动画链接
```

---

## 🔍 故障排查

### 问题 1: Action 运行失败
**解决方案**:
- 检查仓库权限
- 确认 Settings > Actions > General > Workflow permissions 设置为 "Read and write permissions"

### 问题 2: output 分支未创建
**解决方案**:
- 查看 Action 运行日志
- 确认 GITHUB_TOKEN 有足够权限

### 问题 3: SVG 显示 404
**解决方案**:
- 确认 output 分支存在
- 检查文件路径是否正确
- 等待几分钟让 GitHub 缓存更新

---

## 💡 推荐做法

**对于大多数用户，建议保持当前的贡献图表方案**，因为：

1. ✅ 简单，无需额外配置
2. ✅ 实时数据
3. ✅ 稳定可靠
4. ✅ 同样美观

**如果你特别喜欢动画效果**，再启用 Snake 动画。

---

## 🎨 预览对比

### 贡献图表（当前）
```
┌─────────────────────────────────┐
│  彩色活动图表                    │
│  ▓▓░░▓▓░░▓▓                     │
│  实时数据，始终最新               │
└─────────────────────────────────┘
```

### Snake 动画（可选）
```
┌─────────────────────────────────┐
│  蛇动画吃贡献点                  │
│  🐍 ━━━━→                       │
│  每天更新一次                    │
└─────────────────────────────────┘
```

---

<div align="center">

**选择你喜欢的方案！** 🎉

两种方案都很酷！

</div>
