var buf = new Buffer(256);
len = buf.write("www.runoob.com", "utf-8");

console.log("写入字数: " + len);