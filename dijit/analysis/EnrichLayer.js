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

define(["require","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/fx/easing","dojo/number","dojo/on","dojo/Evented","dojo/store/Observable","dojo/dom-geometry","dojo/store/Memory","dojo/window","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/FilteringSelect","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/form/NumberTextBox","dijit/layout/ContentPane","dijit/Dialog","dgrid/List","../../kernel","../../lang","../../urlUtils","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./utils","./TrafficTime","../geoenrichment/config","../geoenrichment/DataBrowser","../geoenrichment/DataBrowser/StorageList","../../tasks/geoenrichment/GeoenrichmentTask","../../geometry/Extent","../../geometry/webMercatorUtils","../../geometry/Point","./AnalysisRegistry","dojo/i18n!../../nls/jsapi","dojo/text!./templates/EnrichLayer.html"],(function(e,t,i,s,n,a,r,o,h,l,d,c,u,p,f,y,_,g,b,m,v,L,w,S,T,C,D,x,E,I,O,j,k,A,B,M,U,N,P,R,F,V,W,G,H,J,q,K,z,Q,Y,X,Z,$,ee,te,ie,se,ne){var ae;return ae=i([T,C,D,x,E,H,J],{declaredClass:"esri.dijit.analysis.EnrichLayer",templateString:ne,widgetsInTemplate:!0,inputLayer:null,outputLayerName:null,distance:null,enableTravelModes:!0,showTrafficWidget:!1,_isBufferSelectionEnabled:!0,analysisVariables:null,i18n:null,toolName:"EnrichLayer",helpFileName:"EnrichLayer",resultParameter:"enrichedLayer",constructor:function(e){this._pbConnects=[],this._statsRows=[],this._isLineEnabled=!1,e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),n.forEach(this._pbConnects,a.disconnect),delete this._pbConnects,this._driveTimeClickHandle&&(a.disconnect(this._driveTimeClickHandle),this._driveTimeClickHandle=null)},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,se.bufferTool),s.mixin(this.i18n,se.driveTimes),s.mixin(this.i18n,se.enrichLayerTool)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),K.getNetworkAnalysisLimits(this).then(s.hitch(this,(function(e){this.limits=e,this._handleDistUnitsChange()}))),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this._buildUI(),this.watch("analysisVariables",s.hitch(this,this._refreshGrid))},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleShowCreditsClick:function(e){if(e.preventDefault(),this._form.validate()&&this.validateSelectedGrid()){var t,i,a,o,h={};t=this.get("analysisVariables"),a=[],i=[],n.forEach(t,(function(e){-1!==e.indexOf(".*")?i.push(e.split(".*")[0]):a.push(e)})),h.inputLayer=r.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),(this._isBufferSelectionEnabled||this._isLineEnabled)&&(o=this._bufferTypeSelect.getOptions(this._bufferTypeSelect.get("value")),h.bufferType=o.travelMode?r.toJson(o.travelMode):this._bufferTypeSelect.get("value"),h.distance=this.get("distance"),h.units=this._distanceUnitsSelect.get("value")),this.get("country")&&(h.country=this.get("country")),i&&i.length>0&&(h.dataCollections=r.toJson(i)),a&&a.length>0&&(h.analysisVariables=r.toJson(a)),this.get("showTrafficWidget")&&this._trafficTimeWidget.get("checked")&&(h.TimeOfDay=this._trafficTimeWidget.get("timeOfDay")),this.returnFeatureCollection||(h.OutputName=r.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(h.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,h).then(s.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))}},_handleSaveBtnClick:function(){if(this._form.validate()&&this.validateSelectedGrid()){var e,t,i,s,a,o,h,l={},c={},u={};this._saveBtn.set("disabled",!0),t=this.get("analysisVariables"),s=[],i=[],n.forEach(t,(function(e){-1!==e.indexOf(".*")?i.push(e.split(".*")[0]):s.push(e)})),l.inputLayer=r.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),(this._isBufferSelectionEnabled||this._isLineEnabled)&&(a=this._bufferTypeSelect.getOptions(this._bufferTypeSelect.get("value")),l.bufferType=a.travelMode?r.toJson(a.travelMode):this._bufferTypeSelect.get("value"),l.distance=this.get("distance"),l.units=this._distanceUnitsSelect.get("value"),l.returnBoundaries=this._returnBoundariesCheck.get("checked")),this.get("country")&&(l.country=this.get("country")),i&&i.length>0&&(l.dataCollections=i),s&&s.length>0&&(l.analysisVariables=s),this.get("showTrafficWidget")&&this._trafficTimeWidget.get("checked")&&(l.TimeOfDay=this._trafficTimeWidget.get("timeOfDay")),(this.inputLayer.geometryType===ie.GeometryTypes.Polygon||this.inputLayer.geometryType!==ie.GeometryTypes.Polygon&&!l.returnBoundaries)&&(this.rerun&&this.OutputName&&this.OutputName.layerProperties?u.layerProperties=this.OutputName.layerProperties:(h=this.inputLayer.toJson(),o=h&&h.layerDefinition&&h.layerDefinition.drawingInfo?h.layerDefinition.drawingInfo:this.inputLayer.drawingInfo?this.inputLayer.drawingInfo:{},W.isDefined(this.inputLayer.renderer)&&(o.renderer=this.inputLayer.renderer.toJson()),W.isDefined(this.inputLayer.opacity)&&(o.transparency=100*(1-this.inputLayer.opacity)),W.isDefined(this.inputLayer.labelingInfo)&&(o.labelingInfo=[],n.forEach(this.inputLayer.labelingInfo,(function(e){o.labelingInfo.push(e.toJson())}))),W.isDefined(this.inputLayer.showLabels)&&(o.showLabels=this.inputLayer.showLabels),u.layerProperties=[{drawingInfo:o}])),this.returnFeatureCollection||(u.serviceProperties={name:this._outputLayerInput.get("value")}),l.OutputName=r.toJson(u),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(l.context=r.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),l.context=r.toJson(e)),c.jobParams=l,c.itemParams={description:d.substitute(this.i18n.itemDescription,{inputLayerName:this.inputLayer.name}),tags:d.substitute(this.i18n.itemTags,{inputLayerName:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(c.itemParams.folder=this.get("folderId")),this.execute(c)}},_handleDistUnitsChange:function(e){K.updateModeConstraints({validateWidget:this._distanceInput,type:this._bufferTypeSelect.get("value"),units:this._distanceUnitsSelect.get("value"),limits:this.limits,travelMode:this._bufferTypeSelect.getOptions(this._bufferTypeSelect.get("value"))})},_handleDistanceTypeChange:function(e,t){var i,n,a;a=this._bufferTypeSelect.getOptions(this._bufferTypeSelect.get("value")),W.isDefined(a)?(i="Time"===a.units,n="Time"===a.units&&("driving"===a.modei18nKey||"trucking"===a.modei18nKey)):(i=-1!==e.indexOf("Time"),n="DrivingTime"===e),this.set("bufferType",e),this.get("showTrafficWidget")&&(n&&K.getRoutingUtilities(this).then(s.hitch(this,(function(e){this._trafficTimeWidget.set("trafficSupport",e.networkDataset&&e.networkDataset.trafficSupport)}))),c.set(this._useTrafficRow,"display",n?"":"none"),this._trafficTimeWidget.set("disabled",!n),this._trafficTimeWidget.set("reset",!n)),i?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}])):(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}])),t&&this.units&&this._distanceUnitsSelect.set("value",this.units),K.updateModeConstraints({validateWidget:this._distanceInput,type:e,units:this._distanceUnitsSelect.get("value"),limits:this.limits,travelMode:a})},_save:function(){},_buildUI:function(){var e=!0;this.signInPromise.then(s.hitch(this,K.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),!this.favorites&&this.get("enrichOptions")?this.set("favorites",this.enrichOptions.favorites):this.favorites||(this.favorites=new X),this._addBtn.set("disabled",!0),c.set(this._dataDialog.titleNode,"display","none"),c.set(this._dataDialog.titleBar,"display","none"),c.set(this._dataDialog.containerNode,"padding","0"),c.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._loadConnections(),K.populateTravelModes({selectWidget:this._bufferTypeSelect,addStraightLine:!0,widget:this,enableTravelModes:this.get("enableTravelModes"),value:this.bufferType}),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!K.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),K.populateAnalysisLayers(this,"inputLayer","inputLayers"),K.addReadyToUseLayerOption(this,[this._analysisSelect])),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this.inputLayer&&(this._getSourceCountry(e),this._updateAnalysisLayerUI(e)),c.set(this._useTrafficRow,"display",this.get("showTrafficWidget")?"":"none"),c.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(e){this.folderStore=e,K.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),c.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this.list=new F({renderRow:s.hitch(this,this._renderVariableRow)},this._selectedList),W.isDefined(this.returnBoundaries)&&this._returnBoundariesCheck.set("checked",this.returnBoundaries),this.units&&this._distanceUnitsSelect.set("value",this.units)},startup:function(){this.list.startup(),c.set(this._selectLabelDiv,"display","block"),c.set(this._selectedList,"display","none")},_getAGOLEnv:function(e){return e&&-1!==e.indexOf("dev")?"dev":e&&-1!==e.indexOf("qa")?"qa":""},_getSourceCountry:function(e){var t,i;this.inputLayer&&this.signInPromise.then(s.hitch(this,(function(n){this.analysisGpServer?t=this._getAGOLEnv(this.analysisGpServer):this.portalUrl&&(t=this._getAGOLEnv(this.portalUrl)),Q.portalUrl=this.portalUrl,this._task||(this.helperServices||this.isSingleTenant?this.helperServices&&this.helperServices.geoenrichment&&(Q.server=this.helperServices.geoenrichment.url):Q.server=G.getProtocolForWebResource()+"//geoenrich"+t+".arcgis.com/arcgis/rest/services/World/GeoenrichmentServer",Q.server&&(this._task=new Z(Q.server),this._task.token=Q.token)),this._databrowser.pages.cat||(this._databrowser.set("favorites",this.favorites),this._databrowser.startup()),W.isDefined(this.inputLayer)&&(i=this._getPoint(this.inputLayer,e)),i?this._task.getCountries(i).then(s.hitch(this,(function(e){e instanceof Array&&(this._databrowser.set("countryID",this.country||e[0]),this._databrowser.pages.categories._changeCountryPromise.then(s.hitch(this,(function(){this.analysisVariables&&this.analysisVariables.length>0&&(this._databrowser.set("selection",this.analysisVariables),this._setRefreshHandle()),this._databrowser.pages.categories.countrySelect.set("value",e[0]),this.set("country",e[0]),this._addBtn.set("disabled",!1)}))))})),s.hitch(this,(function(e){this._addBtn.set("disabled",!1)}))):this._addBtn.set("disabled",!1)})))},_setRefreshHandle:function(){this._databrowser._shoppingCart&&!this._refHandle&&(this._refHandle=t.after(this._databrowser._shoppingCart,"_updateLabel",s.hitch(this,(function(){this._refreshGrid(),this._refHandle.remove()}))))},_updateAnalysisLayerUI:function(e){var t,i,s;this.inputLayer&&(u.set(this._aggregateToolDescription,"innerHTML",d.substitute(this.i18n.enrichDefine,{inputLayerName:this.inputLayer.name})),(s=this.inputLayer.geometryType===ie.GeometryTypes.Polygon)?(this._isBufferSelectionEnabled=!1,this._isLineEnabled=!1,this._updateTravelModes(!1)):this.inputLayer.geometryType===ie.GeometryTypes.Line?(this._updateTravelModes(!1),this._isLineEnabled=!0,this._isBufferSelectionEnabled=!1):(this._updateTravelModes(!0),this._isBufferSelectionEnabled=!0,this._isLineEnabled=!1),this._returnBoundariesCheck.set("disabled",s),y.toggle(this._returnBoundariesLabel,"esriAnalysisTextDisabled",s),i=!this._isBufferSelectionEnabled&&!this._isLineEnabled,(t=this._bufferTypeSelect.getOptions("StraightLine"))&&(i?(t.label=t.label.replace("esriStraightLineDistanceIcon","esriStraightLineDistanceDisabledIcon"),t.label=t.label.replace("esriLeadingMargin4","esriLeadingMargin4 esriAnalysisTextDisabled"),t.disabled=!0):(t.label=t.label.replace("esriStraightLineDistanceDisabledIcon","esriStraightLineDistanceIcon"),t.label=t.label.replace("esriAnalysisTextDisabled",""),t.disabled=!1),this._bufferTypeSelect.updateOption(t)),y.toggle(this._distanceInput,"disabled",i),this._distanceInput.set("disabled",i),y.toggle(this._distanceUnitsSelect,"disabled",i),this._distanceUnitsSelect.set("disabled",i),y.toggle(this._bufferTypeSelect,"disabled",i),this._bufferTypeSelect.set("disabled",i),this._isLineEnabled&&e&&this._bufferTypeSelect.set("value","StraightLine"),e&&(this.outputLayerName=d.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName))},_renderVariableRow:function(e){var t=p.create("div",{class:"ShoppingCartRow"}),i=p.create("div",{class:"ShoppingCartRowCloser ShoppingCartRowFloatEnd"},t);return b(i,"click",s.hitch(this,this._handledRemoveVarClick,e)),p.create("div",{class:"dijitInline ShoppingCartRowSpacer ShoppingCartRowFloatEnd",innerHTML:"&nbsp;"},t),p.create("div",{class:"TrimWithEllipses ShoppingCartRowLabel",innerHTML:e.title},t),t},_handledRemoveVarClick:function(e){this._databrowser._shoppingCart._onRemove(e),this._databrowser._onOK()},validateSelectedGrid:function(){var e;return(e=this.get("analysisVariables")&&0!==this.get("analysisVariables").length)?c.set(this._analysisVariablesCtr,"borderColor","#EFEEEF"):(S.scrollIntoView(this._analysisVariablesCtr),c.set(this._analysisVariablesCtr,"borderColor","#f94")),e},validateDistance:function(){var e,t,i,a,r=this,o=[];return this.set("distance"),!!(e=s.trim(this._distanceInput.get("value")))&&(a=g.parse(e),isNaN(a)?(o.push(0),!1):(t=g.format(a,{locale:"root"}),W.isDefined(t)?W.isDefined(t)||(t=g.format(a,{locale:"en-us"})):t=g.format(a,{locale:"en"}),W.isDefined(t)&&(i=s.trim(t).match(/\D/g)),i&&n.forEach(i,(function(e){"."===e||","===e?o.push(1):"-"===e&&"polygon"===r.inputType?o.push(1):o.push(0)})),-1===n.indexOf(o,0)))},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1)),this._connect(this._databrowser,"onOK",s.hitch(this,this._handleDataBrowserOk)),this._connect(this._databrowser,"onCancel",s.hitch(this,this._handleDataBrowserCancel)),this.own(this.on("travelmodes-added",s.hitch(this,(function(){a.connect(this._bufferTypeSelect,"onChange",s.hitch(this,this._handleDistanceTypeChange)),this._handleDistanceTypeChange(this.bufferType,!0);var e=!(this.bufferType||this.outputLayerName);this._updateAnalysisLayerUI(e)})))),t.after(this._databrowser,"loadPage",s.hitch(this,this._setCalciteButtons)),this.watch("enableTravelModes",s.hitch(this,(function(e,t,i){this._updateTravelModes(i)}))),this.map.on("extent-change",s.hitch(this,(function(){this._getSourceCountry(!0)})))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&K.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).always(s.hitch(this,(function(){this._updateAnalysisLayerUI(!0),this._isAnalysisSelect=!1})))},_handleDataBrowserOk:function(e){this.set("analysisVariables",this._databrowser.selection),this._handleFavoritesUpdate(),this._dataDialog.hide(),this._hideDataBwsrSearchToolTip()},_handleDataBrowserCancel:function(){this._handleFavoritesUpdate(),this._dataDialog.hide(),this._hideDataBwsrSearchToolTip()},_hideDataBwsrSearchToolTip:function(){this._databrowser&&this._databrowser.pages&&this._databrowser.pages.categories&&this._databrowser.pages.categories.txbSearch&&this._databrowser.pages.categories.txbSearch.hideTooltip(),this._databrowser&&this._databrowser.pages&&this._databrowser.pages.collections&&this._databrowser.pages.collections.txbSearch&&this._databrowser.pages.collections.txbSearch.hideTooltip()},_handleShowDataDialogClick:function(e){this._databrowser.set("favorites",this.favorites),this._dataDialog.show()},_setCalciteButtons:function(){f(".calcite .DataCollectionButton").forEach((function(e){y.add(e,"btn secondary")})),f(".calcite .Wizard_Button").forEach((function(e,t){u.get(e,"innerHTML")===this._databrowser.okButton?y.add(e,"btn secondary"):y.add(e,"btn transparent")}),this)},_refreshGrid:function(e,t,i){var s=[];for(var n in this._databrowser._shoppingCart._content)this._databrowser._shoppingCart._content.hasOwnProperty(n)&&s.push(this._databrowser._shoppingCart._content[n]);c.set(this._selectLabelDiv,"display",0===s.length?"block":"none"),c.set(this._selectedList,"display",0===s.length?"none":"block"),u.set(this.varCounter,"innerHTML",s.length.toString()),this.list.refresh(),this.list.renderArray(s)},_showMessages:function(e){u.set(this._bodyNode,"innerHTML",e),o.fadeIn({node:this._errorMessagePane,easing:_.quadIn,onEnd:s.hitch(this,(function(){c.set(this._errorMessagePane,{display:""})}))}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),o.fadeOut({node:this._errorMessagePane,easing:_.quadOut,onEnd:s.hitch(this,(function(){c.set(this._errorMessagePane,{display:"none"})}))}).play()},addQueryParameters:function(){return'(-typekeywords:"AnalysisRestricted")'},_handleAnalysisLayerChange:function(e){this._isAnalysisSelect=!0,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e,disabledSubResources:[this.inputLayer],addQueryParameters:this.addQueryParameters},{},this._analysisSelect):(this.inputLayer=this.inputLayers[e],this.inputLayer&&(this._getSourceCountry(this.inputLayer.analysisReady),this._updateAnalysisLayerUI(!0)))},_handleFavoritesUpdate:function(){var e={favorites:this.get("favorites")};this.set("enrichOptions",e)},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){this.inputLayer=e},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_setInputLayersAttr:function(e){this.inputLayers=e},_setAnalysisVariablesAttr:function(e){this._set("analysisVariables",e)},_getAnalysisVariablesAttr:function(){return this.analysisVariables},_setShowTrafficWidgetAttr:function(e){this.showTrafficWidget=e},_getShowTrafficWidgetAttr:function(){return this.showTrafficWidget},_setBufferTypeAttr:function(e){this.bufferType=e},_getBufferTypeAttr:function(){return this.bufferType},_setDistanceAttr:function(e){e&&(this.distance=g.format(e)),this._distanceInput&&this._distanceInput.set("value",this.distance)},_getDistanceAttr:function(){return this.distance=this._distanceInput.get("value"),this.distance},_setCountryAttr:function(e){this.country=e},_getCountryAttr:function(){return this._databrowser&&(this.country=this._databrowser.get("countryID")),this.country},_setEnableTravelModesAttr:function(e){this._set("enableTravelModes",e)},validateServiceName:function(e){return K.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))},_updateTravelModes:function(e){var t=this._bufferTypeSelect.getOptions();n.forEach(t,(function(t){"StraightLine"!==t.value&&(t.disabled=!e,t.label=e?t.label.replace("esriAnalysisTextDisabled",""):t.label.replace("esriLeadingMargin4","esriLeadingMargin4 esriAnalysisTextDisabled"))})),this._bufferTypeSelect.updateOption(t)},_getPoint:function(e,t){var i;return e.graphics&&e.graphics.length>0&&-1!==n.indexOf(["point","polygon","polyline"],e.graphics[0].type)?e.graphics[0].geometry:this.map.extent||t?(i=new $(this.map.extent).getCenter(),new te(ee.xyToLngLat(i.x,i.y))):e.extent?(i=new $(e.extent).getCenter(),new te(ee.xyToLngLat(i.x,i.y))):(i=e.initialExtent?new $(e.initialExtent).getCenter():e.fullExtent?new $(e.fullExtent).getCenter():null,new te(ee.xyToLngLat(i.x,i.y)))},_getFavoritesAttr:function(){return this.favorites},_setFavoritesAttr:function(e){if(e&&e.storage){var t={get:function(e){return this[e]},set:function(e,t){this[e]=t}};s.mixin(t,e.storage),this._set("favorites",new X({storage:t}))}},_getEnrichOptionsAttr:function(){if(window.localStorage){var e=window.localStorage.getItem("Esri_enrich_options");e&&this._set("enrichOptions",l.parse(e))}return this.enrichOptions},_setEnrichOptionsAttr:function(e){this._set("enrichOptions",e),window.localStorage&&window.localStorage.setItem("Esri_enrich_options",l.stringify(this.enrichOptions))}}),h("extend-esri")&&s.setObject("dijit.analysis.EnrichLayer",ae,V),ae}));