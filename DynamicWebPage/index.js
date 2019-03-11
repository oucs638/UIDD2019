let backgroungImg = [
    "./res/background/backgroundNW.png",
    "./res/background/backgroundWW.png",
    "./res/button/display0.png",
    "./res/button/display1.png",
    "./res/button/display2.png",
    "./res/button/display3.png",
    "./res/button/display4.png"
];
let buttonImg = [
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
    "./res/button/choice3.png"
];

$(document).ready(() => {
    document.getElementById("backBackgroundImg").src = backgroungImg[1];
    document.getElementById("top_left_btn_img").src = buttonImg[0];
    document.getElementById("top_right_btn_0_img").src = buttonImg[1];
    document.getElementById("top_right_btn_1_img").src = buttonImg[2];
    document.getElementById("changeFoodColor_btn_img").src = buttonImg[4];
});


// create a PIXI.Application and append view to canvas
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
let choiceCanvas = document.getElementById("middle_center_right_canvas");
let app = new PIXI.Application({
    top: choiceCanvas.offsetTop,
    left: choiceCanvas.offsetLeft,
    width: choiceCanvas.offsetWidth,
    height: choiceCanvas.offsetHeight,
    antialias: true,
    transparents: true,
    backgroundColor: 0xFFFFFF,
    resolution: 1,
    view: choiceCanvas
});
app.renderer.view.style.position = "relative";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;

//add background img
let appBackground = PIXI.Sprite.fromImage(backgroungImg[0]);
appBackground.y = - choiceCanvas.offsetTop;
appBackground.x = - choiceCanvas.offsetLeft;
appBackground.width = document.body.offsetWidth;
appBackground.height = document.body.offsetHeight;
app.stage.addChild(appBackground);

// add four buckets
let bucketYunit = app.screen.height * 0.4;
let bucketXunit = app.screen.width * 0.5;
let bucketYcorrect = bucketYunit * 0.025;
let bucketXcorrect = bucketXunit * 0.025;
let bucketSizeCorrect = 0.95;
let bucket = new Array();
for (let i = 0; i <= 3; i++) {
    bucket[i] = new PIXI.Sprite.fromImage(buttonImg[i + 9]);
    bucket[i].alpha = 0.2;
    bucket[i].width = bucketXunit * bucketSizeCorrect;
    bucket[i].height = bucketYunit * bucketSizeCorrect;
    bucket[i].y = (i <= 1) ? bucketYcorrect : (bucketYcorrect + bucketYunit);
    bucket[i].x = ((i % 2) == 0) ? bucketXcorrect : (bucketXcorrect + bucketXunit);
    bucket[i].isCovered = (x, y) => {
        return (!(y >= bucket[i].y && y <= (bucket[i].y + bucket[i].height)))
            ? false : (!(x >= bucket[i].x && x <= (bucket[i].x + bucket[i].width)))
                ? false : true;
    };
    app.stage.addChild(bucket[i]);
}

// add four choices
let choiceYunit = app.screen.height * 0.2;
let choiceXunit = app.screen.width * 0.25;
let choiceYcorrect = choiceYunit * 0.025;
let choiceXcorrect = choiceXunit * 0.025;
let choiceSizeCorrect = 0.95;
let choice = new Array();
for (let i = 0; i <= 3; i++) {
    choice[i] = new PIXI.Sprite.fromImage(buttonImg[i + 9]);
    choice[i].interactive = true;
    choice[i].buttinMode = true;
    choice[i].anchor.set(0.5);  // BE CAREFUL
    choice[i].width = choiceXunit * choiceSizeCorrect;
    choice[i].height = choiceYunit * choiceSizeCorrect;
    choice[i].y = choiceYunit * 0.5 + bucketYunit * 2 + choiceYcorrect;
    choice[i].x = choiceXunit * (i + 0.5) + choiceXcorrect;
    choice[i].posY = choice[i].y;
    choice[i].posX = choice[i].x;
    choice[i].tags = i;
    choice[i]
        .on('pointerdown', choiceOnDragStart)
        .on('pointerup', choiceOnDragEnd)
        .on('pointerupoutside', choiceOnDragEnd)
        .on('pointermove', choiceOnDragMove);
    app.stage.addChild(choice[i]);
}
let choiceRemain = 4;

function choiceOnDragStart(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function choiceOnDragEnd() {
    this.alpha = 1;
    // console.log(this.posX + " " + this.posY);
    // console.log(bucket[this.tags].isCovered(this.x, this.y));
    if (bucket[this.tags].isCovered(this.x, this.y)) {
        this.x = this.posX;
        this.y = this.posY;
        console.log("TEST");
        bucket[this.tags].alpha = 1;
        app.stage.removeChild(this);
        choiceRemain -= 1;
        if (choiceRemain == 0) { changePage(); }
    } else {
        this.x = this.posX;
        this.y = this.posY;
    }
    this.dragging = false;
    this.data = null;
}

function choiceOnDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = (newPosition.x <= (choiceXunit * 0.5))
            ? (choiceXunit * 0.5) : (newPosition.x >= (app.screen.width - choiceXunit * 0.5))
                ? (app.screen.width - choiceXunit * 0.5) : newPosition.x;
        this.y = (newPosition.y <= (choiceYunit * 0.5))
            ? (choiceYunit * 0.5) : (newPosition.y >= (app.screen.height - choiceYunit * 0.5))
                ? (app.screen.height - choiceYunit * 0.5) : newPosition.y;
    }
}

function changePage() {
    $(".page0").css("display", "none");
    $(".page1").css("display", "flex");
    document.getElementById("backBackgroundImg").src = backgroungImg[0];
    document.getElementById("displayImg0").src = backgroungImg[2];
    // document.getElementById("showPriceImg0").src = buttonImg[];
    // document.getElementById("addToCartBtnImg0").src = buttonImg[];
    document.getElementById("displayImg1").src = backgroungImg[3];
    // document.getElementById("showPriceImg1").src = buttonImg[];
    // document.getElementById("addToCartBtnImg1").src = buttonImg[];
    document.getElementById("displayImg2").src = backgroungImg[4];
    // document.getElementById("showPriceImg2").src = buttonImg[];
    // document.getElementById("addToCartBtnImg2").src = buttonImg[];
    document.getElementById("displayImg3").src = backgroungImg[5];
    // document.getElementById("showPriceImg3").src = buttonImg[];
    // document.getElementById("addToCartBtnImg3").src = buttonImg[];
    document.getElementById("displayImg4").src = backgroungImg[6];
    // document.getElementById("showPriceImg4").src = buttonImg[];
    // document.getElementById("addToCartBtnImg4").src = buttonImg[];
}