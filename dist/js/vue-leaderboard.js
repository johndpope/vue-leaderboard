(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueLeaderBoard = factory());
}(this, function () { 'use strict';

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
      inject("data-v-420594fe_0", { source: ".avatar[data-v-420594fe]{margin:0 auto;border-radius:100%;position:relative;display:block;overflow:hidden;border-style:solid}.avatar.border-default[data-v-420594fe]{border-color:rgba(0,0,0,.1)}.avatar[data-v-420594fe] :hover{text-decoration:none}.avatar>img[data-v-420594fe]{width:100%;position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-420594fe";
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

  //
  var script$1 = {
    components: {
      avatar: Avatar
    },
    props: {
      board: {
        type: Array,
        "default": function _default() {
          return [{
            bu_id: 5,
            bu_name: "Soulusi ZH Marketing BU",
            team_id: 6,
            team_name: "Soulusi ZH Marketing",
            team_lead: "Colby",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 4,263.24",
            revenue: "RM 11,761.40",
            hourly: "RM 21.30",
            profit: "RM 7,498.16",
            hourly_number: 21.3016
          }, {
            bu_id: 7,
            bu_name: "Job Ad BU",
            team_id: 11,
            team_name: "No. 1 Team - Client Success",
            team_lead: "Dandy",
            avatar: "https:/upbox.ajt.my/template/img/team/1.png",
            cost: "RM 4,571.93",
            revenue: "RM 19,083.10",
            hourly: "RM 20.61",
            profit: "RM 14,511.20",
            hourly_number: 20.6125
          }, {
            bu_id: 8,
            bu_name: "Sonar BU",
            team_id: 14,
            team_name: "The Unstoppable",
            team_lead: "Charmaine",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 4,344.73",
            revenue: "RM 14,394.00",
            hourly: "RM 19.03",
            profit: "RM 10,049.20",
            hourly_number: 19.0327
          }, {
            bu_id: 7,
            bu_name: "Job Ad BU",
            team_id: 19,
            team_name: "Chimera",
            team_lead: "Bryan",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 3,720.09",
            revenue: "RM 20,130.70",
            hourly: "RM 18.65",
            profit: "RM 16,410.60",
            hourly_number: 18.6484
          }, {
            bu_id: 6,
            bu_name: "Soulusi Product BU",
            team_id: 7,
            team_name: "Soulusi Product Team",
            team_lead: "Faiz",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 4,198.45",
            revenue: "RM 16,001.70",
            hourly: "RM 16.77",
            profit: "RM 11,803.20",
            hourly_number: 16.7659
          }, {
            bu_id: 4,
            bu_name: "Soulusi MY Marketing BU",
            team_id: 5,
            team_name: "Soulusi MY Marketing",
            team_lead: "Aiman",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 7,976.07",
            revenue: "RM 19,038.80",
            hourly: "RM 15.71",
            profit: "RM 11,062.70",
            hourly_number: 15.7141
          }, {
            bu_id: 10,
            bu_name: "MK Marketing BU",
            team_id: 17,
            team_name: "MK Marketing Team",
            team_lead: "Iqah",
            avatar: "https:/upbox.ajt.my/template/img/team/10.png",
            cost: "RM 3,002.34",
            revenue: "RM 8,381.64",
            hourly: "RM 15.28",
            profit: "RM 5,379.31",
            hourly_number: 15.2821
          }, {
            bu_id: 7,
            bu_name: "Job Ad BU",
            team_id: 10,
            team_name: "The Rising Stars",
            team_lead: "Fauziah",
            avatar: "https:/upbox.ajt.my/template/img/team/7.png",
            cost: "RM 6,855.85",
            revenue: "RM 25,656.10",
            hourly: "RM 15.26",
            profit: "RM 18,800.30",
            hourly_number: 15.26
          }, {
            bu_id: 17,
            bu_name: "Creative BU",
            team_id: 26,
            team_name: "Creative Team",
            team_lead: "Rifka",
            avatar: "https:/upbox.ajt.my/template/img/team/1.png",
            cost: "RM 2,785.36",
            revenue: "RM 10,495.60",
            hourly: "RM 14.60",
            profit: "RM 7,710.23",
            hourly_number: 14.6027
          }, {
            bu_id: 9,
            bu_name: "RB Marketing BU",
            team_id: 16,
            team_name: "RB Marketing Team",
            team_lead: "Chia",
            avatar: "https:/upbox.ajt.my/template/img/team/3.png",
            cost: "RM 4,640.37",
            revenue: "RM 14,616.80",
            hourly: "RM 14.17",
            profit: "RM 9,976.44",
            hourly_number: 14.1711
          }, {
            bu_id: 11,
            bu_name: "AJT Marketing BU",
            team_id: 18,
            team_name: "AJT Marketing Team",
            team_lead: "Sharul",
            avatar: "https:/upbox.ajt.my/template/img/team/7.png",
            cost: "RM 2,336.06",
            revenue: "RM 9,370.00",
            hourly: "RM 13.32",
            profit: "RM 7,033.94",
            hourly_number: 13.3219
          }, {
            bu_id: 15,
            bu_name: "Operations BU",
            team_id: 24,
            team_name: "Operations Team",
            team_lead: "Alena",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 3,267.07",
            revenue: "RM 11,965.00",
            hourly: "RM 12.36",
            profit: "RM 8,697.93",
            hourly_number: 12.355
          }, {
            bu_id: 7,
            bu_name: "Job Ad BU",
            team_id: 9,
            team_name: "Fire Starter",
            team_lead: "Ashraf",
            avatar: "https:/upbox.ajt.my/template/img/team/11.png",
            cost: "RM 3,157.39",
            revenue: "RM 9,640.99",
            hourly: "RM 9.21",
            profit: "RM 6,483.59",
            hourly_number: 9.20965
          }, {
            bu_id: 16,
            bu_name: "Video MY BU",
            team_id: 25,
            team_name: "Video MY Team",
            team_lead: "Hakimi",
            avatar: "https:/upbox.ajt.my/template/img/team/8.png",
            cost: "RM 7,589.11",
            revenue: "RM 15,349.20",
            hourly: "RM 7.35",
            profit: "RM 7,760.09",
            hourly_number: 7.34857
          }, {
            bu_id: 7,
            bu_name: "Job Ad BU",
            team_id: 20,
            team_name: "Capitalism Crew",
            team_lead: "Alex",
            avatar: "https:/upbox.ajt.my/template/img/team/4.png",
            cost: "RM 3,420.07",
            revenue: "RM 7,825.20",
            hourly: "RM 6.26",
            profit: "RM 4,405.13",
            hourly_number: 6.25729
          }, {
            bu_id: 13,
            bu_name: "MK/RB Product BU",
            team_id: 22,
            team_name: "MK/RB Product Team",
            team_lead: "Afin",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 34,823.80",
            revenue: "RM 49,945.80",
            hourly: "RM 6.14",
            profit: "RM 15,122.00",
            hourly_number: 6.13716
          }, {
            bu_id: 19,
            bu_name: "HR ID BU",
            team_id: 28,
            team_name: "HR ID Team",
            team_lead: "Sarah Dewi",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 1,875.15",
            revenue: "RM 4,000.00",
            hourly: "RM 6.04",
            profit: "RM 2,124.85",
            hourly_number: 6.03651
          }, {
            bu_id: 20,
            bu_name: "MK ID BU",
            team_id: 29,
            team_name: "MK ID Team",
            team_lead: "Nanda",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 4,547.40",
            revenue: "RM 9,599.66",
            hourly: "RM 5.74",
            profit: "RM 5,052.26",
            hourly_number: 5.7412
          }, {
            bu_id: 12,
            bu_name: "SEO/SEM Marketing BU",
            team_id: 21,
            team_name: "SEO/SEM Marketing Team",
            team_lead: "Willis",
            avatar: "https:/upbox.ajt.my/template/img/team/6.png",
            cost: "RM 11,192.10",
            revenue: "RM 14,159.30",
            hourly: "RM 4.21",
            profit: "RM 2,967.22",
            hourly_number: 4.2148
          }, {
            bu_id: 14,
            bu_name: "AJT Product BU",
            team_id: 23,
            team_name: "AJT Product Team",
            team_lead: "Bernie",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 12,645.10",
            revenue: "RM 12,987.40",
            hourly: "RM 0.28",
            profit: "RM 342.33",
            hourly_number: 0.277865
          }, {
            bu_id: 8,
            bu_name: "Sonar BU",
            team_id: 15,
            team_name: "Thanos & Family",
            team_lead: "Louis",
            avatar: "https:/upbox.ajt.my/template/img/team/8.png",
            cost: "RM 7,867.94",
            revenue: "RM 7,873.85",
            hourly: "RM 0.01",
            profit: "RM 5.91",
            hourly_number: 0.0112009
          }, {
            bu_id: 18,
            bu_name: "HR MY BU",
            team_id: 27,
            team_name: "HR MY Team",
            team_lead: "Li Peng",
            avatar: "https:/upbox.ajt.my/template/img/team/2.png",
            cost: "RM 3,142.03",
            revenue: "RM 2,000.00",
            hourly: "RM -1.62",
            profit: "RM -1,142.03",
            hourly_number: -1.62221
          }];
        }
      }
    },
    data: function data() {
      return {
        scaleNumber: 1,
        offsetTop: 0
      };
    },
    mounted: function mounted() {
      var contentHeight = this.$refs.leaderBoard.offsetHeight;
      var windowHeight = window.innerHeight;
      var different = contentHeight - windowHeight;
      var percent = different / windowHeight;

      if (window.innerWidth > 1199) {
        if (contentHeight > windowHeight) {
          this.scaleNumber = this.scaleNumber - percent - 0.05;
          this.offsetTop = (windowHeight - contentHeight * (0.95 - percent)) / 2;
        }
      }
    },
    computed: {
      scale: function scale() {
        return "transform:scale(" + this.scaleNumber + ");top:-" + this.offsetTop + "px";
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
      }
    },
    methods: {
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
    }
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"leaderboard__",style:(_vm.scale)},[_c('div',{ref:"leaderBoard",staticClass:"row no-gutters py-3 align-items-center leaderboard__content"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"row no-gutters justify-content-center align-items-end d-none d-md-flex mb-3"},_vm._l((_vm.top3),function(team,index){return _c('div',{staticClass:"col-auto px-4"},[_c('div',{staticClass:"leaderboard__card_top text-center"},[_c('span',{staticClass:"leaderboard__number mb-1"},[_vm._v(_vm._s(_vm.handleCountTop3(index)))]),_vm._v(" "),(_vm.handleCountTop3(index) === 1)?_c('div',[_c('avatar',{attrs:{"url":team.avatar,"size":140,"type":"border-success","bWidth":4}})],1):_c('div',[_c('avatar',{attrs:{"url":team.avatar,"size":100,"type":"border-warning","bWidth":4}})],1),_vm._v(" "),_c('p',{staticClass:"mt-2 mb-0 small"},[_vm._v(_vm._s(team.team_name))]),_vm._v(" "),_c('div',{staticStyle:{"line-height":"1"}},[_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold"},[_vm._v("\n                H "),_c('span',{staticClass:"font-weight-normal"},[_vm._v(_vm._s(team.hourly))])]),_vm._v(" "),_c('p',{staticClass:"text-danger text-nowrap m-0 font-weight-bold"},[_vm._v("\n                P&L\n                "),_c('span',{staticClass:"font-weight-normal"},[_vm._v(_vm._s(team.profit))])])]),_vm._v(" "),_c('small',{staticClass:"text-muted"},[_vm._v(_vm._s(team.team_lead))])])])}),0),_vm._v(" "),_c('div',{staticClass:"row no-gutters d-flex d-md-none",staticStyle:{"margin":"0 -.5em"}},_vm._l((_vm.top3Normal),function(team,index){return _c('div',{staticClass:" col-md-6 col-lg-4 col-xl-3 mt-md-3 px-2",class:{ 'mt-3': index != 0 }},[_c('div',{staticClass:"leaderboard__card",class:{'border-success':index === 0,'border-warning':index !== 0}},[_c('div',{staticClass:"row no-gutters align-items-center"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"position-relative"},[_c('div',{staticClass:"position-absolute",staticStyle:{"left":"0px","margin-top":"21px"}},[_c('span',{staticClass:"leaderboard__number"},[_vm._v(_vm._s(index + 1))])]),_vm._v(" "),_c('div',{staticClass:"position-absolute",staticStyle:{"left":"35px","margin-top":"6px"}},[_c('avatar',{attrs:{"url":team.avatar,"size":60}})],1),_vm._v(" "),_c('div',{staticStyle:{"padding-left":"105px"}},[_c('p',{staticClass:"m-0 small text-nowrap",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                      "+_vm._s(team.team_name)+"\n                    ")]),_vm._v(" "),_c('div',{staticStyle:{"line-height":"1"}},[_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold"},[_vm._v("\n                        H\n                        "),_c('span',{staticClass:"font-weight-normal"},[_vm._v(_vm._s(team.hourly))])]),_vm._v(" "),_c('p',{staticClass:"text-danger text-nowrap m-0 font-weight-bold"},[_vm._v("\n                        P&L\n                        "),_c('span',{staticClass:"font-weight-normal"},[_vm._v(_vm._s(team.profit))])])]),_vm._v(" "),_c('small',{staticClass:"text-muted"},[_vm._v(_vm._s(team.team_lead))])])])])])])])}),0),_vm._v(" "),_c('div',{staticClass:"row no-gutters",staticStyle:{"margin":"0 -.5em"}},_vm._l((_vm.belowTop3),function(team,index){return _c('div',{staticClass:" col-md-6 col-lg-4 col-xl-3 mt-3 px-2"},[_c('div',{staticClass:"leaderboard__card"},[_c('div',{staticClass:"row no-gutters align-items-center"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"position-relative"},[_c('div',{staticClass:"position-absolute",staticStyle:{"left":"0px","margin-top":"21px"}},[_c('span',{staticClass:"leaderboard__number"},[_vm._v(_vm._s(index + 4))])]),_vm._v(" "),_c('div',{staticClass:"position-absolute",staticStyle:{"left":"35px","margin-top":"6px"}},[_c('avatar',{attrs:{"url":team.avatar,"size":60}})],1),_vm._v(" "),_c('div',{staticStyle:{"padding-left":"105px"}},[_c('p',{staticClass:"m-0 small text-nowrap",staticStyle:{"overflow":"hidden","text-overflow":"ellipsis"}},[_vm._v("\n                      "+_vm._s(team.team_name)+"\n                    ")]),_vm._v(" "),_c('div',{staticStyle:{"line-height":"1"}},[_c('p',{staticClass:"text-success text-nowrap m-0 font-weight-bold"},[_vm._v("\n                        H\n                        "),_c('span',{staticClass:"font-weight-normal"},[_vm._v(_vm._s(team.hourly))])]),_vm._v(" "),_c('p',{staticClass:"text-danger text-nowrap m-0 font-weight-bold"},[_vm._v("\n                        P&L\n                        "),_c('span',{staticClass:"font-weight-normal"},[_vm._v(_vm._s(team.profit))])])]),_vm._v(" "),_c('small',{staticClass:"text-muted"},[_vm._v(_vm._s(team.team_lead))])])])])])])])}),0)])])])};
  var __vue_staticRenderFns__$1 = [];

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-17948768_0", { source: ".leaderboard__[data-v-17948768]{max-width:1400px;margin:0 auto;position:relative;height:100vh}.leaderboard__ .leaderboard__content[data-v-17948768]{min-height:100%}.leaderboard__ .leaderboard__card_top .leaderboard__number[data-v-17948768]{display:block;font-size:20px}.leaderboard__ .leaderboard__card[data-v-17948768]{padding:10px 20px;border:1px solid rgba(0,0,0,.1)}.leaderboard__ .leaderboard__card .leaderboard__number[data-v-17948768]{font-size:20px}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-17948768";
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
