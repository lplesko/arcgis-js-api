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

define(["./utils","dojo/i18n!esri/nls/jsapi"],(function(e,t){t=t.geoenrichment.dijit.ReportPlayer.ReportPlayer;var a={};function i(e){Object.keys(e).forEach((function(t){var a=e[t];null==a&&delete e[t]}))}a.NUMBER="n/",a.createFieldInfoFromCalculator=function(t,a,r){if(!t)return null;var n="function"==typeof t.getDescriptionWithType?t:null,l=n?n.variable:t,o=r&&r.format,s=r&&r.autoformatCurrency,u=r&&r.additionalText,d=r&&r.calculatorName,f=r&&r.defaultDistanceUnits,m=r&&r.summaryType,c=n&&n.getToggleGroup&&n.getToggleGroup(),p={comparisonIndex:r&&r.comparisonIndex,alias:n?n.getDescriptionWithType()||n.getAliasWithType():l.description||l.alias,hasVariable:!0,variableID:l.id,fullName:l.fullName,fieldCategory:l.fieldCategory,vintage:l.vintage,type:l.type,statefulName:c?c.value:"n/"+l.fullName,summaryType:m},F=n?n.getCalcType().charAt(0):"n";return p.name=e.name.createFieldNameFromVariable(l,F),o?e.format.setFieldInfoFormat(p,o):(p.decimals=l.precision,p.showCurrency=!(!s||"n"!==F||!l.units||"CURRENCY"!==l.units.toUpperCase()),p.showPercent=!p.showCurrency&&("p"===F||"n"===F&&l.units&&"PCT"===l.units.toUpperCase()),p.useThousandsSeparator=!0),l.isWebMap&&(p.isWebMap=!0,p.webMapFieldName=l.fieldName,p.webMapField=l.field,p.webMapId=l.webMapId,!o&&l.field&&l.field.format&&(p.decimals=l.field.format.places,p.useThousandsSeparator=!1!==l.field.format.digitSeparator)),l.customDataCollection&&(p.isCustomDataCollection=!0,p.customDataCollectionId=l.customDataCollection.id,p.customDataCollectionUrl=l.customDataCollection.url,p.customDataCollectionPortalUrl=l.customDataCollection.portalUrl),l.isSiteAttribute&&(p.isSiteAttribute=!0,p.attribute=l.attribute,p.type=l.attribute.type,!o&&l.attribute.places>0&&(p.decimals=l.attribute.places)),l.isDataLayerAttribute&&(p.isDataLayerAttribute=!0,p.layerID=l.layerID,p.layerUrl=l.layerUrl,p.layerName=l.layerName,p.attribute=l.attribute,p.type=l.attribute.type,!o&&l.attribute.decimals>0&&(p.decimals=l.attribute.decimals),"DISTANCE"===l.attribute.name&&(p.units=l.attribute.units||f||"esriMiles")),"string"==typeof u&&(p.additionalText=u),p.usedFields=l.usedFields,p.expressionText=l.expressionText,e.name.provideQualifiedFieldInfoTemplateName(p,d),i(p),p},a.fieldInfoToVariable=function(e){if(!e.hasVariable)return null;var t={id:e.variableID,fullName:e.fullName,fieldCategory:e.fieldCategory,vintage:e.vintage,type:e.type,precision:e.decimals,usedFields:e.usedFields,expressionText:e.expressionText};return e.isWebMap&&(t.isWebMap=!0,t.fieldName=e.webMapFieldName,t.field=e.webMapField,t.webMapId=e.webMapId),e.isSiteAttribute&&(t.isSiteAttribute=!0,t.attribute=e.attribute),t},a.createFieldInfoFromScript=function(a,r,n){var l=n&&n.format,o=n&&n.additionalText,s=n&&n.calculatorName;(a=a||{}).name=a.name||e.name.DEFAULT_SCRIPT_NAME,a.alias=a.alias||t.scriptNameDefault,a.decimals=Number(a.decimals)||0;var u={comparisonIndex:n&&n.comparisonIndex};return u.name=e.name.createFieldNameFromScript(a),e.name.provideQualifiedFieldInfoTemplateName(u,s),u.script=a,l?e.format.setFieldInfoFormat(u,l):(u.decimals=Number(a.decimals),u.showCurrency=!1,u.showPercent=!1,u.useThousandsSeparator=!0),"string"==typeof o&&(u.additionalText=o),i(u),u},a.createFieldInfoFromImage=function(e,t){return{isImage:!0,imageJson:e,triggerJson:t}},a.createFieldInfoFromMap=function(e){return{isMap:!0,mapJson:e}},a.createFieldInfoFromShape=function(e){return{isShape:!0,shapeJson:e}},a.createFieldInfoFromChart=function(e){return{isChart:!0,chartJson:e}},a.createFieldInfoFromInfographic=function(e){return{isInfographic:!0,infographicJson:e}},a.createFieldInfoFromSection=function(e){return{isReportSection:!0,sectionJson:e}},a.createFieldInfoFromMissingVariable=function(e,t){return{name:e&&e.substr(e.indexOf(".")+1),templateName:e,isMissing:!0,alias:t}},a.createFieldInfoForUnsupportedContent=function(){return{isUnsupportedContent:!0}};var r=/^\[\w+\]$/,n=/\[\w+\]/;a.createFieldInfoFromLabel=function(t,i){if("string"!=typeof t)return null;t=t.trim();var l=r.test(t);if(!i||l)return l?(t=t.replace(/\[|\]/g,"").toUpperCase(),a.createFieldInfoFromSpecialFieldName(e.fields.uiToTemplate(t))):null;if(!n.test(t))return null;var o=e.richText.collectFieldInfosFromRenderedXMLString(t);return o&&e.richText.createFieldInfoFromRichText(o.xmlString,o.fieldInfos,o.specialFieldInfos)},a.createFieldInfoFromSpecialFieldName=function(t,a){if("string"!=typeof t)return null;var i,r=(t=t.substr(t.indexOf(".")+1)).toUpperCase();if(function(){if("GROUPCOUNT"===r)i={name:e.fields.GROUPCOUNT_FIELD_NAME,alias:e.fields.GROUPCOUNT_FIELD_ALIAS};else if("CURRDATE"===r)i={name:e.fields.DATE_FIELD_NAME,alias:e.fields.DATE_FIELD_ALIAS,format:a||e.fields.DATE_FIELD_DEFAULT_FORMAT};else if("SITENOTES"===r)i={name:e.fields.SITENOTES_FIELD_NAME,alias:e.fields.SITENOTES_FIELD_ALIAS};else if(0===r.indexOf("SITENOTE")){var t=e.fields.getSiteNoteFieldNameAt(r.replace("SITENOTE",""));i={name:t,alias:t}}}(),i)return i;var n=e.fields.templateToUIHeader(r);if(n)i={name:e.fields.qualifyTemplateHeaderName(r),alias:n};else{var l=e.fields.templateToUIReportVar(r);l&&(i={name:l,alias:l})}return i};var l=/_P$/i;return a.isFieldInfoInPercentState=function(e){return!!e&&(e.statefulName&&("p"===e.statefulName.charAt(0)||l.test(e.statefulName))||e.alias&&-1!==e.alias.indexOf("(%)"))},a}));