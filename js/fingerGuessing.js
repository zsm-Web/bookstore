var iGuesscount; //生命值
var iPlayerwincount; //玩家赢的次数
var iSystemwincount; //系统赢的次数
var iIntegral; //积分
document.getElementById("startgame").addEventListener("click", start);
//开始游戏进行初始化设置。
function start() {
    iGuesscount = 10;
    iPlayerwincount = 0;
    iSystemwincount = 0;
    iIntegral = 0;
    document.getElementById("guesscount").textContent = iGuesscount.toString();
    document.getElementById("playerwincount").textContent = iPlayerwincount.toString();
    document.getElementById("systemwincount").textContent = iSystemwincount.toString();
    document.getElementById("integral").textContent = iIntegral.toString();
    document.getElementById("start").style.display = "none";
    document.getElementById("display").style.display = "flex";
    document.getElementById("select").style.display = "flex";
    document.getElementById("system").src = "images/noselect.jpg";
    document.getElementById("player").src = "images/noselect.jpg";
}
document.getElementById("playerselect1").addEventListener("click", function () {
    submitguess(1);
},false);
document.getElementById("playerselect2").addEventListener("click", function () {
    submitguess(2);
},false);
document.getElementById("playerselect3").addEventListener("click", function () {
    submitguess(3);
},false);
//计算系统赢的次数。
function fSystemwin() {
    iSystemwincount++;
    document.getElementById("systemwincount").textContent = iSystemwincount.toString();
}
//计算玩家赢的次数。
function fPlayerwin() {
    iPlayerwincount++;
    document.getElementById("playerwincount").textContent = iPlayerwincount.toString();
}
//计算积分。
function integral(add) {
    iIntegral += add;
    document.getElementById("integral").textContent = iIntegral.toString();
}
//根据玩家选择进行处理。
function submitguess(guess) {
    system = Math.floor(Math.random() * 3 + 1);
    document.getElementById("system").src = "images/" + system.toString() + "1.jpg";
    document.getElementById("player").src = "images/" + guess.toString() + ".jpg";
    if (guess == 1) {
        if (system == 1) integral(1)
        if (system == 2) fSystemwin()
        if (system == 3) {
            fPlayerwin();
            integral(3)
        }
    }
    if (guess == 2) {
        if (system == 1) {
            fPlayerwin();
            integral(3)
        }
        if (system == 2) integral(1)
        if (system == 3) fSystemwin()
    }
    if (guess == 3) {
        if (system == 1) fSystemwin()
        if (system == 2) {
            fPlayerwin();
            integral(3)
        }
        if (system == 3) integral(1)
    }
    iGuesscount--;
    document.getElementById("guesscount").textContent = iGuesscount.toString();
    //生命值为0，游戏结束并处理。
    if (iGuesscount == 0) {
        document.getElementById("start").style.display = "none";
        document.getElementById("display").style.display = "none";
        document.getElementById("select").style.display = "none";
        var h2 = document.createElement('h2');
        h2.textContent = "本次游戏你战胜了系统" + iPlayerwincount.toString() + "次，胜率" + (iPlayerwincount / 10 * 100).toString() + "%，继续加油！";
        h2.setAttribute("id", "overmessage");
        document.getElementById('over').appendChild(h2);
    }
}
document.getElementById("over").addEventListener("click", end,false);
//回到游戏开始。
function end() {
    document.getElementById("start").style.display = "flex";
    var oH2 = document.getElementById("overmessage");
    oH2.parentNode.removeChild(oH2);
}
