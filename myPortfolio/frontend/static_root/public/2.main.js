(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{51:function(e,t,n){var o=n(10),r=n(52);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},52:function(e,t,n){(t=n(11)(!1)).push([e.i,".bgBlueWhite{background-color:#e8f6f8}.defaultFont{font-family:Georgia;color:rgba(0,0,0,.8)}.defaultFont * p{font-size:1rem}.mainSectionContainer{position:relative;align-content:center;width:100vw;top:0;left:0;margin:auto;padding:1rem}.mainSectionContainer .topSection{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;width:inherit}.mainSectionContainer .topSection .twoCol{max-width:49vw}.mainSectionContainer .topSection .twoCol img{width:100%}.mainSectionContainer .secondSectionContainer{max-width:100vw;background-color:#e8f6f8;display:flex;flex-wrap:wrap;justify-content:space-around;align-content:center;cursor:pointer}.mainSectionContainer .secondSectionContainer .projectPreContainer{display:flex;flex-direction:column;border-radius:10px;padding:1rem;margin-bottom:1rem;min-width:430px;max-width:500px;width:95vw;background-color:rgba(94,73,194,.1);transition:all .3s ease-in-out !important}.mainSectionContainer .secondSectionContainer .projectPreContainer p{margin-bottom:1rem;text-align:left}.mainSectionContainer .secondSectionContainer .projectPreContainer:hover{position:relative;box-shadow:5px 10px rgba(0,0,0,.1);transform:translateX(-2px) translateY(-2px)}.secondSectionContainer{background-color:#e8f6f8}@media screen and (max-width: 760px){.mainSectionContainer .topSection .twoCol{max-width:100vw;text-align:center}}.previewImage{max-height:70px;margin-right:.5rem}",""]),e.exports=t},53:function(e,t,n){var o=n(10),r=n(54);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},54:function(e,t,n){(t=n(11)(!1)).push([e.i,".marginBelow1{margin-bottom:1rem}.marginBelow2{margin-bottom:2rem}.flexBottom{align-self:flex-end}",""]),e.exports=t},55:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(33),i=n.n(a);n(51),n(53);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(m,e);var t,n,a,c=p(m);function m(){var e,t;l(this,m);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return f(t,(e=t=c.call.apply(c,[this].concat(o)),t.state={loading:!0,pageContent:null,portfolios:null},t.cleanseDate=function(e){return e.split("T")[0]},t.previewText=function(e){return e.length>240?e.substring(0,240)+"...":e},e))}return t=m,(n=[{key:"componentDidMount",value:function(){this.fetPageContent()}},{key:"fetPageContent",value:function(){var e=this;this.setState({loading:!0}),i.a.get("/api/webpages/").then((function(t){var n=t.data;e.setState({pageContent:n})})),i.a.get("/api/portfolios/").then((function(t){var n=t.data;e.setState({loading:!1,portfolios:n})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.pageContent,i=t.portfolios;return n||null===i||null===a?r.a.createElement("div",null):(console.log(n),r.a.createElement(o.Fragment,null,r.a.createElement("div",{className:"container bgBlueWhite defaultFont"},r.a.createElement("div",{className:"mainSectionContainer",value:a?document.title="My Portfolio":""},r.a.createElement("div",{className:"topSection"},r.a.createElement("div",{className:"twoCol"},r.a.createElement("img",{src:a.portfolio.front_image})),r.a.createElement("div",{className:"twoCol"},r.a.createElement("h1",{className:"marginBelow2"},a.portfolio.page_title),r.a.createElement("h2",{className:"marginBelow1"},a.portfolio.name),r.a.createElement("p",{className:"marginBelow1"},a.portfolio.description))),r.a.createElement("div",{className:"secondSectionContainer"},i.map((function(t){var n=t.id,o=t.title,a=t.description,i=t.project_startdate,c=t.project_enddate,l=(t.direct_url,t.project_image);return r.a.createElement("div",{key:n,className:"projectPreContainer"},r.a.createElement("h2",{className:"marginBelow2"},o),r.a.createElement("p",null,e.previewText(a)),r.a.createElement("div",null,l.slice(0,4).map((function(e){var t=e.picture;return r.a.createElement("img",{className:"previewImage",src:t})}))),r.a.createElement("p",{className:""},"Duration : ",e.cleanseDate(i)," To ",e.cleanseDate(c)))})))))))}}])&&s(t.prototype,n),a&&s(t,a),m}(o.Component);t.default=d}}]);