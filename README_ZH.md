<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/assets/v-diagram-lockup-dark.svg" />
    <img src="docs/assets/v-diagram-lockup-light.svg" alt="V-Diagram" width="440" height="121" />
  </picture>
</p>
<h3 align="center">把你想理解、规划或分享的事，变成可以互动的可视化作品。</h3>

<p align="center"><img src="docs/assets/v-diagram-readme-hero.png" alt="V-Diagram — interactive diagrams" width="960" /></p>

<p align="center">从一个想法、一个问题或一份计划开始。把它描述给 AI Agent，V-Diagram 就能生成可以探索、修改和分享的交互式 HTML。从旅行行程、知识地图到复杂系统，你都可以继续扩展，做成自己需要的样子。</p>

<p align="center">
  <a href="https://mbnetworku.github.io/V-Diagram/zh/gallery"><strong>交互演示</strong></a> &nbsp;·&nbsp;
  <a href="#start"><strong>开始使用</strong></a> &nbsp;·&nbsp;
  <a href="https://mbnetworku.github.io/V-Diagram/zh/guide"><strong>场景指南</strong></a> &nbsp;·&nbsp;
  <a href="./README.md"><strong>English</strong></a> &nbsp;·&nbsp;
  <a href="./README_JA.md"><strong>日本語</strong></a>
</p>

<p align="center">
  <a href="https://github.com/mbnetworku/V-Diagram/stargazers"><img src="https://img.shields.io/github/stars/mbnetworku/V-Diagram?style=flat-square&amp;color=E5B650&amp;logo=github&amp;label=Stars" alt="GitHub stars" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-22c55e?style=flat-square" alt="Apache License 2.0" /></a>
  <a href="#安装方式"><img src="https://img.shields.io/badge/works_with-Claude_Code_%7C_Codex_%7C_Cursor_%7C_OpenCode-7C3AED?style=flat-square" alt="Works with Claude Code, Codex, Cursor, and OpenCode" /></a>
  <a href="CHANGELOG.md#320--2026-10-18"><img src="https://img.shields.io/badge/version-3.2.0-0891b2?style=flat-square" alt="Stable version 3.2.0" /></a>
</p>

## 看看 V-Diagram 能做什么

<!-- v-diagram-launch-video -->

https://github.com/user-attachments/assets/88cff7dd-bdf3-4b97-950c-37cc079898b1

**一句话，看懂你的项目。** 35 秒演示：探索交互图、查看源码关联、追踪完整路径。[试试可交互示例 ↗](https://mbnetworku.github.io/V-Diagram/zh/gallery)

<a id="start"></a>

### 安装，然后说出你的想法

支持 Cursor、Claude Code、Codex CLI 和 OpenCode；更多接入方式见下方安装选项。

```bash
npx skills add mbnetworku/V-Diagram -g
```

把这句话发给你的 Agent：

```text
用 V-Diagram 画出一个网站的请求流程：浏览器请求 API，
API 优先读取 Redis，缓存未命中时查询 PostgreSQL 并回填缓存。
```

继续说：“添加鉴权步骤”“突出缓存未命中的路径”“切换浅色主题”。

**不需要绑定代码库：**从描述开始即可。也可以让 Agent 阅读仓库，生成有源码依据的架构图。

[按 Agent 选择安装方式](https://mbnetworku.github.io/V-Diagram/zh/start?agent=cursor&type=architecture) · [安装细节与更新检查](#快速开始) · [用 Agent 画图并检查结果](https://mbnetworku.github.io/V-Diagram/zh/agent-diagrams)

## 问一个问题，得到一页讲清楚的答案

不是每个答案都是一张图。让 agent 用一页来回答，V-Diagram 会生成一份 **explainer**：先给结论，再按问题分成几个面板，用表格、步骤、图表、代码和经过校验的图把理由讲清楚。

[![一页式解答：结论在前，步骤和它讲解的流程图左右并排](docs/assets/explainer-p99-zh.png)](https://mbnetworku.github.io/V-Diagram/cases/explainer/p99-tail-latency.html)

- **结论先行。** 先写答案和理由，每个面板只回答一个问题。
- **图和文字一起讲。** 步骤放在它讲解的图旁边，读到哪一步，图上就亮起哪一部分；点任意节点进入完整的交互图。
- **能核对。** 结论标注编号来源；仓库代码固定到具体提交，悬停即可看到原文。
- **好分享。** 一个 HTML 文件，四种样式，浅色深色都有；可导出 PNG、WebP、JPG 长图或打印成 PDF。对任何面板都能追问，生成的追问让 agent 只改这一块。

```text
用 V-Diagram 一页回答：接口 P99 从 80 ms 涨到 600 ms，平均值几乎没变，
可能是什么原因，应该怎么排查？
```

在线示例：[P99 延迟排查](https://mbnetworku.github.io/V-Diagram/cases/explainer/p99-tail-latency.html) · [读 V-Diagram 仓库：finalize 怎么保住旧产物](https://mbnetworku.github.io/V-Diagram/cases/explainer/finalize-delivery.html) · [第一次租房要确认什么](https://mbnetworku.github.io/V-Diagram/cases/explainer/first-rental.html) · [第一次打开 HTTPS 网站（英文）](https://mbnetworku.github.io/V-Diagram/cases/explainer/tls-first-visit.html)

<a id="sponsors"></a>

## 用图把事情讲明白

| 讲清 Agent 如何调用工具 | 跟随一次缓存回源请求 | 看清服务与数据库的关系 |
|---|---|---|
| [![Agent 工作流中 Planner 驱动的全部下游](docs/assets/v-diagram-demo-reach.png)](https://mbnetworku.github.io/V-Diagram/gallery/artifacts/agent-tool-call.workflow.html?theme=dark&present=1#focus=planner&reach=downstream) | [![缓存未命中时从 Web App 到 Postgres 的路径](docs/assets/v-diagram-demo-route.png)](https://mbnetworku.github.io/V-Diagram/gallery/artifacts/cache-miss.sequence.html?theme=dark&present=1#route=web~db) | [![生产架构中后端与数据库角色的真实关系](docs/assets/v-diagram-demo-lens.png)](https://mbnetworku.github.io/V-Diagram/gallery/artifacts/production-deployment.architecture.html?theme=dark&present=1#lens=backend~database) |
| 追踪一个步骤影响到的全部下游。 | 点亮 Web App 到数据库的路径。 | 聚焦后端与数据库之间已定义的连接。 |

[Proof Lab](https://mbnetworku.github.io/V-Diagram/zh/gallery) 收录全部 11 个仓库内场景、JSON 源和校验回执。

### 看懂一个真实代码仓库

<sub>CODE → DIAGRAM · 有源码依据的系统地图</sub>

[![根据公开仓库 mco-org/mco 生成的 MCO 运行时架构图](docs/assets/mco-runtime-share-card.png)](https://mbnetworku.github.io/V-Diagram/cases/mco-runtime.architecture.html?theme=dark&present=1)

V-Diagram 追踪 [`mco-org/mco`](https://github.com/mco-org/mco) 的 `9f1a1cf` 版本并生成这张校验地图。**[打开成品 ↗](https://mbnetworku.github.io/V-Diagram/cases/mco-runtime.architecture.html?theme=dark&present=1)** · [追踪下游 ↗](https://mbnetworku.github.io/V-Diagram/cases/mco-runtime.architecture.html?theme=dark#focus=router&reach=downstream) · [Typed Source](docs/cases/mco-runtime.architecture.json)

### 易于扩展，社区还在不断创造新用法

<sub>COMMUNITY STORIES · 社区用户提供的部分案例</sub>

**生成之后，还可以继续创造。** V-Diagram 开源，成品是独立 HTML，你可以让 Agent 在此基础上继续修改、接入链接、扩展交互，做出适合自己场景的作品。社区已经把它用到了团队协作、旅行规划、法律核验、合同审查和故障复盘；下面只是其中一部分。

一位用户从纸上手绘的多智能体架构开始，让 Agent 生成交互图，再通过对话加入 Kimi 执行池。另一些用户让 Agent 阅读项目，把生成的架构图带进飞书或钉钉，继续和团队讨论。

还有用户把上海 CityWalk 攻略整理成了四天行程图：按天切换路线，点击节点查看地点信息，并跳转高德地图、小红书和大众点评。作者还扩展了到达打卡和停留记录，让一张路线图变成旅途中可以实际使用的小工具。这些扩展由社区作者为该作品添加。

**[▶ 点击体验上海 CityWalk 交互版](https://mbnetworku.github.io/V-Diagram/cases/community/shanghai-citywalk.html)**

[![社区用户创作的上海 CityWalk 四天行程图](docs/assets/community/shanghai-citywalk.png)](https://mbnetworku.github.io/V-Diagram/cases/community/shanghai-citywalk.html)

**[▶ 点击体验交互版](https://mbnetworku.github.io/V-Diagram/cases/community/shanghai-citywalk.html)** · 切换 D1–D4 行程，点击地点查看详情。

<sub>社区作品 · 上海 CityWalk · 四天行程与地点链接</sub>

### 下载下来，亲手点一点

成品是一个独立的 HTML 文件。下载后用浏览器打开，即可使用该作品包含的节点详情和路径探索，无需安装 V-Diagram。把 HTML 文件发给别人，交互也会一起保留；外部网站和地图链接需要网络。

**[打开上海 CityWalk 交互版 ↗](https://mbnetworku.github.io/V-Diagram/cases/community/shanghai-citywalk.html)** · **[下载 HTML ↓](https://github.com/mbnetworku/V-Diagram/raw/refs/heads/main/docs/cases/community/shanghai-citywalk.html)**

<sub>试试切换 D1–D4、点击地点卡片，或打开地图链接。行程中的时间和地点信息为作者创作时的记录。</sub>

## 预览

<details>
<summary>深浅主题、导出菜单与分享卡片</summary>

同一张图，两套主题，一键切换：

| 深色 | 浅色 |
|---|---|
| ![深色主题](docs/assets/v-diagram-dark.png) | ![浅色主题](docs/assets/v-diagram-light.png) |

Export 菜单支持复制 PNG，并下载静态或动态格式：

![导出菜单](docs/assets/v-diagram-menu.png)

路径解析后，**Export → Route Share Card** 会把真实路径下载为 1200×630 PNG，并保留完整拓扑上下文。

![Route Share Card：突出 Users 到 API Server 的精确路径，同时保留完整架构作为上下文](docs/assets/v-diagram-route-share-card.png)

完成 authored `Upstream` 或 `Downstream` reach 后，**Export → Reach Share Card** 会捕获这次阅读结果，但不冒充运行时影响分析。

![MCO downstream Reach Share Card：展示从 Command Router 出发的已创作关系](docs/assets/mco-runtime-reach-share-card.png)

在本地打开 [`examples/web-app.html`](examples/web-app.html)，即可体验完整 Viewer。

</details>

## 快速开始

**当前稳定版本：** `v3.2.0`。详见[版本历史](CHANGELOG.md#320--2026-10-18)。

### 1. 安装

```bash
npx skills add mbnetworku/V-Diagram -g
```

<details>
<summary>更多安装方式与更新检查说明</summary>

显式、非交互地安装到 Cursor：

```bash
npx -y skills add mbnetworku/V-Diagram --skill v-diagram --agent cursor --global --copy --yes
```

如果只想临时体验：

```bash
npx skills use mbnetworku/V-Diagram@v-diagram --agent codex
```


安装后的 Skill 包含一个低频、失败静默的发布检查，它最多只显示可选更新提醒，绝不会自行下载或安装更新。一次成功检查后，下次网络请求通常约在 24 小时（±20%）后发出；检查失败后，活跃使用可能在首次 6 小时、后续 24 小时退避到期时重试。请求只访问 `https://mbnetworku.github.io/V-Diagram/skill-updates/v-diagram/stable.json`。服务端会自然获得 IP、请求时间和常规 HTTP 元数据；检查器不会发送本地版本、Agent、项目数据、用户输入、账户/设备标识，也不会保存或回传 ETag。是否更新以及何时更新始终由你决定。如需完全关闭检查（包括网络请求和提醒状态写入），请在 Agent 环境中设置 `ARCHIFY_UPDATE_CHECK_DISABLED=1`。

</details>

### 获取更新

- **订阅新版本：** 在本 GitHub 仓库顶部选择 **Watch → Custom → Releases**，订阅版本发布通知。点 Star 不会自动订阅更新。
- **查看更新内容：** [版本说明](https://github.com/mbnetworku/V-Diagram/releases)。
- **使用 RSS 阅读器：** [订阅版本更新源](https://github.com/mbnetworku/V-Diagram/releases.atom)。

带有更新检查器的安装版本，也会在交付图时检查新的稳定版，并可显示提醒。不带检查器的旧安装需要先手动更新，才能获得这项功能。是否升级、何时升级由你决定，V-Diagram 不会自动安装更新。

### 2. 直接从描述开始——不需要代码库

```text
用 V-Diagram 画出：Browser -> API -> Redis 缓存 -> PostgreSQL 回源。
```

需要源码证据时，打开仓库后改用：

```text
分析这个仓库，然后使用 v-diagram 生成一张高层运行时架构图。
只保留 8–12 个核心组件，突出一条主要路径，并标出外部依赖与信任边界。
辅助信息放进说明卡片，不要继续增加连线。
```

### 3. 在对话中细调

继续说：`增加 Redis`、`把鉴权移到左侧`、`突出回滚路径`。V-Diagram 会保留 Typed Source，只修改相关部分。

## 选择合适的图表

<details>
<summary>十种图表、架构差异对比与示例</summary>


| 类型 | 最适合 | Prompt 中应包含 |
|---|---|---|
| **Architecture** | 组件、服务、存储和系统边界 | 范围、核心组件、主要路径 |
| **Workflow** | CI/CD、审批、工具调用、Runbook | 参与者、顺序、分支、异常 |
| **Sequence** | API 调用、缓存回源、鉴权、异步链路 | 调用方、被调用方、返回、时序 |
| **Data Flow** | 数据管线、血缘、PII、下游消费者 | 来源、转换、存储、边界 |
| **Lifecycle** | 状态、重试、等待、终态 | 状态、事件、重试与取消路径 |
| **ERD** | 数据库结构：表、字段、键、基数关系 | 表、每个字段及类型、主键/外键/唯一键、关系基数 |
| **Class** | 类、接口、关键成员与类型关系 | 类型、关键成员、继承与接口实现、组合与依赖 |
| **Tree** | 单一父级的层级结构：仓库、模块、能力拆解 | 根节点、层级、各分支包含的内容 |
| **Timeline** | 何时发生了什么：故障复盘、发布历史 | 带时区的时间点、事件、来源泳道，以及时间是真实观测还是示意 |
| **Waterfall** | 一次请求或 Agent 运行的耗时分布 | Span、开始时间与时长、嵌套关系，以及耗时是实测还是示意 |

做生产部署评审时，Architecture 可以按需启用 `deployment-ownership`
工程画像：负责人、单一区域归属、数据库私有边界或边界穿越机制缺失时会直接阻断。
它不会被静默开启，只校验作者写入的事实，不代表线上基础设施已经核验。可查看
[通过校验的部署证明](https://mbnetworku.github.io/V-Diagram/zh/gallery#proof-deployment-ownership)。

做设计或 PR 评审时，Architecture Delta 生成已校验的 Before / Delta / After 和机器回执。精确选择任一作者变更，或播放一次有限 Review；全程只读，不推断影响、风险或合并安全。

`node v-diagram/bin/v-diagram.mjs compare architecture base.json head.json architecture-delta.html --json`

[![Architecture Delta：展示作者明确写出的新增、删除、变化和移动](docs/assets/architecture-delta-proof.jpg)](examples/checkout-platform-delta.html)

不知道选哪一种？打开[交互式场景指南](https://mbnetworku.github.io/V-Diagram/zh/guide)，或直接询问零依赖 CLI：

```bash
node v-diagram/bin/v-diagram.mjs guide "展示带 Redis 缓存未命中的 API 请求"
node v-diagram/bin/v-diagram.mjs guide "梳理 Kafka Topic、消费者组、重放和死信队列" --json
```

Workflow 用泳道保持主路径清晰：

![Workflow 示例](docs/assets/v-diagram-workflow.png)

Sequence 解释一次交互随时间如何推进：

![Sequence 示例](docs/assets/v-diagram-sequence.png)

Data Flow 突出数据移动和敏感边界：

![Data Flow 示例](docs/assets/v-diagram-dataflow.png)

Lifecycle 区分正常进展、等待、重试和终态：

![Lifecycle 示例](docs/assets/v-diagram-lifecycle.png)

3.1 新增 ERD、Class、Tree、Timeline 和 Waterfall。

ERD 把表、每个字段与键，以及关系基数放在一起：

![ERD 示例：订单管理库，customer、order、payment、inventory、product 和 order_item 表按业务域分组](docs/assets/v-diagram-erd.png)

Class 展示接口契约、关键成员，以及哪些类型依赖或实现它们：

![Class 示例：OrderService 依赖 PaymentGateway 接口，由银行卡和钱包网关实现](docs/assets/v-diagram-class.png)

Tree 展示单一父级的包含关系，例如能力拆解：

![Tree 示例：支付平台拆解为订单、支付和运营能力](docs/assets/v-diagram-tree.png)

Timeline 把事件放在同一条按比例的时间轴上，每个来源一条泳道：

![Timeline 示例：一次示意性的支付故障，发布、监控和响应事件位于同一时间轴](docs/assets/v-diagram-timeline.png)

Waterfall 展示嵌套、重叠的 Span 中时间花在了哪里：

![Waterfall 示例：一次结账请求的示意耗时，库存查询与折扣计算并发执行](docs/assets/v-diagram-waterfall.png)

打开这些示例：[`ERD`](https://mbnetworku.github.io/V-Diagram/gallery/artifacts/orders.erd.html) · [`Class`](examples/class-payments-rendered.html) · [`Tree`](examples/tree-payment-platform-rendered.html) · [`Timeline`](examples/timeline-payment-incident-rendered.html) · [`Waterfall`](examples/waterfall-checkout-request-rendered.html)。其中 Timeline 和 Waterfall 示例使用示意数据；只有来自日志或链路追踪的时间和耗时，才能当作真实数据。

Architecture 示例：[`Web App`](examples/web-app.html) · [`V-Diagram Pipeline`](examples/v-diagram-repo.html) · [`Grid 布局`](examples/v-diagram-repo-grid.html) · [`桌面 Agent`](examples/maka-architecture.html)

</details>

## 为什么用 V-Diagram

| 读懂结构 | 边看边讲 |
|---|---|
| 从代码或描述出发，整理关键组件、流程和关系。 | 点击节点、追踪路径、把任意视图分享成链接。 |
| **易于扩展** | **方便交付** |
| 保留可编辑源文件，也可基于开源代码和 HTML 成品扩展自己的交互与用途。 | 分享独立 HTML，或导出图片、视频与分享卡片。 |

<details>
<summary>这些体验背后的工程能力</summary>


- **用布局判断代替通用自动布局** —— Agent 根据故事选择层级、留白、线路和强调关系；共享的自动端点会确定性展开，不再让多支箭头堆在同一个中点。
- **Typed JSON IR** —— 每种 Renderer 模式都有 Schema 和可复现的源文件。
- **原子交付前校验** —— Schema、布局、HTML/SVG、线路和标签到其他路径的净空检查必须全部通过，Showcase 成品才会替换上一份可信结果。
- **失败也有结构化修复回执** —— `validate --json` 和 `deliver --json` 会返回稳定规则码、准确对象、测量证据和真正支持的修复旋钮，不再让 Agent 从 Node 堆栈或自由文本里猜。
- **保留最后好图的实时预览** —— 可选桌面循环只监听一个 JSON；只有最新候选通过全部门禁才刷新，半写入或无效保存时继续显示上一份验证成品。
- **交互不编造拓扑** —— 聚焦、上下游可达范围、精确路径、角色对比和故事都复用作者定义的节点与关系，也不把图上可达误报成真实运行时影响。
- **只在需要时附源码证据** —— 有证据的 Architecture 节点会显示 `SRC n`，并可打开由 Git 校验、固定到公开 commit 的文件与行号；普通成品不携带源码信息。
- **结果默认便携** —— 一个 HTML 文件即可分享；导出永远是完整原图，不携带临时 Viewer 状态。

V-Diagram 不是通用绘图编辑器，也不是 Mermaid 主题；它负责把技术意图变成可交流的成品。

</details>

## 工作原理

<details>
<summary>生成、校验、预览与交付的技术细节</summary>

| 步骤 | 发生什么 |
|---|---|
| **生成** | Agent 根据描述创建 Typed JSON IR。 |
| **校验** | 内置 Validator 和布局规则检查源文件；失败时用机器可读 JSON 指出准确的局部修复。 |
| **预览（可选）** | 仅 loopback 的桌面会话监听一个源文件，只刷新验证版本；失败时保留最后好图。 |
| **交付** | 在目标同目录生成并检查候选；只有通过门禁的结果才原子替换目标文件，随后可选用 `--open` 打开这个确切成品。 |
| **迭代** | Agent 修改源文件，不干扰无关结构。 |

仓库常用命令：

```bash
cd v-diagram
node bin/v-diagram.mjs doctor
node bin/v-diagram.mjs demo /tmp/v-diagram-demo
node bin/v-diagram.mjs guide "展示 CI/CD 检查、审批、部署和回滚"
node bin/v-diagram.mjs validate workflow examples/agent-tool-call.workflow.json --quality showcase --json
node bin/v-diagram.mjs preview workflow examples/agent-tool-call.workflow.json /tmp/workflow.html --quality showcase
node bin/v-diagram.mjs deliver workflow examples/agent-tool-call.workflow.json /tmp/workflow.html --quality showcase --open --json
```

`preview` 是显式启用的桌面创作模式，不是默认后台服务：它只在随机端口监听 `127.0.0.1`，只观察指定 JSON，失败时保留上一份验证输出，并通过 Ctrl-C 停止。测试或准备手动打开打印出的本地 URL 时可加 `--no-open`。生成的 HTML 不会携带 Preview Runtime。

`deliver --open` 适合一次性的本地交互交付。它默认关闭，并且只在验证成品原子提交后执行；系统无法打开时，交付仍保持成功，JSON 只写 stdout，stderr 会给出可手动打开的绝对路径。

失败时，`validate --json` 和 `deliver --json` 仍然只输出一个 JSON 对象。读取 `diagnostics[]`，只修改其中 `subject` 指向的对象，并使用 `supportedFixes` 列出的修复方式；不要整图重写，也不要突破 Skill 最多两轮的聚焦修复上限。确定性诊断仍不等于视觉复核。

动态和演示样式需要显式选择：

```json
{
  "meta": {
    "locale": "zh-CN",
    "animation": "trace",
    "visual_preset": "signal-flow"
  }
}
```

不设置 `animation` 时结果完全静态；`classic` 始终是默认视觉预设。设计评审、发布说明和技术文档可以显式选择 `editorial`，获得暖纸张与深墨色的编辑风格，同时保持几何完全不变。将 `meta.locale` 设为任意合法语言标签，可选择 `<html lang>`、默认图例、无障碍文案和所有固定 Viewer UI。`en`、`zh-CN`、`zh-TW`、`es`、`ko` 与 `ar` 已内置，只需设置 `meta.locale`；`meta.translations`（规范消息键到译文字符串的映射）可逐键覆盖，其余文案保持所选语言。其他语言需在该字段中提供完整目录（参见 `v-diagram/examples/locales/`），否则渲染器回退为英文并在 stderr 中说明。作者编写的标题、节点、关系和卡片不会被机器翻译。未带该字段的旧文件仍然有效，并默认使用英文。对于既未内置也未提供 `meta.translations` 的创作语言，应省略 `meta.locale`、保持 authored content 使用用户要求的语言，并主动告知用户固定 Viewer UI 与 `<html lang>` 回退为英文，因此该成品不属于完整本地化。

</details>

## 探索与分享

| 操作 | 控制方式 |
|---|---|
| 打开事实型 Diagram Guide | <kbd>?</kbd> |
| 查找并聚焦语义节点 | <kbd>/</kbd> |
| 追踪作者定义的上游 / 下游可达范围 | 聚焦节点 → `Upstream` / `Downstream` |
| 探查有向路径并逐站检查 | <kbd>R</kbd> 或“路径” |
| 对比一种或两种语义角色 | <kbd>L</kbd> 或“透镜” |
| 打开实时全局雷达 | <kbd>M</kbd> 或“地图” |
| 进入 Presentation Stage | <kbd>F</kbd> |
| 选择视觉风格（<kbd>S</kbd> 循环）/ 切换主题 / 打开 Export | <kbd>S</kbd> / <kbd>T</kbd> / <kbd>E</kbd> |
| 缩放或复位 | <kbd>+</kbd> / <kbd>-</kbd> / <kbd>0</kbd> |

稳定链接可以恢复 `#focus=<id>`、`#focus=<id>&reach=upstream|downstream`、`#relation=<id>`、`#route=<source>~<target>` 和 `#lens=<kind>~<kind>`。动态模式持续播放连线流动，直到读者暂停；语义预览仍有限运行。动效遵守 `prefers-reduced-motion`，并且不会进入标准导出。

完整生成与 Viewer 契约请查看 [`v-diagram/SKILL.md`](v-diagram/SKILL.md)。

## 安装方式

| 使用位置 | 安装位置或方法 | 能力 |
|---|---|---|
| **Claude Code** | `~/.claude/skills/` 或 `.claude/skills/` | 完整 Renderer + Validation 工作流 |
| **Codex CLI** | `~/.agents/skills/` 或 `.agents/skills/` | 完整 Renderer + Validation 工作流 |
| **opencode** | `~/.config/opencode/skills/`、`.opencode/skills/` 或 `.agents/skills/` | 完整 Renderer + Validation 工作流 |
| **Claude.ai** | Settings → Capabilities → Skills 中上传 `v-diagram.zip` | 取决于沙箱是否提供 Node.js |
| **Project Knowledge** | 把 `v-diagram.zip` 上传到项目 | Prompt 驱动的 Architecture Fallback |

## 参考与边界

- [Schema 说明](v-diagram/schemas/README.md)
- [Skill 与 Renderer 契约](v-diagram/SKILL.md)
- [示例](v-diagram/examples/)
- [Agent 编图手册](docs/authoring-cookbook.zh-CN.md) · [English](docs/authoring-cookbook.md)
- [版本历史](CHANGELOG.md)
- [自动生成的 Proof Lab](https://mbnetworku.github.io/V-Diagram/zh/gallery)

自动 Mermaid Parser、通用自动布局、托管分享服务和 WYSIWYG 编辑器目前都不在产品范围内。

## License

[Apache-2.0](LICENSE) —— 可以自由使用、修改和分发。

历史 MIT 授权继续有效，见 [NOTICE](NOTICE) 和 [LICENSE-MIT](LICENSE-MIT)。第三方组件保留各自许可；软件许可不改变用户原创内容的权属，也不授予一般性的 V-Diagram 商标使用权。

## 参与贡献

基于 V-Diagram 做了独立包？[提交到社区目录](community/README.md#中文摘要)。详细步骤和 JSON 示例默认折叠，按需展开即可。

欢迎提交 Issue、Pull Request 和真实场景图。请先阅读[贡献指南](CONTRIBUTING.md)；遇到问题时使用可复现 Bug 表单，也可以通过[社区 Showcase 表单](https://github.com/mbnetworku/V-Diagram/issues/new?template=showcase.yml)提交已验证成品。

较大的功能或行为调整请先通过 Issue 对齐价值、兼容边界和非目标，再基于最新 `main` 开发。一个 PR 尽量只解决一个问题；核心代码和回归测试先行，生成物最后统一重建。V-Diagram 坚持 Agent-first，优先完善稳定的机器可读诊断和现有权威合同，避免新增容易与 CLI 漂移的重复说明。&nbsp;·&nbsp;[LINUX&nbsp;DO](https://linux.do)

## 致谢与声明

<sub>V-Diagram 是 tt-a1i 开发的 [Archify](https://github.com/tt-a1i/archify) 的修改版本，依据 [Apache License 2.0](LICENSE) 使用。原版权声明保留在 [NOTICE](NOTICE) 和 [LICENSE-MIT](LICENSE-MIT) 中。V-Diagram 独立维护，与 Archify 作者无关联，也未获其背书。</sub>
