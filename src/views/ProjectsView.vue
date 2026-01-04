<script setup>
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectDetailDialog from '@/components/ProjectDetailDialog.vue' // 我们将创建这个新组件
import backIcon from '@/components/icons/back.vue'
import bIcon from '@/assets/image/icon/svg/b.svg'
import launcherIcon from '@/assets/image/icon/svg/launcher.svg'
import yt_dlp_gui_Icon from '@/assets/image/icon/dlp.ico'
import SteamAccountManager_Icon from '@/assets/image/icon/SteamAccountManager.ico'
// 1. 完整项目数据
const projectList = ref([
  {
    id: 'personal-website',
    icon: 'https://cdn.jsdelivr.net/gh/noob-xiaoyu/image@main/hoshino.jpg',
    title: '个人网站',
    shortDescription: '就是本网站，使用 Vue 3 + Element Plus 构建。',
    longDescription:
      '这是一个完全响应式的个人主页和作品集网站。前端采用 Vue 3、Vite 和 Element Plus 构建，实现了动态视频背景、黑白主题切换、流畅的路由过渡动画等功能。所有项目数据都通过模块化的方式进行管理，易于扩展和维护。',
    images: [],
    techStack: ['Vue 3', 'Vite', 'Element Plus', 'Vue Router'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Noob_Xiaoyu-Web',
      live: '/',
    },
  },
  {
    id: 'Imgui-menu',
    icon: 'https://raw.githubusercontent.com/noob-xiaoyu/Noob_Xiaoyu-Web/refs/heads/main/src/assets/image/icon/imgui.png',
    title: 'Imgui-menu',
    shortDescription:
      '这是一款基于 ImGui 的现代化悬浮菜单框架，它集成了辉光、鼠标拖尾等丰富视觉特效和计时器等实用工具，并提供强大的主题与配置系统。',
    longDescription:
      '这是什么?这是一个现代化的、半透明的悬浮菜单。它的主要特点是: 高度可定制: 你可以随心所欲地改变它的外观，从颜色主题到每个按钮的圆角大小，都可以调整并保存。 核心功能一览 1. 一键显示/隐藏 默认情况下，按下键盘上的 `Insert` 键，就可以打开或关闭这个菜单。这个快捷键也可以在设置里更换成你喜欢的任何按键。 2. 丰富的视觉效果 菜单辉光: 让整个菜单窗口的边缘散发出柔和的光晕，颜色和光晕的厚度都可以自定义。 鼠标拖尾: 当你在菜单上移动鼠标时，会留下一道平滑、多彩的轨迹，科技感十足。 背景模糊: (此功能为占位实现) 菜单出现时，其背后的内容会变得模糊，让你更专注于菜单本身。 3. 强大的主题系统 内置主题: 程序内置了多种精心设计的主题，比如优雅的“樱花粉”亮色主题和酷炫的“霓虹粉”暗色主题，一键切换。 实时样式编辑器: 你可以打开一个“样式编辑器”窗口，像 Photoshop 一样实时调整菜单的每一个视觉细节，包括颜色、边框、圆角、间距等。 保存和加载: 当你调整出一个满意的外观后，可以将其保存为一个主题文件。之后，你可以随时加载这个文件，或者分享给朋友。 4. 实用的内置工具 计时器: 菜单里集成了一个精确到毫秒的秒表。你可以用它来计时、测试任务耗时等，非常方便。 帧率显示 (FPS): 在菜单的左下角会实时显示当前的运行帧率，让你了解程序的性能表现。 5. 配置管理系统 你可以在菜单中对各种功能（例如视觉效果、计时器状态等）进行设置。这个系统允许你将当前所有的设置保存为一个独立的配置文件。你可以创建多个不同的配置文件，比如“游戏配置”、“工作配置”等，并根据需要随时加载它们，无需每次都重新调整。 如何使用这个菜单？ 1. 启动: 运行程序后，你可能看不到任何东西，因为它是一个透明的覆盖层。 2. 打开菜单: 按下 `Insert` 键，菜单就会华丽地出现在屏幕上。 3. 浏览: 菜单左侧是导航栏，上面有 "Visuals"（视觉效果）、"Time"（时间工具）、"Settings"（设置）等选项卡。点击不同的选项卡，右侧的内容区域就会切换到对应的功能页面。 4. 进行设置: 在 "Visuals" 页面，你可以找到开关来启用/禁用“菜单辉光”和“鼠标拖尾”，并调整它们的颜色、大小等参数。在 "Time" 页面，你可以控制计时器的开始、暂停和重置。在 "Settings" 页面，你可以切换整体主题、锁定菜单大小（防止误触改变）、修改呼出菜单的快捷键，以及安全退出程序。在 "Configs" 页面，你可以管理你的个人设置文件。 5. 关闭菜单: 再次按下 `Insert` 键，菜单就会消失，但程序仍在后台运行，等待下一次召唤。 6. 完全退出: 如果想彻底关闭程序，请进入 "Settings" 页面，点击“退出”按钮。 总而言之，这不仅仅是一个简单的设置窗口，更是一个集美观、实用和高度个性化于一体的强大UI框架，为你提供了流畅、现代的交互体验。两个字没用',
    images: [],
    techStack: ['C++', 'ImGui'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Imgui-menu',
    },
  },
  {
    id: 'launcher for napcat&yunzai',
    icon: launcherIcon,
    title: 'launcher for napcat&yunzai',
    shortDescription: '这是一个在 Windows 电脑上，让你能一键启动和运行 QQ 机器人的“傻瓜式”工具。',
    longDescription:
      '这是一个在 Windows 电脑上，让你能一键启动和运行 QQ 机器人的“傻瓜式”工具。 核心组件解析： 1. Yunzai-Bot (云崽 Bot): 这是一个非常受欢迎的、开源的 QQ 聊天机器人框架，最初主要为游戏《原神》的玩家社群设计。 功能强大且高度可扩展，用户可以通过安装各种插件来增加新功能，如游戏数据查询、群管理、娱乐互动等。 它本身支持跨平台运行，但在 Windows 上进行环境配置对新手来说可能较为复杂。 2. NapCatQQ (猫猫) 这是一个现代化的、基于 NTQQ 的机器人协议端实现。简单来说，它负责让机器人能够与 QQ 服务器进行通信，收发消息。 它的特点是内存占用低、开箱即用，并且支持多种部署方式。 它遵循 OneBot 协议标准，这是一个广泛应用的机器人开放标准，使得 Yunzai-Bot 等多种框架可以通过它来接入 QQ。 核心组件解析： 一键启动与集成：它将 NapCatQQ 和 Yunzai-Bot 的启动过程集成到一个终端界面中，用户无需手动在命令行中执行复杂的指令。 简化配置：对于不熟悉 Node.js、Git 等环境配置的 Windows 用户，这个启动器能够自动化处理许多繁琐的步骤，降低了使用门槛。 方便管理：提供了一个可视化的界面来管理机器人的运行状态，如启动、停止、重启等。 专为 Windows 优化：解决了在 Windows 环境下部署 Yunzai-Bot 时可能遇到的一些常见问题，让整个体验更加顺畅。 总结来说，如果你是一名 Windows 用户，并且想使用功能强大的 Yunzai-Bot 来搭建自己的 QQ 机器人，那么 windows-launcher-napcat-yunzai 这个项目将是一个极佳的工具。它为你免去了复杂的后台配置过程，让你能更专注于机器人功能的探索和使用。',
    images: [],
    techStack: ['C++'],
    links: {
      github: 'https://github.com/noob-xiaoyu/windows-launcher-napcat-yunzai',
    },
  },
  {
    id: 'yt-dlp-gui',
    icon: yt_dlp_gui_Icon,
    title: 'yt-dlp-gui',
    shortDescription:
      '一个为 yt-dlp 开发的图形用户界面 (GUI) 工具，让不熟悉命令行的用户也能轻松使用其强大的视频下载功能。',
    longDescription:
      '什么是 yt-dlp？ yt-dlp 是一个非常强大的开源命令行程序，用于从 YouTube 和数百个其他网站下载视频和音频。 它是已停止维护的著名工具 youtube-dl 的一个活跃分支 (fork)，拥有更多功能和更及时的更新。 缺点：对于普通用户来说，纯粹的命令行操作（需要输入各种指令和参数）门槛较高，使用起来很不方便。 yt-dlp-gui 的作用和优势 这个项目就是为了解决 yt-dlp 的使用门槛问题而生的。它提供了以下关键功能： 1.图形化操作界面：用户不再需要记忆和输入复杂的命令，只需在软件窗口里粘贴视频网址、点击按钮，就可以完成下载。 2.简化的下载选项：它将 yt-dlp 的核心功能以简单明了的方式呈现出来，例如： 选择格式与清晰度：可以直接在界面上选择是下载视频还是仅提取 MP3 音频，并选择不同的视频质量。 设置下载目录：可以方便地通过图形界面选择文件保存的位置。 批量下载：支持一次性下载播放列表中的多个视频。 3.高级功能集成：除了基础下载，它也支持一些 yt-dlp 的高级特性，例如： Cookie 支持：可以导入浏览器的 Cookie 文件，用来下载需要登录才能观看的视频（如会员内容）。 字幕下载：能够方便地在下载视频的同时嵌入字幕。 解锁高画质格式：通过特定技术（EJS）支持下载 YouTube 上的 4K、AV1、VP9 等高画质或特殊编码的视频格式。 4.跨平台：这类 GUI 工具通常被设计成可以在 Windows、macOS 和 Linux 等多个操作系统上运行。 总结来说，noob-xiaoyu/yt-dlp-gui 是一个“中间人”或“翻译器”，它将用户在图形界面上的简单点击操作，“翻译”成 yt-dlp 能听懂的命令行指令，并在后台执行下载任务。它极大地降低了视频下载的门槛，让更多人能享受到 yt-dlp 的强大功能。',
    images: [],
    techStack: ['C#'],
    links: {
      github: 'https://github.com/noob-xiaoyu/yt-dlp-gui',
    },
  },
  {
    id: 'SteamAccountManager',
    icon: SteamAccountManager_Icon,
    title: 'SteamAccountManager',
    shortDescription:
      '一款方便用户在多个 Steam 账号之间进行“一键切换”的效率工具，免去手动输入账号密码的烦恼。',
    longDescription:
      '这是什么？ SteamAccountManager (SAM) 是一款方便用户在多个 Steam 账号之间快速切换的工具。 核心痛点 对于拥有多个 Steam 账号（例如，大号、小号、不同区域的账号）的玩家来说，每次切换账号都需要： 退出当前登录的账号。 重新输入另一个账号的用户名和密码。 可能还需要进行手机令牌验证。 这个过程非常繁琐和耗时。 SAM 如何解决？ 这款工具通过记住您的账号信息，实现了“一键切换”的功能。 账号管理： 你可以将所有 Steam 账号添加到管理器中。 快速登录： 只需在列表中选择你想登录的账号，然后点击一个按钮，工具就会自动为你完成退出和登录的全部流程，无需手动输入密码和令牌。 总结来说，这是一个极大地简化了 Steam 多账号切换流程的效率工具，为需要频繁换号的玩家节省了大量时间和精力。',
    images: [],
    techStack: ['C#'],
    links: {
      github: 'https://github.com/noob-xiaoyu/SteamAccountManager',
    },
  },
  {
    id: 'Minecraft 投影文件分类',
    icon: bIcon,
    title: 'Minecraft 投影文件分类',
    shortDescription:
      '一个用于将 Minecraft Litematica 模组的投影文件按文件夹进行自动化分类整理的小工具。',
    longDescription:
      '这是什么？ 这是一个为《我的世界》(Minecraft) 玩家设计的高效整理工具，专门用于管理 Litematica 模组的投影文件（.litematic）。 如果你是一位建筑玩家，使用 Litematica 模组来保存和加载建筑投影，那么你的 `schematics` 文件夹里很可能堆满了各种文件，难以查找和管理。这个工具就是为了解决这个问题而生。 核心功能 自动化分类： 无需手动操作，程序会自动扫描指定文件夹内的所有 .litematic 文件。 创建同名文件夹： 对于每一个投影文件，程序会自动创建一个与该文件同名的文件夹（不包含扩展名）。 文件归档： 程序会将原始的投影文件移动到新创建的对应文件夹中，实现整洁的“一文件一夹”式管理。 简单易用： 只需运行程序，即可完成所有整理工作，大大节省了手动整理的时间。 解决了什么痛点？ 告别混乱： 将几十上百个散乱的投影文件变得井井有条，每个建筑项目都有自己独立的文件夹。 快速定位： 当你需要查找某个特定的建筑投影时，可以直接通过文件夹名称快速找到，而不是在海量文件中费力寻找。 总结来说，这是一款能极大提升 Minecraft 建筑玩家生活质量的“懒人”工具，让你可以更专注于创造，而不是浪费时间在文件管理上。',
    images: [],
    techStack: ['C++', 'ImGui'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Minecraft-Projection-file-Classification',
    },
  },
  {
    id: 'ImageBinaryConverter',
    icon: bIcon,
    title: 'ImageBinaryConverter',
    shortDescription:
      '一个可以在图片和二进制文件之间进行双向转换的工具，用于文件伪装、隐藏和绕过传输限制。',
    longDescription:
      'ImageBinaryConverter 是一个实用的小工具，它的核心功能是在“图片”和“二进制文件”之间进行双向转换。 核心功能:二进制转图片： 将任意文件（如 .exe, .dll, .zip）转换成一张图片。这张图片看起来像是随机的彩色噪点，但它内部包含了原始文件的完整数据。 图片转二进制： 将通过本工具生成的特殊图片还原成原始的二进制文件，数据完全无损。 有什么用？ 这个工具主要用于一些特殊的场景，例如： 文件伪装与隐藏： 你可以将一个私密文件转换成一张普通的图片，不容易引起注意。 绕过传输限制： 某些平台可能只允许上传图片文件。通过这个工具，你可以将其他类型的文件伪装成图片进行上传，之后再下载下来进行还原。总结来说，这是一个巧妙的文件隐藏和传输工具，通过将文件数据编码到图片的像素中，实现了文件类型的伪装。',
    images: [],
    techStack: ['C#'],
    links: {
      github: 'https://github.com/noob-xiaoyu/Imgui-menu',
    },
  },
  // {
  //   id: '',
  //   icon: '',
  //   title: '',
  //   shortDescription: '',
  //   longDescription: '',
  //   images: [],
  //   techStack: [''],
  //   links: {
  //     github: ''
  //   }
  // },
])

// 2. 用于控制弹窗的状态
const selectedProject = ref(null) // 存储当前被选中的项目
const dialogVisible = ref(false) // 控制弹窗是否显示

// 3. 点击卡片时触发的函数
function showProjectDetails(project) {
  selectedProject.value = project // 记录被点击的项目
  dialogVisible.value = true // 打开弹窗
}

// 4. 关闭弹窗时触发的函数
function handleClose() {
  dialogVisible.value = false
  // 动画结束后再清空数据，防止内容闪烁
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
}
</script>

<template>
  <div class="projects-container">
    <!-- v-show="!dialogVisible" 会在弹窗出现时，通过 CSS 隐藏这个列表卡片 -->
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>我的作品</h1>
        <router-link to="/">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <div class="project-list-container">
        <ProjectCard
          v-for="project in projectList"
          :key="project.id"
          :icon="project.icon"
          :iconComponent="project.iconComponent"
          :title="project.title"
          :description="project.shortDescription"
          @viewDetails="showProjectDetails(project)"
        />
      </div>
    </div>

    <!-- 这是我们的详情弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      :title="selectedProject ? selectedProject.title : ''"
      width="80%"
      top="5vh"
      class="project-detail-dialog"
      :before-close="handleClose"
      append-to-body
      destroy-on-close
    >
      <ProjectDetailDialog :project="selectedProject" />
    </el-dialog>
  </div>
</template>
