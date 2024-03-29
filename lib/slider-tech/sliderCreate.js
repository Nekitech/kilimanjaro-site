export default class SliderTech {

    constructor(rootElement, config = {}) {
        this.root = document.querySelector(`${rootElement}`)
        this.config = {
            speed: '.4',
            slidersView: 1,
            centralSlider: false,
            ...config
        }

    }

    initSlider() {
        this.x = 0;
        this.counter = 0;

        this.track = this.root?.querySelector('.trackSlider');
        this.wrapper = this.root?.querySelector('.wrapperSlider');
        this.itemsSlider = this.root?.querySelectorAll('.elementSlider')
        this.nav = this.root?.querySelector('.navigationSlider')
        this.prevBtn = this.nav?.querySelector('.prevBtn')
        this.nextBtn = this.nav?.querySelector('.nextBtn')
        this.arrowPrev = this?.prevBtn.querySelector('.arrowBtnPrev')
        this.arrowNext = this?.nextBtn.querySelector('.arrowBtnNext')
        this.arrowNext?.classList.add('activeBtn')

        if(this.itemsSlider) {
            this.shiftX = this.itemsSlider[0]?.clientWidth + 20;
            this.itemsSlider[0]?.classList.add('activeSlider')
            this.wrapper.style.width = this.itemsSlider[0]?.clientWidth * this.config.slidersView + 'px';

            if(this.config.counter) {
                this.itemsSlider.forEach((item, index) => {
                    const numSlider = item.querySelector('.guide__counter')
                    numSlider.innerHTML = (index + 1 > 9) ? index + 1 : '0' + (index + 1);
                });
            }
        }
        if(this.track) {
            this.track.style.transition = `${this.config.speed}s ease-in-out`
        }



        this.checkActiveSlider = () => {
            this.itemsSlider?.forEach((slider) => {
                if(slider.classList.contains('activeSlider')) {
                    slider.classList.remove('activeSlider')
                }
            })
            this.itemsSlider[this.counter]?.classList.add('activeSlider')
        }

        if(this.prevBtn && this.nextBtn) {

            this.prevBtn.onclick = () => {
                this.counter -= 1;
                if (this.x + this.shiftX > 0) {
                    return
                }
                this.track.style.transform = `translateX(${this.x += this.shiftX}px)`;
                this.checkActiveSlider()
                if(this.counter === 0) {
                    this.arrowNext?.classList.add('activeBtn')
                    this.arrowPrev?.classList.remove('activeBtn')
                    this.prevBtn.style.pointerEvents = 'none'
                }
                if(this.nextBtn.style.pointerEvents === 'none') {
                    this.nextBtn.style.pointerEvents = 'all'
                }

            }

            this.nextBtn.onclick = () => {
                this.counter += 1;
                if (this.x - this.shiftX < -this.shiftX * (this.itemsSlider.length - this.config.slidersView)) {
                    return
                }
                this.track.style.transform = `translateX(${this.x -= this.shiftX}px)`;
                this.checkActiveSlider()
                console.log(this.counter, this.itemsSlider.length)
                if(this.counter === this.itemsSlider.length - 1) {
                    this.arrowNext?.classList.remove('activeBtn')
                    this.arrowPrev?.classList.add('activeBtn')
                    this.nextBtn.style.pointerEvents = 'none'
                }
                if(this.prevBtn.style.pointerEvents === 'none') {
                    this.prevBtn.style.pointerEvents = 'all'
                }

            }
        }
    }

}
