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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../tools/ClickableTool","../../../base/etc/docUtil","./ThemeDialog","../../../../../kernel"],(function(e,t,o,n,i,l,a){var s=e([n],{postCreate:function(){this.inherited(arguments)},startup:function(){if(!this._started){var e=i.findGxeContext(this);e&&e.gemetUrl&&e.gemetInspireThemeThesaurus||(this.domNode.style.display="none")}},whenToolClicked:function(e,o){if(o&&o.parentXNode){var n=o.getInputValue();null===n||n.push||(n=[n]),new l({gxeDocument:o.parentXNode.gxeDocument,initiallySelectedValues:n,onSelect:t.hitch(this,(function(e){o.importValues(null,e)}))}).show()}}});return o("extend-esri")&&t.setObject("dijit.metadata.form.iso.gemet.GemetThemeTool",s,a),s}));