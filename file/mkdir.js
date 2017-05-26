var fs = require('fs');

console.log("创建目录 /Users/lijiafu000/test/file/tmp");
fs.mkdir("/Users/lijiafu000/test/file/tmp", function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("目录创建成功!");
});
