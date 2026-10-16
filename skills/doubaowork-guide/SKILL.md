---
name: doubaowork-guide
description: "Use when the question is about 豆包工作 (Doubao Work, ByteDance/字节的 AI 工作助手/桌面 Agent) or 《豆包工作蓝皮书》 — how to use it, or how to run a real task with it. Covers 安装登录, 界面/任务/项目, 连接器, Skill, 工作伙伴/小队, 手机遥控电脑, API, 定时任务, 多 Agent, 指令模板, Office 三件套, 飞书, 文件整理, 生活事务, 资讯简报, and 5 大场景 31 个真实任务 (个人提效/自媒体/知识管理/电商/金融研究). Chinese triggers: 豆包工作怎么用, 豆包工作蓝皮书, 豆包工作 安装/下载/登录, 豆包工作 连接器/Skill/定时任务/工作小队/多Agent, 豆包工作 做 PPT/Excel/公众号/财报/投研, doubaowork. English triggers: Doubao Work how-to/tutorial, Doubao Work guide/bluebook, Doubao Work connectors/skills/scheduled tasks. Ships the full 50-file text locally, so no network read is needed. Do NOT load for 腾讯 WorkBuddy (use workbuddy-guide instead), for generic 豆包 chat-app questions, or for other 豆包 developer/API products unrelated to 豆包工作."
license: MIT
metadata:
  version: "1.0.0"
  upstream: "AlephAITech/DoubaoWorkGuide"
  upstreamLicense: "MIT"
  upstreamCommit: "a7f87fe4"
  syncedAt: "2026-10-16"
  requires: "正文无依赖；仅 skills/doubaowork-guide/scripts/sync.mjs 需要 Node.js 20+"
---

# 豆包工作蓝皮书 — 本地知识库

上游 <https://github.com/AlephAITech/DoubaoWorkGuide>（MIT）的**完整正文**已同步到本 Skill 的 `references/chapters/`（50 个文件，约 165 KB）。回答豆包工作的问题时**先查本地文件，不要凭记忆编**。

## 0. 核心原则（不可违背）

1. **先路由，再回答**：按下面的路由表读**最相关的 1–2 个文件**再开口。禁止不读文件就描述豆包工作的界面、按钮、菜单或价格。
2. **标注出处**：回答里给出章节标题与文件路径，例如"见《连接器怎么用》`chapters/part1-05.md`"，并附在线链接 `https://doubaowork.homes/#/p/<id>`（见 `references/INDEX.md`）。
3. **时效性声明**：正文整理于 2026 年，产品界面/价格/权限会变。涉及这些内容时加一句"以豆包工作官方渠道为准"。
4. **不编造操作路径**：原文没写的按钮名、菜单项、API 参数，不要补。只写"原文未覆盖，建议在官方渠道确认"。
5. **区分三层**：官方文档 / 本蓝皮书（社区实践） / 案例里的个人实测。案例不是官方保证，引用时说清是哪一层。
6. **中文回答**，除非用户要求英文。

## 1. 路由表（意图 → 读哪个文件）

### 想用起来（使用篇 · 12 篇）

| 用户在问 | 读 |
| --- | --- |
| 这是什么 / 能干什么 / 和普通聊天有什么差别 | `references/chapters/part1-01.md` |
| 下载、安装、登录 | `references/chapters/part1-02.md` |
| 主界面、任务、项目的区别 | `references/chapters/part1-03.md` |
| 第一次跑通一个任务（照着做） | `references/chapters/part1-04.md` |
| 连接器怎么用 | `references/chapters/part1-05.md` |
| Skill 怎么选、怎么用 | `references/chapters/part1-06.md` |
| 工作伙伴 / 工作小队，什么时候直接用新任务 | `references/chapters/part1-07.md` |
| 手机操控电脑端 | `references/chapters/part1-08.md` |
| API 服务和连接器怎么选 | `references/chapters/part1-09.md` |
| 定时任务怎么建才稳定 | `references/chapters/part1-10.md` |
| 多 Agent（工作小队）怎么用 | `references/chapters/part1-11.md` |
| 要现成的指令/提示词模板 | `references/chapters/part1-12.md` |

### 日常小事（入门篇 · 6 篇）

| 用户在问 | 读 |
| --- | --- |
| 一份材料接着做 Word / Excel / PPT | `references/chapters/part2-01.md` |
| 飞书端到端实战（读文档、写回飞书文档） | `references/chapters/part2-02.md` |
| 整理桌面 / 动文件前该注意什么 | `references/chapters/part2-03.md` |
| 出门后用手机接着跑电脑任务 | `references/chapters/part2-04.md` |
| 生活琐事（生活助手） | `references/chapters/part2-05.md` |
| 每天早上自动收到资讯简报 | `references/chapters/part2-06.md` |

### 具体工作场景（场景篇 · 5 类 31 个任务）

**个人提效**（`part3-personal-*`）

| 用户在问 | 读 |
| --- | --- |
| 收件箱 / 邮件里挑出今天必须处理的事 | `part3-personal-01.md` |
| 会议：会前准备到待办落地 | `part3-personal-02.md` |
| Word 校对润色到排版交付 | `part3-personal-03.md` |
| Excel 数据分析 | `part3-personal-04.md` |
| 临时调研到正式报告 | `part3-personal-05.md` |
| 自动总结工作日报 | `part3-personal-06.md` |
| 快速读一本书、蒸馏技能 | `part3-personal-07.md` |
| 做个人网站包装自己 | `part3-personal-08.md` |

**自媒体**（`part3-media-*`）

| 用户在问 | 读 |
| --- | --- |
| 选题：热点、同行、本周写什么 | `part3-media-01.md` |
| 从热点到公众号成稿 | `part3-media-02.md` |
| 一份内容改成多平台版本 | `part3-media-03.md` |
| 长文转口播与分镜 | `part3-media-04.md` |
| 音视频转写、字幕、高光切片 | `part3-media-05.md` |
| 从评论区找下一篇、复盘 | `part3-media-06.md` |
| 个人 IP 做 GEO 体检 | `part3-media-07.md` |
| 公众号爆款转短视频 | `part3-media-08.md` |

**知识管理**（`part3-knowledge-*`）

| 用户在问 | 读 |
| --- | --- |
| 随手收藏到以后能搜到 | `part3-knowledge-01.md` |
| 重复文件、冲突版本看差异 | `part3-knowledge-02.md` |
| 项目结束沉淀文件/决策/交付物 | `part3-knowledge-03.md` |
| 把飞书知识库/老同事经验变成可复用 Skill | `part3-knowledge-04.md` |
| 一句话查企业制度并带出处 | `part3-knowledge-05.md` |
| 把大批提示词/资料重新归类 | `part3-knowledge-06.md` |
| 找出过期知识并找 Owner 确认 | `part3-knowledge-07.md` |

**电商**（`part3-ecommerce-*`）

| 用户在问 | 读 |
| --- | --- |
| 一张产品原图 → 整套主图 | `part3-ecommerce-01.md` |

**金融研究**（`part3-finance-*`）

| 用户在问 | 读 |
| --- | --- |
| 收盘后复盘 → 明天研究清单 | `part3-finance-01.md` |
| 财报：先看增长再看增长质量 | `part3-finance-02.md` |
| 第一次研究一家公司（商业模式 + 八种追问） | `part3-finance-03.md` |
| 筛选到估值（统一口径再比较） | `part3-finance-04.md` |
| 股东、管理层、治理结构 | `part3-finance-05.md` |
| 多空分歧、研报事实审计 | `part3-finance-06.md` |
| 从 K 线图做投研评审会 | `part3-finance-07.md` |

> 上面的 `part3-*.md` 都在 `references/chapters/` 下。

### 其他

| 用户在问 | 读 |
| --- | --- |
| 该按什么顺序读 / 想通读全文 | 本文件第 2 节 + `references/INDEX.md` |
| 全部章节清单（含在线链接、体积） | `references/INDEX.md` |
| 这个蓝皮书/网站本身怎么做出来的 | 上游 README（仓库根目录） |

## 2. 完整通读路线

用户要"完整读完/系统学习"时，按顺序读，**一次一到两篇**，读完一篇把标题和要点复述一句再继续：

1. 使用篇 `part1-01` → `part1-12`：能力边界、安装、界面、首个任务、连接器、Skill、小队、手机、API、定时任务、多 Agent、指令模板。
2. 入门篇 `part2-01` → `part2-06`：Office 三件套、飞书、文件整理、远程任务、生活事务、资讯简报。
3. 场景篇 `part3-index` → 按 `personal` → `media` → `knowledge` → `ecommerce` → `finance` 的顺序读 31 个任务。

通读时不要一次把全部 50 个文件塞进上下文；读一篇、答一篇，需要时再回 `references/INDEX.md` 定位。

## 3. 回答形状

1. **先给可执行的一步**（点哪个入口 / 装哪个 Skill / 复制哪段提示词），再解释。
2. **引用章节标题 + 文件路径**，并给在线链接（`references/INDEX.md` 里有每个任务的 `https://doubaowork.homes/#/p/<id>`）。
3. 原文里的截图/视频是站内路径，已在同步时改写成 `https://doubaowork.homes/media/...`，可以直接把链接给用户。
4. 超过 1 步的操作写成编号列表，每步一个动作。
5. 一次只读 1–2 篇。金融场景的几篇（`part3-finance-04.md` 10 KB、`part3-finance-01.md` 7 KB）只截取相关小节。
6. 原文的提示词都在 ```text 代码块里，用户要模板时整段给出，不要改写。

## 4. 仓库地图

```text
skills/doubaowork-guide/
├─ SKILL.md                      # 本文件：原则 + 路由表 + 通读路线
├─ references/
│  ├─ INDEX.md                   # 50 篇索引（标题 → 文件 + 在线链接）
│  ├─ .source.json               # 同步版本 + 每篇正文的内容哈希
│  └─ chapters/                  # 上游正文，50 个文件
│     ├─ part1-01..12                     # 使用篇
│     ├─ part2-01..06                     # 入门篇
│     ├─ part3-index                      # 场景篇导读
│     ├─ part3-personal-01..08            # 个人提效
│     ├─ part3-media-01..08               # 自媒体
│     ├─ part3-knowledge-01..07           # 知识管理
│     ├─ part3-ecommerce-01               # 电商
│     └─ part3-finance-01..07             # 金融研究
└─ scripts/sync.mjs              # 从上游单个 site-content.json 重新同步（增量、幂等、带重试）
```

## 5. 更新本地正文

上游不是 markdown 树，而是单个 `site/content/site-content.json`（58 个节点，含完整正文）。`sync.mjs` 负责拆章、改写链接、生成 `INDEX.md`：

```bash
node scripts/sync.mjs                 # 增量同步（只写有变化的文件）
node scripts/sync.mjs --check         # 上游有新提交吗
node scripts/sync.mjs --dry           # 只看映射，不写盘
node scripts/sync.mjs --force         # 全部重写
node scripts/sync.mjs --from x.json   # 离线：用本地 site-content.json 生成
GITHUB_TOKEN=xxx node scripts/sync.mjs   # 避免 GitHub API 60 次/小时限流
```

已同步 `commit a7f87fe4`。同步时自动改写：`/media/...` → `https://doubaowork.homes/media/...`、`::video[...]` → 普通链接、`<grid>/<column>/<callout>/<sheet>/<bitable>/<title>` 等站内组件 → 可读 markdown。**不要手改 `references/chapters/`**，会被覆盖；要改就改上游或 `scripts/sync.mjs`。

## 6. 边界

- **不收录** 上游约 700 MB 的图片和视频本体，只保留 doubaowork.homes 链接——打开图片/视频需要联网。
- 上游按 d0 根 → d1 篇 → d2 场景 → d3 任务组织；d0 根、以及只有标题的篇/场景节点不单独留文件，层级信息在 `references/INDEX.md` 里。
- 本 Skill 与 AlephAITech 无关联，非官方。上游 MIT，本 Skill 保留其版权与许可。
- **不要和 `workbuddy-guide` 混淆**：那个是腾讯 WorkBuddy，这个是字节豆包工作，两者是不同的产品。
