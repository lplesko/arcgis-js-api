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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dojox/form/CheckedMultiSelect","../../kernel","../../lang","./AnalysisBase","./utils","./AnalysisRegistry","./CreditEstimator","./_AnalysisOptions","../CalculateField","./components/AddSummaryFields","./components/TimeBoundarySelect/TimeBoundarySelect","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ReconstructTracks.html"],(function(e,t,i,s,a,n,l,o,h,r,u,d,c,p,y,m,_,g,S,f,v,F,L,b,C,k,B,T,x,j,I,w,D,A,O,U,M,N,P,R,E,G,V,H){var W=i([_,g,S,f,v,P,O],{declaredClass:"esri.dijit.analysis.ReconstructTracks",templateString:H,widgetsInTemplate:!0,inputLayer:null,summaryFields:null,outputLayerName:null,i18n:null,toolName:"ReconstructTracks",helpFileName:"ReconstructTracks",resultParameter:"output",constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.trackFields&&"string"==typeof e.trackFields&&(e.trackFields=e.trackFields.split(","))},destroy:function(){this.inherited(arguments),a.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,V.aggregatePointsTool),s.mixin(this.i18n,V.reconstructTracksTool)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),u.set(this._trackFieldSelect.selectNode,"width","90%"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this._durSplitValue.set("isInRange",s.hitch(this._durSplitValue,U.isGreaterThanZero)),this._durSplitValue.set("rangeMessage",this.i18n.greaterThanZeroMsg),this.filterObjects=[{layer:"inputLayer",select:this._analysisSelect,expressionObj:"attributeExprObj"}],this._buildUI()},startup:function(){},_onClose:function(e){this._aspectHandle&&(this._aspectHandle.remove(),this._aspectHandle=null),e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleSaveBtnClick:function(){if(this._form.validate()||this._timeBoundarySelect.validate()){this._saveBtn.set("disabled",!0);var e={},t={},i=this.constructAnalysisInputLyrObj(this.inputLayer,!0);e.inputLayer=i,e.trackFields=this._trackFieldSelect.get("value").toString(),e.method=this.get("method"),this._bufFieldOutput.get("value")&&(e.bufferField="= "+this._bufFieldOutput.get("value")),e.summaryFields=l.toJson(this._summaryWidget.get("summaryFields")),this._distSplitCheck.get("checked")&&this._durSplitValue.get("value")&&(e.timeSplit=this._durSplitValue.get("value"),e.timeSplitUnit=this._durSplitUnitsSelect.get("value")),this._timeSplitCheck.get("checked")&&this._distSplitValue.get("value")&&(e.distanceSplit=this._distSplitValue.get("value"),e.distanceSplitUnit=this._distSplitUnitsSelect.get("value")),this._timeIntervalCheck.get("checked")&&this._timeBoundarySelect.get("timeBoundarySplit")&&(e.timeBoundarySplit=this._timeBoundarySelect.get("timeBoundarySplit"),e.timeBoundarySplitUnit=this._timeBoundarySelect.get("timeBoundarySplitUnit"),this._timeBoundarySelect.get("timeBoundaryReference")&&(e.timeBoundaryReference=this._timeBoundarySelect.get("timeBoundaryReference"),this.timeBoundaryReferenceType=this._timeBoundarySelect.get("timeBoundaryReferenceType"))),this.returnFeatureCollection||(e.OutputName=l.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.context=l.toJson({extent:this.map.extent._normalize(!0)})),t.jobParams=this._updateJobFilterAndSelection(e),t.itemParams={description:r.substitute(this.i18n.itemDescription,{inputLayername:this.inputLayer.name}),tags:r.substitute(this.i18n.itemTags,{inputLayername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(t.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(t.isSpatioTemporalDataStore=!0),this.execute(t)}},_handleShowCreditsClick:function(e){e.preventDefault();var t={};(this._form.validate()||this._timeBoundarySelect.validate())&&(t.inputLayer=l.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),t.summaryFields=l.toJson(this._summaryWidget.get("summaryFields")),this.returnFeatureCollection||(t.OutputName=l.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),t.KeepBoundariesWithNoPoints=this._keepPolygonsCheck.get("checked"),"0"!==this._groupBySelect.get("value")&&(t.GroupByField=this._groupBySelect.get("value")),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.context=l.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,t).then(s.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()}))))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&U.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.inputLayers:this.polygonLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).always(s.hitch(this,this._updateAnalysisLayerUI,!0))},_handleDistUnitsChange:function(e){},_handleDurSplitValue:function(e){},_handleRefTimeChange:function(e){this._timeRefDay.set("required",e&&!this._timeRefDay.get("value"))},_handleDistSplitCheckChange:function(e){this._updateOptionalParams(this._distSplitValue,e),this._updateOptionalParams(this._distSplitUnitsSelect,e)},_handleTimeSplitCheckChange:function(e){this._updateOptionalParams(this._durSplitValue,e),this._updateOptionalParams(this._durSplitUnitsSelect,e)},_handleTimeIntervalCheckChange:function(e){this._timeBoundarySelect.set("disabled",!e)},_updateOptionalParams:function(e,t){e.set("disabled",!t),e.set("required",t)},_save:function(){},_buildUI:function(){var e=!0;U.initHelpLinks(this.domNode,this.showHelp),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!U.isLayerInLayers(this.inputLayer,this.inputLayers)&&(this.inputLayers.push(this.inputLayer),this._summaryWidget.set("layer",this.inputLayer)),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),U.populateAnalysisLayers(this,"inputLayer","inputLayers")),U.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this.set("method",this.method||M.DistanceMethods.geodesic),this.bufferField&&this._bufFieldOutput.set("value",this.bufferField.substring(this.bufferField.indexOf("=")+1)),this._durSplitUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes},{value:"Hours",label:this.i18n.hours},{value:"Days",label:this.i18n.days},{value:"Weeks",label:this.i18n.weeks},{value:"Months",label:this.i18n.months},{value:"Years",label:this.i18n.years}]),this.timeSplitUnit&&this._durSplitUnitsSelect.set("value",this.timeSplitUnit),this.timeSplit&&(this._durSplitValue.set("value",this.timeSplit),this._timeSplitCheck.set("checked",!0)),this.distanceSplitUnit&&this._distSplitUnitsSelect.set("value",this.distanceSplitUnit),this.distanceSplit&&(this._distSplitValue.set("value",this.distanceSplit),this._distSplitCheck.set("checked",!0)),this.timeBoundarySplit&&(this._timeBoundarySelect.set("timeBoundarySplit",this.timeBoundarySplit),this._timeBoundarySelect.set("timeBoundarySplitUnit",this.timeBoundarySplitUnit),this._timeIntervalCheck.set("checked",!0)),this.timeBoundaryReference&&(this._timeBoundarySelect.set("timeBoundaryReferenceType",this.timeBoundaryReferenceType),this._timeBoundarySelect.set("timeBoundaryReference",this.timeBoundaryReference)),this._handleDistSplitCheckChange(this._distSplitCheck.get("value")),this._handleTimeSplitCheckChange(this._timeSplitCheck.get("value")),this._handleTimeIntervalCheckChange(this._timeIntervalCheck.get("value")),this.summaryFields&&(e=!1,this._summaryWidget.set("summaryFields",this.summaryFields)),u.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(e){this.folderStore=e,U.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),u.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this.set("groupBySelect",this.groupByField),u.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this._updateAnalysisLayerUI(e),this._loadConnections(),this._createFilterAndSelections()},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1)),this._connect(this._geodesicType,"onclick",s.hitch(this,this._handleDistanceMethodChange,M.DistanceMethods.geodesic)),this._connect(this._planarType,"onclick",s.hitch(this,this._handleDistanceMethodChange,M.DistanceMethods.planar))},_handleDistanceMethodChange:function(e){this.set("method",e)},_handleAnalysisLayerChange:function(e){this._isAnalysisSelect=!0,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:["point","polygon"],geometryTypes:[M.GeometryTypes.Point,M.GeometryTypes.MultiPoint,M.GeometryTypes.Polygon],timeTypes:[M.TimeTypes.Instant]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[e]),this._updateAnalysisLayerUI(!0))},_updateAnalysisLayerUI:function(e){if(this._expBtn.set("disabled",!this.inputLayer),this._bufFieldOutput.set("disabled",!this.inputLayer),this.inputLayer)if(U.addAttributeOptions({selectWidget:this._trackFieldSelect,layer:this.inputLayer,allowStringType:!0,allowSelectLabel:!1}),!e&&this.trackFields&&this.trackFields.length>0&&this._trackFieldSelect.set("value",this.trackFields),e&&(this.outputLayerName=r.substitute(this.i18n.outputLayerName,{inputLayername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName)),this._calcField)this._calcField&&this._calcField.layer!==this.inputLayer&&(this._bufFieldOutput.set("value",""),this._calcField.reset(),this._calcField.set("layer",this.inputLayer));else{var i=U.getExprFunctions();this._calcField=new R({expressionMode:R.MODE_ARCADE,arcadeEditor:this.arcadeEditor,arcadeProfileType:"geoanalyticstrack",map:this.map,layer:this.inputLayer,field:this.i18n.bufField,baseClass:"esriBufFieldExp",helperMethods:i,showHelp:!0,helpUrl:U.getHelpUrl({widget:this,topic:"BufferExpression"}),css:{base:"esriBufFieldExp",addButton:"btn calcite primary",closeButton:"btn calcite cancel"},helperType:"numeric",showHeader:!1,calculateLabel:this.i18n.add,expression:!e&&this.bufferField?this._bufFieldOutput.get("value"):null},this._expressionCtr),this._calcField.startup(),this._calcField.expressionMode===R.MODE_SQL?(u.set(this._calcField._validateBtn.domNode,"display","none"),this._calcField._handleHelperTypeChange("value",null,{functionType:"NumType"}),this._aspectHandle=t.around(this._calcField,"_handleAddButtonClick",s.hitch(this,(function(e){return s.hitch(this,(function(e,t){var i=this._calcField.get("expression")[0];this._bufFieldOutput.set("value",i.sqlExpression),this._exprDialog.hide()}))})))):this._calcField.expressionMode===R.MODE_ARCADE&&this._calcField.on("expression-add",s.hitch(this,(function(e){this._bufFieldOutput.set("value",e.expression)}))),this._calcField.on("close",s.hitch(this,(function(){this._exprDialog.hide()})))}},_handleExpBtnClick:function(){this._calcField.set("expression",this._bufFieldOutput.get("value")),this._calcField.reset(),this._exprDialog.show()},_handleCalculateSuccess:function(e){this._dialog.hide()},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){A.isDefined(e)&&(e.geometryType===M.GeometryTypes.Point||e.geometryType===M.GeometryTypes.Polygon||e.geometryType===M.GeometryTypes.MultiPoint)&&U.isTimeInstantLayer(e)?this.inputLayer=e:this.inputLayer=null,this._summaryWidget.set("layer",this.get("inputLayer"))},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return U.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setInputLayersAttr:function(e){A.isDefined(e)&&(e=a.filter(e,(function(e,t){return-1!==a.indexOf([M.GeometryTypes.Point,M.GeometryTypes.MultiPoint,M.GeometryTypes.Polygon],e.geometryType)&&U.isTimeInstantLayer(e)})),this.inputLayers=e)},_setMethodAttr:function(e){this.method=e,y.toggle(this._geodesicType,"selected",e===M.DistanceMethods.geodesic),y.toggle(this._planarType,"selected",e===M.DistanceMethods.planar)},_connect:function(e,t,i){this._pbConnects.push(n.connect(e,t,i))}});return o("extend-esri")&&s.setObject("dijit.analysis.ReconstructTracks",W,D),W}));