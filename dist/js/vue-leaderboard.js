(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueLeaderBoard = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    props: {
      type: {
        type: String,
        "default": 'border-default'
      },
      bWidth: {
        type: Number,
        "default": 1
      },
      url: String,
      size: {
        type: Number,
        "default": 60
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"avatar",class:_vm.type,style:({
      width: _vm.size + 'px',
      height: _vm.size + 'px',
      lineHeight: _vm.size + 'px',
      borderWidth: _vm.bWidth +'px'
    })},[_c('img',{attrs:{"src":_vm.url}})])])};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-4a57a802_0", { source: ".avatar[data-v-4a57a802]{margin:0 auto;border-radius:100%;position:relative;display:block;overflow:hidden;border-style:solid;background:#fff}.avatar.border-default[data-v-4a57a802]{border-color:rgba(0,0,0,.1)}.avatar[data-v-4a57a802] :hover{text-decoration:none}.avatar>img[data-v-4a57a802]{width:100%;position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-4a57a802";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var Avatar = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  var script$1 = {
    components: {
      avatar: Avatar
    },
    props: {
      name: String,
      sortby: {
        type: String,
        "default": ""
      },
      icon: Object
    },
    data: function data() {
      return {
        scaleNumber: 1,
        sorting: this.sortby,
        buData: []
      };
    },
    mounted: function mounted() {
      this.handleGetData();
    },
    computed: {
      sort: function sort() {
        return this.sorting;
      },
      board: function board() {
        return this.buData;
      },
      top3: function top3() {
        var top3 = this.board.splice(0, 3);
        var top_1 = top3[0];
        var top_2 = top3[1];
        var top_3 = top3[2];
        return [top_2, top_1, top_3];
      },
      top3Normal: function top3Normal() {
        var top3 = this.top3;
        var top_1 = top3[1];
        var top_2 = top3[0];
        var top_3 = top3[2];
        return [top_1, top_2, top_3];
      },
      belowTop3: function belowTop3() {
        return this.board;
      },
      scale: function scale() {
        return "transform:scale(" + this.scaleNumber + ")translateX(-50%);transform-origin: 0 0;left: 50%;";
      }
    },
    methods: {
      reload: function reload() {
        this.handleGetData();
      },
      handleGetData: function handleGetData() {
        var _this = this;

        this.buData = [];
        $.ajax({
          url: "https://upbox.ajt.my/api/bulist?sortby=" + this.sorting,
          type: "GET",
          dataType: "json",
          success: function success(data) {
            if (data.status == "success") {
              _this.buData = data.data;
            }
          }
        });
      },
      handleChangeSort: function handleChangeSort(event) {
        this.$emit("sortby", event.target.value);
        this.sorting = event.target.value;
        this.handleGetData();
      },
      handleScale: function handleScale() {
        var _this2 = this;

        this.$nextTick(function () {
          if (window.innerWidth > 1199) {
            var contentHeight = _this2.$refs[_this2.name].offsetHeight;
            var windowHeight = window.innerHeight;
            var different = contentHeight - windowHeight;
            var percent = different / contentHeight;

            if (contentHeight > windowHeight) {
              _this2.scaleNumber = 1 - percent;
            }
          }
        });
      },
      handleCountTop3: function handleCountTop3(index) {
        switch (index) {
          case 0:
            return 2;
            break;

          case 1:
            return 1;
            break;

          case 2:
            return 3;
            break;
        }
      }
    },
    directives: {
      forCallback: function forCallback(el, binding) {
        var element = binding.value;
        var key = element.key;
        var len = 0;

        if (Array.isArray(element.array)) {
          len = element.array.length;
        } else if (_typeof(element.array) === "object") {
          var keys = Object.keys(element.array);
          key = keys.indexOf(key);
          len = keys.length;
        }

        if (key == len - 1) {
          if (typeof element.callback === "function") {
            element.callback();
          }
        }
      }
    }
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"leaderboard__wrapper"},[(_vm.board.length >= 4)?_c('div',{staticClass:"leaderboard__",style:(_vm.scale)},[_c('div',{ref:_vm.name,staticClass:"row no-gutters py-4 align-items-center leaderboard__content"},[_c('div',{staticClass:"col-12"},[_c('h2',{staticClass:"pt-3 text-center font-weight-bold position-fixed d-none d-md-block",staticStyle:{"top":"0","left":"0"}},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"row no-gutters justify-content-center d-none d-md-flex mb-4"},[_c('div',{staticClass:"col-lg-10 col-xl-8"},[_c('div',{staticClass:"row no-gutters align-items-end"},_vm._l((_vm.top3),function(team,index){return _c('div',{staticClass:"col px-4"},[_c('a',{attrs:{"href":'https://upbox.ajt.my/businessunits/report/' + team.bu_id,"target":"_blank"}},[_c('div',{staticClass:"leaderboard__card_top text-center"},[_c('span',{staticClass:"leaderboard__number mb-4"},[_vm._v(_vm._s(_vm.handleCountTop3(index)))]),_vm._v(" "),(_vm.handleCountTop3(index) === 1)?_c('div',[_c('div',{staticClass:"position-relative mx-auto",staticStyle:{"width":"140px","height":"140px"}},[_c('img',{staticStyle:{"width":"250px","position":"absolute","left":"-55px","top":"-55px"},attrs:{"src":_vm.icon.success}}),_vm._v(" "),_c('avatar',{attrs:{"url":team.avatar,"size":140,"type":"border-success","bWidth":4}})],1)]):_c('div',[_c('div',{staticClass:"position-relative mx-auto",staticStyle:{"width":"100px","height":"100px"}},[_c('img',{staticStyle:{"width":"182px","position":"absolute","left":"-41px","top":"-41px"},attrs:{"src":_vm.icon.warning}}),_vm._v(" "),_c('avatar',{attrs:{"url":team.avatar,"size":100,"type":"border-warning","bWidth":4}})],1)]),_vm._v(" "),_c('p',{staticClass:"mt-4 mb-0 font-weight-bold text-nowrap",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                      "+_vm._s(team.bu_name)+"\n                    ")]),_vm._v(" "),_c('div',{staticStyle:{"line-height":"1"}},[(_vm.sort === 'hourly')?_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold"},[_vm._v("\n                        "+_vm._s(team.hourly)+"\n                      ")]):(_vm.sort === 'profit')?_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold"},[_vm._v("\n                        "+_vm._s(team.profit)+"\n                      ")]):_vm._e()]),_vm._v(" "),_c('p',{staticClass:"m-0 text-muted"},[_vm._v("TL: "+_vm._s(team.team_lead))])])])])}),0)])]),_vm._v(" "),_c('div',{staticClass:"row no-gutters d-flex d-md-none",staticStyle:{"margin":"0 -.5em"}},_vm._l((_vm.top3Normal),function(team,index){return _c('div',{staticClass:" col-md-6 col-lg-3 col-xl-2 mt-4 px-2",class:{ 'mt-4': index != 0 }},[_c('a',{attrs:{"href":'https://upbox.ajt.my/businessunits/report/' + team.bu_id,"target":"_blank"}},[_c('div',{staticClass:"leaderboard__card",class:{
                    'border-success': index === 0,
                    'border-warning': index !== 0
                  }},[_c('div',{staticClass:"row no-gutters align-items-center"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"position-relative"},[_c('div',{staticClass:"position-absolute",staticStyle:{"left":"-1px","top":"-28px"}},[_c('span',{staticClass:"leaderboard__number"},[_vm._v(_vm._s(index + 1))])]),_vm._v(" "),_c('div',{staticClass:"position-absolute",staticStyle:{"left":"10px","top":"50%","transform":"translateY(-50%)"}},[_c('avatar',{attrs:{"url":team.avatar,"size":65}})],1),_vm._v(" "),_c('div',{staticStyle:{"padding-left":"85px","padding-right":"10px"}},[_c('p',{staticClass:"m-0 text-nowrap font-weight-bold",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                          "+_vm._s(team.bu_name)+"\n                        ")]),_vm._v(" "),_c('div',{staticStyle:{"line-height":"1"}},[(_vm.sort === 'hourly')?_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                            "+_vm._s(team.hourly)+"\n                          ")]):(_vm.sort === 'profit')?_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                            "+_vm._s(team.profit)+"\n                          ")]):_vm._e()]),_vm._v(" "),_c('p',{staticClass:"mb-0 text-muted text-nowrap",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                          TL: "+_vm._s(team.team_lead)+"\n                        ")])])])])])])])])}),0),_vm._v(" "),_c('div',{staticClass:"row no-gutters",staticStyle:{"margin":"0 -.5em"}},_vm._l((_vm.belowTop3),function(team,index){return _c('div',{directives:[{name:"for-callback",rawName:"v-for-callback",value:({
                key: index,
                array: _vm.belowTop3,
                callback: _vm.handleScale
              }),expression:"{\n              key: index,\n              array: belowTop3,\n              callback: handleScale\n            }"}],staticClass:" col-md-6 col-lg-3 col-xl-2 mt-4 px-2"},[_c('a',{attrs:{"href":'https://upbox.ajt.my/businessunits/report/' + team.bu_id,"target":"_blank"}},[_c('div',{staticClass:"leaderboard__card border-default text-left"},[_c('div',{staticClass:"row no-gutters align-items-center"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"position-relative"},[_c('div',{staticClass:"position-absolute",staticStyle:{"left":"-1px","top":"-28px"}},[_c('span',{staticClass:"leaderboard__number"},[_vm._v(_vm._s(index + 4))])]),_vm._v(" "),_c('div',{staticClass:"position-absolute",staticStyle:{"left":"10px","top":"50%","transform":"translateY(-50%)"}},[_c('avatar',{attrs:{"url":team.avatar,"size":65}})],1),_vm._v(" "),_c('div',{staticStyle:{"padding-left":"85px","padding-right":"10px"}},[_c('p',{staticClass:"m-0  text-nowrap font-weight-bold",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                          "+_vm._s(team.bu_name)+"\n                        ")]),_vm._v(" "),_c('div',{staticStyle:{"line-height":"1"}},[(_vm.sort === 'hourly')?_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                            "+_vm._s(team.hourly)+"\n                          ")]):(_vm.sort === 'profit')?_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                            "+_vm._s(team.profit)+"\n                          ")]):_vm._e()]),_vm._v(" "),_c('p',{staticClass:"mb-0 text-muted text-nowrap",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                          TL: "+_vm._s(team.team_lead)+"\n                        ")])])])])])])])])}),0)])])]):_vm._e()])};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-7cfb03fa_0", { source: ".leaderboard__wrapper[data-v-7cfb03fa]{padding:0 20px;margin:0 auto}.leaderboard__[data-v-7cfb03fa]{position:relative;height:100vh}.leaderboard__ a[data-v-7cfb03fa]{text-decoration:none;color:inherit}.leaderboard__ .leaderboard__content[data-v-7cfb03fa]{min-height:100%}.leaderboard__ .leaderboard__card_top .leaderboard__number[data-v-7cfb03fa]{font-size:18px;border:1px solid rgba(0,0,0,.1);width:30px;display:inline-block;text-align:center;line-height:1.5;background:#ff0}.leaderboard__ .leaderboard__card[data-v-7cfb03fa]{padding:10px 0;border:1px solid rgba(0,0,0,.1)}.leaderboard__ .leaderboard__card .leaderboard__number[data-v-7cfb03fa]{font-size:18px;border:1px solid rgba(0,0,0,.1);width:30px;display:block;text-align:center;line-height:1.5;background:#ff0}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-7cfb03fa";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    

    
    var VueLeaderBoard = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      browser,
      undefined
    );

  return VueLeaderBoard;

}));
