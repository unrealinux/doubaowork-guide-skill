# doubaowork-guide

把 [AlephAITech/DoubaoWorkGuide](https://github.com/AlephAITech/DoubaoWorkGuide)（《豆包工作蓝皮书》，MIT）**完整本地化**的 Agent Skill。

- 使用篇 12 篇 + 入门篇 6 篇 + 场景篇 31 个任务 → `skills/doubaowork-guide/references/chapters/`（50 个文件，约 165 KB）
- `SKILL.md` 只做**路由**（意图 → 读哪个文件）+ 一条**通读路线**，正文按需加载
- `scripts/sync.mjs` 从上游的单个 `site-content.json` 增量拆章同步，幂等、带重试

## 效果示例

它不靠记忆回答，而是先把问题路由到原文，再带标题引用：

| 你问 | 它会去读 | 回答里会有什么 |
| --- | --- | --- |
| “豆包工作的连接器怎么用？” | `chapters/part1-05.md` | 先给能验收的小任务做法，再引原文步骤 |
| “豆包工作能不能帮我写公众号？” | `chapters/part3-media-02.md` | 四步工作流（事实包 → 长文 → 标题 → 封面）和提示词 |
| “怎么让豆包每天早上给我一份资讯简报？” | `chapters/part2-06.md` | 定时任务 + 失败处理，标章节名与在线链接 |

界面、价格、权限这类会变的内容，回答会加一句“以豆包工作官方渠道为准”，并给出 `doubaowork.homes` 原文链接。

## 安装

**1. pi 包（推荐）**

```bash
pi install git:github.com/unrealinux/doubaowork-guide-skill
pi list
```

**2. 直接放进 Agent Skills 目录**

```bash
git clone https://github.com/unrealinux/doubaowork-guide-skill ~/.agents/skills/doubaowork-guide-skill
```

把 `skills/doubaowork-guide` 整个目录复制到你的 skills 目录也可以，正文是纯 markdown，无运行时依赖。

## 目录结构

```text
package.json
scripts/
├─ check-version.mjs              # 发布前自检（版本/frontmatter/路由表）
└─ build-zip.mjs                  # 生成分发 zip
packaging/README.md               # 包内说明书模板
CHANGELOG.md
skills/doubaowork-guide/
├─ SKILL.md                       # 原则 + 路由表 + 通读路线
├─ references/
│  ├─ INDEX.md                    # 50 篇索引（标题 → 文件 + 在线链接）
│  ├─ .source.json                # 同步版本 + 内容哈希
│  └─ chapters/                   # 上游正文
└─ scripts/sync.mjs               # 重新同步上游
```

## 更新正文

```bash
npm run sync:check   # 只看上游有没有新提交
npm run sync         # 增量同步
node skills/doubaowork-guide/scripts/sync.mjs --dry           # 只看映射
node skills/doubaowork-guide/scripts/sync.mjs --from x.json   # 离线生成
```

需要 Node.js 20+；只用内置模块，无第三方依赖。`references/chapters/` 是生成物，不要手改，会被覆盖。

## 发布

```bash
npm run check     # 自检：版本一致、frontmatter 合规、路由表文件都在
npm run release   # 自检 + 打两个 zip（手动安装包 / 平台上传平铺包）
git tag v1.0.0 && git push --tags
npm publish --access public
```

`dist/` 里两个产物：`doubaowork-guide-skill-<版本>.zip`（解压得 `doubaowork-guide/`，给手动安装）和 `-skillpay.zip`（`SKILL.md` 在 zip 根，给平台上传）。

## 许可

上游正文 MIT，版权与许可见 [LICENSE](LICENSE) 与 [NOTICE.md](NOTICE.md)。本 Skill 与 AlephAITech、与豆包工作官方均无关联，非官方项目。
