$(function(){
	var $xlResult = $("#xlResult");
	var $xlIcon = $("#xlIcon");
	var $xlResultImg = $("#xlResult>img");
	var $xlIconImg = $("#xlIcon>img");
	var $score = $("#score");
	var $header = $(".header");
	var $userSt = $("#userSt");
	var $userBu = $("#userBu");
	var $userJd = $("#userJd");
	var $mask = $(".mask");
	var $win = $(".win");
	var $fail = $(".fail");
	var $packetBox = $(".packetBox");
	var $getNow = $("#getNow");
	var $continue = $("#continue");
	var barTimer = null;
	var score = 0;
	time = 9999;
	xlNow = null;

	var st = new Image();
	st.src = "assets/xl_st.png";
	st.className = "xlResultStyle xlResultAni";
	var bu = new Image();
	bu.src = "assets/xl_bu.png";
	bu.className = "xlResultStyle xlResultAni";
	var jd = new Image();
	jd.src = "assets/xl_jd.png";
	jd.className = "xlResultStyle xlResultAni";

	var correct = new Image();
	correct.src = "assets/correct_icon.png";
	correct.className = "xlIconStyle";
	var equal = new Image();
	equal.src = "assets/equal_icon.png";
	equal.className = "xlIconStyle";
	var error = new Image();
	error.src = "assets/error_icon.png";
	error.className = "xlIconStyle";

	$("#gameStartBtn").on("click",function(){
		$(".mask").css({"display":"none"});
		$(".gameStartBox").css({"display":"none"})
		main();
		$("#timeBar").addClass("barAni");
		clearInterval(barTimer);
		$("#time").html(time);
		time = time-1;
		barTimer = setInterval(function(){
			$("#time").html(time);
			if(time==0&&score<8){
				clearInterval(barTimer);
				$mask.css({"display":"block"});
				$fail.css({"display":"block"});
			}else if(time==0){
				clearInterval(barTimer);
			}
			time = time-1;
		},1000);
	})

	function main() {
		changeXl();
		$userSt.on("touchstart",function(){
			var userChoose = "st";
			judge(userChoose);
			changeXl();
		})
		$userSt.on("touchmove",function(event){
			event.preventDefault();
		})
		$userSt.on("touchend",function(event){
			event.preventDefault();
		})

		$userBu.on("touchstart",function(){
			var userChoose = "bu";
			judge(userChoose);
			changeXl();
		})
		$userBu.on("touchmove",function(event){
			event.preventDefault();
		})
		$userBu.on("touchend",function(event){
			event.preventDefault();
		})
		
		$userJd.on("touchstart",function(){
			var userChoose = "jd";
			judge(userChoose);
			changeXl();
		})
		$userJd.on("touchmove",function(event){
			event.preventDefault();
		})
		$userJd.on("touchend",function(event){
			event.preventDefault();
		})
	}

	function changeXl() {
		var $xlResultImg = $("#xlResult>img");
		$xlResultImg.remove();
		var iRandom = Math.random();
		var iRandom1 = Math.random();
		if (iRandom<0.33) {
			$xlResult.append(st);
			xlNow = "st";
		} else if (iRandom<0.66) {
			$xlResult.append(bu);
			xlNow = "bu";
		} else {
			$xlResult.append(jd);
			xlNow = "jd";
		}
	}

	function judge(userChoose){
		var $xlIconImg = $("#xlIcon>img");
		if((userChoose == "st" && xlNow == "st")||(userChoose == "bu" && xlNow == "bu")||(userChoose == "jd" && xlNow == "jd")){
			$xlIconImg.remove();
			$xlIcon.append(equal);
		}else if((userChoose == "st" && xlNow == "jd")||(userChoose == "jd" && xlNow == "bu")||(userChoose == "bu" && xlNow == "st")){
			score++;
			$xlIconImg.remove();
			$xlIcon.append(correct);
		}else{
			score--;
			$xlIconImg.remove();
			$xlIcon.append(error);
		}
		$score.html(score);
		judgeScore(score);
	}

	function judgeScore(score){
		// console.log(score);
		if(score == 8){
			$("#winScore").html(8);
			$(".ticket").html("满100减20");
			pause();
			$mask.css({"display":"block"});
			$win.css({"display":"block"});
		}else if(score == 15){
			$("#winScore").html(15);
			$(".ticket").html("满50减10");
			pause();
			$mask.css({"display":"block"});
			$win.css({"display":"block"});
		}else if(score ==22){
			$("#winScore").html(22);
			$(".ticket").html("满20减10");
			pause();
			$mask.css({"display":"block"});
			$win.css({"display":"block"});
		}
		$getNow.on("click",function(){
			$win.css({"display":"none"});
			$packetBox.css({"display":"block"})
		})
		$continue.on("click",function(){
			$mask.css({"display":"none"});
			$win.css({"display":"none"});
			start();
		})

		function pause(){
			$("#timeBar").css({"animation-play-state":"paused"})
			clearInterval(barTimer);
		}
		function start(){
			$("#timeBar").css({"animation-play-state":"running"})
			clearInterval(barTimer);
			barTimer = setInterval(function(){
				$("#time").html(time);
				if((time==0&&score<8)||(time==0&&score<15)||(time==0&&score<22)){
					clearInterval(barTimer);
					$mask.css({"display":"block"});
					$fail.css({"display":"block"});
				}else if(time==0&&score>=8){
					$getNow.click();
					clearInterval(barTimer);
				}
				time = time-1;
			},1000);
		}
	}
	$("#share").on("click",function(){
		window.location.reload();
	})
})