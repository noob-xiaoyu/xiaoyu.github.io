<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  // 加载看板娘脚本
  if (!window.loadlive2d) {
    const script = document.createElement('script')
    script.src = './src/assets/live2d/js/live2d.js'
    script.onload = initWaifu
    document.head.appendChild(script)
  } else {
    initWaifu()
  }
})

function initWaifu() {
  // 检测是否为移动设备
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  // 检测屏幕宽度
  const isSmallScreen = window.innerWidth < 768 // 768px是常见的移动设备断点

  // 移动设备或小屏幕不加载live2d
  if (isMobile || isSmallScreen) {
    return
  }

  if (window.loadlive2d) {
    // 获取当前日期
    const today = new Date()
    const month = today.getMonth() + 1 // 月份从0开始，需要加1
    const day = today.getDate()
    const isOddDay = day % 2 === 1
    const modelId = isOddDay ? '22' : '33'

    // 构建模型路径的基础URL
    const baseUrl = 'https://raw.githubusercontent.com/imuncle/live2d/master/model'
    let modelPath = ''

    // 检查是否为节假日
    const isNewYear = month === 1 && day === 1
    const isSpringFestival = month === 1 && day >= 21 && day <= 28
    const isValentine = month === 2 && day === 14
    const isChristmas = month === 12 && day === 25

    // 根据节假日和天数奇偶性选择模型
    if (isNewYear || isSpringFestival) {
      modelPath = `${baseUrl}/${modelId}/model.2017.newyear.json`
    } else if (isValentine) {
      modelPath = `${baseUrl}/${modelId}/model.2017.vdays.json`
    } else if (isChristmas) {
      modelPath = `${baseUrl}/${modelId}/model.2016.xmas.1.json`
    } else {
      // 非节假日使用默认模型
      modelPath = `${baseUrl}/${modelId}/model.default.json`
    }

    // 初始化live2d，使用选择的模型
    window.loadlive2d('live2d', modelPath)
  }
}

onUnmounted(() => {
  // 清理看板娘实例
  if (window.Live2DModel) {
    // 这里可以添加清理逻辑
  }
})
</script>

<template>
  <div class="waifu-container">
    <canvas class="live2d" id="live2d" width="300" height="800"></canvas>
  </div>
</template>

<style scoped>
.waifu-container {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none; /* 容器本身不捕获点击事件 */
}

.live2d {
  z-index: 9999;
  pointer-events: none; /* 模型本身可以捕获点击事件 */
  display: block;
}
</style>
