<script setup>
import { ref } from 'vue'
import backIcon from '@/components/icons/back-icon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
const techStack = ref(['C#'])
const links = ref({
  github: 'https://github.com/noob-xiaoyu/yt-dlp-gui',
})
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>yt-dlp</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>
      <el-divider />

      <h1>什么是 yt-dlp?</h1>
      <ul>
        <li>
          <p>
            yt-dlp 是一个非常强大的开源命令行程序，用于从 YouTube 和数百个其他网站下载视频和音频。
          </p>
        </li>
        <li>
          <p>
            它是已停止维护的著名工具 youtube-dl 的一个活跃分支 (fork)，拥有更多功能和更及时的更新。
          </p>
        </li>
        <li>
          <strong>缺点：</strong>
          <ul>
            <p>
              对于普通用户来说，纯粹的命令行操作（需要输入各种指令和参数）门槛较高，使用起来很不方便。
            </p>
          </ul>
        </li>
      </ul>
      <h1>yt-dlp-gui 的作用和优势</h1>
      <ul>
        <p>这个项目就是为了解决 yt-dlp 的使用门槛问题而生的。</p>
      </ul>
      <strong>它提供了以下关键功能：</strong>
      <ul>
        <li>
          <strong>1.图形化操作界面：</strong>
          <ul>
            <p>
              用户不再需要记忆和输入复杂的命令，只需在软件窗口里粘贴视频网址、点击按钮，就可以完成下载。
            </p>
          </ul>
        </li>
        <li>
          <strong>2.简化的下载选项：</strong>
          <ul>
            <p>它将 yt-dlp 的核心功能以简单明了的方式呈现出来，例如：</p>
            <ul>
              <li>
                <strong>选择格式与清晰度：</strong>
                <ul>
                  <p>可以直接在界面上选择是下载视频还是仅提取 MP3 音频，并选择不同的视频质量。</p>
                </ul>
              </li>
              <li>
                <strong>设置下载目录：</strong>
                <ul>
                  <p>可以方便地通过图形界面选择文件保存的位置。</p>
                </ul>
              </li>
              <li>
                <strong>批量下载：</strong>
                <ul>
                  <p>支持一次性下载播放列表中的多个视频。</p>
                </ul>
              </li>
            </ul>
          </ul>
        </li>
        <!-- <li><strong>3.高级功能集成：</strong>
            <ul>
              <p>除了基础下载，它也支持一些 yt-dlp 的高级特性，例如：</p>
              <ul>
                <li>
                  <strong>Cookie 支持：</strong>
                  <ul><p>可以导入浏览器的 Cookie 文件，用来下载需要登录才能观看的视频（如会员内容）。</p></ul>
                </li>
                <li>
                  <strong>字幕下载：</strong>
                  <ul><p>可以方便地在下载视频的同时嵌入字幕。</p></ul>
                </li>
                <li>
                  <strong>解锁高画质格式：</strong>
                  <ul><p>支持下载 4K、8K 等高分辨率视频，前提是源网站提供这些格式。</p></ul>
                </li>
              </ul>
            </ul>
          </li> -->
        <li>
          <strong>3.跨平台：</strong>
          <ul>
            <p>
              yt-dlp-gui 基于 .NET MAUI 开发，可以在 Windows、macOS 和 Linux
              上运行，满足不同用户的需求。
            </p>
          </ul>
        </li>
      </ul>
      <el-divider />
      <p>
        总结来说，noob-xiaoyu/yt-dlp-gui
        是一个“中间人”或“翻译器”，它将用户在图形界面上的简单点击操作，“翻译”成 yt-dlp
        能听懂的命令行指令，并在后台执行下载任务。它极大地降低了视频下载的门槛，让更多人能享受到
        yt-dlp 的强大功能。
      </p>

      <el-divider />
      <h3>技术栈</h3>
      <div class="tech-stack">
        <el-tag v-for="tech in techStack" :key="tech" size="large" style="margin: 4px">
          {{ tech }}
        </el-tag>
      </div>
      <h3 v-if="links && Object.keys(links).length > 0">相关链接</h3>
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
        <el-col>
          <el-button
            v-if="links.live"
            tag="a"
            :href="links.live"
            target="_blank"
            type="primary"
            class="action-btn"
            style="text-decoration: none"
            plain
          >
            在线预览
          </el-button>
        </el-col>
      </div>
    </div>
  </div>
</template>
