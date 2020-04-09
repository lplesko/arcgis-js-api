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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/_base/html","dojo/on","dojo/Deferred","dojo/promise/all","dojo/json","dijit/form/NumberTextBox","dijit/form/Select","dijit/form/Textarea","dijit/form/DateTextBox","dijit/form/TimeTextBox","dijit/form/CheckBox","dijit/form/_FormWidgetMixin","../common/dijit/URLInput","../utils","esri/tasks/LinearUnit","../BaseEditor"],(function(t,e,i,a,s,r,o,l,n,u,d,h,c,m,p,f,g,v,N,j){var V={};function b(t,e){return new d({value:e,options:i.map(t,(function(t){return{label:t,value:t}}))})}function C(t){return t.filter&&t.filter.type?t.filter.type.toLowerCase():null}function E(t){var e,i;return t.list&&2===t.list.length?(e=+t.list[0],i=+t.list[1]):(e=t.minimum,i=t.maximum),isNaN(e)||isNaN(i)?null:[e=Math.min(e,i),i=Math.max(e,i)]}return V.UnsupportEditor=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-unsupport",editorName:"UnsupportEditor",postCreate:function(){if(this.inherited(arguments),s.setAttr(this.domNode,"innerHTML",v.sanitizeHTML(this.message)),"Select"===this.editorName)s.addClass(this.gEditor.domNode,"restrict-select-width");else{var t=C(this.param);"valuelist"===t&&this.param.filter.list&&this.param.filter.list.length>0&&(this.gEditor=b(this.param.filter.list,this.param.defaultValue),s.addClass(this.gEditor.domNode,"restrict-select-width"))}},getValue:function(){return null},validate:function(){return this.gEditor.validate()},focus:function(){this.gEditor.focus()}}),V.ShowMessage=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-message",editorName:"ShowMessage",postCreate:function(){this.inherited(arguments),s.setAttr(this.domNode,"innerHTML",v.sanitizeHTML(this.message))},getValue:function(){return null}}),V.GeneralEditorWrapperEditor=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-wrapper",editorName:"GeneralEditorWrapperEditor",postCreate:function(){this.inherited(arguments),s.setStyle(this.gEditor.domNode,"width","100%"),"Select"===this.editorName&&s.addClass(this.gEditor.domNode,"restrict-select-width"),this.gEditor.placeAt(this.domNode)},getValue:function(){var t=this.gEditor.getValue();return"string"==typeof t&&""===e.trim(t)?null:t},validate:function(){return this.gEditor.validate()},focus:function(){this.gEditor.focus()}}),V.BooleanEditor=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-boolean",editorName:"BooleanEditor",postCreate:function(){this.inherited(arguments),this.value=void 0!==this.param.defaultValue&&this.param.defaultValue,this.editor=new p({checked:this.value}),this.editor.placeAt(this.domNode)},getValue:function(){return this.editor.get("checked")}}),V.LongNumberEditor=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-long",editorName:"LongNumberEditor",postCreate:function(){this.inherited(arguments),this.value=isNaN(this.param.defaultValue)?NaN:this.param.defaultValue;var t=C(this.param);if("range"===t){var e=E(this.param.filter);e&&(this.editor=new u({value:this.value,intermediateChanges:!0,constraints:{places:0,min:e[0],max:e[1]}}))}else"valuelist"===t&&this.param.filter.list&&this.param.filter.list.length>0&&(this.editor=b(this.param.filter.list,this.param.defaultValue));this.editor||(this.editor=new u({value:this.value,intermediateChanges:!0,constraints:{places:0}})),this.editor.placeAt(this.domNode)},getValue:function(){var t=this.editor.get("value");return isNaN(t)?null:t},validate:function(){return this.editor.validate()},focus:function(){this.editor.focus()}}),V.DoubleNumberEditor=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-double",editorName:"DoubleNumberEditor",postCreate:function(){this.inherited(arguments),this.value=isNaN(this.param.defaultValue)?NaN:this.param.defaultValue;var t=C(this.param);if("range"===t){var e=E(this.param.filter);e&&(this.editor=new u({value:this.value,intermediateChanges:!0,constraints:{min:e[0],max:e[1]}}))}else"valuelist"===t&&this.param.filter.list&&this.param.filter.list.length>0&&(this.editor=b(this.param.filter.list,this.param.defaultValue));this.editor||(this.editor=new u({value:this.value,intermediateChanges:!0})),this.editor.placeAt(this.domNode)},getValue:function(){var t=this.editor.get("value");return isNaN(t)?null:t},validate:function(){return this.editor.validate()},focus:function(){this.editor.focus()}}),V.MultiValueChooser=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-multivalue-chooser",editorName:"MultiValueChooser",postCreate:function(){this.inherited(arguments),this.checkBoxs=[],i.forEach(this.param.choiceList,(function(t){var e=new p({label:t,checked:!!(this.param.defaultValue&&this.param.defaultValue.indexOf(t)>-1)}),i=a.create("label",{for:e.id,innerHTML:t,class:"esriLeadingMargin05",style:"display:inline-block;clear:both;"});e.placeAt(this.domNode),a.place(i,this.domNode,"last"),a.create("br",null,this.domNode,"last"),this.checkBoxs.push(e)}),this)},getValue:function(){var t=[];return i.forEach(this.checkBoxs,(function(e){e.get("checked")&&t.push(e.label)}),this),t}}),V.MultiValueEditor=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-multivalue",editorName:"MultiValueEditor",postCreate:function(){this.inherited(arguments),this.editors=[];var t=s.create("div",{class:"input-list"},this.domNode),i=e.clone(this.param,t);i.dataType=this.param.dataType.substr("GPMultiValue".length+1,this.param.dataType.length),i.originParam=this.param,setTimeout(e.hitch(this,this._initChildEditors,i,t),100),this._createAddInputNode(i,t)},_initChildEditors:function(t,e){this.param.defaultValue&&this.param.defaultValue.length>0?i.forEach(this.param.defaultValue,(function(i){t.defaultValue=i,this._createSingleInputContainerNode(t,e)}),this):(delete t.defaultValue,this._createSingleInputContainerNode(t,e))},getValue:function(){var t=[];return i.forEach(this.editors,(function(e){t.push(e.getValue())}),this),t},getGPValue:function(){var t=new o,e=[];return i.forEach(this.editors,(function(t){e.push(t.getGPValue())}),this),l(e).then((function(e){t.resolve(e)}),(function(e){t.reject(e)})),t},destroy:function(){i.forEach(this.editors,(function(t){t.destroy()})),this.editors=[],this.inherited(arguments)},_createSingleInputContainerNode:function(t,e){var i=s.create("div",{class:"single-input"},e),a=this.editorManager.createEditor(t,"input",this.context,{widgetUID:this.widgetUID,config:this.config}),r=s.getContentBox(this.domNode).w-30-3;return s.setStyle(a.domNode,{display:"inline-block",width:r+"px"}),a.placeAt(i),this._createRemoveInputNode(i),i.inputEditor=a,this.editors.push(a),i},_createRemoveInputNode:function(t){var i=s.create("div",{class:"remove",innerHTML:"-"},t);return this.own(r(i,"click",e.hitch(this,(function(){this.editors.splice(this.editors.indexOf(t.inputEditor),1),t.inputEditor.destroy(),s.destroy(t)})))),i},_createAddInputNode:function(t,i){var a=s.create("div",{class:"add-input"},this.domNode),o=s.create("div",{class:"add-btn",innerHTML:"+"},a);return this.own(r(o,"click",e.hitch(this,(function(){this._createSingleInputContainerNode(t,i)})))),a}}),V.LinerUnitEditor=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-liner-unit",editorName:"LinerUnitEditor",postCreate:function(){this.inherited(arguments),this.distance=this.param.defaultValue?this.param.defaultValue.distance:0,this.units=this.param.defaultValue?this.param.defaultValue.units:"esriMeters",this.inputDijit=new u({value:this.distance,intermediateChanges:!0}),this.selectDijit=new d({value:this.units,options:[{label:this.nls.meters,value:"esriMeters"},{label:this.nls.kilometers,value:"esriKilometers"},{label:this.nls.feet,value:"esriFeet"},{label:this.nls.miles,value:"esriMiles"},{label:this.nls.nauticalMiles,value:"esriNauticalMiles"},{label:this.nls.yards,value:"esriYards"}]}),s.addClass(this.selectDijit.domNode,"restrict-select-width"),this.inputDijit.placeAt(this.domNode),this.selectDijit.placeAt(this.domNode)},getValue:function(){var t=new N;return t.distance=this.inputDijit.getValue(),t.units=this.selectDijit.getValue(),t},validate:function(){return this.inputDijit.validate()&&this.selectDijit.validate()},focus:function(){!1===this.inputDijit.isValid?this.inputDijit.focus():this.selectDijit.focus()}}),V.DateTimeEditor=t(j,{baseClass:"jimu-gp-editor-base jimu-gp-editor-datatime",editorName:"DateTimeEditor",postCreate:function(){var t=new Date(this.param.defaultValue);this.value=this.param.defaultValue?new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()):null,this.inherited(arguments),this.dateDijit=new c({value:this.value,style:{width:"60%"}}),this.timeDijit=new m({value:this.value,style:{width:"40%"},constraints:{timePattern:"HH:mm:ss",clickableIncrement:"T00:15:00",visibleIncrement:"T00:15:00"}}),this.dateDijit.placeAt(this.domNode),this.timeDijit.placeAt(this.domNode)},startup:function(){this.dateDijit.startup(),this.timeDijit.startup()},getValue:function(){var t=new Date,e=this.dateDijit.getValue(),i=this.timeDijit.getValue();return null!==e&&null!==i?(t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(e.getDate()),t.setHours(i.getHours()),t.setMinutes(i.getMinutes()),t.setSeconds(i.getSeconds()),t.getTime()):null}}),V.GetUrlObjectFromLayer=t([j,d],{editorName:"GetUrlObjectFromLayer",postCreate:function(){this.options=[],i.forEach(this.map.graphicsLayerIds,(function(t){var e=this.map.getLayer(t);"esri.layers.FeatureLayer"!==e.declaredClass||this.geometryType&&e.geometryType!==this.geometryType||this.options.push({label:e.label||e.title||e.name||e.id,value:e.id})}),this),this.inherited(arguments),this.setValue(this.value),s.addClass(this.domNode,"jimu-gp-editor-sffl"),s.addClass(this.domNode,"jimu-gp-editor-base")},getValue:function(){return this.value},getGPValue:function(){var t,e;return i.forEach(this.map.graphicsLayerIds,(function(e){var i=this.map.getLayer(e);e===this.getValue()&&(t=i.url)}),this),e={url:t},e=this.wrapGPValue(e),this.wrapValueToDeferred(e)}}),V.ObjectUrlEditor=t([j,g],{editorName:"ObjectUrlEditor",postCreate:function(){this.rest=!1,this.inherited(arguments),s.addClass(this.domNode,"jimu-gp-editor-ourl"),s.addClass(this.domNode,"jimu-gp-editor-base")},getValue:function(){return this.value},getGPValue:function(){var t;return t=this.getValue()?{url:this.getValue()}:null,t=this.wrapGPValue(t),this.wrapValueToDeferred(t)}}),V.SimpleJsonEditor=t([j,h],{editorName:"SimpleJsonEditor",postMixInProperties:function(){this.inherited(arguments),"object"==typeof this.value&&(this.value=n.stringify(this.value))},postCreate:function(){this.inherited(arguments),s.addClass(this.domNode,"jimu-gp-editor-json"),s.addClass(this.domNode,"jimu-gp-editor-base")},getValue:function(){return this.value},getGPValue:function(){var t;return t=this.getValue()?n.parse(this.getValue()):null,t=this.wrapGPValue(t),this.wrapValueToDeferred(t)}}),V}));