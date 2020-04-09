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

define(["dojo/_base/lang","../../ThemeCalculator","../../ChartSorting","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../utils/TooltipInfoBuilder","./_ComparisonUtil","./_AxisBuilder","./_PointLabelUtil","./_StatsBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,i,t,a,n,s,r,o,l,u,c){var h=function(e,i){return{color:c.getColorWithAlpha(i.outlineColor||e,i.outlineOpacity),width:i.outlineThickness,style:a.toGFXValue(i.outlineStyle||a.SOLID)}};return{calcSeriesColumnBar:function(a){var S=a.chart,d=a.visualProperties,p=a.seriesItems,m=1===p.length,I=a.seriesItemsWithComparison||p,g=a.chartType,v=a.comparisonInfo,f=a.themeSettings,C=a.viewModel,y=1===I.length&&a.sorting,x=I.length>1&&d.renderColumnBarsInOppositeDirections,V=[],k=new u({visualProperties:d,seriesItems:I,viewModel:C,currentFeatureIndex:a.currentFeatureIndex,isMultiFeatureChart:a.isMultiFeatureChart,excludedSeriesHash:a.excludedSeriesHash,comparisonFeatureAttributes:a.comparisonFeatureAttributes,chartType:g});l.createPointToLabelMap(S);var b={};I.forEach((function(e,o){if(e.points.length){var u={name:e.label,data:[],isComparisonSeries:e.isComparisonSeries,params:{plot:e.isComparisonSeries&&r.getComparisonPlotName(g,v)||void 0}},p=k.gettatisticsForSeriesAt(o);i.provideMissingIconsForPoints(e.points,g);var A=[];e.points.forEach((function(t,r){var S,y=p.values[r],V=y.value,k=V||0;if(d.conditionalStyling){var w=n.getConditionalStyle(y.isBenchmarked?y.ownValue:k,d.conditionalStyling);S=w&&w.backgroundColor}S=S||i.calcColorForPoint({point:t,seriesItem:e,pointIndex:r,seriesIndex:o,numSeries:m?1:I.length,chartType:g,themeSettings:f,isComparisonSeries:e.isComparisonSeries,comparisonInfo:v,isMultiFeature:a.isMultiFeatureChart});var F,P,T=h(S,d),B=S;S=d.columnBarOpacity<1?c.getColorWithAlpha(S,d.columnBarOpacity):S,t.hidden&&(F=S,S=B="transparent"),t.hidden&&(P=T.color,T.color="transparent");var M=r+1,L={x:M,y:k*(x&&o>=I.length/2?-1:1),originalValue:V,isUnavailableData:isNaN(V),valueProp:"y",unsortedIndex:r,originalIndex:t.originalIndex||r,seriesIndex:o,name:l.getPointLabel(t,C),valuesSumsInSeries:p.absSumInSeries,point:t,fill:S,icon:i.calcIconForPoint(t,B,g),bgIcon:i.calcBackgroundIconForPoint(t,g,f,d),stroke:{color:T.color,width:T.width,style:T.style},unhiddenFillColor:F,unhiddenLineColor:P,isBenchmarked:y.isBenchmarked,unbenchmarkedValue:y.ownValue};if(d.isStacked){var W=d.showValuesAsWeightInStack?p.stackValuesAsWeighedPercents:p.stackValues;L.stackValues=W&&W[r]}d.showValuesAsWeightInStack?L.y=p.weightsInStack?100*p.weightsInStack[r]:0:d.yAxis.showValuesAsWeightsInSeries&&(L.y/=p.absSumInSeries/100);var Y=s.getTooltipInfo({yValue:V,pointLabel:l.getPointLabel(I[0].points[r]||t,C),seriesLabel:e.label,isSinglePointInSeries:1===e.points.length,minInSeriesValue:p.minInSeries,maxInSeriesValue:p.maxInSeries,sumInSeriesValue:p.sumInSeries,absSumInSeriesValue:p.absSumInSeries,avgInSeriesValue:p.avgInSeries,weightInStack:p.weightsInStack&&p.weightsInStack[r],minInAreasValue:p.minInSeries,maxInAreasValue:p.maxInSeries,sumInAreasValue:p.sumInSeries,absSumInAreasValue:p.absSumInSeries,avgInAreasValue:p.avgInSeries,visualProperties:d,chartType:g,isMultiFeature:a.isMultiFeatureChart,conditionalStyling:d.conditionalStyling,fieldInfo:t.fieldInfo,isThisAreaSpecific:v&&!a.isMultiFeatureChart?!e.isComparisonSeries:void 0,isThisAreaSingleSeries:m,decimals:t.value&&t.value.decimals,fill:L.fill,stroke:L.stroke.width>0?L.stroke.color:void 0,isBenchmarked:y.isBenchmarked,unbenchmarkedValue:y.ownValue}),E=b[M]=b[M]||[];a.excludedSeriesHash[e.label]||(E.push(Y),A.push(Y)),Y.getGroup=function(){return a.isMultiFeatureChart?A:E},L.tooltip=Y,u.data.push(L)})),y&&y!==t.NONE&&(u.data.sort((function(e,i){return(e.y-i.y)*(y===t.DESC?-1:1)})),u.data.forEach((function(e,i){var t=i+1;e.x=t}))),u.data.forEach((function(e){l.updatePointIndexToLabelMap(S,e.x,o,e.point,C)})),V.push(u)}}),this);var A=k.getTotalStats();return o.prettifyYAxis(A.minYValue,A.maxYValue,S,d,g,f,C,V),a.plotStats&&(e.mixin(a.plotStats,A),a.plotStats.pointIndexToTooltipsHash=b),V},prettifyColumnBarYAxis:function(e){o.prettifyYAxis(e.totalStat.minYValue,e.totalStat.maxYValue,e.chart,e.visualProperties,e.chartType,e.themeSettings,e.viewModel,e.chartSeries,!0,e.chartSize),e.chart.dirty=!0}}}));