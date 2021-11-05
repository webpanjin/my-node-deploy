//上传本地文件
const runCommand = require ('./handleCommand')
const getCurrentTime = require ('./handleTime')

function uploadFile(node_ssh, CONFIG, localFilePath){
  return new Promise((resolve,reject)=>{
    console.log('4.开始上传文件')
    handleFile(node_ssh,CONFIG)
    node_ssh.putFile(localFilePath,CONFIG.deployDir+CONFIG.targetFile).then(()=>{
      resolve(console.log('5.文件上传完成'))
    }).catch(err=>{
      reject(console.error('5.文件上传失败:',err))
    })
  })
}

async function handleFile(node_ssh,CONFIG){
  if(CONFIG.openBackUp){
    console.log('开启远端备份')
    await runCommand(
      node_ssh,
      `
      if [ -d ${CONFIG.releaseDir} ];
      then mv ${CONFIG.releaseDir} ${CONFIG.releaseDir}_${getCurrentTime()}
      fi
      `,
      CONFIG.deployDir
    )
  } else {
    console.log('提醒：未开启远端备份!')
    await runCommand(
      ssh,
      `
      if [ -d ${CONFIG.releaseDir} ];
      then mv ${CONFIG.releaseDir} /tmp/${CONFIG.releaseDir}_${getCurrentTime()}
      fi
      `,
      CONFIG.deployDir)
  }
}

module.exports = uploadFile