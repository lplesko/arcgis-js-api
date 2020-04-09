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

define(["dojo/_base/lang","../../supportClasses/templateJsonUtils/fieldInfo/FieldLibrary","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],(function(e,i,t,l,n){var r={};return r.getFieldCellValue=function(e){return e.gridData&&e.gridData[e.column.field]},r.setFieldCellContent=function(e,i){e.set("value",i),e.gridData[e.column.field]=i},r.clearFieldInfo=function(e,i){e.fieldInfos&&delete e.fieldInfos[i],e[i]="",r.setNumericDataValue(void 0,e,i)},r.getNumericCellValue=function(e){return r.getNumericDataValue(e.gridData,e.column.field)},r.setNumericCellValue=function(e,i){return r.setNumericDataValue(i,e.gridData,e.column.field)},r.getNumericDataValue=function(e,i){return e&&i&&e[i+"_numeric"]},r.setNumericDataValue=function(e,i,t){i[t+"_numeric"]=e},r.getRenderedValue=function(e,i,t){var a,o={parentGrid:e,gridData:i,column:t},u=e._getCellRenderer().getRenderedContent(o);if(u.isUnavailableData)return{};if("number"!=typeof u.value||isNaN(u.value)){if("string"==typeof u.formattedValue){var d=l.parsePercentOrCurrency(u.formattedValue,n.getCurrencyFormat());isNaN(d)||(a=d)}}else a=u.value;return"number"!=typeof a&&(a=r.getNumericDataValue(i,t.field)),{numericValue:a,formattedValue:u.formattedValue}},r.isEmptyCell=function(e){return!e.get("value")&&!e.gridData[e.column.field]&&!r.getFieldInfo(e)},r.hasSpans=function(e){return r.getColumnSpan(e)||r.getRowSpan(e)},r.getColumnSpan=function(e){return e&&e.gridData&&e.gridData.columnSpans&&e.gridData.columnSpans[e.column.field]},r.getRowSpan=function(e){return e&&e.gridData&&e.gridData.rowSpans&&e.gridData.rowSpans[e.column.field]},r.getDataColumnSpan=function(e,i){return e&&e.columnSpans&&e.columnSpans[i]},r.getDataRowSpan=function(e,i){return e&&e.rowSpans&&e.rowSpans[i]},r.getFieldInfo=function(e){return e&&e.gridData&&e.column&&e.gridData.fieldInfos&&e.gridData.fieldInfos[e.column.field]},r.getGridFirstFieldInfo=function(e){return r.getFieldInfo(e.getFirstCell())},r.setFieldInfo=function(e,i){e.gridData&&(e.gridData.fieldInfos[e.column.field]=i)},r.provideFieldInfo=function(e){return r.setFieldInfo(e,r.getFieldInfo(e)||{}),r.getFieldInfo(e)},r.getCellStyle=function(e,i){if(!e||!e.gridData||!e.column)return null;var t=e.gridData.style&&e.gridData.style.fields&&e.gridData.style.fields[e.column.field];return!t&&i&&(t={},r.setCellStyle(e,t)),t},r.getCellThemeStyle=function(e){return e&&e.gridData&&e.column?e.gridData.themeStyle&&e.gridData.themeStyle.fields[e.column.field]:null},r.setCellStyle=function(e,i){var t=e.gridData.style=e.gridData.style||{};t.fields=t.fields||{},t.fields[e.column.field]=i},r.updateCellStyle=function(i,t){var l=r.getCellStyle(i,!0);e.mixin(l,t)},r.copyFieldStyle=function(e,i,t){var l=r.getCellStyle(e),n=r.getCellStyle(i,!0);for(var a in t)void 0!==l[a]&&(n[a]=l[a])},r.getFieldCellUrl=function(e){if(e.gridData&&e.gridData.urls&&e.column)return e.gridData.urls[e.column.field]},r.setFieldCellUrl=function(e,i){e.gridData&&e.column&&(e.gridData.urls=e.gridData.urls||{},void 0===i?delete e.gridData.urls[e.column.field]:e.gridData.urls[e.column.field]=i)},r.getConditionalFormatting=function(e){var i=r.getFieldInfo(e);return i&&i.triggerJson},r.setConditionalFormatting=function(i,t){var l=r.provideFieldInfo(i);t&&t.fieldInfo===l&&(t.fieldInfo=e.clone(t.fieldInfo),delete t.fieldInfo.triggerJson),l.triggerJson=t},r._toFieldInfo=function(e){return e?e.gridData?r.getFieldInfo(e):"object"==typeof e&&e:null},r.isReportSectionCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.isReportSection)},r.isInfographicCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.isInfographic)},r.isChartCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.isChart)},r.isMapCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.isMap)},r.isImageCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.isImage)},r.isImageTriggerCell=function(e){var i=r._toFieldInfo(e);return!!(i&&i.isImage&&i.triggerJson)},r.isShapeCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.isShape)},r.isEmptyShapeCell=function(e){var i=r._toFieldInfo(e),t=i&&i.shapeJson;return!(!t||t.g&&t.g.length)},r.isPlaceholderShapeCell=function(e){var i=r._toFieldInfo(e),t=i&&i.shapeJson;return!(!t||!t.isPlaceholder)},r.isTextLikeCell=function(e){return!r._toFieldInfo(e)||r.isRichTextCell(e)||r.isVariableLikeFieldCell(e)||r.isSpecialFieldCell(e)},r.isRichTextCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.isRichText)},r.isVariableLikeFieldCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.hasVariable&&!i.script)},r.isVariableFieldCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.hasVariable)},r.isScriptFieldCell=function(e){var i=r._toFieldInfo(e);return!(!i||!i.script)},r.isUneditableScript=function(e){var i=r._toFieldInfo(e);return!!(i&&i.script&&i.script.isUneditableScript)},r.isNumericVariableFieldCell=function(e){var i=r._toFieldInfo(e);return!(!i||!(i.hasVariable&&t.isNumericField(i)||i.script&&!i.script.isUneditableScript&&"String"!==i.script.type))},r.isCalculatableNumericVariableFieldCell=function(e){var i=r._toFieldInfo(e);return(!i||!i.isWebMap)&&r.isNumericVariableFieldCell(e)},r.isStringVariableFieldCell=function(e){var i=r._toFieldInfo(e);return!(!i||!(i.hasVariable&&"esriFieldTypeString"===i.type||i.script&&"String"===i.script.type))},r.isSpecialFieldCell=function(e){var t=r._toFieldInfo(e);return t&&!r.isVariableLikeFieldCell(e)&&i.hasField(t.name)},r}));