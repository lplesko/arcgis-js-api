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

define(["../kernel","../numberUtils","../renderers/utils","../dijit/RendererSlider","../dijit/RendererSlider/sliderUtils","dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/debounce","dojo/dom-style","dojo/Evented","dojo/has","dojox/gfx","dojo/text!./ColorInfoSlider/templates/ColorInfoSlider.html"],(function(t,i,s,e,o,a,h,l,r,n,u,m,d,c,_,p){var g=r([h,a,d],{declaredClass:"esri.dijit.ColorInfoSlider",baseClass:"esriColorInfoSlider",templateString:p,colorInfo:null,minValue:null,maxValue:null,histogram:null,statistics:!1,zoomOptions:null,handles:[],primaryHandle:null,showLabels:!0,showTicks:!0,showHandles:!0,showHistogram:!0,showStatistics:!0,showTransparentBackground:!1,showRatioLabels:!1,histogramWidth:100,rampWidth:26,_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,_transparentBackgroundNode:null,_forceMinValue:null,_forceMaxValue:null,constructor:function(t,i){i&&(void 0!==t.minValue&&this.set("_forceMinValue",t.minValue),void 0!==t.maxValue&&this.set("_forceMaxValue",t.maxValue),this._updateTimeout=u(this._updateTimeout,0))},postCreate:function(){this.inherited(arguments),this._setupDataDefaults()},startup:function(){this.inherited(arguments),this._slider=new e({type:"ColorInfoSlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:!!this.zoomOptions,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,showRatioLabels:this.showRatioLabels,handles:this.handles,primaryHandle:this.primaryHandle},this._sliderNode),this._slider.startup(),this._rampNode=this._slider._sliderAreaRight,this._sliderHeight=m.get(this._rampNode,"height")||155,this._valuesAutoAdjust(),this._createSVGSurfaces(),this._slider.on("slide",n.hitch(this,(function(t){this._valuesAutoAdjust(),this._updateColorInfo(this._slider.values),this._fillRamp(),this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,colorInfo:n.clone(this.colorInfo)})}))),this._slider.on("handle-value-change",n.hitch(this,(function(t){this.set("values",t.values),this._valuesAutoAdjust(),this._updateColorInfo(this._slider.values),this._fillRamp(),this._updateRendererSlider();var i=n.clone(this.colorInfo);this.emit("handle-value-change",i),this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,colorInfo:i})}))),this._slider.on("data-value-change",n.hitch(this,(function(t){this.set({minValue:t.min,maxValue:t.max}),this._updateRendererSlider();var i={minValue:this.minValue,maxValue:this.maxValue,colorInfo:n.clone(this.colorInfo)};this.emit("data-change",i),this.emit("data-value-change",i)}))),this._slider.on("stop",n.hitch(this,(function(t){this.emit("handle-value-change",n.clone(this.colorInfo))}))),this._slider.on("zoom-out",n.hitch(this,(function(t){this.set("zoomOptions",null)}))),this.statistics&&this.showStatistics&&this._generateStatistics(),this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram(),this.watch("colorInfo",this._updateTimeout),this.watch("handles",this._updateTimeout),this.watch("primaryHandle",this._updateTimeout),this.watch("statistics",this._updateTimeout),this.watch("histogram",this._updateTimeout),this.watch("zoomOptions",this._updateTimeout),this.watch("showHandles",this._updateTimeout),this.watch("showLabels",this._updateTimeout),this.watch("showTicks",this._updateTimeout),this.watch("showRatioLabels",this._updateTimeout),this.watch("zoomOptions",this._zoomEventHandler),this.watch("showHistogram",this._toggleHistogram),this.watch("showTransparentBackground",this._toggleTransparentBackground)},destroy:function(){this.inherited(arguments),this._slider&&this._slider.destroy(),this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy(),this.countTooltips&&l.forEach(this.countTooltips,(function(t){t.destroy()}))},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){var t=this.get("showRatioLabels");!1!==t&&"percent"!==t&&"percentTotal"!==t&&this.set("showRatioLabels",!1),null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,maximum:this.zoomOptions.maxSliderValue,showRatioLabels:this.showRatioLabels,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,showRatioLabels:this.showRatioLabels,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1}),this.set("values",this._generateHandleValues(n.clone(this.colorInfo.stops))),this._slider.set({values:this.values,handles:this.handles,primaryHandle:this.primaryHandle}),this._slider._reset(),this._slider._updateRoundedLabels(),this._slider._generateMoveables(),this._clearRect(),this._createSVGSurfaces(),this.statistics&&this.showStatistics&&this._generateStatistics(),this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_generateHandleValues:function(t){return l.forEach(t,n.hitch(this,(function(t,i){-1===l.indexOf(this.handles,i)&&i!==this.primaryHandle&&(t.hidden=!0),i===this.primaryHandle&&(t.primaryHandle=!0)}))),t.slice()},_valuesAutoAdjust:function(){var t,i,s,e,o,a,h,r=this._slider.values,n=[];for(l.forEach(r,(function(t,i){t.hidden||n.push(i)})),a=0;a<n.length-1;a++)for(t=n[a],s=(i=n[a+1])-t,e=r[t].value,o=r[i].value,h=t+1;h<i;h++)r[h].value=e*(i-h)/s+o*(h-t)/s},_zoomEventHandler:function(){this.emit("zoomed",!!this.zoomOptions)},_setupDataDefaults:function(){this.statistics?this.set({minValue:this.statistics.min,maxValue:this.statistics.max}):this.set({minValue:0,maxValue:100}),null!==this._forceMinValue&&this.set("minValue",this._forceMinValue),null!==this._forceMaxValue&&this.set("maxValue",this._forceMaxValue),null!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue),this.colorInfo.stops[0].value===this.colorInfo.stops[this.colorInfo.stops.length-1].value&&0!==this.colorInfo.stops[0].value&&(this.set({minValue:0,maxValue:2*this.colorInfo.stops[0].value}),this.colorInfo.stops[0].value=this.maxValue/5,this.colorInfo.stops[this.colorInfo.stops.length-1].value=this.maxValue/5*4),this.minValue===this.maxValue&&(0===this.minValue?this.set("maxValue",100):null===this.minValue?this.set({minValue:0,maxValue:100}):this.set({minValue:0,maxValue:2*this.minValue})),this.set("values",this._generateHandleValues(n.clone(this.colorInfo.stops)))},_createSVGSurfaces:function(){this._colorRampSurface=_.createSurface(this._rampNode,this.rampWidth-2,this._sliderHeight-2),m.set(this._colorRampSurface.rawNode,"border","1px solid #888"),this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,height:this._sliderHeight}),this._transparentBackgroundNode=o.generateTransparentBackground(this._colorRampSurface,this.rampWidth-2,this._sliderHeight-2,this.showTransparentBackground),this._histogramSurface=o.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth),this._fillRamp(),null!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(_.matrix.translate(0,5)),this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(_.matrix.translate(0,195))):this.toggleSliderBottom?this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(_.matrix.translate(0,195)):this.toggleSliderTop&&this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(_.matrix.translate(0,5)))},_fillRamp:function(){var t=this._slider.values,i=this._slider.minimum,s=this._slider.maximum,e=t.slice();l.forEach(e,(function(t){t.offset=(s-t.value)/(s-i)})),e.reverse(),null!==this.zoomOptions?this.toggleSliderBottom&&this.toggleSliderTop?this._surfaceRect.setFill({type:"linear",x1:0,y1:10,x2:0,y2:this._sliderHeight-10,colors:e}):this.toggleSliderBottom?this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight-20,colors:e}):this.toggleSliderTop&&this._surfaceRect.setFill({type:"linear",x1:0,y1:20,x2:0,y2:this._sliderHeight,colors:e}):this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:e})},_clearRect:function(){this._colorRampSurface.destroy(),this._histogramSurface.destroy()},_toggleTransparentBackground:function(){this.showTransparentBackground?this._transparentBackgroundNode.setFill(o.getTransparentFill()):this._transparentBackgroundNode.setFill(null)},_updateColorInfo:function(t){var i=l.map(t,(function(t,i){return{value:t.value,index:i}}));s.updateColorStops({stops:this.colorInfo.stops,changes:i,isDate:this.isDate,dateFormatOptions:this.isDate?s.timelineDateFormatOptions:null})},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(m.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):m.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var t=this.zoomOptions&&this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=o.generateHistogram(this._histogramSurface,t,this.histogramWidth,this.rampWidth,this.isLeftToRight()),this.countTooltips=o.generateCountTooltips(t,this._barsGroup)},_generateStatistics:function(){if(!(this.statistics.count<2||isNaN(this.statistics.avg))){var t,s,e,a,h=this.statistics,l=this._slider,r=this.zoomOptions||null,n=o.getPrecision(this.maxValue);h.min===h.max&&h.min===h.avg?(t=0,s=2*h.avg):(t=h.min,s=h.max),t===l.minimum&&s===l.maximum||(t=l.minimum,s=l.maximum),r&&(t=r.minSliderValue,s=r.maxSliderValue),e=this._sliderHeight*(s-h.avg)/(s-t),a=this.get("showRatioLabels")?i.round([this._slider._getRatioFromValue(h.avg),t,s])[0]:i.round([h.avg,s,t])[0],this._avgHandleObjs=o.generateAvgLine(this._histogramSurface,a,e,n,this.isLeftToRight(),this.isDate,this.get("showRatioLabels"))}}});return c("extend-esri")&&n.setObject("dijit.ColorInfoSlider",g,t),g}));