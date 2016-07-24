module.export = function(grunt){
	grunt.initConfig({
		watch:{
			jade:{
				file:['views/**'],
				options:{
					livereload:true // 文件改动时重新启动这个服务
				}
			},
			js:{
				files:['public/js/**','models/**/*.js','schemas/**/*.js'],
				// tasks:['jshint'],// 语法检查
				options:{
					livereload:true
				}
			}
		},
		nodemon:{
			dev:{
				file:'app.js',
				args:[],
				ignoredFiles:['READ.md','node_modules/**','.DS_Store'],
				watchedExtensions:['js'],
				watchedFolders:['app','config'],
				debug:true,
				delayTime:1,
				env:{
					port:3000
				},
				cwd:__dirname // 目录是当前目录
			}
		},
		concurrent:{
			tasks:['nodemon','watch'],
			options:{
				logConcurrentOutput:true
			}
		}
	})

	grunt.loadNpmTask('grunt-contrib-watch') //文件添加修改删除将重新执行
	grunt.loadNpmTask('grunt-nodemon')  // 实时监听app.js
	grunt.loadNpmTask('grunt-concurrent') // 优化慢任务（sass，less的编译）构建的时间，同时可以跑多个阻塞的任务，比如说watch和nodemon。

	grunt.option('force'，true)// 容错，不会因为错误而中断整个grunt进程

	grunt.registerTask('default',['concurrent']);

}