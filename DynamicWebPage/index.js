var backgroungImg = [
    "./res/background/backgroundNW.png",
    "./res/background/backgroundWW.png"
];
var buttonImg = [
    "./res/button/home.png",
    "./res/button/information.png",
    "./res/button/myfood.png",
    "./res/button/back.png",
    "./res/button/foodColor.png",
    "./res/button/bucket0.png",
    "./res/button/bucket1.png",
    "./res/button/bucket2.png",
    "./res/button/bucket3.png",
    "./res/button/choice0.png",
    "./res/button/choice1.png",
    "./res/button/choice2.png",
    "./res/button/choice3.png",
    "./res/button/display0.png",
    "./res/button/display1.png",
    "./res/button/display2.png",
    "./res/button/display3.png",
    "./res/button/display4.png"
];

$(document).ready(() => {
    document.getElementById("backBackgroundImg").src = backgroungImg[1];
    document.getElementById("top_left_btn_img").src = buttonImg[0];
    document.getElementById("top_right_btn_0_img").src = buttonImg[1];
    document.getElementById("top_right_btn_1_img").src = buttonImg[2];
    document.getElementById("changeFoodColor_btn_img").src = buttonImg[4];
    document.getElementById("bucket0").src = buttonImg[5];
    document.getElementById("bucket1").src = buttonImg[6];
    document.getElementById("bucket2").src = buttonImg[7];
    document.getElementById("bucket3").src = buttonImg[8];
    document.getElementById("choice0").src = buttonImg[9];
    document.getElementById("choice1").src = buttonImg[10];
    document.getElementById("choice2").src = buttonImg[11];
    document.getElementById("choice3").src = buttonImg[12];
});