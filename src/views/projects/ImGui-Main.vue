<script setup>
import { ref } from 'vue'
import backIcon from '@/components/icons/back-icon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
const techStack = ref(['C++', 'OpenGL', 'GLFW', 'Dear ImGui', 'GLAD', 'nlohmann/json', 'stb'])
const links = ref({
  github: 'https://github.com/noob-xiaoyu/ImGui-Main',
})
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>ImGui-Main</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>

      <el-divider />

      <div>
        <h2>项目概述</h2>
        <p>
          ImGui Main 是一个基于 Dear ImGui 的 C++ 图形界面应用程序框架，使用 OpenGL
          作为渲染后端。项目采用模块化设计，提供了完整的 UI
          控件库和渲染功能，适合开发工具类应用、编辑器、调试工具等需要高效 UI 交互的场景。
        </p>
        <el-divider />
        <h2>主要特性</h2>
        <ul>
          <li><strong>即时模式 GUI：</strong>采用 Dear ImGui 的即时模式 GUI 范式，简化 UI 开发</li>
          <li><strong>高性能渲染：</strong>使用 OpenGL 进行硬件加速渲染</li>
          <li><strong>模块化设计：</strong>清晰的模块划分，便于功能扩展</li>
          <li><strong>丰富的控件：</strong>提供按钮、输入框等常用控件</li>
          <li><strong>强大的渲染功能：</strong>支持渐变、发光、模糊等高级效果</li>
          <li><strong>跨平台支持：</strong>基于 GLFW 和 OpenGL，支持跨平台开发</li>
          <li><strong>现代化 C++：</strong>使用现代 C++ 语法和标准库</li>
        </ul>
        <el-divider />
        <h2>应用场景</h2>
        <ul>
          <li>工具类应用</li>
          <li>游戏编辑器</li>
          <li>调试工具</li>
          <li>数据可视化</li>
          <li>配置界面</li>
          <li>原型开发</li>
        </ul>
        <el-divider />
        <h2>纯渲染 UI 项目</h2>
        <p>此项目特别适合用于纯渲染 UI 项目，提供了完整的自定义 UI 渲染解决方案：</p>
        <ul>
          <li>
            <strong>完全自定义渲染：</strong>不依赖 ImGui 的默认控件，使用 render
            模块提供的绘图函数完全自定义 UI 外观
          </li>
          <li>
            <strong>灵活的样式控制：</strong>通过 render
            模块的渐变、发光、模糊等效果，实现独特的视觉风格
          </li>
          <li><strong>高性能绘制：</strong>直接使用 OpenGL 渲染，避免 ImGui 控件的额外开销</li>
          <li>
            <strong>混合模式支持：</strong>可以结合 ImGui
            的即时模式特性和自定义渲染，实现最佳的开发体验
          </li>
          <li><strong>游戏 UI 开发：</strong>适合开发游戏中的 HUD、菜单、设置界面等纯渲染 UI</li>
          <li><strong>自定义控件库：</strong>基于 render 模块可以轻松构建自定义控件库</li>
        </ul>
        <el-divider />
        <h2>技术栈</h2>
        <div class="tech-stack">
          <el-tag v-for="tech in techStack" :key="tech" size="large" style="margin: 4px">
            {{ tech }}
          </el-tag>
        </div>
        <el-divider />
        <h3>相关链接</h3>
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
        </div>
      </div>
    </div>
  </div>
</template>
