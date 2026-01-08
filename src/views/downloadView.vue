<script setup>
import DownloadCard from '@/components/DownloadCard.vue';
import backIcon from '@/components/icons/back.vue';
import launcherIcon from '@/components/icons/launcher.vue';
import SteamAccountManager_Icon from '@/components/icons/SteamAccountManager.vue'
import { ref } from 'vue';

import vsIcon from '@/components/icons/Visual_Studio_2022.vue';

const downloadList = ref([
  {
    iconComponent: vsIcon,
    title: 'Visual Studio 2022',
    description: 'Visual Studio 2022 Community',
    to: 'https://aka.ms/vs/17/release/vs_community.exe',
  },
  {
    iconComponent: launcherIcon,
    title: 'launcher for napcat&yunzai',
    description: '这是一个在 Windows 电脑上，让你能一键启动和运行 QQ 机器人的“傻瓜式”工具',
    to: '../assets/exe/launcher.exe',
  },
  {
    iconComponent: SteamAccountManager_Icon,
    title: 'SteamAccountManager',
    description: '一个用于集中管理 Steam 账号的工具',
    to: 'src/assets/exe/SteamAccountManager.exe',
  },
]);
</script>

<template>
  <div class="Download-container">
    <div class="info-card Download-card">
      <div class="project-card-header">
        <h1>下载</h1>
        <router-link to="/">
          <el-button class="action-btn" :icon="backIcon">返回</el-button>
        </router-link>
      </div>
      <el-divider />
      <div class="project-list-container">
        <DownloadCard
          v-for="item in downloadList"
          :key="item.title"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          :to="item.to">

          <template v-if="item.iconComponent" #icon>
            <component :is="item.iconComponent" class="custom-svg-icon" />
          </template>
        </DownloadCard>
      </div>
    </div>
  </div>
</template>
