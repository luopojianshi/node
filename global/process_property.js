// 输出到终端
process.stdout.write('hello world!' + '\n');

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val + ' \n');
});

// 获取执行路径
console.log('路径: ' + process.execPath + ' \n');

// 平台信息
console.log('平台信息: ' + process.platform + ' \n');

// CPU 架构
console.log('cpu 架构: ' + process.arch + ' \n');

// 进程名
console.log('进程名: ' + process.title + ' \n');

// 当前进程号
console.log('进程号: ' + process.pid + ' \n');

// 版本和依赖
console.log('version: ' + process.version + ' \n');
console.log(process.versions);
