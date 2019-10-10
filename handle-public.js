const shell = require("shelljs");
//在bulid时，拷贝样式文件和图片到dist目录下
shell.cp("-R", "./public/", "./dist/");
shell.cp("-R", "./view/", "./dist/");