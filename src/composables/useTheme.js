import { ref, watch } from 'vue'

// 导出 useTheme 函数
export function useTheme() {
  // 1. 创建一个响应式变量 theme
  // 它会先从 localStorage 读取已保存的主题，如果没有，则默认为 'dark'
  const theme = ref(localStorage.getItem('theme') || 'dark')

  // 2. 创建一个切换主题的函数
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // 3. 使用 watch 监听 theme 变量的变化
  // 当 theme 变化时，将其新值存入 localStorage
  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
  })

  // 4. 返回 theme 状态和 toggleTheme 方法，以便组件可以使用
  return {
    theme,
    toggleTheme,
  }
}
