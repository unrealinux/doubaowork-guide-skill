# 来源与归属

本仓库是一个 **Agent Skill** 形态的本地知识库，正文内容来自上游开源项目：

- 上游仓库：[AlephAITech/DoubaoWorkGuide](https://github.com/AlephAITech/DoubaoWorkGuide)（《豆包工作蓝皮书》）
- 上游许可：MIT，版权人 `Copyright (c) 2026 DoubaoWork Guide Contributors`（见 `LICENSE`）
- 同步版本：commit `a7f87fe4`（同步时间见 `skills/doubaowork-guide/references/.source.json`）
- 上游站点：[https://doubaowork.homes](https://doubaowork.homes/)

## 本仓库做了什么

- 把上游单个 `site/content/site-content.json`（58 个节点）里的 50 篇正文拆到 `skills/doubaowork-guide/references/chapters/`
- 新增 `skills/doubaowork-guide/SKILL.md`：只做**意图路由**（问什么 → 读哪个文件），正文按需加载
- 新增 `skills/doubaowork-guide/scripts/sync.mjs`：增量同步上游，幂等、带重试；同步时自动把 `/media/...` 改成线上链接、把 `::video[...]` 和站内组件改成可读 markdown、生成 `references/INDEX.md`
- 上游 MIT 许可与版权声明予以保留，见 `LICENSE`

## 边界声明

- 本仓库与 AlephAITech、与豆包工作官方**均无关联**，非官方项目
- 不收录上游约 700 MB 的图片与视频本体，只保留 doubaowork.homes 链接（查看需要联网）
- 上游正文整理于 2026 年，产品界面、价格、权限可能已变化，以豆包工作官方渠道为准
- 别和腾讯 WorkBuddy 的 `workbuddy-guide` Skill 混淆，两者是不同产品

## 版权

- 上游正文与媒体：MIT，版权人 `DoubaoWork Guide Contributors`，声明原样保留在 `LICENSE`
- 本仓库的 Skill 层（`SKILL.md`、`scripts/`、`packaging/`）：© 2026 unrealinux，MIT
