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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil","../../../supportClasses/DocumentOptions","../../ConversionUtil","../../../sections/SectionTypes","./AlignParser","./_HiddenCellsCollector","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,t,r,a,i,s,n,o,l,u){var g={parseTableCellAttributes:function(t,r,a){var i=a.tableDefaultStyles;if(r=r||{},t.overrideStyle&&(r.overrideStyle=t.overrideStyle),t.pad&&(r.horizontalPadding=s.ptToPx(t.pad)),t.vpad&&(r.verticalPadding=s.ptToPx(t.vpad)),t.angle&&(r.angle=Number(t.angle)||0),o.parseAlign(t,r),t.width&&(r.width=s.ptToPx(t.width)),t.height&&(r.height=s.ptToPx(t.height)),e.mixin(r,s.ptToPxObj(s.parseStyleString(t.style))),r.overrideStyle&&i){var n=i.getStyle(r.overrideStyle);for(var l in n)delete r[l]}return g._parseBorderProperties(t,r),r},_SIDES:["Top","Right","Bottom","Left"],_parseBorderProperties:function(e,t){g._SIDES.forEach((function(r){if(e["border"+r+"Width"]){e["border"+r+"Color"]&&(t["border"+r+"Color"]=e["border"+r+"Color"]),e["border"+r+"Width"]&&(t["border"+r+"Width"]=s.ptToPx(e["border"+r+"Width"])),e["border"+r+"Style"]&&(t["border"+r+"Style"]=e["border"+r+"Style"]);var a=e["border"+r+"Opacity"];t["border"+r+"Opacity"]=a?Number(a):1}}))}},d={getElement:function(e,t,r){var a=d._processTableColumns(e,t.templateJson,r),i=Number(e.attributes.fixedColumns)||0,n=Number(e.attributes.dynamicColumns)||0,o=d._getTableOuterTags(e,t),u=o.trTags,p=o.bgTag,f=o.fgTag,c=o.backgroundFloatingPanelsTag,b=o.foregroundFloatingPanelsTag,m=o.filterTag,T=o.sortingTag;if(u){var h=u.map((function(){return{style:{fields:{}},fieldInfos:{}}})),y=l.collectHiddenCells(u,t);u.forEach((function(e,r){var o=h[r];if(e.attributes&&e.attributes.height&&(o.style.height=s.ptToPx(e.attributes.height)),e.tags&&e.tags.length){var u=0;if(n){var p=[],f=[],c=0;e.tags.forEach((function(e){for(;l.isHidden(y,c,r);)c++;c<i?p.push(e):f.push(e),c++}));var b=Math.round((a.length-i)/n);e.tags=p;for(var m=0;m<b;m++)e.tags=e.tags.concat(f)}e.tags.forEach((function(e){for(;l.isHidden(y,u,r);)u++;if(a[u]){var i=a[u].field,s=e.attributes||{},n=o.style.fields[i]={};g.parseTableCellAttributes(s,n,t),s.width&&d._parseSpannedCellsDimentions(s,h,a,r,u);var p=Number(s.colspan),f=Number(s.rowspan);p&&(o.columnSpans=o.columnSpans||{},o.columnSpans[i]=p),f&&(o.rowSpans=o.rowSpans||{},o.rowSpans[i]=f);try{d._parseCellContent(e,o,i,n,t)}catch(e){console.log(e)}u++}}))}}))}var S,P={id:"table",customName:e.attributes.customName,backgroundSectionJson:p&&d._parseTableBackgroundForeground(p,t,!0),foregroundSectionJson:f&&d._parseTableBackgroundForeground(f,t,!1),backgroundFloatingTablesSectionJson:c&&d._parseFloatingPanels(c,t,!0),foregroundFloatingTablesSectionJson:b&&d._parseFloatingPanels(b,t,!1),data:{columns:a,data:h||[]},style:{width:s.ptToPx(e.attributes.width),left:s.ptToPx(e.attributes.left),top:s.ptToPx(e.attributes.spaceBefore),spaceAfter:s.ptToPx(e.attributes.spaceAfter),alternatingStyle:e.attributes.alternatingStyle,opacity:e.attributes.opacity?Number(e.attributes.opacity):void 0,fixedCellsOpacity:e.attributes.fixedCellsOpacity?Number(e.attributes.fixedCellsOpacity):void 0},attributes:{},presetFilter:m&&t.parsers.getParser("filter").getFilter(m)},C=T&&t.parsers.getParser("sorting").getSorting(T);C&&(a.some((function(e,t){if(t===C.columnIndex)return S=e.field,!0})),S&&(C.field=S,delete C.columnIndex,P.presetSorting=C));return i&&(P.attributes.fixedColumns=i),n&&(P.attributes.dynamicColumns=n),e.attributes.fixedRows&&(P.attributes.fixedRows=Number(e.attributes.fixedRows)||0),e.attributes.dynamicRows&&(P.attributes.dynamicRows=Number(e.attributes.dynamicRows)||0),P.attributes.inSectionRole=e.attributes.inSectionRole,P},_processTableColumns:function(e,t,r){if(r&&r.fixTableWidthsForPage){var a=s.pxToPt(i.getPageBox(t.documentOptions).contentW);if(e.attributes.widths&&Number(e.attributes.width)>a){var n=s.splitTrim(e.attributes.widths,";",!0),o=Number(e.attributes.width)-a,l=Number(n[n.length-1]);l>o&&(l-=o,n[n.length-1]=l,e.attributes.widths=n.join(";"),e.attributes.width=a)}}var u=0;return e.attributes.widths?s.splitTrim(e.attributes.widths,";",!0).map((function(e){return{field:"field"+u++,style:{width:s.ptToPx(e)}}})):[]},_getTableOuterTags:function(e,t){var r,a,i,s,o,l,u=[];return t.revisionVersion>=1.1?e.tags&&e.tags.forEach((function(e){if("tr"!==e.name)if("filter"!==e.name)if("sorting"!==e.name)switch(e.attributes.type){case n.TABLE_BACKGROUND:r=e;break;case n.TABLE_FOREGROUND:a=e;break;case n.TABLE_BACKGROUND_FLOATING_PANELS:i=e;break;case n.TABLE_FOREGROUND_FLOATING_PANELS:case n.TABLE_FLOATING_PANELS:s=e}else l=e;else o=e;else u.push(e)})):e.tags&&e.tags.forEach((function(e){"tr"===e.name?u.push(e):"background"===e.name?r=e:"foreground"===e.name?a=e:"floatingElements"===e.name&&(s=e)})),{trTags:u,bgTag:r,fgTag:a,backgroundFloatingPanelsTag:i,foregroundFloatingPanelsTag:s,filterTag:o,sortingTag:l}},_processTdContent:function(e,t){var r,a,i;if(e.tags&&e.tags.length)if((a=(i=e.tags.filter((function(e){return"br"!==e.name})))[0])&&"trigger"===a.name&&i[1]&&"d"===i[1].name)r=a,a=i[1];else{var s=function e(r){var a=r.tags&&1===r.tags.length&&r.tags[0];return a&&a.tags?("b"===a.name?t.fontWeight="bold":"i"===a.name?t.fontStyle="italic":"u"===a.name&&(t.textDecoration="underline"),"b"===a.name||"i"===a.name||"u"===a.name?e(a)||{tag:a.tags[0],parentTag:a}:null):null}(e);a=s&&s.tag||i[0],e=s&&s.parentTag||e}return{firstTag:a,triggerTag:r,parentTag:e,hasMultipleTags:i&&i.length>1}},_parseSpannedCellsDimentions:function(e,t,r,a,i){if(e.spannedWidths||e.spannedHeights)for(var n=e.spannedWidths?e.spannedWidths.split(";").map((function(e){return s.ptToPx(e)})):[s.ptToPx(e.width)],o=e.spannedHeights?e.spannedHeights.split(";").map((function(e){return s.ptToPx(e)})):[s.ptToPx(e.height)],l=0;l<n.length;l++)for(var u=0;u<o.length;u++){var g=r[i+l],d=t[a+u],p=d.style.fields[g.field]=d.style.fields[g.field]||{};p.width=n[l],p.height=o[u]}},_parseCellContent:function(e,i,n,o,l){function g(e){t.isRichText(e)?i.fieldInfos[n]=a.createFieldInfoFromRichText(e):i[n]=t.unrichHTML(e)}var p,f=d._processTdContent(e,o),c=f.firstTag,b=f.parentTag,m=f.triggerTag,T=f.hasMultipleTags;if(T&&!m){var h=l.parsers.getParser("field").parseRichTextTag(b,l);h&&(i.fieldInfos[n]=h,p=!0)}if(c&&!p){var y;l.isGraphicReport&&"section"===c.name&&!c.attributes.style&&o.backgroundColor&&!u.isTransparent(o.backgroundColor)&&(c.attributes.style=s.composeStyleString({backgroundColor:o.backgroundColor}),delete o.backgroundColor);try{y=l.parsers.getParser("field").parseField(c,b,m,l)}catch(e){console.log(e),y=r.createFieldInfoForUnsupportedContent()}if(!1===y)p=!0;else if("number"==typeof y)i[n]=y+"",p=!0;else if(y)i.fieldInfos[n]=y,p=!0;else if("chart"===c.name)p=!0;else if("img"===c.name)p=!0;else if("mapImage"===c.name)p=!0;else if("text"===c.name)i[n]=c.attributes.name,p=!0;else if("a"===c.name&&c.tags&&c.tags[0].text){var S=c.attributes.href;S&&(i.urls=i.urls||{},i.urls[n]=S,i[n]=c.tags[0].text,p=!0)}else c.text&&!T&&(g(c.text),p=!0)}p||g(t.getInnerHTML(b))},_parseTableBackgroundForeground:function(e,t,r){return e.attributes=e.attributes||{},e.attributes.type=r?n.TABLE_BACKGROUND:n.TABLE_FOREGROUND,t.parsers.getParser("section").parseSection(e,t)},_parseFloatingPanels:function(e,t,r){return e.attributes=e.attributes||{},e.attributes.type=r?n.TABLE_BACKGROUND_FLOATING_PANELS:n.TABLE_FOREGROUND_FLOATING_PANELS,t.parsers.getParser("section").parseSection(e,t)}};return d.parseTableCellAttributes=g.parseTableCellAttributes,d}));