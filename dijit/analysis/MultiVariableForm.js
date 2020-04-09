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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/on","dojo/_base/fx","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/form/NumberTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/TitlePane","dijit/InlineEditBox","../../kernel","../../lang","./utils","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/MultiVariableForm","dojo/text!./templates/MultiVariableForm.html"],(function(t,e,i,s,a,n,l,r,h,o,c,d,u,_,b,m,y,S,f,p,g,w,j,v,F,T,R,A,C,L,D,x,M,U,I,O,P,N,V,H,G,W,B){var E=i([f,p,g,w,j],{declaredClass:"esri.dijit.analysis.MultiVariableForm",templateString:B,widgetsInTemplate:!0,distanceDefaultUnits:"Miles",inputLayer:null,type:"DistanceToNearest",outFieldName:"",searchDistance:0,searchDistanceUnit:null,statisticType:null,statisticField:null,emptyValue:"",i18n:null,constructor:function(t){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments),this.i18n={},s.mixin(this.i18n,G.common),s.mixin(this.i18n,W)},postCreate:function(){this.inherited(arguments),b.add(this._form.domNode,"esriSimpleForm"),this.inputLayer&&this.inputLayer.fields&&this.inputLayer.fields.length>0&&(this.set("fields",this.inputLayer.fields),this._createStatsRow()),this.fields&&H.addAttributeOptions({selectWidget:this._includeFieldSelect,layer:this.inputLayer,allowDateType:this.showGeoAnalyticsParams,allowStringType:this.showGeoAnalyticsParams}),this._loadConnections(),this.type&&this._attrTypeSelect.set("value",this.type),this.searchDistanceUnit||(this.searchDistanceUnit=this.distanceDefaultUnits),this._binUnits.set("value",this.searchDistanceUnit),this._handleVariableTypeChange(this._attrTypeSelect.get("value"))},startup:function(){},validate:function(){var t=this._form.validate(),e="";return this._handleCloseMsg(),t&&"none"!==c.get(this._binCenterUnitsRow,"display")&&H.unitConversion(this.binSize,H.UNITSMAP[this.binSizeUnit],H.UNITSMAP[this._binUnits.get("value")])>=this._binsInput.get("value")&&(t=!1,e="AttributeSummaryOfRelated"===this._attrTypeSelect.get("value")?this.i18n.smallSumFeaturesErrorMsg:this.i18n.smallMaxDistErrorMsg,this._showMessages(e)),t},_loadConnections:function(){this.own(this.watch("variable",s.hitch(this,this._handleVariableChange)))},_handleVariableChange:function(t,e,i){if(i){var s=i.type;"AttributeSummaryOfRelated"===s&&0===i.searchDistance&&(s="AttributeSummaryOfIntersect"),this._attrTypeSelect.set("value",s),i.searchDistance&&(this._binsInput.set("value",i.searchDistance),this._binUnits.set("value",i.searchDistanceUnit)),i.attributeField&&this._includeFieldSelect.set("value",i.attributeField),i.statisticType&&(this._attrSelect.set("value",i.statisticField),this._statsSelect.set("value",i.statisticType),this._initStat=!1)}},_createStatsRow:function(){var t,e;u.create("tr",null,this._afterStatsRow,"before"),e=u.create("td",{style:{width:"45%",maxWidth:"100px"}},this._afterStatsRow),t=u.create("td",{style:{width:"55%",maxWidth:"104px"}},this._afterStatsRow),this._attrSelect=new A({maxHeight:200,class:"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},u.create("select",null,e)),H.addAttributeOptions({selectWidget:this._attrSelect,layer:this.inputLayer,allowDateType:this.showGeoAnalyticsParams,allowStringType:this.showGeoAnalyticsParams}),this._statsSelect=new A({class:"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},u.create("select",null,t)),H.addStatisticsOptions({selectWidget:this._statsSelect,showGeoAnalyticsParams:this.showGeoAnalyticsParams}),this._attrSelect.set("statisticSelect",this._statsSelect),this._attrSelect.set("showGeoAnalyticsParams",this.showGeoAnalyticsParams),this._addAttrSelectChangeHandler()},_addAttrSelectChangeHandler:function(){this._attrSelect._changeHandle=this._attrSelect.on("change",s.hitch(this,this._handleAttrSelectChange))},_removeAttrSelectChangeHandler:function(){this._attrSelect&&this._attrSelect._changeHandle&&(this._attrSelect._changeHandle.remove(),this._attrSelect._changeHandle=null)},_handleAttrSelectChange:function(t){var e;t!==this.emptyValue&&((e=this._attrSelect.getOptions(t))&&e.type&&H.addStatisticsOptions({selectWidget:this._statsSelect,type:e.type,showGeoAnalyticsParams:this.showGeoAnalyticsParams}),!this._initStat&&this.variable&&this.variable.statisticType&&(this._statsSelect.set("value",this.variable.statisticType),this._initStat=!0))},_setInputLayerAttr:function(t){this.inputLayer=t},_setFieldsAttr:function(t){this.fields=t},_handleVariableTypeChange:function(t){var e="",i="",s=[],n=[],l=[],r=[];"DistanceToNearest"===t?(i=this.i18n.distToNearestLabel,e=this.i18n.maxDistancefromCtr,s=[this._includeFieldLabelRow,this._includeFieldRow,this._statsLabelRow,this._afterStatsRow],n=[this._binCenterLabelRow,this._binCenterUnitsRow],l=[this._binsInput,this._binUnits],r=[this._includeFieldSelect,this._attrSelect,this._statsSelect]):"AttributeOfNearest"===t?(i=this.i18n.attrOfInterestLabel,e=this.i18n.maxDistancefromCtr,s=[this._statsLabelRow,this._afterStatsRow],n=[this._includeFieldLabelRow,this._includeFieldRow,this._binCenterLabelRow,this._binCenterUnitsRow],l=[this._binsInput,this._binUnits,this._includeFieldSelect],r=[this._attrSelect,this._statsSelect]):"AttributeSummaryOfRelated"===t?(i=this.i18n.summaryNearbyLabel,e=this.i18n.summFeatuesWithin,s=[this._includeFieldLabelRow,this._includeFieldRow],n=[this._statsLabelRow,this._afterStatsRow,this._binCenterLabelRow,this._binCenterUnitsRow],l=[this._binsInput,this._binUnits,this._attrSelect,this._statsSelect],r=[this._includeFieldSelect]):"AttributeSummaryOfIntersect"===t&&(i=this.i18n.summaryIntersectingLabel,s=[this._includeFieldLabelRow,this._includeFieldRow,this._binCenterLabelRow,this._binCenterUnitsRow],n=[this._statsLabelRow,this._afterStatsRow],l=[this._attrSelect,this._statsSelect],r=[this._binsInput,this._binUnits,this._includeFieldSelect]),H.updateDisplay(s,!1,"table-row"),H.updateDisplay(n,!0,"table-row"),d.set(this._attrTypeLabel,"innerHTML",i),d.set(this._binCenterLabel,"innerHTML",e),a.forEach(l,(function(t){t.set("required",!0)})),a.forEach(r,(function(t){t.set("required",!1)}))},_handleIncludeFieldChange:function(){},_showMessages:function(t){d.set(this._bodyNode,"innerHTML",t),y.fadeIn({node:this._errorMessagePane,easing:S.quadIn,onEnd:s.hitch(this,(function(){c.set(this._errorMessagePane,{display:""})}))}).play()},_handleCloseMsg:function(t){t&&t.preventDefault(),y.fadeOut({node:this._errorMessagePane,easing:S.quadOut,onEnd:s.hitch(this,(function(){c.set(this._errorMessagePane,{display:"none"})}))}).play()},_getVariableAttr:function(){var t=this._attrTypeSelect.get("value"),e=this._binsInput.get("value"),i=this._binUnits.get("value"),s={type:t,outFieldName:this.outFieldName};return"DistanceToNearest"===t?(s.searchDistance=e,s.searchDistanceUnit=i):"AttributeOfNearest"===t?(s.attributeField=this._includeFieldSelect.get("value"),s.searchDistance=e,s.searchDistanceUnit=i):"AttributeSummaryOfRelated"===t?(s.statisticType=this._statsSelect.get("value"),s.statisticField=this._attrSelect.get("value"),s.searchDistance=e,s.searchDistanceUnit=i):"AttributeSummaryOfIntersect"===t&&(s.type="AttributeSummaryOfRelated",s.statisticType=this._statsSelect.get("value"),s.statisticField=this._attrSelect.get("value"),s.searchDistance=0,s.searchDistanceUnit="Miles"),s},_setVariableAttr:function(t){this._set("variable",t)}});return r("extend-esri")&&s.setObject("dijit.analysis.MultiVariableForm",E,N),E}));