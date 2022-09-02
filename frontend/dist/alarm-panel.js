!function(e){"use strict";var t=function(e,a){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])})(e,a)};function a(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function i(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(i.prototype=a.prototype,new i)}var i=function(){return(i=Object.assign||function(e){for(var t,a=1,i=arguments.length;a<i;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function s(e,t,a,i){var s,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,a,i);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(r=(n<3?s(r):n>3?s(t,a,r):s(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r}function n(e,t,a){if(a||2===arguments.length)for(var i,s=0,n=t.length;s<n;s++)!i&&s in t||(i||(i=Array.prototype.slice.call(t,0,s)),i[s]=t[s]);return e.concat(i||Array.prototype.slice.call(t))}
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const r=window,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),d=new WeakMap;class c{constructor(e,t,a){if(this._$cssResult$=!0,a!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=d.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&d.set(t,e))}return e}toString(){return this.cssText}}const h=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[i+1],e[0]);return new c(a,e,l)},m=(e,t)=>{o?e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(t=>{const a=document.createElement("style"),i=r.litNonce;void 0!==i&&a.setAttribute("nonce",i),a.textContent=t.cssText,e.appendChild(a)})},u=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new c("string"==typeof e?e:e+"",void 0,l))(t)})(e):e
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;var p;const g=window,v=g.trustedTypes,f=v?v.emptyScript:"",_=g.reactiveElementPolyfillSupport,b={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},y=(e,t)=>t!==e&&(t==t||e==e),w={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,a)=>{const i=this._$Ep(a,t);void 0!==i&&(this._$Ev.set(i,a),e.push(i))}),e}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const a="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,a,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdate(e,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||w}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const a of t)this.createProperty(a,e[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Ep(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach(e=>e(this))}addController(e){var t,a;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(a=e.hostConnected)||void 0===a||a.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return m(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$EO(e,t,a=w){var i;const s=this.constructor._$Ep(e,a);if(void 0!==s&&!0===a.reflect){const n=(void 0!==(null===(i=a.converter)||void 0===i?void 0:i.toAttribute)?a.converter:b).toAttribute(t,a.type);this._$El=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var a;const i=this.constructor,s=i._$Ev.get(e);if(void 0!==s&&this._$El!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(a=e.converter)||void 0===a?void 0:a.fromAttribute)?e.converter:b;this._$El=s,this[s]=n.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,a){let i=!0;void 0!==e&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||y)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===a.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,a))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((e,t)=>this[t]=e),this._$Ei=void 0);let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),null===(e=this._$ES)||void 0===e||e.forEach(e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)}),this.update(a)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(a)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach(e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach((e,t)=>this._$EO(t,this[t],e)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var k;$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:$}),(null!==(p=g.reactiveElementVersions)&&void 0!==p?p:g.reactiveElementVersions=[]).push("1.4.1");const A=window,E=A.trustedTypes,x=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,O=`lit$${(Math.random()+"").slice(9)}$`,T="?"+O,C=`<${T}>`,j=document,S=(e="")=>j.createComment(e),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,N=Array.isArray,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,z=/>/g,H=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),P=/'/g,B=/"/g,R=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...a)=>({_$litType$:e,strings:t,values:a}))(1),I=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),G=new WeakMap,F=(e,t,a)=>{var i,s;const n=null!==(i=null==a?void 0:a.renderBefore)&&void 0!==i?i:t;let r=n._$litPart$;if(void 0===r){const e=null!==(s=null==a?void 0:a.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new X(t.insertBefore(S(),e),e,void 0,null!=a?a:{})}return r._$AI(e),r},V=j.createTreeWalker(j,129,null,!1),K=(e,t)=>{const a=e.length-1,i=[];let s,n=2===t?"<svg>":"",r=L;for(let t=0;t<a;t++){const a=e[t];let o,l,d=-1,c=0;for(;c<a.length&&(r.lastIndex=c,l=r.exec(a),null!==l);)c=r.lastIndex,r===L?"!--"===l[1]?r=D:void 0!==l[1]?r=z:void 0!==l[2]?(R.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=null!=s?s:L,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?H:'"'===l[3]?B:P):r===B||r===P?r=H:r===D||r===z?r=L:(r=H,s=void 0);const h=r===H&&e[t+1].startsWith("/>")?" ":"";n+=r===L?a+C:d>=0?(i.push(o),a.slice(0,d)+"$lit$"+a.slice(d)+O+h):a+O+(-2===d?(i.push(void 0),t):h)}const o=n+(e[a]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(o):o,i]};class Y{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let s=0,n=0;const r=e.length-1,o=this.parts,[l,d]=K(e,t);if(this.el=Y.createElement(l,a),V.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=V.nextNode())&&o.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(O)){const a=d[n++];if(e.push(t),void 0!==a){const e=i.getAttribute(a.toLowerCase()+"$lit$").split(O),t=/([.?@])?(.*)/.exec(a);o.push({type:1,index:s,name:t[2],strings:e,ctor:"."===t[1]?J:"?"===t[1]?te:"@"===t[1]?ae:Z})}else o.push({type:6,index:s})}for(const t of e)i.removeAttribute(t)}if(R.test(i.tagName)){const e=i.textContent.split(O),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:"";for(let a=0;a<t;a++)i.append(e[a],S()),V.nextNode(),o.push({type:2,index:++s});i.append(e[t],S())}}}else if(8===i.nodeType)if(i.data===T)o.push({type:2,index:s});else{let e=-1;for(;-1!==(e=i.data.indexOf(O,e+1));)o.push({type:7,index:s}),e+=O.length-1}s++}}static createElement(e,t){const a=j.createElement("template");return a.innerHTML=e,a}}function Q(e,t,a=e,i){var s,n,r,o;if(t===I)return t;let l=void 0!==i?null===(s=a._$Cl)||void 0===s?void 0:s[i]:a._$Cu;const d=M(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,a,i)),void 0!==i?(null!==(r=(o=a)._$Cl)&&void 0!==r?r:o._$Cl=[])[i]=l:a._$Cu=l),void 0!==l&&(t=Q(e,l._$AS(e,t.values),l,i)),t}class W{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:a},parts:i}=this._$AD,s=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:j).importNode(a,!0);V.currentNode=s;let n=V.nextNode(),r=0,o=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new X(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new ie(n,this,e)),this.v.push(t),l=i[++o]}r!==(null==l?void 0:l.index)&&(n=V.nextNode(),r++)}return s}m(e){let t=0;for(const a of this.v)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class X{constructor(e,t,a,i){var s;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$C_=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),M(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==I&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>N(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==U&&M(this._$AH)?this._$AA.nextSibling.data=e:this.k(j.createTextNode(e)),this._$AH=e}T(e){var t;const{values:a,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===s)this._$AH.m(a);else{const e=new W(s,this),t=e.p(this.options);e.m(a),this.k(t),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new Y(e)),t}O(e){N(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const s of e)i===t.length?t.push(a=new X(this.S(S()),this.S(S()),this,this.options)):a=t[i],a._$AI(s),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var a;for(null===(a=this._$AP)||void 0===a||a.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$C_=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Z{constructor(e,t,a,i,s){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,a,i){const s=this.strings;let n=!1;if(void 0===s)e=Q(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==I,n&&(this._$AH=e);else{const i=e;let r,o;for(e=s[0],r=0;r<s.length-1;r++)o=Q(this,i[a+r],t,r),o===I&&(o=this._$AH[r]),n||(n=!M(o)||o!==this._$AH[r]),o===U?e=U:e!==U&&(e+=(null!=o?o:"")+s[r+1]),this._$AH[r]=o}n&&!i&&this.P(e)}P(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class J extends Z{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===U?void 0:e}}const ee=E?E.emptyScript:"";class te extends Z{constructor(){super(...arguments),this.type=4}P(e){e&&e!==U?this.element.setAttribute(this.name,ee):this.element.removeAttribute(this.name)}}class ae extends Z{constructor(e,t,a,i,s){super(e,t,a,i,s),this.type=5}_$AI(e,t=this){var a;if((e=null!==(a=Q(this,e,t,0))&&void 0!==a?a:U)===I)return;const i=this._$AH,s=e===U&&i!==U||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==U&&(i===U||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,a;"function"==typeof this._$AH?this._$AH.call(null!==(a=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==a?a:this.element,e):this._$AH.handleEvent(e)}}class ie{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const se=A.litHtmlPolyfillSupport;
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
var ne,re;null==se||se(Y,X),(null!==(k=A.litHtmlVersions)&&void 0!==k?k:A.litHtmlVersions=[]).push("2.3.1");class oe extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const a=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=a.firstChild),a}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=F(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return I}}oe.finalized=!0,oe._$litElement$=!0,null===(ne=globalThis.litElementHydrateSupport)||void 0===ne||ne.call(globalThis,{LitElement:oe});const le=globalThis.litElementPolyfillSupport;null==le||le({LitElement:oe}),(null!==(re=globalThis.litElementVersions)&&void 0!==re?re:globalThis.litElementVersions=[]).push("3.2.2");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const de=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:a,elements:i}=t;return{kind:a,elements:i,finisher(t){customElements.define(e,t)}}})(e,t)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */,ce=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(a){a.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(a){a.createProperty(t.key,e)}};function he(e){return(t,a)=>void 0!==a?((e,t,a)=>{t.constructor.createProperty(a,e)})(e,t,a):ce(e,t)
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */}function me(e){return he({...e,state:!0})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function ue(e,t){return(({finisher:e,descriptor:t})=>(a,i)=>{var s;if(void 0===i){const i=null!==(s=a.originalKey)&&void 0!==s?s:a.key,n=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(a.key)}:{...a,key:i};return null!=e&&(n.finisher=function(t){e(t,i)}),n}{const s=a.constructor;void 0!==t&&Object.defineProperty(a,i,t(i)),null==e||e(s,i)}})({descriptor:a=>{const i={get(){var t,a;return null!==(a=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==a?a:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof a?Symbol():"__"+a;i.get=function(){var a,i;return void 0===this[t]&&(this[t]=null!==(i=null===(a=this.renderRoot)||void 0===a?void 0:a.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var pe;null===(pe=window.HTMLSlotElement)||void 0===pe||pe.prototype.assignedElements;var ge,ve;function fe(e){return e.substr(0,e.indexOf("."))}function _e(e){return e.substr(e.indexOf(".")+1)}!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ge||(ge={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ve||(ve={}));var be=function(e,t,a,i){i=i||{},a=null==a?{}:a;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,e.dispatchEvent(s),s},ye={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function we(e,t){if(e in ye)return ye[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var $e=function(e,t,a){void 0===a&&(a=!1),a?history.replaceState(null,"",t):history.pushState(null,"",t),be(window,"location-changed",{replace:a})},ke={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Ae={binary_sensor:function(e,t){var a="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return a?"mdi:battery":"mdi:battery-outline";case"battery_charging":return a?"mdi:battery":"mdi:battery-charging";case"cold":return a?"mdi:thermometer":"mdi:snowflake";case"connectivity":return a?"mdi:server-network-off":"mdi:server-network";case"door":return a?"mdi:door-closed":"mdi:door-open";case"garage_door":return a?"mdi:garage":"mdi:garage-open";case"power":return a?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return a?"mdi:check-circle":"mdi:alert-circle";case"smoke":return a?"mdi:check-circle":"mdi:smoke";case"heat":return a?"mdi:thermometer":"mdi:fire";case"light":return a?"mdi:brightness-5":"mdi:brightness-7";case"lock":return a?"mdi:lock":"mdi:lock-open";case"moisture":return a?"mdi:water-off":"mdi:water";case"motion":return a?"mdi:walk":"mdi:run";case"occupancy":return a?"mdi:home-outline":"mdi:home";case"opening":return a?"mdi:square":"mdi:square-outline";case"plug":return a?"mdi:power-plug-off":"mdi:power-plug";case"presence":return a?"mdi:home-outline":"mdi:home";case"running":return a?"mdi:stop":"mdi:play";case"sound":return a?"mdi:music-note-off":"mdi:music-note";case"update":return a?"mdi:package":"mdi:package-up";case"vibration":return a?"mdi:crop-portrait":"mdi:vibrate";case"window":return a?"mdi:window-closed":"mdi:window-open";default:return a?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return we("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in ke)return ke[t];if("battery"===t){var a=Number(e.state);if(isNaN(a))return"mdi:battery-unknown";var i=10*Math.round(a/10);return i>=100?"mdi:battery":i<=0?"mdi:battery-alert":"hass:battery-"+i}var s=e.attributes.unit_of_measurement;return"°C"===s||"°F"===s?"mdi:thermometer":we("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?we("input_datetime"):"mdi:calendar":"mdi:clock"}};const Ee=async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider"))return;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");e.hass={panels:[{url_path:"tmp",component_name:"config"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const t=document.createElement("ha-panel-config");await t.routerOptions.routes.automation.load(),e.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-app-layout")},xe=async()=>{var e,t,a,i,s,n,r,o;if(customElements.get("ha-yaml-editor"))return;const l=document.createElement("partial-panel-resolver").getRoutes([{component_name:"developer-tools",url_path:"a"}]);await(null===(a=null===(t=null===(e=null==l?void 0:l.routes)||void 0===e?void 0:e.a)||void 0===t?void 0:t.load)||void 0===a?void 0:a.call(t));const d=document.createElement("developer-tools-router");await(null===(o=null===(r=null===(n=null===(s=null===(i=d)||void 0===i?void 0:i.routerOptions)||void 0===s?void 0:s.routes)||void 0===n?void 0:n.service)||void 0===r?void 0:r.load)||void 0===o?void 0:o.call(r))},Oe=e=>e.callWS({type:"alarmo/config"}),Te=e=>e.callWS({type:"alarmo/sensors"}),Ce=e=>e.callWS({type:"alarmo/users"}),je=e=>e.callWS({type:"alarmo/automations"}),Se=e=>e.callWS({type:"alarmo/sensor_groups"}),Me=(e,t)=>e.callApi("POST","alarmo/config",t),Ne=(e,t)=>e.callApi("POST","alarmo/sensors",t),Le=(e,t)=>e.callApi("POST","alarmo/users",t),De=(e,t)=>e.callApi("POST","alarmo/automations",t),ze=(e,t)=>e.callApi("POST","alarmo/automations",{automation_id:t,remove:!0}),He=e=>e.callWS({type:"alarmo/areas"}),Pe=(e,t)=>e.callApi("POST","alarmo/area",t),Be=e=>{class t extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return s([he({attribute:!1})],t.prototype,"hass",void 0),t};var Re,qe,Ie,Ue={modes_short:{armed_away:"Fora",armed_home:"Casa",armed_night:"Nit",armed_custom_bypass:"Personalitzat",armed_vacation:"Vacation"},enabled:"Activat",disabled:"Desactivat"},Ge={time_slider:{seconds:"seg",minutes:"min",infinite:"infinit",none:"cap"},editor:{ui_mode:"Canvia a UI",yaml_mode:"Canvia a YAML",edit_in_yaml:"Edit in YAML"},table:{filter:{label:"Filter items",item:"Filter by {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items are}\n} hidden"}}},Fe={general:{title:"General",cards:{general:{description:"Aquest tauler defineix alguns paràmetres globals de l'alarma.",fields:{disarm_after_trigger:{heading:"Desactivar després del disparador",description:"Quan hagi transcorregut el temps d’activació, desactiveu l’alarma en lloc de tornar a l’estat armat."},enable_mqtt:{heading:"Activa MQTT",description:"Permet controlar el tauler d'alarma mitjançant MQTT."},enable_master:{heading:"Activa l'alarma mestra",description:"Crea una entitat per controlar totes les àrees simultàniament."}},actions:{setup_mqtt:"Configuració MQTT",setup_master:"Configuració mestra"}},modes:{title:"Modes",description:"Aquest tauler es pot utilitzar per configurar els modes d'activació de l'alarma.",modes:{armed_away:"El mode fora de casa s'utilitzarà quan totes les persones surtin de casa. Es controlen totes les portes i finestres que permeten l'accés a la casa, així com els sensors de moviment dins de la casa.",armed_home:"El mode a casa (també conegut com mode casa) s'utilitzarà quan configureu l'alarma mentre hi hagi persones a la casa. Es controlen totes les portes i finestres que permetin l'accés a la casa, però no els sensors de moviment a l'interior de la casa.",armed_night:"El mode nit s'utilitzarà quan configureu l'alarma abans d'anar a dormir. Es controlaran totes les portes i finestres que permetin l'accés a la casa i es seleccionaran els sensors de moviment (per exemple, a la planta baixa) de la casa.",armed_vacation:"Armed vacation can be used as an extension to the armed away mode in case of absence for longer duration. The delay times and trigger responses can be adapted (as desired) to being distant from home.",armed_custom_bypass:"Un mode addicional per definir el vostre propi perímetre de seguretat."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n} activa",fields:{status:{heading:"Status",description:"Controls whether the alarm can be armed in this mode."},exit_delay:{heading:"Retard de sortida",description:"Quan activeu l'alarma, en aquest període de temps els sensors encara no activaran l'alarma."},entry_delay:{heading:"Retard d'entrada",description:"Temps de retard fins que s'activi l'alarma després que s'activi un dels sensors."},trigger_time:{heading:"Temps d'activació",description:"Temps durant el qual sonarà la sirena"}}},mqtt:{title:"Configuració MQTT",description:"Aquest tauler es pot utilitzar per configurar la interfície MQTT.",fields:{state_topic:{heading:"Tema d'estat",description:"Tema sobre el qual es publiquen les actualitzacions d'estat"},event_topic:{heading:"Tema d'esdeveniment",description:"Tema sobre el qual es publiquen els esdeveniments d'alarma"},command_topic:{heading:"Tama d'ordre",description:"Tema sobre el qual s'envien les ordres d'activació/desactivació."},require_code:{heading:"Requereix codi",description:"Requereix l'enviament d'un codi amb l'ordre."},state_payload:{heading:"Configura la càrrega útil per estat",item:"Definiu una càrrega útil per a l'estat ''{state}''"},command_payload:{heading:"Configura la càrrega útil per ordre",item:"Definiu una càrrega útil per a l'ordre ''{command}''"}}},areas:{title:"Àrees",description:"Les àrees es poden utilitzar per dividir el sistema d'alarma en diversos compartiments.",no_items:"Encara no hi ha àrees definides.",table:{remarks:"Observacions",summary:"Aquesta àrea conté {summary_sensors} i {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n}",summary_automations:"{number} {number, plural,\n  one {automatisme}\n  other {automatismes}\n}"},actions:{add:"Afegeix"}}},dialogs:{create_area:{title:"Àrea nova",fields:{copy_from:"Copia la configuració de"}},edit_area:{title:"Edita l'àrea ''{area}''",name_warning:"Nota: si canvieu el nom, es canviarà l'identificador d'entitat"},remove_area:{title:"Voleu eliminar l'àrea?",description:"Confirmeu que voleu eliminar aquesta àrea? Aquesta àrea conté {sensors} sensors i {automatismes} automatismes, que també s'eliminaran."},edit_master:{title:"Configuració mestra"},disable_master:{title:"Voleu desactivar l'alarma mestra?",description:"Confirmeu que voleu eliminar l'alarma mestra? Aquesta àrea conté automatismes {automatismes}, que s'eliminaran amb aquesta acció."}}},sensors:{title:"Sensors",cards:{sensors:{description:"Sensors configurats actualment. Feu clic a una entitat per fer canvis.",table:{no_items:"No hi ha cap sensor per mostrar",arm_modes:"Modes d'armat",always_on:"(Sempre)",no_area_warning:"Sensor is not assigned to any area."}},add_sensors:{title:"Afegeix sensors",description:"Afegiu més sensors. Assegureu-vos que els vostres sensors tinguin un friendly_name perquè pugueu identificar-los.",no_items:"No hi ha entitats HA disponibles que es puguin configurar per a l'alarma. Assegureu-vos d'incloure entitats del tipus binary_sensor.",table:{type:"Detected type"},actions:{add_to_alarm:"afegeix a l'alarma",show_all:"Mostra-ho tot"}},editor:{title:"Edita el sensor",description:"Edita la configuració del sensor de ''{entity}''.",fields:{area:{heading:"Àrea",description:"Seleccioneu una àrea que contingui aquest sensor."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Tipus de dispositiu",description:"Trieu un tipus de dispositiu per aplicar automàticament la configuració adequada.",choose:{door:{name:"Porta",description:"Porta, porta de garatge o altra entrada que s'utilitzi per entrar/sortir de casa."},window:{name:"Finestra",description:"Finestra o una porta que no s'utilitza per entrar a la casa, com ara un balcó."},motion:{name:"Moviment",description:"Sensor de presència o dispositiu similar que té un retard entre les activacions."},tamper:{name:"Antisabotatge",description:"Detector de retirada de la coberta del sensor, sensor de trencament de vidre, etc."},environmental:{name:"Ambiental",description:"Sensor de fum o gas, detector de fuites, etc. (no relacionat amb la protecció antirobatori)."},other:{name:"Genèric"}}},always_on:{heading:"Sempre activat",description:"El sensor sempre ha de disparar l'alarma."},modes:{heading:"Modes habilitats",description:"Modes d'alarma en què aquest sensor està actiu."},arm_on_close:{heading:"Arma després de tancar",description:"Després de la desactivació d'aquest sensor, s'omet automàticament el temps de retard de sortida restant."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Permet obrir mentre s'arma l'alarma",description:"Permeteu que aquest sensor estigui actiu poc després de configurar-lo de manera que no bloquegi l'activació de l'alarma."},auto_bypass:{heading:"Omet automàticament",description:"Excloeu aquest sensor de l'alarma si està obert mentre s'arma l'alarma.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Activador quan no estigui disponible",description:"Quan l'estat del sensor no estigui disponible, això activarà el sensor."}},actions:{toggle_advanced:"Configuració avançada",remove:"Elimina",setup_groups:"Setup groups"},errors:{description:"Corregiu els errors següents:",no_area:"No s'ha seleccionat cap àrea",no_modes:"No s'han seleccionat modes per als quals el sensor hauria d'estar actiu",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group ''{name}''"}}},codes:{title:"Codis",cards:{codes:{description:"Canvieu la configuració del codi.",fields:{code_arm_required:{heading:"Utilitzeu un codi d'activació",description:"Requereix un codi per activar l'alarma"},code_disarm_required:{heading:"Utilitzeu un codi de desactivació",description:"Requereix un codi per desactivar l'alarma"},code_format:{heading:"Format del codi",description:"Estableix el tipus de codi per a la targeta d'alarma Lovelace.",code_format_number:"codi PIN",code_format_text:"contrasenya"}}},user_management:{title:"Gestió d'usuaris",description:"Cada usuari té el seu propi codi per activar/desactivar l'alarma.",no_items:"Encara no hi ha usuaris",actions:{new_user:"usuari nou"}},new_user:{title:"Crea un usuari nou",description:"Es poden crear usuaris per proporcionar accés al funcionament de l'alarma.",fields:{name:{heading:"Nom",description:"Nom de l'usuari."},code:{heading:"Codi",description:"Codi d'aquest usuari."},confirm_code:{heading:"Confirmeu el codi",description:"Repetiu el codi."},can_arm:{heading:"Permetre que el codi active l'alarma",description:"Entering this code activates the alarm"},can_disarm:{heading:"Permetre que el codi desactive l'alarma",description:"Entering this code deactivates the alarm"},is_override_code:{heading:"És un codi de sobreescriptura",description:"Si introduïu aquest codi, es forçarà l'estat d'activació de l'alarma"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"No s'ha proporcionat cap nom.",no_code:"El codi ha de tenir 4 caràcters o números com a mínim.",code_mismatch:"Els codis no coincideixen."}},edit_user:{title:"Edita l'usuari",description:"Canvia la configuració de l'usuari ''{name}''.",fields:{old_code:{heading:"Codi actual",description:"Codi actual, deixeu-lo en blanc per deixar-lo sense canvis."}}}}},actions:{title:"Accions",cards:{notifications:{title:"Notificacions",description:"Utilitzant aquest tauler, podeu gestionar les notificacions que s'envien quan es produeix un determinat esdeveniment d'alarma.",table:{no_items:"Encara no s'han creat notificacions.",no_area_warning:"Action is not assigned to any area."},actions:{new_notification:"nova notificació"}},actions:{description:"Aquest tauler es pot utilitzar per canviar un dispositiu quan l'estat d'alarma canvia.",table:{no_items:"Encara no s'han creat accions."},actions:{new_action:"nova acció"}},new_notification:{title:"Crea una notificació",description:"Crea una nova notificació.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Esdeveniment",description:"Quan s'ha d'enviar la notificació",choose:{armed:{name:"L'alarma està activada",description:"L'alarma s'ha activat correctament"},disarmed:{name:"L'alarma està desactivada",description:"L'alarma està desactivada"},triggered:{name:"L'alarma s'activat per esdeveniment",description:"L'alarma s'activat per esdeveniment"},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"No s'ha pogut activar l'alarma",description:"L'activació de l'alarma ha fallat a causa d'un o més sensors estan oberts"},arming:{name:"S'ha iniciat el retard de sortida",description:"S'ha iniciat el retard de sortida, a punt per sortir de casa."},pending:{name:"S'ha iniciat el retard d'entrada",description:"El retard d'entrada s'ha iniciat, l'alarma s'activarà aviat."}}},mode:{heading:"Mode",description:"Limita l'acció a modes específics d'activació (opcional)"},title:{heading:"Títol",description:"Títol del missatge de notificació"},message:{heading:"Missatge",description:"Contingut del missatge de notificació",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},open_sensors_format:{heading:"Format for open_sensors wildcard",description:"Choose which sensor information in inserted in the message",options:{default:"Names and states",short:"Names only"}},arm_mode_format:{heading:"Translation for arm_mode wildcard",description:"Choose in which language the arm mode is inserted in the message"},target:{heading:"Destinatari",description:"Dispositiu al qual enviar el missatge"},name:{heading:"Nom",description:"Descripció d'aquesta notificació",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",untriggered:"Notify {target} when triggering stops",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Prova-ho"}},new_action:{title:"Crea una acció",description:"Aquest tauler es pot utilitzar per canviar un dispositiu quan l'estat d'alarma canvia.",fields:{event:{heading:"Esdeveniment",description:"Quan s'ha d'executar l'acció"},area:{heading:"Àrea",description:"Àrea per a la qual s'aplica l'esdeveniment, deixeu-la en blanc per seleccionar l'alarma global."},mode:{heading:"Mode",description:"Limita l'acció a modes específics d'activació (opcional)"},entity:{heading:"Entitat",description:"Entitat en què es realitzarà l'acció"},action:{heading:"Acció",description:"Acció a realitzar a l'entitat",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Nom",description:"Descripció d'aquesta acció",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},Ve={common:Ue,components:Ge,title:"Tauler alarma",panels:Fe},Ke=Object.freeze({__proto__:null,common:Ue,components:Ge,title:"Tauler alarma",panels:Fe,default:Ve}),Ye={modes_short:{armed_away:"Away",armed_home:"Home",armed_night:"Night",armed_custom_bypass:"Custom",armed_vacation:"Vacation"},enabled:"Enabled",disabled:"Disabled"},Qe={time_slider:{seconds:"sec",minutes:"min",infinite:"infinite",none:"none"},editor:{ui_mode:"To UI",yaml_mode:"To YAML",edit_in_yaml:"Edit in YAML"},table:{filter:{label:"Filter items",item:"Filter by {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items are}\n} hidden"}}},We={general:{title:"General",cards:{general:{description:"This panel defines some global settings for the alarm.",fields:{disarm_after_trigger:{heading:"Disarm after trigger",description:"After trigger time has expired, disarm the alarm instead of returning to armed state."},enable_mqtt:{heading:"Enable MQTT",description:"Allow the alarm panel to be controlled through MQTT."},enable_master:{heading:"Enable alarm master",description:"Creates an entity for controlling all areas simultaneously."}},actions:{setup_mqtt:"MQTT Configuration",setup_master:"Master Configuration"}},modes:{title:"Modes",description:"This panel can be used to set up the arm modes of the alarm.",modes:{armed_away:"Armed away will be used when all people left the house. All doors and windows allowing access to the house will be guarded, as well as motion sensors inside the house.",armed_home:"Armed home (also known as armed stay) will be used when setting the alarm while people are in the house. All doors and windows allowing access to the house will be guarded, but not motion sensors inside the house.",armed_night:"Armed night will be used when setting the alarm before going to sleep. All doors and windows allowing access to the house will be guarded, and selected motion sensors (downstairs) in the house.",armed_vacation:"Armed vacation can be used as an extension to the armed away mode in case of absence for longer duration. The delay times and trigger responses can be adapted (as desired) to being distant from home.",armed_custom_bypass:"An extra mode for defining your own security perimeter."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n} active",fields:{status:{heading:"Status",description:"Controls whether the alarm can be armed in this mode."},exit_delay:{heading:"Exit delay",description:"When arming the alarm, within this time period the sensors will not trigger the alarm yet."},entry_delay:{heading:"Entry delay",description:"Delay time until the alarm is triggered after one of the sensors is activated."},trigger_time:{heading:"Trigger time",description:"Time during which the alarm will remain in the triggered state after activation."}}},mqtt:{title:"MQTT configuration",description:"This panel can be used for configuration of the MQTT interface.",fields:{state_topic:{heading:"State topic",description:"Topic on which state updates are published"},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"Command topic",description:"Topic which Alarmo listens to for arm/disarm commands."},require_code:{heading:"Require code",description:"Require the code to be sent with the command."},state_payload:{heading:"Configure payload per state",item:"Define a payload for state ''{state}''"},command_payload:{heading:"Configure payload per command",item:"Define a payload for command ''{command}''"}}},areas:{title:"Areas",description:"Areas can be used for dividing your alarm system into multiple compartments.",no_items:"There are no areas defined yet.",table:{remarks:"Remarks",summary:"This area contains {summary_sensors} and {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n}",summary_automations:"{number} {number, plural,\n  one {automation}\n  other {automations}\n}"},actions:{add:"Add"}}},dialogs:{create_area:{title:"New area",fields:{copy_from:"Copy settings from"}},edit_area:{title:"Editing area ''{area}''",name_warning:"Note: changing the name will change the entity ID"},remove_area:{title:"Remove area?",description:"Are you sure you want to remove this area? This area contains {sensors} sensors and {automations} automations, which will be removed as well."},edit_master:{title:"Master configuration"},disable_master:{title:"Disable master?",description:"Are you sure you want to remove the alarm master? This area contains {automations} automations, which will be removed with this action."}}},sensors:{title:"Sensors",cards:{sensors:{description:"Currently configured sensors. Click on an item to make changes.",table:{no_items:"There are no sensors to be displayed here.",no_area_warning:"Sensor is not assigned to any area.",arm_modes:"Arm Modes",always_on:"(Always)"}},add_sensors:{title:"Add Sensors",description:"Add more sensors. Make sure that your sensors have a suitable name, so you can identify them.",no_items:"There are no available HA entities that can be configured for the alarm. Make sure to include entities of the type binary_sensor.",table:{type:"Detected type"},actions:{add_to_alarm:"add to alarm",filter_supported:"Hide items with unknown type"}},editor:{title:"Edit Sensor",description:"Configuring the sensor settings of ''{entity}''.",fields:{area:{heading:"Area",description:"Select an area which contains this sensor."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Device Type",description:"Choose a device type to automatically apply appropriate settings.",choose:{door:{name:"Door",description:"A door, gate or other entrance that is used for entering/leaving the home."},window:{name:"Window",description:"A window, or a door not used for entering the house such as balcony."},motion:{name:"Motion",description:"Presence sensor or similar device having a delay between activations."},tamper:{name:"Tamper",description:"Detector of sensor cover removal, glass break sensor, etc."},environmental:{name:"Environmental",description:"Smoke/gas sensor, leak detector, etc. (not related to burglar protection)."},other:{name:"Generic"}}},always_on:{heading:"Always on",description:"Sensor should always trigger the alarm."},modes:{heading:"Enabled modes",description:"Alarm modes in which this sensor is active."},arm_on_close:{heading:"Arm after closing",description:"After deactivation of this sensor, the remaining exit delay will automatically be skipped."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Allow open after arming",description:"If the sensor is still active after the exit delay, this will not cause arming to fail."},auto_bypass:{heading:"Bypass automatically",description:"Exclude this sensor from the alarm if it is open while arming.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Trigger when unavailable",description:"When the sensor state becomes 'unavailable', this will activate the sensor."}},actions:{toggle_advanced:"Advanced settings",remove:"Remove",setup_groups:"Setup groups"},errors:{description:"Please correct the following errors:",no_area:"No area is selected",no_modes:"No modes are selected for which the sensor should be active",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group ''{name}''"}}},codes:{title:"Codes",cards:{codes:{description:"Change settings for the code.",fields:{code_arm_required:{heading:"Use arm code",description:"Require a code for arming the alarm"},code_disarm_required:{heading:"Use disarm code",description:"Require a code for disarming the alarm"},code_format:{heading:"Code format",description:"Sets the input type for Lovelace alarm card.",code_format_number:"pincode",code_format_text:"password"}}},user_management:{title:"Code management",description:"Each user has its own code to arm/disarm the alarm.",no_items:"There are no users yet",actions:{new_user:"new user"}},new_user:{title:"Create new user",description:"Users can be created for providing access to operating the alarm.",fields:{name:{heading:"Name",description:"Name of the user."},code:{heading:"Code",description:"Code for this user."},confirm_code:{heading:"Confirm code",description:"Repeat the code."},can_arm:{heading:"Allow code for arming",description:"Entering this code activates the alarm"},can_disarm:{heading:"Allow code for disarming",description:"Entering this code deactivates the alarm"},is_override_code:{heading:"Is override code",description:"Entering this code will arm the alarm in force"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"No name provided.",no_code:"Code should have 4 characters/numbers minimum.",code_mismatch:"The codes don't match."}},edit_user:{title:"Edit User",description:"Change configuration for user ''{name}''.",fields:{old_code:{heading:"Current code",description:"Current code, leave empty to leave unchanged."}}}}},actions:{title:"Actions",cards:{notifications:{title:"Notifications",description:"Using this panel, you can manage notifications to be sent when a certain alarm event occurs.",table:{no_items:"There are no notifications created yet.",no_area_warning:"Action is not assigned to any area."},actions:{new_notification:"new notification"}},actions:{description:"This panel can be used to switch a device when the alarm state changes.",table:{no_items:"There are no actions created yet."},actions:{new_action:"new action"}},new_notification:{title:"Configure notification",description:"Receive a notification when arming/disarming the alarm, on activation, etc.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Event",description:"When should the notification be sent",choose:{armed:{name:"Alarm is armed",description:"The alarm is succesfully armed"},disarmed:{name:"Alarm is disarmed",description:"The alarm is disarmed"},triggered:{name:"Alarm is triggered",description:"The alarm is triggered"},untriggered:{name:"Alarm no longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"Failed to arm",description:"The arming of the alarm failed due to one or more open sensors"},arming:{name:"Exit delay started",description:"Exit delay started, ready to leave the house."},pending:{name:"Entry delay started",description:"Entry delay started, the alarm will trigger soon."}}},mode:{heading:"Mode",description:"Limit the action to specific arm modes (optional). Here will only display the enabled modes."},title:{heading:"Title",description:"Title for the notification message"},message:{heading:"Message",description:"Content of the notification message",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",untriggered:"The alarm is no longer triggered.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},open_sensors_format:{heading:"Format for open_sensors wildcard",description:"Choose which sensor information in inserted in the message",options:{default:"Names and states",short:"Names only"}},arm_mode_format:{heading:"Translation for arm_mode wildcard",description:"Choose in which language the arm mode is inserted in the message"},target:{heading:"Target",description:"Device to send the notification to"},name:{heading:"Name",description:"Description for this notification",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",untriggered:"Notify {target} when triggering stops",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Try it"}},new_action:{title:"Configure action",description:"Switch lights or devices (such as sirens) when arming/disarming the alarm, on activation, etc.",fields:{event:{heading:"Event",description:"When should the action be executed"},area:{heading:"Area",description:"Area for which the event applies, leave empty to select the global alarm."},mode:{heading:"Mode",description:"Limit the action to specific arm modes (optional)"},entity:{heading:"Entities",description:"Entities to perform action on"},action:{heading:"Action",description:"Action to perform on the entity (you can only specify on or off for each group of entities)",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Name",description:"Description for this action",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},Xe={common:Ye,components:Qe,title:"Alarm panel",panels:We},Ze=Object.freeze({__proto__:null,common:Ye,components:Qe,title:"Alarm panel",panels:We,default:Xe}),Je={modes_short:{armed_away:"Ausente",armed_home:"En casa",armed_night:"Nocturno",armed_custom_bypass:"Personalizado",armed_vacation:"Vacaciones"},enabled:"Habilitar",disabled:"Deshabilitar"},et={time_slider:{seconds:"seg",minutes:"min",infinite:"infinito",none:"ninguno"},editor:{ui_mode:"Editar en la UI",yaml_mode:"Editar en YAML",edit_in_yaml:"Editar en YAML"},table:{filter:{label:"Filtrar entidades",item:"Filtrar por {name}",hidden_items:"{number} {number, plural,\n  one {entidas está}\n  other {entidades están}\n} oculta"}}},tt={general:{title:"General",cards:{general:{description:"Este panel define algunos ajustes globales para la alarma.",fields:{disarm_after_trigger:{heading:"Desarmar después de disparar",description:"Una vez transcurrido el tiempo de activación, desactivar la alarma en lugar de volver al estado de armada."},enable_mqtt:{heading:"Habilitar MQTT",description:"Permitir que el panel de alarma se controle a través de MQTT."},enable_master:{heading:"Habilitar alarma maestra",description:"Crea una entidad para controlar todas las áreas simultáneamente."}},actions:{setup_mqtt:"Configuración MQTT",setup_master:"Configuración maestra"}},modes:{title:"Modos",description:"Este panel se puede utilizar para configurar los modos de armado de la alarma.",modes:{armed_away:"Armado ausente se utilizará cuando todas las personas salgan de la casa. Todas las puertas y ventanas que permitan el acceso a la casa estarán vigiladas, así como los sensores de movimiento dentro de la casa.",armed_home:"Armado en casa (también conocido como estancia armada) se utilizará cuando se active la alarma mientras haya personas en la casa. Todas las puertas y ventanas que permitan el acceso a la casa estarán protegidas, pero no los sensores de movimiento dentro de la casa.",armed_night:"Armado nocturno se usará al configurar la alarma antes de irse a dormir. Todas las puertas y ventanas que permitan el acceso a la casa estarán resguardadas y se seleccionarán sensores de movimiento en la casa.",armed_vacation:"Armado en vacaciones se puede usar como una extensión del modo armado ausente en caso de ausencia de mayor duración. Los tiempos de retardo y las respuestas de activación se pueden adaptar (como se desee) a estar lejos de casa.",armed_custom_bypass:"Un modo adicional para definir su propio perímetro de seguridad."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensores}\n} activo",fields:{status:{heading:"Estado",description:"Controla si la alarma se puede armar en este modo."},exit_delay:{heading:"Retardo de salida",description:"Al armar la alarma, dentro de este período de tiempo, los sensores aún no dispararán la alarma."},entry_delay:{heading:"Retardo de entrada",description:"Tiempo de retardo hasta que se activa la alarma después de que se active alguno de los sensores."},trigger_time:{heading:"Tiempo de activación",description:"Tiempo durante el cual sonará la sirena."}}},mqtt:{title:"Configuración MQTT",description:"Este panel se puede utilizar para configurar la interfaz MQTT.",fields:{state_topic:{heading:"Tema del estado",description:"Tema sobre el que se publican las actualizaciones de estado."},event_topic:{heading:"Tema del evento",description:"Tema sobre el que se publican los eventos de alarma."},command_topic:{heading:"Tema del comando",description:"Tema sobre el que se envían los comandos de armado / desarmado."},require_code:{heading:"Requerir código",description:"Requiere que el código se envíe con el comando."},state_payload:{heading:"Configurar la carga útil por estado",item:"Defina una carga útil para el estado ''{state}''"},command_payload:{heading:"Configurar la carga útil por comando",item:"Defina una carga útil para el comando ''{command}''"}}},areas:{title:"Áreas",description:"Las áreas se pueden utilizar para dividir su sistema de alarma en varios compartimentos.",no_items:"Aún no hay áreas definidas.",table:{remarks:"Comentarios",summary:"Esta área contiene {summary_sensors} y {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensores}\n}",summary_automations:"{number} {number, plural,\n  one {automatizacion}\n  other {automatizaciones}\n}"},actions:{add:"Agregar"}}},dialogs:{create_area:{title:"Nueva área",fields:{copy_from:"Copiar la configuración de"}},edit_area:{title:"Editando área ''{area}''",name_warning:"Nota: cambiar el nombre cambiará el ID de la entidad."},remove_area:{title:"¿Eliminar área?",description:"¿Está seguro de que desea eliminar esta área? Esta área contiene {sensors} sensores y {automations} automatizaciones que también se eliminarán."},edit_master:{title:"Configuración maestra"},disable_master:{title:"¿Deshabilitar maestro?",description:"¿Está seguro de que desea eliminar la alarma maestra? Esta área contiene {sensors} sensores y {automations} automatizaciones que también se eliminarán."}}},sensors:{title:"Sensores",cards:{sensors:{description:"Sensores configurados actualmente. Haga clic en una entidad para realizar cambios.",table:{no_items:"No hay sensores para mostrar aquí.",no_area_warning:"El sensor no está asignado a ningún área.",arm_modes:"Modos de armado",always_on:"(Siempre)"}},add_sensors:{title:"Agregar sensores",description:"Agrega más sensores. Asegúrate de que tus sensores tengan un nombre amigable, para que puedas identificarlos.",no_items:"No hay entidades HA disponibles que se puedan configurar para la alarma. Asegúrese de incluir entidades del tipo sensor binario.",table:{type:"Tipo detectado"},actions:{add_to_alarm:"agregar a la alarma",filter_supported:"Ocultar elementos con tipo desconocido"}},editor:{title:"Editar sensor",description:"Configurando los ajustes del sensor de ''{entity}''.",fields:{area:{heading:"Área",description:"Seleccione un área que contenga este sensor."},group:{heading:"Grupo",description:"Agrupar con otros sensores para un disparado combinado."},device_type:{heading:"Tipo de dispositivo",description:"Elija un tipo de dispositivo para aplicar automáticamente la configuración adecuada.",choose:{door:{name:"Puerta",description:"Una puerta, portón u otra entrada que se utilice para entrar / salir de la casa."},window:{name:"Ventana",description:"Una ventana o una puerta que no se use para entrar a la casa, como un balcón."},motion:{name:"Movimiento",description:"Sensor de presencia o dispositivo similar que tiene un retardo entre activaciones."},tamper:{name:"Sabotaje",description:"Detector de extracción de la cubierta del sensor, sensor de rotura de vidrio, etc."},environmental:{name:"Medioambiental",description:"Sensor de humo / gas, detector de fugas, etc. (no relacionado con la protección antirrobo)."},other:{name:"Genérico"}}},always_on:{heading:"Siempre encendido",description:"El sensor siempre debe activar la alarma."},modes:{heading:"Modos habilitados",description:"Modos de alarma en los que este sensor está activo."},arm_on_close:{heading:"Armar después de cerrar",description:"Después de la desactivación de este sensor, se saltará automáticamente el retardo de salida restante."},use_exit_delay:{heading:"Usar retardo de salida",description:"Se permite que el sensor esté activo cuando comienza el retardo de salida."},use_entry_delay:{heading:"Usar retardo de entrada",description:"La activación del sensor activa la alarma después del retardo de entrada en lugar de directamente."},allow_open:{heading:"Permitir abrir mientras se arma",description:"Si el sensor aún está activo después del retardo de salida, esto no hará que falle el armado."},auto_bypass:{heading:"Omitir automáticamente",description:"Excluya este sensor de la alarma si está abierto mientras se arma.",modes:"Modos en los que se puede omitir el sensor"},trigger_unavailable:{heading:"Activar cuando no esté disponible",description:"Cuando el estado del sensor se vuelve 'no disponible', esto activará el sensor."}},actions:{toggle_advanced:"Configuración avanzada",remove:"Eliminar",setup_groups:"Configurar grupos"},errors:{description:"Por favor, corrija los siguientes errores:",no_area:"No se ha seleccionado ninguna área",no_modes:"No se han seleccionados modos para los que el sensor deba estar activo",no_auto_bypass_modes:"No se han seleccionados modos para los que el sensor pueda ser omitido"}}},dialogs:{manage_groups:{title:"Administrar grupos de sensores",description:"En un grupo de sensores, se deben activar varios sensores dentro de un período de tiempo antes de que se dispare la alarma.",no_items:"Todavía no hay grupos",actions:{new_group:"Nuevo grupo"}},create_group:{title:"Nuevo grupo de sensores",fields:{name:{heading:"Nombre",description:"Nombre del grupo de sensores"},timeout:{heading:"Tiempo muerto",description:"Período de tiempo durante el cual las activaciones consecutivas del sensor activan la alarma."},sensors:{heading:"Sensores",description:"Seleccione los sensores que están contenidos en este grupo."}},errors:{invalid_name:"Nombre proporcionado no válido.",insufficient_sensors:"Se deben seleccionar al menos 2 sensores."}},edit_group:{title:"Editar grupo de sensores '{name}'"}}},codes:{title:"Códigos",cards:{codes:{description:"Cambiar la configuración del código.",fields:{code_arm_required:{heading:"Usar código de armado",description:"Requiere un código para armar la alarma."},code_disarm_required:{heading:"Usar código de desarmado",description:"Requiere un código para desarmar la alarma."},code_format:{heading:"Formato del código",description:"Establece el tipo de entrada para la tarjeta de la alarma.",code_format_number:"código PIN",code_format_text:"contraseña"}}},user_management:{title:"Gestión de códigos",description:"Cada usuario tiene su propio código para armar / desarmar la alarma.",no_items:"Aún no hay usuarios",actions:{new_user:"nuevo usuario"}},new_user:{title:"Crear nuevo usuario",description:"Se pueden crear usuarios para proporcionar acceso a la operación de la alarma.",fields:{name:{heading:"Nombre",description:"Nombre del usuario."},code:{heading:"Código",description:"Código para este usuario."},confirm_code:{heading:"Confirmar código",description:"Repite el código."},can_arm:{heading:"Permitir código para armar",description:"Al ingresar este código se activa la alarma."},can_disarm:{heading:"Permitir código para desarmar",description:"Al ingresar este código se desactiva la alarma."},is_override_code:{heading:"Es un código de anulación",description:"Al ingresar este código se forzará el armado de la alarma."},area_limit:{heading:"Áreas restringidas",description:"Limitar al usuario a controlar solo las áreas seleccionadas"}},errors:{no_name:"No se proporcionó ningún nombre.",no_code:"El código debe tener 4 caracteres / números como mínimo.",code_mismatch:"Los códigos no coinciden."}},edit_user:{title:"Editar usuario",description:"Cambiar la configuración del usuario ''{name}''.",fields:{old_code:{heading:"Código actual",description:"Código actual, déjelo en blanco para no modificarlo."}}}}},actions:{title:"Acciones",cards:{notifications:{title:"Notificaciones",description:"Usando este panel, puede administrar las notificaciones que se enviarán durante un evento de alarma determinado.",table:{no_items:"Aún no se han creado notificaciones.",no_area_warning:"La acción no está asignada a ningún área."},actions:{new_notification:"nueva notificación"}},actions:{description:"Este panel se puede utilizar para cambiar un dispositivo cuando cambia el estado de alarma.",table:{no_items:"Aún no se han creado acciones."},actions:{new_action:"nueva acción"}},new_notification:{title:"Crear notificación",description:"Crear una nueva notificación.",trigger:"Condición",action:"Tarea",options:"Opciones",fields:{event:{heading:"Evento",description:"Cuándo debe enviarse la notificación.",choose:{armed:{name:"La alarma está armada",description:"La alarma está correctamente armada."},disarmed:{name:"La alarma está desarmada",description:"La alarma está desarmada."},triggered:{name:"Se ha disparado la alarma",description:"La alarma se ha disparado."},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"No se pudo armar",description:"El armado de la alarma falló debido a uno o más sensores abiertos."},arming:{name:"Se ha iniciado el retardo de salida",description:"Se ha iniciado el retardo de salida, listo para salir de la casa."},pending:{name:"Se ha iniciado el retardo de entrada",description:"Se ha iniciado el retardo de entrada, la alarma se disparará pronto."}}},mode:{heading:"Modo",description:"Limita la acción a modos de armado específicos (opcional)."},title:{heading:"Título",description:"Título del mensaje de notificación."},message:{heading:"Mensaje",description:"Contenido del mensaje de notificación.",insert_wildcard:"Insertar comodín",placeholders:{armed:"La alarma está configurada en {{arm_mode}}",disarmed:"Ahora la alarma está APAGADA",triggered:"¡Se ha disparado la alarma! Causa: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"No se pudo armar la alarma en este momento debido a: {{open_sensors}}.",arming:"Se armará pronto la alarma, por favor, salga de la casa.",pending:"¡La alarma está a punto de dispararse, desarme rápidamente!"}},open_sensors_format:{heading:"Formato para el comodín open_sensors",description:"Elija qué información del sensor se inserta en el mensaje",options:{default:"Nombres y estados",short:"Solo nombres"}},arm_mode_format:{heading:"Traducción del comodín arm_mode",description:"Elija en qué idioma se inserta el modo de armado en el mensaje"},target:{heading:"Objetivo",description:"Dispositivo al que enviar el mensaje push."},name:{heading:"Nombre",description:"Descripción de esta notificación.",placeholders:{armed:"Notificar a {target} al armar",disarmed:"Notificar a {target} al desarmar",triggered:"Notificar a {target} cuando se dispare",untriggered:"Notify {target} when triggering stops",arm_failure:"Notificar a {target} si falla",arming:"Notificar a {target} cuando se vaya",pending:"Notificar a {target} cuando llegue"}},delete:{heading:"Eliminar automatización",description:"Eliminar esta automatización de forma permanente"}},actions:{test:"Pruébelo"}},new_action:{title:"Crear acción",description:"Este panel se puede utilizar para cambiar un dispositivo cuando cambia el estado de la alarma.",fields:{event:{heading:"Evento",description:"¿Cuándo debe ejecutarse la acción?"},area:{heading:"Área",description:"Área para la que se aplica el evento, déjelo en blanco para seleccionar la alarma global."},mode:{heading:"Modo",description:"Limita la acción a modos de armado específicos (opcional)"},entity:{heading:"Entidad",description:"Entidad sobre la que realizar la acción."},action:{heading:"Acción",description:"Acción a realizar en la entidad.",no_common_actions:"Las acciones solo se pueden asignar en modo YAML para las entidades seleccionadas."},name:{heading:"Nombre",description:"Descripción de esta acción.",placeholders:{armed:"Establecer {entity} en {state} al armar",disarmed:"Establecer {entity} en {state} al desarmar",triggered:"Establecer {entity} en {state} cuando se dispare",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Establecer {entity} en {state} si falla",arming:"Establecer {entity} en {state} cuando se vaya",pending:"Establecer {entity} en {state} cuando llegue"}}}}}}},at={common:Je,components:et,title:"Panel de alarma",panels:tt},it=Object.freeze({__proto__:null,common:Je,components:et,title:"Panel de alarma",panels:tt,default:at}),st={modes_short:{armed_away:"Eemal",armed_home:"Kodus",armed_night:"Ööseks",armed_custom_bypass:"Valikuline",armed_vacation:"Vacation"},enabled:"Lubatud",disabled:"Keelatud"},nt={time_slider:{seconds:"sek",minutes:"min",infinite:"piiranguta",none:"puudub"},editor:{ui_mode:"Kasutajaliides",yaml_mode:"Koodiredaktor",edit_in_yaml:"Edit in YAML"},table:{filter:{label:"Filter items",item:"Filter by {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items are}\n} hidden"}}},rt={general:{title:"Üldsätted",cards:{general:{description:"Need seaded kehtivad kõikides valve olekutes.",fields:{disarm_after_trigger:{heading:"Häire summutamine",description:"Peale häire lõppu võta valvest maha miite ära valvesta uuesti."},enable_mqtt:{heading:"Luba MQTT juhtimine",description:"Luba nupustiku juhtimist MQTT abil."},enable_master:{heading:"Luba põhivalvestus",description:"Loob olemi mis haldab kõiki valvestamise alasid korraga."}},actions:{setup_mqtt:"MQTT seadistamine",setup_master:"Põhivalvestuse sätted"}},modes:{title:"Režiimid",description:"Selles vaates seadistatakse valvestamise režiime.",modes:{armed_away:"Täielik valvestamine kui kedagi pole kodus. Kasutusel on kõik andurid.",armed_home:"Valvestatud kodus ei kasuta liikumisandureid kuid väisuksed ja aknad on valve all.",armed_night:"Valvestatud ööseks ei kasuta määratud liikumisandureid, välisperimeeter on valve all.",armed_vacation:"Armed vacation can be used as an extension to the armed away mode in case of absence for longer duration. The delay times and trigger responses can be adapted (as desired) to being distant from home.",armed_custom_bypass:"Valikulise valvestuse puhul saab määrata kasutatavad andurid."},number_sensors_active:"{number} {number, plural,\n  one {andur}\n  other {andurit}\n} aktiiv",fields:{status:{heading:"Status",description:"Controls whether the alarm can be armed in this mode."},exit_delay:{heading:"Ooteaeg valvestamisel",description:"Viivitus enne valvestamise rakendumist."},entry_delay:{heading:"Sisenemise viivitus",description:"Viivitus sisenemisel enne häire rakendumist."},trigger_time:{heading:"Häire kestus",description:"Sireeni jne. aktiveerimise kestus."}}},mqtt:{title:"MQTT sätted",description:"MQTT parameetrite seadistamine.",fields:{state_topic:{heading:"Oleku teema (topic)",description:"Teema milles avaldatakse oleku muutused."},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"Käskude teema (topic)",description:"Teema milles avaldatakse valvestamise käsud."},require_code:{heading:"Nõua PIN koodi",description:"Käskude edastamiseks on vajalik PIN kood."},state_payload:{heading:"Määra olekute toimeandmed",item:"Määra oleku ''{state}'' toimeandmed"},command_payload:{heading:"Määra käskude toimeandmed",item:"Määra käsu ''{command}'' toimeandmed"}}},areas:{title:"Alad",description:"Alasid kasutatakse elamise jagamiseks valvetsoonideks.",no_items:"Valvestamise alad on loomata.",table:{remarks:"Ala teave",summary:"See ala sisaldab {summary_sensors} ja {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {andur}\n  other {andurit}\n}",summary_automations:"{number} {number, plural,\n  one {automatiseering}\n  other {automatiseeringut}\n}"},actions:{add:"Lisa"}}},dialogs:{create_area:{title:"Uus ala",fields:{copy_from:"Kopeeri sätted allikast:"}},edit_area:{title:"Ala ''{area}'' muutmine",name_warning:"NB! Nime muutmisel muutub ka olemi ID"},remove_area:{title:"Kas kustutada ala?",description:"Kas kustutada see ala? Ala kaasab andurid {sensors} ja automatiseeringud {automations} mis samuti eemaldatakse."},edit_master:{title:"Põhiala seaded"},disable_master:{title:"Kas keelata põhiala?",description:"Kas keelata põhiala? Ala kaasab andurid {sensors} ja automatiseeringud {automations} mis samuti eemaldatakse.."}}},sensors:{title:"Andurid",cards:{sensors:{description:"Kasutusel olevad andurid. Klõpsa olemil, et seadistada.",table:{no_items:"Andureid pole lisatud. Alustuseks lisa mõni andur.",no_area_warning:"Sensor is not assigned to any area.",arm_modes:"Valvestamise olek",always_on:"(alati)"}},add_sensors:{title:"Andurite lisamine",description:"Lisa veel andureid. Mõistlik on panna neile arusaadav nimi (friendly_name).",no_items:"Puuduvad valvestamiseks sobivad Home Assistanti olemid. Lisatavad olemid peavad olema olekuandurid (binary_sensor).",table:{type:"Detected type"},actions:{add_to_alarm:"Lisa valvesüsteemile",filter_supported:"Hide items with unknown type"}},editor:{title:"Andurite sätted",description:"Muuda olemi ''{entity}'' sätteid.",fields:{area:{heading:"Ala",description:"Vali ala kus see andur asub."},group:{heading:"Group",description:"Group with other sensors for combined triggering."},device_type:{heading:"Seadme tüüp",description:"Vali anduri tüüp, et automaatselt rakendada sobivad sätted.",choose:{door:{name:"Uks",description:"Uks, värav või muu piire mida kasutatakse sisenemiseks või väljumiseks."},window:{name:"Aken",description:"Aken või uks mida ei kasutata sisenemiseks nagu rõduuks."},motion:{name:"Liikumisandur",description:"Kohaloleku andurid mille rakendumiste vahel on viide."},tamper:{name:"Terviklikkus",description:"Anduri muukimine või klaasipurustusandur jms."},environmental:{name:"Ohu andurid",description:"Suitsu või gaasilekke andur, veeleke jne. (ei ole seotud sissetungimisega)."},other:{name:"Tavaandur"}}},always_on:{heading:"Alati kasutusel",description:"Andur käivitab häire igas valve olekus."},modes:{heading:"Valve olekute valik",description:"Valve olekud kus seda andurit kasutatakse."},arm_on_close:{heading:"Valvesta sulgemisel",description:"Selle anduri rakendumisel valvestatakse kohe ilma viiveta."},use_exit_delay:{heading:"Use exit delay",description:"Sensor is allowed to be active when the exit delay starts."},use_entry_delay:{heading:"Use entry delay",description:"Sensor activation triggers the alarm after the entry delay rather than directly."},allow_open:{heading:"Lahkumisviivitus",description:"See andur ei aktiveeru enne lahkumisviivituse lõppu."},auto_bypass:{heading:"Bypass automatically",description:"Exclude this sensor from the alarm if it is open while arming.",modes:"Modes in which sensor may be bypassed"},trigger_unavailable:{heading:"Andurite saadavus",description:"Käivita häire kui andur muutub kättesaamatuks."}},actions:{toggle_advanced:"Täpsemad sätted",remove:"Eemalda",setup_groups:"Setup groups"},errors:{description:"Palun paranda jägmised vead:",no_area:"Ala pole määratud",no_modes:"Anduri tüüp on määramata, ei tea kuida kasutada",no_auto_bypass_modes:"No modes are selected for the sensor may be automatically bypassed"}}},dialogs:{manage_groups:{title:"Manage sensor groups",description:"In a sensor group multiple sensors must be activated within a time period before the alarm is triggered.",no_items:"No groups yet",actions:{new_group:"New group"}},create_group:{title:"New sensor group",fields:{name:{heading:"Name",description:"Name for sensor group"},timeout:{heading:"Time-out",description:"Time period during which consecutive sensor activations triggers the alarm."},sensors:{heading:"Sensors",description:"Select the sensors which are contained by this group."}},errors:{invalid_name:"Invalid name provided.",insufficient_sensors:"At least 2 sensors need to be selected."}},edit_group:{title:"Edit sensor group ''{name}''"}}},codes:{title:"Koodid",cards:{codes:{description:"Valvestuskoodide muutmine.",fields:{code_arm_required:{heading:"Valvestamine koodiga",description:"Valvestamiseks tuleb sisestada kood"},code_disarm_required:{heading:"Valvest vabastamise kood",description:"Valvest vabastamiseks tulem sisestada kood"},code_format:{heading:"Koodi vorming",description:"Kasutajaliidese koodi tüübid.",code_format_number:"PIN kood",code_format_text:"Salasõna"}}},user_management:{title:"Kasutajate haldus",description:"Igal kasutajal on oma juhtkood.",no_items:"Kasutajaid pole määratud",actions:{new_user:"Uus kasutaja"}},new_user:{title:"Lisa uus kasutaja",description:"Valvesüsteemi kasutaja lisamine.",fields:{name:{heading:"Nimi",description:"Kasutaja nimi."},code:{heading:"Valvestuskood",description:"Selle kasutaja kood."},confirm_code:{heading:"Koodi kinnitamine",description:"Sisesta sama kood uuesti."},can_arm:{heading:"Tohib valvestada",description:"Koodi sisestamine valvestab."},can_disarm:{heading:"Tohib valvest maha võtta",description:"Koodi sisestamine võtab valvest maha."},is_override_code:{heading:"Alistuskood",description:"Koodi sisestamine käivitab kohese häire"},area_limit:{heading:"Restricted areas",description:"Limit user to control only the selected areas"}},errors:{no_name:"Nimi puudub.",no_code:"Kood peab olema vhemalt 4 tärki.",code_mismatch:"Sisestatud koodid ei klapi."}},edit_user:{title:"Muuda kasutaja sätteid",description:"Muuda kasutaja ''{name}'' sätteid.",fields:{old_code:{heading:"Kehtiv kood",description:"Kehtiv kood, jäta tühjaks kui ei taha muuta."}}}}},actions:{title:"Toimingud",cards:{notifications:{title:"Teavitused",description:"Halda saadetavaid teavitusi",table:{no_items:"Teavitusi pole veel loodud.",no_area_warning:"Action is not assigned to any area."},actions:{new_notification:"Uus teavitus"}},actions:{description:"Arenduses, mõeldud seadmete lülitamiseks.",table:{no_items:"Toiminguid pole veel määratud."},actions:{new_action:"Uus toiming"}},new_notification:{title:"Loo teavitus",description:"Uue teavituse loomine.",trigger:"Condition",action:"Task",options:"Options",fields:{event:{heading:"Sündmus",description:"Mille puhul teavitada",choose:{armed:{name:"Valvestatud",description:"Valvestamine oli edukas"},disarmed:{name:"Valvest maas",description:"Valve mahavõtmine õnnestus"},triggered:{name:"Häire",description:"Valvesüsteem andis häire"},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"Valvestamine nurjus",description:"Valvestamine ei õnnestunud mõne anduri oleku või vea tõttu"},arming:{name:"Valvestamise eelne viivitus algas",description:"Algas valvestamise eelviide, majast võib lahkuda."},pending:{name:"Sisenemise viide rakendus",description:"Märgati sisenemist, häire rakendub peale viidet."}}},mode:{heading:"Olek",description:"Millises valve olekus teavitada (valikuline)"},title:{heading:"Päis",description:"Teavitussõnumi päis"},message:{heading:"Sisu",description:"Teavitussõnumi tekst",insert_wildcard:"Insert wildcard",placeholders:{armed:"The alarm is set to {{arm_mode}}",disarmed:"The alarm is now OFF",triggered:"The alarm is triggered! Cause: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"The alarm could not be armed right now, due to: {{open_sensors}}.",arming:"The alarm will be armed soon, please leave the house.",pending:"The alarm is about to trigger, disarm it quickly!"}},open_sensors_format:{heading:"Format for open_sensors wildcard",description:"Choose which sensor information in inserted in the message",options:{default:"Names and states",short:"Names only"}},arm_mode_format:{heading:"Translation for arm_mode wildcard",description:"Choose in which language the arm mode is inserted in the message"},target:{heading:"Saaja",description:"Seade millele edastada teavitus"},name:{heading:"Nimi",description:"Teavituse kirjeldus",placeholders:{armed:"Notify {target} upon arming",disarmed:"Notify {target} upon disarming",triggered:"Notify {target} when triggered",untriggered:"Notify {target} when triggering stops",arm_failure:"Notify {target} on failure",arming:"Notify {target} when leaving",pending:"Notify {target} when arriving"}},delete:{heading:"Delete automation",description:"Permanently remove this automation"}},actions:{test:"Try it"}},new_action:{title:"Loo toiming",description:"Seadme oleku muutmine valve oleku muutmisel.",fields:{event:{heading:"Sündmus",description:"Millisel juhul käivitada toiming"},area:{heading:"Ala",description:"Ala millele sündmus rakendub, põhiala puhul jäta tühjaks."},mode:{heading:"Olek",description:"Millises valve olekus toiming käivitada (valikuline)"},entity:{heading:"Olem",description:"Toimingu olem"},action:{heading:"Toiming",description:"Olemi toiming",no_common_actions:"Actions can only be assigned in YAML mode for the selected entities."},name:{heading:"Nimi",description:"Toimingu kirjeldus",placeholders:{armed:"Set {entity} to {state} upon arming",disarmed:"Set {entity} to {state} upon disarming",triggered:"Set {entity} to {state} when triggered",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Set {entity} to {state} on failure",arming:"Set {entity} to {state} when leaving",pending:"Set {entity} to {state} when arriving"}}}}}}},ot={common:st,components:nt,title:"Alarm panel",panels:rt},lt=Object.freeze({__proto__:null,common:st,components:nt,title:"Alarm panel",panels:rt,default:ot}),dt={modes_short:{armed_away:"Absence",armed_home:"Présence",armed_night:"Nuit",armed_custom_bypass:"Personnalisé",armed_vacation:"Vacances"},enabled:"Actif",disabled:"Inactif"},ct={time_slider:{seconds:"sec",minutes:"min",infinite:"infini",none:"Aucune"},editor:{ui_mode:"Afficher l'éditeur visuel",yaml_mode:"Afficher l'éditeur de code",edit_in_yaml:"Editer en YAML"},table:{filter:{label:"Filtrer par items",item:"Filtrer par {name}",hidden_items:"{number} {number, plural,\n  one { item est caché}\n  other { items sont cachés}\n} "}}},ht="Configuration de l' alarme",mt={general:{title:"Généraux",cards:{general:{description:"Ce panneau définit les paramètres globaux de l'alarme.",fields:{disarm_after_trigger:{heading:"Désactivation après déclenchement",description:"Lors que le temps de fonctionnement de la sirène est écoulé, désactive l'alarme au lieu de la réactiver."},enable_mqtt:{heading:"Utilisation avec MQTT",description:"Permet au panneau d'alarme d'être contrôlé via MQTT."},enable_master:{heading:"Activation de commande centralisée",description:"Créer une entité pour piloter toutes les zones en même temps."}},actions:{setup_mqtt:"Configuration MQTT",setup_master:"Configuration pricipale"}},modes:{title:"Modes",description:"Ce panneau définit le mode de gestion pour chaque type d'activation.",modes:{armed_away:"Ce mode sera utilisé lorsque toutes les personnes auront quitté la maison. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées, les détecteurs de mouvement à l'intérieur de la maison seront opérationnels.",armed_home:"Ce mode sera utilisée lorsque des personnes sont dans la maison. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées (périmétrie), les détecteurs de mouvement à l'intérieur de la maison seront inopérants.",armed_night:"Ce mode sera utilisé lors du réglage de l'alarme avant de s'endormir. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées, et les capteurs de mouvement sélectionnés (ex : rez de chaussée) dans la maison seront opérationnels.",armed_vacation:"Ce mode peut être utilisé comme une extension du mode armé absent en cas d'absence pour une durée plus longue. Les temps de retard et les réponses de déclenchement peuvent être adaptés (au choix) à l'éloignement du domicile.",armed_custom_bypass:"Ce mode supplémentaire permet de définir votre propre périmètre de sécurité."},number_sensors_active:"{number} {number, plural,\n  one {capteur actif}\n  other {capteurs actifs}\n} ",fields:{status:{heading:"Statut",description:"Active l'alarme dans ce mode."},exit_delay:{heading:"Délai pour sortir",description:"Lors de l'activation, pendant cette période, les capteurs ne déclencheront pas l'alarme."},entry_delay:{heading:"Délai pour entrer",description:"Temps d'attente avant que l'alarme ne se déclenche après détection d'un des capteurs."},trigger_time:{heading:"Temps de fonctionnement",description:"Temps de fonctionnement de la sirène"}}},mqtt:{title:"Configuration MQTT",description:"Ce panneau peut être utilisé pour la configuration de l'interface MQTT.",fields:{state_topic:{heading:"Etat des données",description:"Donnée sur laquelle les mises à jour d'état sont publiées"},event_topic:{heading:"Evènement de données",description:"Donnée sur laquelle les évènements d'état sont publiés"},command_topic:{heading:"Commande de données",description:"Donnée sur laquelle les commandes d'armement / désarmement sont envoyées."},require_code:{heading:"Code requis",description:"Exige que le code soit envoyé avec la commande."},state_payload:{heading:"Configurer une valeur par état",item:"Définir une valeur par état ''{state}''"},command_payload:{heading:"Configurer une valeur par commande",item:"Définir une valeur par commande ''{command}''"}}},areas:{title:"Zones",description:"Les zones peuvent être utilisées pour diviser votre système d'alarme en plusieurs secteurs.",no_items:"Il n'y a pas encore de zone définie.",table:{remarks:"Remarque",summary:"Cette zone contient des {summary_sensors} et {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {capteur}\n  other {capteurs}\n}",summary_automations:"{number} {number, plural,\n  one {automatisation}\n  other {automatisations}\n}"},actions:{add:"Ajouter"}}},dialogs:{create_area:{title:"Nouvelle zone",fields:{copy_from:"Copier les paramètres"}},edit_area:{title:"Editer la zone ''{area}''",name_warning:"Note: Changer le nom, changera l'entity ID"},remove_area:{title:"Suppression de zone?",description:"Etes vous sur de vouloir supprimer cette zone? Cette zone contient {sensors} des capteurs et {automations} automatisations, qui seront également supprimés."},edit_master:{title:"Configuration principale"},disable_master:{title:"Désactiver la configuration principale?",description:"Etes vous sur de vouloir supprimer la configuration principale? Cette zone contient {automations} automatisations, qui seront également supprimées."}}},sensors:{title:"Capteurs",cards:{sensors:{description:"Capteurs actuellement configurés. Cliquez sur une entité pour apporter des modifications.",table:{no_items:"Il n'y a pas encore de capteur ajouté à l'alarme. Assurez-vous de les ajouter d'abord.",no_area_warning:"Le capteur n'est affecté à aucune zone.",arm_modes:"Type d'activation",always_on:"(Toujours)"}},add_sensors:{title:"Ajouter un capteur",description:"Ajoutez plus de capteurs. Assurez-vous que vos capteurs ont un nom personnalisé afin de pouvoir les identifier.",no_items:"Aucune entité HA disponible ne peut être configurée pour l'alarme. Assurez-vous d'inclure les entités de type binary_sensor.",table:{type:"Type de détection"},actions:{add_to_alarm:"Ajouter à l'alarme",filter_supported:"Masquer les éléments de type inconnu"}},editor:{title:"Editer un capteur",description:"Configurer les paramètres du capteur ''{entity}''.",fields:{area:{heading:"Zone",description:"Selectionner une zone contenant ce capteur."},group:{heading:"Groupe",description:"Grouper avec d'autres capteurs pour un déclenchement combiné."},device_type:{heading:"Type de détection",description:"Choisissez un type de détection pour appliquer automatiquement les paramètres appropriés.",choose:{door:{name:"Porte",description:"Une porte, un portail ou une autre entrée utilisée pour entrer / sortir de la maison."},window:{name:"Fenêtre",description:"Une fenêtre, ou une porte non utilisée pour entrer dans la maison comme un balcon."},motion:{name:"Mouvement",description:"Capteur de présence ou appareil similaire présentant un délai entre les activations."},tamper:{name:"Effraction",description:"Détection d'arrachage du capteur, capteur de bris de verre, etc.."},environmental:{name:"Détecteur Environmental",description:"Détecteur de fumée / gaz, détecteur de fuite, etc. (non lié à la protection anti-effraction)."},other:{name:"Générique"}}},always_on:{heading:"Toujours en service",description:"Le capteur doit toujours déclencher l'alarme."},modes:{heading:"Mode possible",description:"Modes d'alarme dans lesquels ce capteur est actif."},arm_on_close:{heading:"Activer après fermeture",description:"Après la désactivation de ce capteur, le délai de sortie restant sera automatiquement ignoré."},use_exit_delay:{heading:"Utiliser le délai de sortie",description:"Le capteur sera actif à la fin du délai de sortie."},use_entry_delay:{heading:"Utiliser le délai d'entrée",description:"L'activation du capteur déclenche l'alarme après le délai d'entrée plutôt qu'instantanément."},allow_open:{heading:"Autoriser l'ouverture lors de l'activation",description:"Permet à ce capteur d'être actif, peu de temps après votre départ afin qu'il ne bloque pas l'armement."},auto_bypass:{heading:"Bypass automatique",description:"Exclut ce capteur de l'alarme s'il est ouvert lors de l'armement.",modes:"Modes dans lesquels le capteur peut être  ignoré"},trigger_unavailable:{heading:"Déclenchement lorsqu'il n'est pas disponible",description:"Lorsque l'état du capteur devient `` indisponible '', cela activera l'alarme."}},actions:{toggle_advanced:"Paramètres avancées",remove:"Supprimer",setup_groups:"Configuration de Groupe"},errors:{description:"Veuillez corriger les erreurs suivantes:",no_area:"Aucune zone n'est sélectionnée",no_modes:"Aucun mode sélectionné pour lequel le capteur doit être actif",no_auto_bypass_modes:"Aucun mode n'est sélectionné car le capteur peut être automatiquement ignoré"}}},dialogs:{manage_groups:{title:"Gérer les groupes de capteurs",description:"Dans un groupe de capteurs, plusieurs capteurs doivent être activés dans un laps de temps avant que l'alarme ne se déclenche.",no_items:"Aucun groupe",actions:{new_group:"Nouveau groupe"}},create_group:{title:"Nouveau groupe de capteurs",fields:{name:{heading:"Nom",description:"Nom du nouveau groupe de capteurs"},timeout:{heading:"Laps de temps",description:"Période de temps pendant laquelle les activations consécutives du capteur déclenchent l'alarme."},sensors:{heading:"Capteurs",description:"Sélectionnez les capteurs qui sont contenus dans ce groupe."}},errors:{invalid_name:"Nom fourni non valide.",insufficient_sensors:"Au moins 2 capteurs doivent être sélectionnés."}},edit_group:{title:"Editer le groupe de capteurs ''{name}''"}}},codes:{title:"Codes",cards:{codes:{description:"Gestion des paramètres des codes.",fields:{code_arm_required:{heading:"Utiliser un code pour l'activation",description:"Code requis pour l'activation de l'alarme"},code_disarm_required:{heading:"Utiliser un code pour la désactivation",description:"Code requis pour la désactivation de l'alarme"},code_format:{heading:"Format du code",description:"Définit le type d'entrée pour la carte d'alarme Lovelace.",code_format_number:"pincode",code_format_text:"password"}}},user_management:{title:"Gestion des codes",description:"Chaque utilisateur a son propre code pour activer / désactiver l'alarme.",no_items:"Il n'y a aucun utilisateur de défini",actions:{new_user:"Nouvel utilisateur"}},new_user:{title:"Créer un nouvel utilisateur",description:"Des utilisateurs peuvent être créés pour donner accès au fonctionnement de l'alarme.",fields:{name:{heading:"Nom",description:"Nom de l'utilisateur."},code:{heading:"Code",description:"Code personnel de l'utilisateur."},confirm_code:{heading:"Confirmation du code",description:"Répèter le  code."},can_arm:{heading:"Demande de code pour l'activation",description:"Entrer ce code pour activer l'alarme."},can_disarm:{heading:"Demande de code pour désactivation",description:"Entrer ce code pour désactiver l'alarme."},is_override_code:{heading:"Code de sécurité",description:"La saisie de ce code forcera l'activation l'alarme."},area_limit:{heading:"Zones Restreintes",description:"L'utilisateur ne peut contrôler uniquement les zones sélectionnées"}},errors:{no_name:"Aucun nom saisi.",no_code:"Le code doit contenir 4 caractères/chiffres minimum.",code_mismatch:"Les codes sont différents."}},edit_user:{title:"Editer l'utilisateur",description:"Changer la  configuration pour l'utilisateur ''{name}''.",fields:{old_code:{heading:"Code utilisé",description:"Code actuel, laissez vide pour ne rien changer."}}}}},actions:{title:"Actions",cards:{notifications:{title:"Notifications",description:"À l'aide de ce panneau, vous pouvez gérer les notifications à envoyer lors d'un évènement d'alarme",table:{no_items:"Il n'y a aucune notification de créée.",no_area_warning:"L'action n'est affectée à aucune zone."},actions:{new_notification:"Nouvelle notification"}},actions:{description:"Ce panneau est  utilisé pour changer d'état les appareils de votre choix.",table:{no_items:"Il n'y a aucune action de créer."},actions:{new_action:"Nouvelle action"}},new_notification:{title:"Créer une notification",description:"Créer une nouvelle notification.",trigger:"Condition",action:"Action",options:"Options",fields:{event:{heading:"Evènement",description:"Détermine quand la notification doit être envoyée",choose:{armed:{name:"Alarme activée ",description:"l'alarme s'est correctement activée"},disarmed:{name:"Alarme désactivée",description:"L'alarme est désactivée"},triggered:{name:"Alarme déclenchée",description:"L'alarme est déclenchée"},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"Armement impossible",description:"L'armement est impossible dû à un ou plusieurs capteurs"},arming:{name:"Délai de sortie activé",description:"Le délai de sortie est activé, vous devez quitter la maison."},pending:{name:"Délai d'entrée activé",description:"Le délai d'entrée est activé, sans action de désarmement, l'alarme va se déclencher."}}},mode:{heading:"Mode",description:"Limite la notification à un mode spécifique (optionnel)"},title:{heading:"Titre",description:"Titre du message de la notification"},message:{heading:"Message",description:"Contenu du message de la notification",insert_wildcard:"Inserer la wildcard",placeholders:{armed:"L'alarme est réglée sur {{arm_mode}}",disarmed:"L'alarme est maintenant désactivée",triggered:"L'alarme est déclenchée! En cause: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"L'alarme n'a pas pu être armée pour le moment, en cause: {{open_sensors}}.",arming:"L'alarme sera bientôt armée, veuillez quitter la maison.",pending:"L'alarme est sur le point de se déclencher, désarmez-la rapidement!"}},open_sensors_format:{heading:"Format pour les  'open_sensors wildcard'",description:"Choisissez les informations du capteur à insérer dans le message",options:{default:"Noms et états",short:"Noms seulement"}},arm_mode_format:{heading:"Traduction pour 'arm_mode wildcard'",description:"Choisissez dans quelle langue le mode d'armement est inséré dans le message"},target:{heading:"Cible",description:"Appareil recevant le message"},name:{heading:"Nom",description:"Description de la notification",placeholders:{armed:"Notification à l'armement de : {target}",disarmed:"Notification au désarmement de : {target}",triggered:"Notification au déclenchement de : {target}",untriggered:"Notify {target} when triggering stops",arm_failure:"Notification en cas d'échec de : {target}",arming:"Notification en quittant de : {target}",pending:"Notification au retour de : {target}"}},delete:{heading:"Supprimer l'automatisme",description:"Supprimer définitivement cet automatisme"}},actions:{test:"Essai"}},new_action:{title:"Créer une action",description:"Ce panneau peut être utilisé pour commuter un appareil lorsque l'état de l'alarme change.",fields:{event:{heading:"Evènement",description:"Détermine quand l'action doit être exécutée"},area:{heading:"Zone",description:"Zone pour laquelle l'évènement s'applique, laissez vide pour sélectionner l'alarme globale."},mode:{heading:"Mode",description:"Limite l'action à un mode spécifique (optionnel)"},entity:{heading:"Entité",description:"Entité sur laquelle effectuer une action"},action:{heading:"Action",description:"Action à exécuter sur l'entité",no_common_actions:"Les actions ne peuvent être affectées qu'en mode YAML pour les entités sélectionnées."},name:{heading:"Nom",description:"Description de  l'action",placeholders:{armed:"Mettre {entity} à {state} lors de l'armement",disarmed:"Mettre {entity} à {state} lors du désarmement",triggered:"Mettre {entity} à {state} lors du déclenchement de l'alarme",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Mettre {entity} à {state} en cas d'échec de l'armement",arming:"Mettre {entity} à {state} lors du départ de la maison",pending:"Mettre {entity} à {state} lors du retour à la maison"}}}}}}},ut={common:dt,components:ct,title:ht,panels:mt},pt=Object.freeze({__proto__:null,common:dt,components:ct,title:ht,panels:mt,default:ut}),gt={modes_short:{armed_away:"Fuori casa",armed_home:"In casa",armed_night:"Notte",armed_custom_bypass:"Personalizzato",armed_vacation:"Vacanza"},enabled:"Abilitato",disabled:"Disabilitato"},vt={time_slider:{seconds:"sec",minutes:"min",infinite:"infinito",none:"niente"},editor:{ui_mode:"Passa a UI",yaml_mode:"Passa a YAML",edit_in_yaml:"Modifica in YAML"},table:{filter:{label:"Filtra elementi",item:"Filtra per {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items are}\n} hidden"}}},ft={general:{title:"Generale",cards:{general:{description:"Questo pannello definisce alcune impostazioni da applicare alle modalità di allarme.",fields:{disarm_after_trigger:{heading:"Disattiva allarme dopo l'attivazione",description:"Dopo che il tempo di attivazione è scaduto, disattivare l'allarme invece di tornare allo stato inserito."},enable_mqtt:{heading:"Abilita MQTT",description:"Permetti al pannello allarme di essere controllato attraverso MQTT."},enable_master:{heading:"Abilita Allarme Master",description:"Crea una entità per controllare tutte le aree simultaneamente."}},actions:{setup_mqtt:"Configurazione MQTT",setup_master:"Configurazione Master"}},modes:{title:"Modalità",description:"Questo pannello può essere usato per impostare le modalità dell'allarme.",modes:{armed_away:"Modalità 'fuori casa': da utilizzare quando tutte le persone lasciano la casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, così come i sensori di movimento all'interno della casa.",armed_home:"Modalità 'in casa': da utilizzare quando si attiva l'allarme mentre le persone sono in casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, ma non i sensori di movimento all'interno della casa.",armed_night:"Modalità 'notte': da utilizzare quando si imposta la sveglia prima di andare a dormire. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi e sensori di movimento selezionati (ad esempio al piano di sotto) nella casa.",armed_vacation:"Modalità 'vacanza': da utlizzare come estensione della modalità 'fuori casa' in caso di assenza prolungata. I ritardi e i tempi di attivazione possono essere adattati per essere distanti da casa.",armed_custom_bypass:"Modalità 'personalizzato': da utilizzare per definire una modalità di allarme specifica per le esigenze dell'utilizzatore."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n} active",fields:{status:{heading:"Stato",description:"Definisce quando l'allarme può essere armato in questa modalità."},exit_delay:{heading:"Tempo di preattivazione",description:"Quando si attiva l'allarme, entro questo periodo di tempo i sensori non attiveranno ancora l'allarme."},entry_delay:{heading:"Ritardo di attivazione",description:"Tempo di ritardo fino allo scatto dell'allarme dopo l'attivazione di uno dei sensori."},trigger_time:{heading:"Tempo di attivazione",description:"Tempo durante il quale suonerà la sirena."}}},mqtt:{title:"Configurazione MQTT",description:"Questo pannello può essere usato per le impostazioni MQTT.",fields:{state_topic:{heading:"Topic di stato",description:"Topic su cui vengono pubblicati gli aggiornamenti di stato"},event_topic:{heading:"Event topic",description:"opic su cui vengono pubblicati gli eventi"},command_topic:{heading:"Topic di comando",description:"Topic su cui vengono inviati i comandi di inserimento / disinserimento."},require_code:{heading:"Richiedi Codice",description:"Richiedi il codice da inviare con il comando."},state_payload:{heading:"Configura payload per stato",item:"Definisci un payload per lo stato ''{state}''"},command_payload:{heading:"Configura payload per comando",item:"Definisci un payload per il comando ''{command}''"}}},areas:{title:"Aree",description:"Le aree possono essere utilizzate per dividere il tuo allarme in più sezioni.",no_items:"Non ci sono ancora aree definite.",table:{remarks:"Commenti",summary:"Questa area contiene {summary_sensors} e {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensors}\n}",summary_automations:"{number} {number, plural,\n  one {automation}\n  other {automations}\n}"},actions:{add:"Add"}}},dialogs:{create_area:{title:"Nuova area",fields:{copy_from:"Copia impostazioni da"}},edit_area:{title:"Modifica Area ''{area}''",name_warning:"Nota: cambiare il nome modificherà l'entity ID"},remove_area:{title:"Rimuovi Area?",description:"Sei sicuro che vuoi rimuovere questa area? Questa area contiene {sensors} sensori e {automations} automazioni, che verranno anch'esse rimossi."},edit_master:{title:"Configura Master"},disable_master:{title:"Disabilita Master?",description:"Sei sicuro che vuoi rimuovere l'allarme master? Questa area contiene {automations} automazioni, che verranno eliminate con questa azione."}}},sensors:{title:"Sensori",cards:{sensors:{description:"Sensori attualmente configurati. Clicca sull'entità per modificare.",table:{no_items:"Non ci sono ancora sensori aggiunti a questo allarme. Assicurati di aggiungerli prima.",no_area_warning:"Sensore non assegnato a nessuna area.",arm_modes:"Modalità di attivazione",always_on:"(Sempre)"}},add_sensors:{title:"Aggiungi Sensori",description:"Aggiungi più sensori. Assicurati che i sensori abbiano un friendly_name (nome amichevole), in modo da identificarli più facilmente.",no_items:"Non ci sono entità disponibili che possono essere configurate con l'allarme. Assicurati di includere entità del tipo binary_sensor (sensore binario).",table:{type:"Tipologia Innesco"},actions:{add_to_alarm:"aggiungi all'allarme",filter_supported:"Nascondi elementi con tipologia sconosciuta"}},editor:{title:"Modifica Sensore",description:"Configura le impostazioni del sensore ''{entity}''.",fields:{area:{heading:"Area",description:"Seleziona una area che contiene questo sensore."},group:{heading:"Gruppo",description:"Raggruppa con altri sensori per inneschi combinati."},device_type:{heading:"Tipologia Dispositivo",description:"Scegli la tipologia del dispositivo per applicare le impostazioni appropriate.",choose:{door:{name:"Porta",description:"Una porta, cancello o altro ingresso che è usato per entrare/lasciare casa."},window:{name:"Finestra",description:"Una finestra, o una porta-finestra non usata per accedere alla casa."},motion:{name:"Movimento",description:"Sensore di presenza o simile che ha un ritardo tra le attivazioni."},tamper:{name:"Vibrazione",description:"Rilaveamento di vibrazione, rottura vetri, ecc."},environmental:{name:"Ambientale",description:"Rilevatori fumo/gas, ecc. (non correlati alla protezione intrusi)."},other:{name:"Generico"}}},always_on:{heading:"Sempre attivo",description:"Il sensore attiverà sempre l'allarme."},modes:{heading:"Modalità attive",description:"Modalità di allarme in cui il sensore risulta collegato."},arm_on_close:{heading:"Attiva dopo chisura after closing",description:"Dopo la disattivazione di questo sensore il ritardo rimanente verrà automaticamente skippato."},use_exit_delay:{heading:"Usa Ritardo d'uscita",description:"Sensore che può rimanre attivo mentre il ritardo di uscita è in corso."},use_entry_delay:{heading:"Usa ritardo in ingresso",description:"Sensore che innesca l'allarme dopo il ritardo in ingresso anzichè direttamente."},allow_open:{heading:"Permetti apertura",description:"Consentire a questo sensore di rimanere attivo poco dopo essere usciti."},auto_bypass:{heading:"Bypass automatico",description:"Escludi questo sensore dall'allarme se è aperto durante l'attivazione.",modes:"Modalità in cui il sensore può essere bypassato"},trigger_unavailable:{heading:"Fai scattare l'allarme quando non disponibile",description:"L'allarme scatterà quando lo stato del sensore diverrà 'non disponibile'."}},actions:{toggle_advanced:"Impostazione avanzate",remove:"Rimuovi",setup_groups:"Setup gruppi"},errors:{description:"Per favore correggi i seguenti errori:",no_area:"Nessuna area è selezionata",no_modes:"Nessuna modalità è selezionata per la quale il sensore dovrebbe essere attivo",no_auto_bypass_modes:"Nessuna modalità è selezionata per il sensore che può essere automaticamente bypassato"}}},dialogs:{manage_groups:{title:"Gestisci gruppi sensori",description:"In un gruppo sensori più sensori devono essere attivi in un intevallo di tempo prima che l'allarme sia innescato.",no_items:"Nessun gruppo",actions:{new_group:"Nuovo gruppo"}},create_group:{title:"Nuovo gruppo sensori",fields:{name:{heading:"Nome",description:"Nome del gruppo sensori"},timeout:{heading:"Time-out",description:"Periodo di tempo durante il quale l'attivazione consecutiva innesca l'allarme."},sensors:{heading:"Sensori",description:"Seleziona i sensori che fanno parte di questo gruppo."}},errors:{invalid_name:"Nome non valido.",insufficient_sensors:"Almeno 2 sensori devono essere selezionati."}},edit_group:{title:"Modifica gruppo sensori ''{name}''"}}},codes:{title:"Codici",cards:{codes:{description:"Modifica le impostazioni dei codici.",fields:{code_arm_required:{heading:"Usa codice d'attivazione",description:"Richiedi un codice per attivare l'allarme"},code_disarm_required:{heading:"Usa codice di disattivazione",description:"Richiedi un codice per disattivare l'allarme"},code_format:{heading:"Formato del codice",description:"Imposta il tipo di codice da digitare nella card di Lovelace.",code_format_number:"codice numerico",code_format_text:"password"}}},user_management:{title:"Gestione dei codici",description:"Ogni utente ha il suo codice per attivare/disattivare l'allarme.",no_items:"Non è stato creato nessun utente per ora",actions:{new_user:"Nuovo utente"}},new_user:{title:"Crea nuovo utente",description:"Gli utenti potranno operare con l'allarme.",fields:{name:{heading:"Nome",description:"Nome dell'utente."},code:{heading:"Codice operativo",description:"Codice che utilizzerà quest'utente."},confirm_code:{heading:"Ripeti codice operativo",description:"Ripeti il codice operativo scelto."},can_arm:{heading:"Utilizza codice per attivare l'allarme",description:"Utilizza codice per attivare l'allarme"},can_disarm:{heading:"Utilizza codice per disattivare l'allarme",description:"Utilizza codice per disattivare l'allarme"},is_override_code:{heading:"E' un codice di forzatura",description:"Inserendo questo codice forzerai lo stato di attivazione dell'allarme"},area_limit:{heading:"Aree riservate areas",description:"Limita l'utente a controllare solo le aree selezionate"}},errors:{no_name:"Non hai inserito il nome.",no_code:"Il codice deve avere almeno 4 numeri o caratteri.",code_mismatch:"Il codice scelto non combacia, verifica il codice inserito."}},edit_user:{title:"Modifica Utente",description:"Cambia impostazioni per l'utente ''{name}''.",fields:{old_code:{heading:"Modifica Codice",description:"Codice attuale, lascia vuoto per non modificare."}}}}},actions:{title:"Azioni",cards:{notifications:{title:"Notifiche",description:"Con questo pannello puoi gestire le notifiche da inviare quanto accade un determinato evento",table:{no_items:"Non è stata creata nessuna notifica per ora.",no_area_warning:"Azione non assegnata a nessuna."},actions:{new_notification:"Nuova notifica"}},actions:{description:"Questo pannello è in fase di sviluppo. Sarà usato per cambiare lo stato di una o più entità.",table:{no_items:"Non è stata creata nessuna azione per ora."},actions:{new_action:"Nuova azione"}},new_notification:{title:"Crea notifica",description:"Crea una nuova notifica.",trigger:"Condizione",action:"Azione",options:"Opzioni",fields:{event:{heading:"Evento",description:"Quando questa notifica deve essere inviata",choose:{armed:{name:"Allarme attivato",description:"L'allarme è attivo"},disarmed:{name:"Allarme disattivato",description:"L'allarme è disattivato"},triggered:{name:"Allarme innescato",description:"L'allarme è innescato"},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"Impossibile attivare",description:"L'attivazione dell'allarme non è riuscita a casa di uno o più sensori aperti"},arming:{name:"Ritardo d'uscita partito",description:"Ritardo d'uscita partito, preparati a lasciare la casa."},pending:{name:"Ritardo in ingresso partito",description:"Ritardo in ingresso partito, l'allarme verrà innescato a breve."}}},mode:{heading:"Modalità",description:"Limita ad una specifica modalità di allarme (opzionale)"},title:{heading:"Titolo",description:"Titolo per il messaggio di notifica"},message:{heading:"Messaggio",description:"Contenuto del messaggio di notifica",insert_wildcard:"Inserisci wildcard",placeholders:{armed:"L'allarme è impostato in {{arm_mode}}",disarmed:"L'allarme è disattivatoF",triggered:"L'allarme è stato innescato! Causa: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"L'allarme non può essere attivato adesso. Causa: {{open_sensors}}.",arming:"L'allarme verrà attivato a breve, per favore lascia la casa.",pending:"L'allarme sta per essere innescato, disattivalo velocemente!"}},open_sensors_format:{heading:"Formato per la wildcard open_sensors",description:"Scegli quale informazione è inserita nel messaggio",options:{default:"Nomi e stati",short:"Nomi soltanto"}},arm_mode_format:{heading:"Traduzione per le wildcard per arm_mode",description:"Scegli la lingua in cui è scritto il messaggio"},target:{heading:"Destinatario",description:"Dispositivo a cui inviare il messaggio di notifica"},name:{heading:"Nome",description:"Descrizione della notifica",placeholders:{armed:"Notifica {target} in attivazione",disarmed:"Notifica {target} in disattivazione",triggered:"Notifica {target} quando innescato",untriggered:"Notify {target} when triggering stops",arm_failure:"Notifica {target} quando impossibile attivare",arming:"Notifica {target} in uscita",pending:"Notifica {target} in ingresso"}},delete:{heading:"Elimina automazione",description:"Elimina l'automazione permanentemente"}},actions:{test:"Prova"}},new_action:{title:"Crea azione",description:"Questo pannello può essere usato per cambiare lo stato di un entità quando lo stato dell'allarme cambia.",fields:{event:{heading:"Evento",description:"Quando questa azione deve essere eseguita"},area:{heading:"Area",description:"Area nella quale l'evento avviene, lascia vuoti per selezionare l'intero allarme."},mode:{heading:"Modalità",description:"Limita ad una specifica modalità di allarme (opzionale)"},entity:{heading:"Entità",description:"Entità su cui eseguire l'azione"},action:{heading:"Azione",description:"Azione che deve eseguire l'entità",no_common_actions:"Le azioni possono essere definite solo in YAML mode per le entità selezionate."},name:{heading:"Nome",description:"Descrizione dell'azione",placeholders:{armed:"Imposta {entity} su {state} in attivazione",disarmed:"Imposta {entity} su {state} in disattivazione",triggered:"Imposta {entity} su {state} in innesco",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Imposta {entity} su {state} quando è impossibile attivare",arming:"Imposta {entity} su {state} in uscita",pending:"Imposta {entity} su {state} in entrata"}}}}}}},_t={common:gt,components:vt,title:"Pannello Allarme",panels:ft},bt=Object.freeze({__proto__:null,common:gt,components:vt,title:"Pannello Allarme",panels:ft,default:_t}),yt={modes_short:{armed_away:"Afwezig",armed_home:"Thuis",armed_night:"Nacht",armed_custom_bypass:"Aangepast",armed_vacation:"Vakantie"},enabled:"Actief",disabled:"Inactief"},wt={time_slider:{seconds:"sec",minutes:"min",infinite:"oneindig",none:"geen"},editor:{ui_mode:"Naar UI",yaml_mode:"Naar YAML",edit_in_yaml:"In YAML bewerken"},table:{filter:{label:"Items filteren",item:"Filter op {name}",hidden_items:"{number} {number, plural,\n  one {item is}\n  other {items zijn}\n} verborgen"}}},$t={general:{title:"Algemeen",cards:{general:{description:"Dit paneel definieert enkele instellingen die van toepassing zijn op alle inschakelmodi.",fields:{disarm_after_trigger:{heading:"Uitschakelen na activatie",description:"Nadat de triggertijd is verstreken, schakelt u het alarm uit in plaats van terug te keren naar de ingeschakelde toestand."},enable_mqtt:{heading:"MQTT inschakelen",description:"Toestaan het alarmpaneel via MQTT aan te sturen."},enable_master:{heading:"Master alarm inschakelen",description:"Creëert een entiteit om alle gebieden tegelijkertijd te besturen."}},actions:{setup_mqtt:"MQTT Configuratie",setup_master:"Master configuratie"}},modes:{title:"Modi",description:"Dit paneel kan worden gebruikt om de inschakelmodi van het alarm in te stellen.",modes:{armed_away:"De afwezigheidsmodus wordt gebruikt als alle mensen het huis hebben verlaten. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, evenals bewegingssensoren in het huis.",armed_home:"De thuismodus wordt gebruikt bij het instellen van het alarm terwijl er mensen in huis zijn. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, maar bewegingssensoren in het huis worden niet gebruikt.",armed_night:"De nachtmodus wordt gebruikt bij het instellen van het alarm voordat u gaat slapen. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, en geselecteerde bewegingssensoren (beneden) in het huis.",armed_vacation:"De vakantiemodus dient voor afwezigheid voor langere duur. Er kunnen desgewenst andere vertragingstijden en acties worden ingesteld die beter passen bij de situatie.",armed_custom_bypass:"Een extra modus om uw eigen beveiligingsperimeter te definiëren."},number_sensors_active:"{number} {number, plural,\n  one {sensor}\n  other {sensoren}\n} ingesteld",fields:{status:{heading:"Status",description:"Stel in of het alarm op deze modus kan worden ingesteld."},exit_delay:{heading:"Vertrek vertraging",description:"Bij het inschakelen van het alarm zullen de sensoren binnen deze tijdsperiode het alarm nog niet activeren."},entry_delay:{heading:"Binnenkomst vertraging",description:"Vertragingstijd totdat het alarm afgaat nadat een van de sensoren is geactiveerd."},trigger_time:{heading:"Activatie tijd",description:"Tijd waarin het alarm in de geactiveerde toestand blijft na activatie."}}},mqtt:{title:"MQTT configuratie",description:"Dit paneel kan worden gebruikt voor configuratie van de MQTT-interface.",fields:{state_topic:{heading:"Toestand topic",description:"Topic waarop statusupdates worden gepubliceerd"},event_topic:{heading:"Gebeurtenis topic",description:"Topic waarop gebeurtenissen worden gepubliceerd"},command_topic:{heading:"Commando topic",description:"Topic waarop commando's voor in- / uitschakelen worden verzonden."},require_code:{heading:"Vereis code",description:"Vereis dat de code wordt verzonden met de opdracht."},state_payload:{heading:"Configureer de payload per toestand",item:"Definieer een payload voor toestand ''{state}''"},command_payload:{heading:"Configureer een payload per commando",item:"Definieer een payload voor commando ''{command}''"}}},areas:{title:"Gebieden",description:"Gebieden kunnen worden gebruikt om uw alarmsysteem in meerdere compartimenten op te delen.",no_items:"Er zijn nog geen gebieden gedefinieerd.",table:{remarks:"Opmerkingen",summary:"Dit gebied bevat {summary_sensors} en {summary_automations}.",summary_sensors:"{number} {number, plural,\n  one {sensor}\n  other {sensoren}\n}",summary_automations:"{number} {number, plural,\n  one {automatisering}\n  other {automatiseringen}\n}"},actions:{add:"Toevoegen"}}},dialogs:{create_area:{title:"Nieuw gebied",fields:{copy_from:"Kopieer instellingen van"}},edit_area:{title:"Bewerken van gebied ''{area}''",name_warning:"Opmerking: als u de naam wijzigt, wordt de entiteits-ID gewijzigd"},remove_area:{title:"Gebied verwijderen?",description:"Weet u zeker dat u dit gebied wilt verwijderen? Dit gebied bevat {sensors} sensoren en {automations} automatiseringen, die ook zullen worden verwijderd."},edit_master:{title:"Master configuratie"},disable_master:{title:"Master uitschakelen?",description:"Weet u zeker dat u het master alarm wilt verwijderen? Dit gebied bevat {automations} automatiseringen, die met deze actie worden verwijderd."}}},sensors:{title:"Sensoren",cards:{sensors:{description:"Momenteel geconfigureerde sensoren. Klik op een entiteit om wijzigingen aan te brengen.",table:{no_items:"Er zijn nog geen sensoren aan het alarm toegevoegd. Zorg ervoor dat u ze eerst toevoegt.",no_area_warning:"Sensor is niet aan een gebied toegewezen.",arm_modes:"Inschakelmodi",always_on:"(Altijd)"}},add_sensors:{title:"Voeg sensoren toe",description:"Voeg meer sensoren toe. Zorg ervoor dat uw sensoren een duidelijke naam hebben, zodat u ze kunt identificeren.",no_items:"Er zijn geen beschikbare HA-entiteiten die voor het alarm kunnen worden geconfigureerd. Zorg ervoor dat u entiteiten van het type binary_sensor opneemt.",table:{type:"Gedetecteerd type"},actions:{add_to_alarm:"Voeg aan alarm toe",filter_supported:"Verberg items met onbekend type"}},editor:{title:"Wijzig Sensor",description:"Configureren van de sensorinstellingen van ''{entity}''.",fields:{area:{heading:"Gebied",description:"Selecteer een gebied dat deze sensor bevat."},group:{heading:"Groep",description:"Groepeer met andere sensors voor gecombineerde triggers."},device_type:{heading:"Apparaat Type",description:"Kies een apparaattype om automatisch de juiste instellingen toe te passen.",choose:{door:{name:"Deur",description:"Een deur, poort of andere ingang die wordt gebruikt voor het betreden/verlaten van de woning."},window:{name:"Raam",description:"Een raam of een deur die niet wordt gebruikt om het huis binnen te komen, zoals een balkon."},motion:{name:"Beweging",description:"Aanwezigheidssensor of soortgelijk apparaat met een vertraging tussen activeringen."},tamper:{name:"Sabotage",description:"Detector van verwijdering van sensorkap, glasbreuksensor, enz."},environmental:{name:"Klimaat",description:"Rook/gassensor, lekkage detector, etc. (niet gerelateerd aan inbraakbeveiliging)."},other:{name:"Algemeen"}}},always_on:{heading:"Altijd aan",description:"Een sensor moet altijd het alarm activeren."},modes:{heading:"Ingeschakelde modi",description:"Alarmmodi waarin deze sensor actief is."},arm_on_close:{heading:"Inschakelen na sluiten",description:"Na deactivering van deze sensor wordt de resterende vertrek vertraging automatisch overgeslagen."},use_exit_delay:{heading:"Vertragingstijd bij vertrek",description:"De sensor mag actief zijn wanneer de vertrekperiode wordt gestart."},use_entry_delay:{heading:"Vertragingstijd bij binnenkomst",description:"Als de sensor actief wordt, activeert deze het alarm pas na de vertragingstijd voor binnenkomst."},allow_open:{heading:"Sta open toe tijdens het inschakelen",description:"Sta toe dat deze sensor kort na het verlaten actief is, zodat hij het inschakelen niet blokkeert."},auto_bypass:{heading:"Automatisch omzeilen",description:"Elimineer de sensor als deze actief is tijdens het inschakelen van het alarm.",modes:"Modi waarin de sensor automatisch omzeild mag worden"},trigger_unavailable:{heading:"Activeren indien niet beschikbaar",description:"Wanneer de sensorstatus 'niet beschikbaar' wordt, wordt de sensor geactiveerd."}},actions:{toggle_advanced:"Geavanceerde instellingen",remove:"Verwijder",setup_groups:"Configureer groepen"},errors:{description:"Corrigeer de volgende fouten:",no_area:"Er is geen gebied geselecteerd",no_modes:"Er zijn geen modi geselecteerd waarvoor de sensor actief zou moeten zijn",no_auto_bypass_modes:"Er zijn geen modi geselecteerd waarin de sensor automatisch omzeild mag worden"}}},dialogs:{manage_groups:{title:"Beheer sensorgroepen",description:"In een sensorgroep moeten twee of meer sensoren worden geactiveerd binnen een tijdsperiode voordat het alarm wordt geactiveerd.",no_items:"Nog geen groepen ingesteld.",actions:{new_group:"Nieuwe groep"}},create_group:{title:"Nieuwe sensorgroep",fields:{name:{heading:"Naam",description:"Naam voor sensorgroep."},timeout:{heading:"Time-out",description:"Tijdsperiode waarin meerdere sensoren moeten worden geactiveerd om het alarm te activeren."},sensors:{heading:"Sensoren",description:"Selecteer de sensoren die deel moeten uitmaken van deze groep."}},errors:{invalid_name:"Verkeerde naam opgegeven.",insufficient_sensors:"Tenminste 2 sensoren moeten worden geselecteerd."}},edit_group:{title:"Bewerk sensorgroep ''{name}''"}}},codes:{title:"Codes",cards:{codes:{description:"Wijzig de instellingen voor de code.",fields:{code_arm_required:{heading:"Gebruik inschakel code",description:"Vereist een code voor het inschakelen van het alarm"},code_disarm_required:{heading:"Gebruik uitschakelcode",description:"Vereist een code om het alarm uit te schakelen"},code_format:{heading:"Code opmaak",description:"Stelt het invoertype in voor de Lovelace alarmkaart.",code_format_number:"pincode",code_format_text:"wachtwoord"}}},user_management:{title:"Gebruikersbeheer",description:"Elke gebruiker heeft zijn eigen code om het alarm in/uit te schakelen.",no_items:"Er zijn nog geen gebruikers",actions:{new_user:"nieuwe gebruiker"}},new_user:{title:"Maak een nieuwe gebruiker aan",description:"Gebruikers kunnen worden aangemaakt om toegang te verlenen tot het bedienen van het alarm.",fields:{name:{heading:"Naam",description:"Naam van de gebruiker."},code:{heading:"Code",description:"Code voor deze gebruiker."},confirm_code:{heading:"Bevestig de code",description:"Herhaal de code."},can_arm:{heading:"Code toestaan voor inschakeling",description:"Door deze code in te voeren, wordt het alarm geactiveerd"},can_disarm:{heading:"Code toestaan voor uitschakelen",description:"Door deze code in te voeren, wordt het alarm gedeactiveerd"},is_override_code:{heading:"Is een forceer code",description:"Als u deze code invoert, wordt het alarm geforceerd geactiveerd"},area_limit:{heading:"Beperk gebieden",description:"Beperk de gebruiker tot controle over alleen de gelesecteerde gebieden"}},errors:{no_name:"Geen naam opgegeven.",no_code:"Code moet minimaal 4 tekens/cijfers bevatten.",code_mismatch:"De codes komen niet overeen."}},edit_user:{title:"Wijzig Gebruiker",description:"Wijzig de configuratie voor gebruiker ''{name}''.",fields:{old_code:{heading:"Huidige code",description:"Huidige code, laat leeg om ongewijzigd te laten."}}}}},actions:{title:"Acties",cards:{notifications:{title:"Meldingen",description:"Met dit paneel kunt u meldingen beheren die moeten worden verzonden tijdens een bepaalde alarmgebeurtenis",table:{no_items:"Er zijn nog geen notificaties aangemaakt.",no_area_warning:"Actie is niet toegewezen aan een gebied."},actions:{new_notification:"nieuwe melding"}},actions:{description:"Dit paneel kan worden gebruikt om een apparaat te schakelen wanneer de status van het alarm veranderd.",table:{no_items:"Er zijn nog geen acties gemaakt."},actions:{new_action:"nieuwe actie"}},new_notification:{title:"Notificatie instellen",description:"Ontvang een notificatie wanneer het alarm wordt in- of uitgeschakeld, wordt geactiveerd etc.",trigger:"Conditie",action:"Taak",options:"Opties",fields:{event:{heading:"Gebeurtenis",description:"Wanneer moet de notificatie worden verzonden",choose:{armed:{name:"Alarm is ingeschakeld",description:"Het alarm is succesvol ingeschakeld"},disarmed:{name:"Alarm is uitgeschakeld",description:"Het alarm is uitgeschakeld"},triggered:{name:"Alarm is afgegaan",description:"Het alarm gaat af"},untriggered:{name:"Gestopt na afgaan",description:"Het alarm gaat niet meer af"},arm_failure:{name:"Kan niet inschakelen",description:"Het inschakelen van het alarm is mislukt vanwege een of meerdere blokkerende sensoren"},arming:{name:"Vertrek",description:"Vertrekvertraging ingegaan, tijd om het huis te verlaten."},pending:{name:"Binnenkomst",description:"Binnenkomstvertraging ingegaan, het alarm dient te worden uitgeschakeld."}}},mode:{heading:"Modi",description:"Beperk de actie tot specifieke inschakel modi."},title:{heading:"Titel",description:"Titel voor de notificatie"},message:{heading:"Bericht",description:"Tekst voor de notificatie",insert_wildcard:"Wildcard invoegen",placeholders:{armed:"Het alarm is ingeschakeld op {{arm_mode}}",disarmed:"Het alarm is nu uit",triggered:"Het alarm is geactiveerd! Oorzaak: {{open_sensors}}.",untriggered:"The alarm gaat niet langer af.",arm_failure:"Het alarm kon niet worden ingeschakeld. Oorzaak: {{open_sensors}}.",arming:"Het alarm wordt ingeschakeld, verlaat het huis.",pending:"Het alarm moet nu worden uitgeschakeld, anders wordt deze geactiveerd."}},open_sensors_format:{heading:"Opmaak voor open_sensors wildcard",description:"Kies welke sensor informatie wordt weergegeven in het bericht",options:{default:"Naam en status",short:"Alleen naam"}},arm_mode_format:{heading:"Vertaling voor arm_mode wildcard",description:"Kies in welke taal de inschakelmodus wordt weergegeven in het bericht"},target:{heading:"Doel",description:"Apparaat om het push-bericht naar te sturen"},name:{heading:"Naam",description:"Beschrijving voor deze notificatie",placeholders:{armed:"Stuur notificatie naar {target} bij inschakelen",disarmed:"Stuur notificatie naar {target} bij uitschakelen",triggered:"Stuur notificatie naar {target} bij alarm",untriggered:"Stuur notificatie naar {target} als het alarm stopt met afgaan",arm_failure:"Stuur notificatie naar {target} bij fout",arming:"Stuur notificatie naar {target} bij vertrek",pending:"Stuur notificatie naar {target} bij binnenkomst"}},delete:{heading:"Automatisering verwijderen",description:"Verwijder deze automatisering permanent"}},actions:{test:"Testen"}},new_action:{title:"Actie instellen",description:"Schakel verlichting of apparaatuur (bijv. sirene) wanneer het alarm wordt in- of uitgeschakeld of wordt geactiveerd etc.",fields:{event:{heading:"Gebeurtenis",description:"Wanneer moet de actie worden uitgevoerd"},area:{heading:"Gebied",description:"Het gebied waarop de gebeurtenis van toepassing is, laat leeg om het algemene alarm te selecteren."},mode:{heading:"Mode",description:"Beperk de actie tot specifieke inschakel modi (optioneel)"},entity:{heading:"Entiteit",description:"Entiteit om actie op uit te voeren"},action:{heading:"Actie",description:"Actie die op de entiteit moet worden uitgevoerd",no_common_actions:"Acties kunnen alleen worden toegewezen in de YAML modus voor de geselecteerde entiteiten."},name:{heading:"Naam",description:"Beschrijving voor deze actie",placeholders:{armed:"Schakel {entity} naar {state} bij inschakelen",disarmed:"Schakel {entity} naar {state} bij uitschakelen",triggered:"Schakel {entity} naar {state} bij alarm",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Schakel {entity} naar {state} bij fout",arming:"Schakel {entity} naar {state} bij vertrek",pending:"Schakel {entity} naar {state} bij binnenkomst"}}}}}}},kt={common:yt,components:wt,title:"Alarmpaneel",panels:$t},At=Object.freeze({__proto__:null,common:yt,components:wt,title:"Alarmpaneel",panels:$t,default:kt}),Et={modes_short:{armed_away:"Borta",armed_home:"Hemma",armed_night:"Natt",armed_custom_bypass:"Anpassad",armed_vacation:"Semester"},enabled:"Aktiverat",disabled:"Inaktiverat"},xt={time_slider:{seconds:"sek",minutes:"min",infinite:"oändligt",none:"inget"},editor:{ui_mode:"Till UI",yaml_mode:"Till YAML",edit_in_yaml:"Redigera i YAML"},table:{filter:{label:"Filtrera sensorer",item:"Filtrera med {name}",hidden_items:"{number} {number, plural,\n  en {item is}\n  andra {items are}\n} dolda"}}},Ot={general:{title:"Generellt",cards:{general:{description:"Denna panel definierar några globala inställningar för larmet.",fields:{disarm_after_trigger:{heading:"Larma av efter trigger",description:"Efter trigger tiden har gått ut, larma av larmet istället för att återgå till larmat läge."},enable_mqtt:{heading:"Aktivera MQTT",description:"Tillåt alarm panelen att kontrolleras via MQTT."},enable_master:{heading:"Aktivera alarm master",description:"Skapar en entity för att kontrollera alla areor samtidigt."}},actions:{setup_mqtt:"MQTT konfiguration",setup_master:"Master konfiguration"}},modes:{title:"Lägen",description:"Denna panel kan användas för att konfiguera larmets olika larmlägen.",modes:{armed_away:"Larmat borta används när alla personer lämnat huset. Alla dörrar och fönster som tillåter tillgång till huset kommer att larmas, det samma gäller rörelsesensorer inne i huset.",armed_home:"Larmat hemma används när det finns personer kvar i huset. Alla dörrar och fönster som tillåter tillgång till huset kommer att larmas, dock inga rörelsesensorer inne i huset.",armed_night:"Larmat natt används när du aktiverar larmen innan du lägger dig. Alla dörrar och fönster som tillåter tillgång till huset kommer att larmas, det samma gäller utvalda rörelsesensorer inne i huset.",armed_vacation:"Larmat semester kan användas som en förlängning av läget för larmat borta vid längre frånvaro. Fördröjningstiderna och triggersvaren kan anpassas (efter önskemål) för att vara borta längre tid från hemmet.",armed_custom_bypass:"Ett extra läge för för att definiera sin egen säkerhetsperimeter."},number_sensors_active:"{number} {number, plural,\n  en {sensor}\n  andra {sensorer}\n} aktiv",fields:{status:{heading:"Status",description:"Styr om larmet kan aktiveras i detta läge."},exit_delay:{heading:"Lämna fördröjning",description:"Efter att du har aktiverat larmet kommer dina sensorer inte trigga ditt larm inom denna tid."},entry_delay:{heading:"Ankomst fördröjning",description:"Fördröjning i tid tills att ditt larm triggas efter att en av dina sensorer har aktiverats."},trigger_time:{heading:"Trigger tid",description:"Tid som ditt larm kommer vara i triggat läge efter att ett larm har triggats."}}},mqtt:{title:"MQTT konfiguration",description:"Denna panel kan användas för att anpassa konfigurationen av MQTT.",fields:{state_topic:{heading:"Status topic",description:"Topic på vilket status uppdateringar publiceras till."},event_topic:{heading:"Event topic",description:"Topic på vilket alarm events publiceras till."},command_topic:{heading:"Kommando topic",description:"Topic på vilket Alarmo lyssnar på för larma/larma av kommandon."},require_code:{heading:"Kräv kod",description:"Kräv att koden ska skickas med kommandot."},state_payload:{heading:"Konfiguera payload per state",item:"Definiera en payload för state ''{state}''"},command_payload:{heading:"Konfiguera payload per kommando",item:"Definiera en payload för kommando ''{command}''"}}},areas:{title:"Områden",description:"Områden kan användas för att dela upp ditt larm till flera områden.",no_items:"Det är inga områden definierade än.",table:{remarks:"Anmärkningar",summary:"Detta område innehåller {summary_sensors} och {summary_automations}.",summary_sensors:"{number} {number, plural,\n  en {sensor}\n  andra {sensorer}\n}",summary_automations:"{number} {number, plural,\n  en {automation}\n  andra {automationer}\n}"},actions:{add:"Lägg till"}}},dialogs:{create_area:{title:"Nytt område",fields:{copy_from:"Kopiera inställningarna från"}},edit_area:{title:"Redigera område ''{area}''",name_warning:"OBS: Ändrar du namn kommer entity ID att ändras"},remove_area:{title:"Ta bort område?",description:"Är du säker att du vill ta bort detta område? Detta område innehåller {sensors} sensorer och {automations} automationer, som också kommer att tas bort."},edit_master:{title:"Master konfiguration"},disable_master:{title:"Inaktivera master?",description:"Är du säker att du vill ta bort master alarm? Denna area innehåller {automations} automationer, som kommer att tas bort med detta val."}}},sensors:{title:"Sensorer",cards:{sensors:{description:"Nuvarande konfiguerade sensorer. Klicka på ett entity för att göra förändringar.",table:{no_items:"Det finns inga sensorer att visa här.",no_area_warning:"Sensor är inte tilldelat till något område.",arm_modes:"Larmläge",always_on:"(Alltid)"}},add_sensors:{title:"Lägg till sensorer",description:"Lägg till mer sensorer. Säkerhetsställ att dina sensorer har ett friendly_name, så du kan identifiera dem.",no_items:"Det finns inga tillgängliga HA entities som kan konfigueras för larmet. Säkerhetsställ att inkludera entities av type binary_sensor.",table:{type:"Detekteringstyp"},actions:{add_to_alarm:"Addera till larmet",filter_supported:"Dölj sensorer av typen unknown"}},editor:{title:"Justera Sensor",description:"Justera inställningarna för sensor ''{entity}''.",fields:{area:{heading:"Område",description:"Välj ett område som innehåller denna sensor."},group:{heading:"Grupp",description:"Gruppera med andra sensorer för kombinerad trigger."},device_type:{heading:"Enhetstyp",description:"Välj en enhetstyp att automatiskt applicera rekomenderade inställningar på.",choose:{door:{name:"Dörr",description:"En dörr, grind eller annan entre som används för att gå in/lämna hemmet."},window:{name:"Fönster",description:"Ett fönster eller en dörr som inte används för att gå in/lämna huset, t.ex. en balkongdörr."},motion:{name:"Rörelse",description:"Närvarosensor eller liknande som har fördröjning mellan sina aktiveringar."},tamper:{name:"Manipulering",description:"Detektor av sensorskydd, glaskross sensor etc."},environmental:{name:"Miljö",description:"Rök/gas sensor eller läckage sensor etc. (Inte relaterat till inbrottsskydd)."},other:{name:"Generell"}}},always_on:{heading:"Larma alltid",description:"Sensorn ska alltid trigga larmet."},modes:{heading:"Aktiverat läge",description:"Larmläge när sensorn ska vara aktiv."},arm_on_close:{heading:"Larma efter stängning",description:"Resterande lämna fördröjning skippas automatiskt när denna sensor inaktiveras."},use_exit_delay:{heading:"Använd lämna fördröjning",description:"Sensorn är tillåten att vara aktiv när lämna fördröjningen startar."},use_entry_delay:{heading:"Använd ankomst fördröjning",description:"Sensor aktivering triggar larmet after ankomst fördröjningen istället för direkt."},allow_open:{heading:"Tillåt öppnad efter larmning.",description:"Om sensorn fortfarande är aktiv efter lämna fördröjningen kommer det inte misslyckas att larma."},auto_bypass:{heading:"Exkludera automatiskt",description:"Exkludera denna sensor fr¨ån larmet open den är öppen vid pålarmning.",modes:"Lägen där sensor kan bli exkluderad"},trigger_unavailable:{heading:"Trigga vid otillgänglig",description:"Detta kommer aktiveras när sensorns status blir 'unavailable'."}},actions:{toggle_advanced:"Avancerade inställningar",remove:"Ta bort",setup_groups:"Hantera grupper"},errors:{description:"Var vänlig att justera följande fel:",no_area:"Inget område är vald",no_modes:"Inga lägen är valda när sensorn ska vara aktiv",no_auto_bypass_modes:"Inga lägen är valda när sensorn eventuellt automatiskt ska förbikopplas"}}},dialogs:{manage_groups:{title:"Hantera sensor grupper",description:"I en sensor grupp måste flera sensorer bli aktiverade inom en tidsperiod för att larmet ska triggas.",no_items:"Inga grupper ännu",actions:{new_group:"Ny grupp"}},create_group:{title:"Ny sensor grupp",fields:{name:{heading:"Namn",description:"Namn för sensor gruppen"},timeout:{heading:"Time-out",description:"Tidsperiod för de sammankopplade sensorernas aktivitet ska trigga larmet."},sensors:{heading:"Sensorer",description:"Välj sensorer som tillhöra gruppen."}},errors:{invalid_name:"Ogiltigt namn specificerat.",insufficient_sensors:"Minst två sensorer behöver väljas."}},edit_group:{title:"Justera sensor grupp ''{name}''"}}},codes:{title:"Koder",cards:{codes:{description:"Ändra inställningar för kod.",fields:{code_arm_required:{heading:"Använd pålarmningskod",description:"Kräv en kod för att aktivera larmet"},code_disarm_required:{heading:"Använd avlarmningskod",description:"Kräv en kod för att inaktivera larmet"},code_format:{heading:"Kodformat",description:"Ändra inmatningstyp för Lovelace alarm kortet.",code_format_number:"pinkod",code_format_text:"lösenord"}}},user_management:{title:"Användarhantering",description:"Varje användare har sin egen kod för aktivera/inaktivera larmet.",no_items:"Det finns inga användare än",actions:{new_user:"Ny användare"}},new_user:{title:"Skapa en ny användare",description:"Användare kan skapas för att ge tillgång att styra larmet.",fields:{name:{heading:"Namn",description:"Namn på användaren"},code:{heading:"Kod",description:"Koden för användaren."},confirm_code:{heading:"Repetera koden",description:"Repetera koden."},can_arm:{heading:"Tillåt kod för pålarmning",description:"Denna kod aktiverar larmet"},can_disarm:{heading:"Tillåt kod för avlarmning",description:"Denna kod inaktiverar larmet"},is_override_code:{heading:"Tvingande kod",description:"Denna kod tvingar aktivering av larmet"},area_limit:{heading:"Begränsade områden",description:"Begränsa användare att hantera utvalda områden"}},errors:{no_name:"Inget namn angivet.",no_code:"Koden ska vara minst 4 tecken eller siffror.",code_mismatch:"Koderna matchar inte."}},edit_user:{title:"Justera användare",description:"Ändra inställningar för användare ''{name}''.",fields:{old_code:{heading:"Nuvarande kod",description:"Nuvarande kod, lämna tomt för att inte ändra."}}}}},actions:{title:"Åtgärder",cards:{notifications:{title:"Notifikationer",description:"Du använder denna panel för att hantera notifikationer som ska sändas vid utvalda larmevents.",table:{no_items:"Det är inga notifikationer skapade än.",no_area_warning:"Åtgärd är inte tilldelad till något område."},actions:{new_notification:"ny notifikation"}},actions:{description:"I denna panel kan du trigga olika beteende på enheter baserat på oliak events från ditt larm.",table:{no_items:"Det finns inga åtgärder skapade ännu."},actions:{new_action:"ny åtgärd"}},new_notification:{title:"Konfiguera notifikationer",description:"Ta emot en notifikation när ditt larm aktivera/inaktiveras eller om en sensor aktiveras eller liknande.",trigger:"Villkor",action:"Åtgärd",options:"Inställningar",fields:{event:{heading:"Event",description:"När ska notifikationen skickas",choose:{armed:{name:"Larmet är aktiverat",description:"Larmet aktiveras framgångsrikt"},disarmed:{name:"Larmet är inaktiverat",description:"Larmet är inaktiverat"},triggered:{name:"Larmet har triggats",description:"Larmet har triggats"},untriggered:{name:"Alarm not longer triggered",description:"The triggered state of the alarm has ended"},arm_failure:{name:"Misslyckas att aktivera larm",description:"Larmet misslyckas att kativeras på grund av någon sensor"},arming:{name:"Lämna fördröjning startas",description:"Lämna fördröjning startas, redo att lämna huset."},pending:{name:"Ankomst fördröjning startas",description:"Ankomst fördröjning startas, larmet kommer triggas snart."}}},mode:{heading:"Läge",description:"Begränsa åtgärd till specifikt larmläge (valfritt)"},title:{heading:"Titel",description:"Titel för notifikationsmeddelandet"},message:{heading:"Meddelande",description:"Innehåll av notifikationsmeddelandet",insert_wildcard:"Lägg in wildcard",placeholders:{armed:"Larmet har bytt status till {{arm_mode}}",disarmed:"Larmet är nu AVSTÄNGT",triggered:"Larmet har triggats! Anledning: {{open_sensors}}.",untriggered:"The alarm is not longer triggered.",arm_failure:"Larmet kunde inte aktiveras nu, detta på grund av: {{open_sensors}}.",arming:"Larmet kommer aktiveras snart, lämna huset.",pending:"Larmet kommer snart triggas, inaktivera larmet snarast!"}},open_sensors_format:{heading:"Format för open_sensors wildcard",description:"Välj vilken sensorinformation som ska infogas i meddelandet",options:{default:"Namn och tillstånd",short:"Endast namn"}},arm_mode_format:{heading:"Översättning för larmläge wildcard",description:"Välj vilket språk som larmläge ska infogas i meddelandet"},target:{heading:"Mål",description:"Enhet att skicka push-meddelandet till"},name:{heading:"Namn",description:"Beskrivning av notifikationen",placeholders:{armed:"Notifiera {target} vid aktivering av larm",disarmed:"Notifiera {target} vid inaktivering av larm",triggered:"Notifiera {target} vid triggning av larm",untriggered:"Notify {target} when triggering stops",arm_failure:"Notifiera {target} vid fel av larm",arming:"Notifiera {target} vid utpassering",pending:"Notifiera {target} vid ankomst"}},delete:{heading:"Ta bort automation",description:"Ta bort automation permanent"}},actions:{test:"Testa"}},new_action:{title:"Konfiguera action",description:"Aktivera lampor eller andra enheter som sirener eller högatalare vid aktivering/inaktivering av larmet, triggning av larmet osv.",fields:{event:{heading:"Event",description:"När ska denna action aktiveras"},area:{heading:"Område",description:"Område som detta event ska appliceras på, lämna tomt om det ska gälla globalt."},mode:{heading:"Läge",description:"Begränsa åtgärd till specifika larmlägen (frivilligt)"},entity:{heading:"Entitet",description:"Entitet att utföra åtgärd på"},action:{heading:"Åtgärd",description:"Åtgärd att utföra på entitet",no_common_actions:"Åtgärder kan enbart bli applicerade i YAML läge för utvalda entiteter."},name:{heading:"Namn",description:"Beskrivning av denna åtgärd",placeholders:{armed:"Sätt {entity} till {state} vid aktivering av larmet",disarmed:"Sätt {entity} till {state} vid inaktivering av larmet",triggered:"Sätt {entity} till {state} när larmet triggas",untriggered:"Set {entity} to {state} when triggering stops",arm_failure:"Sätt {entity} till {state} vid fel av larmet",arming:"Sätt {entity} till {state} vid utpassering",pending:"Sätt {entity} till {state} vid ankomst"}}}}}}},Tt={common:Et,components:xt,title:"Alarm panel",panels:Ot},Ct=Object.freeze({__proto__:null,common:Et,components:xt,title:"Alarm panel",panels:Ot,default:Tt});function jt(e){return e.type===qe.literal}function St(e){return e.type===qe.argument}function Mt(e){return e.type===qe.number}function Nt(e){return e.type===qe.date}function Lt(e){return e.type===qe.time}function Dt(e){return e.type===qe.select}function zt(e){return e.type===qe.plural}function Ht(e){return e.type===qe.pound}function Pt(e){return e.type===qe.tag}function Bt(e){return!(!e||"object"!=typeof e||e.type!==Ie.number)}function Rt(e){return!(!e||"object"!=typeof e||e.type!==Ie.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(Re||(Re={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(qe||(qe={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(Ie||(Ie={}));var qt=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,It=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function Ut(e){var t={};return e.replace(It,(function(e){var a=e.length;switch(e[0]){case"G":t.era=4===a?"long":5===a?"narrow":"short";break;case"y":t.year=2===a?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][a-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":t.day=["numeric","2-digit"][a-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":t.weekday=4===a?"short":5===a?"narrow":"short";break;case"e":if(a<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"c":if(a<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");t.weekday=["short","long","narrow","short"][a-4];break;case"a":t.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][a-1];break;case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][a-1];break;case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][a-1];break;case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][a-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":t.minute=["numeric","2-digit"][a-1];break;case"s":t.second=["numeric","2-digit"][a-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":t.timeZoneName=a<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var Gt=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;var Ft=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,Vt=/^(@+)?(\+|#+)?[rs]?$/g,Kt=/(\*)(0+)|(#+)(0+)|(0+)/g,Yt=/^(0+)$/;function Qt(e){var t={};return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(Vt,(function(e,a,i){return"string"!=typeof i?(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length):"+"===i?t.minimumSignificantDigits=a.length:"#"===a[0]?t.maximumSignificantDigits=a.length:(t.minimumSignificantDigits=a.length,t.maximumSignificantDigits=a.length+("string"==typeof i?i.length:0)),""})),t}function Wt(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function Xt(e){var t;if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var a=e.slice(0,2);if("+!"===a?(t.signDisplay="always",e=e.slice(2)):"+?"===a&&(t.signDisplay="exceptZero",e=e.slice(2)),!Yt.test(e))throw new Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}function Zt(e){var t=Wt(e);return t||{}}function Jt(e){for(var t={},a=0,s=e;a<s.length;a++){var n=s[a];switch(n.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=n.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=n.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t=i(i(i({},t),{notation:"scientific"}),n.options.reduce((function(e,t){return i(i({},e),Zt(t))}),{}));continue;case"engineering":t=i(i(i({},t),{notation:"engineering"}),n.options.reduce((function(e,t){return i(i({},e),Zt(t))}),{}));continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(n.options[0]);continue;case"integer-width":if(n.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");n.options[0].replace(Kt,(function(e,a,i,s,n,r){if(a)t.minimumIntegerDigits=i.length;else{if(s&&n)throw new Error("We currently do not support maximum integer digits");if(r)throw new Error("We currently do not support exact integer digits")}return""}));continue}if(Yt.test(n.stem))t.minimumIntegerDigits=n.stem.length;else if(Ft.test(n.stem)){if(n.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");n.stem.replace(Ft,(function(e,a,i,s,n,r){return"*"===i?t.minimumFractionDigits=a.length:s&&"#"===s[0]?t.maximumFractionDigits=s.length:n&&r?(t.minimumFractionDigits=n.length,t.maximumFractionDigits=n.length+r.length):(t.minimumFractionDigits=a.length,t.maximumFractionDigits=a.length),""}));var r=n.options[0];"w"===r?t=i(i({},t),{trailingZeroDisplay:"stripIfInteger"}):r&&(t=i(i({},t),Qt(r)))}else if(Vt.test(n.stem))t=i(i({},t),Qt(n.stem));else{var o=Wt(n.stem);o&&(t=i(i({},t),o));var l=Xt(n.stem);l&&(t=i(i({},t),l))}}return t}var ea,ta={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]};function aa(e){var t=e.hourCycle;if(void 0===t&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var a,i=e.language;return"root"!==i&&(a=e.maximize().region),(ta[a||""]||ta[i||""]||ta["".concat(i,"-001")]||ta["001"])[0]}var ia=new RegExp("^".concat(qt.source,"*")),sa=new RegExp("".concat(qt.source,"*$"));function na(e,t){return{start:e,end:t}}var ra=!!String.prototype.startsWith,oa=!!String.fromCodePoint,la=!!Object.fromEntries,da=!!String.prototype.codePointAt,ca=!!String.prototype.trimStart,ha=!!String.prototype.trimEnd,ma=!!Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},ua=!0;try{ua="a"===(null===(ea=wa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===ea?void 0:ea[0])}catch(H){ua=!1}var pa,ga=ra?function(e,t,a){return e.startsWith(t,a)}:function(e,t,a){return e.slice(a,a+t.length)===t},va=oa?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var a,i="",s=e.length,n=0;s>n;){if((a=e[n++])>1114111)throw RangeError(a+" is not a valid code point");i+=a<65536?String.fromCharCode(a):String.fromCharCode(55296+((a-=65536)>>10),a%1024+56320)}return i},fa=la?Object.fromEntries:function(e){for(var t={},a=0,i=e;a<i.length;a++){var s=i[a],n=s[0],r=s[1];t[n]=r}return t},_a=da?function(e,t){return e.codePointAt(t)}:function(e,t){var a=e.length;if(!(t<0||t>=a)){var i,s=e.charCodeAt(t);return s<55296||s>56319||t+1===a||(i=e.charCodeAt(t+1))<56320||i>57343?s:i-56320+(s-55296<<10)+65536}},ba=ca?function(e){return e.trimStart()}:function(e){return e.replace(ia,"")},ya=ha?function(e){return e.trimEnd()}:function(e){return e.replace(sa,"")};function wa(e,t){return new RegExp(e,t)}if(ua){var $a=wa("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");pa=function(e,t){var a;return $a.lastIndex=t,null!==(a=$a.exec(e)[1])&&void 0!==a?a:""}}else pa=function(e,t){for(var a=[];;){var i=_a(e,t);if(void 0===i||xa(i)||Oa(i))break;a.push(i),t+=i>=65536?2:1}return va.apply(void 0,a)};var ka=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,a){for(var i=[];!this.isEOF();){var s=this.char();if(123===s){if((n=this.parseArgument(e,a)).err)return n;i.push(n.val)}else{if(125===s&&e>0)break;if(35!==s||"plural"!==t&&"selectordinal"!==t){if(60===s&&!this.ignoreTag&&47===this.peek()){if(a)break;return this.error(Re.UNMATCHED_CLOSING_TAG,na(this.clonePosition(),this.clonePosition()))}if(60===s&&!this.ignoreTag&&Aa(this.peek()||0)){if((n=this.parseTag(e,t)).err)return n;i.push(n.val)}else{var n;if((n=this.parseLiteral(e,t)).err)return n;i.push(n.val)}}else{var r=this.clonePosition();this.bump(),i.push({type:qe.pound,location:na(r,this.clonePosition())})}}}return{val:i,err:null}},e.prototype.parseTag=function(e,t){var a=this.clonePosition();this.bump();var i=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:qe.literal,value:"<".concat(i,"/>"),location:na(a,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(e+1,t,!0);if(s.err)return s;var n=s.val,r=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!Aa(this.char()))return this.error(Re.INVALID_TAG,na(r,this.clonePosition()));var o=this.clonePosition();return i!==this.parseTagName()?this.error(Re.UNMATCHED_CLOSING_TAG,na(o,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:qe.tag,value:i,children:n,location:na(a,this.clonePosition())},err:null}:this.error(Re.INVALID_TAG,na(r,this.clonePosition())))}return this.error(Re.UNCLOSED_TAG,na(a,this.clonePosition()))}return this.error(Re.INVALID_TAG,na(a,this.clonePosition()))},e.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&Ea(this.char());)this.bump();return this.message.slice(e,this.offset())},e.prototype.parseLiteral=function(e,t){for(var a=this.clonePosition(),i="";;){var s=this.tryParseQuote(t);if(s)i+=s;else{var n=this.tryParseUnquoted(e,t);if(n)i+=n;else{var r=this.tryParseLeftAngleBracket();if(!r)break;i+=r}}}var o=na(a,this.clonePosition());return{val:{type:qe.literal,value:i,location:o},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(Aa(e=this.peek()||0)||47===e)?null:(this.bump(),"<");var e},e.prototype.tryParseQuote=function(e){if(this.isEOF()||39!==this.char())return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===e||"selectordinal"===e)break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var a=this.char();if(39===a){if(39!==this.peek()){this.bump();break}t.push(39),this.bump()}else t.push(a);this.bump()}return va.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var a=this.char();return 60===a||123===a||35===a&&("plural"===t||"selectordinal"===t)||125===a&&e>0?null:(this.bump(),va(a))},e.prototype.parseArgument=function(e,t){var a=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE,na(a,this.clonePosition()));if(125===this.char())return this.bump(),this.error(Re.EMPTY_ARGUMENT,na(a,this.clonePosition()));var i=this.parseIdentifierIfPossible().value;if(!i)return this.error(Re.MALFORMED_ARGUMENT,na(a,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE,na(a,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:qe.argument,value:i,location:na(a,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE,na(a,this.clonePosition())):this.parseArgumentOptions(e,t,i,a);default:return this.error(Re.MALFORMED_ARGUMENT,na(a,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),a=pa(this.message,t),i=t+a.length;return this.bumpTo(i),{value:a,location:na(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,a,s){var n,r=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(Re.EXPECT_ARGUMENT_TYPE,na(r,l));case"number":case"date":case"time":this.bumpSpace();var d=null;if(this.bumpIf(",")){this.bumpSpace();var c=this.clonePosition();if((_=this.parseSimpleArgStyleIfPossible()).err)return _;if(0===(p=ya(_.val)).length)return this.error(Re.EXPECT_ARGUMENT_STYLE,na(this.clonePosition(),this.clonePosition()));d={style:p,styleLocation:na(c,this.clonePosition())}}if((b=this.tryParseArgumentClose(s)).err)return b;var h=na(s,this.clonePosition());if(d&&ga(null==d?void 0:d.style,"::",0)){var m=ba(d.style.slice(2));if("number"===o)return(_=this.parseNumberSkeletonFromString(m,d.styleLocation)).err?_:{val:{type:qe.number,value:a,location:h,style:_.val},err:null};if(0===m.length)return this.error(Re.EXPECT_DATE_TIME_SKELETON,h);var u=m;this.locale&&(u=function(e,t){for(var a="",i=0;i<e.length;i++){var s=e.charAt(i);if("j"===s){for(var n=0;i+1<e.length&&e.charAt(i+1)===s;)n++,i++;var r=1+(1&n),o=n<2?1:3+(n>>1),l=aa(t);for("H"!=l&&"k"!=l||(o=0);o-- >0;)a+="a";for(;r-- >0;)a=l+a}else a+="J"===s?"H":s}return a}(m,this.locale));var p={type:Ie.dateTime,pattern:u,location:d.styleLocation,parsedOptions:this.shouldParseSkeletons?Ut(u):{}};return{val:{type:"date"===o?qe.date:qe.time,value:a,location:h,style:p},err:null}}return{val:{type:"number"===o?qe.number:"date"===o?qe.date:qe.time,value:a,location:h,style:null!==(n=null==d?void 0:d.style)&&void 0!==n?n:null},err:null};case"plural":case"selectordinal":case"select":var g=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(Re.EXPECT_SELECT_ARGUMENT_OPTIONS,na(g,i({},g)));this.bumpSpace();var v=this.parseIdentifierIfPossible(),f=0;if("select"!==o&&"offset"===v.value){if(!this.bumpIf(":"))return this.error(Re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,na(this.clonePosition(),this.clonePosition()));var _;if(this.bumpSpace(),(_=this.tryParseDecimalInteger(Re.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,Re.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return _;this.bumpSpace(),v=this.parseIdentifierIfPossible(),f=_.val}var b,y=this.tryParsePluralOrSelectOptions(e,o,t,v);if(y.err)return y;if((b=this.tryParseArgumentClose(s)).err)return b;var w=na(s,this.clonePosition());return"select"===o?{val:{type:qe.select,value:a,options:fa(y.val),location:w},err:null}:{val:{type:qe.plural,value:a,options:fa(y.val),offset:f,pluralType:"plural"===o?"cardinal":"ordinal",location:w},err:null};default:return this.error(Re.INVALID_ARGUMENT_TYPE,na(r,l))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(Re.EXPECT_ARGUMENT_CLOSING_BRACE,na(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();){switch(this.char()){case 39:this.bump();var a=this.clonePosition();if(!this.bumpUntil("'"))return this.error(Re.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,na(a,this.clonePosition()));this.bump();break;case 123:e+=1,this.bump();break;case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null};e-=1;break;default:this.bump()}}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var a=[];try{a=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty");for(var t=[],a=0,i=e.split(Gt).filter((function(e){return e.length>0}));a<i.length;a++){var s=i[a].split("/");if(0===s.length)throw new Error("Invalid number skeleton");for(var n=s[0],r=s.slice(1),o=0,l=r;o<l.length;o++){if(0===l[o].length)throw new Error("Invalid number skeleton")}t.push({stem:n,options:r})}return t}(e)}catch(e){return this.error(Re.INVALID_NUMBER_SKELETON,t)}return{val:{type:Ie.number,tokens:a,location:t,parsedOptions:this.shouldParseSkeletons?Jt(a):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,a,i){for(var s,n=!1,r=[],o=new Set,l=i.value,d=i.location;;){if(0===l.length){var c=this.clonePosition();if("select"===t||!this.bumpIf("="))break;var h=this.tryParseDecimalInteger(Re.EXPECT_PLURAL_ARGUMENT_SELECTOR,Re.INVALID_PLURAL_ARGUMENT_SELECTOR);if(h.err)return h;d=na(c,this.clonePosition()),l=this.message.slice(c.offset,this.offset())}if(o.has(l))return this.error("select"===t?Re.DUPLICATE_SELECT_ARGUMENT_SELECTOR:Re.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,d);"other"===l&&(n=!0),this.bumpSpace();var m=this.clonePosition();if(!this.bumpIf("{"))return this.error("select"===t?Re.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:Re.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,na(this.clonePosition(),this.clonePosition()));var u=this.parseMessage(e+1,t,a);if(u.err)return u;var p=this.tryParseArgumentClose(m);if(p.err)return p;r.push([l,{value:u.val,location:na(m,this.clonePosition())}]),o.add(l),this.bumpSpace(),l=(s=this.parseIdentifierIfPossible()).value,d=s.location}return 0===r.length?this.error("select"===t?Re.EXPECT_SELECT_ARGUMENT_SELECTOR:Re.EXPECT_PLURAL_ARGUMENT_SELECTOR,na(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!n?this.error(Re.MISSING_OTHER_CLAUSE,na(this.clonePosition(),this.clonePosition())):{val:r,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var a=1,i=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(a=-1);for(var s=!1,n=0;!this.isEOF();){var r=this.char();if(!(r>=48&&r<=57))break;s=!0,n=10*n+(r-48),this.bump()}var o=na(i,this.clonePosition());return s?ma(n*=a)?{val:n,err:null}:this.error(t,o):this.error(e,o)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=_a(this.message,e);if(void 0===t)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return t},e.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var e=this.char();10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},e.prototype.bumpIf=function(e){if(ga(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},e.prototype.bumpUntil=function(e){var t=this.offset(),a=this.message.indexOf(e,t);return a>=0?(this.bumpTo(a),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&xa(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),a=this.message.charCodeAt(t+(e>=65536?2:1));return null!=a?a:null},e}();function Aa(e){return e>=97&&e<=122||e>=65&&e<=90}function Ea(e){return 45===e||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039}function xa(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function Oa(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function Ta(e,t){void 0===t&&(t={}),t=i({shouldParseSkeletons:!0,requiresOtherClause:!0},t);var a=new ka(e,t).parse();if(a.err){var s=SyntaxError(Re[a.err.kind]);throw s.location=a.err.location,s.originalMessage=a.err.message,s}return(null==t?void 0:t.captureLocation)||function e(t){t.forEach((function(t){if(delete t.location,Dt(t)||zt(t))for(var a in t.options)delete t.options[a].location,e(t.options[a].value);else Mt(t)&&Bt(t.style)||(Nt(t)||Lt(t))&&Rt(t.style)?delete t.style.location:Pt(t)&&e(t.children)}))}(a.val),a.val}function Ca(e,t){var a=t&&t.cache?t.cache:Ha,i=t&&t.serializer?t.serializer:La;return(t&&t.strategy?t.strategy:Na)(e,{cache:a,serializer:i})}function ja(e,t,a,i){var s,n=null==(s=i)||"number"==typeof s||"boolean"==typeof s?i:a(i),r=t.get(n);return void 0===r&&(r=e.call(this,i),t.set(n,r)),r}function Sa(e,t,a){var i=Array.prototype.slice.call(arguments,3),s=a(i),n=t.get(s);return void 0===n&&(n=e.apply(this,i),t.set(s,n)),n}function Ma(e,t,a,i,s){return a.bind(t,e,i,s)}function Na(e,t){return Ma(e,this,1===e.length?ja:Sa,t.cache.create(),t.serializer)}var La=function(){return JSON.stringify(arguments)};function Da(){this.cache=Object.create(null)}Da.prototype.get=function(e){return this.cache[e]},Da.prototype.set=function(e,t){this.cache[e]=t};var za,Ha={create:function(){return new Da}},Pa={variadic:function(e,t){return Ma(e,this,Sa,t.cache.create(),t.serializer)},monadic:function(e,t){return Ma(e,this,ja,t.cache.create(),t.serializer)}};!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(za||(za={}));var Ba,Ra=function(e){function t(t,a,i){var s=e.call(this,t)||this;return s.code=a,s.originalMessage=i,s}return a(t,e),t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),qa=function(e){function t(t,a,i,s){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(a,'". Options are "').concat(Object.keys(i).join('", "'),'"'),za.INVALID_VALUE,s)||this}return a(t,e),t}(Ra),Ia=function(e){function t(t,a,i){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(a),za.INVALID_VALUE,i)||this}return a(t,e),t}(Ra),Ua=function(e){function t(t,a){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(a,'"'),za.MISSING_VALUE,a)||this}return a(t,e),t}(Ra);function Ga(e){return"function"==typeof e}function Fa(e,t,a,i,s,n,r){if(1===e.length&&jt(e[0]))return[{type:Ba.literal,value:e[0].value}];for(var o=[],l=0,d=e;l<d.length;l++){var c=d[l];if(jt(c))o.push({type:Ba.literal,value:c.value});else if(Ht(c))"number"==typeof n&&o.push({type:Ba.literal,value:a.getNumberFormat(t).format(n)});else{var h=c.value;if(!s||!(h in s))throw new Ua(h,r);var m=s[h];if(St(c))m&&"string"!=typeof m&&"number"!=typeof m||(m="string"==typeof m||"number"==typeof m?String(m):""),o.push({type:"string"==typeof m?Ba.literal:Ba.object,value:m});else if(Nt(c)){var u="string"==typeof c.style?i.date[c.style]:Rt(c.style)?c.style.parsedOptions:void 0;o.push({type:Ba.literal,value:a.getDateTimeFormat(t,u).format(m)})}else if(Lt(c)){u="string"==typeof c.style?i.time[c.style]:Rt(c.style)?c.style.parsedOptions:i.time.medium;o.push({type:Ba.literal,value:a.getDateTimeFormat(t,u).format(m)})}else if(Mt(c)){(u="string"==typeof c.style?i.number[c.style]:Bt(c.style)?c.style.parsedOptions:void 0)&&u.scale&&(m*=u.scale||1),o.push({type:Ba.literal,value:a.getNumberFormat(t,u).format(m)})}else{if(Pt(c)){var p=c.children,g=c.value,v=s[g];if(!Ga(v))throw new Ia(g,"function",r);var f=v(Fa(p,t,a,i,s,n).map((function(e){return e.value})));Array.isArray(f)||(f=[f]),o.push.apply(o,f.map((function(e){return{type:"string"==typeof e?Ba.literal:Ba.object,value:e}})))}if(Dt(c)){if(!(_=c.options[m]||c.options.other))throw new qa(c.value,m,Object.keys(c.options),r);o.push.apply(o,Fa(_.value,t,a,i,s))}else if(zt(c)){var _;if(!(_=c.options["=".concat(m)])){if(!Intl.PluralRules)throw new Ra('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',za.MISSING_INTL_API,r);var b=a.getPluralRules(t,{type:c.pluralType}).select(m-(c.offset||0));_=c.options[b]||c.options.other}if(!_)throw new qa(c.value,m,Object.keys(c.options),r);o.push.apply(o,Fa(_.value,t,a,i,s,m-(c.offset||0)))}else;}}}return function(e){return e.length<2?e:e.reduce((function(e,t){var a=e[e.length-1];return a&&a.type===Ba.literal&&t.type===Ba.literal?a.value+=t.value:e.push(t),e}),[])}(o)}function Va(e,t){return t?Object.keys(e).reduce((function(a,s){var n,r;return a[s]=(n=e[s],(r=t[s])?i(i(i({},n||{}),r||{}),Object.keys(n).reduce((function(e,t){return e[t]=i(i({},n[t]),r[t]||{}),e}),{})):n),a}),i({},e)):e}function Ka(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,a){e[t]=a}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(Ba||(Ba={}));var Ya=function(){function e(t,a,i,s){var r,o=this;if(void 0===a&&(a=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=o.formatToParts(e);if(1===t.length)return t[0].value;var a=t.reduce((function(e,t){return e.length&&t.type===Ba.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[]);return a.length<=1?a[0]||"":a},this.formatToParts=function(e){return Fa(o.ast,o.locales,o.formatters,o.formats,e,void 0,o.message)},this.resolvedOptions=function(){return{locale:o.resolvedLocale.toString()}},this.getAst=function(){return o.ast},this.locales=a,this.resolvedLocale=e.resolveLocale(a),"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");this.ast=e.__parse(t,{ignoreTag:null==s?void 0:s.ignoreTag,locale:this.resolvedLocale})}else this.ast=t;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=Va(e.formats,i),this.formatters=s&&s.formatters||(void 0===(r=this.formatterCache)&&(r={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Ca((function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.NumberFormat).bind.apply(e,n([void 0],t,!1)))}),{cache:Ka(r.number),strategy:Pa.variadic}),getDateTimeFormat:Ca((function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.DateTimeFormat).bind.apply(e,n([void 0],t,!1)))}),{cache:Ka(r.dateTime),strategy:Pa.variadic}),getPluralRules:Ca((function(){for(var e,t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return new((e=Intl.PluralRules).bind.apply(e,n([void 0],t,!1)))}),{cache:Ka(r.pluralRules),strategy:Pa.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(e){var t=Intl.NumberFormat.supportedLocalesOf(e);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale("string"==typeof e?e:e[0])},e.__parse=Ta,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}(),Qa={ca:Ke,en:Ze,et:lt,es:it,fr:pt,it:bt,nl:At,sv:Ct};function Wa(e,t,...a){const i=t.replace(/['"]+/g,"").replace("-","_");var s;try{s=e.split(".").reduce((e,t)=>e[t],Qa[i])}catch(t){s=e.split(".").reduce((e,t)=>e[t],Qa.en)}if(void 0===s&&(s=e.split(".").reduce((e,t)=>e[t],Qa.en)),!a.length)return s;const n={};for(let e=0;e<a.length;e+=2){let t=a[e];t=t.replace(/^{([^}]+)?}$/,"$1"),n[t]=a[e+1]}try{return new Ya(s,t).format(n)}catch(e){return"Translation "+e}}var Xa,Za,Ja,ei,ti,ai,ii,si;function ni(e){return function(e){if(!e)return"mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=fe(e.entity_id);return t in Ae?Ae[t](e):we(t,e.state)}(e)}function ri(e){return(e=e.replace("_"," ")).charAt(0).toUpperCase()+e.slice(1)}function oi(e){return e?e.attributes&&e.attributes.friendly_name?e.attributes.friendly_name:String(e.entity_id.split(".").pop()):"(unrecognized entity)"}function li(e){let t=[];return e.forEach(e=>{t.find(t=>"object"==typeof e?function(...e){return e.every(t=>JSON.stringify(t)===JSON.stringify(e[0]))}(t,e):t===e)||t.push(e)}),t}function di(e,t){return e.filter(e=>e!==t)}function ci(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,a])=>Object.assign(e,{[t]:a}),{}):{}}!function(e){e.ArmedAway="hass:car-traction-control",e.ArmedHome="hass:home-outline",e.ArmedNight="hass:weather-night",e.ArmedCustom="hass:star-outline",e.ArmedVacation="hass:airplane-takeoff"}(Xa||(Xa={})),function(e){e.STATE_ALARM_DISARMED="disarmed",e.STATE_ALARM_ARMED_HOME="armed_home",e.STATE_ALARM_ARMED_AWAY="armed_away",e.STATE_ALARM_ARMED_NIGHT="armed_night",e.STATE_ALARM_ARMED_CUSTOM_BYPASS="armed_custom_bypass",e.STATE_ALARM_ARMED_VACATION="armed_vacation",e.STATE_ALARM_PENDING="pending",e.STATE_ALARM_ARMING="arming",e.STATE_ALARM_DISARMING="disarming",e.STATE_ALARM_TRIGGERED="triggered"}(Za||(Za={})),function(e){e.COMMAND_ALARM_DISARM="disarm",e.COMMAND_ALARM_ARM_HOME="arm_home",e.COMMAND_ALARM_ARM_AWAY="arm_away",e.COMMAND_ALARM_ARM_NIGHT="arm_night",e.COMMAND_ALARM_ARM_CUSTOM_BYPASS="arm_custom_bypass",e.COMMAND_ALARM_ARM_VACATION="arm_vacation"}(Ja||(Ja={})),function(e){e.Door="door",e.Window="window",e.Motion="motion",e.Tamper="tamper",e.Environmental="environmental",e.Other="other"}(ei||(ei={})),function(e){e.Door="hass:door-closed",e.Window="hass:window-closed",e.Motion="hass:motion-sensor",e.Tamper="hass:vibrate",e.Environmental="hass:fire",e.Other="hass:contactless-payment-circle-outline"}(ti||(ti={})),function(e){e.Notification="notification",e.Action="action"}(ai||(ai={})),function(e){e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedVacation="armed_vacation",e.ArmedCustom="armed_custom_bypass"}(ii||(ii={})),function(e){e.Armed="armed",e.Disarmed="disarmed",e.Triggered="triggered",e.Untriggered="untriggered",e.ArmFailure="arm_failure",e.Arming="arming",e.Pending="pending"}(si||(si={}));const hi=(e,...t)=>{const a={};let i;for(i in e)t.includes(i)||(a[i]=e[i]);return a};function mi(e){return null!=e}function ui(e,t){if(null===e||null===t)return e===t;const a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(const i of a)if("object"==typeof e[i]&&"object"==typeof t[i]){if(!ui(e[i],t[i]))return!1}else if(e[i]!==t[i])return!1;return!0}function pi(e,t){const a=e.hasOwnProperty("tagName")?e:e.target;be(a,"show-dialog",{dialogTag:"error-dialog",dialogImport:()=>Promise.resolve().then((function(){return rs})),dialogParams:{error:t}})}function gi(e,t){pi(t,q`
    <b>Something went wrong!</b>
    <br />
    ${e.body.message?q`
          ${e.body.message}
          <br />
          <br />
        `:""}
    ${e.error}
    <br />
    <br />
    Please
    <a href="https://github.com/nielsfaber/alarmo/issues">report</a>
    the bug.
  `)}const vi=(e,t)=>{var a,i,s,n,r;if(!e)return!1;switch(e){case Za.STATE_ALARM_ARMED_AWAY:return null===(a=t[ii.ArmedAway])||void 0===a?void 0:a.enabled;case Za.STATE_ALARM_ARMED_HOME:return null===(i=t[ii.ArmedHome])||void 0===i?void 0:i.enabled;case Za.STATE_ALARM_ARMED_NIGHT:return null===(s=t[ii.ArmedNight])||void 0===s?void 0:s.enabled;case Za.STATE_ALARM_ARMED_CUSTOM_BYPASS:return null===(n=t[ii.ArmedCustom])||void 0===n?void 0:n.enabled;case Za.STATE_ALARM_ARMED_VACATION:return null===(r=t[ii.ArmedVacation])||void 0===r?void 0:r.enabled;default:return!0}};function fi(e,t){return Object.entries(t).forEach(([t,a])=>{e=t in e&&"object"==typeof e[t]&&null!==e[t]?Object.assign(Object.assign({},e),{[t]:fi(e[t],a)}):Object.assign(Object.assign({},e),{[t]:a})}),e}function _i(e,t){const a=e=>"object"==typeof e?a(e.name):e.trim().toLowerCase();return a(e)<a(t)?-1:1}const bi=h`
  ha-card {
    display: flex;
    flex-direction: column;
    margin: 5px;
    max-width: calc(100vw - 10px);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .card-header .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.warning {
    color: var(--error-color);
    margin-top: 20px;
  }

  div.checkbox-row {
    min-height: 40px;
    display: flex;
    align-items: center;
  }

  div.checkbox-row ha-switch {
    margin-right: 20px;
  }

  div.checkbox-row.right ha-switch {
    margin-left: 20px;
    position: absolute;
    right: 0px;
  }
  paper-tab.iron-selected {
    color: var(--accent-color);
  }
  mwc-button {
    --mdc-theme-primary: var(--accent-color);
  }

  mwc-button.active {
    background: var(--accent-color);
    --mdc-theme-primary: var(--primary-color);
    border-radius: 4px;
  }
  mwc-button.disabled {
    background: var(--primary-color);
    --mdc-theme-primary: grey;
    border-radius: 4px;
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  mwc-button.success {
    --mdc-theme-primary: var(--success-color);
  }

  mwc-button.disabled.active {
    opacity: 0.5;
  }

  div.entity-row {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px 0px;
  }
  div.entity-row .info {
    margin-left: 16px;
    flex: 1 0 60px;
  }
  div.entity-row .info,
  div.entity-row .info > * {
    color: var(--primary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row .secondary {
    display: block;
    color: var(--secondary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row state-badge {
    flex: 0 0 40px;
  }

  ha-dialog div.wrapper {
    margin-bottom: -20px;
  }

  ha-textfield {
    min-width: 220px;
  }

  a,
  a:visited {
    color: var(--primary-color);
  }
  mwc-button ha-icon {
    padding-right: 11px;
  }
  mwc-button[trailingIcon] ha-icon {
    padding: 0px 0px 0px 6px;
  }
  mwc-button.vertical {
    height: 60px;
    --mdc-button-height: 60px;
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
  }
  mwc-button.vertical div {
    display: flex;
    flex-direction: column;
  }
  mwc-button.vertical span {
    display: flex;
  }
  mwc-button.vertical ha-icon {
    display: flex;
    margin-left: 50%;
  }
  mwc-tab {
    --mdc-tab-color-default: var(--secondary-text-color);
    --mdc-tab-text-label-color-default: var(--secondary-text-color);
  }
  mwc-tab ha-icon {
    --mdc-icon-size: 20px;
  }
  mwc-tab.disabled {
    --mdc-theme-primary: var(--disabled-text-color);
    --mdc-tab-color-default: var(--disabled-text-color);
    --mdc-tab-text-label-color-default: var(--disabled-text-color);
  }

  ha-card settings-row:first-child,
  ha-card settings-row:first-of-type {
    border-top: 0px;
  }

  ha-card > ha-card {
    margin: 10px;
  }
`,yi=h`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-heading-ink-color: var(--primary-text-color);
    --mdc-dialog-content-ink-color: var(--primary-text-color);
    --justify-action-buttons: space-between;
  }
  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));
      --mdc-dialog-max-width: calc(100vw - env(safe-area-inset-right) - env(safe-area-inset-left));
      --mdc-dialog-min-height: 100%;
      --mdc-dialog-max-height: 100%;
      --vertial-align-dialog: flex-end;
      --ha-dialog-border-radius: 0px;
    }
  }
  ha-dialog div.description {
    margin-bottom: 10px;
  }
`,wi=()=>{const e=e=>{let t={};for(let a=0;a<e.length;a+=2){const i=e[a],s=a<e.length?e[a+1]:void 0;t=Object.assign(Object.assign({},t),{[i]:s})}return t},t=window.location.pathname.split("/");let a={page:t[2]||"general",params:{}};if(t.length>3){let i=t.slice(3);if(t.includes("filter")){const t=i.findIndex(e=>"filter"==e),s=i.slice(t+1);i=i.slice(0,t),a=Object.assign(Object.assign({},a),{filter:e(s)})}i.length&&(i.length%2&&(a=Object.assign(Object.assign({},a),{subpage:i.shift()})),i.length&&(a=Object.assign(Object.assign({},a),{params:e(i)})))}return a},$i=(e,...t)=>{let a={page:e,params:{}};t.forEach(e=>{"string"==typeof e?a=Object.assign(Object.assign({},a),{subpage:e}):"params"in e?a=Object.assign(Object.assign({},a),{params:e.params}):"filter"in e&&(a=Object.assign(Object.assign({},a),{filter:e.filter}))});const i=e=>{let t=Object.keys(e);t=t.filter(t=>e[t]),t.sort();let a="";return t.forEach(t=>{const i=e[t];a=a.length?`${a}/${t}/${i}`:`${t}/${i}`}),a};let s="/alarmo/"+a.page;return a.subpage&&(s=`${s}/${a.subpage}`),i(a.params).length&&(s=`${s}/${i(a.params)}`),a.filter&&(s=`${s}/filter/${i(a.filter)}`),s};let ki=class extends oe{constructor(){super(...arguments),this.min=0,this.max=100,this.step=10,this.value=0,this.scaleFactor=1,this.unit="",this.disabled=!1}firstUpdated(){this.value>0&&this.value<60&&(this.unit="sec"),"min"==this.unit&&(this.scaleFactor=1/60),"min"==this.unit&&(this.step=1)}render(){return q`
      <div class="container">
        <div class="prefix">
          <slot name="prefix"></slot>
        </div>
        <div class="slider">
          ${this.getSlider()}
        </div>
        <div class="value${this.disabled?" disabled":""}" @click=${this.toggleUnit}>
          ${this.getValue()}
        </div>
      </div>
    `}getValue(){const e=Number(Math.round(this.value*this.scaleFactor));return!e&&this.zeroValue?this.zeroValue:`${e} ${this.getUnit()}`}getUnit(){switch(this.unit){case"sec":return Wa("components.time_slider.seconds",this.hass.language);case"min":return Wa("components.time_slider.minutes",this.hass.language);default:return""}}getSlider(){return q`
      <ha-slider
        pin
        min=${Math.round(this.min*this.scaleFactor)}
        max=${Math.round(this.max*this.scaleFactor)}
        step=${this.step}
        value=${Math.round(this.value*this.scaleFactor)}
        ?disabled=${this.disabled}
        @change=${this.updateValue}
      ></ha-slider>
    `}updateValue(e){const t=Number(e.target.value);this.value=Math.round(t/this.scaleFactor)}toggleUnit(){this.unit="min"==this.unit?"sec":"min",this.scaleFactor="min"==this.unit?1/60:1,this.step="min"==this.unit?1:10}};ki.styles=h`
    :host {
      display: flex;
      flex-direction: column;
      min-width: 250px;
    }

    div.container {
      display: grid;
      grid-template-columns: max-content 1fr 60px;
      grid-template-rows: min-content;
      grid-template-areas: 'prefix slider value';
    }

    div.prefix {
      grid-area: prefix;
      display: flex;
      align-items: center;
    }

    div.slider {
      grid-area: slider;
      display: flex;
      align-items: center;
      flex: 1;
    }

    div.value {
      grid-area: value;
      min-width: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
    }

    ha-slider {
      width: 100%;
    }

    .disabled {
      color: var(--disabled-text-color);
    }
  `,s([he({type:Number})],ki.prototype,"min",void 0),s([he({type:Number})],ki.prototype,"max",void 0),s([he({type:Number})],ki.prototype,"step",void 0),s([he({type:Number})],ki.prototype,"value",void 0),s([he()],ki.prototype,"scaleFactor",void 0),s([he({type:String})],ki.prototype,"unit",void 0),s([he({type:Boolean})],ki.prototype,"disabled",void 0),s([he({type:String})],ki.prototype,"zeroValue",void 0),ki=s([de("time-slider")],ki);var Ai="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",Ei="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const xi=2,Oi=6,Ti=e=>(...t)=>({_$litDirective$:e,values:t});class Ci{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}let ji=class extends oe{constructor(){super(...arguments),this.label="",this.items=[],this.clearable=!1,this.icons=!1,this.disabled=!1,this.invalid=!1,this.rowRenderer=e=>{const t=mi(e.description);return this.icons?q`
        <style>
          mwc-list-item {
            font-size: 15px;
            --mdc-typography-body2-font-size: 14px;
            --mdc-list-item-meta-size: 8px;
            --mdc-list-item-graphic-margin: 8px;
          }
        </style>
        <mwc-list-item graphic="avatar" .twoline=${t}>
          <ha-icon icon="${e.icon}" slot="graphic"></ha-icon>
          <span>${e.name}</span>
          ${t?q`
                <span slot="secondary">${e.description}</span>
              `:""}
        </mwc-list-item>
      `:q`
        <style>
          mwc-list-item {
            font-size: 15px;
            --mdc-typography-body2-font-size: 14px;
          }
        </style>
        <mwc-list-item .twoline=${t}>
          <span>${e.name}</span>
          ${t?q`
                <span slot="secondary">${e.description}</span>
              `:""}
        </mwc-list-item>
      `}}open(){this.updateComplete.then(()=>{var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("vaadin-combo-box-light"))||void 0===t||t.open()})}disconnectedCallback(){super.disconnectedCallback(),this._overlayMutationObserver&&(this._overlayMutationObserver.disconnect(),this._overlayMutationObserver=void 0)}focus(){this.updateComplete.then(()=>{var e;(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("ha-textfield")).focus()})}shouldUpdate(e){if(e.get("items"))if(ui(this.items,e.get("items"))){if(1==e.size)return!1}else this.firstUpdated();return!0}firstUpdated(){this._comboBox.items=this.items}render(){const e=mi(this._value)&&this.items.find(e=>e.value==this._value);return q`
      <vaadin-combo-box-light
        item-value-path="value"
        item-id-path="value"
        item-label-path="name"
        .value=${this._value}
        ${Li(this.rowRenderer)}
        .allowCustomValue=${this.allowCustomValue}
        ?disabled=${this.disabled}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <ha-textfield
          .label=${this.label}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ?disabled=${this.disabled}
          ?invalid=${this.invalid}
          .icon=${this.icons&&e}
        >
          <ha-icon
            name="icon"
            slot="leadingIcon"
            icon="${this.icons&&e?this.items.find(e=>e.value==this._value).icon:void 0}"
          ></ha-icon>
        </ha-textfield>
        <ha-svg-icon
          class="toggle-button ${this.items.length?"":"disabled"}"
          .path=${this._opened&&this.items.length?"M7,15L12,10L17,15H7Z":"M7,10L12,15L17,10H7Z"}
          @click=${this._toggleOpen}
        ></ha-svg-icon>
        ${this.clearable&&e?q`
              <ha-svg-icon class="clear-button" @click=${this._clearValue} .path=${Ei}></ha-svg-icon>
            `:""}
      </vaadin-combo-box-light>
    `}_clearValue(e){e.stopPropagation(),this._setValue("")}get _value(){return mi(this.value)?this.value:""}_toggleOpen(e){var t,a,i,s,n,r;this.items.length?this._opened?(null===(i=null===(a=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("vaadin-combo-box-light"))||void 0===a?void 0:a.inputElement)||void 0===i||i.blur(),e.stopPropagation()):null===(r=null===(n=null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector("vaadin-combo-box-light"))||void 0===n?void 0:n.inputElement)||void 0===r||r.focus():e.stopPropagation()}_openedChanged(e){if(this._opened=e.detail.value,this._opened&&"MutationObserver"in window&&!this._overlayMutationObserver){const e=document.querySelector("vaadin-combo-box-overlay");if(!e)return;this._overlayMutationObserver=new MutationObserver(t=>{t.forEach(t=>{var a;"attributes"===t.type&&"inert"===t.attributeName&&!0===e.inert?(e.inert=!1,null===(a=this._overlayMutationObserver)||void 0===a||a.disconnect(),this._overlayMutationObserver=void 0):"childList"===t.type&&t.removedNodes.forEach(e=>{var t;"VAADIN-COMBO-BOX-OVERLAY"===e.nodeName&&(null===(t=this._overlayMutationObserver)||void 0===t||t.disconnect(),this._overlayMutationObserver=void 0)})})}),this._overlayMutationObserver.observe(e,{attributes:!0}),this._overlayMutationObserver.observe(document.body,{childList:!0})}}_valueChanged(e){const t=e.detail.value;t!==this._value&&this._setValue(t)}_setValue(e){this.value=e,setTimeout(()=>{be(this,"value-changed",{value:e})},0)}static get styles(){return h`
      :host {
        display: block;
      }
      vaadin-combo-box-light {
        position: relative;
      }
      ha-textfield {
        width: 100%;
      }
      ha-textfield > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      ha-svg-icon {
        color: var(--input-dropdown-icon-color);
        position: absolute;
        cursor: pointer;
      }
      ha-svg-icon.disabled {
        cursor: default;
        color: var(--disabled-text-color);
      }
      .toggle-button {
        right: 12px;
        bottom: 5px;
      }
      :host([opened]) .toggle-button {
        color: var(--primary-color);
      }
      .clear-button {
        --mdc-icon-size: 20px;
        bottom: 5px;
        right: 36px;
      }
    `}};s([he()],ji.prototype,"label",void 0),s([he()],ji.prototype,"value",void 0),s([he()],ji.prototype,"items",void 0),s([he()],ji.prototype,"clearable",void 0),s([he()],ji.prototype,"icons",void 0),s([he({type:Boolean})],ji.prototype,"disabled",void 0),s([me()],ji.prototype,"_opened",void 0),s([he({attribute:"allow-custom-value",type:Boolean})],ji.prototype,"allowCustomValue",void 0),s([he({type:Boolean})],ji.prototype,"invalid",void 0),s([ue("vaadin-combo-box-light",!0)],ji.prototype,"_comboBox",void 0),ji=s([de("alarmo-select")],ji);const Si={};class Mi extends Ci{constructor(e){if(super(e),this.previousValue=Si,e.type!==Oi)throw new Error("renderer only supports binding to element")}render(e,t){return U}update(e,[t,a]){var i;const s=this.previousValue===Si;if(!this.hasChanged(a))return U;this.previousValue=Array.isArray(a)?Array.from(a):a;const n=e.element;if(s){const a=null===(i=e.options)||void 0===i?void 0:i.host;this.addRenderer(n,t,{host:a})}else this.runRenderer(n);return U}hasChanged(e){let t=!0;return Array.isArray(e)?Array.isArray(this.previousValue)&&this.previousValue.length===e.length&&e.every((e,t)=>e===this.previousValue[t])&&(t=!1):this.previousValue===e&&(t=!1),t}}const Ni=Ti(class extends Mi{addRenderer(e,t,a){e.renderer=(e,i,s)=>{F(t.call(a.host,s.item,s,i),e,a)}}runRenderer(e){e.requestContentUpdate()}}),Li=(e,t)=>Ni(e,t);let Di=class extends oe{static get styles(){return h`
      :host {
        display: block;
      }
    `}render(){return q`
      <slot></slot>
    `}constructor(){super(),this.addEventListener("clickHeader",this.manageSpoilers)}manageSpoilers(e){const t=e.target;t.getAttribute("active")?t.removeAttribute("active"):t.setAttribute("active","true");this.querySelectorAll("alarmo-collapsible-header[active]").forEach((function(e){e!==t&&e.removeAttribute("active")}))}};Di=s([de("alarmo-collapsible-group")],Di);let zi=class extends oe{static get styles(){return h`
      :host {
        display: block;
      }
    `}render(){return q`
      <slot></slot>
    `}};zi=s([de("alarmo-collapsible-item")],zi);let Hi=class extends oe{constructor(){super(),this.clickHeader=new CustomEvent("clickHeader",{detail:{message:"clickHeader happened."},bubbles:!0,composed:!0}),this.active=!1,this.addEventListener("click",this.handleClick)}handleClick(){this.dispatchEvent(this.clickHeader)}render(){return q`
      <mwc-list-item graphic="avatar" twoline hasMeta>
        <slot name="icon" slot="graphic"></slot>
        <span><slot name="title"></slot></span>
        <span slot="secondary"><slot name="description"></slot></span>
        <ha-icon slot="meta" icon="hass:chevron-down" class="chevron"></ha-icon>
      </mwc-list-item>
    `}static get styles(){return h`
      :host {
        display: block;
        cursor: pointer;
      }
      :host mwc-list-item::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: '';
        transition: opacity 15ms linear;
        will-change: opacity;
        background-color: black;
        opacity: 0;
      }
      :host mwc-list-item:hover::before {
        opacity: 0.04;
      }
      :host([active]) mwc-list-item::before {
        opacity: 0.1;
      }
      :host([active]) mwc-list-item:hover::before {
        opacity: 0.12;
      }
      :host mwc-list-item:active::before,
      :host([active]) mwc-list-item:active::before {
        opacity: 0.14;
      }
      ::slotted(ha-icon) {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
      }
      :host mwc-list-item {
        font-size: 15px;
        --mdc-typography-body2-font-size: 14px;
      }
      :host .chevron {
        display: block;
        transition: 0.4s;
      }
      :host([active]) .chevron {
        transform: rotate(180deg);
      }
    `}attributeChangedCallback(e,t,a){this.hasAttribute("active")&&this.nextElementSibling?this.nextElementSibling.style.maxHeight=this.nextElementSibling.scrollHeight+"px":this.nextElementSibling&&(this.nextElementSibling.style.maxHeight="0px"),super.attributeChangedCallback(e,t,a)}};s([he({type:CustomEvent})],Hi.prototype,"clickHeader",void 0),s([he({type:Boolean,attribute:!0,reflect:!0})],Hi.prototype,"active",void 0),Hi=s([de("alarmo-collapsible-header")],Hi);let Pi=class extends oe{static get styles(){return h`
      :host {
        display: block;
        background-color: var(--card-background-color);
        max-height: 0px;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
      }
      .wrapper {
      }
    `}render(){return q`
      <div class="wrapper">
        <slot>Default details</slot>
      </div>
    `}};Pi=s([de("alarmo-collapsible-body")],Pi);let Bi=class extends(Be(oe)){hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await He(this.hass),this.sensors=await Te(this.hass))}async firstUpdated(){await this._fetchData(),this.selectedArea=Object.keys(this.areas)[0],this.data=Object.assign({},this.areas[this.selectedArea].modes)}render(){return this.data?q`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${Wa("panels.general.cards.modes.title",this.hass.language)}
          </div>

          ${Object.keys(this.areas).length>1?q`
                <alarmo-select
                  .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
                  value=${this.selectedArea}
                  label=${this.hass.localize("ui.components.area-picker.area")}
                  @value-changed=${e=>this.selectArea(e.target.value)}
                ></alarmo-select>
              `:""}
        </div>
        <div class="card-content">
          ${Wa("panels.general.cards.modes.description",this.hass.language)}
        </div>

        <alarmo-collapsible-group>
          ${Object.entries(ii).map(([e,t])=>{var a;return q`
                <alarmo-collapsible-item>
                  <alarmo-collapsible-header>
                    <ha-icon slot="icon" icon="${Xa[e]}"></ha-icon>
                    <span slot="title">
                      ${this.hass.localize("component.alarm_control_panel.state._."+t)}
                    </span>
                    <span slot="description">
                      ${(null===(a=this.data[t])||void 0===a?void 0:a.enabled)?q`
                            ${Wa("common.enabled",this.hass.language)},
                            <a href="${$i("sensors",{filter:{area:this.selectedArea,mode:t}})}">
                              ${Wa("panels.general.cards.modes.number_sensors_active",this.hass.language,"number",this.getSensorsByMode(t))}
                            </a>
                          `:Wa("common.disabled",this.hass.language)}
                    </span>
                  </alarmo-collapsible-header>
                  <alarmo-collapsible-body>
                    ${this.renderModeConfig(t)}
                  </alarmo-collapsible-body>
                </alarmo-collapsible-item>
              `})}
        </alarmo-collapsible-group>
      </ha-card>
    `:q``}getSensorsByMode(e){return Object.values(this.sensors).filter(t=>t.modes.includes(e)||t.always_on).length}renderModeConfig(e){const t=e in this.data?this.data[e]:void 0;return q`
      <div class="description">
        <ha-icon id="warning" icon="mdi:information-outline"></ha-icon>
        ${Wa("panels.general.cards.modes.modes."+e,this.hass.language)}
      </div>
      <settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${Wa("panels.general.cards.modes.fields.status.heading",this.hass.language)}
        </span>
        <span slot="description">
          ${Wa("panels.general.cards.modes.fields.status.description",this.hass.language)}
        </span>
        <div>
          <mwc-button class="${(null==t?void 0:t.enabled)?"active":""}" @click=${()=>this.saveData(e,{enabled:!0})}>
            <ha-icon icon="mdi:check"></ha-icon>
            ${Wa("common.enabled",this.hass.language)}
          </mwc-button>
          <mwc-button
            class="${(null==t?void 0:t.enabled)?"":"active"}"
            @click=${()=>this.saveData(e,{enabled:!1})}
          >
            <ha-icon icon="mdi:close"></ha-icon>
            ${Wa("common.disabled",this.hass.language)}
          </mwc-button>
        </div>
      </settings-row>
      <settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${Wa("panels.general.cards.modes.fields.exit_delay.heading",this.hass.language)}
        </span>
        <span slot="description">
          ${Wa("panels.general.cards.modes.fields.exit_delay.description",this.hass.language)}
        </span>
        <time-slider
          .hass=${this.hass}
          unit="sec"
          max="180"
          zeroValue=${Wa("components.time_slider.none",this.hass.language)}
          value=${(null==t?void 0:t.exit_time)||0}
          @change=${t=>this.saveData(e,{exit_time:Number(t.target.value)})}
          ?disabled=${!(null==t?void 0:t.enabled)}
        ></time-slider>
      </settings-row>
      <settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${Wa("panels.general.cards.modes.fields.entry_delay.heading",this.hass.language)}
        </span>
        <span slot="description">
          ${Wa("panels.general.cards.modes.fields.entry_delay.description",this.hass.language)}
        </span>
        <time-slider
          .hass=${this.hass}
          unit="sec"
          max="180"
          zeroValue=${Wa("components.time_slider.none",this.hass.language)}
          value=${(null==t?void 0:t.entry_time)||0}
          @change=${t=>this.saveData(e,{entry_time:Number(t.target.value)})}
          ?disabled=${!(null==t?void 0:t.enabled)}
        ></time-slider>
      </settings-row>
      <settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${Wa("panels.general.cards.modes.fields.trigger_time.heading",this.hass.language)}
        </span>
        <span slot="description">
          ${Wa("panels.general.cards.modes.fields.trigger_time.description",this.hass.language)}
        </span>
        <time-slider
          .hass=${this.hass}
          unit="min"
          max="3600"
          zeroValue=${Wa("components.time_slider.infinite",this.hass.language)}
          value=${(null==t?void 0:t.trigger_time)||0}
          @change=${t=>this.saveData(e,{trigger_time:Number(t.target.value)})}
          ?disabled=${!(null==t?void 0:t.enabled)}
        ></time-slider>
      </settings-row>
    `}selectArea(e){e!=this.selectedArea&&(this.selectedArea=e,this.data=Object.assign({},this.areas[e].modes))}saveClick(e){Pe(this.hass,{area_id:this.selectedArea,modes:this.data}).catch(t=>gi(t,e)).then()}saveData(e,t){this.data=Object.assign(Object.assign({},this.data),{[e]:Object.assign(Object.assign({},this.data[e]||{enabled:!1,exit_time:0,entry_time:0,trigger_time:0}),t)}),Pe(this.hass,{area_id:this.selectedArea,modes:this.data}).catch(e=>gi(e,this.shadowRoot.querySelector("ha-card"))).then()}static get styles(){return h`
      ${bi}
      alarmo-collapsible-header:first-of-type {
        border-top: 1px solid var(--divider-color);
      }
      .description {
        margin: 8px;
        padding: 12px;
        color: var(--primary-text-color);
        filter: brightness(0.85);
        font-size: 14px;
        line-height: 1.5em;
        min-height: 36px;
        display: flex;
        align-items: center;
        position: relative;
      }
      .description::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: '';
        background: rgba(var(--rgb-primary-color), 0.12);
        border-radius: 5px;
      }
      .description ha-icon {
        --mdc-icon-size: 36px;
        display: inline;
        float: left;
        margin-right: 12px;
        align-self: flex-start;
      }
    `}};s([he()],Bi.prototype,"hass",void 0),s([he({type:Boolean})],Bi.prototype,"narrow",void 0),s([he()],Bi.prototype,"config",void 0),s([he()],Bi.prototype,"areas",void 0),s([he()],Bi.prototype,"sensors",void 0),s([he()],Bi.prototype,"data",void 0),s([he()],Bi.prototype,"selectedArea",void 0),Bi=s([de("alarm-mode-card")],Bi);let Ri=class extends oe{constructor(){super(...arguments),this.threeLine=!1}render(){return q`
      <div class="info">
        <slot name="heading"></slot>
        <div class="secondary"><slot name="description"></slot></div>
      </div>
      <slot></slot>
    `}static get styles(){return h`
      :host {
        display: flex;
        flex-direction: row;
        padding: 0px 16px;
        align-items: center;
        min-height: 72px;
      }
      :host([large]) {
        align-items: normal;
        flex-direction: column;
        border-top: 1px solid var(--divider-color);
        border-bottom: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      :host([narrow]) {
        align-items: normal;
        flex-direction: column;
        border-bottom: none;
        border-top: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      :host([nested]) {
        border: none;
        padding: 0px 16px 16px 16px;
        margin-top: -16px;
        min-height: 40px;
      }
      :host([nested]:not([narrow])) {
        padding: 16px 16px 16px 32px;
      }
      :host([first]) {
        border-top: none;
      }
      :host([last]) {
        border-bottom: none;
      }
      :host([dialog]) {
        border: none;
        padding: 12px 0px;
      }
      ::slotted(ha-switch) {
        padding: 16px 0;
      }
      .info {
        margin: 10px 0;
        flex: 1 0 60px;
      }
      :host([large]) .info,
      :host([narrow]) .info {
        flex: 1 0 40px;
      }
      :host([nested]) .info {
        flex: 1 0 26px;
      }
      :host([dialog]) .info {
        flex: 1 0 40px;
        padding-bottom: 8px;
      }
      .secondary {
        color: var(--secondary-text-color);
      }
      :host(:not([large]):not([narrow])):not([dialog])) ::slotted(*) {
        max-width: 66%;
      }
    `}};s([he({type:Boolean,reflect:!0})],Ri.prototype,"narrow",void 0),s([he({type:Boolean,reflect:!0})],Ri.prototype,"large",void 0),s([he({type:Boolean,attribute:"three-line"})],Ri.prototype,"threeLine",void 0),s([he({type:Boolean})],Ri.prototype,"nested",void 0),s([he({type:Boolean})],Ri.prototype,"dialog",void 0),Ri=s([de("settings-row")],Ri);let qi=class extends oe{constructor(){super(...arguments),this.header="",this.open=!1}render(){return q`
      ${this.open?q`
            <div class="header open">
              <span
                @click=${()=>{this.open=!1}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                .path=${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
                @click=${()=>{this.open=!1}}
              ></ha-icon-button>
            </div>
            <slot></slot>
            <div class="header open">
              <span
                @click=${()=>{this.open=!1}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                .path=${"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"}
                @click=${()=>{this.open=!1}}
              ></ha-icon-button>
            </div>
          `:q`
            <div class="header">
              <span
                @click=${()=>{this.open=!0}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                .path=${Ai}
                @click=${()=>{this.open=!0}}
              ></ha-icon-button>
            </div>
          `}
    `}static get styles(){return h`
      :host {
      }

      div.header {
        display: flex;
        align-items: center;
        padding: 0px 16px;
        cursor: pointer;
      }
      div.header.open:first-of-type {
        border-bottom: 1px solid var(--divider-color);
      }
      div.header.open:last-of-type {
        border-top: 1px solid var(--divider-color);
      }

      :host([narrow]) div.header {
        border-top: 1px solid var(--divider-color);
        border-bottom: none;
      }

      div.header span {
        display: flex;
        flex-grow: 1;
      }

      div.seperator {
        height: 1px;
        background: var(--divider-color);
      }
    `}};s([he({type:Boolean,reflect:!0})],qi.prototype,"narrow",void 0),s([he()],qi.prototype,"header",void 0),s([he()],qi.prototype,"open",void 0),qi=s([de("collapsible-section")],qi);let Ii=class extends(Be(oe)){constructor(){super(...arguments),this.areas={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await Oe(this.hass);this.config=e,this.areas=await He(this.hass),this.selection=e.mqtt}firstUpdated(){(async()=>{await Ee()})()}render(){return this.hass&&this.selection?q`
      <ha-card>
        <div class="card-header">
          <div class="name">${Wa("panels.general.cards.mqtt.title",this.hass.language)}</div>
          <ha-icon-button .path=${Ei} @click=${this.cancelClick}></ha-icon-button>
        </div>
        <div class="card-content">${Wa("panels.general.cards.mqtt.description",this.hass.language)}</div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${Wa("panels.general.cards.mqtt.fields.state_topic.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.general.cards.mqtt.fields.state_topic.description",this.hass.language)}
          </span>
          <ha-textfield
            label="${Wa("panels.general.cards.mqtt.fields.state_topic.heading",this.hass.language)}"
            value=${this.selection.state_topic}
            @change=${e=>{this.selection={...this.selection,state_topic:e.target.value}}}
          ></ha-textfield>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${Wa("panels.general.cards.mqtt.fields.state_payload.heading",this.hass.language)}
        >
          ${Object.values(Za).filter(e=>Object.values(this.areas).some(t=>vi(e,t.modes))).map(e=>q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">${ri(e)}</span>
                  <span slot="description">
                    ${Wa("panels.general.cards.mqtt.fields.state_payload.item",this.hass.language,"{state}",ri(e))}
                  </span>
                  <ha-textfield
                    label=${ri(e)}
                    placeholder=${e}
                    value=${this.selection.state_payload[e]||""}
                    @change=${t=>{this.selection=fi(this.selection,{state_payload:{[e]:t.target.value}})}}
                  ></ha-textfield>
                </settings-row>
              `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${Wa("panels.general.cards.mqtt.fields.event_topic.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.general.cards.mqtt.fields.event_topic.description",this.hass.language)}
          </span>
          <ha-textfield
            label="${Wa("panels.general.cards.mqtt.fields.event_topic.heading",this.hass.language)}"
            value=${this.selection.event_topic}
            @change=${e=>{this.selection={...this.selection,event_topic:e.target.value}}}
          ></ha-textfield>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${Wa("panels.general.cards.mqtt.fields.command_topic.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.general.cards.mqtt.fields.command_topic.description",this.hass.language)}
          </span>
          <ha-textfield
            label="${Wa("panels.general.cards.mqtt.fields.command_topic.heading",this.hass.language)}"
            value=${this.selection.command_topic}
            @change=${e=>{this.selection={...this.selection,command_topic:e.target.value}}}
          ></ha-textfield>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${Wa("panels.general.cards.mqtt.fields.command_payload.heading",this.hass.language)}
        >
          ${Object.values(Ja).filter(e=>Object.values(this.areas).some(t=>vi((e=>{switch(e){case Ja.COMMAND_ALARM_DISARM:return Za.STATE_ALARM_DISARMED;case Ja.COMMAND_ALARM_ARM_HOME:return Za.STATE_ALARM_ARMED_HOME;case Ja.COMMAND_ALARM_ARM_AWAY:return Za.STATE_ALARM_ARMED_AWAY;case Ja.COMMAND_ALARM_ARM_NIGHT:return Za.STATE_ALARM_ARMED_NIGHT;case Ja.COMMAND_ALARM_ARM_CUSTOM_BYPASS:return Za.STATE_ALARM_ARMED_CUSTOM_BYPASS;case Ja.COMMAND_ALARM_ARM_VACATION:return Za.STATE_ALARM_ARMED_VACATION;default:return}})(e),t.modes))).map(e=>q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">${ri(e)}</span>
                  <span slot="description">
                    ${Wa("panels.general.cards.mqtt.fields.command_payload.item",this.hass.language,"{command}",ri(e))}
                  </span>
                  <ha-textfield
                    label=${ri(e)}
                    placeholder=${e}
                    value=${this.selection.command_payload[e]||""}
                    @change=${t=>{this.selection=fi(this.selection,{command_payload:{[e]:t.target.value}})}}
                  ></ha-textfield>
                </settings-row>
              `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${Wa("panels.general.cards.mqtt.fields.require_code.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.general.cards.mqtt.fields.require_code.description",this.hass.language)}
          </span>
          <ha-switch
            ?checked=${this.selection.require_code}
            ?disabled=${!this.config.code_arm_required&&!this.config.code_disarm_required}
            @change=${e=>{this.selection={...this.selection,require_code:e.target.checked}}}
          ></ha-switch>
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>
    `:q``}saveClick(e){this.hass&&Me(this.hass,{mqtt:Object.assign(Object.assign({},this.selection),{enabled:!0})}).catch(t=>gi(t,e)).then(()=>{this.cancelClick()})}cancelClick(){$e(0,$i("general"),!0)}};Ii.styles=bi,s([he()],Ii.prototype,"narrow",void 0),s([he()],Ii.prototype,"config",void 0),s([he()],Ii.prototype,"areas",void 0),s([he()],Ii.prototype,"selection",void 0),Ii=s([de("mqtt-config-card")],Ii);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
class Ui extends Ci{constructor(e){if(super(e),this.it=U,e.type!==xi)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||null==e)return this._t=void 0,this.it=e;if(e===I)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ui.directiveName="unsafeHTML",Ui.resultType=1;const Gi=Ti(Ui);let Fi=class extends oe{render(){return q`
      <div class="chip ${this.checked?"selected":""}" @click=${this._toggleSelect}>
        ${this.renderCheckmark()}
        <slot></slot>
        ${this.renderButton()}
      </div>
    `}renderCheckmark(){return this.checkmark?q`
      <div class="checkmark-container">
        <ha-icon icon="mdi:check"></ha-icon>
      </div>
    `:q``}renderButton(){return this.cancellable?q`
        <div class="button-container" @click=${this._buttonClick}>
          <ha-icon icon="mdi:close"></ha-icon>
        </div>
      `:void 0!==this.badge?q`
        <div class="badge-container" @click=${this._buttonClick}>
          ${this.badge}
        </div>
      `:q``}_toggleSelect(){if(!this.value||!this.clickable)return;this.selectable&&(this.checked=!this.checked);const e=new CustomEvent("value-changed",{detail:this.value});this.dispatchEvent(e)}_buttonClick(){const e=new CustomEvent("button-clicked",{detail:this.value});this.dispatchEvent(e)}static get styles(){return h`
      :host {
        margin: 4px;
      }
      .chip {
        display: flex;
        position: relative;
        height: 36px;
        padding: 0px 16px;
        align-items: center;
        color: var(--primary-text-color);
        user-select: none;
        font-weight: 400;
        z-index: 1;
      }
      :host([clickable]) .chip {
        cursor: pointer;
        color: var(--rgb-primary-color);
        opacity: 0.85;
      }
      .chip:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        content: '';
        border-radius: 8px;
        border: 1px solid var(--primary-text-color);
        opacity: 0.24;
        z-index: -1;
      }
      :host([clickable]) .chip:hover,
      :host([clickable]) .chip:active {
        opacity: 1;
      }
      :host([clickable]) .chip:hover:before {
        opacity: 0.3;
      }
      :host([clickable]) .chip:active:before {
        opacity: 0.06;
        background: var(--primary-text-color);
      }
      :host .chip.selected:before,
      :host([cancellable]) .chip:before {
        background: rgba(var(--rgb-primary-color), 0.18);
        border: none;
        opacity: 1;
      }
      :host .chip.selected:hover:before {
        background: rgba(var(--rgb-primary-color), 0.24);
        opacity: 1;
      }
      :host .chip.selected:active:before {
        background: rgba(var(--rgb-primary-color), 0.3);
        opacity: 1;
      }
      .chip div.checkmark-container {
        width: 0px;
        height: 100%;
        transition: width 0.1s ease-in-out;
        overflow: hidden;
        display: flex;
        align-items: center;
        margin: 0px 4px 0px -4px;
        --mdc-icon-size: 18px;
      }
      .chip.selected div.checkmark-container {
        width: 18px;
      }
      .chip div.button-container {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px -16px 0px 6px;
        cursor: pointer;
        --mdc-icon-size: 20px;
        position: relative;
        z-index: 1;
        opacity: 0.85;
        color: var(--dark-primary-color);
      }
      .chip div.button-container:before {
        position: absolute;
        top: 3px;
        right: 3px;
        bottom: 3px;
        left: 3px;
        pointer-events: none;
        content: '';
        border-radius: 15px;
        z-index: -1;
      }
      .chip div.button-container:hover,
      .chip div.button-container:hover {
        opacity: 1;
      }
      .chip div.button-container:hover:before {
        background: rgba(var(--rgb-primary-color), 0.12);
      }
      .chip div.button-container:active:before {
        background: rgba(var(--rgb-primary-color), 0.24);
      }
      .chip div.badge-container {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px -9px 0px 9px;
        position: relative;
        z-index: 1;
        font-size: 0.875em;
      }
      .chip div.badge-container:before {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        pointer-events: none;
        content: '';
        border-radius: 50%;
        z-index: -1;
      }
      :host([table]) .chip {
        height: 40px;
      }
      :host([table]) .chip:before {
        border-radius: 4px;
      }
    `}};s([he({type:String})],Fi.prototype,"value",void 0),s([he({type:Boolean})],Fi.prototype,"checked",void 0),s([he({type:Boolean})],Fi.prototype,"checkmark",void 0),s([he({type:Boolean})],Fi.prototype,"selectable",void 0),s([he({type:Boolean})],Fi.prototype,"clickable",void 0),s([he({type:Boolean})],Fi.prototype,"cancellable",void 0),s([he({type:Number})],Fi.prototype,"badge",void 0),s([he({type:Boolean})],Fi.prototype,"table",void 0),Fi=s([de("alarmo-chip")],Fi);let Vi=class extends oe{constructor(){super(...arguments),this.value=[]}render(){return this.items?q`
      ${Object.values(this.items).map(e=>q`
          <alarmo-chip
            value="${e.value}"
            ?checked=${this.value.includes(e.value)}
            .badge=${e.badge}
            ?selectable=${this.selectable}
            ?checkmark=${this.selectable}
            clickable
            @value-changed=${this._itemChanged}
          >
            ${e.name}
          </alarmo-chip>
        `)}
    `:q``}_itemChanged(e){const t=e.target.checked,a=String(e.detail);if(this.selectable){this.value.includes(a)&&!t?this.value=this.value.filter(e=>e!=a):!this.value.includes(a)&&t&&(this.value=[...this.value,a]);const e=new CustomEvent("value-changed",{detail:this.value});this.dispatchEvent(e)}else{const e=new CustomEvent("value-changed",{detail:a});this.dispatchEvent(e)}}static get styles(){return h`
      :host {
        display: flex;
        flex-direction: row;
        flex: 1;
        margin: 0px -4px;
        flex-wrap: wrap;
      }
    `}};s([he()],Vi.prototype,"items",void 0),s([he()],Vi.prototype,"value",void 0),s([he({type:Boolean})],Vi.prototype,"selectable",void 0),Vi=s([de("alarmo-chip-set")],Vi);let Ki=class extends oe{set filters(e){this.filterConfig||(this.filterConfig=e)}shouldUpdate(e){return e.get("filters")&&!this.filterConfig&&(this.filterConfig=e.get("filters")),!0}render(){if(!this.columns||!this.data)return q``;const e=this.data.filter(e=>this.filterTableData(e,this.filterConfig));return q`
      ${this.renderFilterRow()}
      <div class="table">
        ${this.renderHeaderRow()}
        ${e.length?e.map(e=>this.renderDataRow(e)):q`
              <div class="table-row">
                <div class="table-cell text grow">
                  <slot></slot>
                </div>
              </div>
            `}
      </div>
    `}renderHeaderRow(){return this.columns?q`
      <div class="table-row header">
        ${Object.values(this.columns).map(e=>e.hide?"":q`
                <div
                  class="table-cell ${e.text?"text":""} ${e.grow?"grow":""} ${e.align?e.align:""}"
                  style="${e.grow?"":"width: "+e.width}"
                >
                  <span>${e.title||""}</span>
                </div>
              `)}
      </div>
    `:q``}renderDataRow(e){return this.columns?q`
      <div
        class="table-row ${this.selectable?"selectable":""} ${e.warning?"warning":""}"
        @click=${()=>this.handleClick(String(e.id))}
      >
        ${Object.entries(this.columns).map(([t,a])=>a.hide?"":q`
                <div
                  class="table-cell ${a.text?"text":""} ${a.grow?"grow":""} ${a.align?a.align:""}"
                  style="${a.grow?"":"width: "+a.width}"
                >
                  ${a.renderer?a.renderer(e):e[t]}
                </div>
              `)}
      </div>
    `:q``}filterTableData(e,t){return!t||Object.keys(t).every(a=>{if(!Object.keys(e).includes(a))return!0;const i=t[a].value;return!i||!i.length||(Array.isArray(e[a])?e[a].some(e=>i.includes(e)):i.includes(e[a]))})}_getFilteredItems(){return this.data.filter(e=>!this.filterTableData(e,this.filterConfig)).length}handleClick(e){if(!this.selectable)return;const t=new CustomEvent("row-click",{detail:{id:e}});this.dispatchEvent(t)}renderFilterRow(){var e;return this.filterConfig?q`
      <div class="table-filter">
        <ha-icon-button
          .path=${"M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z"}
          ?disabled=${!(null===(e=this.data)||void 0===e?void 0:e.length)}
          label=${Wa("components.table.filter.label",this.hass.language)}
          @click=${this._toggleFilterMenu}
        ></ha-icon-button>
        <mwc-menu .corner=${"BOTTOM_START"} .fixed=${!0} @closed=${this._applyFilterSelection}>
          ${this.renderFilterMenu()}
        </mwc-menu>

        ${this._getFilteredItems()?q`
              <alarmo-chip cancellable table @button-clicked=${this._clearFilters}>
                ${Wa("components.table.filter.hidden_items",this.hass.language,"number",this._getFilteredItems())}
              </alarmo-chip>
            `:""}
      </div>
    `:q``}_toggleFilterMenu(e){const t=e.target;this._menu.anchor=t,this._menu.open?this._menu.close():(this.filterSelection=Object.entries(this.filterConfig).reduce((e,[t,a])=>Object.assign(Object.assign({},e),{[t]:ci(a,["value"])}),{}),this._menu.show())}renderFilterMenu(){return this.filterConfig&&this.filterSelection?q`
      <span class="header">
        ${Wa("components.table.filter.label",this.hass.language)}
      </span>
      <ha-icon-button
        .path=${Ei}
        @click=${()=>{this._menu.close(),setTimeout(()=>this._menu.anchor.blur(),50)}}
      ></ha-icon-button>
      ${Object.keys(this.filterConfig).map(e=>{if(this.filterConfig[e].binary)return q`
            <div class="dropdown-item checkbox">
              <ha-checkbox
                @change=${t=>this._updateFilterSelection(e,t.target.checked)}
                ?checked=${this.filterSelection[e].value.length}
              ></ha-checkbox>
              <span class="name">
                ${this.filterConfig[e].name}
              </span>
            </div>
          `;let t=this.filterConfig[e].items;t=t.map(t=>{var a;return t.badge&&"function"==typeof t.badge?{...t,badge:t.badge(null===(a=this.data)||void 0===a?void 0:a.filter(t=>this.filterTableData(t,hi(this.filterSelection,e))))}:t});const a=this.filterSelection[e].value;return q`
          <div class="dropdown-item">
            <span class="name">
              ${this.filterConfig[e].name}
            </span>
            <alarmo-chip-set
              selectable
              .items=${t}
              @value-changed=${t=>this._updateFilterSelection(e,t.detail)}
              .value=${a}
            ></alarmo-chip-set>
          </div>
        `})}
    `:q``}_updateFilterSelection(e,t){"boolean"==typeof t&&(t=t?this.filterConfig[e].items[0].value:[],1==Object.keys(this.filterConfig).length&&(this._menu.close(),setTimeout(()=>this._menu.anchor.blur(),50))),this.filterSelection=Object.assign(Object.assign({},this.filterSelection),{[e]:{value:t}})}_clearFilters(){Object.keys(this.filterConfig).forEach(e=>{this.filterConfig=Object.assign(Object.assign({},this.filterConfig),{[e]:Object.assign(Object.assign({},this.filterConfig[e]),{value:[]})})})}_applyFilterSelection(){Object.keys(this.filterConfig).forEach(e=>{this.filterConfig=Object.assign(Object.assign({},this.filterConfig),{[e]:Object.assign(Object.assign({},this.filterConfig[e]),this.filterSelection[e])})})}};Ki.styles=h`
    :host {
      width: 100%;
    }
    div.table {
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
    }
    div.table .header {
      font-weight: bold;
    }
    div.table-row {
      display: flex;
      width: 100%;
      height: 52px;
      border-top: 1px solid var(--divider-color);
      flex-direction: row;
      position: relative;
    }
    div.table-cell {
      align-self: center;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    div.table-cell.text {
      padding: 4px 16px;
    }
    div.table-cell.grow {
      flex-grow: 1;
      flex-shrink: 1;
    }

    div.table-cell > ha-switch {
      width: 68px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.table-cell.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.table-cell.right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    div.table-cell > ha-icon-button {
      color: var(--secondary-text-color);
    }
    div.table-cell > * {
      transition: color 0.2s ease-in-out;
    }
    div.table .header div.table-cell span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    div.table-row.selectable {
      cursor: pointer;
    }
    .table-row::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.12;
      pointer-events: none;
      content: '';
      border-radius: 4px;
    }
    div.table-row.selectable:hover::before {
      background-color: rgba(var(--rgb-primary-text-color), 0.5);
    }
    div.table-row.warning::before {
      background-color: var(--error-color);
      opacity: 0.06;
    }
    div.table-row.warning:hover::before {
      background-color: var(--error-color);
      opacity: 0.12;
    }
    div.table-row.warning span {
      color: var(--error-color);
    }

    ha-icon {
      color: var(--state-icon-color);
      padding: 8px;
    }

    .secondary {
      color: var(--secondary-text-color);
      display: flex;
      padding-top: 4px;
    }

    a,
    a:visited {
      color: var(--primary-color);
    }

    span.disabled {
      color: var(--secondary-text-color);
    }
    span.secondary.disabled {
      color: var(--disabled-text-color);
    }
    ha-icon.disabled {
      color: var(--state-unavailable-color);
    }

    div.table-filter {
      display: flex;
      width: 100%;
      min-height: 52px;
      border-top: 1px solid var(--divider-color);
      box-sizing: border-box;
      padding: 2px 8px;
      flex: 1;
      position: relative;
      flex-direction: row;
      align-items: center;
    }
    mwc-menu .header {
      display: flex;
      padding: 8px 16px;
      font-weight: bold;
    }
    mwc-menu ha-icon-button {
      position: absolute;
      top: 8px;
      right: 8px;
    }
    div.dropdown-item {
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      padding: 8px 16px;
      width: 100%;
      min-height: 52px;
      box-sizing: border-box;
    }
    div.dropdown-item .name {
      display: inline-flex;
    }
    div.dropdown-item alarmo-chips {
      display: flex;
      flex-direction: row;
    }
    div.dropdown-item.checkbox {
      flex-direction: row;
      align-items: center;
    }
    ha-button-menu mwc-button {
      margin-left: 16px;
    }
  `,s([he()],Ki.prototype,"hass",void 0),s([he()],Ki.prototype,"columns",void 0),s([he()],Ki.prototype,"data",void 0),s([me()],Ki.prototype,"filterConfig",void 0),s([me()],Ki.prototype,"filterSelection",void 0),s([he({type:Boolean})],Ki.prototype,"selectable",void 0),s([ue("mwc-menu",!0)],Ki.prototype,"_menu",void 0),Ki=s([de("alarmo-table")],Ki);let Yi=class extends oe{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?q`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${Ei}></ha-icon-button>
            <span slot="title">${this._params.title}</span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.description}
        </div>

        <mwc-button slot="primaryAction" @click=${this.cancelClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.cancel")}
        </mwc-button>
        <mwc-button slot="secondaryAction" style="float: left" @click=${this.confirmClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:q``}confirmClick(){this._params.confirm()}cancelClick(){this._params.cancel()}static get styles(){return h`
      ${bi}
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};s([he({attribute:!1})],Yi.prototype,"hass",void 0),s([me()],Yi.prototype,"_params",void 0),Yi=s([de("confirm-delete-dialog")],Yi);var Qi=Object.freeze({__proto__:null,get ConfirmDeleteDialog(){return Yi}});let Wi=class extends(Be(oe)){constructor(){super(...arguments),this.areas={},this.sensors={},this.automations={},this.name=""}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await He(this.hass),this.sensors=await Te(this.hass),this.automations=await je(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,e.area_id&&(this.area_id=e.area_id,this.name=this.areas[this.area_id].name),await this.updateComplete}async closeDialog(){this._params=void 0,this.area_id=void 0,this.name=""}render(){return this._params?q`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${Ei}></ha-icon-button>
            <span slot="title">
              ${this.area_id?Wa("panels.general.dialogs.edit_area.title",this.hass.language,"{area}",this.areas[this.area_id].name):Wa("panels.general.dialogs.create_area.title",this.hass.language)}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <ha-textfield
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @input=${e=>this.name=e.target.value}
            value="${this.name}"
          ></ha-textfield>
          ${this.area_id?q`
                <span class="note">
                  ${Wa("panels.general.dialogs.edit_area.name_warning",this.hass.language)}
                </span>
              `:""}
          ${this.area_id?"":q`
                <alarmo-select
                  .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
                  value=${this.selectedArea}
                  label="${Wa("panels.general.dialogs.create_area.fields.copy_from",this.hass.language)}"
                  clearable=${!0}
                  @value-changed=${e=>this.selectedArea=e.target.value}
                ></alarmo-select>
              `}
        </div>
        <mwc-button slot="primaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        ${this.area_id?q`
              <mwc-button
                slot="secondaryAction"
                @click=${this.deleteClick}
                class="warning"
                ?disabled=${1==Object.keys(this.areas).length}
              >
                ${this.hass.localize("ui.common.delete")}
              </mwc-button>
            `:""}
      </ha-dialog>
    `:q``}saveClick(e){const t=this.name.trim();if(!t.length)return;let a={name:t};this.area_id?a=Object.assign(Object.assign({},a),{area_id:this.area_id}):this.selectedArea&&(a=Object.assign(Object.assign({},a),{modes:Object.assign({},this.areas[this.selectedArea].modes)})),Pe(this.hass,a).catch(t=>gi(t,e)).then(()=>{this.closeDialog()})}async deleteClick(e){if(!this.area_id)return;const t=Object.values(this.sensors).filter(e=>e.area==this.area_id).length,a=Object.values(this.automations).filter(e=>{var t;return null===(t=e.triggers)||void 0===t?void 0:t.map(e=>e.area).includes(this.area_id)}).length;let i=!1;var s,n;i=!t&&!a||await new Promise(i=>{be(e.target,"show-dialog",{dialogTag:"confirm-delete-dialog",dialogImport:()=>Promise.resolve().then((function(){return Qi})),dialogParams:{title:Wa("panels.general.dialogs.remove_area.title",this.hass.language),description:Wa("panels.general.dialogs.remove_area.description",this.hass.language,"sensors",String(t),"automations",String(a)),cancel:()=>i(!1),confirm:()=>i(!0)}})}),i&&(s=this.hass,n=this.area_id,s.callApi("POST","alarmo/area",{area_id:n,remove:!0})).catch(t=>gi(t,e)).then(()=>{this.closeDialog()})}static get styles(){return h`
      ${bi}
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
      ha-textfield {
        display: block;
      }
      alarmo-select {
        margin-top: 10px;
      }
    `}};s([he({attribute:!1})],Wi.prototype,"hass",void 0),s([me()],Wi.prototype,"_params",void 0),s([he()],Wi.prototype,"areas",void 0),s([he()],Wi.prototype,"sensors",void 0),s([he()],Wi.prototype,"automations",void 0),s([he()],Wi.prototype,"name",void 0),s([he()],Wi.prototype,"area_id",void 0),s([he()],Wi.prototype,"selectedArea",void 0),Wi=s([de("create-area-dialog")],Wi);var Xi=Object.freeze({__proto__:null,get CreateAreaDialog(){return Wi}});let Zi=class extends(Be(oe)){constructor(){super(...arguments),this.areas={},this.sensors={},this.automations={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await He(this.hass),this.sensors=await Te(this.hass),this.automations=await je(this.hass))}render(){if(!this.hass)return q``;const e=Object.values(this.areas);e.sort(_i);const t={actions:{width:"48px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},remarks:{title:Wa("panels.general.cards.areas.table.remarks",this.hass.language),width:"60%",hide:this.narrow,text:!0}},a=Object.values(e).map(t=>{const a=Object.values(this.sensors).filter(e=>e.area==t.area_id).length,i=1==Object.values(e).length?Object.values(this.automations).filter(e=>{var a,i;return(null===(a=e.triggers)||void 0===a?void 0:a.map(e=>e.area).includes(t.area_id))||!(null===(i=e.triggers)||void 0===i?void 0:i.map(e=>e.area).length)}).length:Object.values(this.automations).filter(e=>{var a;return null===(a=e.triggers)||void 0===a?void 0:a.map(e=>e.area).includes(t.area_id)}).length,s=`<a href="${$i("sensors",{filter:{area:t.area_id}})}">${Wa("panels.general.cards.areas.table.summary_sensors",this.hass.language,"number",a)}</a>`,n=`<a href="${$i("actions",{filter:{area:t.area_id}})}">${Wa("panels.general.cards.areas.table.summary_automations",this.hass.language,"number",i)}</a>`;return{id:t.area_id,actions:q`
          <ha-icon-button @click=${e=>this.editClick(e,t.area_id)} .path=${"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"}></ha-icon-button>
        `,name:ri(t.name),remarks:Gi(Wa("panels.general.cards.areas.table.summary",this.hass.language,"summary_sensors",s,"summary_automations",n))}});return q`
      <ha-card header="${Wa("panels.general.cards.areas.title",this.hass.language)}">
        <div class="card-content">
          ${Wa("panels.general.cards.areas.description",this.hass.language)}
        </div>

        <alarmo-table .columns=${t} .data=${a}>
          ${Wa("panels.general.cards.areas.no_items",this.hass.language)}
        </alarmo-table>
        <div class="card-actions">
          <mwc-button @click=${this.addClick}>
            ${Wa("panels.general.cards.areas.actions.add",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}addClick(e){const t=e.target;be(t,"show-dialog",{dialogTag:"create-area-dialog",dialogImport:()=>Promise.resolve().then((function(){return Xi})),dialogParams:{}})}editClick(e,t){const a=e.target;be(a,"show-dialog",{dialogTag:"create-area-dialog",dialogImport:()=>Promise.resolve().then((function(){return Xi})),dialogParams:{area_id:t}})}};Zi.styles=bi,s([he()],Zi.prototype,"narrow",void 0),s([he()],Zi.prototype,"path",void 0),s([he()],Zi.prototype,"config",void 0),s([he()],Zi.prototype,"areas",void 0),s([he()],Zi.prototype,"sensors",void 0),s([he()],Zi.prototype,"automations",void 0),Zi=s([de("area-config-card")],Zi);let Ji=class extends oe{constructor(){super(...arguments),this.name=""}async showDialog(e){this._params=e;const t=await Oe(this.hass);this.name=t.master.name||"",await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?q`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${Ei}></ha-icon-button>
            <span slot="title">${Wa("panels.general.dialogs.edit_master.title",this.hass.language)}</span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <ha-textfield
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @input=${e=>this.name=e.target.value}
            value="${this.name}"
          ></ha-textfield>
          <span class="note">${Wa("panels.general.dialogs.edit_area.name_warning",this.hass.language)}</span>
        </div>
        <mwc-button slot="primaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        <mwc-button slot="secondaryAction" @click=${this.closeDialog}>
          ${this.hass.localize("ui.common.cancel")}
        </mwc-button>
      </ha-dialog>
    `:q``}saveClick(){const e=this.name.trim();e.length&&Me(this.hass,{master:{enabled:!0,name:e}}).catch().then(()=>{this.closeDialog()})}static get styles(){return h`
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
      ha-textfield {
        display: block;
      }
    `}};s([he({attribute:!1})],Ji.prototype,"hass",void 0),s([me()],Ji.prototype,"_params",void 0),s([he()],Ji.prototype,"name",void 0),Ji=s([de("edit-master-dialog")],Ji);var es=Object.freeze({__proto__:null,get EditMasterDialog(){return Ji}});let ts=class extends(Be(oe)){constructor(){super(...arguments),this.areas={},this.automations={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.config=await Oe(this.hass),this.areas=await He(this.hass),this.automations=await je(this.hass),this.data=ci(this.config,["trigger_time","disarm_after_trigger","mqtt","master"]))}firstUpdated(){(async()=>{await Ee()})()}render(){var e,t,a,i,s,n,r,o;return this.hass&&this.config&&this.data?"mqtt_configuration"==this.path.subpage?q`
        <!-- <mqtt-config-card .hass=${this.hass} .narrow=${this.narrow}></mqtt-config-card> -->
      `:this.path.params.edit_area?q`
        <area-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          item=${this.path.params.edit_area}
        ></area-editor-card>
      `:q`
        <ha-card header="${Wa("panels.general.title",this.hass.language)}">
          <div class="card-content">
            ${Wa("panels.general.cards.general.description",this.hass.language)}
          </div>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${Wa("panels.general.cards.general.fields.disarm_after_trigger.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.general.cards.general.fields.disarm_after_trigger.description",this.hass.language)}
            </span>
            <ha-switch
              ?checked=${this.data.disarm_after_trigger}
              @change=${e=>{this.saveData({disarm_after_trigger:e.target.checked})}}
            ></ha-switch>
          </settings-row>

          <!-- <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${Wa("panels.general.cards.general.fields.enable_mqtt.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.general.cards.general.fields.enable_mqtt.description",this.hass.language)}
            </span>
            <ha-switch
              ?checked=${null===(t=null===(e=this.data)||void 0===e?void 0:e.mqtt)||void 0===t?void 0:t.enabled}
              @change=${e=>{this.saveData({mqtt:{...this.data.mqtt,enabled:e.target.checked}})}}
            ></ha-switch>
          </settings-row> -->

          ${null===(i=null===(a=this.data)||void 0===a?void 0:a.mqtt)||void 0===i||i.enabled,""}
          ${Object.keys(this.areas).length>=2?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${Wa("panels.general.cards.general.fields.enable_master.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.general.cards.general.fields.enable_master.description",this.hass.language)}
                  </span>
                  <ha-switch
                    ?checked=${(null===(n=null===(s=this.data)||void 0===s?void 0:s.master)||void 0===n?void 0:n.enabled)&&Object.keys(this.areas).length>=2}
                    ?disabled=${Object.keys(this.areas).length<2}
                    @change=${this.toggleEnableMaster}
                  ></ha-switch>
                </settings-row>
              `:""}
          ${(null===(o=null===(r=this.data)||void 0===r?void 0:r.master)||void 0===o?void 0:o.enabled)&&Object.keys(this.areas).length>=2?q`
                <div style="padding: 0px 0px 16px 16px">
                  <mwc-button outlined @click=${this.setupMasterClick}>
                    ${Wa("panels.general.cards.general.actions.setup_master",this.hass.language)}
                  </mwc-button>
                </div>
              `:""}
        </ha-card>

        <alarm-mode-card .hass=${this.hass} .narrow=${this.narrow}></alarm-mode-card>

        <area-config-card .hass=${this.hass} .narrow=${this.narrow}></area-config-card>
      `:q``}setupMasterClick(e){const t=e.target;be(t,"show-dialog",{dialogTag:"edit-master-dialog",dialogImport:()=>Promise.resolve().then((function(){return es})),dialogParams:{}})}async toggleEnableMaster(e){const t=e.target;let a=t.checked;if(!a){const i=Object.values(this.automations).filter(e=>e.triggers.some(e=>!e.area));if(i.length){await new Promise(e=>{be(t,"show-dialog",{dialogTag:"confirm-delete-dialog",dialogImport:()=>Promise.resolve().then((function(){return Qi})),dialogParams:{title:Wa("panels.general.dialogs.disable_master.title",this.hass.language),description:Wa("panels.general.dialogs.disable_master.description",this.hass.language,"automations",String(i.length)),cancel:()=>e(!1),confirm:()=>e(!0)}})})?!a&&i.length&&i.forEach(t=>{ze(this.hass,t.automation_id).catch(t=>gi(t,e))}):(a=!0,t.checked=!0)}}this.saveData({master:Object.assign(Object.assign({},this.data.master),{enabled:a})})}saveData(e){this.hass&&this.data&&(this.data=Object.assign(Object.assign({},this.data),e),Me(this.hass,this.data).catch(e=>gi(e,this.shadowRoot.querySelector("ha-card"))).then())}};ts.styles=bi,s([he()],ts.prototype,"narrow",void 0),s([he()],ts.prototype,"path",void 0),s([he()],ts.prototype,"data",void 0),s([he()],ts.prototype,"config",void 0),s([he()],ts.prototype,"areas",void 0),s([he()],ts.prototype,"automations",void 0),ts=s([de("alarm-view-general")],ts);const as=(e,t)=>{if("binary_sensor"==function(e){const t="string"==typeof e?e:e.entity_id;return String(t.split(".").shift())}(e.entity_id)){if(t)return!0;const a=e.attributes.device_class;return!!a&&!!["carbon_monoxide","door","garage_door","gas","heat","lock","moisture","motion","moving","occupancy","opening","presence","safety","smoke","sound","vibration","window"].includes(a)}return!1},is=e=>{switch(e.attributes.device_class){case"door":case"garage_door":case"lock":return ei.Door;case"window":return ei.Window;case"carbon_monoxide":case"gas":case"heat":case"moisture":case"smoke":case"safety":return ei.Environmental;case"motion":case"moving":case"occupancy":case"presence":return ei.Motion;case"sound":case"opening":case"vibration":return ei.Tamper;default:return}},ss=e=>{const t=t=>t.filter(t=>e.includes(t));return{[ei.Door]:{modes:t([ii.ArmedAway,ii.ArmedHome,ii.ArmedNight,ii.ArmedVacation]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!0,use_exit_delay:!1},[ei.Window]:{modes:t([ii.ArmedAway,ii.ArmedHome,ii.ArmedNight,ii.ArmedVacation]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1},[ei.Motion]:{modes:t([ii.ArmedAway,ii.ArmedVacation]),always_on:!1,allow_open:!0,arm_on_close:!1,use_entry_delay:!0,use_exit_delay:!0},[ei.Tamper]:{modes:t([ii.ArmedAway,ii.ArmedHome,ii.ArmedNight,ii.ArmedVacation,ii.ArmedCustom]),always_on:!1,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1},[ei.Environmental]:{modes:t([ii.ArmedAway,ii.ArmedHome,ii.ArmedNight,ii.ArmedVacation,ii.ArmedCustom]),always_on:!0,allow_open:!1,arm_on_close:!1,use_entry_delay:!1,use_exit_delay:!1}}};let ns=class extends oe{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?q`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" .path=${Ei}></ha-icon-button>
            <span slot="title">
              ${this.hass.localize("state_badge.default.error")}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.error||""}
        </div>

        <mwc-button slot="primaryAction" style="float: left" @click=${this.closeDialog} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:q``}static get styles(){return h`
      div.wrapper {
        color: var(--primary-text-color);
      }
      ha-header-bar {
        --mdc-theme-primary: var(--mdc-theme-surface);
      }
    `}};s([he({attribute:!1})],ns.prototype,"hass",void 0),s([me()],ns.prototype,"_params",void 0),ns=s([de("error-dialog")],ns);var rs=Object.freeze({__proto__:null,get ErrorDialog(){return ns}});let os=class extends(Be(oe)){constructor(){super(...arguments),this.sensorGroups={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.sensorGroups=await Se(this.hass),this.sensors=await Te(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,e.group_id&&Object.keys(this.sensorGroups).includes(e.group_id)?this.data=Object.assign({},this.sensorGroups[e.group_id]):this.data={name:"",entities:[],timeout:600},await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?q`
      <ha-dialog open @closed=${this.closeDialog} @close-dialog=${this.closeDialog} .heading=${this.renderHeader()}>
        <div class="wrapper">
          <settings-row dialog>
            <span slot="heading">
              ${Wa("panels.sensors.dialogs.create_group.fields.name.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.sensors.dialogs.create_group.fields.name.description",this.hass.language)}
            </span>
            <ha-textfield
              label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
              @input=${e=>this.data={...this.data,name:String(e.target.value).trim()}}
              value="${this.data.name}"
            ></ha-textfield>
          </settings-row>

          <settings-row large dialog>
            <span slot="heading">
              ${Wa("panels.sensors.dialogs.create_group.fields.sensors.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.sensors.dialogs.create_group.fields.sensors.description",this.hass.language)}
            </span>
            <div>
              ${this.renderSensorOptions()}
            </div>
          </settings-row>

          <settings-row dialog>
            <span slot="heading">
              ${Wa("panels.sensors.dialogs.create_group.fields.timeout.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.sensors.dialogs.create_group.fields.timeout.description",this.hass.language)}
            </span>
            <time-slider
              .hass=${this.hass}
              unit="min"
              max="1200"
              .value=${this.data.timeout}
              @change=${e=>this.data={...this.data,timeout:Number(e.target.value)}}
            ></time-slider>
          </settings-row>
        </div>
        <mwc-button slot="secondaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        ${this.data.group_id?q`
              <mwc-button slot="secondaryAction" @click=${this.deleteClick} class="warning">
                ${this.hass.localize("ui.common.delete")}
              </mwc-button>
            `:""}
      </ha-dialog>
    `:q``}renderHeader(){return q`
      <span class="header_title">
        ${this.data.group_id?Wa("panels.sensors.dialogs.edit_group.title",this.hass.language,"{name}",this.sensorGroups[this.data.group_id].name):Wa("panels.sensors.dialogs.create_group.title",this.hass.language)}
      </span>
      <ha-icon-button
        .label=${this.hass.localize("ui.dialogs.generic.close")}
        .path=${Ei}
        dialogAction="close"
        class="header_button"
      ></ha-icon-button>
    `}renderSensorOptions(){const e=Object.keys(this.sensors).filter(e=>!mi(this.sensors[e].group)||this.sensors[e].group===this.data.group_id).map(e=>{const t=this.hass.states[e],a=Object.entries(ei).find(([,t])=>t==this.sensors[e].type)[0];return{value:e,name:ri(oi(t)),icon:ti[a]}});return e.sort(_i),e.length?q`
      <alarmo-chip-set
        .items=${e}
        .value=${this.data.entities}
        ?selectable=${!0}
        @value-changed=${e=>this.data={...this.data,entities:e.detail}}
      ></alarmo-chip-set>
    `:Wa("panels.sensors.cards.sensors.no_items",this.hass.language)}saveClick(e){var t,a;this.data.name.length&&(this.data.group_id&&this.data.name==this.sensorGroups[this.data.group_id].name||!Object.values(this.sensorGroups).find(e=>e.name.toLowerCase()==this.data.name.toLowerCase()))?this.data.entities.length<2?pi(e,Wa("panels.sensors.dialogs.create_group.errors.insufficient_sensors",this.hass.language)):(t=this.hass,a=this.data,t.callApi("POST","alarmo/sensor_groups",a)).catch(t=>gi(t,e)).then(()=>{this.closeDialog()}):pi(e,Wa("panels.sensors.dialogs.create_group.errors.invalid_name",this.hass.language))}deleteClick(e){var t,a;this.data.group_id&&(t=this.hass,a=this.data.group_id,t.callApi("POST","alarmo/sensor_groups",{group_id:a,remove:!0})).catch(t=>gi(t,e)).then(()=>{this.closeDialog()})}static get styles(){return h`
      ${yi}
      div.wrapper {
        color: var(--primary-text-color);
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
    `}};s([he({attribute:!1})],os.prototype,"hass",void 0),s([me()],os.prototype,"_params",void 0),s([he()],os.prototype,"sensorGroups",void 0),s([he()],os.prototype,"sensors",void 0),s([he()],os.prototype,"data",void 0),os=s([de("create-sensor-group-dialog")],os);var ls=Object.freeze({__proto__:null,get CreateSensorGroupDialog(){return os}});let ds=class extends(Be(oe)){constructor(){super(...arguments),this.sensorGroups={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.sensorGroups=await Se(this.hass),this.sensors=await Te(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?q`
      <ha-dialog open .heading=${this.renderHeader()} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div class="wrapper">
          <div class="description">
            ${Wa("panels.sensors.dialogs.manage_groups.description",this.hass.language)}
          </div>
          <div class="container">
            ${Object.keys(this.sensorGroups).length?Object.values(this.sensorGroups).map(e=>this.renderGroup(e)):Wa("panels.sensors.dialogs.manage_groups.no_items",this.hass.language)}
          </div>
        </div>
        <mwc-button slot="secondaryAction" @click=${this.createGroupClick}>
          <ha-icon icon="hass:plus"></ha-icon>
          ${Wa("panels.sensors.dialogs.manage_groups.actions.new_group",this.hass.language)}
        </mwc-button>
      </ha-dialog>
    `:q``}renderHeader(){return q`
      <span class="header_title">${Wa("panels.sensors.dialogs.manage_groups.title",this.hass.language)}</span>
      <ha-icon-button
        .label=${this.hass.localize("ui.dialogs.generic.close")}
        .path=${Ei}
        dialogAction="close"
        class="header_button"
      ></ha-icon-button>
    `}renderGroup(e){return q`
    <ha-card
      outlined
      @click=${t=>this.editGroupClick(t,e.group_id)}
    >
      <ha-icon icon="hass:folder-outline"></ha-icon>
      <div>
        <span class="name">${e.name}</span>
        <span class="description">${Wa("panels.general.cards.areas.table.summary_sensors",this.hass.language,"{number}",String(e.entities.length))}
      </div>
      <ha-icon-button .path=${Ai}>
      </ha-icon-button>
    </ha-card>
    `}createGroupClick(e){const t=e.target;be(t,"show-dialog",{dialogTag:"create-sensor-group-dialog",dialogImport:()=>Promise.resolve().then((function(){return ls})),dialogParams:{}})}editGroupClick(e,t){const a=e.target;be(a,"show-dialog",{dialogTag:"create-sensor-group-dialog",dialogImport:()=>Promise.resolve().then((function(){return ls})),dialogParams:{group_id:t}})}static get styles(){return h`
      ${yi}

      div.wrapper {
        color: var(--primary-text-color);
      }
      div.container {
        display: flex;
        flex-wrap: wrap;
      }
      ha-card {
        width: 100%;
        text-align: center;
        margin: 4px;
        box-sizing: border-box;
        padding: 8px;
        color: var(--primary-text-color);
        font-size: 16px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
      }
      ha-card:hover {
        background: rgba(var(--rgb-secondary-text-color), 0.1);
      }
      ha-card ha-icon {
        --mdc-icon-size: 24px;
        display: flex;
        flex: 0 0 40px;
        margin: 0px 10px;
        align-items: center;
        color: var(--state-icon-color);
      }
      ha-card ha-icon-button {
        --mdc-icon-size: 24px;
        display: flex;
        flex: 0 0 40px;
        margin: 0px 10px;
        align-items: center;
      }
      ha-card div {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
      }
      ha-card span {
        display: flex;
        flex: 0 0 100%;
      }
      ha-card span.description {
        color: var(--secondary-text-color);
      }
      mwc-button ha-icon {
        padding-right: 11px;
      }
    `}};s([he({attribute:!1})],ds.prototype,"hass",void 0),s([me()],ds.prototype,"_params",void 0),s([he()],ds.prototype,"sensorGroups",void 0),s([he()],ds.prototype,"sensors",void 0),ds=s([de("manage-sensor-groups-dialog")],ds);var cs=Object.freeze({__proto__:null,get ManageSensorGroupsDialog(){return ds}});let hs=class extends(Be(oe)){constructor(){super(...arguments),this.showBypassModes=!1}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){var e;if(!this.hass)return;const t=await He(this.hass);this.areas=t;const a=await Se(this.hass);this.sensorGroups=a;const i=await Te(this.hass);this.data=Object.keys(i).includes(this.item)?i[this.item]:void 0,this.data&&!(null===(e=this.data)||void 0===e?void 0:e.area)&&1==Object.keys(t).length&&(this.data=Object.assign(Object.assign({},this.data),{area:Object.keys(this.areas)[0]}))}render(){if(!this.data)return q``;this.hass.states[this.data.entity_id];return q`
      <ha-card>
        <div class="card-header">
          <div class="name">${Wa("panels.sensors.cards.editor.title",this.hass.language)}</div>
          <ha-icon-button .path=${Ei} @click=${this.cancelClick}></ha-icon-button>
        </div>
        <div class="card-content">
          ${Wa("panels.sensors.cards.editor.description",this.hass.language,"{entity}",oi(this.hass.states[this.item]))}
        </div>

        ${Object.keys(this.areas).length>1?q`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${Wa("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${Wa("panels.sensors.cards.editor.fields.area.description",this.hass.language)}
                </span>

                <alarmo-select
                  .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
                  value=${this.data.area}
                  label=${Wa("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}
                  @value-changed=${e=>this.data={...this.data,area:e.target.value}}
                  ?invalid=${!this.data.area}
                ></alarmo-select>
              </settings-row>
            `:""}

        <settings-row .narrow=${this.narrow} .large=${!0}>
          <span slot="heading">
            ${Wa("panels.sensors.cards.editor.fields.device_type.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.sensors.cards.editor.fields.device_type.description",this.hass.language)}
          </span>

          <alarmo-select
            .hass=${this.hass}
            .items=${e=this.hass,Object.entries(ei).filter(([,e])=>e!=ei.Other).map(([t,a])=>Object({value:a,name:Wa(`panels.sensors.cards.editor.fields.device_type.choose.${a}.name`,e.language),description:Wa(`panels.sensors.cards.editor.fields.device_type.choose.${a}.description`,e.language),icon:ti[t]}))}
            label=${Wa("panels.sensors.cards.editor.fields.device_type.heading",this.hass.language)}
            clearable=${!0}
            icons=${!0}
            value=${this.data.type}
            @value-changed=${e=>this.setType(e.target.value||ei.Other)}
          ></alarmo-select>
        </settings-row>

        <settings-row .narrow=${this.narrow} .large=${this.modesByArea(this.data.area).length>3}>
          <span slot="heading">
            ${Wa("panels.sensors.cards.editor.fields.modes.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.sensors.cards.editor.fields.modes.description",this.hass.language)}
          </span>

          <div>
            ${this.modesByArea(this.data.area).map(e=>q`
                <mwc-button
                  class="${this.data.modes.includes(e)||this.data.always_on?"active":"disabled"}"
                  @click=${()=>{this.setMode(e)}}
                  ?disabled=${this.data.always_on}
                >
                  <ha-icon icon="${Xa[Object.entries(ii).find(([,t])=>t==e)[0]]}"></ha-icon>
                  ${Wa("common.modes_short."+e,this.hass.language)}
                </mwc-button>
              `)}
          </div>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${Wa("panels.sensors.cards.editor.fields.group.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.sensors.cards.editor.fields.group.description",this.hass.language)}
          </span>

          <div>
            ${Object.keys(this.sensorGroups).length?q`
                  <alarmo-select
                    .clearable=${!0}
                    .items=${this.getSensorGroups()}
                    value=${this.data.group}
                    label="${Wa("panels.sensors.cards.editor.fields.group.heading",this.hass.language)}"
                    @value-changed=${e=>{this.data={...this.data,group:e.detail.value}}}
                  ></alarmo-select>
                `:""}
            <mwc-button @click=${this.manageGroupsClick}>
              ${Wa("panels.sensors.cards.editor.actions.setup_groups",this.hass.language)}
            </mwc-button>
          </div>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${Wa("panels.sensors.cards.editor.actions.toggle_advanced",this.hass.language)}
        >
          ${!this.data.type||[ei.Environmental,ei.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${Wa("panels.sensors.cards.editor.fields.always_on.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.sensors.cards.editor.fields.always_on.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.always_on}
                    @change=${e=>this._SetData({always_on:e.target.checked})}
                  ></ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[ei.Window,ei.Door,ei.Motion,ei.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${Wa("panels.sensors.cards.editor.fields.use_exit_delay.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.sensors.cards.editor.fields.use_exit_delay.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.use_exit_delay}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this._SetData({use_exit_delay:e.target.checked})}
                  ></ha-switch>
                </settings-row>

                ${this.data.type&&![ei.Motion,ei.Other].includes(this.data.type)||!this.data.use_exit_delay?"":q`
                      <settings-row .narrow=${this.narrow} nested>
                        <span slot="heading">
                          ${Wa("panels.sensors.cards.editor.fields.allow_open.heading",this.hass.language)}
                        </span>
                        <span slot="description">
                          ${Wa("panels.sensors.cards.editor.fields.allow_open.description",this.hass.language)}
                        </span>

                        <ha-switch
                          ?checked=${this.data.allow_open}
                          ?disabled=${this.data.always_on||this.data.arm_on_close}
                          @change=${e=>this._SetData({allow_open:e.target.checked})}
                        ></ha-switch>
                      </settings-row>
                    `}
              `:""}
          ${!this.data.type||[ei.Window,ei.Door,ei.Motion,ei.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${Wa("panels.sensors.cards.editor.fields.use_entry_delay.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.sensors.cards.editor.fields.use_entry_delay.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.use_entry_delay}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this._SetData({use_entry_delay:e.target.checked})}
                  ></ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[ei.Door,ei.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${Wa("panels.sensors.cards.editor.fields.arm_on_close.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.sensors.cards.editor.fields.arm_on_close.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.arm_on_close}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this._SetData({arm_on_close:e.target.checked})}
                  ></ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[ei.Window,ei.Door,ei.Other].includes(this.data.type)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${Wa("panels.sensors.cards.editor.fields.auto_bypass.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.sensors.cards.editor.fields.auto_bypass.description",this.hass.language)}
                  </span>

                  <ha-switch
                    ?checked=${this.data.auto_bypass}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this._SetData({auto_bypass:e.target.checked})}
                  ></ha-switch>
                </settings-row>

                ${this.data.auto_bypass?q`
                      <settings-row .narrow=${this.narrow} nested>
                        <span slot="heading">
                          ${Wa("panels.sensors.cards.editor.fields.auto_bypass.modes",this.hass.language)}
                        </span>
                        <div>
                          ${this.modesByArea(this.data.area).map(e=>q`
                              <mwc-button
                                class="${this.data.auto_bypass_modes.includes(e)&&this.data.modes.includes(e)?"active":""}"
                                ?disabled=${!this.data.modes.includes(e)}
                                @click=${()=>{this.setBypassMode(e)}}
                              >
                                <ha-icon
                                  icon="${Xa[Object.entries(ii).find(([,t])=>t==e)[0]]}"
                                ></ha-icon>
                                ${Wa("common.modes_short."+e,this.hass.language)}
                              </mwc-button>
                            `)}
                        </div>
                      </settings-row>
                    `:""}
              `:""}

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${Wa("panels.sensors.cards.editor.fields.trigger_unavailable.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.sensors.cards.editor.fields.trigger_unavailable.description",this.hass.language)}
            </span>

            <ha-switch
              ?checked=${this.data.trigger_unavailable}
              @change=${e=>this._SetData({trigger_unavailable:e.target.checked})}
            ></ha-switch>
          </settings-row>
        </collapsible-section>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          <mwc-button class="warning" @click=${this.deleteClick}>
            ${Wa("panels.sensors.cards.editor.actions.remove",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `;var e}modesByArea(e){const t=Object.keys(this.areas).reduce((e,t)=>Object.assign(e,{[t]:Object.entries(this.areas[t].modes).filter(([,e])=>e.enabled).map(([e])=>e)}),{});return e?t[e]:Object.values(t).reduce((e,t)=>e.filter(e=>t.includes(e)))}_SetData(e){if(this.data)for(const[t,a]of Object.entries(e))switch(t){case"always_on":this.data=Object.assign(Object.assign({},this.data),{always_on:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{arm_on_close:!1,use_exit_delay:!1,use_entry_delay:!1,allow_open:!1,auto_bypass:!1}));break;case"use_entry_delay":this.data=Object.assign(Object.assign({},this.data),{use_entry_delay:1==a});break;case"use_exit_delay":this.data=Object.assign(Object.assign({},this.data),{use_exit_delay:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{allow_open:!1}));break;case"arm_on_close":this.data=Object.assign(Object.assign({},this.data),{arm_on_close:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{always_on:!1,allow_open:!1}));break;case"allow_open":this.data=Object.assign(Object.assign({},this.data),{allow_open:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{arm_on_close:!1,always_on:!1,use_exit_delay:!0}));break;case"auto_bypass":this.data=Object.assign(Object.assign({},this.data),{auto_bypass:1==a}),a&&(this.data=Object.assign(Object.assign({},this.data),{always_on:!1}));break;case"trigger_unavailable":this.data=Object.assign(Object.assign({},this.data),{trigger_unavailable:1==a})}}setMode(e){this.data&&(this.data=Object.assign(Object.assign({},this.data),{modes:this.data.modes.includes(e)?di(this.data.modes,e):li(this.data.modes.concat([e]))}))}setBypassMode(e){this.data&&(this.data=Object.assign(Object.assign({},this.data),{auto_bypass_modes:this.data.auto_bypass_modes.includes(e)?di(this.data.auto_bypass_modes,e):li(this.data.auto_bypass_modes.concat([e]))}))}setType(e){if(!this.data)return;const t=e!=ei.Other?ss(this.modesByArea(this.data.area))[e]:{};this.data=Object.assign(Object.assign(Object.assign({},this.data),{type:e}),t)}deleteClick(e){var t,a;(t=this.hass,a=this.item,t.callApi("POST","alarmo/sensors",{entity_id:a,remove:!0})).catch(t=>gi(t,e)).then(()=>{this.cancelClick()})}saveClick(e){if(!this.data)return;const t=[];this.data=Object.assign(Object.assign({},this.data),{auto_bypass_modes:this.data.auto_bypass_modes.filter(e=>this.data.modes.includes(e))}),this.data.area||t.push(Wa("panels.sensors.cards.editor.errors.no_area",this.hass.language)),this.data.modes.length||this.data.always_on||t.push(Wa("panels.sensors.cards.editor.errors.no_modes",this.hass.language)),this.data.auto_bypass&&!this.data.auto_bypass_modes.length&&t.push(Wa("panels.sensors.cards.editor.errors.no_auto_bypass_modes",this.hass.language)),t.length?pi(e,q`
          ${Wa("panels.sensors.cards.editor.errors.description",this.hass.language)}
          <ul>
            ${t.map(e=>q`
                  <li>${e}</li>
                `)}
          </ul>
        `):Ne(this.hass,Object.assign({},this.data)).catch(t=>gi(t,e)).then(()=>{this.cancelClick()})}cancelClick(){$e(0,$i("sensors"),!0)}manageGroupsClick(e){const t=e.target;be(t,"show-dialog",{dialogTag:"manage-sensor-groups-dialog",dialogImport:()=>Promise.resolve().then((function(){return cs})),dialogParams:{}})}getSensorGroups(){return Object.keys(this.sensorGroups).map(e=>Object({value:e,name:this.sensorGroups[e].name}))}};hs.styles=bi,s([he()],hs.prototype,"hass",void 0),s([he()],hs.prototype,"narrow",void 0),s([he()],hs.prototype,"item",void 0),s([he()],hs.prototype,"data",void 0),s([he()],hs.prototype,"showBypassModes",void 0),hs=s([de("sensor-editor-card")],hs);const ms=e=>Object.keys(e.modes).filter(t=>e.modes[t].enabled),us=e=>{let t=[];return Object.values(e).forEach(e=>{t=[...t,...ms(e)]}),t=li(t),t.sort((e,t)=>{const a=Object.values(ii);return a.findIndex(t=>t==e)-a.findIndex(e=>e==t)}),t},ps="no_area";let gs=class extends(Be(oe)){hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await He(this.hass),this.sensors=await Te(this.hass))}async firstUpdated(){this.path&&2==this.path.length&&"filter"==this.path[0]&&(this.selectedArea=this.path[1])}render(){return this.hass&&this.areas&&this.sensors?q`
      <ha-card header="${Wa("panels.sensors.title",this.hass.language)}">
        <div class="card-content">
          ${Wa("panels.sensors.cards.sensors.description",this.hass.language)}
        </div>

        <alarmo-table
          .hass=${this.hass}
          ?selectable=${!0}
          .columns=${this.tableColumns()}
          .data=${this.getTableData()}
          .filters=${this.getTableFilterOptions()}
          @row-click=${e=>{$e(0,$i("sensors",{params:{edit:e.detail.id}}),!0)}}
        >
          ${Wa("panels.sensors.cards.sensors.table.no_items",this.hass.language)}
        </alarmo-table>
      </ha-card>
    `:q``}tableColumns(){const e=()=>q`
      <paper-tooltip animation-delay="0">
        ${Wa("panels.sensors.cards.sensors.table.no_area_warning",this.hass.language)}
      </paper-tooltip>
    `;return{icon:{width:"40px",renderer:t=>{const a=this.hass.states[t.entity_id],i=Object.keys(ei).find(e=>ei[e]==t.type),s=a?ti[i]:"hass:help-circle-outline";return t.area==ps?q`
                ${e()}
                <ha-icon icon="mdi:alert" style="color: var(--error-color)"></ha-icon>
              `:q`
                <paper-tooltip animation-delay="0">
                  ${a?Wa(`panels.sensors.cards.editor.fields.device_type.choose.${t.type}.name`,this.hass.language):this.hass.localize("state_badge.default.entity_not_found")}
                </paper-tooltip>
                <ha-icon icon="${s}" class="${t.enabled?"":"disabled"}"></ha-icon>
              `}},name:{title:this.hass.localize("ui.components.entity.entity-picker.entity"),width:"60%",grow:!0,text:!0,renderer:t=>q`
          ${t.area==ps?e():""}
          <span class="${t.enabled?"":"disabled"}">${t.name}</span>
          <span class="secondary ${t.enabled?"":"disabled"}">${t.entity_id}</span>
        `},modes:{title:Wa("panels.sensors.cards.sensors.table.arm_modes",this.hass.language),width:"25%",hide:this.narrow,text:!0,renderer:t=>q`
          ${t.area==ps?e():""}
          <span class="${t.enabled?"":"disabled"}">
            ${t.always_on?Wa("panels.sensors.cards.sensors.table.always_on",this.hass.language):t.modes.length?t.modes.map(e=>Wa("common.modes_short."+e,this.hass.language)).join(", "):this.hass.localize("state_attributes.climate.preset_mode.none")}
          </span>
        `},enabled:{title:Wa("common.enabled",this.hass.language),width:"68px",align:"center",renderer:e=>q`
          <ha-switch
            @click=${e=>{e.stopPropagation()}}
            ?checked=${e.enabled}
            @change=${t=>this.toggleEnabled(t,e.entity_id)}
          ></ha-switch>
        `}}}getTableData(){let e=Object.keys(this.sensors).map(e=>{const t=this.hass.states[e],a=this.sensors[e],i=a.area?ms(this.areas[a.area]):us(this.areas);return Object.assign(Object.assign({},a),{id:e,name:oi(t),modes:a.always_on?i:a.modes.filter(e=>i.includes(e)),warning:!a.area,area:a.area||ps})});return e.sort(_i),e}toggleEnabled(e,t){const a=e.target.checked;Ne(this.hass,{entity_id:t,enabled:a}).catch(t=>gi(t,e)).then()}removeCustomName(e){let t={entity_id:e,name:""};Ne(this.hass,t)}getTableFilterOptions(){let e=Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name,badge:t=>t.filter(t=>t.area==e.area_id).length})).sort(_i);Object.values(this.sensors).filter(e=>!e.area).length&&(e=[{value:ps,name:this.hass.localize("state_attributes.climate.preset_mode.none"),badge:e=>e.filter(e=>e.area==ps).length},...e]);const t=us(this.areas).map(e=>Object({value:e,name:Wa("common.modes_short."+e,this.hass.language),badge:t=>t.filter(t=>t.modes.includes(e)).length}));return{area:{name:Wa("components.table.filter.item",this.hass.language,"name",Wa("panels.actions.cards.new_action.fields.area.heading",this.hass.language)),items:e,value:this.selectedArea?[this.selectedArea]:[]},modes:{name:Wa("components.table.filter.item",this.hass.language,"name",Wa("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)),items:t,value:this.selectedMode?[this.selectedMode]:[]}}}};gs.styles=bi,s([he()],gs.prototype,"hass",void 0),s([he()],gs.prototype,"narrow",void 0),s([he()],gs.prototype,"areas",void 0),s([he()],gs.prototype,"sensors",void 0),s([he()],gs.prototype,"selectedArea",void 0),s([he()],gs.prototype,"selectedMode",void 0),s([he()],gs.prototype,"path",void 0),gs=s([de("sensors-overview-card")],gs);let vs=class extends(Be(oe)){constructor(){super(...arguments),this.addSelection=[],this.areas={},this.sensors={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){this.hass&&(this.areas=await He(this.hass))}async firstUpdated(){this.areas=await He(this.hass),this.sensors=await Te(this.hass)}render(){const e={checkbox:{width:"48px",renderer:e=>q`
          <ha-checkbox
            @change=${t=>this.toggleSelect(t,e.id)}
            ?checked=${this.addSelection.includes(e.id)}
          ></ha-checkbox>
        `},icon:{width:"40px",renderer:e=>q`
          <state-badge .hass=${this.hass} .stateObj=${this.hass.states[e.id]}></state-badge>
        `},name:{title:this.hass.localize("ui.components.entity.entity-picker.entity"),width:"40%",grow:!0,text:!0,renderer:e=>q`
          ${ri(e.name)}
          <span class="secondary">${e.id}</span>
        `},type:{title:Wa("panels.sensors.cards.add_sensors.table.type",this.hass.language),width:"40%",hide:this.narrow,text:!0,renderer:e=>e.type?Wa(`panels.sensors.cards.editor.fields.device_type.choose.${e.type}.name`,this.hass.language):this.hass.localize("state.default.unknown")}},t=((e,t,a=!1)=>{const i=Object.values(e.states).filter(e=>as(e,a)).filter(e=>!t.includes(e.entity_id)).map(e=>Object({id:e.entity_id,name:oi(e),icon:ni(e)}));return i.sort(_i),i})(this.hass,Object.keys(this.sensors),!0).map(e=>Object.assign(Object.assign({},e),{type:is(this.hass.states[e.id]),isSupportedType:void 0!==is(this.hass.states[e.id])?"true":"false"}));return q`
      <ha-card header="${Wa("panels.sensors.cards.add_sensors.title",this.hass.language)}">
        <div class="card-content">
          ${Wa("panels.sensors.cards.add_sensors.description",this.hass.language)}
        </div>

        <alarmo-table
          .hass=${this.hass}
          .columns=${e}
          .data=${t}
          .filters=${this.getTableFilterOptions()}
        >
          ${Wa("panels.sensors.cards.add_sensors.no_items",this.hass.language)}
        </alarmo-table>

        <div class="card-actions">
          <mwc-button @click=${this.addSelected} ?disabled=${0==this.addSelection.length}>
            ${Wa("panels.sensors.cards.add_sensors.actions.add_to_alarm",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}toggleSelect(e,t){const a=e.target.checked;this.addSelection=a&&!this.addSelection.includes(t)?[...this.addSelection,t]:a?this.addSelection:this.addSelection.filter(e=>e!=t)}addSelected(e){if(!this.hass)return;const t=Object.values(this.areas).map(e=>Object.entries(e.modes).filter(([,e])=>e.enabled).map(([e])=>e)).reduce((e,t)=>e.filter(e=>t.includes(e)));this.addSelection.map(e=>function(e,t){if(!e)return null;const a=fe(e.entity_id);let i={entity_id:e.entity_id,modes:[],use_entry_delay:!0,use_exit_delay:!0,arm_on_close:!1,allow_open:!1,always_on:!1,auto_bypass:!1,auto_bypass_modes:[],trigger_unavailable:!1,type:ei.Other,enabled:!0};if("binary_sensor"==a){const a=is(e);a&&(i=Object.assign(Object.assign(Object.assign({},i),{type:a}),ss(t)[a]))}return i}(this.hass.states[e],t)).map(e=>1==Object.keys(this.areas).length?Object.assign(e,{area:Object.keys(this.areas)[0]}):e).filter(e=>e).forEach(t=>{Ne(this.hass,t).catch(t=>gi(t,e)).then()}),this.addSelection=[]}getTableFilterOptions(){return{isSupportedType:{name:Wa("panels.sensors.cards.add_sensors.actions.filter_supported",this.hass.language),items:[{value:"true",name:"true"}],value:["true"],binary:!0}}}};vs.styles=bi,s([he()],vs.prototype,"hass",void 0),s([he()],vs.prototype,"narrow",void 0),s([he()],vs.prototype,"addSelection",void 0),s([he()],vs.prototype,"areas",void 0),s([he()],vs.prototype,"sensors",void 0),vs=s([de("add-sensors-card")],vs);let fs=class extends oe{firstUpdated(){(async()=>{await Ee()})()}render(){var e,t;if(!this.hass)return q``;if(this.path.params.edit)return q`
        <sensor-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          .item=${this.path.params.edit}
        ></sensor-editor-card>
      `;{const a=null===(e=this.path.filter)||void 0===e?void 0:e.area,i=null===(t=this.path.filter)||void 0===t?void 0:t.mode;return q`
        <sensors-overview-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          .selectedArea=${a}
          .selectedMode=${i}
        ></sensors-overview-card>
        <add-sensors-card .hass=${this.hass} .narrow=${this.narrow}></add-sensors-card>
      `}}};s([he()],fs.prototype,"hass",void 0),s([he()],fs.prototype,"narrow",void 0),s([he()],fs.prototype,"path",void 0),fs=s([de("alarm-view-sensors")],fs);let _s=class extends oe{constructor(){super(...arguments),this.data={can_arm:!0,can_disarm:!0,is_override_code:!1},this.repeatCode="",this.areas={}}async firstUpdated(){if(this.users=await Ce(this.hass),this.areas=await He(this.hass),this.item){const e=this.users[this.item];this.data=hi(e,"code","code_format","code_length")}this.data=Object.assign(Object.assign({},this.data),{area_limit:(this.data.area_limit||[]).filter(e=>Object.keys(this.areas).includes(e))}),(this.data.area_limit||[]).length||(this.data=Object.assign(Object.assign({},this.data),{area_limit:Object.keys(this.areas)}))}render(){var e;return this.users?q`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${this.item?Wa("panels.codes.cards.edit_user.title",this.hass.language):Wa("panels.codes.cards.new_user.title",this.hass.language)}
          </div>
          <ha-icon-button .path=${Ei} @click=${this.cancelClick}></ha-icon-button>
        </div>
        <div class="card-content">
          ${this.item?Wa("panels.codes.cards.edit_user.description",this.hass.language,"{name}",this.users[this.item].name):Wa("panels.codes.cards.new_user.description",this.hass.language)}
        </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${Wa("panels.codes.cards.new_user.fields.name.heading",this.hass.language)}</span>
          <span slot="description">
            ${Wa("panels.codes.cards.new_user.fields.name.description",this.hass.language)}
          </span>

          <ha-textfield
            label="${Wa("panels.codes.cards.new_user.fields.name.heading",this.hass.language)}"
            placeholder=""
            value=${this.data.name}
            @input=${e=>this.data={...this.data,name:e.target.value}}
          ></ha-textfield>
        </settings-row>

        ${this.item?q`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${Wa("panels.codes.cards.edit_user.fields.old_code.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${Wa("panels.codes.cards.edit_user.fields.old_code.description",this.hass.language)}
                </span>

                <ha-textfield
                  label="${Wa("panels.codes.cards.edit_user.fields.old_code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.old_code||""}
                  @input=${e=>this.data={...this.data,old_code:String(e.target.value).trim()}}
                ></ha-textfield>
              </settings-row>
            `:""}
        ${this.item&&!(null===(e=this.data.old_code)||void 0===e?void 0:e.length)?"":q`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${Wa("panels.codes.cards.new_user.fields.code.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${Wa("panels.codes.cards.new_user.fields.code.description",this.hass.language)}
                </span>

                <ha-textfield
                  label="${Wa("panels.codes.cards.new_user.fields.code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.code}
                  @input=${e=>this.data={...this.data,code:String(e.target.value).trim()}}
                ></ha-textfield>
              </settings-row>

              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${Wa("panels.codes.cards.new_user.fields.confirm_code.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${Wa("panels.codes.cards.new_user.fields.confirm_code.description",this.hass.language)}
                </span>

                <ha-textfield
                  label="${Wa("panels.codes.cards.new_user.fields.confirm_code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.repeatCode||""}
                  @input=${e=>this.repeatCode=String(e.target.value).trim()}
                ></ha-textfield>
              </settings-row>
            `}

        <!-- <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${Wa("panels.codes.cards.new_user.fields.can_arm.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.codes.cards.new_user.fields.can_arm.description",this.hass.language)}
          </span>

          <ha-switch
            ?checked=${this.data.can_arm}
            @change=${e=>this.data={...this.data,can_arm:e.target.checked}}
          ></ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${Wa("panels.codes.cards.new_user.fields.can_disarm.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.codes.cards.new_user.fields.can_disarm.description",this.hass.language)}
          </span>

          <ha-switch
            ?checked=${this.data.can_disarm}
            @change=${e=>this.data={...this.data,can_disarm:e.target.checked}}
          ></ha-switch>
        </settings-row> -->

        ${this.getAreaOptions().length>=2?q`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading">
                  ${Wa("panels.codes.cards.new_user.fields.area_limit.heading",this.hass.language)}
                </span>
                <span slot="description">
                  ${Wa("panels.codes.cards.new_user.fields.area_limit.description",this.hass.language)}
                </span>

                <div class="checkbox-list">
                  ${this.getAreaOptions().map(e=>{var t;const a=(this.data.area_limit||[]).includes(e.value)||!(null===(t=this.data.area_limit)||void 0===t?void 0:t.length);return q`
                      <div>
                        <ha-checkbox
                          @change=${t=>this.toggleSelectArea(e.value,t.target.checked)}
                          ?disabled=${a&&(this.data.area_limit||[]).length<=1}
                          ?checked=${a}
                        ></ha-checkbox>
                        <span @click=${()=>this.toggleSelectArea(e.value,!a)}>
                          ${e.name}
                        </span>
                      </div>
                    `})}
                </div>
              </settings-row>
            `:""}

        <!-- <settings-row .narrow=${this.narrow}>
          <span slot="heading">
            ${Wa("panels.codes.cards.new_user.fields.is_override_code.heading",this.hass.language)}
          </span>
          <span slot="description">
            ${Wa("panels.codes.cards.new_user.fields.is_override_code.description",this.hass.language)}
          </span>

          <ha-switch
            ?checked=${this.data.is_override_code}
            @change=${e=>this.data={...this.data,is_override_code:e.target.checked}}
          ></ha-switch>
        </settings-row> -->

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          ${this.item?q`
                <mwc-button class="warning" @click=${this.deleteClick}>
                  ${this.hass.localize("ui.common.delete")}
                </mwc-button>
              `:""}
        </div>
      </ha-card>
    `:q``}getAreaOptions(){let e=Object.keys(this.areas||{}).map(e=>Object({value:e,name:this.areas[e].name}));return e.sort(_i),e}toggleSelectArea(e,t){if((this.data.area_limit||[]).length<=1&&!t)return;let a=this.data.area_limit||[];a=t?a.includes(e)?a:[...a,e]:a.includes(e)?a.filter(t=>t!=e):a,this.data=Object.assign(Object.assign({},this.data),{area_limit:a})}deleteClick(e){var t,a;this.item&&(t=this.hass,a=this.item,t.callApi("POST","alarmo/users",{user_id:a,remove:!0})).catch(t=>gi(t,e)).then(()=>{this.cancelClick()})}saveClick(e){var t,a,i;let s=Object.assign({},this.data);console.log("DATA",s),(null===(t=s.name)||void 0===t?void 0:t.length)?(null===(a=s.code)||void 0===a?void 0:a.length)&&!(s.code.length<4)||this.item&&!(null===(i=s.old_code)||void 0===i?void 0:i.length)?(s.code||"").length&&s.code!==this.repeatCode?(pi(e,Wa("panels.codes.cards.new_user.errors.code_mismatch",this.hass.language)),this.data=hi(this.data,"code"),this.repeatCode=""):(this.item&&((s.old_code||"").length<4&&hi(s,"old_code","code"),console.log("DATA TROCADO",s)),this.getAreaOptions().length&&!this.getAreaOptions().every(e=>(this.data.area_limit||[]).includes(e.value))||(s=Object.assign(Object.assign({},s),{area_limit:[]})),console.log("DATA SEMPRE",s),Le(this.hass,s).catch(t=>gi(t,e)).then(t=>{console.log("EEEEEEEE",t),!1===t.data?pi(e,Wa("panels.codes.cards.new_user.errors.code_mismatch",this.hass.language)):this.cancelClick()})):pi(e,Wa("panels.codes.cards.new_user.errors.no_code",this.hass.language)):pi(e,Wa("panels.codes.cards.new_user.errors.no_name",this.hass.language))}cancelClick(){$e(0,$i("codes"),!0)}static get styles(){return h`
      ${bi}
      div.checkbox-list {
        display: flex;
        flex-direction: row;
      }
      div.checkbox-list div {
        display: flex;
        align-items: center;
      }
      div.checkbox-list div span {
        cursor: pointer;
      }
    `}};s([he()],_s.prototype,"hass",void 0),s([he()],_s.prototype,"narrow",void 0),s([he()],_s.prototype,"item",void 0),s([he()],_s.prototype,"data",void 0),s([he()],_s.prototype,"repeatCode",void 0),_s=s([de("user-editor-card")],_s);let bs=class extends(Be(oe)){constructor(){super(...arguments),this.users={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await Oe(this.hass);this.data=ci(e,["code_arm_required","code_disarm_required","code_format"]);const t=await Ce(this.hass);this.users=t}render(){return this.hass&&this.data?"new_user"==this.path.subpage?q`
        <user-editor-card .hass=${this.hass} .narrow=${this.narrow}></user-editor-card>
      `:this.path.params.edit_user?q`
        <user-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          item=${this.path.params.edit_user}
        ></user-editor-card>
      `:q`
        <ha-card header="${Wa("panels.codes.title",this.hass.language)}">
          <div class="card-content">${Wa("panels.codes.cards.codes.description",this.hass.language)}</div>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${Wa("panels.codes.cards.codes.fields.code_arm_required.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.codes.cards.codes.fields.code_arm_required.description",this.hass.language)}
            </span>
            <ha-switch
              ?checked=${this.data.code_arm_required}
              @change=${e=>{this.saveData({code_arm_required:e.target.checked})}}
            ></ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${Wa("panels.codes.cards.codes.fields.code_disarm_required.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.codes.cards.codes.fields.code_disarm_required.description",this.hass.language)}
            </span>
            <ha-switch
              ?checked=${this.data.code_disarm_required}
              @change=${e=>{this.saveData({code_disarm_required:e.target.checked})}}
            ></ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">
              ${Wa("panels.codes.cards.codes.fields.code_format.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.codes.cards.codes.fields.code_format.description",this.hass.language)}
            </span>
            <mwc-button
              class="${"number"==this.data.code_format?"active":"disabled"} ${this.data.code_arm_required||this.data.code_disarm_required?"":"disabled"}"
              @click=${()=>{this.saveData({code_format:"number"})}}
              ?disabled=${!this.data.code_arm_required&&!this.data.code_disarm_required}
            >
              ${Wa("panels.codes.cards.codes.fields.code_format.code_format_number",this.hass.language)}
            </mwc-button>
            <mwc-button
              class="${"text"==this.data.code_format?"active":"disabled"} ${this.data.code_arm_required||this.data.code_disarm_required?"":"disabled"}"
              @click=${()=>{this.saveData({code_format:"text"})}}
              ?disabled=${!this.data.code_arm_required&&!this.data.code_disarm_required}
            >
              ${Wa("panels.codes.cards.codes.fields.code_format.code_format_text",this.hass.language)}
            </mwc-button>
          </settings-row>
        </ha-card>

        ${this.usersPanel()}
      `:q``}usersPanel(){if(!this.hass)return q``;const e=Object.values(this.users);e.sort(_i);const t={icon:{width:"40px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},code_format:{title:Wa("panels.codes.cards.codes.fields.code_format.heading",this.hass.language),width:"40%",hide:this.narrow,text:!0},enabled:{title:Wa("common.enabled",this.hass.language),width:"68px",align:"center"}},a=e.map(e=>({id:e.user_id,icon:q`
          <ha-icon icon="mdi:account-outline"></ha-icon>
        `,name:ri(e.name),code_format:"number"==e.code_format?ri(Wa("panels.codes.cards.codes.fields.code_format.code_format_number",this.hass.language)):"text"==e.code_format?ri(Wa("panels.codes.cards.codes.fields.code_format.code_format_text",this.hass.language)):this.hass.localize("state.default.unknown"),enabled:q`
          <ha-switch
            @click=${e=>{e.stopPropagation()}}
            ?checked=${e.enabled}
            @change=${t=>this.toggleEnabled(t,e.user_id)}
          ></ha-switch>
        `}));return q`
      <ha-card header="${Wa("panels.codes.cards.user_management.title",this.hass.language)}">
        <div class="card-content">
          ${Wa("panels.codes.cards.user_management.description",this.hass.language)}
        </div>

        <alarmo-table
          ?selectable=${!0}
          .columns=${t}
          .data=${a}
          @row-click=${e=>{const t=String(e.detail.id);$e(0,$i("codes",{params:{edit_user:t}}),!0)}}
        >
          ${Wa("panels.codes.cards.user_management.no_items",this.hass.language)}
        </alarmo-table>
        <div class="card-actions">
          <mwc-button @click=${this.addUserClick}>
            ${Wa("panels.codes.cards.user_management.actions.new_user",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}addUserClick(){$e(0,$i("codes","new_user"),!0)}saveData(e){this.hass&&(this.data=Object.assign(Object.assign({},this.data),e),Me(this.hass,this.data).catch(e=>gi(e,this.shadowRoot.querySelector("ha-card"))).then())}toggleEnabled(e,t){const a=e.target.checked;Le(this.hass,{user_id:t,enabled:a}).catch(t=>gi(t,e)).then()}};bs.styles=bi,s([he()],bs.prototype,"hass",void 0),s([he()],bs.prototype,"narrow",void 0),s([he()],bs.prototype,"path",void 0),s([he()],bs.prototype,"data",void 0),s([he()],bs.prototype,"users",void 0),bs=s([de("alarm-view-codes")],bs);const ys=(e,t)=>{switch(e){case ii.ArmedAway:return{value:ii.ArmedAway,name:Wa("common.modes_short.armed_away",t.language),icon:Xa.ArmedAway};case ii.ArmedHome:return{value:ii.ArmedHome,name:Wa("common.modes_short.armed_home",t.language),icon:Xa.ArmedHome};case ii.ArmedNight:return{value:ii.ArmedNight,name:Wa("common.modes_short.armed_night",t.language),icon:Xa.ArmedNight};case ii.ArmedCustom:return{value:ii.ArmedCustom,name:Wa("common.modes_short.armed_custom_bypass",t.language),icon:Xa.ArmedCustom};case ii.ArmedVacation:return{value:ii.ArmedVacation,name:Wa("common.modes_short.armed_vacation",t.language),icon:Xa.ArmedVacation}}},ws=(e,t)=>{switch(e){case si.Armed:return{value:si.Armed,name:Wa("panels.actions.cards.new_notification.fields.event.choose.armed.name",t.language),description:Wa("panels.actions.cards.new_notification.fields.event.choose.armed.description",t.language),icon:"hass:shield-check-outline"};case si.Disarmed:return{value:si.Disarmed,name:Wa("panels.actions.cards.new_notification.fields.event.choose.disarmed.name",t.language),description:Wa("panels.actions.cards.new_notification.fields.event.choose.disarmed.description",t.language),icon:"hass:shield-off-outline"};case si.Triggered:return{value:si.Triggered,name:Wa("panels.actions.cards.new_notification.fields.event.choose.triggered.name",t.language),description:Wa("panels.actions.cards.new_notification.fields.event.choose.triggered.description",t.language),icon:"hass:bell-alert-outline"};case si.Untriggered:return{value:si.Untriggered,name:Wa("panels.actions.cards.new_notification.fields.event.choose.untriggered.name",t.language),description:Wa("panels.actions.cards.new_notification.fields.event.choose.untriggered.description",t.language),icon:"hass:bell-off-outline"};case si.ArmFailure:return{value:si.ArmFailure,name:Wa("panels.actions.cards.new_notification.fields.event.choose.arm_failure.name",t.language),description:Wa("panels.actions.cards.new_notification.fields.event.choose.arm_failure.description",t.language),icon:"hass:alert-outline"};case si.Arming:return{value:si.Arming,name:Wa("panels.actions.cards.new_notification.fields.event.choose.arming.name",t.language),description:Wa("panels.actions.cards.new_notification.fields.event.choose.arming.description",t.language),icon:"hass:home-export-outline"};case si.Pending:return{value:si.Pending,name:Wa("panels.actions.cards.new_notification.fields.event.choose.pending.name",t.language),description:Wa("panels.actions.cards.new_notification.fields.event.choose.pending.description",t.language),icon:"hass:home-import-outline"}}},$s=(e,t,a)=>0==e?{name:a.master.name,value:0}:Object.keys(t).includes(String(e))?{name:t[e].name,value:e}:{name:String(e),value:e},ks=(e,...t)=>{const a=t.map(t=>{if(!t)return null;const a=fe(t),i=_e(t);let s={value:t,name:i.replace(/_/g," ").split(" ").map(e=>e.substring(0,1).toUpperCase()+e.substring(1)).join(" "),icon:"hass:home",description:t};switch(a){case"notify":const t=e.states["device_tracker."+i.replace("mobile_app_","")];s=t?Object.assign(Object.assign({},s),{name:t.attributes.friendly_name||_e(t.entity_id),icon:t.attributes.icon||"hass:cellphone-text"}):Object.assign(Object.assign({},s),{icon:"hass:comment-alert"});break;case"tts":s=Object.assign(Object.assign({},s),{icon:"hass:microphone"})}return s}).filter(mi);return a.sort((e,t)=>{const a=fe(e.value),i=fe(t.value);return a!=i?_i(a,i):_i(e,t)}),a},As=(e,t)=>{let a=[];const i=Object.keys(e).filter(t=>Object.values(e[t].modes).some(e=>e.enabled));return t.master.enabled&&i.length>1&&(a=[...a,0]),a=[...a,...i],a},Es=(e,t)=>{const a=e=>Object.keys(e.modes).filter(t=>e.modes[t].enabled);if(mi(e)&&Object.keys(t).includes(String(e)))return a(t[e]);{const e=Object.keys(t).map(e=>a(t[e]));return e[0].filter(t=>e.every(e=>e.includes(t)))}},xs=(e,t)=>e.map(e=>({value:e,name:e in t.states?t.states[e].attributes.friendly_name||_e(e):e,icon:e in t.states?t.states[e].attributes.icon||we(fe(e)):void 0,description:e})),Os=e=>{let t=[];return"notify"in e.services&&(t=[...t,...Object.keys(e.services.notify).map(e=>"notify."+e)]),"tts"in e.services&&(t=[...t,...Object.keys(e.services.tts).filter(e=>"clear_cache"!=e).map(e=>"tts."+e)]),t},Ts=(...e)=>{if(!e.length||!e.every(e=>e.length))return[];if(1==e.length&&e[0].length>1&&li(e[0].map(fe)).length>1)return Ts(...e[0].map(e=>Array(e)));let t=[...e[0]];return e.forEach(e=>{t=t.map(t=>e.includes(t)?t:"script"==fe(t)&&e.map(fe).includes("script")?"script.script":e.map(_e).includes(_e(t))?"homeassistant."+_e(t):null).filter(mi)}),t},Cs=(e,t,a=1)=>{if(a>10)return[];if(Array.isArray(e)){const i=e.map(e=>Cs(e,t,a+1));return Ts(...i)}if(!mi(e))return[];const i=fe(e);switch(i){case"light":case"switch":case"input_boolean":case"siren":return[i+".turn_on",i+".turn_off"];case"script":return[e];case"lock":return["lock.lock","lock.unlock"];case"group":const s=e in t.states?t.states[e]:void 0,n=(null==s?void 0:s.attributes.entity_id)||[];return Cs(n,t,a+1);default:return[]}},js=(e,t)=>{let a=[...Object.keys(e.states).filter(t=>Cs(t,e).length)];return t&&t.length&&(a=[...a,...t.filter(e=>!a.includes(e))]),a.sort(_i),a},Ss=e=>{const t=[...Object.keys(e.states).filter(e=>"media_player"==fe(e))];return t.sort(_i),t},Ms=e=>{let t=[{value:"{{arm_mode}}",name:e.translationMetadata.translations.en.nativeName}];return"en"!=e.language&&(t=[...t,{value:`{{arm_mode|lang=${e.language}}}`,name:e.translationMetadata.translations[e.language].nativeName}]),t},Ns=e=>"string"==typeof e&&e.trim().length,Ls=(e,t)=>Ns(e)&&t.services[fe(e)]&&t.services[fe(e)][_e(e)],Ds=(e,t)=>Ns(e)&&t.states[e],zs=e=>"object"==typeof e&&null!==e&&!Array.isArray(e),Hs=e=>"string"==typeof e;let Ps=class extends oe{constructor(){super(...arguments),this.items=[],this.value=[],this.label="",this.invalid=!1}shouldUpdate(e){return e.get("items")&&(ui(this.items,e.get("items"))||this.firstUpdated()),!0}firstUpdated(){this.value.some(e=>!this.items.map(e=>e.value).includes(e))&&(this.value=this.value.filter(e=>this.items.map(e=>e.value).includes(e)),be(this,"value-changed",{value:this.value}))}render(){return q`
      <div class="chip-set">
        ${this.value.length?this.value.map(e=>this.items.find(t=>t.value==e)).filter(mi).map(e=>q`
          <div class="chip">
            <ha-icon class="icon" icon=${e.icon}>
            </ha-icon>
            <span class="label">
              ${e.name}
            </span>            
            <ha-icon class="button" icon="hass:close" @click=${()=>this._removeClick(e.value)}>
            </ha-icon>
            </mwc-icon-button>
          </div>
        `):""}
      </div>
      <alarmo-select
        .hass=${this.hass}
        .items=${this.items.filter(e=>!this.value.includes(e.value))}
        ?disabled=${this.value.length==this.items.length}
        label=${this.label}
        icons=${!0}
        @value-changed=${this._addClick}
        ?invalid=${this.invalid&&this.value.length!=this.items.length}
      ></alarmo-select>
    `}_removeClick(e){this.value=this.value.filter(t=>t!==e),be(this,"value-changed",{value:this.value})}_addClick(e){e.stopPropagation();const t=e.target,a=t.value;this.value.includes(a)||(this.value=[...this.value,a]),t.value="",be(this,"value-changed",{value:[...this.value]})}static get styles(){return h`
      div.chip-set {
        margin: 0px -4px;
      }
      div.chip {
        height: 32px;
        border-radius: 16px;
        border: 2px solid rgb(168, 232, 251);
        line-height: 1.25rem;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 0px 12px;
        display: inline-flex;
        align-items: center;
        box-sizing: border-box;
        margin: 4px;
      }
      .icon {
        vertical-align: middle;
        outline: none;
        display: flex;
        align-items: center;
        border-radius: 50%;
        padding: 6px;
        color: rgba(0, 0, 0, 0.54);
        background: rgb(168, 232, 251);
        --mdc-icon-size: 20px;
        margin-left: -14px !important;
      }
      .label {
        margin: 0px 4px;
      }
      .button {
        cursor: pointer;
        background: var(--secondary-text-color);
        border-radius: 50%;
        --mdc-icon-size: 14px;
        color: var(--card-background-color);
        width: 16px;
        height: 16px;
        padding: 1px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        margin-right: -6px !important;
      }
    `}};var Bs;s([he()],Ps.prototype,"hass",void 0),s([he()],Ps.prototype,"items",void 0),s([he({type:Array})],Ps.prototype,"value",void 0),s([he()],Ps.prototype,"label",void 0),s([he({type:Boolean})],Ps.prototype,"invalid",void 0),Ps=s([de("alarmo-selector")],Ps),function(e){e[e.Yaml=0]="Yaml",e[e.UI=1]="UI"}(Bs||(Bs={}));let Rs=class extends oe{constructor(){super(...arguments),this.config={type:ai.Notification,triggers:[{}],actions:[{}]},this.viewMode=Bs.UI,this.errors={}}async firstUpdated(){if(await xe(),this.areas=await He(this.hass),this.alarmoConfig=await Oe(this.hass),this.item){let e=this.item.actions.map(e=>hi(e,"entity_id"));this.config=Object.assign(Object.assign({},this.item),{actions:[e[0],...e.slice(1)]}),this.config.triggers.length>1&&(this.config=Object.assign(Object.assign({},this.config),{triggers:[this.config.triggers[0]]}));let t=this.config.triggers[0].area;mi(t)&&!As(this.areas,this.alarmoConfig).includes(t)?t=void 0:null===t&&(t=0),this._setArea(new CustomEvent("value-changed",{detail:{value:t}}))}if(!mi(this.config.triggers[0].area)){const e=As(this.areas,this.alarmoConfig);1==e.length?this._setArea(new CustomEvent("value-changed",{detail:{value:e[0]}})):e.includes(0)&&this._setArea(new CustomEvent("value-changed",{detail:{value:0}}))}}render(){var e,t,a,i;return this.hass&&this.areas&&this.alarmoConfig?q`
      <div class="heading">
        <ha-icon-button .path=${Ei} @click=${this._cancelClick} class="icon"></ha-icon-button>
        <div class="header">${Wa("panels.actions.cards.new_notification.title",this.hass.language)}</div>
        <div class="description">
          ${Wa("panels.actions.cards.new_notification.description",this.hass.language)}
        </div>
      </div>
      <div class="section-header">${Wa("panels.actions.cards.new_notification.trigger",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${Wa("panels.actions.cards.new_notification.fields.event.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.actions.cards.new_notification.fields.event.description",this.hass.language)}
            </span>

            <alarmo-select
              .hass=${this.hass}
              .items=${Object.values(si).map(e=>ws(e,this.hass))}
              label=${Wa("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
              icons=${!0}
              .value=${this.config.triggers[0].event}
              @value-changed=${this._setEvent}
              ?invalid=${this.errors.event}
            ></alarmo-select>
          </settings-row>

          ${Object.keys(this.areas).length>1?q`
                <settings-row .narrow=${this.narrow} .large=${!0}>
                  <span slot="heading">
                    ${Wa("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.actions.cards.new_action.fields.area.description",this.hass.language)}
                  </span>

                  <alarmo-select
                    .hass=${this.hass}
                    .items=${As(this.areas,this.alarmoConfig).map(e=>$s(e,this.areas,this.alarmoConfig))}
                    clearable=${!0}
                    label=${Wa("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
                    .value=${this.config.triggers[0].area}
                    @value-changed=${this._setArea}
                    ?invalid=${this.errors.area||!this.config.triggers[0].area&&!this.alarmoConfig.master.enabled}
                  ></alarmo-select>
                </settings-row>
              `:""}

          <settings-row .narrow=${this.narrow} .large=${!0} last>
            <span slot="heading">
              ${Wa("panels.actions.cards.new_notification.fields.mode.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.actions.cards.new_notification.fields.mode.description",this.hass.language)}
            </span>

            <alarmo-selector
              .hass=${this.hass}
              .items=${Es(this.config.triggers[0].area,this.areas).map(e=>ys(e,this.hass))}
              label=${Wa("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)}
              .value=${this.config.triggers[0].modes||[]}
              @value-changed=${this._setModes}
              ?invalid=${this.errors.modes}
            ></alarmo-selector>
          </settings-row>
        </div>
      </ha-card>

      <div class="section-header">${Wa("panels.actions.cards.new_notification.action",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          ${this.viewMode==Bs.UI?q`
                <settings-row .narrow=${this.narrow} .large=${!0} first>
                  <span slot="heading">
                    ${Wa("panels.actions.cards.new_notification.fields.target.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.actions.cards.new_notification.fields.target.description",this.hass.language)}
                  </span>

                  <alarmo-select
                    .hass=${this.hass}
                    .items=${ks(this.hass,...Os(this.hass))}
                    ?disabled=${!Os(this.hass).length}
                    label=${Wa("panels.actions.cards.new_notification.fields.target.heading",this.hass.language)}
                    icons=${!0}
                    .value=${this.config.actions[0].service}
                    @value-changed=${this._setService}
                    ?invalid=${this.errors.service}
                    allow-custom-value
                  ></alarmo-select>
                </settings-row>

                ${this.config.actions[0].service&&"notify"!=fe(this.config.actions[0].service)?"":q`
                      <settings-row .narrow=${this.narrow}>
                        <span slot="heading">
                          ${Wa("panels.actions.cards.new_notification.fields.title.heading",this.hass.language)}
                        </span>
                        <span slot="description">
                          ${Wa("panels.actions.cards.new_notification.fields.title.description",this.hass.language)}
                        </span>

                        <ha-textfield
                          label="${Wa("panels.actions.cards.new_notification.fields.title.heading",this.hass.language)}"
                          .value=${(null===(e=this.config.actions[0].data)||void 0===e?void 0:e.title)||""}
                          @input=${this._setTitle}
                          ?invalid=${this.errors.title}
                        ></ha-textfield>
                      </settings-row>
                    `}
                ${this.config.actions[0].service&&"tts"==fe(this.config.actions[0].service)?q`
                      <settings-row .narrow=${this.narrow} .large=${!0} first>
                        <span slot="heading">
                          ${Wa("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
                        </span>
                        <span slot="description">
                          ${Wa("panels.actions.cards.new_action.fields.entity.description",this.hass.language)}
                        </span>

                        <alarmo-select
                          .items=${xs(Ss(this.hass),this.hass)}
                          label=${Wa("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
                          .value=${(null===(t=this.config.actions[0].data)||void 0===t?void 0:t.entity_id)||""}
                          @value-changed=${this._setEntity}
                          .icons=${!0}
                          ?invalid=${this.errors.entity}
                        ></alarmo-select>
                      </settings-row>
                    `:""}

                <settings-row .narrow=${this.narrow} .large=${!0} last>
                  <span slot="heading">
                    ${Wa("panels.actions.cards.new_notification.fields.message.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.actions.cards.new_notification.fields.message.description",this.hass.language)}
                  </span>

                  <ha-textarea
                    id="message"
                    label="${Wa("panels.actions.cards.new_notification.fields.message.heading",this.hass.language)}"
                    placeholder=${this._messagePlaceholder()}
                    .value=${(null===(a=this.config.actions[0].data)||void 0===a?void 0:a.message)||""}
                    @input=${e=>this._setMessage(e.target.value)}
                    ?invalid=${this.errors.message}
                  ></ha-textarea>

                  ${this.config.triggers[0].event?q`
                        <div style="margin-top: 10px">
                          <span style="padding-right: 10px">
                            ${Wa("panels.actions.cards.new_notification.fields.message.insert_wildcard",this.hass.language)}:
                          </span>
                          <alarmo-chip-set
                            .items=${((e,t)=>{let a=[];return a=[],e&&![si.Pending,si.Triggered,si.ArmFailure].includes(e)||(a=[...a,{name:"Open Sensors",value:"{{open_sensors}}"}]),e&&![si.Armed].includes(e)||(a=[...a,{name:"Bypassed Sensors",value:"{{bypassed_sensors}}"}]),(!e||(null==t?void 0:t.code_arm_required)&&[si.Armed,si.Arming,si.ArmFailure].includes(e)||(null==t?void 0:t.code_disarm_required)&&[si.Disarmed,si.Untriggered].includes(e))&&(a=[...a,{name:"Changed By",value:"{{changed_by}}"}]),e&&![si.Armed,si.Arming,si.Pending,si.Triggered,si.ArmFailure].includes(e)||(a=[...a,{name:"Arm Mode",value:"{{arm_mode}}"}]),a})(this.config.triggers[0].event,this.alarmoConfig)}
                            @value-changed=${e=>this._insertWildCard(e.detail)}
                          ></alarmo-chip-set>
                        </div>
                      `:""}
                </settings-row>

                ${null!==this._getOpenSensorsFormat()?q`
                      <settings-row .narrow=${this.narrow} .large=${!0}>
                        <span slot="heading">
                          ${Wa("panels.actions.cards.new_notification.fields.open_sensors_format.heading",this.hass.language)}
                        </span>

                        <span slot="description">
                          ${Wa("panels.actions.cards.new_notification.fields.open_sensors_format.description",this.hass.language)}
                        </span>

                        <alarmo-select
                          .items=${(e=>{let t=[];return t="en"!=e.language?[...t,{value:"{{open_sensors}}",name:`${Wa("panels.actions.cards.new_notification.fields.open_sensors_format.options.default",e.language)} (${e.translationMetadata.translations.en.nativeName})`},{value:`{{open_sensors|lang=${e.language}}}`,name:`${Wa("panels.actions.cards.new_notification.fields.open_sensors_format.options.default",e.language)} (${e.translationMetadata.translations[e.language].nativeName})`}]:[...t,{value:"{{open_sensors}}",name:Wa("panels.actions.cards.new_notification.fields.open_sensors_format.options.default",e.language)}],t=[...t,{value:"{{open_sensors|format=short}}",name:Wa("panels.actions.cards.new_notification.fields.open_sensors_format.options.short",e.language)}],t})(this.hass)}
                          .value=${this._getOpenSensorsFormat(!0)}
                          @value-changed=${this._setOpenSensorsFormat}
                        ></alarmo-select>
                      </settings-row>
                    `:""}
                ${null!==this._getArmModeFormat()&&(Ms(this.hass).length>1||1==Ms(this.hass).length&&Ms(this.hass)[0].value!=this._getArmModeFormat())?q`
                      <settings-row .narrow=${this.narrow} .large=${!0}>
                        <span slot="heading">
                          ${Wa("panels.actions.cards.new_notification.fields.arm_mode_format.heading",this.hass.language)}
                        </span>

                        <span slot="description">
                          ${Wa("panels.actions.cards.new_notification.fields.arm_mode_format.description",this.hass.language)}
                        </span>

                        <alarmo-select
                          .items=${Ms(this.hass)}
                          .value=${this._getArmModeFormat(!0)}
                          @value-changed=${this._setArmModeFormat}
                        ></alarmo-select>
                      </settings-row>
                    `:""}
              `:q`
                <h2>${Wa("components.editor.edit_in_yaml",this.hass.language)}</h2>

                <ha-yaml-editor
                  .defaultValue=${this.config.actions[0]||""}
                  @value-changed=${this._setYaml}
                ></ha-yaml-editor>

                ${this.errors.service||this.errors.title||this.errors.message?q`
                      <span class="error-message">
                        ${this.hass.localize("ui.errors.config.key_missing","key",Object.entries(this.errors).find(([e,t])=>t&&["service","title","message","entity"].includes(e))[0])}
                      </span>
                    `:""}
              `}
        </div>

        <div class="toggle-button">
          <mwc-button @click=${this._toggleYamlMode}>
            <ha-icon icon="hass:shuffle-variant"></ha-icon>
            ${this.viewMode==Bs.Yaml?Wa("components.editor.ui_mode",this.hass.language):Wa("components.editor.yaml_mode",this.hass.language)}
          </mwc-button>
        </div>

        <div class="card-actions">
          <mwc-button trailingIcon ?disabled=${!this._validAction()} @click=${this._testClick}>
            ${Wa("panels.actions.cards.new_notification.actions.test",this.hass.language)}
            <ha-icon icon="hass:arrow-right"></ha-icon>
          </mwc-button>
        </div>
      </ha-card>

      <div class="section-header">${Wa("panels.actions.cards.new_notification.options",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${Wa("panels.actions.cards.new_notification.fields.name.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.actions.cards.new_notification.fields.name.description",this.hass.language)}
            </span>

            <ha-textfield
              label="${Wa("panels.actions.cards.new_notification.fields.name.heading",this.hass.language)}"
              .placeholder=${this._namePlaceholder()}
              .value=${this.config.name||""}
              @input=${this._setName}
              ?invalid=${this.errors.name}
            ></ha-textfield>
          </settings-row>

          ${(null===(i=this.item)||void 0===i?void 0:i.automation_id)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${Wa("panels.actions.cards.new_notification.fields.delete.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.actions.cards.new_notification.fields.delete.description",this.hass.language)}
                  </span>
                  <div>
                    <mwc-button class="warning" outlined @click=${this._deleteClick}>
                      <ha-icon icon="hass:trash-can-outline"></ha-icon>
                      ${this.hass.localize("ui.common.delete")}
                    </mwc-button>
                  </div>
                </settings-row>
              `:""}
        </div>
      </ha-card>

      <div class="actions">
        <mwc-button raised @click=${this._saveClick} style="width: 100%" class="save-button">
          <ha-icon icon="hass:content-save-outline"></ha-icon>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
      </div>
    `:q``}_setEvent(e){e.stopPropagation();const t=e.detail.value;let a=this.config.triggers;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{event:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:a}),Object.keys(this.errors).includes("event")&&this._validateConfig()}_setArea(e){var t;e.stopPropagation();const a=e.detail.value;let i=this.config.triggers;Object.assign(i,{0:Object.assign(Object.assign({},i[0]),{area:a})});const s=Es(a,this.areas);(null===(t=i[0].modes)||void 0===t?void 0:t.length)&&this._setModes(new CustomEvent("value-changed",{detail:{value:i[0].modes.filter(e=>s.includes(e))}})),this.config=Object.assign(Object.assign({},this.config),{triggers:i}),Object.keys(this.errors).includes("area")&&this._validateConfig()}_setModes(e){e.stopPropagation();const t=e.detail.value;let a=this.config.triggers;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{modes:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:a}),Object.keys(this.errors).includes("modes")&&this._validateConfig()}_setService(e){e.stopPropagation();const t=String(e.detail.value);let a=this.config.actions;Object.assign(a,{0:Object.assign(Object.assign(Object.assign({},a[0]),{service:t}),hi(a[0],"service"))}),(a[0].data||{}).entity_id&&"notify"==fe(t)&&Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{data:hi(a[0].data||{},"entity_id")})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}),Object.keys(this.errors).includes("service")&&this._validateConfig()}_setTitle(e){e.stopPropagation();const t=e.target.value;let a=this.config.actions;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{service:a[0].service||"",data:Object.assign(Object.assign({},a[0].data||{}),{title:t})})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}),Object.keys(this.errors).includes("title")&&this._validateConfig()}_setEntity(e){e.stopPropagation();const t=e.target.value;let a=this.config.actions;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{service:a[0].service||"",data:Object.assign(Object.assign({},a[0].data||{}),{entity_id:t})})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}),Object.keys(this.errors).includes("entity")&&this._validateConfig()}_setMessage(e){let t=this.config.actions;Object.assign(t,{0:Object.assign(Object.assign({},t[0]),{service:t[0].service||"",data:Object.assign(Object.assign({},t[0].data||{}),{message:e})})}),this.config=Object.assign(Object.assign({},this.config),{actions:t}),Object.keys(this.errors).includes("message")&&this._validateConfig()}_setName(e){e.stopPropagation();const t=e.target.value;this.config=Object.assign(Object.assign({},this.config),{name:t})}_setYaml(e){const t=e.detail.value;let a={};Hs(null==t?void 0:t.service)&&(a=Object.assign(Object.assign({},a),{service:String(t.service)})),zs(null==t?void 0:t.data)&&(a=Object.assign(Object.assign({},a),{data:t.data})),Object.keys(a).length&&(this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:Object.assign(Object.assign({},this.config.actions[0]),a)})})),Object.keys(this.errors).some(e=>["service","message","title"].includes(e))&&this._validateConfig()}_validateConfig(){var e;this.errors={};const t=this._parseAutomation(),a=t.triggers[0];a.event&&Object.values(si).includes(a.event)||(this.errors=Object.assign(Object.assign({},this.errors),{event:!0})),mi(a.area)&&As(this.areas,this.alarmoConfig).includes(a.area)||(this.errors=Object.assign(Object.assign({},this.errors),{area:!0})),(a.modes||[]).every(e=>Es(a.area,this.areas).includes(e))||(this.errors=Object.assign(Object.assign({},this.errors),{modes:!0}));const i=t.actions[0];return!i.service||!Os(this.hass).includes(i.service)&&"script"!=fe(i.service)?this.errors=Object.assign(Object.assign({},this.errors),{service:!0}):!i.service||"tts"!=fe(i.service)||Object.keys(i.data||{}).includes("entity_id")&&Ss(this.hass).includes(i.data.entity_id)||(this.errors=Object.assign(Object.assign({},this.errors),{entity:!0})),Ns(null===(e=i.data)||void 0===e?void 0:e.message)||(this.errors=Object.assign(Object.assign({},this.errors),{message:!0})),Ns(t.name)||(this.errors=Object.assign(Object.assign({},this.errors),{name:!0})),!Object.values(this.errors).length}_validAction(){var e;const t=this._parseAutomation().actions[0];return t.service&&("script"==fe(t.service)||Os(this.hass).includes(t.service))&&Ns(null===(e=t.data)||void 0===e?void 0:e.message)}_insertWildCard(e){var t;const a=this.shadowRoot.querySelector("#message");a&&a.focus();let i=(null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"";i=a&&null!==a.selectionStart&&null!==a.selectionEnd?i.substring(0,a.selectionStart)+e+i.substring(a.selectionEnd,i.length):i+e,this._setMessage(i)}_toggleYamlMode(){if(this.viewMode=this.viewMode==Bs.UI?Bs.Yaml:Bs.UI,this.viewMode==Bs.Yaml){let e=Object.assign({},this.config.actions[0]),t="object"==typeof e.data&&mi(e.data)?e.data:{};e=Object.assign(Object.assign({},e),{service:e.service||""}),t.message||(t=Object.assign(Object.assign({},t),{message:""})),Os(this.hass).includes(e.service)&&("notify"!=fe(e.service)||t.title||(t=Object.assign(Object.assign({},t),{title:""})),"tts"!=fe(e.service)||t.entity_id||(t=Object.assign(Object.assign({},t),{entity_id:""}))),e=Object.assign(Object.assign({},e),{data:t}),this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:e})})}}_namePlaceholder(){const e=this.config.triggers[0].event,t=this.config.actions[0].service?fe(this.config.actions[0].service):null;if(!e)return"";if("notify"==t){const t=ks(this.hass,this.config.actions[0].service);return t.length?Wa("panels.actions.cards.new_notification.fields.name.placeholders."+e,this.hass.language,"{target}",t[0].name):""}if("tts"==t){const t="object"==typeof this.config.actions[0].data&&mi(this.config.actions[0].data)?this.config.actions[0].data.entity_id:null;if(!t||!this.hass.states[t])return"";const a=oi(this.hass.states[t]);return Wa("panels.actions.cards.new_notification.fields.name.placeholders."+e,this.hass.language,"{target}",a)}return""}_messagePlaceholder(){const e=this.config.triggers[0].event;return e?Wa("panels.actions.cards.new_notification.fields.message.placeholders."+e,this.hass.language):""}_parseAutomation(){var e;let t=Object.assign({},this.config),a=t.actions[0];return!Ns(null===(e=a.data)||void 0===e?void 0:e.message)&&this.viewMode==Bs.UI&&this._messagePlaceholder()&&(a=Object.assign(Object.assign({},a),{data:Object.assign(Object.assign({},a.data),{message:this._messagePlaceholder()})}),Object.assign(t,{actions:Object.assign(t.actions,{0:a})})),!Ns(t.name)&&this._namePlaceholder()&&(t=Object.assign(Object.assign({},t),{name:this._namePlaceholder()})),t}_getOpenSensorsFormat(e=!1){var t;const a=((null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"").match(/{{open_sensors(\|[^}]+)?}}/);return null!==a?a[0]:e?"{{open_sensors}}":null}_setOpenSensorsFormat(e){var t;e.stopPropagation();const a=String(e.detail.value);let i=(null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"";i=i.replace(/{{open_sensors(\|[^}]+)?}}/,a);let s=this.config.actions;Object.assign(s,{0:Object.assign(Object.assign({},s[0]),{service:s[0].service||"",data:Object.assign(Object.assign({},s[0].data||{}),{message:i})})}),this.config=Object.assign(Object.assign({},this.config),{actions:s})}_getArmModeFormat(e=!1){var t;const a=((null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"").match(/{{arm_mode(\|[^}]+)?}}/);return null!==a?a[0]:e?"{{arm_mode}}":null}_setArmModeFormat(e){var t;e.stopPropagation();const a=String(e.detail.value);let i=(null===(t=this.config.actions[0].data)||void 0===t?void 0:t.message)||"";i=i.replace(/{{arm_mode(\|[^}]+)?}}/,a);let s=this.config.actions;Object.assign(s,{0:Object.assign(Object.assign({},s[0]),{service:s[0].service||"",data:Object.assign(Object.assign({},s[0].data||{}),{message:i})})}),this.config=Object.assign(Object.assign({},this.config),{actions:s})}_saveClick(e){if(!this._validateConfig())return;let t=this._parseAutomation();Es(t.triggers[0].area,this.areas).every(e=>{var a;return null===(a=t.triggers[0].modes)||void 0===a?void 0:a.includes(e)})&&(t=Object.assign(Object.assign({},t),{triggers:Object.assign(t.triggers,{0:Object.assign(Object.assign({},t.triggers[0]),{modes:[]})})})),this.item&&(t=Object.assign(Object.assign({},t),{automation_id:this.item.automation_id})),De(this.hass,t).catch(t=>gi(t,e)).then(()=>this._cancelClick())}_deleteClick(e){var t;(null===(t=this.item)||void 0===t?void 0:t.automation_id)&&ze(this.hass,this.item.automation_id).catch(t=>gi(t,e)).then(()=>this._cancelClick())}_testClick(e){const t=this._parseAutomation().actions[0],[a,i]=t.service.split(".");let s=t.data.message;s=s.replace("{{open_sensors|format=short}}","Some Example Sensor"),s=s.replace(/{{open_sensors(\|[^}]+)?}}/,"Some Example Sensor is open"),s=s.replace("{{bypassed_sensors}}","Some Bypassed Sensor"),s=s.replace(/{{arm_mode(\|[^}]+)?}}/,"Armed away"),s=s.replace("{{changed_by}}","Some Example User"),this.hass.callService(a,i,Object.assign(Object.assign({},t.data),{message:s})).then().catch(t=>{pi(e,t.message)})}_cancelClick(){$e(0,$i("actions"),!0)}static get styles(){return h`
      div.content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
      div.header {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: var(--dark-primary-opacity);
      }
      div.section-header {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: var(--dark-primary-opacity);
        margin: 20px 0px 5px 10px;
      }
      div.actions {
        padding: 20px 0px 30px 0px;
      }
      mwc-button ha-icon {
        margin-right: 6px;
        --mdc-icon-size: 20px;
      }
      .toggle-button {
        position: absolute;
        right: 20px;
        top: 20px;
      }
      h2 {
        margin-top: 10px;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
      }
      span.error-message {
        color: var(--error-color);
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      mwc-button.save-button {
        --mdc-theme-primary: rgba(var(--rgb-primary-color), 0.8);
      }
      div.heading {
        display: grid;
        grid-template-areas:
          'header icon'
          'description icon';
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 48px;
        margin: 20px 0px 10px 10px;
      }
      div.heading .icon {
        grid-area: icon;
      }
      div.heading .header {
        grid-area: header;
      }
      div.heading .description {
        grid-area: description;
      }
      ha-textarea[invalid] {
        --mdc-text-field-idle-line-color: var(--mdc-theme-error);
        --mdc-text-field-label-ink-color: var(--mdc-theme-error);
      }
    `}};var qs;s([he({attribute:!1})],Rs.prototype,"hass",void 0),s([he()],Rs.prototype,"narrow",void 0),s([he()],Rs.prototype,"config",void 0),s([he()],Rs.prototype,"item",void 0),s([he()],Rs.prototype,"areas",void 0),s([he()],Rs.prototype,"alarmoConfig",void 0),s([he()],Rs.prototype,"viewMode",void 0),s([he()],Rs.prototype,"errors",void 0),Rs=s([de("notification-editor-card")],Rs),function(e){e[e.Yaml=0]="Yaml",e[e.UI=1]="UI"}(qs||(qs={}));let Is=class extends oe{constructor(){super(...arguments),this.config={type:ai.Action,triggers:[{}],actions:[{}]},this.viewMode=qs.UI,this.errors={}}async firstUpdated(){if(await xe(),this.areas=await He(this.hass),this.alarmoConfig=await Oe(this.hass),this.item){let e=this.item.actions.map(e=>e.entity_id?e:hi(e,"entity_id"));this.config=Object.assign(Object.assign({},this.item),{actions:[e[0],...e.slice(1)]}),this.config.triggers.length>1&&(this.config=Object.assign(Object.assign({},this.config),{triggers:[this.config.triggers[0]]}));let t=this.config.triggers[0].area;mi(t)&&!As(this.areas,this.alarmoConfig).includes(t)?t=void 0:null===t&&(t=0),this._setArea(new CustomEvent("value-changed",{detail:{value:t}})),this._hasCustomEntities()&&(this.viewMode=qs.Yaml)}if(!mi(this.config.triggers[0].area)){const e=As(this.areas,this.alarmoConfig);1==e.length?this._setArea(new CustomEvent("value-changed",{detail:{value:e[0]}})):e.includes(0)&&this._setArea(new CustomEvent("value-changed",{detail:{value:0}}))}!this.item||this.config.triggers[0].area||this.alarmoConfig.master.enabled||(this.errors=Object.assign(Object.assign({},this.errors),{area:!0}))}render(){var e;return this.hass&&this.areas&&this.alarmoConfig?q`
      <div class="heading">
        <ha-icon-button .path=${Ei} @click=${this._cancelClick} class="icon"></ha-icon-button>
        <div class="header">${Wa("panels.actions.cards.new_action.title",this.hass.language)}</div>
        <div class="description">${Wa("panels.actions.cards.new_action.description",this.hass.language)}</div>
      </div>
      <div class="section-header">${Wa("panels.actions.cards.new_notification.trigger",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${Wa("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.actions.cards.new_action.fields.event.description",this.hass.language)}
            </span>

            <alarmo-select
              .hass=${this.hass}
              .items=${Object.values(si).map(e=>ws(e,this.hass))}
              label=${Wa("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
              icons=${!0}
              .value=${this.config.triggers[0].event}
              @value-changed=${this._setEvent}
              ?invalid=${this.errors.event}
            ></alarmo-select>
          </settings-row>

          ${Object.keys(this.areas).length>1?q`
                <settings-row .narrow=${this.narrow} .large=${!0}>
                  <span slot="heading">
                    ${Wa("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.actions.cards.new_action.fields.area.description",this.hass.language)}
                  </span>

                  <alarmo-select
                    .hass=${this.hass}
                    .items=${As(this.areas,this.alarmoConfig).map(e=>$s(e,this.areas,this.alarmoConfig))}
                    clearable=${!0}
                    label=${Wa("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}
                    .value=${this.config.triggers[0].area}
                    @value-changed=${this._setArea}
                    ?invalid=${this.errors.area}
                  ></alarmo-select>
                </settings-row>
              `:""}

          <settings-row .narrow=${this.narrow} .large=${!0} last>
            <span slot="heading">
              ${Wa("panels.actions.cards.new_notification.fields.mode.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.actions.cards.new_notification.fields.mode.description",this.hass.language)}
            </span>

            <alarmo-selector
              .hass=${this.hass}
              .items=${Es(this.config.triggers[0].area,this.areas).map(e=>ys(e,this.hass))}
              label=${Wa("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)}
              .value=${this.config.triggers[0].modes||[]}
              @value-changed=${this._setModes}
              ?invalid=${this.errors.modes}
            ></alarmo-selector>
          </settings-row>
        </div>
      </ha-card>

      <div class="section-header">${Wa("panels.actions.cards.new_notification.action",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          ${this.viewMode==qs.UI?q`
                <settings-row .narrow=${this.narrow} .large=${!0} first>
                  <span slot="heading">
                    ${Wa("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.actions.cards.new_action.fields.entity.description",this.hass.language)}
                  </span>

                  <alarmo-selector
                    .hass=${this.hass}
                    .items=${xs(js(this.hass,this._getEntities()),this.hass)}
                    ?disabled=${!js(this.hass,this._getEntities()).length}
                    label=${Wa("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}
                    .value=${this._getEntities()}
                    @value-changed=${this._setEntity}
                    ?invalid=${this.errors.entity_id}
                  ></alarmo-selector>
                </settings-row>

                ${this._getEntities().length?q`
                      <settings-row .narrow=${this.narrow} .large=${!0}>
                        <span slot="heading">
                          ${Wa("panels.actions.cards.new_action.fields.action.heading",this.hass.language)}
                        </span>
                        <span slot="description">
                          ${Wa("panels.actions.cards.new_action.fields.action.description",this.hass.language)}
                        </span>

                        <div>
                          ${this.renderActions()||Wa("panels.actions.cards.new_action.fields.action.no_common_actions",this.hass.language)}
                        </div>
                        ${this.errors.service?q`
                              <span class="error-message">
                                ${this.hass.localize("ui.common.error_required",this.hass.language)}
                              </span>
                            `:""}
                      </settings-row>
                    `:""}
              `:q`
                <h2>${Wa("components.editor.edit_in_yaml",this.hass.language)}</h2>

                <ha-yaml-editor
                  .defaultValue=${this.config.actions||""}
                  @value-changed=${this._setYaml}
                ></ha-yaml-editor>

                ${this.errors.service||this.errors.entity_id?q`
                      <span class="error-message">
                        ${this.hass.localize("ui.errors.config.key_missing","key",Object.entries(this.errors).find(([e,t])=>t&&["service","entity_id"].includes(e))[0])}
                      </span>
                    `:""}
              `}
        </div>

        <!-- <div class="toggle-button">
          <mwc-button @click=${this._toggleYamlMode}>
            <ha-icon icon="hass:shuffle-variant"></ha-icon>
            ${this.viewMode==qs.Yaml?Wa("components.editor.ui_mode",this.hass.language):Wa("components.editor.yaml_mode",this.hass.language)}
          </mwc-button>
        </div> -->

        <div class="card-actions">
          <mwc-button trailingIcon ?disabled=${!this._validAction()} @click=${this._testClick}>
            ${Wa("panels.actions.cards.new_notification.actions.test",this.hass.language)}
            <ha-icon icon="hass:arrow-right"></ha-icon>
          </mwc-button>
        </div>
      </ha-card>

      <div class="section-header">${Wa("panels.actions.cards.new_notification.options",this.hass.language)}</div>
      <ha-card>
        <div class="card-content">
          <settings-row .narrow=${this.narrow} .large=${!0} first>
            <span slot="heading">
              ${Wa("panels.actions.cards.new_action.fields.name.heading",this.hass.language)}
            </span>
            <span slot="description">
              ${Wa("panels.actions.cards.new_action.fields.name.description",this.hass.language)}
            </span>

            <ha-textfield
              label="${Wa("panels.actions.cards.new_action.fields.name.heading",this.hass.language)}"
              .placeholder=${this._namePlaceholder()}
              .value=${this.config.name||""}
              @input=${this._setName}
              ?invalid=${this.errors.name}
            ></ha-textfield>
          </settings-row>

          ${(null===(e=this.item)||void 0===e?void 0:e.automation_id)?q`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">
                    ${Wa("panels.actions.cards.new_notification.fields.delete.heading",this.hass.language)}
                  </span>
                  <span slot="description">
                    ${Wa("panels.actions.cards.new_notification.fields.delete.description",this.hass.language)}
                  </span>
                  <div>
                    <mwc-button class="warning" outlined @click=${this._deleteClick}>
                      <ha-icon icon="hass:trash-can-outline"></ha-icon>
                      ${this.hass.localize("ui.common.delete")}
                    </mwc-button>
                  </div>
                </settings-row>
              `:""}
        </div>
      </ha-card>

      <div class="actions">
        <mwc-button raised @click=${this._saveClick} style="width: 100%" class="save-button">
          <ha-icon icon="hass:content-save-outline"></ha-icon>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
      </div>
    `:q``}renderActions(){let e=this.config.actions.map(e=>e.entity_id),t=Cs(e,this.hass);if(!t.length)return;return t.map(e=>q`
        <mwc-button
          class="${((...e)=>!!e.every(mi)&&1==li(Ts(e.filter(mi))).length)(this._selectedAction(),e)?"active":"disabled"}"
          @click=${()=>this._setAction(e)}
        >
          ${((e,t)=>{let a=_e(e);switch("script"==fe(e)&&(a="run"),a){case"turn_on":return t.localize("ui.card.media_player.turn_on");case"turn_off":return t.localize("ui.card.media_player.turn_off");case"lock":return t.localize("ui.card.lock.lock");case"unlock":return t.localize("ui.card.lock.unlock");case"run":return t.localize("ui.card.script.run");default:return a}})(e,this.hass)}
        </mwc-button>
      `)}_selectedAction(){let e=this.config.actions.map(e=>e.service);return e.every(mi)?(e=li(Ts(e.filter(mi))),1==e.length?e[0]:null):null}_setEvent(e){e.stopPropagation();const t=e.detail.value;let a=this.config.triggers;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{event:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:a}),Object.keys(this.errors).includes("event")&&this._validateConfig()}_setArea(e){var t;e.stopPropagation();const a=e.detail.value;let i=this.config.triggers;Object.assign(i,{0:Object.assign(Object.assign({},i[0]),{area:a})});const s=Es(a,this.areas);(null===(t=i[0].modes)||void 0===t?void 0:t.length)&&this._setModes(new CustomEvent("value-changed",{detail:{value:i[0].modes.filter(e=>s.includes(e))}})),this.config=Object.assign(Object.assign({},this.config),{triggers:i}),Object.keys(this.errors).includes("area")&&this._validateConfig()}_setModes(e){e.stopPropagation();const t=e.detail.value,a=this.config.triggers;Object.assign(a,{0:Object.assign(Object.assign({},a[0]),{modes:t})}),this.config=Object.assign(Object.assign({},this.config),{triggers:a}),Object.keys(this.errors).includes("service")&&this._validateConfig()}_setEntity(e){e.stopPropagation();const t=e.detail.value;let a=this.config.actions,i=null;if(t.length>a.length&&this._selectedAction()&&(i=this._selectedAction()),a.length>t.length){let e=a.findIndex(e=>!t.includes(e.entity_id||""));e<0&&(e=a.length-1),a.splice(e,1)}t.length||Object.assign(a,{0:hi(a[0],"entity_id")}),t.forEach((e,t)=>{let i=a.length>t?Object.assign({},a[t]):{};i=i.entity_id==e?Object.assign({},i):{entity_id:e},Object.assign(a,{[t]:i})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}),i&&this._setAction(i),Object.keys(this.errors).includes("entity_id")&&this._validateConfig()}_setAction(e){let t=this.config.actions,a=this.config.actions.map(e=>e.entity_id);Cs(a,this.hass).length&&(t.forEach((a,i)=>{let s=Cs(a.entity_id,this.hass),n=(r=e,s.find(e=>e==r||"turn_on"==_e(r)&&"turn_on"==_e(e)||"turn_off"==_e(r)&&"turn_off"==_e(e)||"script"==fe(r)&&"script"==fe(e)));var r;Object.assign(t,{[i]:Object.assign({service:n},hi(a,"service"))})}),this.config=Object.assign(Object.assign({},this.config),{actions:t}),Object.keys(this.errors).includes("service")&&this._validateConfig())}_setName(e){e.stopPropagation();const t=e.target.value;this.config=Object.assign(Object.assign({},this.config),{name:t})}_setYaml(e){let t=e.detail.value,a=[{}];var i;zs(t)&&(t=[t]),"object"==typeof(i=t)&&null!==i&&Array.isArray(i)&&(t.forEach((e,t)=>{let i={};zs(e)&&Hs(e.service)&&(i=Object.assign(Object.assign({},i),{service:e.service})),zs(e)&&Hs(e.entity_id)&&(i=Object.assign(Object.assign({},i),{entity_id:e.entity_id})),zs(e)&&zs(e.data)&&(i=Object.assign(Object.assign({},i),{data:e.data})),Object.assign(a,{[t]:i})}),this.config=Object.assign(Object.assign({},this.config),{actions:a}))}_validateConfig(){this.errors={};const e=this._parseAutomation(),t=e.triggers[0];t.event&&Object.values(si).includes(t.event)||(this.errors=Object.assign(Object.assign({},this.errors),{event:!0})),mi(t.area)&&As(this.areas,this.alarmoConfig).includes(t.area)||(this.errors=Object.assign(Object.assign({},this.errors),{area:!0})),(t.modes||[]).every(e=>Es(t.area,this.areas).includes(e))||(this.errors=Object.assign(Object.assign({},this.errors),{modes:!0}));let a=e.actions.map(e=>e.entity_id);this.viewMode==qs.Yaml&&(a=a.filter(mi)),e.actions.length&&a.every(e=>Ds(e,this.hass))||(this.errors=Object.assign(Object.assign({},this.errors),{entity_id:!0}));const i=e.actions.map(e=>e.service).filter(mi);if(!i.length||!i.every(e=>Ls(e,this.hass))){this.errors=Object.assign(Object.assign({},this.errors),{service:!0}),!Cs(a,this.hass).length&&i.length&&(this.viewMode=qs.Yaml)}return Ns(e.name)||(this.errors=Object.assign(Object.assign({},this.errors),{name:!0})),!Object.values(this.errors).length}_validAction(){const e=this._parseAutomation(),t=e.actions.map(e=>e.service);let a=e.actions.map(e=>e.entity_id);return this.viewMode==qs.Yaml&&(a=a.filter(mi)),t.length&&t.every(e=>Ls(e,this.hass))&&a.every(e=>Ds(e,this.hass))}_toggleYamlMode(){this.viewMode=this.viewMode==qs.UI?qs.Yaml:qs.UI,this.viewMode==qs.Yaml&&(this.config=Object.assign(Object.assign({},this.config),{actions:Object.assign(this.config.actions,{0:Object.assign(Object.assign({},this.config.actions[0]),{service:this.config.actions[0].service||"",data:Object.assign({},this.config.actions[0].data||{})})})}))}_namePlaceholder(){var e,t,a,i;if(!this._validAction)return"";const s=this.config.triggers[0].event,n=this.config.actions.map(e=>e.entity_id).filter(mi),r=xs(n,this.hass).map(e=>e.name).join(", "),o=li(this.config.actions.map(e=>e.service).filter(mi).map(e=>_e(e)));let l=void 0;return 1==o.length&&(null===(e=o[0])||void 0===e?void 0:e.includes("turn_on"))&&(l=this.hass.localize("state.default.on")),1==o.length&&(null===(t=o[0])||void 0===t?void 0:t.includes("turn_off"))&&(l=this.hass.localize("state.default.off")),1==o.length&&(null===(a=o[0])||void 0===a?void 0:a.includes("lock"))&&(l=this.hass.localize("component.lock.state._.locked")),1==o.length&&(null===(i=o[0])||void 0===i?void 0:i.includes("unlock"))&&(l=this.hass.localize("component.lock.state._.unlocked")),s&&r&&l?Wa("panels.actions.cards.new_action.fields.name.placeholders."+s,this.hass.language,"entity",r,"state",l):""}_getEntities(){return li(this.config.actions.map(e=>e.entity_id).filter(mi))||[]}_hasCustomEntities(){return this._getEntities().some(e=>!js(this.hass).includes(e))}_parseAutomation(){let e=Object.assign({},this.config);return!Ns(e.name)&&this._namePlaceholder()&&(e=Object.assign(Object.assign({},e),{name:this._namePlaceholder()})),e}_saveClick(e){if(!this._validateConfig())return;let t=this._parseAutomation();Es(t.triggers[0].area,this.areas).every(e=>{var a;return null===(a=t.triggers[0].modes)||void 0===a?void 0:a.includes(e)})&&(t=Object.assign(Object.assign({},t),{triggers:Object.assign(t.triggers,{0:Object.assign(Object.assign({},t.triggers[0]),{modes:[]})})})),De(this.hass,t).catch(t=>gi(t,e)).then(()=>this._cancelClick())}_deleteClick(e){var t;(null===(t=this.item)||void 0===t?void 0:t.automation_id)&&ze(this.hass,this.item.automation_id).catch(t=>gi(t,e)).then(()=>this._cancelClick())}_testClick(e){this._parseAutomation().actions.forEach(t=>{const[a,i]=t.service.split(".");let s=Object.assign({},t.data);t.entity_id&&(s=Object.assign(Object.assign({},s),{entity_id:t.entity_id})),this.hass.callService(a,i,s).then().catch(t=>{pi(e,t.message)})})}_cancelClick(){$e(0,$i("actions"),!0)}static get styles(){return h`
      div.content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }
      div.header {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: var(--dark-primary-opacity);
      }
      div.section-header {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        opacity: var(--dark-primary-opacity);
        margin: 20px 0px 5px 10px;
      }
      div.actions {
        padding: 20px 0px 30px 0px;
      }
      mwc-button ha-icon {
        margin-right: 6px;
        --mdc-icon-size: 20px;
      }
      .toggle-button {
        position: absolute;
        right: 20px;
        top: 20px;
      }
      h2 {
        margin-top: 10px;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
      }
      span.error-message {
        color: var(--error-color);
        font-size: 0.875rem;
        display: flex;
        margin-top: 10px;
      }
      mwc-button.warning {
        --mdc-theme-primary: var(--error-color);
      }
      mwc-button.save-button {
        --mdc-theme-primary: rgba(var(--rgb-primary-color), 0.8);
      }
      mwc-button.active {
        background: var(--accent-color);
        --mdc-theme-primary: var(--primary-color);
        border-radius: 4px;
      }
      mwc-button.disabled {
        /* background: var(--disabled-text-color); */
        --mdc-theme-primary: grey;
      }
      div.heading {
        display: grid;
        grid-template-areas:
          'header icon'
          'description icon';
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 48px;
        margin: 20px 0px 10px 10px;
      }
      div.heading .icon {
        grid-area: icon;
      }
      div.heading .header {
        grid-area: header;
      }
      div.heading .description {
        grid-area: description;
      }
    `}};s([he({attribute:!1})],Is.prototype,"hass",void 0),s([he()],Is.prototype,"narrow",void 0),s([he()],Is.prototype,"config",void 0),s([he()],Is.prototype,"item",void 0),s([he()],Is.prototype,"areas",void 0),s([he()],Is.prototype,"alarmoConfig",void 0),s([he()],Is.prototype,"viewMode",void 0),s([he()],Is.prototype,"errors",void 0),Is=s([de("automation-editor-card")],Is);let Us=class extends(Be(oe)){constructor(){super(...arguments),this.areas={},this.getAreaForAutomation=e=>{if(!this.config)return;const t=As(this.areas,this.config);let a=e.triggers[0].area;return mi(a)&&t.includes(a)?a:void 0}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeMessage(()=>this._fetchData(),{type:"alarmo_config_updated"})]}async _fetchData(){if(!this.hass)return;const e=await je(this.hass);this.automations=Object.values(e),this.areas=await He(this.hass),this.config=await Oe(this.hass)}firstUpdated(){var e;this.path.filter&&(this.selectedArea=null===(e=this.path.filter)||void 0===e?void 0:e.area),(async()=>{await Ee()})()}render(){if(!this.hass||!this.automations||!this.config)return q``;if("new_notification"==this.path.subpage)return q`
        <notification-editor-card .hass=${this.hass} .narrow=${this.narrow}></notification-editor-card>
      `;if(this.path.params.edit_notification){const e=this.automations.find(e=>e.automation_id==this.path.params.edit_notification&&e.type==ai.Notification);return q`
        <notification-editor-card .hass=${this.hass} .narrow=${this.narrow} .item=${e}></notification-editor-card>
      `}if("new_action"==this.path.subpage)return q`
        <automation-editor-card .hass=${this.hass} .narrow=${this.narrow}></automation-editor-card>
      `;if(this.path.params.edit_action){const e=this.automations.find(e=>e.automation_id==this.path.params.edit_action&&e.type==ai.Action);return q`
        <automation-editor-card .hass=${this.hass} .narrow=${this.narrow} .item=${e}></automation-editor-card>
      `}{const e=()=>q`
        <paper-tooltip animation-delay="0">
          ${Wa("panels.actions.cards.notifications.table.no_area_warning",this.hass.language)}
        </paper-tooltip>
      `,t={type:{width:"40px",renderer:t=>"no_area"!=t.area||this.config.master.enabled?t.type==ai.Notification?q`
                  <ha-icon icon="hass:message-text-outline"></ha-icon>
                `:q`
                  <ha-icon icon="hass:flash"></ha-icon>
                `:q`
                  ${e()}
                  <ha-icon icon="mdi:alert" style="color: var(--error-color)"></ha-icon>
                `},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),renderer:t=>q`
            ${"no_area"!=t.area||this.config.master.enabled?"":e()}
            <span>${t.name}</span>
          `,width:"40%",grow:!0,text:!0},enabled:{title:Wa("common.enabled",this.hass.language),width:"68px",align:"center",renderer:e=>q`
            <ha-switch
              ?checked=${e.enabled}
              @click=${t=>{t.stopPropagation(),this.toggleEnable(t,e.automation_id)}}
            ></ha-switch>
          `}},a=this.automations.filter(e=>e.type==ai.Notification).map(e=>Object(Object.assign(Object.assign({},e),{id:e.automation_id,warning:!this.config.master.enabled&&!this.getAreaForAutomation(e),area:this.getAreaForAutomation(e)||"no_area"}))),i=this.automations.filter(e=>e.type==ai.Action).map(e=>Object(Object.assign(Object.assign({},e),{id:e.automation_id,warning:!this.config.master.enabled&&!this.getAreaForAutomation(e),area:this.getAreaForAutomation(e)||"no_area"})));return q`
        <ha-card header="${Wa("panels.actions.cards.notifications.title",this.hass.language)}">
          <div class="card-content">
            ${Wa("panels.actions.cards.notifications.description",this.hass.language)}
          </div>

          <alarmo-table
            .hass=${this.hass}
            ?selectable=${!0}
            .columns=${t}
            .data=${a}
            .filters=${this.getTableFilterOptions()}
            @row-click=${e=>$e(0,$i("actions",{params:{edit_notification:e.detail.id}}),!0)}
          >
            ${Wa("panels.actions.cards.notifications.table.no_items",this.hass.language)}
          </alarmo-table>

          <div class="card-actions">
            <mwc-button @click=${this.addNotificationClick}>
              ${Wa("panels.actions.cards.notifications.actions.new_notification",this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>

        <ha-card header="${Wa("panels.actions.title",this.hass.language)}">
          <div class="card-content">${Wa("panels.actions.cards.actions.description",this.hass.language)}</div>

          <alarmo-table
            .hass=${this.hass}
            ?selectable=${!0}
            .columns=${t}
            .data=${i}
            .filters=${this.getTableFilterOptions()}
            @row-click=${e=>$e(0,$i("actions",{params:{edit_action:e.detail.id}}),!0)}
          >
            ${Wa("panels.actions.cards.actions.table.no_items",this.hass.language)}
          </alarmo-table>

          <div class="card-actions">
            <mwc-button @click=${this.addActionClick}>
              ${Wa("panels.actions.cards.actions.actions.new_action",this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>
      `}}toggleEnable(e,t){De(this.hass,{automation_id:t,enabled:!e.target.checked}).catch(t=>gi(t,e)).then()}getTableFilterOptions(){if(!this.hass)return;let e=Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name,badge:t=>t.filter(t=>t.area==e.area_id).length})).sort(_i);Object.values(this.automations||[]).filter(e=>!this.getAreaForAutomation(e)).length&&(e=[{value:"no_area",name:this.config.master.enabled?this.config.master.name:this.hass.localize("state_attributes.climate.preset_mode.none"),badge:e=>e.filter(e=>"no_area"==e.area).length},...e]);return{area:{name:Wa("components.table.filter.item",this.hass.language,"name",Wa("panels.actions.cards.new_action.fields.area.heading",this.hass.language)),items:e,value:this.selectedArea?[this.selectedArea]:[]}}}addNotificationClick(){$e(0,$i("actions","new_notification"),!0)}addActionClick(){$e(0,$i("actions","new_action"),!0)}};Us.styles=bi,s([he()],Us.prototype,"hass",void 0),s([he()],Us.prototype,"narrow",void 0),s([he()],Us.prototype,"path",void 0),s([he()],Us.prototype,"alarmEntity",void 0),s([he()],Us.prototype,"automations",void 0),s([he()],Us.prototype,"areas",void 0),s([he()],Us.prototype,"config",void 0),s([he()],Us.prototype,"selectedArea",void 0),Us=s([de("alarm-view-actions")],Us),e.MyAlarmPanel=class extends oe{async firstUpdated(){window.addEventListener("location-changed",()=>{this.requestUpdate()}),await Ee(),this.userConfig=await Ce(this.hass),this.requestUpdate()}render(){if(!customElements.get("ha-app-layout")||!this.userConfig)return q`
        loading...
      `;const e=wi();return q`
      <ha-app-layout>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
            <div main-title>
              ${Wa("title",this.hass.language)}
            </div>
            <div class="version">
              v${"1.9.5"}
            </div>
          </app-toolbar>
          <ha-tabs
            scrollable
            attr-for-selected="page-name"
            .selected=${e.page}
            @iron-activate=${this.handlePageSelected}
          >
            <paper-tab page-name="general">
              ${Wa("panels.general.title",this.hass.language)}
            </paper-tab>
            <paper-tab page-name="sensors">
              ${Wa("panels.sensors.title",this.hass.language)}
            </paper-tab>
            <paper-tab page-name="codes">
              ${Wa("panels.codes.title",this.hass.language)}
            </paper-tab>
            <paper-tab page-name="actions">
              ${Wa("panels.actions.title",this.hass.language)}
            </paper-tab>
          </ha-tabs>
        </app-header>
      </ha-app-layout>
      <div class="view">
        ${this.getView(e)}
      </div>
    `}getView(e){switch(e.page){case"general":return q`
          <alarm-view-general .hass=${this.hass} .narrow=${this.narrow} .path=${e}></alarm-view-general>
        `;case"sensors":return q`
          <alarm-view-sensors .hass=${this.hass} .narrow=${this.narrow} .path=${e}></alarm-view-sensors>
        `;case"codes":return q`
          <alarm-view-codes .hass=${this.hass} .narrow=${this.narrow} .path=${e}></alarm-view-codes>
        `;case"actions":return q`
          <alarm-view-actions .hass=${this.hass} .narrow=${this.narrow} .path=${e}></alarm-view-actions>
        `;default:return q`
          <ha-card header="Page not found">
            <div class="card-content">
              The page you are trying to reach cannot be found. Please select a page from the menu above to continue.
            </div>
          </ha-card>
        `}}handlePageSelected(e){const t=e.detail.item.getAttribute("page-name");t!==wi()?($e(0,$i(t)),this.requestUpdate()):scrollTo(0,0)}static get styles(){return h`
      ${bi} :host {
        color: var(--primary-text-color);
        --paper-card-header-color: var(--primary-text-color);
      }

      app-header,
      app-toolbar {
        background-color: var(--app-header-background-color);
        font-weight: 400;
        color: var(--app-header-text-color, white);
      }
      app-toolbar {
        height: var(--header-height);
      }

      ha-app-layout {
        display: block;
        z-index: 2;
      }

      app-toolbar [main-title] {
        margin-left: 20px;
      }

      ha-tabs {
        margin-left: max(env(safe-area-inset-left), 24px);
        margin-right: max(env(safe-area-inset-right), 24px);
        --paper-tabs-selection-bar-color: var(--accent-color, var(--accent-color, #fff));
        text-transform: uppercase;
      }

      .view {
        height: calc(100vh - 112px);
        display: flex;
        justify-content: center;
      }

      .view > * {
        width: 600px;
        max-width: 600px;
      }

      .view > *:last-child {
        margin-bottom: 20px;
      }

      .version {
        font-size: 14px;
        font-weight: 500;
        color: rgba(var(--rgb-text-primary-color), 0.9);
      }
    `}},s([he()],e.MyAlarmPanel.prototype,"hass",void 0),s([he({type:Boolean,reflect:!0})],e.MyAlarmPanel.prototype,"narrow",void 0),s([he()],e.MyAlarmPanel.prototype,"userConfig",void 0),e.MyAlarmPanel=s([de("alarm-panel")],e.MyAlarmPanel)}({});
