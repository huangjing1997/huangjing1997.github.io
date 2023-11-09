function danmu() {
	if (location.pathname != '/message/' || document.body.clientWidth < 768) return //判断是否是留言板页面
	const Danmaku = new EasyDanmaku({
		page: '/message/', // 即留言板页面
		el: '#danmu', //弹幕挂载节点
		line: 5, //弹幕行数
		speed: 20, //弹幕播放速度
		hover: true,
		loop: true, //开启循环播放
	});
	
    //获取本地数据
	let data = saveToLocal.get('danmu')
	if (data) {
		Danmaku.batchSend(data, true);
	}else {
		let ls = []
		const {Query,User} = AV;
		AV.init({
			appId: '1dtpxH4l0IewaUlMhai57yX3-MdYXbMMI',
			appKey: 'r6HhYcXQXqZICyQGbl3a6Q8u',
			serverURL: 'https://valine.xyjblog.top'
		});
		const query = new AV.Query('Comment');
		query.equalTo('url', GetUrlRelativePath());
		query.find().then((comments) => {
			//console.log(comments)
			comments.forEach(i => {
				if(i.avatar == undefined){
					if(setAvatar(i.attributes.mail) == null){
						i.avatar = 'https://cravatar.cn/avatar/d615d5793929e8c7d70eab5f00f7f5f1?d=mp';
					}else{
						i.avatar = setAvatar(i.attributes.mail);
					}
				}
				ls.push({avatar: i.avatar, content: i.attributes.nick + '：' + i.attributes.comment});				
			});
			Danmaku.batchSend(ls, true);
			saveToLocal.set('danmu', ls, 0.02);
		});
	}
	document.getElementById('danmuBtn').innerHTML =
		`<button class="hideBtn" onclick="document.getElementById('danmu').classList.remove('hidedanmu')">显示弹幕</button> <button class="hideBtn" onclick="document.getElementById('danmu').classList.add('hidedanmu')">隐藏弹幕</button> `
  
}
danmu()
document.addEventListener("pjax:complete", danmu)

function GetUrlRelativePath() {
	var url = document.location.toString();
	var arrUrl = url.split("//");
	var start = arrUrl[1].indexOf("/");
	var relUrl = arrUrl[1].substring(start);
	if (relUrl.indexOf("?") != -1) {
		relUrl = relUrl.split("?")[0];
	}
	return relUrl;
}

function setAvatar(e){
	var avatar = null;
	var suffix = e.substring(e.indexOf("@")+1,e.length);
	if (suffix == "qq.com") {
		var prefix = e.replace(/@.*/, "");//前缀
		var pattern = /^\d+$/g;  //正则表达式
		var result = prefix.match(pattern);//match 是匹配的意思
		if (result !== null) {
			avatar = "//q1.qlogo.cn/g?b=qq&nk=" + prefix + "&s=100";
		}
	}
	return avatar;
}

