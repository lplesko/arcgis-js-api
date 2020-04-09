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

define(["dojo/_base/declare","dojo/_base/config","dojo/_base/connect","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/json","dojo/has","../Evented","../kernel","../lang","../request","../deferredUtils","../urlUtils","../SpatialReference","../geometry/Extent"],(function(t,e,i,s,n,a,r,h,o,l,c,u,d,f,p){var _=t([h],{declaredClass:"esri.layers.Layer",_eventMap:{error:["error"],load:["layer"],"opacity-change":["opacity"],"update-end":["error"],"visibility-change":["visible"]},constructor:function(t,e){if(this._attrs={},t&&s.isString(t)?this._url=d.urlToObject(this.url=d.normalize(t)):(this.url=this._url=null,(e=e||t)&&(e.layerDefinition||e.query)&&(e=null)),this.spatialReference=new f(4326),this.initialExtent=new p(-180,-90,180,90,new f(4326)),this._map=this._div=null,this.normalization=!0,e&&(e.id&&(this.id=e.id),this.arcgisProps=e.arcgisProps,this.parentLayer=e.parentLayer,!1===e.visible&&(this.visible=!1),l.isDefined(e.opacity)&&(this.opacity=e.opacity),l.isDefined(e.minScale)&&this.setMinScale(e.minScale),l.isDefined(e.maxScale)&&this.setMaxScale(e.maxScale),this.attributionDataUrl=e.attributionDataUrl||"",this.hasAttributionData=!!this.attributionDataUrl,l.isDefined(e.showAttribution)&&(this.showAttribution=e.showAttribution),this.className=e.className,this.refreshInterval=e.refreshInterval||0),this._errorHandler=s.hitch(this,this._errorHandler),this._scheduledRefresh=s.hitch(this,this._scheduledRefresh),this.refresh=s.hitch(this,this.refresh),this.managedSuspension){var n=this._setMap;this._setMap=function(t){var e=n.apply(this,arguments);if(this._fireAttach(t),this.evaluateSuspension(),this.suspended&&!t.loaded)var s=i.connect(t,"onLoad",this,(function(){i.disconnect(s),s=null,this.evaluateSuspension()}));return e}}this.registerConnectEvents()},id:null,visible:!0,opacity:1,loaded:!1,loadError:null,minScale:0,maxScale:0,visibleAtMapScale:!1,suspended:!0,attached:!1,attributionDataUrl:"",hasAttributionData:!1,showAttribution:!0,refreshInterval:0,_errorHandler:function(t){this.loaded||(this.loadError=t),this.onError(t)},_setMap:function(t,e,s,n){if(this._map=t,this._lyrZEHandle=i.connect(t,"onZoomEnd",this,this._processMapScale),t.loaded)this.visibleAtMapScale=this._isMapAtVisibleScale();else var a=i.connect(t,"onLoad",this,(function(){i.disconnect(a),a=null,this._processMapScale()}))},_unsetMap:function(t,e){i.disconnect(this._lyrZEHandle),this._map=this._lyrZEHandle=null,this._resumedOnce=void 0,this.suspended=!0,this._fireDetach(t)},_fireAttach:function(t){this.attached=!0,this.onAttach({map:t})},_fireDetach:function(t){this.attached=!1,this.onDetach({map:t})},_cleanUp:function(){this._map=this._div=null},_fireUpdateStart:function(){this.updating||(this.updating=!0,this.attr("data-updating",""),this.onUpdateStart(),this._map&&this._map._incr())},_fireUpdateEnd:function(t,e){this.updating&&(this.updating=!1,this.attr("data-updating"),this._refreshRT(),this.onUpdateEnd(t,e),this._map&&this._map._decr())},_getToken:function(){var t=this._url,e=this.credential;return t&&t.query&&t.query.token||e&&e.token||void 0},_findCredential:function(){this.credential=o.id&&this._url&&o.id.findCredential(this._url.path)},_useSSL:function(){var t=this._url,e=/^http:/i;this.url&&(this.url=this.url.replace(e,"https:")),t&&t.path&&(t.path=t.path.replace(e,"https:"))},refresh:function(){},show:function(){this.setVisibility(!0)},hide:function(){this.setVisibility(!1)},setMinScale:function(t){this.setScaleRange(t)},setMaxScale:function(t){this.setScaleRange(null,t)},setScaleRange:function(t,e){var i=l.isDefined(t),s=l.isDefined(e);this.loaded||(this._hasMin=this._hasMin||i,this._hasMax=this._hasMax||s);var n=this.minScale,a=this.maxScale;this.minScale=(i?t:this.minScale)||0,this.maxScale=(s?e:this.maxScale)||0,n===this.minScale&&a===this.maxScale||(this.onScaleRangeChange(),this._processMapScale())},suspend:function(){this._suspended=!0,this.evaluateSuspension()},resume:function(){this._suspended=!1,this.evaluateSuspension()},canResume:function(){return this.loaded&&this._map&&this._map.loaded&&this.visible&&this.visibleAtMapScale&&!this._suspended},evaluateSuspension:function(){this.canResume()?this.suspended&&this._resume():this.suspended||this._suspend()},_suspend:function(){this.suspended=!0,this.attr("data-suspended",""),this.onSuspend(),this._map&&this._map.onLayerSuspend(this)},_resume:function(){this.suspended=!1,this.attr("data-suspended");var t,e=void 0===this._resumedOnce,i=this.className,s=this._attrs,n=this.getNode();if(e){if(this._resumedOnce=!0,i&&n){var a=n.getAttribute("class")||"";new RegExp("(^|\\s)"+i+"(\\s|$)","i").test(a)||(a+=(a?" ":"")+i,n.setAttribute("class",a))}if(s&&n)for(t in s)s.hasOwnProperty(t)&&n.setAttribute(t,s[t])}this._refreshRT(),this.onResume({firstOccurrence:e}),this._map&&this._map.onLayerResume(this)},_processMapScale:function(){var t=this.visibleAtMapScale;this.visibleAtMapScale=this._isMapAtVisibleScale(),t!==this.visibleAtMapScale&&(this.onScaleVisibilityChange(),this.evaluateSuspension())},isVisibleAtScale:function(t){return!!t&&_.prototype._isMapAtVisibleScale.apply(this,arguments)},_isMapAtVisibleScale:function(t,e){if(!(t||this._map&&this._map.loaded))return!1;var i=this._map;t=t||i.getScale();var s,n=this.minScale,a=this.maxScale,r=!n,h=!a;return e&&(s=i.width>i.height?i.width:i.height),r||(t<=n?r=!0:e&&(r=Math.abs(n-t)/n<1/s)),h||(t>=a?h=!0:e&&(h=Math.abs(a-t)/a<1/s)),r&&h},getAttributionData:function(){var t=this.attributionDataUrl,i=new n(u._dfdCanceller);if(this.hasAttributionData&&t)i._pendingDfd=c({url:t,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),i._pendingDfd.then((function(t){i.callback(t)}),(function(t){i.errback(t)}));else{var s=new Error("Layer does not have attribution data");s.log=!!e.isDebug,i.errback(s)}return i},getResourceInfo:function(){var t=this.resourceInfo;return s.isString(t)?a.fromJson(t):s.clone(t)},getMap:function(){return this._map},getNode:function(){return this._div},attr:function(t,e){var i=this.getNode();return"data-reference"===t&&r("ie")<11?this:(i&&(null==e?i.removeAttribute(t):i.setAttribute(t,e)),this._attrs&&(null==e?delete this._attrs[t]:this._attrs[t]=e),this)},setRefreshInterval:function(t){var e=this.refreshInterval;return this.refreshInterval=t,this._toggleRT(!1),t&&this._toggleRT(!0),e!==t&&this.onRefreshIntervalChange(),this},_toggleRT:function(t){t&&this.refreshInterval?(clearInterval(this._refreshTimer),this._refreshTimer=setInterval(this._scheduledRefresh,60*this.refreshInterval*1e3)):this._refreshTimer&&(clearInterval(this._refreshTimer),this._refreshTimer=null)},_refreshRT:function(){this._toggleRT(!1),this._toggleRT(!0)},_scheduledRefresh:function(){this.onRefreshTick(),!this._map||this.suspended||this.updating||this.refresh()},_refreshTS:null,_reCheckTS:/[\?\&]_ts=/gi,_reReplaceTS:/([\?\&]_ts=)[0-9]+/gi,addTimestampToURL:function(t){var e=this._refreshTS;return e&&(this._reCheckTS.test(t)?t=t.replace(this._reReplaceTS,"$$$1"+e):t+=(-1===t.indexOf("?")?"?":"&")+"_ts="+e),t},setNormalization:function(t){this.normalization=t},setVisibility:function(t){this.visible!==t&&(this.visible=t,this.onVisibilityChange(this.visible),this.evaluateSuspension()),this.attr("data-hidden",t?null:"")},onLoad:function(){},onAttach:function(t){},onDetach:function(t){},onVisibilityChange:function(){},onScaleRangeChange:function(){},onScaleVisibilityChange:function(){},onSuspend:function(){},onResume:function(){},onUpdate:function(){},onUpdateStart:function(){},onUpdateEnd:function(){},onRefreshIntervalChange:function(){},onRefreshTick:function(){},onError:function(){}});return r("extend-esri")&&s.setObject("layers.Layer",_,o),_}));