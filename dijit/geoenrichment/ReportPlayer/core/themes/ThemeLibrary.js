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

define(["dojo/_base/lang","./PageBorderStyles","../charts/utils/ChartLineStyles","./ReportThemes","./ThemeUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,o,a,r,i,n){n=n.geoenrichment.dijit.ReportPlayer.ReportPlayer;function l(e){var t=(e=e||{}).defaultFontFamilty||"Avenir Next";return{backgroundColor:"#FFFFFF",padding:5,icon:{backgroundColor:"#56a5d8"},highlightedIcon:{backgroundColor:"#D6851A"},iconBarBackground:{backgroundColor:"#AAAAAA"},titleLine:{color:"#A8A7A8"},titleStyle:{fontFamily:t,color:"#828282",fontSize:16,backgroundColor:"transparent"},variableLabelStyle:{fontFamily:t,color:"#56a5d8",fontSize:24,backgroundColor:"transparent"},variableLabelStyleHighlighted:{fontFamily:t,fontSize:24},variableLabelStyleContrast:{fontFamily:t,fontSize:24},variableDescriptionStyle:{fontFamily:t,color:"#828282",fontSize:13,backgroundColor:"transparent"}}}function F(){return{style:t.ALL,lineStyle:"dashed",thickness:1,color:"#b2b2b2"}}function d(e){var t=(e=e||{}).defaultFontFamilty||"Avenir Next",a=e.defaultFontSize||13;return{document:{fontSize:a,fontFamily:t,backgroundImage:{data:null,position:"center",repeat:!1,scale:!0,opacity:1,size:null},border:F()},icon:{backgroundColor:"#56a5d8"},highlightedIcon:{backgroundColor:"#D6851A"},table:{dataTablePadding:5},chart:{renderSingleDataSeriesWithSameColor:!0,outlineStyle:o.SOLID,titleStyle:{fontFamily:t,fontSize:16},xAxis:{gridLinesStyle:o.SOLID,axisStyle:{fontFamily:t,fontSize:9},titleStyle:{fontFamily:t,fontSize:a}},yAxis:{gridLinesStyle:o.SOLID,baseLineStyle:o.SOLID,axisStyle:{fontFamily:t,fontSize:9},titleStyle:{fontFamily:t,fontSize:a}},dataLabelsStyle:{fontFamily:t,fontSize:10},legendStyle:{fontFamily:t,fontSize:10},minMaxLegend:{titleStyle:{fontFamily:t,fontSize:10},minVariableLabelStyle:{fontFamily:t,fontSize:16},maxVariableLabelStyle:{fontFamily:t,fontSize:16}},icon:{backgroundColor:"#56a5d8"},line:{},column:{},bar:{},pie:{},donut:{},ring:{},pictureColumn:{},pictureBar:{},gauge:{dataLabelStyle:{fontFamily:t}},waffle:{dataValueStyle:{fontFamily:t,fontSize:30},dataLabelStyle:{fontFamily:t,fontSize:16}}},infographic:{staticInfographic:l(e)}}}var c={DEFAULT_FONT_FAMILY_CLASSIC:"Verdana",DEFAULT_FONT_FAMILY_GRAPHIC:"Avenir Next",DEFAULT_FONT_SIZE_CLASSIC:10,DEFAULT_FONT_SIZE_GRAPHIC:13,CHART_DATA_FONT_SIZE:10,defaultStaticInfographic:l(),standardRamps:[{id:a.CLASSIC,colors:["#FFFFFF","#13729F","#DEA429"],additional:{table:{overrideStyles:{Default:{color:"#4C4C4C",backgroundColor:"#FFFFFF"},ReportTitle:{color:"#FFFFFF",backgroundColor:"#00436D"},TableHeader:{color:"#4C4C4C",backgroundColor:"#CCCCCC"},GreyText:{color:"#AAAAAA",backgroundColor:"#FFFFFF"},BlueText:{color:"#00436D",backgroundColor:"#FFFFFF"},AlternatingRow:{color:"#4C4C4C",backgroundColor:"#EEEEEE"}}},chart:{renderSingleDataSeriesWithSameColor:!1,colors:["#13729F","#DEA429","#6A9741","#A75523","#456E35","#D7DF22","#868686","#3C546D","#829AB3","#DEDEDE","#03406E","#B1B1B1"]}}},{id:a.GRAPHIC,colors:["#FFFFFF","#56A5D8","#D6851A"],additional:{chart:{colors3series:["#56A5D8","#AED6F1","#2874A6"],colors:["#AED6F1","#85C1E9","#5DADE2","#3498DB","#2E86C1","#2874A6","#21618C","#1B4F72"]}}},{id:"red",colors:["#d3d3d3","#8b4513","#ff4500"],additional:{chart:{colors3series:["#8b4513","#F1948A","#E74C3C"],colors:["#8b4513","#F1948A","#EC7063","#E74C3C","#CB4335","#B03A2E","#943126","#78281F"]}}},{id:"dark",colors:["#6A6A6A","#FFFFFF","#EEEEEE"],additional:{chart:{colors3series:["#FFFFFF","#CACFD2","#A6ACAF"],colors:["#FFFFFF","#D7DBDD","#CACFD2","#BDC3C7","#A6ACAF","#909497","#797D7F","#626567","#4d4d4d","#3e3e3e","#262626"]}}},{id:"green",colors:["#556b2f","#90ee90","#ffffe0"],additional:{chart:{colors3series:["#E9F7EF","#A9DFBF","#27AE60"],colors:["#E9F7EF","#A9DFBF","#7DCEA0","#52BE80","#27AE60","#229954","#1E8449","#196F3D","#145A32"]}}},{id:"green2",colors:["#FFFFFF","#0B7AC0","#35AC46"],additional:{chart:{colors3series:["#56A5D8","#AED6F1","#2874A6"],colors:["#56A5D8","#AED6F1","#85C1E9","#5DADE2","#3498DB","#2E86C1","#2874A6","#21618C","#1B4F72"]}}}]},A={};return c.standardRamps.forEach((function(t){var o=function(t){var o=e.mixin({},t.additional);o.id=t.id;var n=d({defaultFontFamilty:t.id===a.CLASSIC?"Verdana":"Avenir Next",defaultFontSize:t.id===a.CLASSIC?10:13});return r.applyThemeColorsToTheme({theme:n,colors:t.colors}),i.populateObject(n,o,!0),n}(t);c[t.id]=o,A[t.id]=o})),c.TABLE_STYLES=["Default","ReportTitle","TableHeader","GreyText","BlueText","AlternatingRow"],c.getReportThemeById=function(e){return A[e]},c.isStandardTheme=function(e){return!!A[e]},c.getStandardThemes=function(){return Object.keys(A).map((function(e){return A[e]}))},c.getDefaultStaticInfographicSettings=function(){return e.clone(c.defaultStaticInfographic)},c.getDefaultBorderSettings=function(){return F()},c.getDefaultTheme=function(e){return d(e)},c}));