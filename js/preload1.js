//监控所有图片的加载情况
var allImgSrcArr = [],
	allImgArr = document.getElementsByTagName("img"),
	i = 0,
	allImgLen = allImgArr.length,
	loadedImgCount = 0,
	loadThird = Math.round(allImgLen/3-1);

for (i=0; i<allImgLen; i++) {
	allImgSrcArr.push(allImgArr[i].src);
}
console.log(allImgLen);

var imgLoad = function (url) {
	var img = new Image();
	img.src = url;
	if (img.complete) {
		loadedImgCount++;
		getProgress(loadedImgCount);
		console.log(loadedImgCount);
	} else {
		img.onload = function () {
			loadedImgCount++;
			img.onload = null;
			getProgress(loadedImgCount);
			console.log(loadedImgCount);
		}
	} 
}

for (i=0,len=allImgSrcArr.length;i<len;i++) {
	imgLoad(allImgSrcArr[i]);
}

function getProgress(num){
	if (num>=loadThird&&num<loadThird*2) {
		$("#preloadNum").html("33%");
		$("#pg1").css({"display":"block"});
	}else if (num>=loadThird*2&&num<loadThird*3) {
		$("#preloadNum").html("66%");
		$("#pg1").css({"display":"block"});
		$("#pg2").css({"display":"block"});
	}else if (num==allImgLen) {
		$("#preloadNum").html("100%");
		$("#pg1").css({"display":"block"});
		$("#pg2").css({"display":"block"});
		$("#pg3").css({"display":"block"});
		$("#preloadBox").css({"display":"none"})
	}
}

console.log(loadedImgCount);
console.log(allImgLen);
// var loadedImgCount = 0;
// var IMG_COUNT = 92;
// var imgLoad = function (url) {
// 	var img = new Image();
// 	img.src = url;
// 	if (img.complete) {
// 		loadedImgCount++;
// 		// console.log(img.src+"已缓存加载完成");
// 		getProgress(loadedImgCount);
// 	} else {
// 		img.onload = function () {
// 			loadedImgCount++;
// 			// console.log(img.src+"加载完成");
// 			img.onload = null;
// 			// console.log(loadedImgCount);
// 			getProgress(loadedImgCount);
// 		};
// 	};
// };

// for (var i=0;i<allImgSrcArr.length;i++) {
// 	imgLoad(allImgSrcArr[i]);
// }

// function getProgress(num){
// 	if (num>=23&&num<46) {
// 		$("#pgNum").attr("src","assets/pg_num1.png");
// 		$("#pg>img:eq(1)").css({"display":"block"});
// 	}else if (num>=46&&num<69) {
// 		$("#pgNum").attr("src","assets/pg_num2.png");
// 		$("#pg>img:eq(1)").css({"display":"block"});
// 		$("#pg>img:eq(2)").css({"display":"block"});
// 	}else if (num>=69) {
// 		$("#pgNum").attr("src","assets/pg_num3.png");
// 		$("#pg>img:eq(1)").css({"display":"block"});
// 		$("#pg>img:eq(2)").css({"display":"block"});
// 		$("#pg>img:eq(3)").css({"display":"block"});
// 	}
// }

// $(window).on("touchstart", function(){
//     $("#myAudio").trigger("load");
//     $(this).off("touchstart");
// });