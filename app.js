var express = require('express')
var port = process.env.PORT || 3000;
var bodyParser=require('body-parser')// 将表单数据进行格式化
var mongoose = require('mongoose');
var Movie = reuqire('./models/movie');
var path = require('path');
var app = express()

mongoose.connect('mongodb://localhost/imooc');

app.set('views','./views/pages')
app.set('view engine','jade')
app.use(bodyParser());
app.use(express.static(path.join(__dirname,"bower_components")));
app.listen(port)

console.log('imooc started on port '+port);

// index page
app.get('/',function(req,res){
	movie.fetch(function(err,res){
		if(err){
			console.log(err);
		}
		res.render('index',{
			title:'imooc 首页',
			movies: movies
		})
	})
	// res.render('index',{
	// 	title:'imooc 首页',
	// 	movies:[{
	// 		title:"机械战警",
	// 		_id:1,
	// 		poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
	// 	},{
	// 		title:"机械战警",
	// 		_id:2,
	// 		poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
	// 	},{
	// 		title:"机械战警",
	// 		_id:3,
	// 		poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
	// 	},{
	// 		title:"机械战警",
	// 		_id:4,
	// 		poster:"http://r3.ykimg.com/05160000530EEB63675839160D0B79D5"
	// 	}]
	// })
})
// detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'imooc 详情页',
		movie:{
			doctor:'斯皮尔·伯格',
			country:'美国',
			title:'机械战警',
			poster:'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language:'英语',
			flash:'http://player.youku.com/player.php/sid/XNjS1Njc0NTUy/v.swf',
			summary:"本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。本故事纯属虚构，如有雷同，纯属抄袭。"


		}
	})
})
// admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'imooc 后台录入页',
		movie:{
			title:'',
			doctor:'',
			country:'',
			year:'',
			poster:'',
			flash:'',
			summary:'',
			language:''
		}
	})
})
// list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'imooc 列表页',
		movies:[
			{
				title:'机械战警',
				_id: 1,
				doctor:'斯皮尔·伯格',
				country:'美国',
				year: 2014,
				language:'英语',
				flash: 'http://palyer.youku.com/player.php/sid/XNjS1Njc0NTUy/v.swf'

			},
		]
	})
})