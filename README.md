# Angular Boilerplate

---------------------------------------------
|											|
|											|
|			注意:此文件是开发者本人随记,	   |
				不建议当作项目的一部分来看	  |
|											|
|											|
|											|
|											|
---------------------------------------------

#基于angular+jsonp+豆瓣api的电影网站

#记录项目中出现的小点

单页面应用程序

#各文件作用(根目录)
	.bowerrc 		-> 	bower包管理工具将其下载的包放到哪里
	.editorconfig	->  程序编码规范,例如使用什么形式的缩进等
	.gitignore		->	项目提交到github上的时候忽略的文件
	bower.json		->	bower记录的项目的配置文件以及所需要的包 -> app/bower_components/
	package.json	->	npm记录的项目的配置文件以及所需要的包	-> node_modules/
	README.md		->	项目介绍以及做项目的我所记录的小的注意点


#app:
	bower_components 		-> 	bower包管理工具将其下载的包放到哪里
	datas					->  供测试用的假数据
	movie_detail 			->	电影详情页面
	movie_list				->	电影路由的各页面
	

#需要注意的:
	index-async.html     异步加载包
	load.html   自己编写的简易异步加载包

#jsonp_detail 不属于项目,只是另外提出来分析jsonp的情况,手写了一个跨域的组件
	
