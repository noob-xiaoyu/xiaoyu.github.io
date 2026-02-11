<script setup>
import { ref } from 'vue'
import backIcon from '@/components/icons/back-icon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
const techStack = ref(['C#'])
const links = ref({
  github: 'https://github.com/noob-xiaoyu/Imgui-menu',
})
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>ImageBinaryConverter</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <div>
        <h2>这是什么?</h2>
        <ul>
          <li>
            ImageBinaryConverter
            是一个实用的小工具，它的核心功能是在"图片"和"二进制文件"之间进行双向转换。
          </li>
        </ul>
        <el-divider />
        <h2>核心功能</h2>
        <ul>
          <li>
            <strong>二进制转图片：</strong>
            <ul>
              <li>
                将任意文件（如 .exe, .dll,
                .zip）转换成一张图片。这张图片看起来像是随机的彩色噪点，但它内部包含了原始文件的完整数据。
              </li>
            </ul>
          </li>
          <li>
            <strong>图片转二进制：</strong>
            <ul>
              <li>将通过本工具生成的特殊图片还原成原始的二进制文件，数据完全无损。</li>
            </ul>
          </li>
        </ul>
        <el-divider />
        <h2>有什么用？</h2>
        <ul>
          <li>
            <strong>文件伪装与隐藏：</strong>
            <ul>
              <li>你可以将一个私密文件转换成一张普通的图片，不容易引起注意。</li>
            </ul>
          </li>
          <li>
            <strong>绕过传输限制：</strong>
            <ul>
              <li>
                某些平台可能只允许上传图片文件。通过这个工具，你可以将其他类型的文件伪装成图片进行上传，之后再下载下来进行还原。
              </li>
            </ul>
          </li>
        </ul>
        <el-divider />
        <p>
          总结来说，这是一个巧妙的文件隐藏和传输工具，通过将文件数据编码到图片的像素中，实现了文件类型的伪装。
        </p>
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
