/*! For license information please see removeModel.js.LICENSE.txt */
!function(){var t={7111:function(t,e,r){var n=r(9859),o=r(6733),i=r(9821),c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a function")}},7988:function(t,e,r){var n=r(9859),o=r(2359),i=r(9821),c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not a constructor")}},8505:function(t,e,r){var n=r(9859),o=r(6733),i=n.String,c=n.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw c("Can't set "+i(t)+" as a prototype")}},7728:function(t,e,r){var n=r(9859),o=r(1321),i=n.TypeError;t.exports=function(t,e){if(o(e,t))return t;throw i("Incorrect invocation")}},1176:function(t,e,r){var n=r(9859),o=r(5052),i=n.String,c=n.TypeError;t.exports=function(t){if(o(t))return t;throw c(i(t)+" is not an object")}},9540:function(t,e,r){var n=r(905),o=r(3231),i=r(9646),c=function(t){return function(e,r,c){var a,u=n(e),s=i(u),f=o(c,s);if(t&&r!=r){for(;s>f;)if((a=u[f++])!=a)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},1460:function(t,e,r){var n=r(4229),o=r(95),i=r(6358),c=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},1909:function(t,e,r){var n=r(5968);t.exports=n([].slice)},8760:function(t,e,r){var n=r(9859),o=r(3718),i=r(2359),c=r(5052),a=r(95)("species"),u=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===u||o(e.prototype))||c(e)&&null===(e=e[a]))&&(e=void 0)),void 0===e?u:e}},7501:function(t,e,r){var n=r(8760);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4575:function(t,e,r){var n=r(95)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[n]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},7079:function(t,e,r){var n=r(5968),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},1589:function(t,e,r){var n=r(9859),o=r(1601),i=r(6733),c=r(7079),a=r(95)("toStringTag"),u=n.Object,s="Arguments"==c(function(){return arguments}());t.exports=o?c:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=u(t),a))?r:s?c(e):"Object"==(n=c(e))&&i(e.callee)?"Arguments":n}},7081:function(t,e,r){var n=r(8270),o=r(4826),i=r(7933),c=r(1787);t.exports=function(t,e,r){for(var a=o(e),u=c.f,s=i.f,f=0;f<a.length;f++){var l=a[f];n(t,l)||r&&n(r,l)||u(t,l,s(e,l))}}},5762:function(t,e,r){var n=r(7400),o=r(1787),i=r(5358);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},5358:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},2324:function(t,e,r){"use strict";var n=r(9310),o=r(1787),i=r(5358);t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},7400:function(t,e,r){var n=r(4229);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:function(t,e,r){var n=r(9859),o=r(5052),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8639:function(t){t.exports="object"==typeof window},8983:function(t,e,r){var n=r(598),o=r(9859);t.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==o.Pebble},2023:function(t,e,r){var n=r(598);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},8801:function(t,e,r){var n=r(7079),o=r(9859);t.exports="process"==n(o.process)},263:function(t,e,r){var n=r(598);t.exports=/web0s(?!.*chrome)/i.test(n)},598:function(t,e,r){var n=r(1333);t.exports=n("navigator","userAgent")||""},6358:function(t,e,r){var n,o,i=r(9859),c=r(598),a=i.process,u=i.Deno,s=a&&a.versions||u&&u.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&c&&(!(n=c.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=c.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},3837:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:function(t,e,r){var n=r(9859),o=r(7933).f,i=r(5762),c=r(7487),a=r(2079),u=r(7081),s=r(6541);t.exports=function(t,e){var r,f,l,p,v,h=t.target,d=t.global,y=t.stat;if(r=d?n:y?n[h]||a(h,{}):(n[h]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(r,f))&&v.value:r[f],!s(d?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,f,p,t)}}},4229:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},3171:function(t,e,r){var n=r(7188),o=Function.prototype,i=o.apply,c=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?c.bind(i):function(){return c.apply(i,arguments)})},7636:function(t,e,r){var n=r(5968),o=r(7111),i=r(7188),c=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?c(t,e):function(){return t.apply(e,arguments)}}},7188:function(t,e,r){var n=r(4229);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},266:function(t,e,r){var n=r(7188),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},1805:function(t,e,r){var n=r(7400),o=r(8270),i=Function.prototype,c=n&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function(){}.name,s=a&&(!n||n&&c(i,"name").configurable);t.exports={EXISTS:a,PROPER:u,CONFIGURABLE:s}},5968:function(t,e,r){var n=r(7188),o=Function.prototype,i=o.bind,c=o.call,a=n&&i.bind(c,c);t.exports=n?function(t){return t&&a(t)}:function(t){return t&&function(){return c.apply(t,arguments)}}},1333:function(t,e,r){var n=r(9859),o=r(6733),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8830:function(t,e,r){var n=r(1589),o=r(5300),i=r(5495),c=r(95)("iterator");t.exports=function(t){if(null!=t)return o(t,c)||o(t,"@@iterator")||i[n(t)]}},8403:function(t,e,r){var n=r(9859),o=r(266),i=r(7111),c=r(1176),a=r(9821),u=r(8830),s=n.TypeError;t.exports=function(t,e){var r=arguments.length<2?u(t):e;if(i(r))return c(o(r,t));throw s(a(t)+" is not iterable")}},5300:function(t,e,r){var n=r(7111);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},9859:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},8270:function(t,e,r){var n=r(5968),o=r(2991),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},5977:function(t){t.exports={}},4665:function(t,e,r){var n=r(9859);t.exports=function(t,e){var r=n.console;r&&r.error&&(1==arguments.length?r.error(t):r.error(t,e))}},3777:function(t,e,r){var n=r(1333);t.exports=n("document","documentElement")},4394:function(t,e,r){var n=r(7400),o=r(4229),i=r(2635);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},9337:function(t,e,r){var n=r(9859),o=r(5968),i=r(4229),c=r(7079),a=n.Object,u=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==c(t)?u(t,""):a(t)}:a},8511:function(t,e,r){var n=r(5968),o=r(6733),i=r(5353),c=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},6407:function(t,e,r){var n,o,i,c=r(8694),a=r(9859),u=r(5968),s=r(5052),f=r(5762),l=r(8270),p=r(5353),v=r(4399),h=r(5977),d="Object already initialized",y=a.TypeError,m=a.WeakMap;if(c||p.state){var _=p.state||(p.state=new m),g=u(_.get),x=u(_.has),b=u(_.set);n=function(t,e){if(x(_,t))throw new y(d);return e.facade=t,b(_,t,e),e},o=function(t){return g(_,t)||{}},i=function(t){return x(_,t)}}else{var S=v("state");h[S]=!0,n=function(t,e){if(l(t,S))throw new y(d);return e.facade=t,f(t,S,e),e},o=function(t){return l(t,S)?t[S]:{}},i=function(t){return l(t,S)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return r}}}},1943:function(t,e,r){var n=r(95),o=r(5495),i=n("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},3718:function(t,e,r){var n=r(7079);t.exports=Array.isArray||function(t){return"Array"==n(t)}},6733:function(t){t.exports=function(t){return"function"==typeof t}},2359:function(t,e,r){var n=r(5968),o=r(4229),i=r(6733),c=r(1589),a=r(1333),u=r(8511),s=function(){},f=[],l=a("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),h=!p.exec(s),d=function(t){if(!i(t))return!1;try{return l(s,f,t),!0}catch(t){return!1}},y=function(t){if(!i(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return h||!!v(p,u(t))}catch(t){return!0}};y.sham=!0,t.exports=!l||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?y:d},6541:function(t,e,r){var n=r(4229),o=r(6733),i=/#|\.prototype\./,c=function(t,e){var r=u[a(t)];return r==f||r!=s&&(o(e)?n(e):!!e)},a=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=c.data={},s=c.NATIVE="N",f=c.POLYFILL="P";t.exports=c},5052:function(t,e,r){var n=r(6733);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},4231:function(t){t.exports=!1},9395:function(t,e,r){var n=r(9859),o=r(1333),i=r(6733),c=r(1321),a=r(6969),u=n.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&c(e.prototype,u(t))}},9003:function(t,e,r){var n=r(9859),o=r(7636),i=r(266),c=r(1176),a=r(9821),u=r(1943),s=r(9646),f=r(1321),l=r(8403),p=r(8830),v=r(7281),h=n.TypeError,d=function(t,e){this.stopped=t,this.result=e},y=d.prototype;t.exports=function(t,e,r){var n,m,_,g,x,b,S,E=r&&r.that,T=!(!r||!r.AS_ENTRIES),A=!(!r||!r.IS_ITERATOR),w=!(!r||!r.INTERRUPTED),O=o(e,E),R=function(t){return n&&v(n,"normal",t),new d(!0,t)},j=function(t){return T?(c(t),w?O(t[0],t[1],R):O(t[0],t[1])):w?O(t,R):O(t)};if(A)n=t;else{if(!(m=p(t)))throw h(a(t)+" is not iterable");if(u(m)){for(_=0,g=s(t);g>_;_++)if((x=j(t[_]))&&f(y,x))return x;return new d(!1)}n=l(t,m)}for(b=n.next;!(S=i(b,n)).done;){try{x=j(S.value)}catch(t){v(n,"throw",t)}if("object"==typeof x&&x&&f(y,x))return x}return new d(!1)}},7281:function(t,e,r){var n=r(266),o=r(1176),i=r(5300);t.exports=function(t,e,r){var c,a;o(t);try{if(!(c=i(t,"return"))){if("throw"===e)throw r;return r}c=n(c,t)}catch(t){a=!0,c=t}if("throw"===e)throw r;if(a)throw c;return o(c),r}},5495:function(t){t.exports={}},9646:function(t,e,r){var n=r(4237);t.exports=function(t){return n(t.length)}},4794:function(t,e,r){var n,o,i,c,a,u,s,f,l=r(9859),p=r(7636),v=r(7933).f,h=r(5795).set,d=r(2023),y=r(8983),m=r(263),_=r(8801),g=l.MutationObserver||l.WebKitMutationObserver,x=l.document,b=l.process,S=l.Promise,E=v(l,"queueMicrotask"),T=E&&E.value;T||(n=function(){var t,e;for(_&&(t=b.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},d||_||m||!g||!x?!y&&S&&S.resolve?((s=S.resolve(void 0)).constructor=S,f=p(s.then,s),c=function(){f(n)}):_?c=function(){b.nextTick(n)}:(h=p(h,l),c=function(){h(n)}):(a=!0,u=x.createTextNode(""),new g(n).observe(u,{characterData:!0}),c=function(){u.data=a=!a})),t.exports=T||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},4226:function(t,e,r){var n=r(9859);t.exports=n.Promise},3839:function(t,e,r){var n=r(6358),o=r(4229);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8694:function(t,e,r){var n=r(9859),o=r(6733),i=r(8511),c=n.WeakMap;t.exports=o(c)&&/native code/.test(i(c))},6485:function(t,e,r){"use strict";var n=r(7111),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},1787:function(t,e,r){var n=r(9859),o=r(7400),i=r(4394),c=r(7137),a=r(1176),u=r(9310),s=n.TypeError,f=Object.defineProperty,l=Object.getOwnPropertyDescriptor;e.f=o?c?function(t,e,r){if(a(t),e=u(e),a(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=l(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return f(t,e,r)}:f:function(t,e,r){if(a(t),e=u(e),a(r),i)try{return f(t,e,r)}catch(t){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},7933:function(t,e,r){var n=r(7400),o=r(266),i=r(9195),c=r(5358),a=r(905),u=r(9310),s=r(8270),f=r(4394),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=u(e),f)try{return l(t,e)}catch(t){}if(s(t,e))return c(!o(i.f,t,e),t[e])}},8151:function(t,e,r){var n=r(140),o=r(3837).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},894:function(t,e){e.f=Object.getOwnPropertySymbols},1321:function(t,e,r){var n=r(5968);t.exports=n({}.isPrototypeOf)},140:function(t,e,r){var n=r(5968),o=r(8270),i=r(905),c=r(9540).indexOf,a=r(5977),u=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,f=[];for(r in n)!o(a,r)&&o(n,r)&&u(f,r);for(;e.length>s;)o(n,r=e[s++])&&(~c(f,r)||u(f,r));return f}},9195:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},6540:function(t,e,r){var n=r(5968),o=r(1176),i=r(8505);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},4059:function(t,e,r){"use strict";var n=r(1601),o=r(1589);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2914:function(t,e,r){var n=r(9859),o=r(266),i=r(6733),c=r(5052),a=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!c(n=o(r,t)))return n;if(i(r=t.valueOf)&&!c(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!c(n=o(r,t)))return n;throw a("Can't convert object to primitive value")}},4826:function(t,e,r){var n=r(1333),o=r(5968),i=r(8151),c=r(894),a=r(1176),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(a(t)),r=c.f;return r?u(e,r(t)):e}},4624:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},2391:function(t,e,r){var n=r(1176),o=r(5052),i=r(6485);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},3358:function(t){var e=function(){this.head=null,this.tail=null};e.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=e},8787:function(t,e,r){var n=r(7487);t.exports=function(t,e,r){for(var o in e)n(t,o,e[o],r);return t}},7487:function(t,e,r){var n=r(9859),o=r(6733),i=r(8270),c=r(5762),a=r(2079),u=r(8511),s=r(6407),f=r(1805).CONFIGURABLE,l=s.get,p=s.enforce,v=String(String).split("String");(t.exports=function(t,e,r,u){var s,l=!!u&&!!u.unsafe,h=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet,y=u&&void 0!==u.name?u.name:e;o(r)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||f&&r.name!==y)&&c(r,"name",y),(s=p(r)).source||(s.source=v.join("string"==typeof y?y:""))),t!==n?(l?!d&&t[e]&&(h=!0):delete t[e],h?t[e]=r:c(t,e,r)):h?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||u(this)}))},8885:function(t,e,r){var n=r(9859).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},2079:function(t,e,r){var n=r(9859),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},1832:function(t,e,r){"use strict";var n=r(1333),o=r(1787),i=r(95),c=r(7400),a=i("species");t.exports=function(t){var e=n(t),r=o.f;c&&e&&!e[a]&&r(e,a,{configurable:!0,get:function(){return this}})}},4555:function(t,e,r){var n=r(1787).f,o=r(8270),i=r(95)("toStringTag");t.exports=function(t,e,r){t&&!r&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:e})}},4399:function(t,e,r){var n=r(3036),o=r(1441),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5353:function(t,e,r){var n=r(9859),o=r(2079),i="__core-js_shared__",c=n[i]||o(i,{});t.exports=c},3036:function(t,e,r){var n=r(4231),o=r(5353);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.3",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},7942:function(t,e,r){var n=r(1176),o=r(7988),i=r(95)("species");t.exports=function(t,e){var r,c=n(t).constructor;return void 0===c||null==(r=n(c)[i])?e:o(r)}},5795:function(t,e,r){var n,o,i,c,a=r(9859),u=r(3171),s=r(7636),f=r(6733),l=r(8270),p=r(4229),v=r(3777),h=r(1909),d=r(2635),y=r(2023),m=r(8801),_=a.setImmediate,g=a.clearImmediate,x=a.process,b=a.Dispatch,S=a.Function,E=a.MessageChannel,T=a.String,A=0,w={};try{n=a.location}catch(t){}var O=function(t){if(l(w,t)){var e=w[t];delete w[t],e()}},R=function(t){return function(){O(t)}},j=function(t){O(t.data)},P=function(t){a.postMessage(T(t),n.protocol+"//"+n.host)};_&&g||(_=function(t){var e=h(arguments,1);return w[++A]=function(){u(f(t)?t:S(t),void 0,e)},o(A),A},g=function(t){delete w[t]},m?o=function(t){x.nextTick(R(t))}:b&&b.now?o=function(t){b.now(R(t))}:E&&!y?(c=(i=new E).port2,i.port1.onmessage=j,o=s(c.postMessage,c)):a.addEventListener&&f(a.postMessage)&&!a.importScripts&&n&&"file:"!==n.protocol&&!p(P)?(o=P,a.addEventListener("message",j,!1)):o="onreadystatechange"in d("script")?function(t){v.appendChild(d("script")).onreadystatechange=function(){v.removeChild(this),O(t)}}:function(t){setTimeout(R(t),0)}),t.exports={set:_,clear:g}},3231:function(t,e,r){var n=r(3329),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},905:function(t,e,r){var n=r(9337),o=r(8885);t.exports=function(t){return n(o(t))}},3329:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},4237:function(t,e,r){var n=r(3329),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},2991:function(t,e,r){var n=r(9859),o=r(8885),i=n.Object;t.exports=function(t){return i(o(t))}},2066:function(t,e,r){var n=r(9859),o=r(266),i=r(5052),c=r(9395),a=r(5300),u=r(2914),s=r(95),f=n.TypeError,l=s("toPrimitive");t.exports=function(t,e){if(!i(t)||c(t))return t;var r,n=a(t,l);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||c(r))return r;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},9310:function(t,e,r){var n=r(2066),o=r(9395);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1601:function(t,e,r){var n={};n[r(95)("toStringTag")]="z",t.exports="[object z]"===String(n)},9821:function(t,e,r){var n=r(9859).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},1441:function(t,e,r){var n=r(5968),o=0,i=Math.random(),c=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},6969:function(t,e,r){var n=r(3839);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7137:function(t,e,r){var n=r(7400),o=r(4229);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},95:function(t,e,r){var n=r(9859),o=r(3036),i=r(8270),c=r(1441),a=r(3839),u=r(6969),s=o("wks"),f=n.Symbol,l=f&&f.for,p=u?f:f&&f.withoutSetter||c;t.exports=function(t){if(!i(s,t)||!a&&"string"!=typeof s[t]){var e="Symbol."+t;a&&i(f,t)?s[t]=f[t]:s[t]=u&&l?l(e):p(e)}return s[t]}},8178:function(t,e,r){"use strict";var n=r(3103),o=r(9859),i=r(4229),c=r(3718),a=r(5052),u=r(2991),s=r(9646),f=r(2324),l=r(7501),p=r(1460),v=r(95),h=r(6358),d=v("isConcatSpreadable"),y=9007199254740991,m="Maximum allowed index exceeded",_=o.TypeError,g=h>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),x=p("concat"),b=function(t){if(!a(t))return!1;var e=t[d];return void 0!==e?!!e:c(t)};n({target:"Array",proto:!0,forced:!g||!x},{concat:function(t){var e,r,n,o,i,c=u(this),a=l(c,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(b(i=-1===e?c:arguments[e])){if(p+(o=s(i))>y)throw _(m);for(r=0;r<o;r++,p++)r in i&&f(a,p,i[r])}else{if(p>=y)throw _(m);f(a,p++,i)}return a.length=p,a}})},8188:function(t,e,r){var n=r(1601),o=r(7487),i=r(4059);n||o(Object.prototype,"toString",i,{unsafe:!0})},3439:function(t,e,r){"use strict";var n,o,i,c,a=r(3103),u=r(4231),s=r(9859),f=r(1333),l=r(266),p=r(4226),v=r(7487),h=r(8787),d=r(6540),y=r(4555),m=r(1832),_=r(7111),g=r(6733),x=r(5052),b=r(7728),S=r(8511),E=r(9003),T=r(4575),A=r(7942),w=r(5795).set,O=r(4794),R=r(2391),j=r(4665),P=r(6485),C=r(4624),L=r(3358),I=r(6407),N=r(6541),M=r(95),U=r(8639),B=r(8801),D=r(6358),G=M("species"),k="Promise",F=I.getterFor(k),Y=I.set,q=I.getterFor(k),H=p&&p.prototype,Q=p,z=H,V=s.TypeError,K=s.document,W=s.process,X=P.f,J=X,$=!!(K&&K.createEvent&&s.dispatchEvent),Z=g(s.PromiseRejectionEvent),tt="unhandledrejection",et=!1,rt=N(k,(function(){var t=S(Q),e=t!==String(Q);if(!e&&66===D)return!0;if(u&&!z.finally)return!0;if(D>=51&&/native code/.test(t))return!1;var r=new Q((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(r.constructor={})[G]=n,!(et=r.then((function(){}))instanceof n)||!e&&U&&!Z})),nt=rt||!T((function(t){Q.all(t).catch((function(){}))})),ot=function(t){var e;return!(!x(t)||!g(e=t.then))&&e},it=function(t,e){var r,n,o,i=e.value,c=1==e.state,a=c?t.ok:t.fail,u=t.resolve,s=t.reject,f=t.domain;try{a?(c||(2===e.rejection&&ft(e),e.rejection=1),!0===a?r=i:(f&&f.enter(),r=a(i),f&&(f.exit(),o=!0)),r===t.promise?s(V("Promise-chain cycle")):(n=ot(r))?l(n,r,u,s):u(r)):s(i)}catch(t){f&&!o&&f.exit(),s(t)}},ct=function(t,e){t.notified||(t.notified=!0,O((function(){for(var r,n=t.reactions;r=n.get();)it(r,t);t.notified=!1,e&&!t.rejection&&ut(t)})))},at=function(t,e,r){var n,o;$?((n=K.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),s.dispatchEvent(n)):n={promise:e,reason:r},!Z&&(o=s["on"+t])?o(n):t===tt&&j("Unhandled promise rejection",r)},ut=function(t){l(w,s,(function(){var e,r=t.facade,n=t.value;if(st(t)&&(e=C((function(){B?W.emit("unhandledRejection",n,r):at(tt,r,n)})),t.rejection=B||st(t)?2:1,e.error))throw e.value}))},st=function(t){return 1!==t.rejection&&!t.parent},ft=function(t){l(w,s,(function(){var e=t.facade;B?W.emit("rejectionHandled",e):at("rejectionhandled",e,t.value)}))},lt=function(t,e,r){return function(n){t(e,n,r)}},pt=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,ct(t,!0))},vt=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw V("Promise can't be resolved itself");var n=ot(e);n?O((function(){var r={done:!1};try{l(n,e,lt(vt,r,t),lt(pt,r,t))}catch(e){pt(r,e,t)}})):(t.value=e,t.state=1,ct(t,!1))}catch(e){pt({done:!1},e,t)}}};if(rt&&(z=(Q=function(t){b(this,z),_(t),l(n,this);var e=F(this);try{t(lt(vt,e),lt(pt,e))}catch(t){pt(e,t)}}).prototype,(n=function(t){Y(this,{type:k,done:!1,notified:!1,parent:!1,reactions:new L,rejection:!1,state:0,value:void 0})}).prototype=h(z,{then:function(t,e){var r=q(this),n=X(A(this,Q));return r.parent=!0,n.ok=!g(t)||t,n.fail=g(e)&&e,n.domain=B?W.domain:void 0,0==r.state?r.reactions.add(n):O((function(){it(n,r)})),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n,e=F(t);this.promise=t,this.resolve=lt(vt,e),this.reject=lt(pt,e)},P.f=X=function(t){return t===Q||t===i?new o(t):J(t)},!u&&g(p)&&H!==Object.prototype)){c=H.then,et||(v(H,"then",(function(t,e){var r=this;return new Q((function(t,e){l(c,r,t,e)})).then(t,e)}),{unsafe:!0}),v(H,"catch",z.catch,{unsafe:!0}));try{delete H.constructor}catch(t){}d&&d(H,z)}a({global:!0,wrap:!0,forced:rt},{Promise:Q}),y(Q,k,!1,!0),m(k),i=f(k),a({target:k,stat:!0,forced:rt},{reject:function(t){var e=X(this);return l(e.reject,void 0,t),e.promise}}),a({target:k,stat:!0,forced:u||rt},{resolve:function(t){return R(u&&this===i?Q:this,t)}}),a({target:k,stat:!0,forced:nt},{all:function(t){var e=this,r=X(e),n=r.resolve,o=r.reject,i=C((function(){var r=_(e.resolve),i=[],c=0,a=1;E(t,(function(t){var u=c++,s=!1;a++,l(r,e,t).then((function(t){s||(s=!0,i[u]=t,--a||n(i))}),o)})),--a||n(i)}));return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=X(e),n=r.reject,o=C((function(){var o=_(e.resolve);E(t,(function(t){l(o,e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}})},7609:function(t,e,r){var n=r(7425).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new w(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=E(c,r);if(a){if(a===v)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var v={};function h(){}function d(){}function y(){}var m={};f(m,a,(function(){return this}));var _=Object.getPrototypeOf,g=_&&_(_(O([])));g&&g!==r&&i.call(g,a)&&(m=g);var x=y.prototype=h.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,c,a,u){var s=p(t[o],t,c);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=y,f(x,"constructor",y),f(y,"constructor",d),d.displayName=f(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},b(S.prototype),f(S.prototype,u,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(x),f(x,s,"Generator"),f(x,a,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},7425:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},2841:function(t,e,r){var n=r(7609)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function e(e){return function(){var r=this,n=arguments;return new Promise((function(o,i){var c=e.apply(r,n);function a(e){t(c,o,i,a,u,"next",e)}function u(e){t(c,o,i,a,u,"throw",e)}a(void 0)}))}}var n,o=r(2841),i=r.n(o);r(8178),function(t){t.ASSET_STATUS="_dbupdate/_monitor/_asset/+/status",t.ASSET_STATUS_PLATFORM="_dbupdate/_monitor/_asset/+/status/_platform",t.ASSET_LOCATION="_dbupdate/_monitor/_asset/+/location",t.ASSET_LOCATION_PLATFORM="_dbupdate/_monitor/_asset/+/location/_platform",t.ASSET_LOCATION_AND_STATUS="_dbupdate/_monitor/_asset/+/locationAndStatus",t.ASSET_LOCATION_AND_STATUS_PLATFORM="_dbupdate/_monitor/_asset/+/locationAndStatus/_platform",t.AREA_STATUS="_dbupdate/_monitor/_area/+/status",t.AREA_STATUS_PLATFORM="_dbupdate/_monitor/_area/+/status/_platform",t.AREA_LOCATION="_dbupdate/_monitor/_area/+/location",t.AREA_LOCATION_PLATFORM="_dbupdate/_monitor/_area/+/location/_platform",t.EVENTS="_dbupdate/_monitor/_events",t.EVENTS_PLATFORM="_dbupdate/_monitor/_events/_platform",t.ASSET_COMMENTS="_dbupdate/_monitor/_asset_comments"}(n||(n={}));var c,a,u,s,f,l,p,v;!function(t){t.FATAL="fatal",t.ERROR="error",t.WARN="warn",t.INFO="info",t.DEBUG="debug",t.TRACE="trace"}(c||(c={})),function(t){t.ACTIONS="actions",t.ACTION_HISTORY="action_history",t.ACTION_TYPES="action_types",t.AREAS="areas",t.AREA_HISTORY="area_history",t.AREA_TYPES="area_types",t.ASSETS="assets",t.ASSET_COMMENTS="asset_comments",t.ASSET_HISTORY="_asset_history",t.ASSET_IMAGE_HISTORY="asset_image_history",t.ASSET_TREES="asset_trees",t.ASSET_TYPES="asset_types",t.ASSET_TYPE_TREE="asset_type_tree",t.EVENTS="events",t.EVENT_HISTORY="event_history",t.EVENT_TYPES="event_types",t.FORGOT_PASSWORD_REQUESTS="forgot_password_requests",t.GROUPS="groups",t.HEATMAP_REPORTS="heatmap_reports",t.LOGS="logs",t.MIGRATIONS="migrations",t.MODELS="models",t.JOBS="jobs",t.NIMBELINK_DATA_AUDIT_TRAIL="nimbelink_data_audit_trail",t.REPORTS="reports",t.DASHBOARDS="dashboards",t.RULES="rules",t.RULE_TYPES="rule_types",t.SUBSCRIPTIONS="subscriptions",t.ROLES="roles",t.ACTION_TYPES_GROUPS="action_types_groups",t.AREA_TYPES_GROUPS="area_types_groups",t.ASSET_TYPES_GROUPS="asset_types_groups",t.EVENT_TYPES_GROUPS="event_types_groups",t.RULE_TYPES_GROUPS="rule_types_groups",t.DASHBOARDS_GROUPS="dashboards_groups",t.SYSTEM_INFO="system_info",t.NEW_USER_ONBOARDING_REQUESTS="new_user_onboarding_requests",t.ADAPTER_CONFIG="adapter_config",t.CUSTOM_SETTINGS="custom_settings",t.PIPELINES="pipelines"}(a||(a={})),function(t){t.ACCESS_TOKEN_CACHE="AccessTokenCache",t.AREA_TYPE_SCHEMA_CACHE="AreaTypeSchemaCache",t.ASSET_TYPE_CACHE="AssetTypeCache",t.USER_INFO_CACHE="UserInfoCache",t.USER_ROLES_CACHE="UserRolesCache"}(u||(u={})),function(t){t.OVERWRITE="overwrite",t.MERGE="merge"}(s||(s={})),function(t){t.NO="no",t.ALL="all",t.CUSTOM="custom"}(f||(f={})),c.DEBUG,c.DEBUG,c.DEBUG,c.DEBUG,c.DEBUG,s.MERGE,c.DEBUG,(v=l||(l={})).LOCAL="local",v.GOOGLE="google",v.S3="s3",function(t){t.INBOX="inbox",t.OUTBOX="outbox",t.SANDBOX="sandbox"}(p||(p={})),r(8188),r(3439);var h=function(t,e,r){return log("URI from inside bucket",ClearBlade.URI),fetch("".concat(ClearBlade.URI,"/api/v/4/bucket_sets/").concat(r,"/").concat(t),{method:"DELETE",headers:{"ClearBlade-UserToken":e}})},d=function(t){return(e=ClearBlade.Deployment().delete,function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return new Promise((function(t,o){e.call.apply(e,[r].concat(n,[function(r,i){console.log({err:r},{args:n},{response:i},{f:e}),t("ok for now"),r&&o(r),t(i)}]))}))})(t);var e,r};function y(){return(y=e(i().mark((function t(e,r){var n,o,c,u,s,f,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ClearBlade.init({request:e}),console.log("URI: ",ClearBlade.URI),n=e.params.id,o=ClearBladeAsync.Collection({collectionName:a.MODELS}),c=ClearBladeAsync.Collection({collectionName:a.JOBS}),t.next=7,o.fetch(ClearBladeAsync.Query().equalTo("id",n)).catch(r.error);case 7:if(u=t.sent.DATA[0],s=u.name,f=u.is_history,l=u.job_name){t.next=19;break}return t.next=14,c.fetch(ClearBladeAsync.Query().equalTo("base_model_id",n));case 14:if(t.t0=t.sent.DATA.length,0===t.t0){t.next=17;break}r.error("Can't delete a model used as a base model in a training job.");case 17:return t.next=19,d(s).then((function(){return h(s,e.userToken,e.systemKey)})).then((function(){return o.remove(ClearBladeAsync.Query().equalTo("id",n))})).then(r.success).catch(r.error);case 19:if(f){t.next=22;break}return t.next=22,d(s).then((function(){return h(s,e.userToken,e.systemKey)})).then((function(){return o.remove(ClearBladeAsync.Query().equalTo("id",n))})).then((function(){return c.fetch(ClearBladeAsync.Query().equalTo("name",l))})).then((function(t){if(0!==t.DATA.length){var e=t.DATA[0],r=e.trained_model_ids.filter((function(t){return t!==n}));return c.update(ClearBladeAsync.Query().equalTo("id",e.id),{trained_model_ids:r})}})).then(r.success).catch(r.error);case 22:return t.next=24,o.fetch(ClearBladeAsync.Query().equalTo("name",s).equalTo("is_history",!0));case 24:if(1!==t.sent.DATA.length){t.next=30;break}return t.next=28,d(s).then((function(){return h(s,e.userToken,e.systemKey)})).then((function(){return o.remove(ClearBladeAsync.Query().equalTo("id",n))})).then((function(){return c.update(ClearBladeAsync.Query().equalTo("name",l),{trained_model_ids:[]})})).then(r.success).catch(r.error);case 28:t.next=32;break;case 30:return t.next=32,o.remove(ClearBladeAsync.Query().equalTo("id",n)).then((function(){return c.fetch(ClearBladeAsync.Query().equalTo("name",l))})).then((function(t){if(0!==t.DATA.length){var e=t.DATA[0],r=e.trained_model_ids.filter((function(t){return t!==n}));return c.update(ClearBladeAsync.Query().equalTo("id",e.id),{trained_model_ids:r})}})).then(r.success).catch(r.error);case 32:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.g.removeModel=function(t,e){return y.apply(this,arguments)}}()}();