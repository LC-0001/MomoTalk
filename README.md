<h1>
  <img src="https://readme-typing-svg.demolab.com?font=Inter&weight=700&size=48&pause=1000&color=FF88AA&vCenter=true&width=500&lines=Momo+Talk" alt="Momo Talk">
</h1>

一个《蔚蓝档案》风格的同人聊天界面，可以和自己喜欢的角色对话。

> 在线体验：[https://LC-0001.github.io/MomoTalk/](https://LC-0001.github.io/MomoTalk/)

<!-- 建议在此处放一张聊天界面截图（或毛玻璃效果的 GIF），README 观感会好很多 -->

## 功能

- 与《蔚蓝档案》角色进行 AI 对话
- 内置角色人设：星野、白子、芹香、野宫、绫音等
- 好感度系统：AI 会根据聊天内容增减好感度，并调整回复语气
- 支持自定义角色（头像、人设、学校）
- 毛玻璃（玻璃拟态）外观，可一键开关
- 数据保存在浏览器本地，支持导出/导入 JSON 备份、恢复已删会话
- 支持多家 AI 服务商，可随时切换

## 技术栈

纯原生 HTML/CSS/JavaScript 单文件应用：无框架、无构建步骤、无后端依赖，数据全部存储在浏览器本地（localStorage）。

## 如何 fork 并部署自己的副本

1. 点击仓库右上角的 **Fork** 按钮。
2. 进入你 fork 后的仓库，点击 **Settings** → 左侧栏 **Pages**。
3. Source 选 **Deploy from a branch**，Branch 选 **main**，文件夹选 **/(root)**，点 **Save**。
4. 等 1-2 分钟，访问 `https://你的用户名.github.io/MomoTalk/`。
5. 打开页面后，在「更多 → 设置 AI 服务」里填入你自己的 API Key。

## 本地开发

本项目是纯静态页面，无需安装任何依赖：

```bash
git clone https://github.com/LC-0001/MomoTalk.git
cd MomoTalk
# 直接双击 index.html 即可运行；或起一个本地静态服务器：
python3 -m http.server 8000
# 访问 http://localhost:8000
```

## 支持的 AI 服务

| 服务商 | 说明 | 注册地址 |
|---|---|---|
| 智谱 AI | 国内免费，推荐新手（glm-4-flash） | <https://open.bigmodel.cn/> |
| OpenRouter | 海外免费，模型选择多 | <https://openrouter.ai/keys> |
| Aion Labs | 角色扮演专用，免费 | <https://www.aionlabs.ai/app/api-keys/> |
| 自定义 | 自己填写 API 地址和模型，可接入任意 OpenAI 兼容接口（进阶） | — |

> 自定义模式示例：想用 **DeepSeek** 的话，API 地址填 `https://api.deepseek.com/chat/completions`，模型填 `deepseek-chat` 即可。
> 应用内「设置 AI 服务」也带有各服务商的注册引导链接。
> ⚠️ API Key 只保存在你自己的浏览器里，不会出现在导出文件中，也不要提交到 GitHub。

## 免责声明

本项目为个人非商业同人项目，与 Nexon 无关。
《蔚蓝档案》角色及相关内容版权归 Nexon 所有。
仅供学习交流，请勿商业使用。如有侵权请联系删除。

## 更新日志

### v2.0.9 (2026-10-15)
- 修复默认角色被删除后刷新会复活的问题
- 加固导入数据校验（角色 id / 颜色字段过滤，防注入）
- 修复 AI 回复等待期间切换/删除会话导致的数据错位
- 修复中文输入法选词时按 Enter 误发消息
- AI 请求新增 60 秒超时保护

## 关于本项目

- 项目由 LC-0001 发起并构思
- 部分代码与文档在 AI 辅助下完成

![License](https://img.shields.io/badge/许可-MIT-FF88AA)
