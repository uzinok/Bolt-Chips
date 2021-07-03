"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BoltCips = /*#__PURE__*/function () {
  function BoltCips(options) {
    _classCallCheck(this, BoltCips);

    this.message = options.message || 'no message';
    this.cssClass = options.cssClass || 'bolt-chips--success';
    this.delay = options.delay || 5000;
    this.wrap = null;
    this.isInit();
  }

  _createClass(BoltCips, [{
    key: "getChipsWrap",
    value: function getChipsWrap() {
      if (document.querySelector('.bolt-chips-wrap')) {
        return this.wrap = document.querySelector('.bolt-chips-wrap');
      }

      return this.createElem('bolt-chips-wrap');
    }
  }, {
    key: "createElem",
    value: function createElem(cssClass) {
      var elem = document.createElement('div');

      if (cssClass == 'bolt-chips-wrap') {
        elem.classList.add('bolt-chips-wrap');
        document.body.append(elem);
        return elem;
      }

      elem.innerHTML = this.message;
      elem.classList.add('bolt-chips');
      elem.classList.add(this.cssClass);
      elem.setAttribute('tabindex', 0);
      this.wrap.append(elem);
      return elem;
    }
  }, {
    key: "isInit",
    value: function isInit() {
      this.wrap = this.getChipsWrap();
      this.createElem(this.cssClass);
    }
  }]);

  return BoltCips;
}();