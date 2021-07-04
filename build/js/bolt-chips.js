"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BoltCips = /*#__PURE__*/function () {
  function BoltCips(options) {
    _classCallCheck(this, BoltCips);

    _defineProperty(this, "monitorClick", function () {
      var _this = this;

      this.chips.addEventListener('click', function () {
        _this.isClose();
      });
    });

    this.message = options.message || 'no message';
    this.cssClass = options.cssClass || 'bolt-chips--success';
    this.delay = options.delay || 5000;
    this.wrap = null;
    this.chips = null;
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
      var _this2 = this;

      this.wrap = this.getChipsWrap();
      this.chips = this.createElem(this.cssClass);
      setTimeout(function () {
        _this2.isClose();
      }, this.delay);
      this.monitorClick();
    }
  }, {
    key: "isClose",
    value: function isClose() {
      this.chips.remove();
      this.chips.removeEventListener('click', this.isClose);

      if (!this.wrap.querySelector('.bolt-chips')) {
        this.wrap.remove();
      }
    }
  }]);

  return BoltCips;
}();