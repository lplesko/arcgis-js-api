// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports","esri/urlUtils","dojo/_base/url"],(function(e,r,t,n){function a(e){return t.normalize(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.normalize=a,r.canUseXhr=function(e){return t.canUseXhr(e)},r.removeTrailingSlash=function(e){return e.replace(/\/+$/,"")};var i,l,o=Function("return this")();r.appUrl=new n(o.location),r.appBaseUrl=(i=r.appUrl.path,l=i.substring(0,i.lastIndexOf(i.split("/")[i.split("/").length-1])),r.appUrl.scheme+"://"+r.appUrl.host+(null!=r.appUrl.port?":"+r.appUrl.port:"")+l);var u=/^\s*file:/i,s=/^\s*[a-z][a-z0-9-+.]*:[^0-9]/i;function c(e){return"data:"===e.slice(0,5)}function f(e){return u.test(e)}function p(e){return v(e)||h(e)}function v(e){return e&&"/"===e[0]&&"/"===e[1]}function h(e){return s.test(e)}function d(e){return t.urlToObject(e)}function m(e){return"string"==typeof e?new n(g(e)):(e.scheme||(e.scheme=r.appUrl.scheme),e)}function U(e){if(c(e))return null;var r=e.indexOf("://");if(-1===r&&v(e))r=2;else{if(-1===r)return null;r+=3}var t=e.indexOf("/",r);return-1===t?e:e.slice(0,t)}function g(e,t,n){return void 0===t&&(t=r.appBaseUrl),v(e)?n&&n.preserveProtocolRelative?e:"http"===r.appUrl.scheme&&r.appUrl.authority===U(e).slice(2)?"http:"+e:"https:"+e:h(e)?e:y("/"===e[0]?function(e){var r=e.indexOf("//"),t=e.indexOf("/",r+2);return-1===t?e:e.slice(0,t)}(t):t,e)}function O(e,r,t){void 0===t&&(t=!1);var n=m(e),a=m(r);return!(!t&&n.scheme!==a.scheme)&&(n.host.toLowerCase()===a.host.toLowerCase()&&n.port===a.port)}function y(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(e&&e.length){var t=[];if(p(e[0])){var n=e[0],a=n.indexOf("//");t.push(n.slice(0,a+1)),f(e[0])&&(t[0]+="/"),e[0]=n.slice(a+2)}else"/"===e[0][0]&&t.push("");for(var i=e.reduce((function(e,r){return r?e.concat(r.split("/")):e}),[]),l=0;l<i.length;l++){var o=i[l];".."===o&&t.length>0?t.pop():!o||"."===o&&0!==t.length||t.push(o)}return t.join("/")}}r.isDataProtocol=c,r.isAbsolute=p,r.isProtocolRelative=v,r.urlToObject=d,r.getOrigin=U,r.makeAbsolute=g,r.hasSameOrigin=O,r.join=y,r.removeFile=function(e){var r=0;if(p(e)){var t=e.indexOf("//");-1!==t&&(r=t+2)}var n=e.lastIndexOf("/");return n<r?e:e.slice(0,n+1)},r.addProxy=function(e){return t.addProxy(e)},r.makeData=function(e){return e.isBase64?"data:"+e.mediaType+";base64,"+e.data:"data:"+e.mediaType+","+e.data};var x=/^data:(.*?)(;base64)?,(.*)$/;function b(e,r,t){if(!(r&&t&&e&&p(e)))return e;var n=e.indexOf("//"),a=e.indexOf("/",n+2),i=e.indexOf(":",n+2),l=Math.min(a<0?e.length:a,i<0?e.length:i);return e.slice(n+2,l).toLowerCase()!==r.toLowerCase()?e:""+e.slice(0,n+2)+t+e.slice(l)}function w(e,t,n){if(void 0===t&&(t=r.appBaseUrl),!p(e))return e;var i=a(e),l=i.toLowerCase(),o=a(t).toLowerCase().replace(/\/+$/,""),u=n?a(n).toLowerCase().replace(/\/+$/,""):null;if(u&&0!==o.indexOf(u))return e;for(var s=function(e,r,t){return-1===(t=e.indexOf(r,t))?e.length:t},c=s(l,"/",l.indexOf("//")+2),f=-1;l.slice(0,c+1)===o.slice(0,c)+"/"&&(f=c+1,c!==l.length);)c=s(l,"/",c+1);if(-1===f)return e;if(u&&f<u.length)return e;e=i.slice(f);var v=o.slice(f-1).replace(/[^/]+/g,"").length;if(v>0)for(var h=0;h<v;h++)e="../"+e;else e="./"+e;return e}r.dataComponents=function(e){var r=e.match(x);return r?{mediaType:r[1],isBase64:!!r[2],data:r[3]}:null},r.changeDomain=b,r.read=function(e,t){var n=t&&t.url&&t.url.path;return e&&n&&(e=g(e,n,{preserveProtocolRelative:!0})),function(e,t){if(!t||t.isPortal||!t.urlKey||!t.customBaseUrl)return e;var n=t.urlKey+"."+t.customBaseUrl;return O(r.appUrl,r.appUrl.scheme+"://"+n)?b(e,t.portalHostname,n):b(e,n,t.portalHostname)}(e,t&&t.portal)},r.write=function(e,r){if(!e)return e;!p(e)&&r&&r.blockedRelativeUrls&&r.blockedRelativeUrls.push(e);var t=g(e);if(r){var n=r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.rootPath||r.url&&r.url.path;n&&(t=w(t,n,n))!==e&&r.verifyItemRelativeUrls&&r.verifyItemRelativeUrls.writtenUrls.push(t)}return t=function(e,r){return r&&!r.isPortal&&r.urlKey&&r.customBaseUrl?b(e,r.urlKey+"."+r.customBaseUrl,r.portalHostname):e}(t,r&&r.portal)},r.makeRelative=w,r.removeQueryParameters=function(e){var r=d(e);return Object.keys(r.query||{}),r.path}}));