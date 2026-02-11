<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue' // 1. 导入图标
import { useTheme } from '@/composables/useTheme.js' // 2. 导入 useTheme
import Waifu from '@/components/Waifu.vue' // 导入看板娘组件

// 导入视频文件
import video1 from '@/assets/video/a1.webm'
import video2 from '@/assets/video/a2.webm'
import video3 from '@/assets/video/a3.webm'
import video4 from '@/assets/video/a4.webm'
import video5 from '@/assets/video/a5.webm'
import video6 from '@/assets/video/a6.webm'
import video7 from '@/assets/video/a7.webm'
import video8 from '@/assets/video/a8.webm'
import video9 from '@/assets/video/a9.webm'
import video10 from '@/assets/video/a10.webm'
import video11 from '@/assets/video/a11.webm'

// 视频文件数组
const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  video10,
  video11,
]

// --- 视频背景逻辑 (优化) ---
const videoUrl = ref('')
const videoLoading = ref(true)
const videoError = ref(false)
const videoRef = ref(null)
const cachedVideos = ref(new Set()) // 缓存已加载的视频

// 预加载视频
const preloadVideo = (url) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video')
    video.src = url
    video.preload = 'auto'
    video.muted = true

    // 添加超时处理（10秒）
    const timeout = setTimeout(() => {
      console.warn('视频加载超时:', url)
      reject(new Error('视频加载超时'))
    }, 10000)

    video.onloadeddata = () => {
      clearTimeout(timeout)
      cachedVideos.value.add(url) // 将加载成功的视频添加到缓存
      resolve()
    }

    video.onerror = () => {
      clearTimeout(timeout)
      reject(new Error('视频加载失败'))
    }
  })
}

// 处理视频加载成功
const handleVideoLoaded = () => {
  console.log('视频加载成功')
  videoLoading.value = false
  videoError.value = false
}

// 处理视频加载失败
const handleVideoError = (event) => {
  console.error('视频加载失败:', event.target.error)
  videoLoading.value = false
  videoError.value = true
}

// 处理重试按钮点击
const handleRetry = () => {
  console.log('点击重试按钮')
  setRandomVideo()
}

// 设置随机视频
const setRandomVideo = async () => {
  videoLoading.value = true
  videoError.value = false

  try {
    // 生成随机视频索引
    const videoIndex = Math.floor(Math.random() * videos.length)
    // 使用导入的视频文件
    const videoPath = videos[videoIndex]

    console.log('尝试加载视频:', videoPath)

    // 直接设置视频URL，添加时间戳避免缓存
    videoUrl.value = `${videoPath}?t=${Date.now()}`
    console.log('视频URL设置成功:', videoUrl.value)

    // 强制视频元素重新加载
    if (videoRef.value) {
      console.log('强制视频元素重新加载')
      videoRef.value.load()
    }
  } catch (error) {
    console.error('视频加载失败:', error)
    // 加载失败时尝试其他视频
    try {
      const fallbackIndex = Math.floor(Math.random() * videos.length)
      const fallbackPath = videos[fallbackIndex]
      console.log('尝试加载备用视频:', fallbackPath)
      videoUrl.value = `${fallbackPath}?t=${Date.now()}`

      // 强制视频元素重新加载
      if (videoRef.value) {
        console.log('强制视频元素重新加载')
        videoRef.value.load()
      }
    } catch (fallbackError) {
      console.error('备用视频加载也失败:', fallbackError)
      videoError.value = true
    }
  } finally {
    videoLoading.value = false
  }
}

// 页面加载时设置视频
onMounted(() => {
  setRandomVideo()
})

// --- 主题切换逻辑 (现在移动到这里) ---
const { theme, toggleTheme } = useTheme() // 3. 获取主题状态和切换函数

// 监听主题变化，并更新 <body> 的 class (保持不变)
watch(
  theme,
  (newTheme, oldTheme) => {
    if (oldTheme) {
      document.body.classList.remove(`${oldTheme}-theme`)
    }
    document.body.classList.add(`${newTheme}-theme`)
  },
  { immediate: true },
)
</script>

<template>
  <!-- 视频背景层 -->
  <div class="video-background">
    <video
      ref="videoRef"
      :src="videoUrl"
      autoplay
      muted
      loop
      playsinline
      @loadeddata="handleVideoLoaded"
      @error="handleVideoError"
    ></video>
    <!-- 视频加载状态 -->
    <div v-if="videoLoading" class="video-loading">
      <el-icon class="is-loading"
        ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zm0 960A448 448 0 1 1 512 64a448 448 0 0 1 0 896z"
          ></path>
          <path
            fill="currentColor"
            d="M725.1 686.7a32 32 0 0 1-45.2 45.2l-192-192a32 32 0 0 1 0-45.2l192-192a32 32 0 0 1 45.2 45.2L565.2 512l159.9 174.7z"
          ></path></svg
      ></el-icon>
    </div>
    <!-- 视频加载错误提示 -->
    <div v-if="videoError" class="video-error">
      <el-icon
        ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zm0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448zm-45.2-512 192-192a32 32 0 1 1 45.2 45.2L565.2 512l159.9 174.7a32 32 0 0 1-45.2 45.2l-192-192a32 32 0 0 1 0-45.2z"
          ></path></svg
      ></el-icon>
      <span>视频加载失败</span>
      <el-button size="small" @click="handleRetry">重试</el-button>
    </div>
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

  <div class="global-footer">© 2025 Noob_Xiaoyu. All Rights Reserved.</div>

  <!-- 看板娘组件 -->
  <Waifu />
</template>
