window.onload = function(){
	var oGameStartBtn = document.getElementById("gameStartBtn");
	var oUserSt = document.getElementById("userSt");
	var oUserBu = document.getElementById("userBu");
	var oUserJd = document.getElementById("userJd");
	var oMask = document.getElementsByClassName("mask")[0];
	var oGameStartBox = document.getElementsByClassName("gameStartBox")[0];
	var oHeader = document.getElementsByClassName("header")[0];
	var oXlResult = document.getElementById("xlResult");
	var touchNum = 0;
	var aUrlArr = getUrlArr();

	oGameStartBtn.onclick = function(){
		oMask.style.display = "none";
		oGameStartBox.style.display = "none";
	}

	oUserSt.addEventListener("touchstart",putJudge,false);
	oUserBu.addEventListener("touchstart",putJudge,false);
	oUserJd.addEventListener("touchstart",putJudge,false);

	function putJudge() {
		// alert(touchNum);
		oXlResult.src = aUrlArr[touchNum];
		touchNum++;
		console.log(touchNum);
		// alert(getUrlArr());
		changeXlResult()
	}

	function changeXlResult() {
		var xlClone = document.createElement("img");
		xlClone.src = oXlResult.src;
		xlClone.className = "xlResultStyle";
		oHeader.appendChild(xlClone);
		xlClone.className = "xlResultStyle xlResultAni"
		var timer = setTimeout(function(){
			oHeader.removeChild(oHeader.childNodes[0]);
		},300);
	}
}

function getUrlArr(){
	var aUrlArr = [];
	var i = 0;
	var len = 50;
	for(i = 0; i < len; i++){
		var iRandom = Math.random();
		if (iRandom<0.33) {
			aUrlArr.push("assets/xl_st.png");
		}else if (iRandom<0.66) {
			aUrlArr.push("assets/xl_bu.png");
		}else{
			aUrlArr.push("assets/xl_jd.png");
		}
	}
	return aUrlArr;
}

