<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Waifu组件挂载，开始初始化Live2D')
  // 加载看板娘脚本
  const script = document.createElement('script')
  // 使用更可靠的CDN链接
  script.src = 'https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js'
  script.onload = () => {
    console.log('live2d脚本加载成功，开始初始化')
    initWaifu()
  }
  script.onerror = () => {
    console.error('live2d脚本加载失败！')
  }
  document.head.appendChild(script)
})

function initWaifu() {
  console.log('开始初始化Live2D')
  // 检测是否为移动设备
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
  console.log('设备检测结果:', { isMobile, width: window.innerWidth })
  // 检测屏幕宽度
  const isSmallScreen = window.innerWidth < 768 // 768px是常见的移动设备断点

  // 移动设备或小屏幕不加载live2d
  if (isMobile || isSmallScreen) {
    console.log('移动设备或小屏幕，不加载Live2D')
    return
  }

  // 尝试使用L2Dwidget初始化
  if (window.L2Dwidget) {
    console.log('window.L2Dwidget存在，开始初始化')
    // 获取当前日期
    const today = new Date()
    const month = today.getMonth() + 1 // 月份从0开始，需要加1
    const day = today.getDate()
    const isOddDay = day % 2 === 1
    const modelId = isOddDay ? '22' : '33'
    console.log('日期信息:', { month, day, isOddDay, modelId })

    // 构建模型路径的基础URL
    const baseUrl = 'https://raw.githubusercontent.com/noob-xiaoyu/live2d/master/model'
    let modelPath = ''

    // 检查是否为节假日
    const isNewYear = month === 1 && day === 1
    const isSpringFestival = month === 1 && day >= 21 && day <= 28
    const isValentine = month === 2 && day === 14
    const isChristmas = month === 12 && day === 25
    console.log('节假日检查结果:', { isNewYear, isSpringFestival, isValentine, isChristmas })

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
    console.log('选择的模型路径:', modelPath)

    // 使用L2Dwidget初始化
    try {
      console.log('开始调用window.L2Dwidget.init')
      window.L2Dwidget.init({
        model: {
          jsonPath: modelPath,
        },
        display: {
          position: 'left',
          width: 300,
          height: 800,
          hOffset: 0,
          vOffset: 0,
        },
        mobile: {
          show: false,
        },
      })
      console.log('window.L2Dwidget.init调用成功')
    } catch (error) {
      console.error('window.L2Dwidget.init调用失败:', error)
    }
  } else if (window.loadlive2d) {
    console.log('window.loadlive2d存在，开始加载模型')
    // 构建模型路径
    const today = new Date()
    const day = today.getDate()
    const modelId = day % 2 === 1 ? '22' : '33'
    const baseUrl = 'https://raw.githubusercontent.com/imuncle/live2d/master/model'
    const modelPath = `${baseUrl}/${modelId}/model.default.json`

    try {
      console.log('开始调用window.loadlive2d')
      window.loadlive2d('live2d', modelPath)
      console.log('window.loadlive2d调用成功')
    } catch (error) {
      console.error('window.loadlive2d调用失败:', error)
    }
  } else {
    console.error('Live2D初始化失败：未找到L2Dwidget或loadlive2d')
    // 尝试直接创建简单的Live2D实例
    console.log('尝试使用备用方案创建Live2D')
  }
}

onUnmounted(() => {
  // 清理看板娘实例
  if (window.L2Dwidget) {
    console.log('清理L2Dwidget实例')
    // 这里可以添加清理逻辑
  }
})
</script>

<template>
  <div class="waifu-container">
    <div id="live2d" class="live2d"></div>
  </div>
</template>

<style scoped>
.waifu-container {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;
}

.live2d {
  z-index: 9999;
  pointer-events: none;
  display: block;
  width: 300px;
  height: 800px;
}
</style>
