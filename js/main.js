$(function(){
	var aUrlArr = [];
	var aAbbrArr = [];
	var i = 0;
	var len = 100;
	var xlIndex = 1;
	var $xlResult = $("#xlResult");
	var $score = $("#score");
	var $header = $(".header");
	var $userSt = $("#userSt");
	var $userBu = $("#userBu");
	var $userJd = $("#userJd");
	var $getNow = $("#getNow");
	var $continue = $("#continue");
	var score = 0;
	var time = 19;
	for(i = 0; i < len; i++){
		var iRandom = Math.random();
		if (iRandom<0.33) {
			aUrlArr.push("assets/xl_st.png");
			aAbbrArr.push("st");
		}else if (iRandom<0.66) {
			aUrlArr.push("assets/xl_bu.png");
			aAbbrArr.push("bu");
		}else{
			aUrlArr.push("assets/xl_jd.png");
			aAbbrArr.push("jd");
		}
	}
	console.log(aUrlArr);
	console.log(aAbbrArr);

	$("#gameStartBtn").on("click",function(){
		$(".mask").css({"display":"none"});
		$(".gameStartBox").css({"display":"none"})
		$("#xlResult").attr({"src":aUrlArr[1]});
		barTimer = setInterval(function(){
			$("#time").html(time);
			if(time==0){
				window.clearInterval(barTimer);
				$(".mask").css({"display":"block"});
			}
			time = time-1;
		},1000);
		$("#timeBar").addClass("barAni");
	})

	$userSt.on("touchstart",function(event){
		var userChoose = "st";
		main(userChoose);
		event.preventDefault();
		$(this).on("touchmove",function(event){
			 event.preventDefault();
			 $(this).on("touchend",function(event){
			 	event.preventDefault();
			 })
		})
	});
	// $userSt.touchstart = function(){
	// 	alert(1);
	// }

	$userBu.on("touchstart",function(event){
		var userChoose = "bu";
		main(userChoose);
		event.preventDefault();
		$(this).on("touchmove",function(event){
			 event.preventDefault();
			 $(this).on("touchend",function(event){
			 	event.preventDefault();
			 })
		})
	});

	$userJd.on("touchstart",function(event){
		var userChoose = "jd";
		main(userChoose);
		event.preventDefault();
		$(this).on("touchmove",function(event){
			 event.preventDefault();
			 $(this).on("touchend",function(event){
			 	event.preventDefault();
			 })
		})
	});	

	function main (userChoose) {
		if((userChoose == "st" && aAbbrArr[xlIndex] == "st")||(userChoose == "bu" && aAbbrArr[xlIndex] == "bu")||(userChoose == "jd" && aAbbrArr[xlIndex] == "jd")){
			xlIndex++;
		}else if((userChoose == "st" && aAbbrArr[xlIndex] == "jd")||(userChoose == "jd" && aAbbrArr[xlIndex] == "bu")||(userChoose == "bu" && aAbbrArr[xlIndex] == "st")){
			xlIndex++;
			score++;
		}else{
			xlIndex++;
			score--;
		}
		$xlResult.attr({"src":aUrlArr[xlIndex]}).after("<img src="+aUrlArr[xlIndex]+" class='xlResultStyle xlResultAni'>");
		setTimeout(function(){
			$(".xlResultAni").remove();
		},300);
		$score.html(score);
	}
	
	function pause(){
		$("#timeBar").css({"animation-play-state":"paused"})
		window.clearInterval(barTimer);
	}
	function start(){
		$("#timeBar").css({"animation-play-state":"running"})
		barTimer = setInterval(function(){
			$("#time").html(time);
			if(time==0){
				window.clearInterval(barTimer);
			}
			time = time-1;
		},1000);
	}

	$(".time").on("click",pause);
	$(".star").on("click",start);
})
