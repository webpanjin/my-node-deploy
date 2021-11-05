//连接云服务器
const Node_ssh = require('node-ssh')
const node_ssh = new Node_ssh()

function connectServer(sshInfo){
  return new Promise((resolve,reject)=>{
    node_ssh.connect(sshInfo).then(()=>{
      resolve(console.log(`3.${sshInfo.host}连接成功`))
    }).catch(err=>{
      reject(console.log(`3.${sshInfo.host}连接失败：${err}`))
    })
  })
}
module.exports = {
  connectServer,
  node_ssh
}