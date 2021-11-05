const CONFIG = {
  name: '测试项目',
  sshInfo: {
    host: 'www.webpj.online',
    port: 22,
    username: 'root',
    password: '545788Hwy',
  },
  sourcePath: 'F:/vue-demo/dist', // 压缩目录源(可使用相对地址)
  targetFile: 'dist.zip', // 目标文件
  openCompress: true, // 是否开启本地压缩
  openBackUp: true, // 是否开启远端备份
  deployDir: '/var/www' + '/', // 远端目录
  releaseDir: 'html' // 发布目录
}
module.exports = CONFIG