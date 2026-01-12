<script setup>
  import { ref } from 'vue'
  import backIcon from '@/components/icons/back-icon.vue'
  import GithubIcon from '@/components/icons/GithubIcon.vue';
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
      <el-divider/>
      <p>这是一个完全响应式的个人主页和作品集网站。</p>
      <p>前端采用 Vue 3、Vite 和 Element Plus 构建，实现了动态视频背景、黑白主题切换、流畅的路由过渡动画等功能。所有项目数据都通过模块化的方式进行管理，易于扩展和维护。</p>
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
