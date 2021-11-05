const CONFIG = require('./config')
const sshObj = require ('./utils/ssh')
const runCommand = require ('./utils/handleCommand')
async function del(){
  try{
    await sshObj.connectServer(CONFIG.sshInfo) // 连接
    await runCommand(sshObj.node_ssh, 'rm -r html_*', CONFIG.deployDir) // 删除
  }catch(err){
    console.log('删除时发生错误:'+err)
  }finally{
    process.exit()
  }
}
del()