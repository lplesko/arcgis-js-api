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

define(["dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/global","dojo/io-query","./kernel","./lang","./config","./sniff","dojo/i18n!./nls/jsapi"],(function(e,r,t,n,o,a,i,s,p,l){var u={},c=s.defaults.io,f=/^[a-z][a-z0-9\+\-\.]*:/i,h=/^\s*http:/i,g=/^\s*https:/i,x=/:\d+$/,d=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i;u.isHTTP=function(e){var r=n.location.protocol;return null==e?"http:"===r||"https:"===r:e?"https:"===r:"http:"===r},u.getProtocolForWebResource=function(e){return u.isHTTP()?n.location.protocol:e?"https:":"http:"},u.urlToObject=function(e){var r={},n=new t(e),a=e.indexOf("?");return null===n.query?r={path:e,query:null}:(r.path=e.substring(0,a),r.query=o.queryToObject(n.query)),n.fragment&&(r.hash=n.fragment,null===n.query&&(r.path=r.path.substring(0,r.path.length-(n.fragment.length+1)))),r},u.getProxyUrl=function(r,t){var o,a,i,s,p=e.isString(r)?0===e.trim(r).toLowerCase().indexOf("https:"):r,f=c.proxyUrl,h=l.io.proxyNotSet;if(e.isString(r)&&(s=u.getProxyRule(r))&&(f=s.proxyUrl),!f)throw console.log(h),new Error(h);return p&&!1!==t&&0!==n.location.href.toLowerCase().indexOf("https:")&&(0!==(a=f).toLowerCase().indexOf("http")&&(a=u.getAbsoluteUrl(a)),a=a.replace(/^http:/i,"https:"),u.canUseXhr(a)&&(f=a,i=1)),(o=u.urlToObject(f))._xo=i,o},u.addProxy=function(r){var t,n,a,i=u.getProxyRule(r);return i?t=u.urlToObject(i.proxyUrl):c.alwaysUseProxy&&(t=u.getProxyUrl()),t&&(n=u.urlToObject(r),r=t.path+"?"+n.path,(a=o.objectToQuery(e.mixin(t.query||{},n.query)))&&(r+="?"+a)),r},u.addProxyRule=function(e){var r,t,n=e.urlPrefix=u.urlToObject(e.urlPrefix).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase(),o=c.proxyRules,a=o.length,i=a;for(r=0;r<a;r++){if(t=o[r].urlPrefix,0===n.indexOf(t)){if(n.length===t)return-1;i=r;break}0===t.indexOf(n)&&(i=r+1)}return o.splice(i,0,e),i},u.getProxyRule=function(e){var r,t,n=c.proxyRules,o=n.length,a=u.urlToObject(e).path.replace(/([^\/])$/,"$1/").replace(/^https?:\/\//gi,"").toLowerCase();for(r=0;r<o;r++)if(0===a.indexOf(n[r].urlPrefix)){t=n[r];break}return t},u.hasSameOrigin=function(r,o,a){r=r.toLowerCase(),o=o.toLowerCase();var i=n.location.href.toLowerCase();return r=0===r.indexOf("http")?new t(r):i=new t(i),o=0===o.indexOf("http")?new t(o):e.isString(i)?new t(i):i,(a||r.scheme===o.scheme)&&r.host===o.host&&r.port===o.port},u.canUseXhr=function(e,t){var n,o=!!p("esri-phonegap"),a=u.hasSameOrigin,i=c.corsEnabledServers,s=-1;return!o&&p("esri-cors")&&i&&i.length&&(o=r.some(i,(function(r,t){var o=!r||"object"!=typeof r||r instanceof RegExp?r:r.host;if(o instanceof RegExp){if(o.test(e))return s=t,!0}else if(o&&(n=0!==o.trim().toLowerCase().indexOf("http"),a(e,n?"http://"+o:o)||n&&a(e,"https://"+o)))return s=t,!0;return!1}))),t?s:o},u.getAbsoluteUrl=function(r){var t=u.getProtocolForWebResource();return e.isString(r)&&!f.test(r)?0===r.indexOf("//")?t+r:0===r.indexOf("/")?t+"//"+n.location.host+r:a._appBaseUrl+r:r},u.fixUrl=function(r){return r=e.trim(r),r=u.getAbsoluteUrl(r),r=(r=u.normalizeSlashes(r)).replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2"),r=u.downgradeToHTTP(r),r=u.upgradeToHTTPS(r)},u.normalize=function(e){return u.fixUrl(e)},u.normalizeSlashes=function(e){if(/^https?:\/\//i.test(e)){var r,t,n=e.indexOf("?");n>-1?(r=e.slice(0,n),t=e.slice(n+1)):r=e,e=(e=r.replace(/\/{2,}/g,"/")).replace("/","//"),t&&(e+="?"+t)}return e},u.downgradeToHTTP=function(e){return u.isHTTP(!1)&&g.test(e)&&u.hasSameOrigin(n.location.href,e,!0)&&!u.canUseXhr(e)?e.replace(g,"http:"):e},u.upgradeToHTTPS=function(r){var t=c.httpsDomains,o=u.isHTTP(!1),a=u.isHTTP(!0);if(!h.test(r))return r;var s,p=(r=e.trim(r)).indexOf("/",7);if(s=(s=-1===p?r:r.slice(0,p)).toLowerCase().slice(7),x.test(s)){if(!i.endsWith(s,":80"))return r;s=s.slice(0,-3),r=r.replace(":80","")}if(o&&s===n.location.host&&(!d.test(r)||!u.canUseXhr(r)))return r;var l=!1;if(a&&s===n.location.host)l=!0;else if(t)for(var f=0;f<t.length;f++){var g=t[f];if(s===g||i.endsWith(s,"."+g)){l=!0;break}}return l||!a||c.alwaysUseProxy||u.getProxyRule(r)||(l=!0),l&&(r=r.replace(h,"https:")),r};var b=l.widgets.popup,m=[{pattern:/^\s*(https?:\/\/([^\s]+))\s*$/i,label:b.NLS_moreInfo},{pattern:/^\s*(tel:([^\s]+))\s*$/i,label:"${hierPart}"},{pattern:/^\s*(mailto:([^\s]+))\s*$/i,label:"${hierPart}"},{pattern:/^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i,appName:"App Studio Player",label:b.NLS_openLinkInApp},{pattern:/^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i,appName:"Collector",label:b.NLS_openLinkInApp},{pattern:/^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i,appName:"Explorer",label:b.NLS_openLinkInApp},{pattern:/^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i,appName:"Navigator",label:b.NLS_openLinkInApp},{pattern:/^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i,appName:"Survey123",label:b.NLS_openLinkInApp},{pattern:/^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i,appName:"Trek2There",label:b.NLS_openLinkInApp},{pattern:/^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i,appName:"Workforce",label:b.NLS_openLinkInApp},{pattern:/^\s*(iform:\/\/([^\s]+))\s*$/i,appName:"iForm",label:b.NLS_openLinkInApp},{pattern:/^\s*(flow:\/\/([^\s]+))\s*$/i,appName:"FlowFinity",label:b.NLS_openLinkInApp},{pattern:/^\s*(lfmobile:\/\/([^\s]+))\s*$/i,appName:"Laserfische",label:b.NLS_openLinkInApp},{pattern:/^\s*(mspbi:\/\/([^\s]+))\s*$/i,appName:"Microsoft Power BI",label:b.NLS_openLinkInApp}];return u.getURIInfo=function(e){var t;return r.some(m,(function(r){return r.pattern.test(e)&&(t=r),!!t})),t},u.isKnownURI=function(e){return!!u.getURIInfo(e)},p("extend-esri")&&(e.mixin(a,u),a._getProxyUrl=u.getProxyUrl,a._getProxiedUrl=u.addProxy,a._hasSameOrigin=u.hasSameOrigin,a._canDoXOXHR=u.canUseXhr,a._getAbsoluteUrl=u.getAbsoluteUrl,a.fixUrl=u.fixUrl),u}));