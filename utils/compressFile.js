const fs = require('fs')
const path = require('path')
const archiver = require('archiver')
function compressFile(sourcePath,localFilePath){
  return new Promise((resolve,reject)=>{
    console.log('1.开始压缩...')
    const output = fs.createWriteStream(localFilePath)
    let archive = archiver('zip', {
      zlib: { level: 9 } // 设置压缩级别
    })
    archive.pipe(output);// 管道存档数据到文件
    archive.directory(sourcePath, 'dist') // 存储目标文件并重命名
    archive.finalize() // 完成文件追加 确保写入流完成
    // 文件输出流结束
    output.on('close', function() {
      resolve(console.log(`2.压缩完成，总共 ${(archive.pointer()/1024/1024).toFixed(2)}MB`))
    }).on('error', function(err) {
      reject(console.error('压缩失败'+err))
    });
  })
}
module.exports = compressFile