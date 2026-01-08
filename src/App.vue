<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue' // 1. 导入图标
import { useTheme } from '@/composables/useTheme.js';   // 2. 导入 useTheme

// --- 视频背景逻辑 (保持不变) ---
const videoUrl = ref('');
const setRandomVideo = () => {
  const videoIndex = Math.floor(Math.random() * 11) + 1;
  videoUrl.value = new URL(`./assets/video/a${videoIndex}.webm`, import.meta.url).href;
};
onMounted(() => {
  setRandomVideo();
});

// --- 主题切换逻辑 (现在移动到这里) ---
const { theme, toggleTheme } = useTheme(); // 3. 获取主题状态和切换函数

// 监听主题变化，并更新 <body> 的 class (保持不变)
watch(theme, (newTheme, oldTheme) => {
  if (oldTheme) {
    document.body.classList.remove(`${oldTheme}-theme`);
  }
  document.body.classList.add(`${newTheme}-theme`);
}, { immediate: true });

</script>

<template>
  <!-- 视频背景层 -->
  <div class="video-background">
    <video :src="videoUrl" autoplay muted loop playsinline></video>
  </div>

  <!-- 内容覆盖层 -->
  <div class="content-overlay">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>

  <!-- 4. 将主题切换按钮添加到这里 -->
  <el-button
    class="theme-toggle"
    :icon="theme === 'light' ? Moon : Sunny"
    @click="toggleTheme"
    circle
    size="large"
  />

  <div class="global-footer">
    © 2025 Noob_Xiaoyu. All Rights Reserved.
  </div>
</template>
