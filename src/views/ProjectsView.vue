<script setup>
import { ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import backIcon from '@/components/icons/back.vue'
import bIcon from '@/assets/image/icon/svg/b.svg'
import launcherIcon from '@/assets/image/icon/svg/launcher.svg'
import yt_dlp_gui_Icon from '@/assets/image/icon/dlp.ico'
import SteamAccountManager_Icon from '@/assets/image/icon/SteamAccountManager.ico'

import personalwebsite from '@/views/projects/personal-website.vue'
// 1. 完整项目数据
const projectList = ref([
  {
    id: 'personal-website',
    icon: 'https://cdn.jsdelivr.net/gh/noob-xiaoyu/image@main/hoshino.jpg',
    title: '个人网站',
    shortDescription: '就是本网站，使用 Vue 3 + Element Plus 构建。',
    to: 'projects/personal-website',
  },
  {
    id: 'Imgui-menu',
    icon: 'https://raw.githubusercontent.com/noob-xiaoyu/Noob_Xiaoyu-Web/refs/heads/main/src/assets/image/icon/imgui.png',
    title: 'Imgui-menu',
    shortDescription:'这是一款基于 ImGui 的现代化悬浮菜单框架，它集成了辉光、鼠标拖尾等丰富视觉特效和计时器等实用工具，并提供强大的主题与配置系统。',
    to: 'projects/Imgui-menu',
  },
  {
    id: 'launcher for napcat&yunzai',
    icon: launcherIcon,
    title: 'launcher for napcat&yunzai',
    shortDescription: '这是一个在 Windows 电脑上，让你能一键启动和运行 QQ 机器人的“傻瓜式”工具。',
    techStack: ['C++'],
    to: 'projects/launcher',
  },
  {
    id: 'yt-dlp-gui',
    icon: yt_dlp_gui_Icon,
    title: 'yt-dlp-gui',
    shortDescription:
      '一个为 yt-dlp 开发的图形用户界面 (GUI) 工具，让不熟悉命令行的用户也能轻松使用其强大的视频下载功能。',
    to: 'projects/yt-dlp-gui',
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
  //   to: '',
  // },
])
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
          :to="project.to"
          @viewDetails="showProjectDetails(project)"
        />
      </div>
    </div>
  </div>
</template>
