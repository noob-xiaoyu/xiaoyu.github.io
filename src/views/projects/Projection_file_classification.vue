<script setup>
import { ref } from 'vue'
import backIcon from '@/components/icons/back-icon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
const techStack = ref(['C#'])
const links = ref({
  github: 'https://github.com/noob-xiaoyu/Minecraft-Projection-file-Classification',
})
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>Minecraft 投影文件分类</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <div>
        <h1>项目描述</h1>
        <ul>
          <li>
            <p>
              Minecraft 投影文件分类工具是一个专门为 Minecraft
              玩家设计的文件管理工具，旨在帮助用户更有效地组织和管理他们的 Minecraft
              游戏文件。该工具通过自动化分类功能，将复杂的 Minecraft 投影文件（如 .minecraft
              文件夹）整理到不同的逻辑文件夹中，大大简化了文件管理流程。
            </p>
          </li>
          <li>
            <h3>核心功能</h3>
            <ul>
              <li>智能文件分类：自动将 Minecraft 投影文件按照类型和用途分类到不同文件夹</li>
              <li>文件组织：提供清晰的文件结构，方便用户快速找到所需文件</li>
              <li>
                管理便捷：简化了大型 Minecraft
                安装的管理过程，特别适合拥有多个模组、资源包或世界的玩家
              </li>
            </ul>
          </li>
          <li>
            <h3>应用场景</h3>
            <ul>
              <li>拥有多个 Minecraft 投影文件的玩家</li>
            </ul>
          </li>
        </ul>
      </div>
      <el-divider />
      <h3>技术栈</h3>
      <div class="tech-stack">
        <el-tag v-for="tech in techStack" :key="tech" size="large" style="margin: 4px">
          {{ tech }}
        </el-tag>
      </div>
      <h3 v-if="links && Object.keys(links).length > 0">相关链接</h3>
      <div style="display: flex; gap: 5px; flex-wrap: wrap">
        <el-col>
          <el-button
            v-if="links.github"
            tag="a"
            :href="links.github"
            target="_blank"
            class="action-btn"
            :icon="GithubIcon"
            style="text-decoration: none"
          >
            GitHub
          </el-button>
        </el-col>
        <el-col>
          <el-button
            v-if="links.live"
            tag="a"
            :href="links.live"
            target="_blank"
            type="primary"
            class="action-btn"
            style="text-decoration: none"
            plain
          >
            在线预览
          </el-button>
        </el-col>
      </div>
    </div>
  </div>
</template>
