$(function(){
	// 左侧导航栏
	var datas = [
    ["Redmi 9","腾讯黑鲨游戏手机3","Redmi 8A","小米移动 电话卡"],
    ["小米电视 大师 65英寸OLED","小米电视5 75英寸","全面屏电视Pro 55英寸","小米电视4A 58英寸"],
    ["RedmiBook 13","显示器"],
    ["冰箱","微波炉","电磁炉","插线板"],
    ["手环5NFC","滑板车","无线车充"],
    ["打印机","摄像机","小爱音箱"],
    ["移动电源","手机壳"],
    ["洗手机","体脂称","婴儿推车"],
    ["小爱音箱Art","Redmi音箱","蓝牙音箱"],
    ["小背包","床垫","驱蚊器"]
	];

	var strStart = "<div class= 'item' style = 'display:block'>";
	var newStr = "";
	var strEnd = "</div>";

	for(var i=0;i<datas.length;i++){
		newStr += strStart;
		for(var j=0;j<datas[i].length;j++){
			newStr += `
			<ul>
				<li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
                <li><a href="#"><img src="images/nav_imgs/${datas[i][j]}.png">${datas[i][j]}</a></li>
			</ul>
			`
		}
		newStr += strEnd;
	}

	$(".detail").append(newStr);
	$(".main .banner .nav").mouseover(function() {
		$(".detail").css({"display" : "block"});
		$(".nav .nav_title li").mouseover(function() {
			var index = $(this).index()+1;
			$(".detail .item").eq(index).show().siblings(".item").hide()
		});
	});

	$(".nav").mouseout(function() {
		$(".detail").hide();
	});








	// 闪购
	var iflashbuyDatas = [
	    {	
	    	imgNum: "01",
	        pro_name:  "小米小爱音箱 Play（白色）量产版 白色",
	        pro_desc:  "听音乐、语音遥控家电",
	        old_price: "99元",
	        new_price: "169元"
	    },{
	    	imgNum: "02",
	        pro_name:  "米家扫拖一体机器人 白色",
	        pro_desc:  "扫得干净，拖得彻底",
	        old_price: "1599元",
	        new_price: "1999元"
	    },{
	    	imgNum: "03",
	        pro_name:  "小米米家智能门锁 标准碳素黑",
	        pro_desc:  "一体化活体指纹识别，多种开锁方式",
	        old_price: "1199元",
	        new_price: "1299元"
	    },{
	    	imgNum: "04",
	        pro_name:  "MIJOY 抽纸青春版 24包/箱 ",
	        pro_desc:  "精选原生竹浆，健康环保",
	        old_price: "27.9元",
	        new_price: "32.9元"
	    },{
	    	imgNum: "05",
	        pro_name:  "米家两门冰箱 160L 银色",
	        pro_desc:  "小巧能装，速冻养鲜",
	        old_price: "929元",
	        new_price: "1099元"
	    },{
	    	imgNum: "06",
	        pro_name:  "巨省电 | 小米新1级空调X 1.5匹",
	        pro_desc:  "变频节能巨省电，自清洁",
	        old_price: "2099元",
	        new_price: "2399元"
	    },{
	    	imgNum: "07",
	        pro_name:  "小米AI音箱",
	        pro_desc:  "听音乐、语音遥控家电",
	        old_price: "199元",
	        new_price: "299元"
	    },{
	    	imgNum: "08",
	        pro_name:  "17PIN 星果杯 樱花粉",
	        pro_desc:  "随心随行，悦饮随心",
	        old_price: "99元",
	        new_price: "139元"
	    },{
	    	imgNum: "09",
	        pro_name:  "小米移动电源10000mAh高配 灰色",
	        pro_desc:  "轻薄设计，轻松出行",
	        old_price: "129元",
	        new_price: "149元"
	    },{
	    	imgNum: "10",
	        pro_name:  "米家手持无线吸尘器1C 白色",
	        pro_desc:  "吸力续航双强劲，清洁小怪兽",
	        old_price: "899元",
	        new_price: "999元"
	    },{
	    	imgNum: "11",
	        pro_name:  "米家扫拖一体机器人 白色",
	        pro_desc:  "扫得干净，拖得彻底",
	        old_price: "1599元",
	        new_price: "1999元"
	    },{
	    	imgNum: "12",
	        pro_name:  "圈厨多功能涮烤锅 黑色火锅盘",
	        pro_desc:  "深浅双盘多用途",
	        old_price: "329元",
	        new_price: "399元"
	    },{
	    	imgNum: "13",
	        pro_name:  "米家落地扇 白色",
	        pro_desc:  "静享智能轻风",
	        old_price: "199元",
	        new_price: "219元"
	    },{
	    	imgNum: "14",
	        pro_name:  "小米曲面显示器 34英寸 黑",
	        pro_desc:  "超宽大环绕显示屏",
	        old_price: "2199元",
	        new_price: "2499元"
	    },{
	    	imgNum: "15",
	        pro_name:  "自清洁 | 米家互联网立式空调 2匹",
	        pro_desc:  "一级能效更省电，自清洁",
	        old_price: "3499元",
	        new_price: "4299元"
	    },{
	    	imgNum: "16",
	        pro_name:  "米家空气净化器Pro",
	        pro_desc:  "大空间，快循环",
	        old_price: "999元",
	        new_price: "1499元"
	    },{
	    	imgNum: "17",
	        pro_name:  "小米手环4 石墨黑",
	        pro_desc:  "大屏彩显，20天超长续航",
	        old_price: "149元",
	        new_price: "169元"
	    },{
	    	imgNum: "18",
	        pro_name:  "小米路由器4C 白色",
	        pro_desc:  "300M单频，高增益4天线",
	        old_price: "59元",
	        new_price: "99元"
	    },{
	    	imgNum: "19",
	        pro_name:  "Fun Home保温泡茶杯（茶水分离） 白色 520ml",
	        pro_desc:  "茶水分离，长效保温",
	        old_price: "79元",
	        new_price: "99元"
	    },{
	    	imgNum: "20",
	        pro_name:  "最生活毛巾·Air（10条装） 白色+素蓝",
	        pro_desc:  "给生活一条好毛巾",
	        old_price: "99元",
	        new_price: "169元"
	    },{
	    	imgNum: "21",
	        pro_name:  "Pinlo迷你三明治机 白色",
	        pro_desc:  "小巧身材，一机多用",
	        old_price: "109元",
	        new_price: "169元"
	    },{
	    	imgNum: "22",
	        pro_name:  "小米显示器1A 23.8英寸 黑色",
	        pro_desc:  "高清画质，超广视角",
	        old_price: "679元",
	        new_price: "699元"
	    },{
	    	imgNum: "23",
	        pro_name:  "小浪智能衣物消毒烘干机 白色 35L",
	        pro_desc:  "三重杀菌 柔热烘干",
	        old_price: "489元",
	        new_price: "549元"
	    },{
	    	imgNum: "24",
	        pro_name:  "小米米家智能门锁 磨砂金 霸王锁体 磨砂金",
	        pro_desc:  "适配霸王锁体，多种开锁方式",
	        old_price: "1499元",
	        new_price: "1799元"
	    },{
	    	imgNum: "25",
	        pro_name:  "8H多功能护颈枕U1 混灰色",
	        pro_desc:  "乳胶颗粒填充 ，舒适入睡",
	        old_price: "69元",
	        new_price: "79元"
	    },{
	    	imgNum: "26",
	        pro_name:  "悦米YM人体工学椅 白色",
	        pro_desc:  "健康坐姿，舒适体验",
	        old_price: "1199元",
	        new_price: "1499元"
	    },{
	    	imgNum: "27",
	        pro_name:  "米家扫拖机器人1C 白色",
	        pro_desc:  "能扫能拖，地面清洁交给我",
	        old_price: "1199元",
	        new_price: "1299元"
	    },{
	    	imgNum: "28",
	        pro_name:  "RedmiBook 16 i7 16G 512G MX350 灰色",
	        pro_desc:  "便携大屏，全“芯”超越",
	        old_price: "5499元",
	        new_price: "5699元"
	    },{
	    	imgNum: "29",
	        pro_name:  "最生活浴巾·Air（4条装） 白色+素蓝",
	        pro_desc:  "享用一条洁净好浴巾",
	        old_price: "169元",
	        new_price: "269元"
	    },{
	    	imgNum: "30",
	        pro_name:  "米家运动鞋4 花灰色 41",
	        pro_desc:  "轻盈若絮,弹若脱兔",
	        old_price: "189元",
	        new_price: "199元"
	    },{
	    	imgNum: "31",
	        pro_name:  "小米游戏鼠标 黑色",
	        pro_desc:  "掌中游戏利器，为真玩家而生",
	        old_price: "169元",
	        new_price: "199元"
	    },{
	    	imgNum: "32",
	        pro_name:  "小米手表 尊享版 曜石黑",
	        pro_desc:  "能打电话、能下载APP，才是真正的智能手表",
	        old_price: "1799元",
	        new_price: "1999元"
	    }
	];


	iflashbuyDatas.forEach(function( currentItem , currentIndex ){
		var newLi = $(`
				<li>
                    <a href="#">
                        <img src="images/shangou/iflashbuy${currentItem.imgNum}.jpg">
                        <p class="biaoti">${currentItem.pro_name}</p>
                        <p class="desc">${currentItem.pro_desc}</p>
                        <p class="price">
                        <span>${currentItem.old_price}</span>
                        <del>${currentItem.new_price}</del>
                            </p>
                    </a>
                </li>
			`)

		$(".iflashbuy .content .right ul").append( newLi )

	})
	var flag = true;
	var ag = 0;
	$(".iflashbuy .title .arrow #iflashbuy_r").click(function() {
			if(flag){
				flag = false;
				ag++
				if(ag <= 6){
					$(".iflashbuy .content .right ul").stop().animate({
						marginLeft : "-=992px"
						},1000);
					$(".iflashbuy .title .arrow #iflashbuy_l").removeClass("disabled")
				}else{
					$(".iflashbuy .title .arrow #iflashbuy_r").addClass("disabled")
					$(".iflashbuy .content .right ul").stop().animate({
						marginLeft : "-6944px"
						},1000);
				}
				flag = true;
			}

			
	});
	$(".iflashbuy .title .arrow #iflashbuy_l").click(function(e) {
			if(flag){
				flag = false;
				ag--;
				if(ag > 0){
					$(".iflashbuy .content .right ul").stop().animate({
						marginLeft : "+=992px"
						},1000);
					$(".iflashbuy .title .arrow #iflashbuy_r").removeClass("disabled")
				}else{
					ag=0;
					$(".iflashbuy .title .arrow #iflashbuy_l").addClass("disabled")
					$(".iflashbuy .content .right ul").stop().animate({
						marginLeft : "0px"
						},1000);
				}
				flag = true;
			}
			
	});










	// 家电
	$(".jiadian .title .nav a").eq(0).click(function() {
		$(".jiadian .title .nav a").eq(0).addClass("active")
		$(".jiadian .title .nav a").eq(1).removeClass("active")
		$(".jiadian .content .right ul").eq(0).removeClass("hide");
		$(".jiadian .content .right ul").eq(0).addClass("show");
		$(".jiadian .content .right ul").eq(1).removeClass("show");
		$(".jiadian .content .right ul").eq(1).addClass("hide");

		// console.log(000)
	});
	$(".jiadian .title .nav a").eq(1).click(function() {
		$(".jiadian .title .nav a").eq(1).addClass("active")
		$(".jiadian .title .nav a").eq(0).removeClass("active")
		$(".jiadian .content .right ul").eq(1).removeClass("hide");
		$(".jiadian .content .right ul").eq(1).addClass("show");
		$(".jiadian .content .right ul").eq(0).removeClass("show");
		$(".jiadian .content .right ul").eq(0).addClass("hide");

		// console.log(000)
	});



	// 回到顶端
	$(window).scroll(function() {
		if($(window).scrollTop() >= $(".iflashbuy").offset().top){
			$(".sidebar .backTop").stop().fadeIn();
		}else{
			$(".sidebar .backTop").stop().fadeOut();
		}
		$(".sidebar .backTop").click(function() {
			$("body,html").stop().animate({
				scrollTop : 0
			},1000);
		});
	});
	
})