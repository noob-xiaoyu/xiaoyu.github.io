<!-- HomeView.vue -->
<script setup>
    import { Sunny, Moon } from '@element-plus/icons-vue'
    import GithubIcon from '@/components/icons/GithubIcon.vue';
    import downloadIcon from '@/components/icons/download.vue';
    import aboutIcon from '@/components/icons/about.vue';
    import projectIcon from '@/components/icons/project.vue';
    import { useTheme } from '@/composables/useTheme.js';
    const { theme, toggleTheme } = useTheme();
</script>
<template>                      
  <div class="home-container">
    <div class="info-card">
        <div class="card-header">
            <el-avatar :size="80" src="https://raw.githubusercontent.com/noob-xiaoyu/Noob_Xiaoyu-Web/refs/heads/main/src/assets/image/hoshino.jpg" />
            <div class="user-info">
                <h2>Noob_Xiaoyu</h2>
                <p>喵喵喵~</p>
            </div>
        </div>
        <el-divider />
        <div class="button-group">
            <el-row :gutter="16" >
                <el-col :span="8">
                    <el-button class="action-btn" size="large" :icon="GithubIcon" tag="a" href="https://github.com/noob-xiaoyu" target="_blank" rel="noopener noreferrer"  style="text-decoration: none">GitHub</el-button>
                </el-col>

                <el-col :span="8">
                    <router-link to="/projects" style="display: block;">
                        <el-button class="action-btn" size="large" :icon="projectIcon">我的作品</el-button>
                    </router-link>
                </el-col>
                <el-col :span="8">
                    <router-link to="/download" style="display: block;">
                        <el-button class="action-btn" size="large" :icon="downloadIcon">下载</el-button>
                    </router-link>
                </el-col>
            </el-row>
            <el-row :gutter="16" style="margin-top: 16px;">
               <el-col :span="8">
                    <router-link to="/about" style="display: block;">
                        <el-button class="action-btn" size="large" :icon="aboutIcon">关于</el-button>
                    </router-link>
               </el-col>
               <el-col :span="8">
                    <router-link to="/" style="display: block;">
                        <el-button class="action-btn" size="large">待续</el-button>
                    </router-link>
               </el-col>
            </el-row> 
        </div>
    </div>
  </div>
</template>
