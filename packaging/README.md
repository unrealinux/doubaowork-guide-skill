# 豆包工作蓝皮书 Skill（v{{VERSION}}）

《豆包工作蓝皮书》的完整正文 + 路由层，装成本地 Agent Skill。回答豆包工作的问题时直接读本地原文，不靠模型记忆、不联网。

- 内容：使用篇 12 篇 + 入门篇 6 篇 + 场景篇 5 类 31 个任务，共 50 篇（约 165 KB）
- 结构：`SKILL.md` 只负责路由（问题 → 读哪一篇）+ 一条完整通读路线，正文按需加载
- 回答带章节标题、文件路径与在线链接，能回溯到 doubaowork.homes 原文

## 1. 安装

把 `doubaowork-guide/` 整个目录放到 agent 读取的技能目录下：

| 场景 | 目标位置 |
| --- | --- |
| 给本机所有项目用（推荐，跨工具） | `~/.agents/skills/` |
| 只给 pi 用 | `~/.pi/agent/skills/` |
| 只给某个项目用 | `<项目>/.agents/skills/` |

解压（macOS / Linux / Git Bash）：

```bash
unzip doubaowork-guide-skill-{{VERSION}}.zip -d ~/.agents/skills/
```

Windows PowerShell：

```powershell
Expand-Archive .\doubaowork-guide-skill-{{VERSION}}.zip -DestinationPath "$env:USERPROFILE\.agents\skills"
```

也可以不用 zip：

```bash
pi install git:github.com/unrealinux/doubaowork-guide-skill
git clone https://github.com/unrealinux/doubaowork-guide-skill ~/.agents/skills/doubaowork-guide
```

## 2. 验证装好了

1. 看文件在不在（少一层、多一层都会加载不到）：

   ```bash
   ls ~/.agents/skills/doubaowork-guide/SKILL.md
   ```

2. 在 agent 里问一句豆包工作的问题，看它有没有读 `references/chapters/` 下的文件，并在回答里标出章节标题。
   pi 用户可以用 `/skill:doubaowork-guide <问题>` 强制加载。

3. 没反应时：确认技能目录名是 `doubaowork-guide`、没有和 `workbuddy-guide` 混淆，然后重启 agent（技能列表在启动时扫描）。

## 3. 怎么用

直接问就行，不用先声明"用这个技能"。典型问法：

| 你问 | 它会读 | 你会看到 |
| --- | --- | --- |
| 豆包工作的连接器怎么用？ | `chapters/part1-05.md` | 先给一个能验收的小任务做法，再引原文步骤 |
| 怎么让豆包每天早上给我一份资讯简报？ | `chapters/part2-06.md` | 定时任务 + 失败处理，标章节名与在线链接 |
| 豆包工作能不能帮我写公众号？ | `chapters/part3-media-02.md` | 四步工作流（事实包 → 长文 → 标题 → 封面）和提示词 |
| 想系统学一遍，从哪开始？ | `SKILL.md` 第 2 节 + `references/INDEX.md` | 按使用篇 → 入门篇 → 场景篇的通读顺序，一次一两篇 |

界面、价格、权限这类会变的内容，回答会加一句"以豆包工作官方渠道为准"，并给出 doubaowork.homes 原文链接。

## 4. 包里有什么

```text
doubaowork-guide/
├─ SKILL.md                # 原则 + 路由表 + 通读路线
├─ README.md               # 本文件
├─ LICENSE                 # 上游 MIT 许可（版权归属见 NOTICE.md）
├─ NOTICE.md               # 来源与边界声明
├─ CHANGELOG.md
├─ references/
│  ├─ INDEX.md             # 50 篇索引（标题 → 文件 + 在线链接）
│  └─ chapters/            # 上游正文，50 个文件
└─ scripts/sync.mjs        # 从上游 site-content.json 重新同步（需 Node.js 20+）
```

`references/.source.json` 记录同步的上游 commit 与内容哈希。它是生成物，不要手改 `references/chapters/`。

## 5. 更新正文

上游是单个 `site/content/site-content.json`，用包里的脚本重新拆章：

```bash
node scripts/sync.mjs --check    # 上游有新提交吗
node scripts/sync.mjs            # 增量同步
node scripts/sync.mjs --dry      # 只看映射，不写盘
```

## 6. 边界

- 与 AlephAITech、与豆包工作官方均无关联，非官方项目。
- 不收录上游约 700 MB 的图片与视频本体，只保留 doubaowork.homes 链接，查看需要联网。
- 正文整理于 2026 年，界面、价格、权限可能已变化，以豆包工作官方渠道为准。
- 别和腾讯 WorkBuddy 的 `workbuddy-guide` Skill 混淆，两者是不同产品。

构建于 {{DATE}}。
