/**!
 * https://github.com/uzinok/Bolt-Chips
 * isInit() управляет методами для создания чипса
 * getChipsWrap() создает/получает врап (this.wrap)
 * createElem() создает врапер/чипс (this.wrap/this.chips)
 * monitorClick() отслеживает клик по чипсу, для его закрытия
 * isClose() удаляет чипс (при необходимости враппер) из DOM, удаляет слушателя событий
 */

class BoltChips {
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

        // если передан класс "bolt-chips-wrap", создаем врап
        if (cssClass == 'bolt-chips-wrap') {
            elem.classList.add('bolt-chips-wrap');
            document.body.appendChild(elem);
            return elem;
        }

        // либо создаем чипс
        elem.innerHTML = this.message;
        elem.classList.add('bolt-chips');
        elem.classList.add(this.cssClass);
        elem.setAttribute('tabindex', 0)

        this.wrap.appendChild(elem);
        return elem;
    }

    isInit() {
        this.wrap = this.getChipsWrap();
        this.chips = this.createElem(this.cssClass);

        // запуск таймера для удаления чипса через указанный промежуток времени
        setTimeout(() => {
            this.isClose();
        }, this.delay)

        this.monitorClick()
    }

    isClose() {
        this.wrap.removeChild(this.chips);

        // удаление слушателя событий
        this.chips.removeEventListener('click', this.isClose);

        // при необходимости удаляем всрапер из DOM
        if (!this.wrap.querySelector('.bolt-chips')) {
            document.body.removeChild(this.wrap);
        }
    }

    // метод объявлен ссылкой на функцию для удаления слушателя событий
    monitorClick = function () {
        this.chips.addEventListener('click', () => {
            this.isClose();
        });
    }
}
