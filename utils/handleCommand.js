//调用服务器命令
//(ssh对象、shell指令、执行路径)
function runCommand(node_ssh,command,path){
  return new Promise((resolve,reject)=>{
    node_ssh.execCommand(command,{cwd:path}).then(res=>{
      if(res.stderr){
        reject(console.error('执行命令发生错误:'+res.stderr))
        process.exit()
      }else{
        resolve(console.log(command+'命令执行完成'))
      }
    })
  })
}
module.exports = runCommand