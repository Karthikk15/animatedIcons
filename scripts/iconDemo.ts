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