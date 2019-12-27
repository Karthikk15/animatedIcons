var AnimateIcon = /** @class */ (function () {
    function AnimateIcon() {
        this.checked = false;
        this.options = {};
        this.timeline = new mojs.Timeline();
    }
    AnimateIcon.prototype.animateElement = function (element, options, color, isVote) {
        this.element = element;
        this.options = options;
        for (var i = 0, len = this.options.tweens.length; i < len; ++i) {
            this.timeline.add(this.options.tweens[i]);
        }
        if (this.checked && !isVote) {
            this.disableELement(element);
        }
        else {
            this.enableELement(element, color, isVote);
            this.timeline.replay();
        }
        this.checked = !this.checked;
        // });
    };
    AnimateIcon.prototype.disableELement = function (element) {
        element.style.color = 'black';
    };
    AnimateIcon.prototype.enableELement = function (element, color, isVote) {
        if (isVote) {
            element = element.querySelector('span.icobutton__text');
            element.innerHTML = (Number(element.innerHTML) + 1).toString();
        }
        element.style.color = color;
    };
    return AnimateIcon;
}());
var likeBtn = document.getElementById('container').firstElementChild;
var iconLike;
var likeIconOption;
var iconSpan;
var hearButn = likeBtn.nextElementSibling;
var voteButn = hearButn.nextElementSibling;
likeBtn.addEventListener('click', function () {
    this.style.color = 'blue';
    if (typeof iconLike === "undefined") {
        iconLike = new AnimateIcon();
        iconSpan = this.firstElementChild;
        likeIconOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'cross',
                        stroke: '#C0C1C3',
                        opacity: 0.6,
                        radius: 15,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'circle',
                    radius: { 0: 60 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay: 300,
                    easing: mojs.easing.sin.out
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'circle',
                    radius: { 0: 60 },
                    fill: 'transparent',
                    stroke: '#26B026',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay: 500,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        iconSpan.classList.add('jello');
                    }
                })
            ]
        };
    }
    else {
        iconSpan.classList.remove('jello');
    }
    iconLike.animateElement(this, likeIconOption, this.style.color, false);
});
var heartIcon;
var heartOptions;
var spanHeart;
hearButn.addEventListener('click', function () {
    this.style.color = '#F60000';
    if (typeof heartIcon === "undefined") {
        heartIcon = new AnimateIcon();
        this.style.color = '#F60000';
        spanHeart = this.firstElementChild;
        heartOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 90 },
                    count: 6,
                    children: {
                        shape: 'curve',
                        stroke: '#D70000',
                        opacity: 0.6,
                        radius: 15,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        spanHeart.classList.add('heartBeat'); //  el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(0,0,1)';
                    }
                })
            ]
        };
    }
    else {
        spanHeart.classList.remove('heartBeat');
    }
    heartIcon.animateElement(this, heartOptions, this.style.color, false);
});
var iconVote;
var voteOptions;
var voteSpan;
voteButn.addEventListener('click', function () {
    this.style.color = '#002F00';
    if (typeof iconVote === "undefined") {
        iconVote = new AnimateIcon();
        voteSpan = this.firstElementChild;
        voteOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 95 },
                    fill: 'transparent',
                    stroke: '#02DD02',
                    strokeWidth: { 50: 0 },
                    opacity: 0.4,
                    duration: 1000,
                    delay: 100,
                    easing: mojs.easing.bezier(0, 1, 0.5, 1)
                }),
                // ring animation
                new mojs.Shape({
                    parent: this,
                    shape: 'zigzag',
                    radius: { 0: 30 },
                    fill: 'transparent',
                    stroke: '#02DD02',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    easing: mojs.easing.sin.in
                })
            ]
        };
    }
    iconVote.animateElement(this, voteOptions, this.style.color, true);
});
var mapBtn = voteButn.nextElementSibling;
var mapIcon;
var mapOptions;
var mapSpan;
var opacityCurve12 = mojs.easing.path('M0,100 L20,100 L20,1 L100,1');
var translationCurve12 = mojs.easing.path('M0,100h20V0c0,0,0.2,101,80,101');
mapBtn.addEventListener('click', function () {
    this.style.color = '#A80000';
    if (typeof mapIcon === "undefined") {
        mapIcon = new AnimateIcon();
        mapSpan = this.firstElementChild;
        mapOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    count: 2,
                    radius: { 10: 90 },
                    angle: 92,
                    top: '90%',
                    children: {
                        shape: 'line',
                        fill: '#1D0A0A',
                        scale: 1,
                        radius: { 40: 0 },
                        stroke: '#1D0A0A',
                        strokeWidth: { 4: 1 },
                        strokeLinecap: 'round',
                        opacity: 0.5,
                        duration: 500,
                        delay: 200,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // burst animation
                new mojs.Burst({
                    parent: this,
                    count: 3,
                    radius: { 10: 40 },
                    angle: 182,
                    top: '90%',
                    children: {
                        shape: 'line',
                        fill: '#1D0A0A',
                        opacity: 0.5,
                        scale: 1,
                        radius: { 10: 0 },
                        stroke: '#1D0A0A',
                        strokeWidth: { 4: 1 },
                        strokeLinecap: 'round',
                        duration: 600,
                        delay: 200,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // ring animation
                new mojs.Shape({
                    parent: this,
                    radius: { 40: 0 },
                    radiusY: { 20: 0 },
                    fill: '#1D0A0A',
                    stroke: '#1D0A0A',
                    strokeWidth: 1,
                    opacity: 0.3,
                    top: '90%',
                    duration: 400,
                    delay: 100,
                    easing: 'bounce.out'
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    easing: mojs.easing.bounce.out,
                    onUpdate: function (progress) {
                        var translationProgress = translationCurve12(progress);
                        mapSpan.style.WebkitTransform = mapSpan.style.transform = 'translate3d(0,' + -450 * translationProgress + '%,0)';
                        var colorProgress = opacityCurve12(progress);
                        mapSpan.style.color = '1D0A0A'; //colorProgress ? '#1D0A0A' : '#1D0A0A';
                    }
                })
            ]
        };
    }
    mapIcon.animateElement(this, mapOptions, this.style.color, false);
});
var dislikeBtn = mapBtn.nextElementSibling;
var dislikeIcon;
var disLikeOptions;
var disLikeSpan;
dislikeBtn.addEventListener('click', function () {
    this.style.color = '#F60000';
    if (typeof dislikeIcon === "undefined") {
        dislikeIcon = new AnimateIcon();
        disLikeSpan = this.firstElementChild;
        disLikeOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'cross',
                        stroke: '#D70000',
                        opacity: 0.4,
                        radius: 15,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // new mojs.Shape({
                //     parent: this,
                //     shape: 'cross',
                //     radius: { 0: 60 },
                //     fill: 'transparent',
                //     stroke: '#D70000',
                //     strokeWidth: { 10: 0 },
                //     opacity: 0.3,
                //     duration: 700,
                //     easing: mojs.easing.sin.out
                // }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        disLikeSpan.classList.add('fadeInUp');
                    }
                })
            ]
        };
    }
    else {
        disLikeSpan.classList.remove('fadeInUp');
    }
    dislikeIcon.animateElement(this, disLikeOptions, this.style.color, false);
});
var bellBtn = dislikeBtn.nextElementSibling;
var bellIcon;
var bellOptions;
var bellSpan;
bellBtn.addEventListener('click', function () {
    this.style.color = '#A09100';
    if (typeof bellIcon === "undefined") {
        bellIcon = new AnimateIcon();
        bellSpan = this.firstElementChild;
        bellOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 40 },
                    count: 8,
                    children: {
                        shape: 'zigzag',
                        radius: 10,
                        scale: { 0.8: 1 },
                        fill: 'none',
                        points: 7,
                        stroke: '#C5BD68',
                        strokeDasharray: '100%',
                        strokeDashoffset: { '-50%': '-90%' },
                        duration: 350,
                        delay: 100,
                        easing: 'quad.out',
                        isShowEnd: false
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        bellSpan.classList.add('swing');
                    }
                })
            ]
        };
    }
    else {
        bellSpan.classList.remove('swing');
    }
    bellIcon.animateElement(this, bellOptions, this.style.color, false);
});
var checkBtn = bellBtn.nextElementSibling;
var checkIcon;
var checkOptions;
var checkSpan;
checkBtn.addEventListener('click', function () {
    this.style.color = '#3B086C';
    if (typeof checkIcon === "undefined") {
        checkIcon = new AnimateIcon();
        checkSpan = this.firstElementChild;
        checkOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 40 },
                    count: 8,
                    children: {
                        shape: 'line',
                        radius: 10,
                        scale: { 0.8: 1 },
                        fill: 'none',
                        points: 7,
                        stroke: '#96FD00',
                        duration: 550,
                        delay: 100,
                        easing: 'quad.out',
                        isShowEnd: false
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        checkSpan.classList.add('pulse');
                    }
                })
            ]
        };
    }
    else {
        checkSpan.classList.remove('pulse');
    }
    checkIcon.animateElement(this, checkOptions, this.style.color, false);
});
var shwerBtn = checkBtn.nextElementSibling;
var shwerIcon;
var shwerOptions;
var shwerSpan;
shwerBtn.addEventListener('click', function () {
    this.style.color = '#2F15B3';
    if (typeof shwerIcon === "undefined") {
        shwerIcon = new AnimateIcon();
        shwerSpan = this.firstElementChild;
        shwerOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 40 },
                    count: 8,
                    degree: 235,
                    children: {
                        shape: 'line',
                        radius: 10,
                        scale: { 0.8: 1 },
                        fill: 'none',
                        points: 7,
                        stroke: 'black',
                        duration: 550,
                        delay: 100,
                        easing: 'quad.out',
                        isShowEnd: false
                    }
                }),
            ]
        };
    }
    shwerIcon.animateElement(this, shwerOptions, this.style.color, false);
});
var printBtn = shwerBtn.nextElementSibling;
var printIcon;
var printOptions;
var printSpan;
printBtn.addEventListener('click', function () {
    this.style.color = '#2F15B3';
    if (typeof printIcon === "undefined") {
        printIcon = new AnimateIcon();
        printSpan = this.firstElementChild;
        printOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 40 },
                    count: 4,
                    children: {
                        shape: 'circle',
                        fill: 'black',
                        duration: 550,
                        radius: 14,
                        delay: 100,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        printSpan.classList.add('shake');
                    }
                })
            ]
        };
    }
    else {
        printSpan.classList.remove('shake');
    }
    printIcon.animateElement(this, printOptions, this.style.color, false);
});
var mphoneBtn = printBtn.nextElementSibling;
var mphoneIcon;
var mphoneOptions;
var mphoneSpan;
mphoneBtn.addEventListener('click', function () {
    this.style.color = '#FF2318';
    if (typeof mphoneIcon === "undefined") {
        mphoneIcon = new AnimateIcon();
        mphoneSpan = this.firstElementChild;
        mphoneOptions = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    radius: { 0: 95 },
                    fill: 'transparent',
                    stroke: '#C0C1C3',
                    strokeWidth: { 50: 0 },
                    opacity: 0.4,
                    duration: 1000,
                    delay: 100,
                    easing: mojs.easing.bezier(0, 1, 0.5, 1),
                    isShowEnd: false
                }),
                // ring animation
                new mojs.Shape({
                    parent: this,
                    radius: { 0: 80 },
                    fill: 'transparent',
                    stroke: '#C0C1C3',
                    strokeWidth: { 40: 0 },
                    opacity: 0.2,
                    duration: 1800,
                    delay: 300,
                    easing: mojs.easing.bezier(0, 1, 0.5, 1),
                    isShowEnd: false
                }),
            ]
        };
    }
    mphoneIcon.animateElement(this, mphoneOptions, this.style.color, false);
});
var fireBtn = mphoneBtn.nextElementSibling;
var fireIcon;
var fireOption;
var fireSpan;
var shapeInSwril = {
    shape: 'circle',
    scale: { 0: 3 },
    y: { 20: -10 },
    duration: 1000,
    easing: 'sin.out'
};
fireBtn.addEventListener('click', function () {
    this.style.color = 'yellow';
    if (typeof fireIcon === "undefined") {
        fireIcon = new AnimateIcon();
        fireSpan = this.firstElementChild;
        fireOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 90 },
                    count: 6,
                    children: {
                        fill: '#AA3939',
                        opacity: 0.6,
                        radius: 15,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        fireSpan.classList.add('jello');
                    }
                })
            ]
        };
    }
    else {
        fireSpan.classList.remove('jello');
    }
    fireIcon.animateElement(this, fireOption, this.style.color, false);
});
var youTubeBtn = document.getElementById('youTube');
var youTubeLike;
var youTubeOption;
var youTubeSpan;
youTubeBtn.addEventListener('click', function () {
    this.style.color = 'red';
    if (typeof youTubeLike == "undefined") {
        youTubeLike = new AnimateIcon();
        youTubeSpan = this.firstElementChild;
        youTubeOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'rect',
                        stroke: '#C0C1C3',
                        opacity: 0.6,
                        radius: 15,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        youTubeSpan.classList.add('bounceIn');
                    }
                })
            ]
        };
    }
    else {
        youTubeSpan.classList.remove('bounceIn');
    }
    youTubeLike.animateElement(this, youTubeOption, this.style.color, false);
});
var dropboxBtn = document.getElementById('dropbox');
var dropbox;
var dropboxOption;
var dropboxSpan;
dropboxBtn.addEventListener('click', function () {
    this.style.color = 'blue';
    if (typeof dropbox == "undefined") {
        dropbox = new AnimateIcon();
        dropboxSpan = this.firstElementChild;
        dropboxOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'cross',
                        stroke: '#C0C1C3',
                        opacity: 0.6,
                        radius: 15,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'rect',
                    radius: { 0: 60 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay: 300,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        dropboxSpan.classList.add('flash');
                    }
                })
            ]
        };
    }
    else {
        dropboxSpan.classList.remove('flash');
    }
    dropbox.animateElement(this, dropboxOption, this.style.color, false);
});
var femaleIconBtn = document.getElementById('femaleIcon');
var femaleIcon;
var femaleIconOption;
var femaleIconSpan;
femaleIconBtn.addEventListener('click', function () {
    this.style.color = '#FE642E';
    if (typeof femaleIcon == "undefined") {
        femaleIcon = new AnimateIcon();
        femaleIconSpan = this.firstElementChild;
        femaleIconOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape: 'cross',
                    radius: { 0: 60 },
                    fill: 'transparent',
                    stroke: 'red',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay: 300,
                    easing: mojs.easing.sin.inout
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'zigzag',
                    radius: { 0: 50 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 10: 0 },
                    opacity: 1.0,
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        femaleIconSpan.classList.add('jello');
                    }
                })
            ]
        };
    }
    else {
        femaleIconSpan.classList.remove('jello');
    }
    femaleIcon.animateElement(this, femaleIconOption, this.style.color, false);
});
var moonIconBtn = document.getElementById('moonIcon');
var moonIcon;
var moonIconOption;
var moonIconSpan;
moonIconBtn.addEventListener('click', function () {
    this.style.color = '#58FAF4';
    if (typeof moonIcon == "undefined") {
        moonIcon = new AnimateIcon();
        moonIconSpan = this.firstElementChild;
        moonIconOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape: 'circle',
                    scale: { 0: 1.5 },
                    angle: { 0: 180 },
                    fill: 'transparent',
                    stroke: '#FE2E64',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    easing: mojs.easing.sin.out,
                    isShowEnd: false
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'cross',
                    radius: { 0: 50 },
                    fill: 'transparent',
                    stroke: '#FE2E64',
                    strokeWidth: { 10: 0 },
                    opacity: 1.0,
                    isShowEnd: false
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        moonIconSpan.classList.add('zoomOutLeft');
                    }
                })
            ]
        };
    }
    else {
        moonIconSpan.classList.remove('zoomOutLeft');
    }
    moonIcon.animateElement(this, moonIconOption, this.style.color, false);
});
var dataBaseIconBtn = document.getElementById('dataBaseIcon');
var dataBaseIcon;
var dataBaseIconOption;
var dataBaseIconSpan;
dataBaseIconBtn.addEventListener('click', function () {
    this.style.color = '#610B4B';
    if (typeof dataBaseIcon == "undefined") {
        dataBaseIcon = new AnimateIcon();
        dataBaseIconSpan = this.firstElementChild;
        dataBaseIconOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape: 'polygon',
                    scale: { 0: 1.5 },
                    angle: { 0: 180 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    easing: mojs.easing.sin.out,
                    isShowEnd: false
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'cross',
                    radius: { 0: 50 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 10: 0 },
                    opacity: 1.0,
                    isShowEnd: false
                }),
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 12,
                    children: {
                        shape: 'rect',
                        fill: 'red',
                        isShowEnd: false
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        dataBaseIconSpan.classList.add('jello');
                    }
                })
            ]
        };
    }
    else {
        dataBaseIconSpan.classList.remove('jello');
    }
    dataBaseIcon.animateElement(this, dataBaseIconOption, this.style.color, false);
});
var fileZipIconBtn = document.getElementById('fileZipIcon');
var fileZipIcon;
var fileZipIconOption;
var fileZipIconSpan;
fileZipIconBtn.addEventListener('click', function () {
    this.style.color = '#8A4B08';
    if (typeof fileZipIcon == "undefined") {
        fileZipIcon = new AnimateIcon();
        fileZipIconSpan = this.firstElementChild;
        fileZipIconOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape: 'rect',
                    scale: { 0: 1.5 },
                    angle: { 0: 180 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    easing: mojs.easing.sin.out,
                    isShowEnd: false
                }),
                // ring animation
                new mojs.Shape({
                    parent: this,
                    radius: { 40: 0 },
                    radiusY: { 20: 0 },
                    fill: '#1D0A0A',
                    stroke: '#1D0A0A',
                    strokeWidth: 1,
                    opacity: 0.3,
                    top: '90%',
                    duration: 400,
                    delay: 100,
                    easing: 'bounce.out',
                    isShowEnd: false
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        fileZipIconSpan.classList.add('heartBeat');
                    }
                })
            ]
        };
    }
    else {
        fileZipIconSpan.classList.remove('heartBeat');
    }
    fileZipIcon.animateElement(this, fileZipIconOption, this.style.color, false);
});
var gitIconBtn = document.getElementById('gitIcon');
var gitIcon;
var gitIconOption;
var gitIconSpan;
gitIconBtn.addEventListener('click', function () {
    this.style.color = 'Green';
    if (typeof gitIcon == "undefined") {
        gitIcon = new AnimateIcon();
        gitIconSpan = this.firstElementChild;
        gitIconOption = {
            tweens: [
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 10,
                    children: {
                        shape: 'polygon',
                        fill: 'red',
                    }
                }),
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 15,
                    children: {
                        shape: 'circle',
                        fill: 'yellow',
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        gitIconSpan.classList.add('fadeInRightBig');
                    }
                })
            ]
        };
    }
    else {
        gitIconSpan.classList.remove('fadeInRightBig');
    }
    gitIcon.animateElement(this, gitIconOption, this.style.color, false);
});
var headerIconBtn = document.getElementById('headerIcon');
var headerIcon;
var headerIconOption;
var headerIconSpan;
headerIconBtn.addEventListener('click', function () {
    this.style.color = 'Yellow';
    if (typeof headerIcon == "undefined") {
        headerIcon = new AnimateIcon();
        headerIconSpan = this.firstElementChild;
        headerIconOption = {
            tweens: [
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 5,
                    isShowEnd: false,
                    children: {
                        shape: 'rect',
                        fill: 'red',
                        isShowEnd: false,
                    }
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'polygon',
                    scale: { 0: 1.5 },
                    angle: { 0: 180 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.4,
                    easing: mojs.easing.sin.out,
                    isShowEnd: false,
                }),
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 8,
                    isShowEnd: false,
                    children: {
                        shape: 'equal',
                        fill: 'darkblue',
                        isShowEnd: false,
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        headerIconSpan.classList.add('lightSpeedIn');
                    }
                })
            ]
        };
    }
    else {
        headerIconSpan.classList.remove('lightSpeedIn');
    }
    headerIcon.animateElement(this, headerIconOption, this.style.color, false);
});
var plugIconBtn = document.getElementById('plugIcon');
var plugIcon;
var plugIconOption;
var plugIconSpan;
plugIconBtn.addEventListener('click', function () {
    this.style.color = '#00FFFF';
    if (typeof plugIcon == "undefined") {
        plugIcon = new AnimateIcon();
        plugIconSpan = this.firstElementChild;
        plugIconOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    radius: { 0: 95 },
                    fill: 'transparent',
                    stroke: '#C0C1C3',
                    strokeWidth: { 50: 0 },
                    opacity: 0.4,
                    duration: 1000,
                    delay: 100,
                    easing: mojs.easing.bezier(0, 1, 0.5, 1),
                    isShowEnd: false,
                }),
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 8,
                    isShowEnd: false,
                    children: {
                        shape: 'zigzag',
                        fill: 'darkbrown',
                        isShowEnd: false,
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        plugIconSpan.classList.add('rotateInDownLeft');
                    }
                })
            ]
        };
    }
    else {
        plugIconSpan.classList.remove('rotateInDownLeft');
    }
    plugIcon.animateElement(this, plugIconOption, this.style.color, false);
});
var wifiIconBtn = document.getElementById('wifiIcon');
var wifiIcon;
var wifiIconOption;
var wifiIconSpan;
wifiIconBtn.addEventListener('click', function () {
    this.style.color = 'red';
    if (typeof wifiIcon == "undefined") {
        wifiIcon = new AnimateIcon();
        wifiIconSpan = this.firstElementChild;
        wifiIconOption = {
            tweens: [
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 8,
                    isShowEnd: false,
                    children: {
                        shape: 'polygon',
                        fill: 'red',
                        isShowEnd: false,
                    }
                }),
                new mojs.Shape({
                    parent: this,
                    radius: { 0: 95 },
                    fill: 'transparent',
                    stroke: '#C0C1C3',
                    strokeWidth: { 50: 0 },
                    opacity: 0.4,
                    duration: 1000,
                    delay: 100,
                    easing: mojs.easing.bezier(0, 1, 0.5, 1),
                    isShowEnd: false,
                }),
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 8,
                    isShowEnd: false,
                    children: {
                        shape: 'zigzag',
                        fill: 'green',
                        isShowEnd: false,
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        wifiIconSpan.classList.add('bounceInUp');
                    }
                })
            ]
        };
    }
    else {
        wifiIconSpan.classList.remove('bounceInUp');
    }
    wifiIcon.animateElement(this, wifiIconOption, this.style.color, false);
});
var hphoneBtn = document.getElementById('head');
var hphoneIcon;
var hphoneOption;
var hphoneSpan;
hphoneBtn.addEventListener('click', function () {
    this.style.color = '#FF2318';
    if (typeof hphoneIcon === "undefined") {
        hphoneIcon = new AnimateIcon();
        hphoneSpan = this.firstElementChild;
        hphoneOption = {
            tweens: [
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 40 },
                    count: 4,
                    children: {
                        shape: 'circle',
                        fill: 'blue',
                        duration: 550,
                        radius: 14,
                        delay: 100,
                        opacity: 0.6,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'cross',
                        stroke: '#C0C1C3',
                        opacity: 0.6,
                        radius: 15,
                        delay: 200,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        hphoneSpan.classList.add('fadeOutDown');
                    }
                })
            ]
        };
    }
    else {
        hphoneSpan.classList.remove('fadeOutDown');
    }
    hphoneIcon.animateElement(this, hphoneOption, this.style.color, false);
});
var BookBtn = document.getElementById('book');
var BookIcon;
var BookOption;
var BookSpan;
BookBtn.addEventListener('click', function () {
    this.style.color = '#FF2318';
    if (typeof BookIcon === "undefined") {
        BookIcon = new AnimateIcon();
        BookSpan = this.firstElementChild;
        BookOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape: 'zigzag',
                    points: 5,
                    x: { 250: 10 },
                    stroke: '#A8CABA',
                    scale: { 0: 1.5 },
                    angle: { 0: 180 },
                    fill: { '#721e5f': '#a5efce' },
                    radius: 25,
                    duration: 1200,
                    easing: 'sin.out'
                }).then({
                    stroke: '#000',
                    angle: [-360],
                    scale: 0,
                    easing: 'sin.in'
                }),
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        BookSpan.classList.add('bounceInLeft');
                    }
                })
            ]
        };
    }
    else {
        BookSpan.classList.remove('bounceInLeft');
    }
    BookIcon.animateElement(this, BookOption, 'green', false);
});
var CameraBtn = document.getElementById('camera');
var CameraIcon;
var CameraOption;
var CameraSpan;
CameraBtn.addEventListener('click', function () {
    this.style.color = '#FF2318';
    if (typeof CameraIcon === "undefined") {
        CameraIcon = new AnimateIcon();
        CameraSpan = this.firstElementChild;
        CameraOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'cross',
                        stroke: '#C0C1C3',
                        opacity: 0.6,
                        radius: 15,
                        duration: 1700,
                        isShowEnd: false,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'cross',
                    stroke: '#A8CABA',
                    scale: { 0: 1.5 },
                    angle: { 0: 180 },
                    radius: 25,
                    duration: 1200,
                    isShowEnd: false,
                    easing: 'sin.out'
                }),
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        CameraSpan.classList.add('tada');
                    }
                })
            ]
        };
    }
    else {
        CameraSpan.classList.remove('tada');
    }
    CameraIcon.animateElement(this, CameraOption, 'orange', false);
});
var videoBtn = document.getElementById('video');
var iconVideo;
var videoIconOption;
var videoSpan;
videoBtn.addEventListener('click', function () {
    this.style.color = '#e35bf5';
    if (typeof iconVideo === "undefined") {
        iconVideo = new AnimateIcon();
        videoSpan = this.firstElementChild;
        videoIconOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape: 'rect',
                    radius: { 0: 50 },
                    fill: 'transparent',
                    stroke: '#e35bf5',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay: 300,
                    easing: mojs.easing.sin.out
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'rect',
                    radius: { 0: 60 },
                    fill: 'transparent',
                    stroke: '#e35bf5',
                    strokeWidth: { 20: 0 },
                    opacity: 0.7,
                    duration: 700,
                    delay: 500,
                    easing: mojs.easing.sin.out
                }),
                // tunable animation
                new mojs.Tunable({
                    parent: this,
                    radius: { 0: 40 },
                    count: 6,
                    children: {
                        shape: 'rect',
                        stroke: '#cd66d9',
                        opacity: 0.6,
                        radius: 20,
                        duration: 1000,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        videoSpan.classList.add('flash');
                    }
                })
            ]
        };
    }
    else {
        videoSpan.classList.remove('flash');
    }
    iconVideo.animateElement(this, videoIconOption, this.style.color, false);
});
var warningBtn = document.getElementById('show');
var iconWarning;
var warningIconOption;
var warningSpan;
warningBtn.addEventListener('click', function () {
    this.style.color = '#e35bf5';
    if (typeof iconWarning === "undefined") {
        iconWarning = new AnimateIcon();
        warningSpan = this.firstElementChild;
        warningIconOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape: 'rect',
                    points: 5,
                    stroke: '#A8CABA',
                    scale: { 0: 1.5 },
                    angle: { 0: 180 },
                    fill: { '#721e5f': '#f03ab6' },
                    radius: 25,
                    duration: 1500,
                    delay: 300,
                    isShowEnd: false
                }),
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        warningSpan.classList.add('bounceOutUp');
                    }
                })
            ]
        };
    }
    else {
        warningSpan.classList.remove('bounceOutUp');
    }
    iconWarning.animateElement(this, warningIconOption, this.style.color, false);
});
var firefoxBtn = document.getElementById('firefox');
var iconFirefox;
var firefoxIconOption;
var firefoxSpan;
firefoxBtn.addEventListener('click', function () {
    this.style.color = 'orange';
    if (typeof iconFirefox === "undefined") {
        iconFirefox = new AnimateIcon();
        firefoxSpan = this.firstElementChild;
        firefoxIconOption = {
            tweens: [
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 70 },
                    count: 50,
                    children: {
                        shape: 'zigzag',
                        points: 12,
                        fill: '#e00b28',
                        stroke: { 'magenta': 'red' },
                        strokeWidth: { 3: 1 },
                        radius: 40
                    },
                    duration: 1000
                }),
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 50,
                    children: {
                        shape: 'zigzag',
                        points: 12,
                        fill: '#e00b28',
                        stroke: { 'magenta': 'red' },
                        strokeWidth: { 3: 1 },
                        radius: 40
                    },
                    duration: 1000
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        firefoxSpan.classList.add('wobble');
                    }
                })
            ]
        };
    }
    else {
        firefoxSpan.classList.remove('wobble');
    }
    iconFirefox.animateElement(this, firefoxIconOption, this.style.color, false);
});
var photoBtn = document.getElementById('photo');
var photoIcon;
var photoOption;
var photoSpan;
photoBtn.addEventListener('click', function () {
    this.style.color = '#FF2318';
    if (typeof photoIcon === "undefined") {
        photoIcon = new AnimateIcon();
        photoSpan = this.firstElementChild;
        photoOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    left: 50, top: 50,
                    radius: { 0: 100 },
                    count: 25,
                    children: {
                        shape: 'polygon',
                        radius: 20,
                        angle: { 360: 0 },
                        fill: { '#f70909': '#eddc80' },
                        duration: 1300
                    }
                }),
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        photoSpan.classList.add('slideInUp');
                    }
                })
            ]
        };
    }
    else {
        photoSpan.classList.remove('slideInUp');
    }
    photoIcon.animateElement(this, photoOption, 'orange', false);
});
var settBtn = document.getElementById('gears');
var settIcon;
var settOption;
var settSpan;
settBtn.addEventListener('click', function () {
    this.style.color = 'grey';
    if (typeof settIcon === "undefined") {
        settIcon = new AnimateIcon();
        settSpan = this.firstElementChild;
        settOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'circle',
                        fill: 'none',
                        stroke: 'grey',
                        opacity: 0.6,
                        radius: 10,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        settSpan.classList.add('bounceInUp');
                    }
                })
            ]
        };
    }
    else {
        settSpan.classList.remove('bounceInUp');
    }
    settIcon.animateElement(this, settOption, this.style.color, false);
});
var vlBtn = document.getElementById('volumeUp');
var vlIcon;
var vlOption;
var vlSpan;
vlBtn.addEventListener('click', function () {
    this.style.color = 'green';
    if (typeof vlIcon === "undefined") {
        vlIcon = new AnimateIcon();
        vlSpan = this.firstElementChild;
        vlOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'circle',
                        stroke: 'green',
                        opacity: 0.6,
                        radius: 5,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'line',
                    radius: { 0: 60 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay: 300,
                    easing: mojs.easing.sin.out
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'line',
                    radius: { 0: 60 },
                    fill: 'transparent',
                    stroke: 'violet',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay: 500,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        vlSpan.classList.add('tada');
                    }
                })
            ]
        };
    }
    else {
        vlSpan.classList.remove('tada');
    }
    vlIcon.animateElement(this, vlOption, this.style.color, false);
});
var cmtBtn = document.getElementById('comment');
var cmtIcon;
var cmtOption;
var cmtSpan;
cmtBtn.addEventListener('click', function () {
    this.style.color = 'blue';
    if (typeof cmtIcon === "undefined") {
        cmtIcon = new AnimateIcon();
        cmtSpan = this.firstElementChild;
        cmtOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 6,
                    children: {
                        shape: 'line',
                        stroke: 'blue',
                        opacity: 0.6,
                        radius: 15,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                new mojs.Shape({
                    parent: this,
                    shape: 'circle',
                    radius: { 0: 60 },
                    fill: 'transparent',
                    stroke: 'blue',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay: 500,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        cmtSpan.classList.add('flipOutY');
                    }
                })
            ]
        };
    }
    else {
        cmtSpan.classList.remove('flipOutY');
    }
    cmtIcon.animateElement(this, cmtOption, this.style.color, false);
});
var rlyBtn = document.getElementById('reply');
var rlyIcon;
var rlyOption;
var rlySpan;
rlyBtn.addEventListener('click', function () {
    this.style.color = 'red';
    if (typeof rlyIcon === "undefined") {
        rlyIcon = new AnimateIcon();
        rlySpan = this.firstElementChild;
        rlyOption = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 100 },
                    count: 6,
                    children: {
                        shape: 'rect',
                        fill: 'none',
                        stroke: 'red',
                        opacity: 0.6,
                        radius: 10,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        rlySpan.classList.add('zoomOutLeft');
                    }
                })
            ]
        };
    }
    else {
        rlySpan.classList.remove('zoomOutLeft');
    }
    rlyIcon.animateElement(this, rlyOption, this.style.color, false);
});
var phoneBtn = document.getElementById('volumeControl');
var phoneIcon;
var phoneOptions;
var phoneSpan;
phoneBtn.addEventListener('click', function () {
    this.style.color = '#5af25c';
    if (typeof phoneIcon === "undefined") {
        phoneIcon = new AnimateIcon();
        phoneSpan = this.firstElementChild;
        phoneOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 60 },
                    count: 12,
                    children: {
                        shape: 'rect',
                        fill: 'none',
                        stroke: 'blue',
                        opacity: 0.6,
                        radius: 10,
                        duration: 1700,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        phoneSpan.classList.add('shake');
                    }
                })
            ]
        };
    }
    else {
        phoneSpan.classList.remove('shake');
    }
    phoneIcon.animateElement(this, phoneOptions, this.style.color, false);
});
var hearBtn = document.getElementById('hear');
var hearIcon;
var hearOptions;
var hearSpan;
hearBtn.addEventListener('click', function () {
    this.style.color = '#ffe39f';
    if (typeof hearIcon === "undefined") {
        hearIcon = new AnimateIcon();
        hearSpan = this.firstElementChild;
        hearOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 40 },
                    count: 8,
                    children: {
                        shape: 'zigzag',
                        radius: 10,
                        scale: { 0.8: 1 },
                        fill: 'ring',
                        points: 7,
                        stroke: '#fd0065',
                        duration: 550,
                        delay: 1000,
                        easing: mojs.easing.bezier(0, 1, 0.5, 1),
                        isShowEnd: false
                    }
                }),
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        hearSpan.classList.add('bounceOut');
                    }
                })
            ]
        };
    }
    else {
        hearSpan.classList.remove('bounceOut');
    }
    hearIcon.animateElement(this, hearOptions, this.style.color, false);
});
var calculatorIconBtn = document.getElementById('calculatorIcon');
var calculatorIcon;
var calculatorIconOptions;
var calculatorIconSpan;
calculatorIconBtn.addEventListener('click', function () {
    this.style.color = '#2F15B3';
    if (typeof calculatorIcon === "undefined") {
        calculatorIcon = new AnimateIcon();
        calculatorIconSpan = this.firstElementChild;
        calculatorIconOptions = {
            tweens: [
                // burst animation
                new mojs.Burst({
                    parent: this,
                    radius: { 0: 40 },
                    count: 4,
                    children: {
                        shape: 'zigzag',
                        fill: 'green',
                        duration: 550,
                        radius: 14,
                        delay: 100,
                        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                    }
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        calculatorIconSpan.classList.add('bounceIn');
                    }
                })
            ]
        };
    }
    else {
        calculatorIconSpan.classList.remove('bounceIn');
    }
    calculatorIcon.animateElement(this, calculatorIconOptions, this.style.color, false);
});
