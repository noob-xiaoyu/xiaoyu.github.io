// 跨平台复制脚本，用于复制dist/index.html为dist/404.html
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(__dirname, 'dist', 'index.html');
const targetPath = path.join(__dirname, 'dist', '404.html');

try {
  // 读取源文件内容
  const content = fs.readFileSync(sourcePath, 'utf8');

  // 写入目标文件
  fs.writeFileSync(targetPath, content, 'utf8');

  console.log('✓ 成功复制dist/index.html为dist/404.html');
} catch (error) {
  console.error('✗ 复制文件失败:', error.message);
  process.exit(1);
}
