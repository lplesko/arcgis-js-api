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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/query","../kernel","../lang","../domUtils","../units","../SpatialReference","../WKIDUnitConversion","../geometry/Point","../geometry/ScreenPoint","../geometry/Polyline","../geometry/geodesicUtils","../geometry/webMercatorUtils","../geometry/screenUtils","../geometry/normalizeUtils","dojo/i18n!../nls/jsapi"],(function(e,i,a,s,t,r,c,l,n,h,d,o,m,p,b,S,v,g,u,f,y,_,L,w){var k=e(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:w.widgets.scalebar,constructor:function(e,c){if(this.metricScalebar=r.create("div",{innerHTML:"<div class='esriScaleLabelDiv'><div class='esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'></div></div><div class='esriScalebarLine esriScalebarMetricLine'></div>"}),this.englishScalebar=r.create("div",{innerHTML:"<div class='esriScalebarLine esriScalebarEnglishLine'></div><div class='esriScaleLabelDiv'><div class='esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'></div></div>"}),this.domNode=r.create("div"),(e=e||{}).map){if(e.scalebarUnit){if("english"!==e.scalebarUnit&&"metric"!==e.scalebarUnit&&"dual"!==e.scalebarUnit)return void console.error("scalebar unit only accepts english or metric or dual");this.scalebarUnit=e.scalebarUnit}else this.scalebarUnit="english";if(e.scalebarStyle){if("ruler"!==e.scalebarStyle&&"line"!==e.scalebarStyle)return void console.error("scalebar style must be ruler or line");this.scalebarStyle=e.scalebarStyle}else this.scalebarStyle="ruler";switch(this.background=e.background,this.scalebarUnit){case"english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="<div class='esriScalebarRuler'><div class='esriScalebarRulerBlock upper_firstpiece'></div><div class='esriScalebarRulerBlock upper_secondpiece'></div><div class='esriScalebarRulerBlock lower_firstpiece'></div><div class='esriScalebarRulerBlock lower_secondpiece'></div></div><div class='scaleLabelDiv'><div class='esriScalebarLabel' style='left: -3%'>0</div><div class='esriScalebarLabel esriScalebarFirstNumber'></div><div class='esriScalebarLabel esriScalebarSecondNumber'></div></div>"),this.domNode.appendChild(this.englishScalebar);break;case"metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="<div class='esriScalebarRuler'><div class='esriScalebarRulerBlock upper_firstpiece'></div><div class='esriScalebarRulerBlock upper_secondpiece'></div><div class='esriScalebarRulerBlock lower_firstpiece'></div><div class='esriScalebarRulerBlock lower_secondpiece'></div></div><div class='scaleLabelDiv'><div class='esriScalebarLabel' style='left: -3%'>0</div><div class='esriScalebarLabel esriScalebarFirstNumber'></div><div class='esriScalebarLabel esriScalebarSecondNumber'></div></div>"),this.domNode.appendChild(this.metricScalebar);break;case"dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}if(this.map=e.map,c?c.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),e.attachTo?t.add(this.domNode,"scalebar_"+e.attachTo):t.add(this.domNode,"scalebar_bottom-left")),t.add(this.domNode,"esriScalebar"),this.map.loaded)this._getDistance(),this._checkBingMaps();else var l=s.connect(this.map,"onLoad",this,(function(){s.disconnect(l),l=null,this._getDistance(),this._checkBingMaps()}));this._mapOnPan=s.connect(this.map,"onPan",this,this._getDistance),this._mapOnExtentChange=s.connect(this.map,"onExtentChange",this,this._getDistance),a.forEach(this.map.layerIds,(function(e,a){"esri.virtualearth.VETiledLayer"===this.map.getLayer(e).declaredClass&&s.connect(this.map.getLayer(e),"onVisibilityChange",i.hitch(this,(function(e){this._checkBingMaps()})))}),this),this._mapOnLayerAdd=s.connect(this.map,"onLayerAdd",i.hitch(this,(function(e){"esri.virtualearth.VETiledLayer"===e.declaredClass&&s.connect(e,"onVisibilityChange",i.hitch(this,(function(e){this._checkBingMaps()}))),this._checkBingMaps()}))),this._mapOnLayerRemove=s.connect(this.map,"onLayerRemove",i.hitch(this,this._checkBingMaps))}else console.error("scalebar: unable to find the 'map' property in parameters")},hide:function(){this._hidden=!0,m.hide(this.domNode)},show:function(){this._hidden=!1,m.show(this.domNode)},destroy:function(){s.disconnect(this._mapOnPan),s.disconnect(this._mapOnExtentChange),s.disconnect(this._mapOnLayerAdd),s.disconnect(this._mapOnLayerRemove),this.hide(),this.map=null,r.destroy(this.domNode)},_checkBingMaps:function(){t.contains(this.domNode,"scalebar_bottom-left")&&(l.set(this.domNode,"left","25px"),a.forEach(this.map.layerIds,(function(e,i){if("esri.virtualearth.VETiledLayer"===this.map.getLayer(e).declaredClass&&this.map.getLayer(e).visible){var a="95px";this.map._mapParams.nav&&(a="115px"),l.set(this.domNode,"left",a)}}),this))},_getDistance:function(e){e=this.map._clip?this.map._getAvailExtent():e||this.map.extent;var i=c.position(this.domNode,!0).y-this.map.position.y;i=i>this.map.height?this.map.height:i;var a,s,t,r=new g(0,i=i<0?0:i),l=new g(this.map.width,i);this.mapUnit="esriDecimalDegrees";var n=_.toMapPoint(e,this.map.width,this.map.height,r),h=_.toMapPoint(e,this.map.width,this.map.height,l),d=new v(e.xmin,(e.ymin+e.ymax)/2,this.map.spatialReference),m=new v(e.xmax,(e.ymin+e.ymax)/2,this.map.spatialReference);if(this.map._clip){var w=this.map.spatialReference._getInfo();n=new v(w.valid[0],0,this.map.spatialReference),h=new v(w.valid[1],0,this.map.spatialReference)}if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||102113===this.map.spatialReference.wkid||this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))n=y.webMercatorToGeographic(n,!0),h=y.webMercatorToGeographic(h,!0),d=y.webMercatorToGeographic(d,!0),m=y.webMercatorToGeographic(m,!0);else if(o.isDefined(S[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){var k;if(this.mapUnit="linearUnit",a=Math.abs(e.xmax-e.xmin),o.isDefined(S[this.map.spatialReference.wkid]))k=S.values[S[this.map.spatialReference.wkid]];else{var R=this.map.spatialReference.wkt,M=R.lastIndexOf(",")+1,N=R.lastIndexOf("]]");k=parseFloat(R.substring(M,N))}t=(a*=k)/1609,s=a/1e3,a/=1e3}if("esriDecimalDegrees"===this.mapUnit){var U=f.isSupported(this.map.spatialReference)?this.map.spatialReference.wkid:4326,x=new u(new b({wkid:U}));x.addPath([n,h]);var B=L._straightLineDensify(x,10);a=f.geodesicLengths([B],p.KILOMETERS)[0];var D=new u(new b({wkid:U}));D.addPath([d,m]);var T=L._straightLineDensify(D,10);f.geodesicLengths([T],p.KILOMETERS)[0],t=a/1.609,1.609,s=a}"english"===this.scalebarUnit?this._getScaleBarLength(t,"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(s,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(t,"mi"),this._getScaleBarLength(s,"km"))},_getScaleBarLength:function(e,i){var a,s,t=this.map._getFrameWidth(),r=50*e/(this.map._clip&&t>0?t:this.map.width),c=0,l=i;for(r<.1&&("mi"===i?(r*=5280,l="ft"):"km"===i&&(r*=1e3,l="m"));r>=1;)r/=10,c++;r>.5?(a=1,s=.5):r>.3?(a=.5,s=.3):r>.2?(a=.3,s=.2):r>.15?(a=.2,s=.15):r>=.1&&(a=.15,s=.1);var n=a/r>=r/s?s:a,h=50*(n/r),d=Math.pow(10,c)*n;this._drawScaleBar(h,d,l)},_drawScaleBar:function(e,i,s){var t,r,c,l=2*Math.round(e);"mi"===s||"ft"===s?(this.englishScalebar.style.width=l+"px",t=h(".esriScalebarFirstNumber",this.englishScalebar),r=h(".esriScalebarSecondNumber",this.englishScalebar),c=h(".esriScalebarMetricLineBackground",this.englishScalebar)):(this.metricScalebar.style.width=l+"px",t=h(".esriScalebarFirstNumber",this.metricScalebar),r=h(".esriScalebarSecondNumber",this.metricScalebar),c=h(".esriScalebarMetricLineBackground",this.metricScalebar)),a.forEach(c,(function(e,i){e.style.width=l-2+"px"}),this),a.forEach(t,(function(e,a){e.innerHTML=i}),this),a.forEach(r,(function(e,a){"esriUnknown"!==this.mapUnit?e.innerHTML=2*i+this.localStrings[s]:e.innerHTML=2*i+"Unknown Unit"}),this)}});return n("extend-esri")&&i.setObject("dijit.Scalebar",k,d),k}));