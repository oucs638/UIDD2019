$(document).ready(() => {
    var bigback = document.getElementById("bigback");
    var leftImg = document.getElementById("leftImg");
    var rightImg_0 = document.getElementById("right_0");
    var rightImg_1 = document.getElementById("right_1");
    var rightImg_2 = document.getElementById("right_2");
    var rightImg_3 = document.getElementById("right_3");
    var rightBar = document.getElementById("rightBar");
    var step = Math.PI * 0.04;

    var radius = 30;
    var c0 = 0;
    var c1 = Math.PI * 0.25;
    var c2 = Math.PI * 0.5;
    var c3 = Math.PI * 0.75;

    rightImg_0.style.top = "" + (5 + radius * Math.sin(c0)) + "%";
    rightImg_0.style.left = "" + (5 + radius * Math.cos(c0)) + "%";
    rightImg_1.style.top = "" + (20 + radius * Math.sin(c1)) + "%";
    rightImg_1.style.left = "" + (40 + radius * Math.cos(c1)) + "%";
    rightImg_2.style.top = "" + (50 + radius * Math.sin(c2)) + "%";
    rightImg_2.style.left = "" + (5 + radius * Math.cos(c2)) + "%";
    rightImg_3.style.top = "" + (70 + radius * Math.sin(c3)) + "%";
    rightImg_3.style.left = "" + (40 + radius * Math.cos(c3)) + "%";


    var counter = 0;
    var loading = setInterval(() => {
        var temp = 95 - counter;
        bigback.style.left = "" + temp + "%";
        counter++;
        if (counter == 91) {
            $("#leftImg").css("display", "block");
            clearInterval(loading);
        }
    }, 10);

    counter = 0;
    var pop = setInterval(() => {
        var temp = 200 - counter;
        leftImg.style.left = "" + temp + "%";
        counter++;
        if (counter == 201) {
            clearInterval(pop);
            counter = 0;
            var cycle = setInterval(() => {
                $("#right_0").css("display", "block");
                $("#right_1").css("display", "block");
                $("#right_2").css("display", "block");
                $("#right_3").css("display", "block");
                var temp = step * counter;
                var tempR = (radius / 100) * (100 - counter);
                rightImg_0.style.top = "" + (5 + tempR * Math.sin(c0 + temp)) + "%";
                rightImg_0.style.left = "" + (5 + tempR * Math.cos(c0 + temp)) + "%";
                rightImg_1.style.top = "" + (20 + tempR * Math.sin(c1 + temp)) + "%";
                rightImg_1.style.left = "" + (40 + tempR * Math.cos(c1 + temp)) + "%";
                rightImg_2.style.top = "" + (50 + tempR * Math.sin(c2 + temp)) + "%";
                rightImg_2.style.left = "" + (5 + tempR * Math.cos(c2 + temp)) + "%";
                rightImg_3.style.top = "" + (70 + tempR * Math.sin(c3 + temp)) + "%";
                rightImg_3.style.left = "" + (40 + tempR * Math.cos(c3 + temp)) + "%";
                counter++;
                if (counter == 101) {
                    clearInterval(cycle);
                    counter = 0;
                    var t = 0, h = 0;
                    var sideBar = setInterval(() => {
                        $("#rightBar").css("display", "block");
                        t = 45 - 0.4 * counter;
                        h = 10 + 0.8 * counter;
                        rightBar.style.top = "" + t + "%";
                        rightBar.style.height = "" + h + "%";
                        counter++;
                        if (counter == 101) {
                            clearInterval(sideBar);
                        }
                    }, 10);
                }
            }, 10);
        }
    }, 10);



});