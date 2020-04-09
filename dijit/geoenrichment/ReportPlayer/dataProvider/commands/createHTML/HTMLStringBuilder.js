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

define(["dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/query","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","./HeaderFooterRenderer","../../../PlayerViewModes","../../../core/supportClasses/DocumentOptions"],(function(e,t,r,o,n,i,a,d,s,c,l){var g=function(e){i(".selectableLegendRootLabel",e).forEach((function(e){e.title=e.innerHTML}))},p={PROPS_TO_REMOVE:{"data-dojo-attach-point":1,id:1,widgetid:1},buildHtmlStringForPlayer:function(e,t){var o=[],n=p._preprocessMainNode(e,o),i=p._getPageNodes(e,n,t),a=p._cleanUpAndCombinePageNodes(i);return i.forEach((function(e){r.destroy(e)})),{domString:a,additionalStyleNodes:o}},_preprocessMainNode:function(e,t){var o=r.toDom(e.domNode.outerHTML);function a(e){i("."+e,o).forEach((function(e){n.set(e,{maxWidth:"none",maxHeight:"none",width:"auto",height:"auto"})}))}return p._processNode(o,t),e.getViewMode()===c.FULL_PAGES?(a("esriGEReportPlayer_reportContainerGrid"),a("reportContainerGrid_mainContainer")):e.getViewMode()===c.PANELS_IN_STACK_ALL&&(a("esriGEReportPlayer_reportContainerStackAll"),i(".reportContainerStackAll_zoomFillerContainer",o)[0].style.margin="0"),g(o),o},_processNode:function(t,o){var i=this;!function t(s,c){if("svg"===s.nodeName&&(c=!0),!c){var l=d.getStyle(s.id);l&&l.forEach((function(e){o.push(e)})),function(t,r){for(var o in r=void 0===r||r,i.PROPS_TO_REMOVE)(r||"id"!==o)&&e.remove(t,o)}(s,!l)}if(!function(e,t){return t?"line"!==e.nodeName||e.getAttribute("x1")!==e.getAttribute("x2")||e.getAttribute("y1")!==e.getAttribute("y2"):!(a.isHidden(e)||"none"===n.get(e,"display"))}(s,c))return r.destroy(s),!1;if(s.children)for(var g=s.children.length,p=0,u=0;p+u<g;)t(s.children[p],c)?p++:u++;return!0}(t)},_getPageNodes:function(e,t,r){return e.getViewMode()===c.PANELS_IN_STACK_ALL?p._getPageNodes_stackAll(e,t,r):p._getPageNodes_fullPages(e,t,r)},_getPageNodes_stackAll:function(e,t,n){if(!e.splitPages())return(p._providePageHeaderFooter(1,e,!0,[t])||e.needAutoScale())&&p._tryApplyNewPageSize(e,t),p._processAllPanelsInStacks(t),[t];var a=r.create("div",{class:"esriGEBehindScreen"},document.body);a.appendChild(t),p._providePageHeaderFooter(1,e,!0,[t]),["esriGEReportPlayerPrint_reportHeader","esriGEReportPlayerPrint_reportDataSource","esriGEReportPlayerPrint_reportFooter"].map((function(e){var o=i("."+e,t)[0];o&&r.destroy(o)}));var d=i(".esriGEReportPlayer_infographicsPageStack",t)[0],s=0,c=i(".infographicPageStack_infographicRow",d).map((function(e){var t=o.getMarginBox(e).h;return s=Math.max(s,t),t})),g=[];if(1===c.length)g.push({height:c[0],indexes:[0]});else if(2===c.length)g.push({height:c[0]+c[1],indexes:[0,1]});else{var u,h=l.getPageBox(e.getDocumentOptions()),f=t.clientWidth*h.h/h.w,_=Math.max(f,c[0]+c[1],s);c.forEach((function(e,t){u&&u.height+e<=_?(u.indexes.push(t),u.height+=e):(u={height:e,indexes:[t]},g.push(u)),u.height>=_&&(u=null)}))}var P=i(".reportContainerStackAll_groupLabelsContainer",t)[0].clientHeight,m=g.map((function(e){var o=r.toDom(t.outerHTML);return i(".reportContainerStackAll_zoomFillerContainer",o)[0].style.height=e.height+P+"px",p._processAllPanelsInStacks(o,(function(t,o){-1===e.indexes.indexOf(o)&&r.destroy(t)})),o}));return p._providePageHeaderFooter(m.length,e,!0,m),r.destroy(a),m},_processAllPanelsInStacks:function(e,r){i(".esriGEReportPlayer_infographicsPageStack",e).forEach((function(e){i(".infographicPageStack_infographicRow",e).forEach((function(e,o){var n=i(".section_stackNode",e)[0];t.add(n,"infographicPageStack_infographicSectionNode_stackNode"),r&&r(e,o)}))}))},_getPageNodes_fullPages:function(e,t,o){var n=[],a=i(".reportContainerGrid_gridContainerWrapper",t);a.length>1?(a.forEach((function(e){e.parentNode.removeChild(e)})),i(".esriGEReportPlayer_reportContainerGrid",t).forEach((function(e,t){t>0&&e.parentNode.removeChild(e)})),a.forEach((function(e){var o=r.toDom(t.outerHTML);i(".reportContainerGrid_gridStackContainer",o)[0].appendChild(e),n.push(o)}))):n.push(t);return(p._providePageHeaderFooter(e.getNumberOfPages(),e,o,n)||e.needAutoScale())&&p._tryApplyNewPageSize(e,n[0]),n},_tryApplyNewPageSize:function(e,t){if(-1!==e.getDocumentOptions().pagesize.indexOf("x")){var o=r.create("div",{class:"esriGEBehindScreen"},document.body);o.appendChild(t),e.setNewPageSize(t.clientWidth,t.clientHeight),o.removeChild(t),r.destroy(o)}},_providePageHeaderFooter:function(e,t,r,o){var n=t.getDocumentOptions(),i=t.getHeaderFooterParams(),a=!1;return o.forEach((function(t,d){var c=Math.floor(d/e),l=d%e;a=s.addHeaderAndFooterToPage({pageNode:t.children[0],headerFooterParams:i&&i[c],documentOptions:n,pageIndex:r?d:l,numPages:r?o.length:e})||a})),a},_cleanUpAndCombinePageNodes:function(e){return(t=e.map((function(e){return e.outerHTML})).join(""))&&t.replace(/esriMapsAnalystXNonSelectable|esriGENonSelectable|esriMapsAnalystXClickable|dojogfxstrokestyle="solid"/g,"");var t}};return p}));