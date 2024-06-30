"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[218],{7992:function(e,t,n){n.r(t),n.d(t,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(){function e(e,t,n){var i=this;this.endVal=t,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){i.startTime||(i.startTime=e);var t=e-i.startTime;i.remaining=i.duration-t,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(t,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(t,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(t/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),t<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(e){var t,n,r,o=(Math.abs(e).toFixed(i.options.decimalPlaces)+"").split(".");if(t=o[0],n=o.length>1?i.options.decimal+o[1]:"",i.options.useGrouping){r="";for(var a=3,s=0,l=0,u=t.length;l<u;++l)i.options.useIndianSeparators&&4===l&&(a=2,s=1),0!==l&&s%a==0&&(r=i.options.separator+r),s++,r=t[u-l-1]+r;t=r}return i.options.numerals&&i.options.numerals.length&&(t=t.replace(/[0-9]/g,function(e){return i.options.numerals[+e]}),n=n.replace(/[0-9]/g,function(e){return i.options.numerals[+e]})),(e<0?"-":"")+i.options.prefix+t+n+i.options.suffix},this.easeOutExpo=function(e,t,n,r){return n*(1-Math.pow(2,-10*e/r))*1024/1023+t},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,n=e.el.getBoundingClientRect(),r=n.top+window.pageYOffset,i=n.top+n.height+window.pageYOffset;i<t&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||r>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var n=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},6648:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(5601),i=n.n(r)},8173:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(9920),i=n(1452),o=n(7437),a=i._(n(2265)),s=r._(n(4887)),l=r._(n(8321)),u=n(497),c=n(7103),f=n(3938);n(2301);let d=n(291),p=r._(n(1241)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,n,r,i,o,a){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:s,width:l,decoding:u,className:c,style:f,fetchPriority:d,placeholder:p,loading:h,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:S,setShowAltText:O,sizesInput:E,onLoad:j,onError:V,...x}=e;return(0,o.jsx)("img",{...x,...g(d),loading:h,width:l,height:s,decoding:u,"data-nimg":b?"fill":"1",className:c,style:f,sizes:i,srcSet:r,src:n,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(V&&(e.src=e.src),e.complete&&m(e,p,v,w,S,y,E))},[n,p,v,w,S,V,y,E,t]),onLoad:e=>{m(e.currentTarget,p,v,w,S,y,E)},onError:e=>{O(!0),"empty"!==p&&S(!0),V&&V(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&s.default.preload?(s.default.preload(n.src,r),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,a.forwardRef)((e,t)=>{let n=(0,a.useContext)(d.RouterContext),r=(0,a.useContext)(f.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=h||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:s,onLoadingComplete:l}=e,m=(0,a.useRef)(s);(0,a.useEffect)(()=>{m.current=s},[s]);let g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let[v,w]=(0,a.useState)(!1),[S,O]=(0,a.useState)(!1),{props:E,meta:j}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:S});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...E,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:O,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:E}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2901:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(9920)._(n(2265)).default.createContext({})},687:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},497:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),n(2301);let r=n(1564),i=n(7103);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var n;let s,l,u,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:h,className:m,quality:g,width:y,height:b,fill:v=!1,style:w,overrideSrc:S,onLoad:O,onLoadingComplete:E,placeholder:j="empty",blurDataURL:V,fetchPriority:x,layout:P,objectFit:_,objectPosition:C,lazyBoundary:A,lazyRoot:R,...F}=e,{imgConf:M,showAltText:I,blurComplete:z,defaultLoader:D}=t,k=M||i.imageConfigDefault;if("allSizes"in k)s=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);s={...k,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=F.loader||D;delete F.loader,delete F.srcSet;let T="__next_img_default"in N;if(T){if("custom"===s.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:n,...r}=t;return e(r)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!f&&(f=t)}let U="",G=a(y),L=a(b);if("object"==typeof(n=c)&&(o(n)||void 0!==n.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,V=V||e.blurDataURL,U=e.src,!v){if(G||L){if(G&&!L){let t=G/e.width;L=Math.round(e.height*t)}else if(!G&&L){let t=L/e.height;G=Math.round(e.width*t)}}else G=e.width,L=e.height}}let B=!p&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:U)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,B=!1),s.unoptimized&&(d=!0),T&&c.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(d=!0),p&&(x="high");let q=a(g),Y=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:C}:{},I?{}:{color:"transparent"},w),H=z||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:G,heightInt:L,blurWidth:l,blurHeight:u,blurDataURL:V||"",objectFit:Y.objectFit})+'")':'url("'+j+'")',W=H?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},$=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:a,loader:s}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,r)=>s({config:t,src:n,quality:o,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:s({config:t,src:n,quality:o,width:l[c]})}}({config:s,src:c,unoptimized:d,width:G,quality:q,sizes:f,loader:N});return{props:{...F,loading:B?"lazy":h,fetchPriority:x,width:G,height:L,decoding:"async",className:m,style:{...Y,...W},sizes:$.sizes,srcSet:$.srcSet,src:S||$.src},meta:{unoptimized:d,priority:p,placeholder:j,fill:v}}}},8321:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},defaultHead:function(){return f}});let r=n(9920),i=n(1452),o=n(7437),a=i._(n(2265)),s=r._(n(5960)),l=n(2901),u=n(6590),c=n(687);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(2301);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!a)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,a.useContext)(l.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return(0,o.jsx)(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1564:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:a}=e,s=r?40*r:t,l=i?40*i:n,u=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3938:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(9920)._(n(2265)),i=n(7103),o=r.default.createContext(i.imageConfigDefault)},7103:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return s}});let r=n(9920),i=n(497),o=n(8173),a=r._(n(1241));function s(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=o.Image},1241:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},5960:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(2265),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,a=i?()=>{}:r.useEffect;function s(e){let{headManager:t,reduceComponentsToState:n}=e;function s(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),s()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7095:function(e,t,n){var r=n(2265),i=n(7992);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){!function(e,t,n){var r;(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var c="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function f(e){var t=r.useRef(e);return c(function(){t.current=e}),r.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current.apply(void 0,n)},[])}var d=function(e,t){var n=t.decimal,r=t.decimals,o=t.duration,a=t.easingFn,s=t.end,l=t.formattingFn,u=t.numerals,c=t.prefix,f=t.separator,d=t.start,p=t.suffix,h=t.useEasing,m=t.useGrouping,g=t.useIndianSeparators,y=t.enableScrollSpy,b=t.scrollSpyDelay,v=t.scrollSpyOnce,w=t.plugin;return new i.CountUp(e,s,{startVal:d,duration:o,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:p,plugin:w,useEasing:h,useIndianSeparators:g,useGrouping:m,enableScrollSpy:y,scrollSpyDelay:b,scrollSpyOnce:v})},p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},m=function(e){var t=Object.fromEntries(Object.entries(e).filter(function(e){return void 0!==(function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],l=!0,u=!1;try{for(o=(n=n.call(e)).next;!(l=(r=o.call(n)).done)&&(s.push(r.value),2!==s.length);l=!0);}catch(e){u=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return s}}(e,2)||function(e,t){if(e){if("string"==typeof e)return u(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[1]})),n=r.useMemo(function(){return a(a({},h),t)},[e]),i=n.ref,o=n.startOnMount,s=n.enableReinitialize,c=n.delay,m=n.onEnd,g=n.onStart,y=n.onPauseResume,b=n.onReset,v=n.onUpdate,w=l(n,p),S=r.useRef(),O=r.useRef(),E=r.useRef(!1),j=f(function(){return d("string"==typeof i?i:i.current,w)}),V=f(function(e){var t=S.current;if(t&&!e)return t;var n=j();return S.current=n,n}),x=f(function(){var e=function(){return V(!0).start(function(){null==m||m({pauseResume:P,reset:_,start:A,update:C})})};c&&c>0?O.current=setTimeout(e,1e3*c):e(),null==g||g({pauseResume:P,reset:_,update:C})}),P=f(function(){V().pauseResume(),null==y||y({reset:_,start:A,update:C})}),_=f(function(){V().el&&(O.current&&clearTimeout(O.current),V().reset(),null==b||b({pauseResume:P,start:A,update:C}))}),C=f(function(e){V().update(e),null==v||v({pauseResume:P,reset:_,start:A})}),A=f(function(){_(),x()}),R=f(function(e){o&&(e&&_(),x())});return r.useEffect(function(){E.current?s&&R(!0):(E.current=!0,R())},[s,E,R,c,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),r.useEffect(function(){return function(){_()}},[_]),{start:A,pauseResume:P,reset:_,update:C,getCountUp:V}},g=["className","redraw","containerProps","children","style"];t.ZP=function(e){var t=e.className,n=e.redraw,i=e.containerProps,o=e.children,u=e.style,c=l(e,g),d=r.useRef(null),p=r.useRef(!1),h=m(a(a({},c),{},{ref:d,startOnMount:"function"!=typeof o||0===e.delay,enableReinitialize:!1})),y=h.start,b=h.reset,v=h.update,w=h.pauseResume,S=h.getCountUp,O=f(function(){y()}),E=f(function(t){e.preserveValue||b(),v(t)}),j=f(function(){if("function"==typeof e.children&&!(d.current instanceof Element)){console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');return}S()});r.useEffect(function(){j()},[j]),r.useEffect(function(){p.current&&E(e.end)},[e.end,E]);var V=n&&e;return(r.useEffect(function(){n&&p.current&&O()},[O,n,V]),r.useEffect(function(){!n&&p.current&&O()},[O,n,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),r.useEffect(function(){p.current=!0},[]),"function"==typeof o)?o({countUpRef:d,start:y,reset:b,update:v,pauseResume:w,getCountUp:S}):r.createElement("span",s({className:t,ref:d,style:u},i),void 0!==e.start?S().formattingFn(e.start):"")}}}]);