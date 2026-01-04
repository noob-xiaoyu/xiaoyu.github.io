<!-- eslint-disable no-unused-vars -->
<script setup>
import { Markdown } from 'vue3-markdown-it'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import 'github-markdown-css/github-markdown-light.css'

defineProps({
  project: {
    type: Object,
    default: () => null,
  },
})
</script>

<template>
  <div v-if="project" class="detail-content">
    <el-row :gutter="30">
      <el-col :xs="24" :md="14">
        <el-carousel v-if="project.images && project.images.length > 0" height="250px" class="project-carousel" >
          <el-carousel-item v-for="img in project.images" :key="img">
            <img :src="img" style="width: 100%; height: 100%; object-fit: cover" />
          </el-carousel-item>
        </el-carousel>
        <p class="long-description">{{ project.longDescription }}</p>
        <!-- <div class="long-description">
          <Markdown class="markdown-body" :source="project.longDescription" />
        </div> -->
      </el-col>
      <el-col :xs="24" :md="10">
        <h3>技术栈</h3>
        <div class="tech-stack">
          <el-tag v-for="tech in project.techStack" :key="tech" size="large" style="margin: 4px">
            {{ tech }}
          </el-tag>
        </div>
        <h3 v-if="project.links">相关链接</h3>
        <div class="project-links">
          <el-button v-if="project.links.github" tag="a" :href="project.links.github" target="_blank" class="action-btn" :icon="GithubIcon" style="text-decoration: none" >
            GitHub
          </el-button>
          <el-button v-if="project.links.live" tag="a" :href="project.links.live" target="_blank" type="primary" class="action-btn" style="margin-left: 10px; text-decoration: none" plain >
            在线预览
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
/* 基础样式 */
.project-carousel {
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden; /* 防止内容溢出导致滚动条 */
}

.long-description {
  line-height: 1.8;
  color: var(--secondary-text-color);
  max-height: 400px; /* 限制最大高度 */
  overflow-y: auto; /* 允许垂直滚动但隐藏滚动条 */
  scrollbar-width: none; /* Firefox隐藏滚动条 */
  -ms-overflow-style: none; /* IE/Edge隐藏滚动条 */
}

.long-description::-webkit-scrollbar {
  display: none; /* Chrome/Safari隐藏滚动条 */
}

h3 {
  color: var(--main-text-color);
  margin-top: 20px;
  margin-bottom: 15px;
  border-left: 4px solid #409eff;
  padding-left: 10px;
}

.tech-stack,
.project-links {
  margin-bottom: 20px;
}

/* 如果需要应用于特定容器 */
.no-scroll-container {
  width: 100%;
  height: 100%;
  overflow: hidden; /* 完全隐藏滚动条 */
}

/* 或者使用更精细的控制 */
.scrollable-content {
  width: 100%;
  height: calc(100vh - 100px); /* 视口高度减去头部高度 */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; /* 隐藏滚动条但保留功能 */
}

/* 使用clip来裁剪内容，不显示滚动条 */
.clipped-container {
  overflow: clip;
  contain: content;
}
.long-description {
  margin-top: 20px;
  line-height: 1.8;
  max-height: 500px; /* 根据需要调整高度 */
  overflow-y: auto;

  /* 隐藏滚动条（可选，保留你之前的设置） */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.long-description::-webkit-scrollbar {
  display: none;
}

/* 关键：确保 markdown-body 的背景色与你的页面匹配 */
.markdown-body {
  background-color: transparent !important;
  font-size: 14px; /* 调小一点以适应侧边栏布局 */
  color: inherit;
}
</style>
