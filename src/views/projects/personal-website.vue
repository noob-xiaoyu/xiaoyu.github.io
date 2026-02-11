<script setup>
import { ref } from 'vue'
import backIcon from '@/components/icons/back-icon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
const techStack = ref(['Vue 3', 'Vite', 'Element Plus', 'Vue Router'])
const links = ref({
  github: 'https://github.com/noob-xiaoyu/Noob_Xiaoyu-Web',
  live: '/',
})
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>个人网站</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <p>
        这是一个现代化、完全响应式的个人主页和作品集展示平台，融合了优雅的设计与流畅的交互体验。
      </p>
      <p>
        网站采用了前沿的前端技术栈构建，具有动态视频背景、流畅的主题切换动画、精心设计的卡片布局和丰富的微交互效果。整体设计风格清新简约，同时通过渐变色彩、阴影层次和悬停动画营造出深度感和现代感。
      </p>
      <p>
        技术实现上，网站采用模块化架构设计，所有组件和数据都通过清晰的结构进行管理，确保了良好的可维护性和扩展性。路由系统采用了平滑过渡效果，提升了页面间切换的用户体验。
      </p>
      <p>
        网站支持浅色和深色两种主题模式，用户可以根据个人喜好自由切换，主题切换过程中伴有流畅的过渡动画，保持了视觉上的连贯性。
      </p>
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
