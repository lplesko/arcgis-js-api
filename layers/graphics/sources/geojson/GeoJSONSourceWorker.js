// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/assignHelper","../../../../core/tsSupport/awaiterHelper","../../../../request","../../../../core/Error","../../../../geometry/support/jsonUtils","../../../../geometry/support/spatialReferenceUtils","../../featureConversionUtils","../../data/FeatureStore","../../data/projectionSupport","../../data/QueryEngine","./geojson","../support/clientSideDefaults","../support/sourceUtils","../../../support/FieldsIndex","../../../support/fieldType","../../../support/fieldUtils"],function(e,t,i,r,n,s,o,u,a,l,d,p,c,f,y,h,g,m,F){Object.defineProperty(t,"__esModule",{value:!0});var I={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},v=function(){function e(){this._queryEngine=null,this._featuresInfo=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._featuresInfo=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},e.prototype.load=function(e){return n(this,void 0,void 0,function(){var t,n,u,h,v,b,_,E,j,T,q,x,R,S,D,w,O,k,D,Q,A,G,P,Z,C,M,U,W;return i(this,function(i){switch(i.label){case 0:return t=[],[4,this._checkProjection(e.spatialReference)];case 1:return i.sent(),n=null,e.url?[4,s(e.url,{responseType:"json"})]:[3,4];case 2:return u=i.sent(),n=u.data,[4,f.validateGeoJSON(n)];case 3:i.sent(),i.label=4;case 4:if(h=f.inferLayerProperties(n,{geometryType:e.geometryType}),v=e.fields||h.fields||[],b=null!=e.hasZ?e.hasZ:h.hasZ,_=h.geometryType,E=e.objectIdField||"OBJECTID",j=e.spatialReference||a.WGS84,T=e.timeInfo,!_)throw new o("geojson-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");for("string"===h.objectIdFieldType&&t.push({name:"geojson-layer:unsupported-id-type",message:"Feature ids are of type string and can't be honored."}),v===h.fields&&h.unknownFields.length>0&&t.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:h.unknownFields}}),E&&(q=null,x=v.some(function(e){return e.name===E&&(q=e,!0)}),x?(q.type="esriFieldTypeOID",q.editable=!1,q.nullable=!1):v.unshift({alias:E,name:E,type:"esriFieldTypeOID",editable:!1,nullable:!1})),R=0,S=v;R<S.length;R++){if(D=S[R],null==D.name&&(D.name=D.alias),null==D.alias&&(D.alias=D.name),!D.name)throw new o("geojson-layer:invalid-field-name","field name is missing",{field:D});if(D.name===E&&(D.type="esriFieldTypeOID"),-1===m.kebabDict.jsonValues.indexOf(D.type))throw new o("geojson-layer:invalid-field-type",'invalid type for field "'+D.name+'"',{field:D})}for(w={},this._requiredFields=[],O=0,k=v;O<k.length;O++)D=k[O],"esriFieldTypeOID"!==D.type&&"esriFieldTypeGlobalID"!==D.type&&(D.editable=null==D.editable||!!D.editable,D.nullable=null==D.nullable||!!D.nullable,Q=F.getFieldDefaultValue(D),D.nullable||void 0!==Q?w[D.name]=Q:this._requiredFields.push(D));if(this._fieldsIndex=new g(v),T&&(T.startTimeField&&(A=this._fieldsIndex.get(T.startTimeField),A?(T.startTimeField=A.name,A.type="esriFieldTypeDate"):T.startTimeField=null),T.endTimeField&&(G=this._fieldsIndex.get(T.endTimeField),G?(T.endTimeField=G.name,G.type="esriFieldTypeDate"):T.endTimeField=null),T.trackIdField&&(P=this._fieldsIndex.get(T.trackIdField),P?T.trackIdField=P.name:(T.trackIdField=null,t.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))),T.startTimeField||T.endTimeField||(t.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:T}}),T=null)),Z={warnings:t,featureErrors:[],layerDefinition:r({},I,{drawingInfo:y.createDrawingInfo(_),templates:y.createDefaultTemplate(w),extent:null,geometryType:_,objectIdField:E,fields:v,hasZ:!!b,timeInfo:T})},this._queryEngine=new c.default({fields:v,geometryType:_,hasM:!1,hasZ:b,objectIdField:E,spatialReference:j,timeInfo:T,featureStore:new d.default({geometryType:_,hasM:!1,hasZ:b})}),this._createDefaultAttributes=y.createDefaultAttributesFunction(w,E),this._featuresInfo={nextObjectId:h.maxObjectId+1,geometryType:_,hasZ:b,ignoreIds:"string"===h.objectIdFieldType},C=f.createOptimizedFeatures(n,this._featuresInfo),!a.equals(j,a.WGS84))for(M=0,U=C;M<U.length;M++)W=U[M],W.geometry&&(W.geometry=l.convertFromGeometry(p.project(l.convertToGeometry(W.geometry,_,b,!1),a.WGS84,j)));return this._loadInitialFeatures(Z,C),[2,Z]}})})},e.prototype.applyEdits=function(e){return n(this,void 0,void 0,function(){var t,r=this;return i(this,function(i){return t=this._queryEngine.spatialReference,[2,p.checkProjectionSupport(e.adds,t).then(function(){return p.checkProjectionSupport(e.updates,t)}).then(function(){return r._applyEdits(e)})]})})},e.prototype.queryFeatures=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]})})},e.prototype.queryFeatureCount=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]})})},e.prototype.queryObjectIds=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]})})},e.prototype.queryExtent=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),n(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]})})},e.prototype._loadInitialFeatures=function(e,t){for(var i=this._queryEngine.featureStore,r=[],n=0,s=t;n<s.length;n++){var o=s[n],u=this._createDefaultAttributes(),a=h.mixAttributes(this._fieldsIndex,this._requiredFields,u,o.attributes,!0,e.warnings);a?e.featureErrors.push(a):(this._assignObjectId(u,o.attributes,!0),o.attributes=u,r.push(o))}if(i.addMany(r),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var l=this._queryEngine.timeExtent,d=l.start,p=l.end;e.layerDefinition.timeInfo.timeExtent=[d,p]}return e},e.prototype._applyEdits=function(e){var t=e.adds,i=e.updates,r=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),r&&r.length){for(var s=0,o=r;s<o.length;s++){var u=o[s];n.deleteResults.push(h.createFeatureEditSuccessResult(u))}this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:n}},e.prototype._applyAddEdits=function(e,t){for(var i=e.addResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,o=r.hasZ,a=r.objectIdField,d=r.spatialReference,c=r.featureStore,f=[],y=0,g=t;y<g.length;y++){var m=g[y];if(m.geometry&&n!==u.getJsonType(m.geometry))i.push(h.createFeatureEditErrorResult("Incorrect geometry type."));else{var F=this._createDefaultAttributes(),I=h.mixAttributes(this._fieldsIndex,this._requiredFields,F,m.attributes);if(I)i.push(I);else{if(this._assignObjectId(F,m.attributes),m.attributes=F,null!=m.uid){var v=m.attributes[a];e.uidToObjectId[m.uid]=v}m.geometry&&(m.geometry=p.project(m.geometry,m.geometry.spatialReference,d)),f.push(m),i.push(h.createFeatureEditSuccessResult(m.attributes[a]))}}}c.addMany(l.convertFromFeatures([],f,n,o,s,a))},e.prototype._applyUpdateEdits=function(e,t){for(var i=e.updateResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,o=r.hasZ,a=r.objectIdField,d=r.spatialReference,c=r.featureStore,f=0,y=t;f<y.length;f++){var g=y[f],m=g.attributes,F=g.geometry,I=m&&m[a];if(null!=I)if(c.has(I)){var v=l.convertToFeature(c.getFeature(I),n,o,s);if(F){if(n!==u.getJsonType(F)){i.push(h.createFeatureEditErrorResult("Incorrect geometry type."));continue}v.geometry=p.project(F,F.spatialReference,d)}if(m){var b=h.mixAttributes(this._fieldsIndex,this._requiredFields,v.attributes,m);if(b){i.push(b);continue}}c.add(l.convertFromFeature(v,n,o,s,a)),i.push(h.createFeatureEditSuccessResult(I))}else i.push(h.createFeatureEditErrorResult("Feature with object id "+I+" missing"));else i.push(h.createFeatureEditErrorResult("Identifier field "+a+" missing"))}},e.prototype._assignObjectId=function(e,t,i){void 0===i&&(i=!1);var r=this._queryEngine.objectIdField;i&&t&&isFinite(t[r])?e[r]=t[r]:e[r]=this._featuresInfo.nextObjectId++},e.prototype._checkProjection=function(e){return n(this,void 0,void 0,function(){var t;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,p.checkProjectionSupport(a.WGS84,e)];case 1:return i.sent(),[3,3];case 2:throw t=i.sent(),new o("geojson-layer","Projection not supported");case 3:return[2]}})})},e}();t.default=v});