<script setup>
// 1. 声明本组件会发出一个名为 'viewDetails' 的事件
const emit = defineEmits(['viewDetails'])

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  icon: String,
  iconComponent: Object,
  title: String,
  description: String,
  // 'to' prop 不再需要了
})

// 2. 点击时调用这个函数
function handleClick() {
  // 3. 发出 'viewDetails' 事件
  emit('viewDetails')
}
</script>

<template>
  <!-- 1. 移除 router-link，换成普通的 div，并添加 click 事件监听 -->
  <div class="project-card-link" @click="handleClick">
    <el-card class="project-card" shadow="hover">
      <div class="project-card-content">
        <div class="icon-container">
          <component v-if="iconComponent" :is="iconComponent" class="custom-svg-icon" />
          <el-avatar
            v-else
            :size="52"
            :src="icon"
            shape="square"
            style="background-color: transparent !important"
          />
        </div>
        <div class="project-details">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>
