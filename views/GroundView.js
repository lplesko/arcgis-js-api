// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/Accessoire","../core/Collection"],function(e,s){var t=e.createSubclass({declaredClass:"esri.views.GroundView",classMetadata:{properties:{view:{},layerViews:{type:s}}},getDefaults:function(){return{layerViews:[]}},destroy:function(){this.view=null},_suspendedGetter:function(){return this.view?this.view.suspended:!0}});return t});