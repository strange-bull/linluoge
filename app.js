//引入express
var express=require('express');
//引入图标模块
var favicon = require('serve-favicon');
//引入日志模块
var morgan = require('morgan');
//引入post
var bodyParser = require('body-parser');
//引入cookie
var cookie=require('cookie-parser');
//引入session
var session=require('express-session');
//引用路由
// var loginRouter=require('./routers/loginRouter'); 
// var communityRouter=require('./routers/communityRouter');   
// var forumRouter=require('./routers/forumRouter');
// var goodsCategoryRouter=require('./routers/goodsCategoryRouter');
// var goodsRouter=require('./routers/goodsRouter');
// var indexRouter=require('./routers/indexRouter');
// var mycenterRouter=require('./routers/mycenterRouter');
// var personalCenterRouter=require('./routers/personalCenterRouter');
// var portraitDetailsRouter=require('./routers/portraitDetailsRouter');
// var submitOrderRouter=require('./routers/submitOrderRouter');
// var worksRouter=require('./routers/worksRouter');
// var commodityDetailsRouter=require('./routers/commodityDetailsRouter');

//创建服务
var app=express();
//配置浏览器访问的静态文件目录
app.use(express.static(__dirname+'/public'));
//使用cookie
app.use(cookie());
//配置session
app.use(session({
    secret:'emili', //密钥 签名 字符串随便
    name:'user', //cookie的key  这个东西可以不写
    resave:true,  // 布尔值 是否重新保存
    rolling:true,//布尔值 是否更新失效时间
    cookie:{maxAge:10000} //失效的时间 毫秒数
}));
//拦截所有的路由，先判断session
app.all('*',function (req,res,next) {
    if(req.session.user){
        next();
    }else{
        // console.log(req.url);//请求的路径
        // console.log(req.headers.referer)//请求发出的地址
        if(req.url=='/pages/login.html' || req.headers.referer=='http://localhost:12315/pages/login.html'){//如果他是登录的接口
            next();
        }else{
            // res.redirect('http://localhost:12315/pages/login.html');
        }
    }
});
//使用路由
// app.use(loginRouter);
// app.use(communityRouter);
// app.use(forumRouter);
// app.use(goodsCategoryRouter);
// app.use(goodsRouter);
// app.use(indexRouter);
// app.use(mycenterRouter);
// app.use(personalCenterRouter);
// app.use(portraitDetailsRouter);
// app.use(submitOrderRouter);
// app.use(worksRouter);
// app.use(commodityDetailsRouter);

//使用图标模块
app.use(favicon(__dirname+'/public/favicon.ico'));
//使用日志
app.use(morgan('dev'));
//配置post
app.use(bodyParser.urlencoded({ extended: false }));//设置请求头的类型
app.use(bodyParser.json());//数据以json的形式传输

//给服务配置端口号
app.listen(12315);

/* ----------------------------ws--------------------------------- */
//引入ws
var ws=require('ws');

var arr=[]; //创建一个数组，存ws用户


//创建了ws服务器
// var wsServer=new ws.Server({host:'192.168.43.222',port:13141});
var wsServer=new ws.Server({host:'172.16.11.60',port:13141});
//当别人连接过来的时候有反应
wsServer.on('connection',function (WS) {
	// 在这里创建一个服务器接收来自用户发送的信息并立刻转发
});

