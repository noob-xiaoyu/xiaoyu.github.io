<script setup>
defineProps({
  icon: {
    type: [String, Object], // 支持字符串（图片路径）或组件对象
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    required: true,
  },
  iconType: {
    type: String,
    default: 'auto', // 'auto' | 'image' | 'component'
    validator: (value) => ['auto', 'image', 'component'].includes(value),
  },
});
</script>

<template>
  <a :href="to" class="download-card-link" download>
    <el-card class="project-card" shadow="hover">
      <div class="project-card-content">
        <div class="icon-container">
          <slot name="icon">
            <!-- 自动检测模式 -->
            <template v-if="iconType === 'auto'">
              <component v-if="typeof icon === 'object'" :is="icon" class="custom-svg-icon" />
              <el-avatar v-else-if="icon" :size="52" :src="icon" shape="square" />
            </template>

            <!-- 强制组件模式 -->
            <component v-else-if="iconType === 'component' && icon" :is="icon" class="custom-svg-icon" />

            <!-- 强制图片模式 -->
            <el-avatar v-else-if="iconType === 'image' && icon" :size="52" :src="icon" shape="square" />
          </slot>
        </div>

        <div class="project-details">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </el-card>
  </a>
</template>
