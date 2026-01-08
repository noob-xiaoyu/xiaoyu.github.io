<script setup>
  import { ref } from 'vue'
  import backIcon from '@/components/icons/back.vue'
  import GithubIcon from '@/components/icons/GithubIcon.vue';
  const techStack = ref(['C#'])
  const links = ref({
    github: 'https://github.com/noob-xiaoyu/yt-dlp-gui',
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
      <el-divider/>

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
