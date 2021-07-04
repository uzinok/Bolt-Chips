class BoltCips {
    constructor(options) {
        this.message = options.message || 'no message';
        this.cssClass = options.cssClass || 'bolt-chips--success';
        this.delay = options.delay || 5000;

        this.wrap = null;
        this.chips = null;

        this.isInit();
    }

    getChipsWrap() {

        if (document.querySelector('.bolt-chips-wrap')) {
            return this.wrap = document.querySelector('.bolt-chips-wrap');
        }

        return this.createElem('bolt-chips-wrap');
    }

    createElem(cssClass) {
        let elem = document.createElement('div');

        if (cssClass == 'bolt-chips-wrap') {
            elem.classList.add('bolt-chips-wrap');
            document.body.append(elem);
            return elem;
        }

        elem.innerHTML = this.message;
        elem.classList.add('bolt-chips');
        elem.classList.add(this.cssClass);
        elem.setAttribute('tabindex', 0)

        this.wrap.append(elem);
        return elem;
    }

    isInit() {
        this.wrap = this.getChipsWrap();
        this.chips = this.createElem(this.cssClass);

        setTimeout(() => {
            this.isClose();
        }, this.delay)

        this.monitorClick()
    }

    isClose() {
        this.chips.remove();

        this.chips.removeEventListener('click', this.isClose);

        if(!this.wrap.querySelector('.bolt-chips')) {
            this.wrap.remove();
        }
    }

    monitorClick = function() {
        this.chips.addEventListener('click', () => {
            this.isClose();
        });
    }
}
