<script setup>
  import { ref } from 'vue'
  import backIcon from '@/components/icons/back.vue'
  import GithubIcon from '@/components/icons/GithubIcon.vue';
  const techStack = ref(['C++'])
  const links = ref({
    github: 'https://github.com/noob-xiaoyu/windows-launcher-napcat-yunzai',
  })
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>launcher for napcat&yunzai</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider/>
      <div>
        <h2><strong>这是什么?</strong></h2>
        <p>这是一个在 Windows 电脑上，让你能一键启动和运行 QQ 机器人的“傻瓜式”工具。</p>
        <el-divider/>
        <p><strong>核心组件解析：</strong></p>
        <ul>
          <strong>1. Yunzai-Bot (云崽 Bot):</strong>
          <ul>
            <p>
              这是一个非常受欢迎的、开源的 QQ 聊天机器人框架，最初主要为游戏《原神》的玩家社群设计。
              功能强大且高度可扩展，用户可以通过安装各种插件来增加新功能，如游戏数据查询、群管理、娱乐互动等。
              它本身支持跨平台运行，但在 Windows 上进行环境配置对新手来说可能较为复杂。
            </p>
          </ul>
          <strong>2. NapCatQQ (猫猫)</strong>
          <ul>
            <p>
              这是一个现代化的、基于 NTQQ 的机器人协议端实现。
              简单来说，它负责让机器人能够与 QQ 服务器进行通信，收发消息。
              它的特点是内存占用低、开箱即用，并且支持多种部署方式。
              它遵循 OneBot 协议标准，这是一个广泛应用的机器人开放标准，使得 Yunzai-Bot 等多种框架可以通过它来接入 QQ。
            </p>
          </ul>
        </ul>
        <el-divider/>
        <p><strong>核心组件解析：</strong></p>
        <ul>
          <strong>一键启动与集成：</strong>
          <ul>
            <p>
              它将 NapCatQQ 和 Yunzai-Bot的启动过程集成到一个终端界面中，用户无需手动在命令行中执行复杂的指令。
            </p>
          </ul>
          <strong>简化配置：</strong>
          <ul>
            <p>对于不熟悉 Node.js、Git 等环境配置的 Windows 用户，这个启动器能够自动化处理许多繁琐的步骤，降低了使用门槛。</p>
          </ul>
          <strong>方便管理：</strong>
          <ul>
            <p>提供了一个可视化的界面来管理机器人的运行状态，如启动、停止、重启等。</p>
          </ul>
          <strong>专为 Windows 优化：</strong>
          <ul>
            <p>解决了在 Windows 环境下部署 Yunzai-Bot 时可能遇到的一些常见问题，让整个体验更加顺畅。</p>
          </ul>
        </ul>
        <el-divider/>
        <p>总结来说，如果你是一名 Windows 用户，并且想使用功能强大的 Yunzai-Bot 来搭建自己的 QQ 机器人，那么 windows-launcher-napcat-yunzai 这个项目将是一个极佳的工具。它为你免去了复杂的后台配置过程，让你能更专注于机器人功能的探索和使用。</p>
      </div>
      <el-divider/>
      <h3>技术栈</h3>
      <div class="tech-stack">
        <el-tag v-for="tech in techStack" :key="tech" size="large" style="margin: 4px">
          {{ tech }}
        </el-tag>
      </div>
      <h3 v-if="links && Object.keys(links).length > 0"> 相关链接 </h3>
      <div style="display: flex; gap: 5px; flex-wrap: wrap;">
        <el-col>
          <el-button v-if="links.github" tag="a" :href="links.github" target="_blank" class="action-btn" :icon="GithubIcon" style="text-decoration: none">
            GitHub
          </el-button>
        </el-col>
        <el-col>
          <el-button v-if="links.live" tag="a" :href="links.live" target="_blank" type="primary" class="action-btn" style="text-decoration: none" plain>
            在线预览
          </el-button>
        </el-col>
      </div>
    </div>
  </div>
</template>
