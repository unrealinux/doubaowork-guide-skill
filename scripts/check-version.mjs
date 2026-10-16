// 发布前自检：版本一致 + frontmatter 合规 + 路由表指向的文件都存在。不联网。
// 用法: node scripts/check-version.mjs
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SKILL_NAME = "doubaowork-guide";
const SKILL_DIR = join(ROOT, "skills", SKILL_NAME);
const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
const skill = readFileSync(join(SKILL_DIR, "SKILL.md"), "utf8");

const fail = [];
const ok = [];

const m = skill.match(/^---\n([\s\S]*?)\n---/);
if (!m) {
  console.error("FAIL  SKILL.md 缺少 frontmatter");
  process.exit(1);
}
const fm = m[1];

const field = (name) => {
  const re = new RegExp(`^${name}:\\s*(?:"([^"]*)"|'([^']*)'|(.*))$`, "m");
  const hit = fm.match(re);
  return hit ? (hit[1] ?? hit[2] ?? hit[3] ?? "").trim() : null;
};

// 1. 版本一致
const skillVersion = field("version") ?? fm.match(/^\s+version:\s*"?([^"\n]+)"?$/m)?.[1]?.trim();
if (!skillVersion) fail.push("SKILL.md metadata.version 缺失");
else if (skillVersion !== pkg.version) {
  fail.push(`版本不一致: package.json=${pkg.version} vs SKILL.md=${skillVersion}`);
} else ok.push(`版本一致: ${pkg.version}`);

// 2. frontmatter 必填与长度（Agent Skills 规范：name/description 必填，description ≤ 1024 字符）
const name = field("name");
const description = field("description");
if (name !== SKILL_NAME) fail.push(`SKILL.md name 应为 ${SKILL_NAME}，实际 ${name}`);
else ok.push(`name 合规: ${name}`);
if (!description) fail.push("SKILL.md description 缺失");
else {
  const len = [...description].length;
  if (len > 1024) fail.push(`description 过长: ${len} > 1024 字符`);
  else ok.push(`description 长度合规: ${len}/1024`);
}

// 3. 非标准字段（pi 只读 name/description；其他 loader 会忽略，但别再加回来）
const allowed = new Set(["name", "description", "license", "metadata"]);
const topLevel = [...fm.matchAll(/^([a-zA-Z][a-zA-Z0-9-]*):/gm)].map((x) => x[1]);
for (const key of topLevel) {
  if (!allowed.has(key)) fail.push(`frontmatter 出现非标准字段: ${key}（并进 description 或删掉）`);
}
if (topLevel.every((k) => allowed.has(k))) ok.push(`frontmatter 字段合规: ${topLevel.join(", ")}`);

// 4. npm 包必备
for (const key of ["name", "version", "license", "description"]) {
  if (!pkg[key]) fail.push(`package.json 缺少 ${key}`);
}
if (pkg.keywords?.includes("pi-package")) ok.push("package.json 带 pi-package 关键词");
else fail.push("package.json 缺少 pi-package 关键词（pi.dev 画廊不会收录）");

// 5. SKILL.md 路由表里的每个文件都真实存在（路由表是手写的，最容易在这里写错）
const CH_DIR = join(SKILL_DIR, "references", "chapters");
const referenced = [...new Set(skill.match(/part[123]-[a-z0-9-]*\.md/g) || [])];
const missing = referenced.filter((f) => !existsSync(join(CH_DIR, f)));
const onDisk = readdirSync(CH_DIR);
if (missing.length) fail.push(`SKILL.md 引用了不存在的章节: ${missing.join(", ")}`);
else ok.push(`路由表文件齐全: ${referenced.length} 个引用全部存在`);
const unmentioned = onDisk.filter((f) => !skill.includes(f) && !skill.includes(f.replace(/\.md$/, "")));
if (unmentioned.length) fail.push(`有章节没进路由表: ${unmentioned.join(", ")}`);
else ok.push(`所有章节都在路由表里: ${onDisk.length} 篇`);

// 6. 正文非空
for (const f of onDisk) {
  if (readFileSync(join(CH_DIR, f), "utf8").length < 200) fail.push(`章节内容过短: ${f}`);
}

for (const line of ok) console.log(`ok    ${line}`);
for (const line of fail) console.error(`FAIL  ${line}`);
process.exit(fail.length ? 1 : 0);
