var nav=''+
'<nav class="navbar navbar-default" id="header" role="navigation">'+
    '<div class="container-fluid">'+
        '<div class="navbar-header">'+
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'+
            '<span class="sr-only">开启/关闭菜单</span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '</button>'+
            '<a class="navbar-brand-img" href="index.html"><img src="images/design.png" width="50" height="50" alt=""></a>'+
            '<a class="navbar-brand slogn hide-md">自助者,天助之.</a>'+
        '</div>'+
        '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
            '<ul class="nav navbar-nav">'+
                '<li class="index"><a href="#" target="_self"><i class="icon-home"></i> 首页</a></li>'+
                '<li class="contact"><a href="#"><i class="icon-phone"></i> 个人简介</a></li>'+
                '<li class="dropdown project">'+
                    '<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-book"></i> 作品展示 <span class="caret"></span></a>'+
                    '<ul class="dropdown-menu" role="menu">'+
                        '<li><a href="#"><i class="icon-book"></i> PC端</a></li>'+
                        '<li><a href="#"><i class="icon-book"></i> 响应式</a></li>'+
                        '<li><a href="#"><i class="icon-book"></i> WAP端</a></li>'+
                    '</ul>'+
                '</li>'+
                '<li class="about"><a href="#"><i class="icon-user"></i> 联系方式</a></li>'+
                '<li class="about"><a href="#"><i class="icon-user"></i> 我的微博</a></li>'+
            '</ul>'+
        '</div>'+
    '</div>'+
'</nav>';
document.write(nav);
