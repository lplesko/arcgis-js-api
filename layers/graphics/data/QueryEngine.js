// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/lang","../../../core/MemCache","../../../core/promiseUtils","../../../core/SetUtils","../../../core/unitUtils","../../../geometry/support/aaBoundingBox","../../../geometry/support/aaBoundingRect","../../../geometry/support/boundsUtils","../../../geometry/support/jsonUtils","../../../geometry/support/spatialReferenceUtils","./attributeSupport","./projectionSupport","./QueryEngineCapabilities","./QueryEngineResult","./spatialQuerySupport","./timeSupport","./utils","../../support/FieldsIndex","../../support/PromiseQueue"],(function(e,t,r,n,i,s,u,o,a,c,h,l,f,d,p,y,m,_,g,x,v,Q,S,E,b){Object.defineProperty(t,"__esModule",{value:!0});var R=function(e,t,r,n,i){void 0===t&&(t=null),this.attributes=e,this.geometry=r,this.centroid=n,this.filterFlags=i,this.groupId=-1,this.localId=t};t.Feature=R;var I=new Set,F=new o.MemCacheStorage(2e6),w=0,T=function(){function e(e){var t=this;this.capabilities={query:g.queryCapabilities},this.geometryType=e.geometryType,this.hasM=e.hasM,this.hasZ=e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this._changeHandle=this.featureStore.events.on("changed",(function(){return t.clearCache()})),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new o.MemCache(w+++"$$",F)),this.fieldsIndex=new E(e.fields),e.scheduler&&e.task&&(this._frameQueue=new b.default,this._frameTask=e.scheduler.registerTask(e.task,(function(e){return t._update(e)}),(function(){return t._frameQueue.length>0})))}return e.prototype.destroy=function(){this._frameTask&&(this._frameTask.remove(),this._frameTask=null,this._frameQueue.cancelAll(),this._frameQueue=null),this.clearCache(),this._geometryQueryCache&&this._geometryQueryCache.destroy(),this._changeHandle&&(this._changeHandle.remove(),this._changeHandle=null),this.fieldsIndex.destroy()},Object.defineProperty(e.prototype,"featureAdapter",{get:function(){return this.featureStore.featureAdapter},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"fullExtent",{get:function(){var e=this.featureStore.fullBounds;return e?{xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:S.cleanFromGeometryEngine(this.spatialReference)}:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"timeExtent",{get:function(){return this.timeInfo?this._timeExtent?this._timeExtent:(this._timeExtent=Q.getTimeExtent(this.timeInfo,this.featureStore),this._timeExtent):null},enumerable:!0,configurable:!0}),e.prototype.clearCache=function(){this._geometryQueryCache&&this._geometryQueryCache.clear(),this._allItems=null,this._timeExtent=null},e.prototype.executeQuery=function(e,t){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t,r,i,s=this;return n(this,(function(n){switch(n.label){case 0:t=u.clone(e),n.label=1;case 1:return n.trys.push([1,8,,9]),[4,this._schedule((function(){return S.normalizeQuery(t,s.definitionExpression,s.spatialReference)}))];case 2:return t=n.sent(),[4,this._reschedule((function(){return s._checkQuerySupport(t)}))];case 3:return t=n.sent(),[4,this._reschedule((function(){return s._executeGeometryQuery(t)}))];case 4:return r=n.sent(),[4,this._reschedule((function(){return r.executeObjectIdsQuery(t)}))];case 5:return r=n.sent(),[4,this._reschedule((function(){return r.executeTimeQuery(t)}))];case 6:return r=n.sent(),[4,this._reschedule((function(){return r.executeAttributesQuery(t)}))];case 7:return r=n.sent(),[3,9];case 8:if((i=n.sent())!==S.QUERY_ENGINE_EMPTY_RESULT)throw i;return r=new x.default([],null,this),[3,9];case 9:return[2,r.createQueryResponse(t)]}}))}))},e.prototype.executeQueryForCount=function(e,t){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t,r,i,s=this;return n(this,(function(n){switch(n.label){case 0:(t=u.clone(e)).returnGeometry=!1,t.returnCentroid=!1,t.outSR=null,n.label=1;case 1:return n.trys.push([1,8,,9]),[4,this._schedule((function(){return S.normalizeQuery(t,s.definitionExpression,s.spatialReference)}))];case 2:return t=n.sent(),[4,this._reschedule((function(){return s._checkQuerySupport(t)}))];case 3:return t=n.sent(),[4,this._reschedule((function(){return s._executeGeometryQuery(t)}))];case 4:return r=n.sent(),[4,this._reschedule((function(){return r.executeObjectIdsQuery(t)}))];case 5:return r=n.sent(),[4,this._reschedule((function(){return r.executeTimeQuery(t)}))];case 6:return r=n.sent(),[4,this._reschedule((function(){return r.executeAttributesQuery(t)}))];case 7:return[2,(r=n.sent()).size];case 8:if((i=n.sent())!==S.QUERY_ENGINE_EMPTY_RESULT)throw i;return[2,0];case 9:return[2]}}))}))},e.prototype.executeQueryForExtent=function(e,t){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t,r,i,s,o,a,c,f,d=this;return n(this,(function(n){switch(n.label){case 0:t=u.clone(e),i=t.outSR,n.label=1;case 1:return n.trys.push([1,8,,9]),[4,this._schedule((function(){return S.normalizeQuery(t,d.definitionExpression,d.spatialReference)}))];case 2:return t=n.sent(),[4,this._reschedule((function(){return d._checkQuerySupport(t)}))];case 3:return(t=n.sent()).returnGeometry=!0,t.returnCentroid=!1,t.outSR=null,[4,this._reschedule((function(){return d._executeGeometryQuery(t)}))];case 4:return r=n.sent(),[4,this._reschedule((function(){return r.executeObjectIdsQuery(t)}))];case 5:return r=n.sent(),[4,this._reschedule((function(){return r.executeTimeQuery(t)}))];case 6:return r=n.sent(),[4,this._reschedule((function(){return r.executeAttributesQuery(t)}))];case 7:return r=n.sent(),(s=r.size)?(l.set(G,l.NEGATIVE_INFINITY),this.featureStore.forEachBounds(r.items,(function(e){return l.expand(G,e)}),C),o={xmin:G[0],ymin:G[1],xmax:G[3],ymax:G[4],spatialReference:S.cleanFromGeometryEngine(this.spatialReference)},this.hasZ&&isFinite(G[2])&&isFinite(G[5])&&(o.zmin=G[2],o.zmax=G[5]),(a=_.project(o,r.spatialReference,i)).spatialReference=S.cleanFromGeometryEngine(i||this.spatialReference),a.xmax-a.xmin==0&&(c=h.getMetersPerUnitForSR(a.spatialReference),a.xmin-=c,a.xmax+=c),a.ymax-a.ymin==0&&(c=h.getMetersPerUnitForSR(a.spatialReference),a.ymin-=c,a.ymax+=c),this.hasZ&&null!=a.zmin&&null!=a.zmax&&a.zmax-a.zmin==0&&(c=h.getMetersPerUnitForSR(a.spatialReference),a.zmin-=c,a.zmax+=c),[2,{count:s,extent:a}]):[2,{count:s,extent:null}];case 8:if((f=n.sent())===S.QUERY_ENGINE_EMPTY_RESULT)return[2,{count:0,extent:null}];throw f;case 9:return[2]}}))}))},e.prototype.executeQueryForIds=function(e,t){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){return n(this,(function(r){return[2,this.executeQueryForIdSet(e,t).then((function(e){return c.valuesOfSet(e)}))]}))}))},e.prototype.executeQueryForIdSet=function(e,t){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t,r,i,s,o,a=this;return n(this,(function(n){switch(n.label){case 0:(t=u.clone(e)).returnGeometry=!1,t.returnCentroid=!1,t.outSR=null,n.label=1;case 1:return n.trys.push([1,9,,10]),[4,this._schedule((function(){return S.normalizeQuery(t,a.definitionExpression,a.spatialReference)}))];case 2:return t=n.sent(),[4,this._reschedule((function(){return a._checkQuerySupport(t)}))];case 3:return t=n.sent(),[4,this._reschedule((function(){return a._executeGeometryQuery(t)}))];case 4:return r=n.sent(),[4,this._reschedule((function(){return r.executeObjectIdsQuery(t)}))];case 5:return r=n.sent(),[4,this._reschedule((function(){return r.executeTimeQuery(t)}))];case 6:return r=n.sent(),[4,this._reschedule((function(){return r.executeAttributesQuery(t)}))];case 7:return r=n.sent(),i=r.items,s=new Set,[4,this._reschedule((function(){for(var e=0,t=i;e<t.length;e++){var n=t[e];s.add(r.featureAdapter.getObjectId(n))}}))];case 8:return n.sent(),[2,s];case 9:if((o=n.sent())===S.QUERY_ENGINE_EMPTY_RESULT)return[2,new Set];throw o;case 10:return[2]}}))}))},e.prototype.executeQueryForLatestObservations=function(e,t){return void 0===e&&(e={}),i(this,void 0,void 0,(function(){var t,r,i,o=this;return n(this,(function(n){switch(n.label){case 0:if(!this.timeInfo||!this.timeInfo.trackIdField)throw new s("feature-store:unsupported-query","Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});t=u.clone(e),n.label=1;case 1:return n.trys.push([1,9,,10]),[4,this._schedule((function(){return S.normalizeQuery(t,o.definitionExpression,o.spatialReference)}))];case 2:return t=n.sent(),[4,this._reschedule((function(){return o._checkQuerySupport(t)}))];case 3:return t=n.sent(),[4,this._reschedule((function(){return o._executeGeometryQuery(t)}))];case 4:return r=n.sent(),[4,this._reschedule((function(){return r.executeObjectIdsQuery(t)}))];case 5:return r=n.sent(),[4,this._reschedule((function(){return r.executeTimeQuery(t)}))];case 6:return r=n.sent(),[4,this._reschedule((function(){return r.executeAttributesQuery(t)}))];case 7:return r=n.sent(),[4,this._reschedule((function(){return r.filterLatest()}))];case 8:return r=n.sent(),[3,10];case 9:if((i=n.sent())!==S.QUERY_ENGINE_EMPTY_RESULT)throw i;return r=new x.default([],null,this),[3,10];case 10:return[2,r.createQueryResponse(t)]}}))}))},e.prototype._schedule=function(e){return i(this,void 0,void 0,(function(){return n(this,(function(t){return this._frameQueue?[2,this._frameQueue.push(e)]:[2,e()]}))}))},e.prototype._reschedule=function(e){return i(this,void 0,void 0,(function(){return n(this,(function(t){return this._frameQueue?[2,this._frameQueue.unshift(e)]:[2,e()]}))}))},e.prototype._update=function(e){for(this._budget=e;!e.done&&this._frameQueue&&this._frameQueue.process();)e.madeProgress();this._budget=null},e.prototype._getAll=function(){if(!this._allItems){var e=[];this.featureStore.forEach((function(t){return e.push(t)})),this._allItems=new x.default(e,null,this)}return this._allItems},e.prototype._executeGeometryQuery=function(e){return i(this,void 0,void 0,(function(){var t,r,s,u,o,a,c,h,l,f,d,p,m,_,g,Q,S,E,b,R=this;return n(this,(function(I){switch(I.label){case 0:if(t=e.geometry,r=e.outSR,s=e.spatialRel,u=y.isValid(r)&&!y.equals(this.spatialReference,r),(o=this._geometryQueryCache?u?JSON.stringify({geometry:t,spatialRelationship:s,outSpatialReference:r}):JSON.stringify({geometry:t,spatialRelationship:s}):null)&&void 0!==(a=this._geometryQueryCache.get(o)))return[2,a];if(c=function(t){return i(R,void 0,void 0,(function(){var i;return n(this,(function(n){switch(n.label){case 0:return u&&(e.returnGeometry||e.returnCentroid)?[4,t.project(r)]:[3,2];case 1:return i=n.sent(),o&&this._geometryQueryCache.put(o,i,i.size||1),[2,i];case 2:return o&&this._geometryQueryCache.put(o,t,t.size||1),[2,t]}}))}))},!t)return[2,c(this._getAll())];if(h=this.featureAdapter,"esriSpatialRelDisjoint"!==s)return[3,3];if(!(l=this._searchFeatures(this._getQueryBBoxes(t))).length)return[2,c(this._getAll())];for(p=new Set,m=0,_=l;m<_.length;m++)g=_[m],p.add(h.getObjectId(g));return[4,this._reschedule((function(){var e=0;f=new Array(p.size),R.featureStore.forEach((function(t){return f[e++]=t})),d=p}))];case 1:return I.sent(),[4,this._reschedule((function(){return i(R,void 0,void 0,(function(){var e,r,i;return n(this,(function(n){switch(n.label){case 0:return[4,v.getSpatialQueryOperator(s,t,this)];case 1:return e=n.sent(),r=function(t){return!d.has(h.getObjectId(t))||e(h.getGeometry(t))},i=x.default.bind,[4,this._runSpatialFilter(f,r)];case 2:return[2,new(i.apply(x.default,[void 0,n.sent(),t,this]))]}}))}))}))];case 2:return S=I.sent(),[2,c(S)];case 3:return(Q=this._searchFeatures(this._getQueryBBoxes(t))).length?this._canExecuteSoloPass(t,e)?[2,c(new x.default(Q,t,this))]:[4,v.getSpatialQueryOperator(s,t,this)]:(S=new x.default([],t,this),o&&this._geometryQueryCache.put(o,S,S.size||1),[2,S]);case 4:return E=I.sent(),[4,this._runSpatialFilter(Q,(function(e){return E(h.getGeometry(e))}))];case 5:return b=I.sent(),[2,c(new x.default(b,t,this))]}}))}))},e.prototype._runSpatialFilter=function(e,t){return i(this,void 0,void 0,(function(){var r,s,u,o=this;return n(this,(function(a){return t?this._budget?(r=0,s=new Array,u=function(){return i(o,void 0,void 0,(function(){var i;return n(this,(function(n){switch(n.label){case 0:return r<e.length?(i=e[r],t(i)&&s.push(i),this._budget.done?[4,this._reschedule((function(){return u()}))]:[3,2]):[3,3];case 1:n.sent(),n.label=2;case 2:return++r,[3,0];case 3:return[2]}}))}))},[2,this._reschedule((function(){return u()})).then((function(){return s}))]):[2,e.filter((function(e){return t(e)}))]:[2,e]}))}))},e.prototype._canExecuteSoloPass=function(e,t){var r=this.geometryType,n=t.spatialRel;return v.canQueryWithRBush(e)&&("esriSpatialRelEnvelopeIntersects"===n||"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===n||"esriSpatialRelContains"===n||"esriSpatialRelWithin"===n))},e.prototype._getQueryBBoxes=function(e){if(v.canQueryWithRBush(e)){if(p.isExtent(e))return[f.fromValues(e.xmin,e.ymin,e.xmax,e.ymax)];if(p.isPolygon(e))return e.rings.map((function(e){return f.fromValues(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))}))}return[d.getBoundsXY(f.create(),e)]},e.prototype._searchFeatures=function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];this.featureStore.forEachInBounds(n,(function(e){I.add(e)}))}var i=new Array(I.size),s=0;return I.forEach((function(e){return i[s++]=e})),I.clear(),i},e.prototype._checkQuerySupport=function(e){return i(this,void 0,void 0,(function(){return n(this,(function(t){if(e.distance<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new s("feature-store:unsupported-query","Unsupported query options",{query:e});return[2,a.all([this._checkAttributesQuerySupport(e),this._checkStatisticsQuerySupport(e),v.checkSpatialQuerySupport(e,this.geometryType,this.spatialReference),_.checkProjectionSupport(this.spatialReference,e.outSR)]).then((function(){return e}))]}))}))},e.prototype._checkAttributesQuerySupport=function(e){var t=e.outFields,r=e.orderByFields,n=e.returnDistinctValues;if(r&&r.length>0){var i=r.map((function(e){var t=e.toLowerCase();return t.indexOf(" asc")>-1?t.split(" asc")[0]:t.indexOf(" desc")>-1?t.split(" desc")[0]:e}));m.validateFields(this.fieldsIndex,i,"orderByFields contains missing fields")}if(t&&t.length>0)m.validateFields(this.fieldsIndex,t,"outFields contains missing fields");else if(n)throw new s("feature-store:unsupported-query","outFields should be specified for returnDistinctValues",{query:e});m.validateWhere(this.fieldsIndex,e.where)},e.prototype._checkStatisticsQuerySupport=function(e){return i(this,void 0,void 0,(function(){var t,r,i,u,o,a,c,h,l,f,d;return n(this,(function(n){if(t=e.outStatistics,r=e.groupByFieldsForStatistics,i=e.having,u=r&&r.length,o=t&&t.length,i){if(!u||!o)throw new s("feature-store:unsupported-query","outStatistics and groupByFieldsForStatistics should be specified with having",{query:e});m.validateHaving(this.fieldsIndex,i,t)}if(o){if(t.some((function(e){return"exceedslimit"===e.statisticType})))return[2];for(a=t.map((function(e){return e.onStatisticField})),m.validateFields(this.fieldsIndex,a,"onStatisticFields contains missing fields"),u&&m.validateFields(this.fieldsIndex,r,"groupByFieldsForStatistics contains missing fields"),c=0,h=t;c<h.length;c++)if(l=h[c],f=l.onStatisticField,d=l.statisticType,(!u||"count"!==d)&&f&&m.hasInvalidFieldType(f,this.fieldsIndex))throw new s("feature-store:unsupported-query","outStatistics contains non-numeric fields",{definition:l,query:e})}return[2]}))}))},e}();t.default=T;var C=l.create(),G=l.create()}));