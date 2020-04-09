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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/Deferred","dojo/when","dojo/io-query","dojo/has","../kernel","../request","../deferredUtils","./BaseRasterLayer","./WCSConnection","./Raster","./rasterFormats/ImageCanvasDecoder","./pixelFilters/StretchFilter","../geometry/Extent","../geometry","../graphic","../SpatialReference"],(function(e,t,i,n,r,a,o,s,l,h,c,p,u,d,m,x,f,g,v){var _=function(e,t){var i;for(i=0;i<e.length;i++)if(t(e[i]))return i;return-1},w=function(e,t,i){var n;if(i){for(n=0;n<e.length;n++)if(e[n][i].toLowerCase()===t.toLowerCase())return e[n]}else for(n=0;n<e.length;n++)if(e[n].toLowerCase()===t.toLowerCase())return e[n]},y={parse:function(e){var t={isMultiPart:!0,data:null},i=this._getMultiPartHeader(e);return i?(t.isMultiPart=!0,t.data=this._getParts(e.data,i)):(t.isMultiPart=!1,t.data=e.data),t},_getParts:function(e,t){var i,n,r,a=0,o=0,s=0,l=0,h=[],c=[],p=[],u=[],d="--"+t.boundary,m="--"+t.boundary+"\n",x="\n--"+t.boundary+"--",f=[10],g=[13,10];for(a=0;a<d.length;a++)c.push(d.charCodeAt(a));for(a=0;a<m.length;a++)p.push(m.charCodeAt(a));for(a=0;a<x.length;a++)u.push(x.charCodeAt(a));for(i=d.length,n=new Uint8Array(e),r=Math.min(1e4,n.length),a=0;a<r;a++)n[a]===c[l]?l===i-1?(l=0,o&&h.push(this._parsePart(n.subarray(o,a+1-i),t)),n[a+1]===f[0]?a+=1:n[a+1]===g[0]&&n[a+2]===g[1]&&(a+=2),o=a+1):l++:l=0;for(a=n.length-u.length-2;a<n.length;a++)if(n[a]===u[l]){if(l===u.length-1){l=0,s=a-u.length+1,h.push(this._parsePart(n.subarray(o,s),t));break}l++}else l=0;return h},_getMultiPartHeader:function(e){var t,i,n,r=e.getHeader("Content-Type").split(";");if("multipart/related"===r[0]||"multipart/mixed"===r[0])for(t={boundary:"",start:"",type:""},i=1;i<r.length;i++)t[(n=r[i].split("="))[0].trim()]=n[1].trim().slice(1,n[1].length-1);return t},_parsePart:function(e,t){var i,n,r,a,o=String.fromCharCode.apply(null,e.subarray(0,Math.min(300,e.length))).split("\n"),s=0,l=0,h=Math.min(o.length,7);for(i={contentType:null,contentDescription:null,contentTransferEncoding:null,contentID:null,contentDisposition:null,contentData:null,contentLocation:null},s=0;s<h;s++)if(o[s].length<4)l=l+o[s].length+1;else if("content"===o[s].slice(0,7).toLowerCase()){if(l=l+o[s].length+1,-1===o[s].indexOf(":"))continue;if(r=o[s].substring(0,o[s].indexOf(":")).trim(),a=o[s].substring(o[s].indexOf(":")+1).trim(),r)switch(r.toLowerCase()){case"content-type":i.contentType=a;break;case"content-description":i.contentDescription=a;break;case"content-transfer-encoding":i.contentTransferEncoding=a;break;case"content-id":i.contentID=a;break;case"content-disposition":i.contentDisposition=a;break;case"content-location":i.contentLocation=a}}else{if(i.contentDisposition&&o[s].length>=4&&i.contentType.toLowerCase().indexOf("image")>-1){n=new ArrayBuffer(e.length-l),new Uint8Array(n).set(e.subarray(l,e.length)),i.contentData=n;break}if((""===t.start||i.contentID===t.start)&&i.contentType){if(i.contentType.indexOf("text")>-1){i.contentData=String.fromCharCode.apply(null,e.subarray(l,e.length));break}i.contentData=e.subarray(l,e.length)}}return i}},D=e([c],{declaredClass:"esri.layers.WCSLayer",format:null,interpolation:null,bandIds:null,optionalParameters:null,multidimensionalDefinition:null,projectedFullExtent:null,wcsConnection:null,version:null,coverageId:null,coverageDescription:null,extent:null,timeInfo:null,pixelType:null,_projectedResolution:null,_WEB_MERCATOR:[102100,3857,102113,900913],_REVERSED_LAT_LONG_RANGES:[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],_pivotServerGridOrigin110:!1,constructor:function(e,t){this._rasterReadPromise=null,this._pixelValueReadPromise=null},_initialize:function(i,n){this._params={},e.safeMixin(this,n),this.optionalParameters=this.optionalParameters||{},this.bandIds=this.bandIds||null;var o=this.url.indexOf("?");o>-1&&o<=this.url.length-1&&(this.optionalParameters=t.mixin(this.optionalParameters,a.queryToObject(this.url.substring(o+1,this.url.length))),this.url=this.url.substring(0,o)),this.activeMapDimensions=n&&n.activeMapDimensions,this.useMapDimensionValue=!n||!n.hasOwnProperty("useMapDimensionValue")||!!n.useMapDimensionValue,this.coverageId=this.coverageId||this.coverage||this.identifiers||this.optionalParameters.coverage||this.optionalParameters.coverageId||this.optionalParameters.identifiers;var s=t.mixin({},{version:this.version,token:this.token,coverageId:this.coverageId},this.optionalParameters),l=this.wcsConnection||new p(this.url,s)._connectPromise;r(l,t.hitch(this,this._initialized),this._errorHandler)},_initialized:function(e){var t;this.wcsConnection=e,this.version=this.version||e.version,this.coverageId=this.coverageId||e.coverages[0].id;var i=w(e.coverages,this.coverageId,"id");if(this.coverageDescription=i,this.coverageDescription.supportedInterpolations=this.coverageDescription.supportedInterpolations||e.supportedInterpolations,this.extent=this.extent||i.extent,this.timeInfo=i.timeInfo,!this.bandIds&&this.coverageDescription.bandInfo&&(this.bandIds=Object.keys(this.coverageDescription.bandInfo).map((function(e){return parseInt(e,10)}))),(void 0===this.format||null===this.format||""===this.format||"tiff"===this.format)&&i.supportedFormats)for(t=0;t<i.supportedFormats.length;t++)if(i.supportedFormats[t].toLowerCase().indexOf("tiff")>-1){this.format=i.supportedFormats[t];break}this.format=this.format||"image/tiff",this._findCredential(),(this.credential&&this.credential.ssl||e&&e._ssl)&&this._useSSL(),this._params.token=this._getToken(),this.loaded=!0,this.onLoad(this);var n=this._loadCallback;n&&(delete this._loadCallback,n(this))},onRasterReadComplete:function(){},setInfoTemplate:function(e){this.infoTemplate=e},identify:function(e){var i=new n;return this._identifyPixelValue(e).then(t.hitch(this,(function(e){var t=[];if(!(this.infoTemplate&&this.infoTemplate.info&&this.infoTemplate.info.layerOptions&&this.infoTemplate.info.layerOptions.hasOwnProperty("showNoDataRecords"))||this.infoTemplate.info.layerOptions.showNoDataRecords||"NoData"!==e.value){var n=new g;n.setInfoTemplate(this.infoTemplate),n._layer=this,n.geometry=this.projectedFullExtent,n.attributes={ObjectId:0,"Raster.ServicePixelValue":e.pixelValues.map((function(e){return e.toString()}))},t.push(n)}i.resolve(t)})),t.hitch(this,(function(e){i.reject(e)}))),i.promise},getMultidimensionalInfo:function(){var e=new n;return this.coverageDescription&&this.coverageDescription.multidimensionalInfo?e.resolve(this.coverageDescription.multidimensionalInfo):e.reject("no mdInfo found"),e},setUseMapTime:function(e,t){this.useMapTime=e,this._toggleTime(),!t&&this._map&&this.refresh(!0)},setMultidimensionalDefinition:function(e,t){this.multidimensionalDefinition=e,!t&&this._map&&this.refresh(!0)},_setMap:function(e,t){return e.extent?(this.projectedFullExtent=this.projectedFullExtent||this._convertExtentToMap(this.coverageDescription.lonLatEnvelope,e.extent.spatialReference,1e-4),this.projectedFullExtent=this.projectedFullExtent||this._convertExtentToMap(this.coverageDescription.extent,e.extent.spatialReference,1e-4),this._projectedResolution=this._projectedResolution||{x:(this.projectedFullExtent.xmax-this.projectedFullExtent.xmin)/this.coverageDescription.columns,y:(this.projectedFullExtent.ymax-this.projectedFullExtent.ymin)/this.coverageDescription.rows}):this.projectedFullExtent=this.projectedFullExtent||this.coverageDescription.extent,this.inherited(arguments)},_convertExtentToNative:function(e){if(!e)return null;var t=null,i=this.coverageDescription.lonLatEnvelope.spatialReference.wkid,n=e.spatialReference.wkid;return i===n||this._WEB_MERCATOR.indexOf(i)>-1&&this._WEB_MERCATOR.indexOf(n)>-1?t=e:4326===i&&this._WEB_MERCATOR.indexOf(n)>-1?t=f.webMercatorUtils.webMercatorToGeographic(e):4326===n&&this._WEB_MERCATOR.indexOf(i)>-1&&(t=f.webMercatorUtils.geographicToWebMercator(e)),t},_convertExtentToMap:function(e,t,i){if(!e)return null;var n=null,r=t?t.wkid:this._map.extent.spatialReference.wkid,a=e.spatialReference.wkid;if(r===a||this._WEB_MERCATOR.indexOf(r)>-1&&this._WEB_MERCATOR.indexOf(a)>-1?n=e:4326===r&&this._WEB_MERCATOR.indexOf(a)>-1?n=f.webMercatorUtils.webMercatorToGeographic(e):4326===a&&this._WEB_MERCATOR.indexOf(r)>-1&&(n=f.webMercatorUtils.geographicToWebMercator(e)),n&&n.spatialReference.wkid&&this._WEB_MERCATOR.indexOf(n.spatialReference.wkid)>-1&&(n.spatialReference.wkid=3857),i&&n&&n.spatialReference.wkid)if(3857===n.spatialReference.wkid)n.xmin=n.xmin+i,n.ymin=n.ymin+i,n.xmax=n.xmax-i,n.ymax=n.ymax-i;else if(4326===n.spatialReference.wkid||Math.abs(n.xmin)<=180&&Math.abs(n.xmax)<=180){var o=1/111111;n.xmin=n.xmin+i*o,n.ymin=n.ymin+i*o,n.xmax=n.xmax-i*o,n.ymax=n.ymax-i*o}return n},_constructGetCoverageParams:function(e,i,n,r,a){var o=this.projectedFullExtent,s=e;if(new v(o.spatialReference).equals(new v(s.spatialReference))&&(s.xmax<=o.xmin||s.xmin>=o.xmax||s.ymax<=o.ymin||s.ymin>=o.ymax))return null;var l=new x(s);l.xmin=Math.max(l.xmin,o.xmin),l.xmax=Math.min(l.xmax,o.xmax),l.ymin=Math.max(l.ymin,o.ymin),l.ymax=Math.min(l.ymax,o.ymax);var h=Math.round((l.xmax-l.xmin)/(s.xmax-s.xmin)*i),c=Math.round((l.ymax-l.ymin)/(s.ymax-s.ymin)*n),p=a?e.spatialReference.wkid:o.spatialReference.wkid,u=this._params;t.mixin(u,{extent:l,width:h,height:c,crs:"EPSG:"+p,epsgNSCRS:"urn:ogc:def:crs:EPSG::"+p,coverageId:this.coverageId,format:this.format,interpolation:this.interpolation}),r&&t.mixin(u,r),u.multidimensionalDefinition||(u.multidimensionalDefinition=this.multidimensionalDefinition),u.interpolation||(this.interpolation?u.interpolation=this.interpolation:this.coverageDescription.supportedInterpolations&&this.coverageDescription.supportedInterpolations.length>0&&(u.interpolation=this.coverageDescription.supportedInterpolations[0]));return 0!==u.interpolation&&1!==u.interpolation&&2!==u.interpolation||("1.0.0"===this.version?u.interpolation=["nearest neighbor","bilinear","bicubic"][u.interpolation]:"1.1.0"===this.version||"1.1.1"===this.version||"1.1.2"===this.version?u.interpolation=["nearest","linear","cubic"][u.interpolation]:"2.0.1"===this.version&&(u.interpolation="http://www.opengis.net/def/interpolation/OGC/1/"+["nearest-neighbor","linear","cubic"][u.interpolation])),this.bandIds&&(u.bandIds=this.bandIds.map(t.hitch(this,(function(e){return this.coverageDescription.bandInfo[e]})))),!u.time&&this.coverageDescription.timeInfo&&"2.0.1"!==this.version&&(u.time=this.coverageDescription.timeInfo.timeExtent.endTime.toISOString()),u},_requestData:function(e,i,n){var r;if(this._rasterReadPromise&&this._rasterReadPromise.cancel(),["1.1.0","1.1.1","1.1.2"].indexOf(this.version)>0&&void 0===this.supports4ValueOffset){var a=this.coverageDescription.extent.getCenter(),o=2*Math.abs(this.coverageDescription.resolution.x),s=2*Math.abs(this.coverageDescription.resolution.y),l=new x(a.x-o,a.y-s,a.x+o,a.y+s,a.spatialReference);l=l.expand(10),r=this._constructGetCoverageParams(l,20,20,{},!0),this._getDecodedData(r).then(t.hitch(this,(function(t){var a=(t.extent.xmax-t.extent.xmin)/t.pixelBlock.width,o=(r.extent.xmax-r.extent.xmin)/r.width,s=Math.round(o/a);this.supports4ValueOffset=2===s,this._requestData(e,i,n)})))}else{if(!(r=this._constructGetCoverageParams(e,i,n)))return void this.clear();this._getDecodedData(r).then(t.hitch(this,(function(e){this._requestDataHandler(e)})))}},_getDecodedData:function(e){var i,r=this,a=new u("");if(this._requestExtent=e.extent,this._useBrowserDecoding()){var o=new d({ctx:this._context});i=t.hitch(o,"decode")}var s=new n(h._dfdCanceller);s._pendingDfd=this._getCoverage(e);var l,c,p=this._requestExtent;return this._rasterReadPromise=s.promise,s._pendingDfd.then((function(n){var o=y.parse(n);if("1.0.0"===r.version)o=o.data;else{if(!o.isMultiPart)return l=new Error("not a valid multipart coverage response"),void r._resolve([l],null,t.hitch(r,r._requestDataErrorHandler),s,!0);c=-1===(c=_(o.data,(function(e){return null!=e.contentType&&e.contentType.toLowerCase().indexOf("image")>-1})))?o.data.length-1:c,o=o.data[c].contentData}var h={width:e.width,height:e.height,planes:null,pixelType:"UNKNOWN",decodeFunc:i};return a.decode(o,h).then((function(e){if(r.pixelType=r.pixelType||e.pixelType,!r.pixelFilter){var t=r._getDefaultFilter();r.pixelFilter=t.filter,r._pixelFilterArgs=t}return{pixelBlock:e,extent:p}}),(function(e){r._resolve([e],null,t.hitch(r,r._requestDataErrorHandler),s,!0)}))}),(function(e){r._resolve([e],null,t.hitch(r,r._requestDataErrorHandler),s,!0)}))},_requestDataHandler:function(e){this._rasterReadPromise&&this._rasterReadPromise.isCanceled()||(this.originalPixelData=e,this.hasDataChanged=!0,this._setPixelData(e))},_setPixelData:function(e){var t=this._clonePixelData(e);this.pixelFilter&&this.pixelFilter(t),this.pixelData=t,this._rasterReadPromise&&this._rasterReadPromise.isCanceled()||(this._drawPixelData(),this._rasterReadPromise=null)},_useBrowserDecoding:function(){var e=this._requestExtent,t=this._map.width,i=this._map.height,n=this.getCurrentResolution();return Math.round((e.xmax-e.xmin)/n.x)===t&&Math.round((e.ymax-e.ymin)/n.y)===i&&(void 0===this.pixelFilter||null===this.pixelFilter)&&("jpeg"===this.format.toLowerCase()||"jpg"===this.format.toLowerCase()||this.format.toLowerCase().indexOf("png")>-1)},_clonePixelData:function(e){if(null==e)return e;var i={};e.extent&&(i.extent=t.clone(e.extent));var n=e.pixelBlock;return null==n?i:(i.pixelBlock=n.clone(),i)},_resolve:function(e,t,i,n,r){t&&this[t].apply(this,e),i&&i.apply(null,e),n&&h._resDfd(n,e,r)},_getDefaultFilter:function(){var e=0;return"U8"!==this.pixelType&&(e=6),new m({stretchType:e,min:0,max:255,dRA:!0,minPercent:.2,maxPercent:.2,useGamma:!1})},_getCoverage:function(e){var i,n=this.version,r=this.coverageDescription,a=function(e){return new Date(e).toISOString()},o=t.hitch(this,(function(){var t=e.extent.xmin+","+e.extent.ymin+","+e.extent.xmax+","+e.extent.ymax;i={request:"GetCoverage",service:"WCS",version:n,coverage:e.coverageId,format:e.format||"GEOTIFF",crs:e.crs,bbox:t,width:e.width,height:e.height,time:e.time,interpolation:e.interpolation,band:e.bandIds?e.bandIds.join(","):null}})),s=t.hitch(this,(function(){var t,o=this.coverageDescription.nativeCoverageDescription.domain.spatialDomain,s=o.origin.x<=o.envelope.xmin&&o.origin.y<=o.envelope.ymin;t=this._pivotServerGridOrigin110&&s?[(e.extent.xmax-e.extent.xmin)/e.width,(e.extent.ymax-e.extent.ymin)/e.height]:[(e.extent.xmax-e.extent.xmin)/e.width,(e.extent.ymin-e.extent.ymax)/e.height];var l,h,c,p,u,d,m,x=function(e,t){var i;for(i=0;i<e.length;i++)if(t(e[i]))return e[i]}(r.nativeCoverageDescription.range,(function(e){return e.axis.some((function(e){return"band"===e.identifier.toLowerCase()}))})),f=x&&e.interpolation&&e.bandIds?x.identifier+":"+e.interpolation+"["+x.axis[0].identifier+"["+e.bandIds.join(",")+"]]":null;if(e.multidimensionalDefinition)for(l=0;l<e.multidimensionalDefinition.length;l++)(c=e.multidimensionalDefinition[l].values).length>0&&(e.multidimensionalDefinition[l].dimensionName.toLowerCase().indexOf("time")>-1?(c=c.map(a).join(","),e.time=c):(x=w(r.nativeCoverageDescription.range,e.multidimensionalDefinition[l].variableName,"identifier"))&&(e.interpolation||(e.interpolation=x.supportedInterpolations[0]),(h=w(x.axis,e.multidimensionalDefinition[l].dimensionName,"identifier"))&&(c=c.join(","),f=x.identifier+":"+e.interpolation+"["+h.identifier+"["+c+"]]")));m=this._pivotServerGridOrigin110&&s?[e.extent.xmin,e.extent.ymin]:[e.extent.xmin,e.extent.ymax],this.coverageDescription._useEPSGAxis&&this._useLatLong(e.extent.spatialReference.wkid)?(p=e.extent.ymin+","+e.extent.xmin+","+e.extent.ymax+","+e.extent.xmax+","+e.epsgNSCRS,u=m[1]+","+m[0],d=this.supports4ValueOffset?t[1]+",0,0,"+t[0]:t[1]+","+t[0]):(p=e.extent.xmin+","+e.extent.ymin+","+e.extent.xmax+","+e.extent.ymax+","+e.epsgNSCRS,u=m[0]+","+m[1],d=this.supports4ValueOffset?t[0]+",0,0,"+t[1]:t[0]+","+t[1]),i={request:"GetCoverage",service:"WCS",version:n,identifier:e.coverageId,format:e.format||"image/tiff",crs:e.crs,boundingbox:p,GridBaseCRS:e.epsgNSCRS,GridCS:"urn:ogc:def:cs:OGC:0.0:Grid2dSquareCS",GridType:"urn:ogc:def:method:WCS:1.1:2dGridIn2dCrs",GridOrigin:u,GridOffsets:d,TimeSequence:e.time,rangeSubset:f}})),h=t.hitch(this,(function(){var t,o,s,l=[],h=r.nativeCoverageDescription.domainSet.axisLabels;if("x"===h[0].toLowerCase()||"x"===h[1].toLowerCase()?(l.push("x,http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),l.push("y,http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t="x",o="y"):h[0].toLowerCase().indexOf("lat")>-1||h[0].toLowerCase().indexOf("north")>-1?(l.push(h[1]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),l.push(h[0]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t=h[1],o=h[0]):h[0].toLowerCase().indexOf("lon")>-1||h[0].toLowerCase().indexOf("east")>-1?(l.push(h[0]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),l.push(h[1]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t=h[0],o=h[1]):this._useLatLong(e.extent.spatialReference.wkid)?(l.push(h[1]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),l.push(h[0]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t=h[1],o=h[0]):(l.push(h[0]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.xmin+","+e.extent.xmax+")"),l.push(h[1]+",http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid+"("+e.extent.ymin+","+e.extent.ymax+")"),t=h[0],o=h[1]),h.length>2)for(c=2;c<h.length;c++)h[c].toLowerCase().indexOf("time")>-1?l.push(h[c]+",http://www.opengis.net("+(s=r.nativeCoverageDescription.domainSet.origin[c],r.nativeCoverageDescription.boundedBy.uomLabels[c].toLowerCase().indexOf("ole")>-1?new Date(24*(s-25569)*60*60*1e3).toISOString():s)+")"):l.push(h[c]+",http://www.opengis.net("+r.nativeCoverageDescription.domainSet.origin[c]+")");var c,p,u,d,m=null,x=[],f=[];if(e.multidimensionalDefinition){for(c=0;c<r.nativeCoverageDescription.rangeType.length;c++)f=f.concat(r.nativeCoverageDescription.rangeType[c].map((function(e){return e.name})));for(c=0;c<e.multidimensionalDefinition.length;c++)if(p=w(h,e.multidimensionalDefinition[c].dimensionName),u=w(f,e.multidimensionalDefinition[c].variableName),-1===x.indexOf(u)&&x.push(u),p&&(d=e.multidimensionalDefinition[c].values).length>0){d[0]instanceof Array&&(d=d[0]),d=p.toLowerCase().indexOf("time")>-1?d.map(a).join(","):d.join(",");var g=_(l,(function(e){return 0===e.indexOf(p)}));-1===g&&l.push(p+",http://www.opengis.net("+d+")"),-1!==g&&-1===l[g].indexOf("("+d+")")&&l.splice(g,1,p+",http://www.opengis.net("+d+")")}m=x.length>0?x.join(","):null}var v="http://www.opengis.net/def/crs/EPSG/0/"+e.extent.spatialReference.wkid,y=l.join("&subset="),D=t+"("+e.width+"),"+o+"("+e.height+")";i={request:"GetCoverage",service:"WCS",version:n,coverageId:e.coverageId,rangesubset:m,interpolation:e.interpolation,scaleSize:D,subset:y,extension:null,format:e.format||"image/tiff",outputcrs:v}}));switch(n){case"1.0.0":o();break;case"1.1.0":case"1.1.1":case"1.1.2":s();break;case"2.0.1":h()}t.mixin(i,this.optionalParameters),e.token&&(i.token=e.token);var c=this.wcsConnection.onlineResources.getCoverage||this.url;return-1===c.indexOf("?")&&(c+="?"),Object.keys(i).forEach((function(e){void 0!==i[e]&&null!==i[e]&&(c+=e,c+="=",c+=i[e],c+="&")})),c=c.substring(0,c.length-1),l({url:encodeURI(c),handleAs:"arraybuffer"},{returnFullResponse:!0})},_identifyPixelValue:function(e){var t=new n,i={objectId:0,name:"Pixel",value:null,location:e,pixelValues:null};this._pixelValueReadPromise&&this._pixelValueReadPromise.cancel();var r=this.projectedFullExtent,a=this._projectedResolution,o=r.xmin+Math.floor((e.x-r.xmin)/a.x)*a.x,s=r.ymin+Math.floor((e.y-r.ymin)/a.y)*a.y,l=new x;l.spatialReference=e.spatialReference,l.xmin=o,l.ymin=s,l.xmax=o+2*a.x,l.ymax=s+2*a.y;var c=this._constructGetCoverageParams(l,2,2),p=this;if(!c)return t.resolve(i),p._pixelValueReadPromise=null,t;var d,m=new u(""),f=new n(h._dfdCanceller);return f._pendingDfd=this._getCoverage(c),f._pendingDfd.then((function(e){var n=y.parse(e);if("1.0.0"===p.version)n=n.data;else{if(!n.isMultiPart)return d=new Error("not a valid multipart coverage response"),t.reject(d),void(p._pixelValueReadPromise=null);n=n.data[n.data.length-1].contentData}var r={width:c.width,height:c.height,planes:null,pixelType:"UNKNOWN"};m.decode(n,r).then((function(e){e&&e.pixels&&(!e.mask||e.mask[0]?e.pixels&&(i.pixelValues=e.pixels.map((function(e){return e[0]})),i.value=i.pixelValues.join(" ")):(i.value="NoData",i.pixelValues=[NaN])),t.resolve(i),p._pixelValueReadPromise=null}),(function(e){t.reject(e),p._pixelValueReadPromise=null}))}),(function(e){t.reject(e),p._pixelValueReadPromise=null})),this._pixelValueReadPromise=t.promise,this._pixelValueReadPromise},_useLatLong:function(e){if(!e)return!1;var t,i,n;for(i=0;i<this._REVERSED_LAT_LONG_RANGES.length;i++)if(e>=(n=this._REVERSED_LAT_LONG_RANGES[i])[0]&&e<=n[1]){t=!0;break}return t},_toggleTime:function(){var e=this._map;this.timeInfo&&this.useMapTime&&e&&!this.suspended?(this._timeConnect||(this._timeConnect=i.connect(e,"onTimeExtentChange",this,this._onTimeExtentChangeHandler)),this._setTime(e.timeExtent)):(i.disconnect(this._timeConnect),this._timeConnect=null,this._setTime(null))},_setTime:function(e){var t;this._params&&(e?(t=[],e.startTime&&t.push(e.startTime.toISOString()),e.endTime&&t.push(e.endTime.toISOString()),this._params.time=t.join(",")):this._params.time=null)},_onTimeExtentChangeHandler:function(e){this.suspended||(this._setTime(e),this.refresh(!0))}});return t.mixin(D,{INTERPOLATION_NEARESTNEIGHBOR:0,INTERPOLATION_BILINEAR:1,INTERPOLATION_CUBICCONVOLUTION:2}),o("extend-esri")&&t.setObject("layers.WCSLayer",D,s),D}));