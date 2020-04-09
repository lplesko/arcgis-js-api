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

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();define(["require","exports","../../../graphic","../support/FeatureSet","../support/IdSet","../support/shared","../../polyfill/promiseUtils","../../../geometry/geometryEngineAsync"],(function(e,t,r,n,i,a,o,s){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;if(r.declaredClass="esri.layers.featureset.sources.FeatureLayerMemory",r._removeGeometry=!1,r._overrideFields=null,r.allf=null,t.spatialReference&&(r.spatialReference=t.spatialReference),r._transparent=!0,r._maxProcessing=1e3,r._layer=t.layer,r._wset=null,!1===r._layer.loaded)throw new Error("Can only create Feature FeatureSets from Loaded FeatureLayers. Use FeatureLayer or FeatureCollection classes");return void 0!==t.outFields&&(r._overrideFields=t.outFields),void 0!==t.includeGeometry&&(r._removeGeometry=!1===t.includeGeometry),r}return __extends(t,e),t.prototype._maxQueryRate=function(){return a.defaultMaxRecords},t.prototype.end=function(){return this._layer},t.prototype.optimisePagingFeatureQueries=function(e){},t.prototype.load=function(){var e=this;return null===this._loadPromise&&(this._loadPromise=o.create((function(t,r){e._initialiseFeatureSet(),t(e)}))),this._loadPromise},t.prototype._initialiseFeatureSet=function(){if(!this._layer.getMap())throw new Error("Can only use featuresets with layers attached to map");null==this.spatialReference&&(this.spatialReference=this._layer.getMap().spatialReference),this.geometryType=this._layer.geometryType,this.fields=this._layer.fields.slice(0);var e=this._layer.getOutFields();if(1===e.length&&"*"===e[0]);else{for(var t=[],r=0,n=this.fields;r<n.length;r++){if("esriFieldTypeOID"===(c=n[r]).type)t.push(c);else for(var i=0,o=e;i<o.length;i++){if(o[i].toLowerCase()===c.name.toLowerCase()){t.push(c);break}}}this.fields=t}if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{t=[];for(var s=[],l=0,u=this.fields;l<u.length;l++){var c;if("esriFieldTypeOID"===(c=u[l]).type)t.push(c),s.push(c.name);else for(var p=0,h=this._overrideFields;p<h.length;p++){if(h[p].toLowerCase()===c.name.toLowerCase()){t.push(c),s.push(c.name);break}}}this.fields=t,this._overrideFields=s}this.objectIdField=this._layer.objectIdField,this._databaseType=a.FeatureServiceDatabaseType.Standardised,this.typeIdField=this._layer.typeIdField,this.types=this._layer.types},t.prototype._isInFeatureSet=function(e){return a.IdState.InFeatureSet},t.prototype._transformSetWithIdChanges=function(e){},t.prototype._candidateIdTransform=function(e){return e},t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then((function(){return t._getFilteredSet("",null,null,null,e)})).then((function(e){return t._wset=e,e})):o.resolve(this._wset)},t.prototype._getFilteredSet=function(e,t,r,n,a){var s=this;try{return this._ensureLoaded().then((function(){if(null===s._wset){var n=[];s._allFeatures().forEach((function(e){void 0===e.geometry&&(e.geometry=null);var t=e.attributes[s._layer.objectIdField];n.push(t),s._featureCache[t]=e})),s._wset=new i([],n,!1,null)}var o=s._wset._known.slice(0);return s._checkCancelled(a),s.fetchAndRefineFeaturesByWhere(o,r,a).then((function(r){return s._checkCancelled(a),null!==t?s.fetchAndRefineFeaturesSpatially(r,t,e,a).then((function(e){return new i([],e,!1,null)})):new i([],r,!1,null)}))}))}catch(e){return o.reject(e)}},t.prototype.executeSpatialRelationTest=function(e,t,r,n){if(null===e.geometry)return o.resolve(!1);switch(t){case"esriSpatialRelEnvelopeIntersects":var i=a.shapeExtent(r),l=a.shapeExtent(e.geometry);return s.intersects(i,l);case"esriSpatialRelIntersects":return s.intersects(r,e.geometry);case"esriSpatialRelContains":return s.contains(r,e.geometry);case"esriSpatialRelOverlaps":return s.overlaps(r,e.geometry);case"esriSpatialRelWithin":return s.within(r,e.geometry);case"esriSpatialRelTouches":return s.touches(r,e.geometry);case"esriSpatialRelCrosses":return s.crosses(r,e.geometry);case"esriSpatialRelRelation":return s.relate(r,e.geometry,n)}},t.prototype.executeWhereTest=function(e,t){return t.testFeature(e)},t.prototype.fetchAndRefineFeaturesSpatially=function(e,t,r,n){var i=[],a=[],s="";r.indexOf("esriSpatialRelRelation")>=0&&(s=r.split(":")[1],r="esriSpatialRelRelation");for(var l=0;l<e.length;l++){var u=this._featureFromCache(e[l]);a.push(this.executeSpatialRelationTest(u,r,t,s))}return 0===a.length?o.resolve(i):o.all(a).then((function(t){for(var r=0;r<e.length;r++)!0===t[r]&&i.push(e[r]);return i}))},t.prototype.fetchAndRefineFeaturesByWhere=function(e,t,r){var n=[];if(null===t)return o.resolve(e);for(var i=0;i<e.length;i++){var a=this._featureFromCache(e[i]);this.executeWhereTest(a,t)&&n.push(e[i])}return o.resolve(n)},t.prototype._getFeatures=function(e,t,r,n){var i=[];-1!==t&&void 0===this._featureCache[t]&&i.push(t);for(var a=e._lastFetchedIndex;a<e._known.length&&(e._lastFetchedIndex+=1,!(void 0===this._featureCache[e._known[a]]&&(e._known[a]!==t&&i.push(e._known[a]),i.length>r)));a++);return 0===i.length?o.resolve("success"):o.reject(new Error("Unaccounted for Features. Not in Feature Collection"))},t.prototype._refineSetBlock=function(e,t,r){return o.resolve(e)},t.prototype._stat=function(e,t,r,n,i,a,s){return o.resolve({calculated:!1})},t.prototype._canDoAggregates=function(e,t,r,n,i){return o.resolve(!1)},t._cloneAttr=function(e){var t={};for(var r in e)t[r]=e[r];return t},t.prototype.cloneAttr=function(e){for(var t={},r=0,n=this.fields;r<n.length;r++){var i=n[r];t[i.name]=e[i.name]}return t},t.prototype.relationshipMetaData=function(){return[]},t.prototype.nativeCapabilities=function(){return{title:this._layer.name,source:this,canQueryRelated:!1,capabilities:{query:{maxRecordCount:1e3},queryRelated:{supportsOrderBy:!1,supportsPagination:!1}},databaseType:this._databaseType,requestStandardised:!1}},t.prototype._allFeatures=function(){var e=this;return null==this.allf&&(this.allf=[],this._layer.graphics.forEach((function(t){e.allf.push(new r(!0===e._removeGeometry?null:t.geometry,null,e.cloneAttr(t.attributes)))}))),this.allf},t.prototype.canBeBigDataFeatureSet=function(){return!1},t.prototype.shouldBeResolvedAsBigData=function(){return!1},t.prototype.queryAttachments=function(e,t,r,n){return o.resolve([])},t.prototype.getFeatureByObjectId=function(e,t){var r=this,n=null;return this._layer.graphics.forEach((function(t){t.attributes[r.objectIdField]===e&&(n=t)})),o.resolve(n)},t}(n)}));