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
                    duration: 1200,
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
