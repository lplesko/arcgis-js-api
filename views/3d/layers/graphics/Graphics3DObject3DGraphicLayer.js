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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/maybe","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../../../geometry/support/aaBoundingBox","./featureExpressionInfoUtils","./Graphics3DGraphicElevationContext","./graphicUtils"],function(e,t,i,s,a,n,r,o,h,l,u,c){function d(e){return e.isVisible?e.getParameters().transparent?1:2:0}function g(e,t,i){return i||(i=h.create()),h.setMin(i,e.getBBMin(t)),h.setMax(i,e.getBBMax(t)),i}var b=function(){function e(t,i,s,a,n,r,o,h,l){this._edgeState=h,this.type="object3d",this._addedToStage=!1,this.alignedTerrainElevation=0,this.needsElevationUpdates=!1,this.graphics3DSymbolLayer=t,this.uniqueMaterials=a,this.uniqueGeometries=s,this.uniqueTextures=n,this.stageObject=i,this.elevationAligner=r,this.elevationContext=new u(o),this.stage=null,this.stageLayer=null,this._visible=!1,this.visibilityMode=null!=l?l:e.VisibilityModes.HIDE_FACERANGE}return Object.defineProperty(e.prototype,"isElevationSource",{get:function(){return!(!this.stageObject.metadata||!this.stageObject.metadata.isElevationSource)},enumerable:!0,configurable:!0}),e.prototype.initialize=function(e,t){if(this.stageLayer=e,this.stage=t,this.uniqueMaterials)for(var i=0;i<this.uniqueMaterials.length;i++)t.add(3,this.uniqueMaterials[i]);if(this.uniqueGeometries)for(var i=0;i<this.uniqueGeometries.length;i++)t.add(2,this.uniqueGeometries[i]);if(this.uniqueTextures)for(var i=0;i<this.uniqueTextures.length;i++)t.add(4,this.uniqueTextures[i]);t.add(1,this.stageObject)},e.prototype.layerOpacityChanged=function(e,t){if(!n.isNone(this._edgeState)){for(var i=d(this._edgeState.baseMaterial),s=!1,a=0,r=this._edgeState.edgeMaterials;a<r.length;a++){var o=r[a];o.objectTransparency!==i&&(o.objectTransparency=i,s=!0)}s&&this.resetEdgeObject(t);this.stage.renderView.ensureEdgeView().updateAllComponentOpacities(this.stageObject,[e])}},e.prototype.slicePlaneEnabledChanged=function(e,t){if(!n.isNone(this._edgeState)){this.stage.renderView.ensureEdgeView().updateAllComponentMaterials(this.stageObject,this._edgeState.edgeMaterials,{slicePlaneEnabled:e},!t),this._edgeState.slicePlaneEnabled=e}},e.prototype.setVisibility=function(t){if(null!=this.stage){if(this._visible!==t){if(this._visible=t,this._visible?this._addedToStage?this.stageObject.unhideAllComponents():(this.stageLayer.addObject(this.stageObject),this._addedToStage=!0):this.visibilityMode===e.VisibilityModes.HIDE_FACERANGE?this.stageObject.hideAllComponents():(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1),n.isSome(this._edgeState)){var i=this.stage.renderView.ensureEdgeView();i.hasObject(this.stageObject)?i.updateObjectVisibility(this.stageObject,t):t&&this.addEdgeObject(i,this._edgeState,!1)}return!0}return!1}},Object.defineProperty(e.prototype,"visible",{get:function(){return this._visible},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){var e=this.stage;if(this.stageLayer){if(this.uniqueMaterials)for(var t=0;t<this.uniqueMaterials.length;t++)e.remove(3,this.uniqueMaterials[t].id);if(this.uniqueGeometries)for(var t=0;t<this.uniqueGeometries.length;t++)e.remove(2,this.uniqueGeometries[t].id);if(this.uniqueTextures)for(var t=0;t<this.uniqueTextures.length;t++)e.remove(4,this.uniqueTextures[t].id)}e.remove(1,this.stageObject.id),this._addedToStage&&(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1);var i=this.stage.renderView.ensureEdgeView();i.hasObject(this.stageObject)&&i.removeObject(this.stageObject),this.stageObject.dispose(),this._visible=!1,this.stageLayer=null,this.stage=null},e.prototype.alignWithElevation=function(e,t,i,s){if(null!=this.elevationAligner){l.setContextFeature(this.elevationContext.featureExpressionInfoContext,i);var a=this.elevationAligner(this,this.elevationContext,e,t);null!=a&&(this.alignedTerrainElevation=a),this.resetEdgeObject(s)}},e.prototype.getBSRadius=function(){return this.stageObject.getBSRadius()},e.prototype.getCenterObjectSpace=function(e){return void 0===e&&(e=o.vec3f64.create()),r.vec3.copy(e,this.stageObject.getCenter(!0))},e.prototype.getBoundingBoxObjectSpace=function(e){return void 0===e&&(e=h.create()),g(this.stageObject,!0,e)},e.prototype.getProjectedBoundingBox=function(e,t,i,n,o){return a(this,void 0,void 0,function(){var a,l,u,d,g,b,d,O,y,E,m,S;return s(this,function(s){switch(s.label){case 0:for(a=this.getBoundingBoxObjectSpace(o),l=j,u=h.isPoint(a)?1:l.length,d=0;d<u;d++)g=l[d],v[0]=a[g[0]],v[1]=a[g[1]],v[2]=a[g[2]],r.vec3.transformMat4(v,v,this.stageObject.objectTransformation),p[3*d+0]=v[0],p[3*d+1]=v[1],p[3*d+2]=v[2];if(!e(p,0,u))return[2,null];for(h.empty(a),b=null,this.calculateRelativeScreenBounds&&(b=this.calculateRelativeScreenBounds()),d=0;d<3*u;d+=3){for(O=0;O<3;O++)a[O]=Math.min(a[O],p[d+O]),a[O+3]=Math.max(a[O+3],p[d+O]);b&&i.push({location:p.slice(d,d+3),screenSpaceBoundingRect:b})}return t&&t.service&&"absolute-height"!==this.elevationContext.mode?(h.center(a,f),y="relative-to-scene"===this.elevationContext.mode?"scene":"ground",E=void 0,t.useViewElevation?(E=t.service.getElevation(f[0],f[1],y),[3,4]):[3,1]):[3,5];case 1:return s.trys.push([1,3,,4]),m=c.demResolutionForBoundingBox(a,t),[4,t.service.queryElevation(f[0],f[1],n,m,y)];case 2:return E=s.sent(),[3,4];case 3:return S=s.sent(),E=null,[3,4];case 4:h.offset(a,0,0,-this.alignedTerrainElevation+E),s.label=5;case 5:return[2,a]}})})},e.prototype.addHighlight=function(e,t){var i=this.stageObject.highlightAllComponents(t);e.addObject(this.stageObject,i)},e.prototype.removeHighlight=function(e){e.removeObject(this.stageObject)},e.prototype.resetEdgeObject=function(e){if(!n.isNone(this._edgeState)){var t=this.stage.renderView.ensureEdgeView();t.removeObject(this.stageObject),this._visible&&this.addEdgeObject(t,this._edgeState,e)}},e.prototype.addEdgeObject=function(e,t,i){for(var s=d(t.baseMaterial),a=0,n=t.edgeMaterials;a<n.length;a++){n[a].objectTransparency=s}e.addObject(this.stageObject,t.edgeMaterials,{slicePlaneEnabled:t.slicePlaneEnabled},!i,t.addObjectSettings)},e}();!function(e){!function(e){e[e.REMOVE_OBJECT=0]="REMOVE_OBJECT",e[e.HIDE_FACERANGE=1]="HIDE_FACERANGE"}(e.VisibilityModes||(e.VisibilityModes={}))}(b||(b={}));var p=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],v=o.vec3f64.create(),f=o.vec3f64.create(),j=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];return b});