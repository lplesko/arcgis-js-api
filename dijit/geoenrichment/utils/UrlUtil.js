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

define(["dojo/_base/url","esri/config","esri/kernel","esri/urlUtils"],(function(r,e,t,n){var i={getDomain:function(r){if("string"!=typeof r)return null;var e=(r=r.replace(/^(http:\/\/|https:\/\/)/i,"")).indexOf("/");return e<0?r:r.substr(0,e)},getPortalUrl:function(r){if("string"!=typeof r)return null;var e=r;r=r.replace(/^(http:\/\/|https:\/\/)/i,"");var t=e.substr(0,e.indexOf(r));if(-1!==r.indexOf("/sharing"))return t+r.substr(0,r.indexOf("/sharing"));if(-1!==r.indexOf("/portal"))return t+r.substr(0,r.indexOf("/portal"))+"/portal";var n=r.indexOf("/");return t+(n<0?r:r.substr(0,n))},getProxyUrl:function(r){var t=e.defaults.io.proxyUrl;return t&&!/^http/i.test(t)&&(t=n.getAbsoluteUrl(t)),t&&r&&(t=i.toHttpsUrl(t)),t},registerCORS:function(r){var t=i.getDomain(r);t&&-1==e.defaults.io.corsEnabledServers.indexOf(t)&&e.defaults.io.corsEnabledServers.push(t),i._fixCORS()},_fixCORS:function(){e.defaults.io.corsEnabledServers=e.defaults.io.corsEnabledServers.filter((function(r){return!r.indexOf||0!==r.indexOf("null://")||(console.log("WARNING: incorrect CORS URL detected: "+r),!1)}))},indexOfQuery:function(r){var e=r.indexOf("?");if(e>=0){var t=r.substr(e+1);if(/^(http:\/\/|https:\/\/)/i.test(t)){var n=t.indexOf("?");e=n>=0?e+1+n:-1}}return e},removeQuery:function(r){var e=i.indexOfQuery(r);return e<0?r:r.substr(0,e)},addQueryPart:function(r,e){return r+(i.indexOfQuery(r)<0?"?":"&")+e},getVariableValue:function(r,e){if(r&&"string"==typeof e){var t=n.urlToObject(r);if(t.query){var i={};return Object.keys(t.query).forEach((function(r){i[r.toLowerCase()]=t.query[r]})),i[e.toLowerCase()]}}},addUrlVariable:function(r,e,t){return e=encodeURIComponent(e),t=encodeURIComponent(t),i.addQueryPart(r,e+"="+t)},securePortsMap:{80:"443",8080:"8443"},toHttpUrl:function(r){return!r||/^http/i.test(r)?r:"http://"+r},toHttpsUrl:function(e){if(e&&(e=i.toHttpUrl(e)),!e||!/^http:\/\//i.test(e))return e;var t=new r(e);e=e.replace(/^http/i,"https");var n=i.securePortsMap[t.port];return n&&(e=e.replace(":"+t.port,":"+n)),e},combine:function(r,e){if("number"==typeof e&&(e+=""),e){if(/^(http:\/\/|https:\/\/)/i.test(e)||!r)return e;if("/"!=e.charAt(0)&&(e="/"+e),1==e.length)return r;var t=r.length-1;"/"==r.charAt(t)&&(r=r.substr(0,t));var o=n.urlToObject(r);for(var u in(t=(r=i.removeQuery(r)).length-e.length)>=0&&r.substr(t).toLowerCase()==e.toLowerCase()&&(r=r.substr(0,t)),r+=e,o.query)i.addQueryPart(r,o.query[u])}return r},combineMulti:function(r){for(var e=r[0],t=1;t<r.length;t++)e=i.combine(e,r[t]);return e},openUrl:function(r,e){if(e)return window.open(r,"_blank");var t=window.open();return t.opener=null,t.referrer=null,t.location=r,t},isPageRunOnWebService:function(){return/^http/i.test(window.location.protocol)},getToken:function(r){var e=r&&t.id.findCredential(r)||t.id.credentials[0];return e&&e.token}};return i}));