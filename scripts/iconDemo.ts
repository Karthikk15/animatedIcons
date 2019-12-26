class AnimateIcon {
    private element: HTMLElement;
    private checked: boolean;
    private options: any;
    private timeline: any;
    constructor() {
        this.checked = false;
        this.options = {};
        this.timeline = new mojs.Timeline();
    }

    public animateElement(element: HTMLElement, options: any, color: string, isVote: boolean) {
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
    }

    private disableELement(element: HTMLElement) {
        element.style.color = 'black';
    }
    private enableELement(element: HTMLElement, color: string, isVote: boolean) {
        if (isVote) {
            element = element.querySelector('span.icobutton__text');
            element.innerHTML = (Number(element.innerHTML) + 1).toString();
        }
        element.style.color = color;
    }
}

let likeBtn = document.getElementById('container').firstElementChild;
let iconLike: AnimateIcon;
let likeIconOption: any;
let iconSpan: any;
let hearButn = likeBtn.nextElementSibling;
let voteButn = hearButn.nextElementSibling;

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
                    delay:300,
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
                    delay:500,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 1200,
                    onUpdate: function (progress) {
                        iconSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        iconSpan.classList.remove('jello');
    }
    iconLike.animateElement(this, likeIconOption, this.style.color, false);
});

let heartIcon: AnimateIcon;
let heartOptions: any;
let spanHeart: any;

hearButn.addEventListener('click', function () {
    this.style.color = '#F60000'
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
                    duration: 1200,
                    onUpdate: function (progress) {
                        spanHeart.classList.add('heartBeat');//  el1span.style.WebkitTransform = el1span.style.transform = 'scale3d(0,0,1)';
                    }
                })
            ]
        };
    } else {
        spanHeart.classList.remove('heartBeat');
    }
    heartIcon.animateElement(this, heartOptions, this.style.color, false);
});

let iconVote: AnimateIcon;
let voteOptions: any;
let voteSpan: any;

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
                    easing: mojs.easing.sin.out
                })
            ]
        }
    }
    iconVote.animateElement(this, voteOptions, this.style.color, true);
});

let mapBtn = voteButn.nextElementSibling;

let mapIcon: AnimateIcon;
let mapOptions: any;
let mapSpan: any;
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
                        mapSpan.style.color = '1D0A0A';//colorProgress ? '#1D0A0A' : '#1D0A0A';
                    }
                })
            ]
        }
    }
    mapIcon.animateElement(this, mapOptions, this.style.color, false);
});

let dislikeBtn = mapBtn.nextElementSibling;
let dislikeIcon: AnimateIcon;
let disLikeOptions: any;
let disLikeSpan: any;

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
                    duration: 1200,
                    onUpdate: function (progress) {
                        disLikeSpan.classList.add('fadeInUp');
                    }
                })
            ]
        };
    } else {
        disLikeSpan.classList.remove('fadeInUp');
    }
    dislikeIcon.animateElement(this, disLikeOptions, this.style.color, false);
});

let bellBtn = dislikeBtn.nextElementSibling;
let bellIcon: AnimateIcon;
let bellOptions: any;
let bellSpan: any;

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
                    duration: 1200,
                    onUpdate: function (progress) {
                        bellSpan.classList.add('swing');
                    }
                })
            ]
        };
    } else {
        bellSpan.classList.remove('swing');
    }
    bellIcon.animateElement(this, bellOptions, this.style.color, false);
});

let checkBtn = bellBtn.nextElementSibling;
let checkIcon: AnimateIcon;
let checkOptions: any;
let checkSpan: any;

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
                    duration: 1200,
                    onUpdate: function (progress) {
                        checkSpan.classList.add('pulse');
                    }
                })
            ]
        };
    } else {
        checkSpan.classList.remove('pulse');
    }
    checkIcon.animateElement(this, checkOptions, this.style.color, false);
});

let shwerBtn = checkBtn.nextElementSibling;
let shwerIcon: AnimateIcon;
let shwerOptions: any;
let shwerSpan: any;

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
                })
            ]
        };
    }
    shwerIcon.animateElement(this, shwerOptions, this.style.color, false);
});

let printBtn = shwerBtn.nextElementSibling;
let printIcon: AnimateIcon;
let printOptions: any;
let printSpan: any;

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
                   duration: 1200,
                   onUpdate: function (progress) {
                    printSpan.classList.add('shake');
                   }
               })

            ]
        };
    } else {
        printSpan.classList.remove('shake');
    }
    printIcon.animateElement(this, printOptions, this.style.color, false);
});

let mphoneBtn = printBtn.nextElementSibling;
let mphoneIcon: AnimateIcon;
let mphoneOptions: any;
let mphoneSpan: any;

mphoneBtn.addEventListener('click', function () {
    this.style.color = '#FF2318';
    if (typeof mphoneIcon === "undefined") {
        mphoneIcon = new AnimateIcon();
        mphoneSpan = this.firstElementChild;
        mphoneOptions = {
            tweens: [
                new mojs.Shape({
					parent: 		this,
					radius: 		{0: 95},
					fill: 			'transparent',
					stroke: 		'#C0C1C3',
					strokeWidth: {50:0},
					opacity: 		0.4,
					duration: 	1000,
					delay: 			100,
					easing: 		mojs.easing.bezier(0, 1, 0.5, 1)
				}),
				// ring animation
				new mojs.Shape({
					parent: 	this,
					radius: 	{0: 80},
					fill: 		'transparent',
					stroke: 	'#C0C1C3',
					strokeWidth: {40:0},
					opacity: 	0.2,
					duration: 1800,
					delay: 		300,
					easing: 	mojs.easing.bezier(0, 1, 0.5, 1)
				})

            ]
        };
    }
    mphoneIcon.animateElement(this, mphoneOptions, this.style.color, false);
});

let fireBtn = mphoneBtn.nextElementSibling;
let fireIcon: AnimateIcon;
let fireOption: any;
let fireSpan: any;

let shapeInSwril = {
    shape:    'circle',
     scale:    { 0 : 3 },
     y:        { 20: -10 },
    duration:  1000,
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
                    duration: 1200,
                    onUpdate: function (progress) {
                        fireSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        fireSpan.classList.remove('jello');
    }
    fireIcon.animateElement(this, fireOption, this.style.color, false);
});

let youTubeBtn = document.getElementById('youTube');
let youTubeLike: AnimateIcon;
let youTubeOption: any;
let youTubeSpan: any;

youTubeBtn.addEventListener('click', function () {
    this.style.color = 'blue';
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
                        shape: 'polygon',
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
                    delay:300,
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
                    delay:500,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        youTubeSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        youTubeSpan.classList.remove('jello');
    }
    youTubeLike.animateElement(this, youTubeOption, this.style.color, false);
});

let dropboxBtn = document.getElementById('dropbox');
let dropbox: AnimateIcon;
let dropboxOption: any;
let dropboxSpan: any;

dropboxBtn.addEventListener('click', function () {
    this.style.color = 'Red';
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
                    delay:300,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 500,
                    onUpdate: function (progress) {
                        dropboxSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        dropboxSpan.classList.remove('jello');
    }
    dropbox.animateElement(this, dropboxOption, this.style.color, false);
});

let femaleIconBtn = document.getElementById('femaleIcon');
let femaleIcon: AnimateIcon;
let femaleIconOption: any;
let femaleIconSpan: any;

femaleIconBtn.addEventListener('click', function () {
    this.style.color = 'blue';
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
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    duration: 700,
                    delay:300,
                    easing: mojs.easing.sin.out
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
    } else {
        femaleIconSpan.classList.remove('jello');
    }
    femaleIcon.animateElement(this, femaleIconOption, this.style.color, false);
});

let moonIconBtn = document.getElementById('moonIcon');
let moonIcon: AnimateIcon;
let moonIconOption: any;
let moonIconSpan: any;

moonIconBtn.addEventListener('click', function () {
    this.style.color = 'Skyblue';
    if (typeof moonIcon == "undefined") {
        moonIcon = new AnimateIcon();
        moonIconSpan = this.firstElementChild;
        moonIconOption = {
            tweens: [             

                new mojs.Shape({
                    parent: this,
                    shape: 'circle',
                    scale: { 0 : 1.5 },
                    angle: { 0 : 180 },
                    fill:  'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    easing: mojs.easing.sin.out
                }),

                new mojs.Shape({
                    parent: this,
                    shape: 'cross',
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
                        moonIconSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        moonIconSpan.classList.remove('jello');
    }
    moonIcon.animateElement(this, moonIconOption, this.style.color, false);
});

let dataBaseIconBtn = document.getElementById('dataBaseIcon');
let dataBaseIcon: AnimateIcon;
let dataBaseIconOption: any;
let dataBaseIconSpan: any;

dataBaseIconBtn.addEventListener('click', function () {
    this.style.color = 'yellow';
    if (typeof dataBaseIcon == "undefined") {
        dataBaseIcon = new AnimateIcon();
        dataBaseIconSpan = this.firstElementChild;
        dataBaseIconOption = {
            tweens: [    
                new mojs.Shape({
                    parent: this,
                    shape: 'polygon',
                    scale: { 0 : 1.5 },
                    angle: { 0 : 180 },
                    fill:  'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    easing: mojs.easing.sin.out
                }),

                new mojs.Shape({
                    parent: this,
                    shape: 'cross',
                    radius: { 0: 50 },
                    fill: 'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 10: 0 },
                    opacity: 1.0,
                }),
                new mojs.Burst({ 
                    parent: this,
                    radius: { 0: 100 },
                    count: 12,
                    children: {
                    shape: 'rect',
                    fill: 'red',
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
    } else {
        dataBaseIconSpan.classList.remove('jello');
    }
    dataBaseIcon.animateElement(this, dataBaseIconOption, this.style.color, false);
});

let fileZipIconBtn = document.getElementById('fileZipIcon');
let fileZipIcon: AnimateIcon;
let fileZipIconOption: any;
let fileZipIconSpan: any;

fileZipIconBtn.addEventListener('click', function () {
    this.style.color = 'green';
    if (typeof fileZipIcon == "undefined") {
        fileZipIcon = new AnimateIcon();
        fileZipIconSpan = this.firstElementChild;
        fileZipIconOption = {
            tweens: [    
                new mojs.Shape({
                    parent: this,
                    shape: 'polygon',
                    scale: { 0 : 1.5 },
                    angle: { 0 : 180 },
                    fill:  'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.6,
                    easing: mojs.easing.sin.out
                }),

                new mojs.Burst({ 
                    parent: this,
                    radius: { 0: 100 },
                    count: 10,
                    children: {
                    shape: 'cross',
                    fill: 'Red',
                    }
                  }),
                // icon scale animation
                new mojs.Tween({
                    duration: 1200,
                    onUpdate: function (progress) {
                        fileZipIconSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        fileZipIconSpan.classList.remove('jello');
    }
    fileZipIcon.animateElement(this, fileZipIconOption, this.style.color, false);
});

let gitIconBtn = document.getElementById('gitIcon');
let gitIcon: AnimateIcon;
let gitIconOption: any;
let gitIconSpan: any;

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
                    duration: 1200,
                    onUpdate: function (progress) {
                        gitIconSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        gitIconSpan.classList.remove('jello');
    }
    gitIcon.animateElement(this, gitIconOption, this.style.color, false);
});

let headerIconBtn = document.getElementById('headerIcon');
let headerIcon: AnimateIcon;
let headerIconOption: any;
let headerIconSpan: any;

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
                    children: {
                    shape: 'rect',
                    fill: 'red',
                    }
                  }),
                  new mojs.Shape({
                    parent: this,
                    shape: 'polygon',
                    scale: { 0 : 1.5 },
                    angle: { 0 : 180 },
                    fill:  'transparent',
                    stroke: '#14D514',
                    strokeWidth: { 20: 0 },
                    opacity: 0.4,
                    easing: mojs.easing.sin.out
                }),
                  new mojs.Burst({ 
                    parent: this,
                    radius: { 0: 100 },
                    count: 8,
                    children: {
                    shape: 'equal',
                    fill: 'darkblue',
                    }
                  }),
                // icon scale animation
                new mojs.Tween({
                    duration: 800,
                    onUpdate: function (progress) {
                        headerIconSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        headerIconSpan.classList.remove('jello');
    }
    headerIcon.animateElement(this, headerIconOption, this.style.color, false);
});

let plugIconBtn = document.getElementById('plugIcon');
let plugIcon: AnimateIcon;
let plugIconOption: any;
let plugIconSpan: any;

plugIconBtn.addEventListener('click', function () {
    this.style.color = 'Black';
    if (typeof plugIcon == "undefined") {
        plugIcon = new AnimateIcon();
        plugIconSpan = this.firstElementChild;
        plugIconOption = {
            tweens: [   
                new mojs.Shape({
					parent: 		this,
					radius: 		{0: 95},
					fill: 			'transparent',
					stroke: 		'#C0C1C3',
					strokeWidth: {50:0},
					opacity: 		0.4,
					duration: 	1000,
					delay: 			100,
					easing: 		mojs.easing.bezier(0, 1, 0.5, 1)
				}),               
                  new mojs.Burst({ 
                    parent: this,
                    radius: { 0: 100 },
                    count: 8,
                    children: {
                    shape: 'zigzag',
                    fill: 'darkbrown',
                    }
                  }),
                // icon scale animation
                new mojs.Tween({
                    duration: 1200,
                    onUpdate: function (progress) {
                        plugIconSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        plugIconSpan.classList.remove('jello');
    }
    plugIcon.animateElement(this, plugIconOption, this.style.color, false);
});

let wifiIconBtn = document.getElementById('wifiIcon');
let wifiIcon: AnimateIcon;
let wifiIconOption: any;
let wifiIconSpan: any;

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
                    children: {
                    shape: 'polygon',
                    fill: 'red',
                    }
                  }),
                new mojs.Shape({
					parent: 		this,
					radius: 		{0: 95},
					fill: 			'transparent',
					stroke: 		'#C0C1C3',
					strokeWidth: {50:0},
					opacity: 		0.4,
					duration: 	1000,
					delay: 			100,
					easing: 		mojs.easing.bezier(0, 1, 0.5, 1)
				}),               
                  new mojs.Burst({ 
                    parent: this,
                    radius: { 0: 100 },
                    count: 8,
                    children: {
                    shape: 'zigzag',
                    fill: 'green',
                    }
                  }),
                // icon scale animation
                new mojs.Tween({
                    duration: 1200,
                    onUpdate: function (progress) {
                        wifiIconSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        wifiIconSpan.classList.remove('jello');
    }
    wifiIcon.animateElement(this, wifiIconOption, this.style.color, false);
});

let hphoneBtn = document.getElementById('head');
let hphoneIcon: AnimateIcon;
let hphoneOption: any;
let hphoneSpan: any;


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
                    duration: 1200,
                    onUpdate: function (progress) {
                        hphoneSpan.classList.add('jello');
                    }
                })
            ]
        };
    }
    else {
        hphoneSpan.classList.remove('jello');
    }
    hphoneIcon.animateElement(this, hphoneOption, this.style.color, false);
});
let BookBtn = document.getElementById('book');
let BookIcon: AnimateIcon;
let BookOption: any;
let BookSpan: any;
BookBtn.addEventListener('click', function () {
    this.style.color = '#FF2318';
    if (typeof BookIcon === "undefined") {
        BookIcon = new AnimateIcon();
        BookSpan = this.firstElementChild;
        BookOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape:        'zigzag',
                    points:       5,
                    x:        { 250: 10 },
                    stroke:       '#A8CABA',
                    scale:        { 0 : 1.5 },
                    angle:        { 0 : 180 },
                    fill:         { '#721e5f' : '#a5efce' },
                    radius:       25,
                    duration:     1200,
                    easing:       'sin.out'
                  }).then ({
                    stroke:       '#000',
                    angle:        [-360],
                    scale:        0,
                    easing:       'sin.in'
				}),
                new mojs.Tween({
                    duration: 1200,
                    onUpdate: function (progress) {
                        BookSpan.classList.add('jello');
                    }
                })
            ]
        };
    }
    else {
        BookSpan.classList.remove('jello');
    }
    BookIcon.animateElement(this, BookOption, 'green', false);
});
let CameraBtn = document.getElementById('camera');
let CameraIcon: AnimateIcon;
let CameraOption: any;
let CameraSpan: any;
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
                            easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
                        }
                    }),
                new mojs.Shape({
                    parent: this,
                    shape:        'cross',   
                    stroke:       '#A8CABA',
                    scale:        { 0 : 1.5 },
                    angle:        { 0 : 180 },
                    fill:         { '#721e5f' : '#a5efce' },
                    radius:       25,
                    duration:     1200,
                    easing:       'sin.out'
				}),
                new mojs.Tween({
                    duration: 1200,
                    onUpdate: function (progress) {
                        CameraSpan.classList.add('jello');
                    }
                })
            ]
        };
    }
    else {
        CameraSpan.classList.remove('jello');
    }
    CameraIcon.animateElement(this, CameraOption, 'orange', false);
});

let videoBtn = document.getElementById('video');
let iconVideo: AnimateIcon;
let videoIconOption: any;
let videoSpan: any;

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
                    delay:300,
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
                    delay:500,
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
                    duration: 1000,
                    onUpdate: function (progress) {
                        videoSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        videoSpan.classList.remove('jello');
    }
    iconVideo.animateElement(this, videoIconOption, this.style.color, false);
});

let firefoxBtn = document.getElementById('show');
let iconFirefox: AnimateIcon;
let firefoxIconOption: any;
let firefoxSpan: any;

firefoxBtn.addEventListener('click', function () {
    this.style.color = '#e35bf5';
    if (typeof iconFirefox === "undefined") {
        iconFirefox = new AnimateIcon();
        firefoxSpan = this.firstElementChild;
        firefoxIconOption = {
            tweens: [
                new mojs.Shape({
                    parent: this,
                    shape:        'rect',
                    points:       5,
                    stroke:       '#A8CABA',
                    scale:        { 0 : 1.5 },
                    angle:        { 0 : 180 },
                    fill:         { '#721e5f' : '#f03ab6' },
                    radius:       25,
                    duration:     1500,
                    delay:        300,
                    repeat:       1,
                    isShowEnd: false
                }),
            ]
        };
    } else {
        firefoxSpan.classList.remove('jello');
    }
    iconFirefox.animateElement(this, firefoxIconOption, this.style.color, false);
});

let warningBtn = document.getElementById('firefox');
let iconWarning: AnimateIcon;
let warningIconOption: any;
let warningSpan: any;

warningBtn.addEventListener('click', function () {
    this.style.color = '#e35bf5';
    if (typeof iconWarning === "undefined") {
        iconWarning = new AnimateIcon();
        warningSpan = this.firstElementChild;
        warningIconOption = {
            tweens: [
                new mojs.Burst({
                    parent:this,
                    radius:   { 0: 70 },
                    count: 50,
                    children: {
                      shape: 'zigzag',
                      points: 12,
                      fill: '#e00b28',
                      stroke: { 'magenta' : 'red' },
                      strokeWidth:  { 3 : 1 },
                      radius: 40
                    },
                    duration: 1000
                }),
                new mojs.Burst({
                    parent:this,
                    radius: { 0: 60 },
                    count: 50,
                    children: {
                      shape: 'zigzag',
                      points: 12,
                      fill: '#e00b28',
                      stroke: { 'magenta' : 'red' },
                      strokeWidth:  { 3 : 1 },
                      radius: 40
                    },
                    duration: 1000
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 1000,
                    onUpdate: function (progress) {
                        warningSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        warningSpan.classList.remove('jello');
    }
    iconWarning.animateElement(this, warningIconOption, this.style.color, false);
});

let photoBtn = document.getElementById('photo');
let photoIcon: AnimateIcon;
let photoOption: any;
let photoSpan: any;
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
                          fill: { '#f70909' : '#eddc80' },
                          duration: 1300
                        }
                      }),
                new mojs.Tween({
                   duration: 1500,
                    onUpdate: function (progress) {
                        photoSpan.classList.add('jello');
                    }
                })
            ]
        };
    }
    else {
        photoSpan.classList.remove('jello');
    }
    photoIcon.animateElement(this, photoOption, 'orange', false);
});
let settBtn = document.getElementById('gears');
let settIcon: AnimateIcon;
let settOption: any;
let settSpan: any;

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
                    duration: 1200,
                    onUpdate: function (progress) {
                        settSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        settSpan.classList.remove('jello');
    }
    settIcon.animateElement(this, settOption, this.style.color, false);
});


let rtBtn = document.getElementById('volumeUp');
let rtIcon: AnimateIcon;
let rtOption: any;
let rtSpan: any;

rtBtn.addEventListener('click', function () {
    this.style.color = 'green';
    if (typeof rtIcon === "undefined") {
        rtIcon = new AnimateIcon();
        rtSpan = this.firstElementChild;
        rtOption = {
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
                    delay:300,
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
                    delay:500,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 1200,
                    onUpdate: function (progress) {
                        rtSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        rtSpan.classList.remove('jello');
    }
    rtIcon.animateElement(this, rtOption, this.style.color, false);
});
let cmtBtn = document.getElementById('comment');
let cmtIcon: AnimateIcon;
let cmtOption: any;
let cmtSpan: any;

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
                    delay:500,
                    easing: mojs.easing.sin.out
                }),
                // icon scale animation
                new mojs.Tween({
                    duration: 1200,
                    onUpdate: function (progress) {
                        cmtSpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        cmtSpan.classList.remove('jello');
    }
    cmtIcon.animateElement(this, cmtOption, this.style.color, false);
});
let rlyBtn = document.getElementById('reply');
let rlyIcon: AnimateIcon;
let rlyOption: any;
let rlySpan: any;

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
                    radius: { 0: 60 },
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
                    duration: 1200,
                    onUpdate: function (progress) {
                        rlySpan.classList.add('jello');
                    }
                })
            ]
        };
    } else {
        rlySpan.classList.remove('jello');
    }
    rlyIcon.animateElement(this, rlyOption, this.style.color, false);
});

let phoneBtn = document.getElementById('volumeControl');
let phoneIcon: AnimateIcon;
let phoneOptions: any;
let phoneSpan: any;

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
                    duration: 1200,
                    onUpdate: function (progress) {
                        phoneSpan.classList.add('swing');
                    }
                })
            ]
        };
    } else {
        phoneSpan.classList.remove('swing');
    }
    phoneIcon.animateElement(this, phoneOptions, this.style.color, false);
});

let hearBtn = document.getElementById('hear');
let hearIcon: AnimateIcon;
let hearOptions: any;
let hearSpan: any;

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
                    duration: 1200,
                    onUpdate: function (progress) {
                        hearSpan.classList.add('pulse');
                    }
                })
            ]
        };
    } else {
        hearSpan.classList.remove('pulse');
    }
    hearIcon.animateElement(this, hearOptions, this.style.color, false);
});

let calculatorIconBtn = document.getElementById('calculatorIcon');
let calculatorIcon: AnimateIcon;
let calculatorIconOptions: any;
let calculatorIconSpan: any;
 
calculatorIconBtn.addEventListener('click', function () {
 this.style.color = '#2F15B3';
 if (typeof calculatorIcon=== "undefined") {
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
 duration: 1200,
 onUpdate: function (progress) {
    calculatorIconSpan.classList.add('shake');
 }
 })
 
 ]
 };
 } else {
    calculatorIconSpan.classList.remove('shake');
 }
 calculatorIcon.animateElement(this, calculatorIconOptions, this.style.color, false);
});