var fs = require("fs");
var zlib = require("zlib");

// 解压 input.txt.gz 文件为 input_decompress.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input_decompress.txt'));

console.log("文件解压完成");
