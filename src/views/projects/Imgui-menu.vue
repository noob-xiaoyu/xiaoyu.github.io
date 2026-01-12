<script setup>
  import { ref } from 'vue'
  import backIcon from '@/components/icons/back-icon.vue'
  import GithubIcon from '@/components/icons/GithubIcon.vue';
  const techStack = ref([
    'C++', 'ImGui'
  ])
  const links = ref({
    github: 'https://github.com/noob-xiaoyu/Imgui-menu',
  })
</script>

<template>
  <div class="projects-container">
    <div class="info-card projects-card" v-show="!dialogVisible">
      <div class="project-card-header">
        <h1>ImGui</h1>
        <router-link to="/projects">
          <el-button class="action-btn" :icon="backIcon" size="large">返回</el-button>
        </router-link>
      </div>

      <el-divider/>

      <div>
        <h2>这是什么?</h2>
        <ul>
          <li>这是一个现代化的、半透明的悬浮菜单。</li>
          <li><strong>它的主要特点是:</strong></li>
          <ul>
            <li><strong>高度可定制:</strong>
              <ul>
                <li>你可以随心所欲地改变它的外观，从颜色主题到每个按钮的圆角大小，都可以调整并保存。</li>
              </ul>
            </li>
          </ul>
        </ul>
        <el-divider/>
        <h2>核心功能一览</h2>
        <ul>
          <li><strong>1. 一键显示/隐藏</strong>
            <p>
              默认情况下，按下键盘上的 `Insert` 键，就可以打开或关闭这个菜单。
            </p>
            <p>
              这个快捷键也可以在设置里更换成你喜欢的任何按键。
            </p>
          </li>
          <li><strong>2. 丰富的视觉效果</strong>
            <ul>
              <li><strong>菜单辉光:</strong>
                <ul>
                  <li>让整个菜单窗口的边缘散发出柔和的光晕，颜色和光晕的厚度都可以自定义。</li>
                </ul>
              </li>
              <li>鼠标拖尾:
                <ul>
                  <li>当你在菜单上移动鼠标时，会留下一道平滑、多彩的轨迹，科技感十足。</li>
                </ul>
              </li>
              <li><strong>背景模糊:</strong>
                <ul>
                  <li>(此功能为占位实现) 菜单出现时，其背后的内容会变得模糊，让你更专注于菜单本身。</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>3. 强大的主题系统</strong>
            <ul>
              <li><strong>内置主题:</strong>
                <ul>
                  <li>程序内置了多种精心设计的主题，比如优雅的“樱花粉”亮色主题和酷炫的“霓虹粉”暗色主题，一键切换。</li>
                </ul>
              </li>
              <li><strong>实时样式编辑器:</strong>
                <ul>
                  <li>你可以打开一个“样式编辑器”窗口，像 Photoshop 一样实时调整菜单的每一个视觉细节，包括颜色、边框、圆角、间距等。</li>
                </ul>
              </li>
              <li><strong>保存和加载:</strong>
                <ul>
                    <li>当你调整出一个满意的外观后，可以将其保存为一个主题文件。之后，你可以随时加载这个文件，或者分享给朋友。</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>4. 实用的内置工具</strong>
            <ul>
              <li><strong>计时器:</strong>
                <ul>
                  <li>菜单里集成了一个精确到毫秒的秒表。你可以用它来计时、测试任务耗时等，非常方便。</li>
                </ul>
              </li>
              <li><strong>帧率显示 (FPS):</strong>
                <ul>
                  <li>在菜单的左下角会实时显示当前的运行帧率，让你了解程序的性能表现。</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>5. 配置管理系统</strong>
            <ul>
              <li>你可以在菜单中对各种功能（例如视觉效果、计时器状态等）进行设置。这个系统允许你将当前所有的设置保存为一个独立的配置文件。你可以创建多个不同的配置文件，比如“游戏配置”、“工作配置”等，并根据需要随时加载它们，无需每次都重新调整。</li>
            </ul>
          </li>
          <li><strong>5. 配置管理系统</strong>
            <ul>
              <li>你可以在菜单中对各种功能（例如视觉效果、计时器状态等）进行设置。这个系统允许你将当前所有的设置保存为一个独立的配置文件。你可以创建多个不同的配置文件，比如“游戏配置”、“工作配置”等，并根据需要随时加载它们，无需每次都重新调整。</li>
            </ul>
          </li>
        </ul>
        <el-divider/>
        <h2>如何使用这个菜单？</h2>
        <ul>
          <li><strong>1. 启动:</strong>
            <ul>
              <li>运行程序后，你可能看不到任何东西，因为它是一个透明的覆盖层。</li>
            </ul>
          </li>
          <li><strong>2. 打开菜单:</strong>
            <ul>
              <li>按下 `Insert` 键，菜单就会华丽地出现在屏幕上。</li>
            </ul>
          </li>
          <li><strong>3. 浏览:</strong>
            <ul>
              <li>菜单左侧是导航栏，上面有 "Visuals"（视觉效果）、"Time"（时间工具）、"Settings"（设置）等选项卡。点击不同的选项卡，右侧的内容区域就会切换到对应的功能页面。</li>
            </ul>
          </li>
          <li><strong>4. 进行设置:</strong>
            <ul>
                <li>在 "Visuals" 页面，你可以找到开关来启用/禁用“菜单辉光”和“鼠标拖尾”，并调整它们的颜色、大小等参数。在 "Time" 页面，你可以控制计时器的开始、暂停和重置。在 "Settings" 页面，你可以切换整体主题、锁定菜单大小（防止误触改变）、修改呼出菜单的快捷键，以及安全退出程序。在 "Configs" 页面，你可以管理你的个人设置文件。</li>
            </ul>
          </li>
          <li><strong>5. 关闭菜单:</strong>
            <ul>
              <li>再次按下 `Insert` 键，菜单就会消失，但程序仍在后台运行，等待下一次召唤。</li>
            </ul>
          </li>
          <li><strong>6. 完全退出:</strong>
            <ul>
              <li>如果想彻底关闭程序，请进入 "Settings" 页面，点击“退出”按钮。</li>
            </ul>
          </li>
        </ul>
        <el-divider/>
        <p>总而言之，这不仅仅是一个简单的设置窗口，更是一个集美观、实用和高度个性化于一体的强大UI框架，为你提供了流畅、现代的交互体验。</p>
        <el-divider/>
        <h2>两个字</h2>
        <p>没用</p>
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
