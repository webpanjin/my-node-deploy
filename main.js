const CONFIG = require('./config')
const compressFile = require('./utils/compressFile')
const sshObj = require ('./utils/ssh')
const uploadFile = require ('./utils/uploadFile')
const runCommand = require ('./utils/handleCommand')
async function main(){
  try{
    const localFilePath = __dirname+'/'+CONFIG.targetFile //待上传的本地文件路径
    CONFIG.openCompress?await compressFile(CONFIG.sourcePath,localFilePath):''
    await sshObj.connectServer(CONFIG.sshInfo) // 连接
    await uploadFile(sshObj.node_ssh, CONFIG, localFilePath) // 上传
    await runCommand(sshObj.node_ssh, 'unzip ' + CONFIG.targetFile, CONFIG.deployDir) // 解压
    await runCommand(sshObj.node_ssh, 'mv dist ' + CONFIG.releaseDir, CONFIG.deployDir) // 修改文件名称
    await runCommand(sshObj.node_ssh, 'rm -f ' + CONFIG.targetFile, CONFIG.deployDir) // 删除
  }catch(err){
    console.log('部署过程发生错误:'+err)
  }finally{
    process.exit()
  }
}
main()
