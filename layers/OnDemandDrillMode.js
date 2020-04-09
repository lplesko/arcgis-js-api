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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","../sniff","../kernel","../promiseList","./RenderMode","../geometry/Extent","../geometry/jsonUtils","../tasks/query","../tasks/FeatureSet","../tasks/support/pbfDeps","./vectorTiles/core/promiseUtils","./vectorTiles/core/SetPool","./vectorTiles/views/2d/tiling/TileQueue","./vectorTiles/views/2d/tiling/TileStrategy","./vectorTiles/views/2d/tiling/TileKey"],(function(e,t,r,i,s,a,n,l,u,o,h,c,d,f,_,p,y){var g=c.pbfQueryUtils,m=c.optimizedFeatures,v=i("esri-featurelayer-webgl"),F=e([n],{declaredClass:"esri.layers._OnDemandDrillMode",featureLayer:null,graphics:null,maxDrillLevel:v&&v.maxDrillLevel,maxRecordCountFactor:v&&v.maxRecordCountFactor,enablePBFQuery:v&&v.enablePBFQuery,_graphicsVal:null,_reEvalGraphics:!1,_featureMap:null,_quantizationFactor:1,_wglRenderer:null,_tileInfo:null,_tileInfoView:null,_tileFetchQueue:null,_tileStrategy:null,_tileRequests:null,constructor:function(e){this._graphicsVal=[],this._featureMap={},this.featureLayer=e},initialize:function(e){this.inherited(arguments),this._tileRequests=new Map},startup:function(){if(!this._started||this._isSuspendedAtStartup){this.inherited(arguments);var e=this.featureLayer;this._wglRenderer=e._div,this._tileInfo=this._wglRenderer._tileInfo,this._tileInfoView=this._wglRenderer._tileInfoView,this._tileRenderer=this._wglRenderer._tileRenderer,this._tileFetchQueue=new _({tileInfoView:this._tileInfoView,process:this._getFeatureSet.bind(this)}),this._tileStrategy=new p({cachePolicy:"purge",buffer:0,acquireTile:this._acquireTile.bind(this),releaseTile:this._releaseTile.bind(this),tileInfoView:this._tileInfoView}),this._isSuspendedAtStartup=e.suspended,this.start()}},propertyChangeHandler:function(e){this._init&&(e<2?this.start():console.log("FeatureLayer: layer in on-demand mode does not support time definitions. Layer id = "+this.featureLayer.id+", Layer URL = "+this.featureLayer.url))},destroy:function(){this._tileFetchQueue&&this._tileFetchQueue.clear(),this._tileStrategy&&this._tileStrategy.destroy(),this._tileRequests&&this._tileRequests.clear(),this.inherited(arguments)},update:function(e){this._tileFetchQueue.pause(),this._tileFetchQueue.state=e.state;var t=this._tileStrategy.update(e);this._tileFetchQueue.resume(),t?this.featureLayer._fireUpdateEnd():this.featureLayer._fireUpdateStart()},suspend:function(){this._init&&this.stop()},resume:function(){this._init&&this.start()},refresh:function(){this.start()},hasAllFeatures:function(){var e=!1;return this._getVisibleTileRequests().forEach((function(t){t.hasPartialFeatures&&(e=!0)})),!e},hasUpdateError:function(){var e=!1;return this._getVisibleTileRequests().forEach((function(t){t.hasUpdateError&&(e=!0)})),e},start:function(){var e=this.featureLayer;!e.suspended&&e.isQueryable()&&(this._clearIIf(),this._tileFetchQueue.pause(),this._tileFetchQueue.clear(),this._tileStrategy.clear(),this._wglRenderer.start())},stop:function(){this._wglRenderer.stop()},_getVisibleTileRequests:function(){var e=this._tileStrategy.tileIndex;if(!e)return[];var t=[];return this._tileRequests.forEach((function(r,i){var s=e.get(i);s&&s.visible&&t.push(r)})),t},_acquireTile:function(e){this.featureLayer._fireUpdateStart();var t=this._acquireRendererTile(e),r=t.key,i=r.id,s=this._tileInfo.lodAt(e.level),a={id:i,key:r,bounds:this._tileInfo.getTileBounds([0,0,0,0],r),resolution:s.resolution,scale:s.scale},n=this._tileFetchQueue.push(r).then(function(e){return this._wglRenderer._symbolProcessor.getMeshData(a,e.featureSet).then((function(t){return{meshData:t.data,featureSet:e.featureSet,errors:e.errors,hasPartialFeatures:e.hasPartialFeatures}}))}.bind(this)).then(function(e){this._tileRenderer.onTileData({tileKey:i,data:e.meshData}),this._addTile(i,e)}.bind(this)).otherwise(function(e){return this._tileRenderer.onTileData({tileKey:i,data:null}),this._tileError(i),d.reject(e)}.bind(this));return this._tileRequests.set(i,{tsTile:a,request:n,isFulfilled:!1,hasUpdateError:null,hasPartialFeatures:null,featureSet:null,graphics:[]}),t},_acquireRendererTile:function(e){var t=this._tileRenderer.acquireTile(e);return t.once("attach",function(){this._wglRenderer._scheduleUpdate()}.bind(this)),t},_releaseTile:function(e){this.featureLayer._fireUpdateStart(),this._tileRequests.get(e.key.id)&&(this._removeTile(e),this._wglRenderer._scheduleUpdate())},_addTile:function(e,t){this._reEvalGraphics=!0;var r=this._createGraphics(t.featureSet);this._registerGraphics(r);var i=this._tileRequests.get(e);i&&(i.isFulfilled=!0,i.hasUpdateError=!!t.errors.length,i.hasPartialFeatures=t.hasPartialFeatures||i.hasUpdateError,i.featureSet=t.featureSet,i.graphics=r)},_tileError:function(e){var t=this._tileRequests.get(e);t&&(t.isFulfilled=!0,t.hasUpdateError=!0,t.hasPartialFeatures=!0,t.graphics=[]),this._wglRenderer._scheduleUpdate()},_removeTile:function(e){var t=e.key.id,r=this._tileRequests.get(t);r.request.isFulfilled()||r.request.cancel(),this._tileRequests.delete(t),this._wglRenderer._cancelRedraw(t),this._reEvalGraphics=!0,this._tileRenderer.releaseTile(e),this._unregisterGraphics(r.graphics)},_getFeatureSet:function(e){var t={hashes:new Set,drill:[],featureSet:{features:[],geometryType:this.featureLayer.geometryType,spatialReference:this.map.spatialReference.toJson(),transform:null},hasPartialFeatures:!1,errors:[]},r=this.featureLayer._task,i=this._getResolutionParams(e),s=this._tileInfoView.getTileBounds([0,0,0,0],e);s=this._expandTileBounds(s,i);var a=f.acquire();return this._drillQuery(t,a,r,s,i,null,e).then(function(e){return f.release(a),this._calculateCentroid(e),e}.bind(this)).otherwise((function(e){throw f.release(a),e}))},_getResolutionParams:function(e){this._tileInfo.updateTileInfo(e);var t=this._tileInfo.lodAt(e.level);return{mode:"view",originPosition:"upperLeft",tolerance:this._quantizationFactor*t.resolution,extent:new l(e.extent[0],e.extent[1],e.extent[2],e.extent[3],this.map.spatialReference)}},_expandTileBounds:function(e,t){var r=this.featureLayer.geometryType,i=("esriGeometryPoint"===r||"esriGeometryMultipoint"===r||this._wglRenderer._returnCentroid?20:0)*t.tolerance;return e[0]-=i,e[1]-=i,e[2]+=i,e[3]+=i,e},_calculateCentroid:function(e){var t;if("esriGeometryPolygon"===e.featureSet.geometryType&&this._wglRenderer._returnCentroid){t=0;var r=e.featureSet.spatialReference,i=e.featureSet.transform,s={geometry:{x:null,y:null}},a=[s];e.featureSet.features.forEach((function(e){if(!e.centroid){var n=e.geometry;if(n){var l=(n=h.createPolygon(n,r,i)).getCentroid();l&&(s.geometry.x=l.x,s.geometry.y=l.y,u.quantize(a,"esriGeometryPoint",i),e.centroid={x:s.geometry.x,y:s.geometry.y},t++)}}}))}return t},_drillQuery:function(e,t,r,i,s,n,l,u){return u=null!=u?u:0,e.drill.push(i),this._query(r,i,s,n,l,u).then(function(o){if(this.featureLayer.supportsFormatPBF&&this.enablePBFQuery&&(o=m.convertToFeatureSet(g.parsePBFFeatureQuery(o))),this._appendFeatures(e.featureSet.features,t,o.features),o.transform&&(e.featureSet.transform=o.transform),o.exceededTransferLimit){if(u<this.maxDrillLevel){u++;var h=(i[2]-i[0])/2,c=(i[3]-i[1])/2,d=[i[0],i[1]+c,i[2]-h,i[3]],f=[i[0]+h,i[1]+c,i[2],i[3]],_=[i[0],i[1],i[2]-h,i[3]-c],p=[i[0]+h,i[1],i[2],i[3]-c];return a([this._drillQuery(e,t,r,d,s,n,l,u),this._drillQuery(e,t,r,f,s,n,l,u),this._drillQuery(e,t,r,_,s,n,l,u),this._drillQuery(e,t,r,p,s,n,l,u)]).then((function(){return e}))}e.hasPartialFeatures=!0}return e}.bind(this)).otherwise(function(t){if(!(u>0))throw t;e.errors.push(t)}.bind(this))},_appendFeatures:function(e,t,r){var i=e.length,s=r?r.length:0;e.length=i+s;var a,n,l,u=0,o=this.featureLayer.objectIdField;for(a=0;a<s;a++)l=(n=r[a]).attributes[o],t.has(l)||(e[i+u]=n,t.add(l),u++);e.length-=s-u},_query:function(e,t,r,i,s,a){var n=this.featureLayer,u=new o,h=n.getOutFields();h.length/n.fields.length>=.75&&(h=["*"]),u.geometry=new l(t[0],t[1],t[2],t[3],this.map.spatialReference),u.outFields=h,u.where=n.getDefinitionExpression(),u.returnGeometry=!0,u.returnCentroid=this._wglRenderer._returnCentroid,u.timeExtent=n._getOffsettedTE(n._mapTimeExtent),n._ts&&(u._ts=Date.now()),u.orderByFields=n.supportsAdvancedQueries?n.getOrderByFields():null,u.multipatchOption=n.multipatchOption,u.maxAllowableOffset="esriGeometryPolyline"===n.geometryType?r.tolerance:null,u.quantizationParameters=r;var c=n.advancedQueryCapabilities;c&&c.supportsQueryWithResultType&&(u.resultType="tile"),u.returnExceededLimitFeatures=a===this.maxDrillLevel,c&&c.supportsMaxRecordCountFactor&&(u.maxRecordCountFactor=this.maxRecordCountFactor);var d=n.supportsFormatPBF&&this.enablePBFQuery?{format:"pbf"}:null;return this._wrapInNewDeferred(e.rawExecute(u,d))},_wrapInNewDeferred:function(e){var t=new r((function(){e.isFulfilled()||e.cancel()}));return e.then((function(e){t.resolve(e)})).otherwise((function(e){t.reject(e)})),t.promise},_collectGraphics:function(){var e,t=this._featureMap,r=[];for(e in t)r.push(t[e]);return r},_createGraphics:function(e){return h.createGraphics(e)},_registerGraphics:function(e){var t=this.featureLayer.objectIdField;e.forEach(function(e){var r=e.attributes&&e.attributes[t];this._registerFeature(r,e),this._incRefCount(r)}.bind(this))},_unregisterGraphics:function(e){var t=this.featureLayer.objectIdField;e.forEach(function(e){var r=e.attributes&&e.attributes[t];this._decRefCount(r),this._unregisterFeature(r)}.bind(this))}});return Object.defineProperty(F.prototype,"graphics",{get:function(){return this._reEvalGraphics&&(this._reEvalGraphics=!1,this._graphicsVal=this._collectGraphics()),this._graphicsVal}}),i("extend-esri")&&t.setObject("layers._OnDemandDrillMode",F,s),F}));