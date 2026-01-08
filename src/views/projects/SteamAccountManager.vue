<script setup>
  import { ref } from 'vue'
  import backIcon from '@/components/icons/back.vue'
  import GithubIcon from '@/components/icons/GithubIcon.vue';
  const techStack = ref(['C#'])
  const links = ref({
    github: 'https://github.com/noob-xiaoyu/SteamAccountManager',
  })
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>SteamAccountManager</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider/>
        <div>
          <h1>✨ 主要功能</h1>
          <ul>
            <h2>1,账号集中管理:</h2>
            <ul>
              <p>在一个清晰的列表中管理您所有的 Steam 账号信息，包括用户名、密码、昵称、邮箱等。</p>
            </ul>
            <h2>2,智能排序与高亮:</h2>
            <ul>
              <p>自动根据账号状态（正常、冷却中、VAC封禁）进行排序，重要状态一目了然。</p>
              <p>对处于冷却或封禁状态的账号整行进行颜色高亮，提供强烈的视觉警示。</p>
            </ul>
            <h2>3,一键安全登录</h2>
            <ul>
              <p>自动检测本地 Steam 客户端路径。</p>
              <p>在登录前检测 Steam 是否已在运行，并提示用户关闭现有进程，确保切换账号成功。</p>
              <p>通过调用官方 Steam 客户端并传递登录参数来实现登录，**全程不直接处理 Steam Guard 验证码**，安全可靠。</p>
            </ul>
            <h2>4,批量操作</h2>
            <ul>
              <p>支持通过逗号或特定分隔符（`----`）批量添加账号，兼容多种格式。</p>
            </ul>
            <h2>5,API 集成</h2>
            <ul>
              <p>通过 Steam Web API 批量更新所有账号的最新昵称和封禁状态。</p>
              <p>智能填充功能：当您粘贴包含 API Key 的文本时，程序会自动提取出 32 位的纯净 Key。</p>
            </ul>
            <h2>6,数据持久化</h2>
            <ul>
              <p>所有账号信息和应用设置（如 API Key）都会自动保存在程序根目录的 `.json` 文件中。</p>
              <ul>
                <li>
                  <p>自动保存:</p>
                  <ul><p>关闭程序时，所有更改都会自动静默保存，无需手动操作。</p></ul>
                </li>
              </ul>
            </ul>
            <h2>7,便捷的交互</h2>
            <ul>
              <p>支持通过顶部按钮或右键上下文菜单对账号进行更改、登录、删除等操作。</p>
              <p>点击昵称可直接在浏览器中打开对应的 Steam 社区个人资料页面。</p>
            </ul>
          </ul>
          <h1>🚀 使用场景</h1>
          <ul>
            <h2>1,使用方法</h2>
            <ul>
              <p>1.  从<a href="https://github.com/noob-xiaoyu/SteamAccountManager/releases" target="_blank" style="text-decoration: none">Releases</a> 下载最新版本的SteamAccountManager。</p>
              <p>2.  运行
                <router-link to="/download" style="text-decoration: none">
                  SteamAccountManager.exe
                </router-link>
                。
              </p>
            </ul>
          </ul>
        </div>
      <el-divider/>
      <h3>技术栈</h3>
      <div class="tech-stack">
        <el-tag v-for="tech in techStack" :key="tech" size="large" style="margin: 4px">
          {{ tech }}
        </el-tag>
      </div>
      <h3 v-if="links && Object.keys(links).length > 0"> 相关链接 </h3>
      <div style="display: flex; gap: 5px; flex-wrap: wrap;">
        <el-col>
          <el-button v-if="links.github" tag="a" :href="links.github" target="_blank" class="action-btn" :icon="GithubIcon" style="text-decoration: none">
            GitHub
          </el-button>
        </el-col>
        <el-col>
          <el-button v-if="links.live" tag="a" :href="links.live" target="_blank" type="primary" class="action-btn" style="text-decoration: none" plain>
            在线预览
          </el-button>
        </el-col>
      </div>
    </div>
  </div>
</template>
