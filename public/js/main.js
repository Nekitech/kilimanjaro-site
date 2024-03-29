"use strict";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */

/******/
(function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    "./lib/slider-tech/sliderCreate.js":
    /*!*****************************************!*\
      !*** ./lib/slider-tech/sliderCreate.js ***!
      \*****************************************/

    /***/
    function libSliderTechSliderCreateJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SliderTech; }\n/* harmony export */ });\nclass SliderTech {\r\n\r\n    constructor(rootElement, config = {}) {\r\n        this.root = document.querySelector(`${rootElement}`)\r\n        this.config = {\r\n            speed: '.4',\r\n            slidersView: 1,\r\n            centralSlider: false,\r\n            ...config\r\n        }\r\n\r\n    }\r\n\r\n    initSlider() {\r\n        this.x = 0;\r\n        this.counter = 0;\r\n\r\n        this.track = this.root?.querySelector('.trackSlider');\r\n        this.wrapper = this.root?.querySelector('.wrapperSlider');\r\n        this.itemsSlider = this.root?.querySelectorAll('.elementSlider')\r\n        this.nav = this.root?.querySelector('.navigationSlider')\r\n        this.prevBtn = this.nav?.querySelector('.prevBtn')\r\n        this.nextBtn = this.nav?.querySelector('.nextBtn')\r\n        this.arrowPrev = this?.prevBtn.querySelector('.arrowBtnPrev')\r\n        this.arrowNext = this?.nextBtn.querySelector('.arrowBtnNext')\r\n        this.arrowNext?.classList.add('activeBtn')\r\n\r\n        if(this.itemsSlider) {\r\n            this.shiftX = this.itemsSlider[0]?.clientWidth + 20;\r\n            this.itemsSlider[0]?.classList.add('activeSlider')\r\n            this.wrapper.style.width = this.itemsSlider[0]?.clientWidth * this.config.slidersView + 'px';\r\n\r\n            if(this.config.counter) {\r\n                this.itemsSlider.forEach((item, index) => {\r\n                    const numSlider = item.querySelector('.guide__counter')\r\n                    numSlider.innerHTML = (index + 1 > 9) ? index + 1 : '0' + (index + 1);\r\n                });\r\n            }\r\n        }\r\n        if(this.track) {\r\n            this.track.style.transition = `${this.config.speed}s ease-in-out`\r\n        }\r\n\r\n\r\n\r\n        this.checkActiveSlider = () => {\r\n            this.itemsSlider?.forEach((slider) => {\r\n                if(slider.classList.contains('activeSlider')) {\r\n                    slider.classList.remove('activeSlider')\r\n                }\r\n            })\r\n            this.itemsSlider[this.counter]?.classList.add('activeSlider')\r\n        }\r\n\r\n        if(this.prevBtn && this.nextBtn) {\r\n\r\n            this.prevBtn.onclick = () => {\r\n                this.counter -= 1;\r\n                if (this.x + this.shiftX > 0) {\r\n                    return\r\n                }\r\n                this.track.style.transform = `translateX(${this.x += this.shiftX}px)`;\r\n                this.checkActiveSlider()\r\n                if(this.counter === 0) {\r\n                    this.arrowNext?.classList.add('activeBtn')\r\n                    this.arrowPrev?.classList.remove('activeBtn')\r\n                    this.prevBtn.style.pointerEvents = 'none'\r\n                }\r\n                if(this.nextBtn.style.pointerEvents === 'none') {\r\n                    this.nextBtn.style.pointerEvents = 'all'\r\n                }\r\n\r\n            }\r\n\r\n            this.nextBtn.onclick = () => {\r\n                this.counter += 1;\r\n                if (this.x - this.shiftX < -this.shiftX * (this.itemsSlider.length - this.config.slidersView)) {\r\n                    return\r\n                }\r\n                this.track.style.transform = `translateX(${this.x -= this.shiftX}px)`;\r\n                this.checkActiveSlider()\r\n                console.log(this.counter, this.itemsSlider.length)\r\n                if(this.counter === this.itemsSlider.length - 1) {\r\n                    this.arrowNext?.classList.remove('activeBtn')\r\n                    this.arrowPrev?.classList.add('activeBtn')\r\n                    this.nextBtn.style.pointerEvents = 'none'\r\n                }\r\n                if(this.prevBtn.style.pointerEvents === 'none') {\r\n                    this.prevBtn.style.pointerEvents = 'all'\r\n                }\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://project-hexagon/./lib/slider-tech/sliderCreate.js?");
      /***/
    },

    /***/
    "./src/js/burger.js":
    /*!**************************!*\
      !*** ./src/js/burger.js ***!
      \**************************/

    /***/
    function srcJsBurgerJs() {
      eval("let burger = document.querySelector('.burger')\r\nburger.addEventListener('click',\r\n    () => burger.classList.toggle('active'))\r\nwindow.addEventListener('resize', function() {\r\n    if(this.innerWidth > 540){\r\n        burger.classList.remove('active')\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://project-hexagon/./src/js/burger.js?");
      /***/
    },

    /***/
    "./src/js/changeHeart.js":
    /*!*******************************!*\
      !*** ./src/js/changeHeart.js ***!
      \*******************************/

    /***/
    function srcJsChangeHeartJs() {
      eval("const heartsList = document.querySelectorAll('.card-tour__content--title__icon');\r\nconst heartsRedList = document.querySelectorAll('.card-tour__content--title__iconRed');\r\n\r\nArray.from(heartsList).forEach(function (item, index) {\r\n    item.addEventListener('click', function () {\r\n            Array.from(heartsRedList)[index].style.display = 'block'\r\n            item.style.display = 'none'\r\n    });\r\n\r\n})\r\nArray.from(heartsRedList).forEach(function (item, index) {\r\n    item.addEventListener('click', function () {\r\n            Array.from(heartsList)[index].style.display = 'block'\r\n            item.style.display = 'none'\r\n\r\n    });\r\n\r\n})\n\n//# sourceURL=webpack://project-hexagon/./src/js/changeHeart.js?");
      /***/
    },

    /***/
    "./src/js/headerSlider.js":
    /*!********************************!*\
      !*** ./src/js/headerSlider.js ***!
      \********************************/

    /***/
    function srcJsHeaderSliderJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_slider_tech_sliderCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/slider-tech/sliderCreate */ \"./lib/slider-tech/sliderCreate.js\");\n\r\n\r\n\r\nconst sliderHeader = new _lib_slider_tech_sliderCreate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.startScreen__slider', {\r\n    slidersView: 1,\r\n    speed: 0.6,\r\n    counter: false\r\n})\r\nsliderHeader.initSlider()\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// let WIDTH = 1600\r\n//\r\n// function changeWidthSlider() {\r\n//     WIDTH = window.document.body.clientWidth;\r\n//\r\n//     (WIDTH <= 1600)\r\n//         ? document.querySelector('.startScreen__slider').style.width = `${WIDTH}px`\r\n//         : WIDTH = 1600\r\n// }\r\n// changeWidthSlider()\r\n//\r\n// window.addEventListener('resize', function() {\r\n//     changeWidthSlider()\r\n//\r\n// })\r\n//\r\n// const n = document.querySelectorAll('.startScreen__slider-item').length - 1\r\n// let track = document.querySelector('.startScreen__track')\r\n// let btnPrev = document.querySelector('.startScreen__slider-nav__btn-prev')\r\n// let btnNext = document.querySelector('.startScreen__slider-nav__btn-next')\r\n// btnPrev.addEventListener('click', (e) => {\r\n//     console.log(track.offsetLeft, WIDTH)\r\n//     if(track.offsetLeft < 0){\r\n//         track.style.left = `${parseInt(track.style.left)  + WIDTH}px`\r\n//     }\r\n// })\r\n//\r\n// btnNext.addEventListener('click', (e) => {\r\n//     let leftMove = (parseInt(track.style.left)) ? parseInt(track.style.left) : 0\r\n//     if(leftMove > -WIDTH*n){\r\n//         (parseInt(track.style.left))\r\n//             ? track.style.left = `${leftMove - WIDTH}px`\r\n//             : track.style.left = `${-WIDTH}px`\r\n//     }\r\n// })\r\n//\r\n\n\n//# sourceURL=webpack://project-hexagon/./src/js/headerSlider.js?");
      /***/
    },

    /***/
    "./src/js/slider.js":
    /*!**************************!*\
      !*** ./src/js/slider.js ***!
      \**************************/

    /***/
    function srcJsSliderJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_slider_tech_sliderCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/slider-tech/sliderCreate */ \"./lib/slider-tech/sliderCreate.js\");\n\r\n\r\nconst sliderGuide = new _lib_slider_tech_sliderCreate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.guide__sliderGuide', {\r\n    slidersView: 1,\r\n    speed: 0.6,\r\n    counter: true\r\n})\r\nsliderGuide.initSlider()\r\n\r\n\n\n//# sourceURL=webpack://project-hexagon/./src/js/slider.js?");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/

  !function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  }();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/
  // This entry module can't be inlined because the eval devtool is used.

  /******/

  __webpack_require__("./src/js/burger.js");
  /******/


  __webpack_require__("./src/js/changeHeart.js");
  /******/


  __webpack_require__("./src/js/headerSlider.js");
  /******/


  var __webpack_exports__ = __webpack_require__("./src/js/slider.js");
  /******/

  /******/

})();