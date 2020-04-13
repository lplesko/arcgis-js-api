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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../Graphic","../../../../core/Accessor","../../../../core/compilerUtils","../../../../core/Handles","../../../../core/promiseUtils","../../../../core/watchUtils","../../../../core/accessorSupport/decorators","../../../../core/accessorSupport/diffUtils","../../../../geometry/support/webMercatorUtils","../../../../tasks/support/Query","./constants","./Graphics3DCore","./Graphics3DElevationAlignment","./Graphics3DFilterVisibility","./Graphics3DFrustumVisibility","./Graphics3DObjectStates","./Graphics3DScaleVisibility","./graphicUtils","../support/attributeUtils","../../../support/WatchUpdatingTracking"],(function(t,e,i,s,r,n,a,o,p,l,u,c,d,h,y,g,f,b,m,v,w,E,V,C,x,S){Object.defineProperty(e,"__esModule",{value:!0});var O=function(t){function e(e){var i=t.call(this,e)||this;return i._handles=new l,i.watchUpdatingTracking=new S.WatchUpdatingTracking,i.suspendResumeExtentMode="computed",i.dataExtent=null,i.suspendResumeExtent=null,i}return i(e,t),Object.defineProperty(e.prototype,"suspended",{get:function(){return this.scaleVisibility&&this.scaleVisibility.suspended||this.frustumVisibility&&this.frustumVisibility.suspended},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"suspendInfo",{get:function(){var t={};return this.scaleVisibility&&this.scaleVisibility.suspended&&(t.outsideScaleRange=!0),this.frustumVisibility&&this.frustumVisibility.suspended&&(t.outsideOfView=!0),t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return!!(this.graphicsCore&&this.graphicsCore.updating||this.frustumVisibility&&this.frustumVisibility.updating||this.watchUpdatingTracking&&this.watchUpdatingTracking.updating)},enumerable:!0,configurable:!0}),e.prototype.normalizeCtorArgs=function(t){var e=t.frustumVisibilityEnabled?new w:null,i=t.scaleVisibilityEnabled?new V:null,s=(t.filterVisibilityEnabled||t.timeExtentVisibilityEnabled)&&"multipatch"!==t.layer.geometryType?new v.Graphics3DFilterVisibility:null,r=t.elevationAlignmentEnabled?new m:null;return{graphicsCore:new b.Graphics3DCore({owner:t.owner,layer:t.layer,preferredUpdatePolicy:t.preferredUpdatePolicy,elevationFeatureExpressionEnabled:t.elevationFeatureExpressionEnabled,graphicSymbolSupported:!1,hasZ:t.owner.hasZ,hasM:t.owner.hasM}),frustumVisibility:e,scaleVisibility:i,filterVisibility:s,elevationAlignment:r,updateClippingExtent:t.updateClippingExtent,suspendResumeExtentMode:t.suspendResumeExtentMode,dataExtent:t.dataExtent}},e.prototype.initialize=function(){var t=this;this.scaleVisibility&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",(function(){return t.scaleVisibility.layerMinMaxScaleChangeHandler()})),this.filterVisibility&&(this.watchUpdatingTracking.add(this.owner,"filter",(function(){return t.filterVisibility.filterChanged()})),this.watchUpdatingTracking.add(this.owner,"timeExtent",(function(){return t.filterVisibility.filterChanged()}))),this.elevationAlignment&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",(function(e,i){h.diff(e,i)&&t.watchUpdatingTracking.addPromise(t.graphicsCore.elevationInfoChange())})),this.watchUpdatingTracking.add(this.layer,"labelsVisible",(function(){return t.graphicsCore.updateVisibilityInfo()})),this.watchUpdatingTracking.add(this.layer,"labelingInfo",(function(e,i){h.diff(e,i)&&t.graphicsCore.updateLabelingInfo()}))},e.prototype.setup=function(){return n(this,void 0,void 0,(function(){var t,e,i,s,n=this;return r(this,(function(r){switch(r.label){case 0:return this.frustumVisibility&&this.frustumVisibility.setup(this.owner),t=this.owner,e=this.owner.view.basemapTerrain,i=function(t,e,i){return n.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(t,e,i)},this.scaleVisibility&&this.scaleVisibility.setup(t,this.layer,i,this.graphicsCore,e),this.filterVisibility&&("filter"in t||"timeExtent"in t)&&this.filterVisibility.setup(t,this.graphicsCore),this.elevationAlignment&&(s=t.view.elevationProvider,this.elevationAlignment.setup(t,i,this.graphicsCore,s)),this._set("objectStates",new E.Graphics3DObjectStates(this.graphicsCore)),this._set("labeling",this.owner.view.labeler.addGraphicsOwner(this.graphicsCore,this.scaleVisibility)),this._set("deconfliction",t.view.deconflictor.addGraphicsOwner(this.graphicsCore)),[4,u.logOnError(this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,filterVisibility:this.filterVisibility,deconflictor:this.deconfliction,labeler:this.labeling,objectStates:this.objectStates}))];case 1:return r.sent(),this.watchUpdatingTracking.add(this.layer,"renderer",(function(t){return n.watchUpdatingTracking.addPromise(n.graphicsCore.rendererChange(t))})),this.watchUpdatingTracking.add(t,"fullOpacity",(function(){return n.graphicsCore.opacityChange()})),this.setupSuspendResumeExtent(),this.updateClippingExtent&&(this.watchUpdatingTracking.add(t.view,"clippingArea",(function(){return n._updateClippingExtent()})),this._updateClippingExtent()),this.graphicsCore.startCreateGraphics(),this.graphicsCore.labelsEnabled?[4,u.logOnError(this.graphicsCore.updateLabelingInfo())]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))},e.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null);for(var t=0,e=["watchUpdatingTracking","frustumVisibility","scaleVisibility","filterVisibility","elevationAlignment","objectStates","graphicsCore"];t<e.length;t++){var i=e[t],s=this[i];s&&(s.destroy(),this._set(i,null))}this._set("layer",null),this._set("owner",null)},e.prototype.highlight=function(t,e){var i=this;if(t instanceof g){var s=this.objectStates.acquireSet(0,e),r=s.set,n=s.handle;return this.owner.queryObjectIds(t).then((function(t){return i.objectStates.setObjectIds(r,t)})),n}if("number"==typeof t)return this.highlight([t],e);if(t instanceof a)return this.highlight([t],e);if("toArray"in t&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof a){var o=t;if(!e||!o[0].attributes||null===x.attributeLookup(o[0].attributes,e)){var p=o.map((function(t){return t.uid})),l=this.objectStates.acquireSet(0,null),u=l.set;n=l.handle;return this.objectStates.setUids(u,p),n}t=o.map((function(t){return x.attributeLookup(t.attributes,e)}))}if("number"==typeof t[0]){var c=t,d=this.objectStates.acquireSet(0,e);u=d.set,n=d.handle;return this.objectStates.setObjectIds(u,c),n}}return R},e.prototype._updateClippingExtent=function(){var t=this.owner.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.owner.view.spatialReference)&&(this.updateClippingExtent(t)||this.graphicsCore.recreateAllGraphics())},e.prototype.setupSuspendResumeExtent=function(){var t=this;(this.frustumVisibility||this.scaleVisibility)&&this._handles.add(c.init(this,"suspendResumeExtentMode",(function(){switch(t._handles.remove(U),t.suspendResumeExtentMode){case"computed":t._handles.add(c.init(t.graphicsCore,"computedExtent",(function(e){return t.updateSuspendResumeExtent(e)})),U);break;case"data":t._handles.add(c.init(t,"dataExtent",(function(e){return t.updateSuspendResumeExtent(e)})),U);break;default:p.neverReached(t.suspendResumeExtentMode)}})))},e.prototype.updateSuspendResumeExtent=function(t){t?this.suspendResumeExtentChanged(this.extentToSuspendResumeRect(t,this.suspendResumeExtent)):this.suspendResumeExtentChanged(null)},e.prototype.extentToSuspendResumeRect=function(t,e){var i=this.owner.view.spatialReference;if(!t.spatialReference.equals(i)){if(!y.canProject(t,i))return;t=y.project(t,i)}return C.enlargeExtent(t,e,f.SUSPEND_RESUME_EXTENT_OPTIMISM)},e.prototype.suspendResumeExtentChanged=function(t){this.frustumVisibility&&this.frustumVisibility.setExtent(t),this.scaleVisibility&&this.scaleVisibility.setExtent(t)},s([d.property({aliasOf:"graphicsCore.layer"})],e.prototype,"layer",void 0),s([d.property({aliasOf:"graphicsCore.owner"})],e.prototype,"owner",void 0),s([d.property({constructOnly:!0})],e.prototype,"updateClippingExtent",void 0),s([d.property({constructOnly:!0})],e.prototype,"graphicsCore",void 0),s([d.property({constructOnly:!0})],e.prototype,"scaleVisibility",void 0),s([d.property({constructOnly:!0})],e.prototype,"filterVisibility",void 0),s([d.property({constructOnly:!0})],e.prototype,"elevationAlignment",void 0),s([d.property({constructOnly:!0})],e.prototype,"frustumVisibility",void 0),s([d.property({readOnly:!0})],e.prototype,"deconfliction",void 0),s([d.property({readOnly:!0})],e.prototype,"labeling",void 0),s([d.property({readOnly:!0})],e.prototype,"objectStates",void 0),s([d.property({readOnly:!0})],e.prototype,"watchUpdatingTracking",void 0),s([d.property()],e.prototype,"suspendResumeExtentMode",void 0),s([d.property()],e.prototype,"dataExtent",void 0),s([d.property({readOnly:!0,dependsOn:["scaleVisibility.suspended","frustumVisibility.suspended"]})],e.prototype,"suspended",null),s([d.property({readOnly:!0,dependsOn:["scaleVisibility.suspended","frustumVisibility.suspended"]})],e.prototype,"suspendInfo",null),s([d.property({readOnly:!0,dependsOn:["graphicsCore.updating","frustumVisibility.updating","watchUpdatingTracking.updating"]})],e.prototype,"updating",null),e=s([d.subclass("esri.views.3d.layers.graphics.Graphics3DFeatureLikeLayerView")],e)}(d.declared(o));e.default=O;var U="suspendResumeExtentMode",R={remove:function(){},pause:function(){},resume:function(){}}}));