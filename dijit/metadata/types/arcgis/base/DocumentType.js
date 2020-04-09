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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/has","../../../../../kernel","../../../base/DocumentType","./Root","./PortalItemTransformer","./arcgisStyles","./itemDescription","./optionsFilterer","./Codelists","./conditionals/Conditionals","dojo/i18n!../../../nls/i18nArcGIS"],(function(a,t,e,n,d,i,o,s,r,c,m,l,u,I,f){var g=a(o,{caption:f.documentTypes.arcgis.caption,codelists:null,conditionals:null,description:f.documentTypes.arcgis.description,key:"arcgis",postCreate:function(){this.codelists=new u,this.conditionals=new I,this.inherited(arguments)},afterInitializeElement:function(a,t){var e,n=a;if("/metadata/dataIdInfo/idCitation/resTitle"===t.gxePath)try{var d=n._editor;t.inputWidget&&n.gxeContext&&n.gxeContext.arcgisMode&&d&&d.dialogBroker&&d.dialogBroker.title&&d.gxeAdaptor&&!d.gxeAdaptor.portalItemContext&&"string"==typeof(e=t.inputWidget.getInputValue())&&0===e.length&&t.inputWidget.setInputValue(d.dialogBroker.title)}catch(a){console.warn("Error initializing metadata title:"),console.error(a)}},beforeInitializeAttribute:function(a,t){var e=t.gxePath,n=a;"/metadata/mdLang/languageCode/@value"===e?t.minOccurs=0:"/metadata/dataIdInfo/dataLang/languageCode/@value"===e?t.minOccurs=1:"/metadata/mdHrLv/ScopeCd/@value"===e?t.minOccurs=0:"/metadata/refSysInfo/RefSystem/@dimension"===e?t.minOccurs=1:"/metadata/mdContact/role/RoleCd/@value"!==e&&"/metadata/dataIdInfo/idPoC/role/RoleCd/@value"!==e||(t.value="007"),this._checkFGDC(e,t,null,n),this._checkINSPIRE(e,t,null,n),this._checkNAP(e,t,null,n),this.conditionals.connectXNode(n,t)},beforeInitializeElement:function(a,t){var e=t.gxePath,n=a;"/metadata/dataIdInfo/idCitation/resTitle"===e?t.isDocumentTitle=!0:"/metadata/Esri/ArcGISstyle"===e?t.value=n.ArcGISStyle:"/metadata/Esri/ArcGISProfile"===e?t.value=n.ArcGISProfile:"/metadata/Esri/ArcGISFormat"===e?t.value=n.ArcGISFormat:"/metadata/mdLang"===e?t.minOccurs=0:"/metadata/dataIdInfo/dataLang"===e?t.minOccurs=1:"/metadata/mdHrLv"===e||"/metadata/mdHrLv/ScopeCd"===e?t.minOccurs=0:"/metadata/dqInfo/report/measResult/QuanResult/quanValUnit/UOM/unitSymbol"===e?t.minOccurs=1:"/metadata/contInfo/FetCatDesc/catLang/CharSetCd"===e&&(t.showHeader=!0),this._checkFGDC(e,null,t,n),this._checkINSPIRE(e,null,t,n),this._checkNAP(e,null,t,n),n.isAgsItemDescription&&m.beforeInitializeElement(a,t),this.conditionals.connectXNode(a,t)},_checkFGDC:function(a,t,e,n){n.isAgsFGDC||null===t||("/metadata/Esri/DataProperties/itemProps/imsContentType/@export"===a?this._ignore(t):null!==a&&a.indexOf("/voiceNum/@tddtty")>0&&(n.isAgsNAP||(t.serialize=!1,this._ignore(t)))),n.isAgsFGDC&&null!==e&&("/metadata/Esri/locales"===a?this._ignore(e):"/metadata/refSysInfo"===a?(this._ignore(e),this._ignoreTab(e)):"/metadata/dataIdInfo/dsFormat"===a?(this._ignore(e),this._ignoreTab(e)):"/metadata/dataIdInfo/idSpecUse"===a&&(this._ignore(e),this._ignoreTab(e))),n.isAgsFGDC&&null!==t&&("/metadata/mdLang/languageCode/@value"===a?t.minOccurs=0:"/metadata/dataIdInfo/dataLang/languageCode/@value"===a?t.minOccurs=0:"/metadata/dataIdInfo/idCitation/citRespParty/role/RoleCd/@value"===a?t.optionsFilter="006":"/metadata/dataIdInfo/idStatus/ProgCd/@value"===a?t.minOccurs=1:"/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value"===a?t.minOccurs=0:null!==a&&a.indexOf("/cntAddress/@addressType")>0&&0!==a.indexOf("/metadata/dataIdInfo/idCitation/citRespParty")&&(t.minOccurs=1)),n.isAgsFGDC&&null!==e&&("/metadata/mdLang"===a?e.minOccurs=0:"/metadata/dataIdInfo/dataLang"===a?e.minOccurs=0:"/metadata/dataIdInfo/idCitation/citRespParty"===a?e.minOccurs=1:"/metadata/dataIdInfo/idCitation/date/pubDate"===a?e.minOccurs=1:"/metadata/dataIdInfo/idPurp"===a?e.minOccurs=1:"/metadata/dataIdInfo/tpCat"===a?e.minOccurs=0:"/metadata/dataIdInfo/dataExt"===a?e.minOccurs=1:"/metadata/dataIdInfo/idStatus"===a||"/metadata/dataIdInfo/idStatus/ProgCd"===a?e.minOccurs=1:"/metadata/dataIdInfo/graphOver/bgFileDesc"===a||"/metadata/dataIdInfo/graphOver/bgFileType"===a?e.minOccurs=1:"/metadata/dataIdInfo/resMaint"===a?e.minOccurs=1:"/metadata/dqInfo/dqScope/scpLvl"===a||"/metadata/dqInfo/dqScope/scpLvl/ScopeCd"===a?e.minOccurs=0:"/metadata/dqInfo/report"===a?e.minOccurs=1:"/metadata/dqInfo/dataLineage/prcStep"===a?e.minOccurs=1:"/metadata/dqInfo/report/measDesc"===a?e.minOccurs=1:"/metadata/dqInfo/dataLineage/prcStep/stepDateTm"===a?e.minOccurs=1:"/metadata/mdConst/SecConsts/classSys"===a||"/metadata/mdConst/SecConsts/handDesc"===a?e.minOccurs=1:"/metadata/dataIdInfo/resConst/SecConsts/classSys"===a||"/metadata/dataIdInfo/resConst/SecConsts/handDesc"===a?e.minOccurs=1:"/metadata/distInfo/distFormat/formatName"===a||"/metadata/distInfo/distFormat/formatVer"===a||"/metadata/distInfo/distributor/distorFormat/formatVer"===a?e.minOccurs=0:null!==a&&null!==e&&-1!==a.indexOf("/rpCntInfo")&&(this._endsWith(a,"/rpCntInfo")||this._endsWith(a,"/cntAddress")||this._endsWith(a,"/city")||this._endsWith(a,"/adminArea")||this._endsWith(a,"/postCode")||this._endsWith(a,"/cntPhone")||this._endsWith(a,"/voiceNum"))&&0!==a.indexOf("/metadata/dataIdInfo/idCitation/citRespParty")&&(e.minOccurs=1))},_checkINSPIRE:function(a,t,e,n){n.isAgsINSPIRE&&null!==t&&("/metadata/mdLang/languageCode/@value"===a?t.minOccurs=1:"/metadata/dataIdInfo/dataLang/languageCode/@value"===a?t.minOccurs=1:"/metadata/mdHrLv/ScopeCd/@value"===a?(t.minOccurs=1,t.optionsFilter=",,005,006,014"):"/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value"===a?(t.minOccurs=1,t.optionsFilter=",,005,006,014"):"/metadata/mdContact/role/RoleCd/@value"===a?(t.value="007",t.optionsFilter="007"):"/metadata/dataIdInfo/idPoC/role/RoleCd/@value"===a&&(t.value="007")),n.isAgsINSPIRE&&null!==e&&("/metadata/mdLang"===a?e.minOccurs=1:"/metadata/dataIdInfo/dataLang"===a?e.minOccurs=1:"/metadata/mdHrLv"===a?e.minOccurs=1:"/metadata/mdHrLv/ScopeCd"===a?e.minOccurs=1:"/metadata/dataIdInfo/idCitation/citId"===a?e.minOccurs=1:"/metadata/dataIdInfo/dataExt"===a?e.minOccurs=1:"/metadata/dataIdInfo/resConst"===a?e.minOccurs=1:"/metadata/dqInfo"===a?e.minOccurs=1:"/metadata/dqInfo/report"===a?e.minOccurs=1:"/metadata/distInfo"===a||"/metadata/distInfo/distTranOps"===a||"/metadata/distInfo/distTranOps/onLineSrc"===a?e.minOccurs=1:"/metadata/mdContact/rpOrgName"!==a&&"/metadata/mdContact/rpCntInfo/cntAddress/eMailAdd"!==a&&"/metadata/mdContact/rpCntInfo"!==a&&"/metadata/mdContact/rpCntInfo/cntAddress"!==a&&"/metadata/dataIdInfo/idPoC/rpCntInfo"!==a&&"/metadata/dataIdInfo/idPoC/rpCntInfo/cntAddress"!==a&&"/metadata/dataIdInfo/idPoC/rpOrgName"!==a&&"/metadata/dataIdInfo/idPoC/rpCntInfo/cntAddress/eMailAdd"!==a||(e.minOccurs=1))},_checkNAP:function(a,t,e,n){n.isAgsNAP||null===t||("/metadata/refSysInfo/RefSystem/@dimension"===a?(t.serialize=!1,this._ignore(t)):null!==a&&a.indexOf("/voiceNum/@tddtty")>0&&(n.isAgsFGDC||(t.serialize=!1,this._ignore(t)))),n.isAgsNAP||null===e?(n.isAgsNAP&&null!==e&&("/metadata/mdHrLvName"===a?this._ignore(e):"/metadata/dataIdInfo/dsFormat"===a?(this._ignore(e),this._ignoreTab(e)):"/metadata/dataIdInfo/idSpecUse"===a&&(this._ignore(e),this._ignoreTab(e))),n.isAgsNAP&&null!==e&&"/metadata/mdFileID"===a&&(e.minOccurs=1)):"/metadata/dataSetFn"===a?this._ignore(e):"/metadata/mdLang/countryCode"===a?(e.serialize=!1,this._ignore(e)):"/metadata/dataIdInfo/dataLang/countryCode"===a?(e.serialize=!1,this._ignore(e)):"/metadata/contInfo/FetCatDesc/catLang/countryCode"===a?(e.serialize=!1,this._ignore(e)):"/metadata/contInfo/FetCatDesc/catLang/CharSetCd"===a?(e.serialize=!1,this._ignore(e)):"/metadata/dataIdInfo/productKeys"===a?(this._ignore(e),this._ignoreTab(e)):"/metadata/dataIdInfo/subTopicCatKeys"===a?(this._ignore(e),this._ignoreTab(e)):a.indexOf("/thesaLang")>0?this._ignore(e):a.indexOf("/date/")>0&&(a.indexOf("/date/notavailDate")>0||a.indexOf("/date/inforceDate")>0||a.indexOf("/date/adoptDate")>0||a.indexOf("/date/deprecDate")>0||a.indexOf("/date/supersDate")>0)&&this._ignore(e)},_endsWith:function(a,t){return null!==a&&-1!==a.indexOf(t,a.length-t.length)},filterOptions:function(a,t,e){return l.filter(a,t,e)},_ignore:function(a){a.hide=!0,a.notApplicable=!0,a.preferOpen=!0,a.domNode.style.display="none"},_ignoreTab:function(a){var t=a.getParent();t&&(t._isGxeDescriptor||t.initializeSection)&&(t.notApplicable=!0)},newPortalItemTransformer:function(a){return new r},newRootDescriptor:function(a,t){return a&&c.setArcGISProfile(a,t),new s}});return d("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.DocumentType",g,i),g}));