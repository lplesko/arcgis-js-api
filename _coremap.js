// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["require","module","dojo/_base/kernel","dojo/_base/declare","dojo/_base/connect","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/array","dojo/_base/event","dojo/_base/unload","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/sniff","dijit/registry","dojox/gfx/matrix","./kernel","./config","./basemaps","./lang","./Evented","./fx","./deferredUtils","./tileUtils","./urlUtils","./PluginTarget","./geometry/Point","./geometry/ScreenPoint","./geometry/Extent","./geometry/Rect","./geometry/mathUtils","./geometry/scaleUtils","./geometry/screenUtils","./geometry/webMercatorUtils","./layers/GraphicsLayer","./layers/TileInfo","./layers/LOD","./layers/ArcGISTiledMapServiceLayer","./layers/MapImageLayer","./layers/OpenStreetMapLayer","./layers/VectorTileLayer","./dijit/Popup","./plugins/popupManager","dojo/uacss"],function(t,e,i,n,s,a,r,o,h,l,d,_,c,p,u,f,g,m,y,x,v,L,w,b,E,z,R,I,M,D,A,S,C,W,T,O,P,H,U,F,k,j,Z,N,B){function G(t,e){var i=t.lods;i.sort(function(t,e){return t.scale>e.scale?-1:t.scale<e.scale?1:0});var n=[];i=o.filter(i,function(t){return-1===K(n,t.scale)?(n.push(t.scale),!0):void 0});var s,a=e.lods=[];o.forEach(i,function(t,e){s=a[e]=new F(t),s.level=e}),e.tileInfo=new U(te(t,{lods:a}))}var V,$=O.toMapPoint,J=O.toScreenPoint,q=s.connect,X=s.disconnect,Q=r.hitch,Y=f.set,K=o.indexOf,te=r.mixin,ee=0,ie=v.defaults.map,ne=ie.layerNamePrefix,se=ie.graphicsLayerNamePrefix,ae=new RegExp("^"+ne+"(\\d+)$"),re=new RegExp("^"+se+"(\\d+)$"),oe=function(){},he=1e6,le=.75,de=.25,_e=3,ce=20,pe=40,ue=n([b,M],{declaredClass:"esri._CoreMap",resizeDelay:300,invalidExtent:"Map does not have a valid extent.",invalidGeometry:"Geometry (wkid: ${geometry}) cannot be converted to spatial reference of the map (wkid: ${map})",unknownBasemap:'Unable to find basemap definition for: "${basemapName}". Try one of these: ${list}',invalidBasemap:'Unable to add basemap: "${basemapName}".',unknownLayerType:'Unknown basemap layer type: "${type}" found in basemap definition for: "${basemapName}".',visible:!0,_eventMap:{"basemap-change":!0,"extent-change":["extent","delta","levelChange","lod"],"layer-add":["layer"],"layer-add-result":["layer","error"],"layer-remove":["layer"],"layer-reorder":["layer","index"],"layer-resume":["layer"],"layer-suspend":["layer"],"layers-add-result":["layers"],"layers-removed":!0,"layers-reordered":["layerIds"],load:["map"],pan:["extent","delta"],"pan-end":["extent","delta"],"pan-start":["extent","screenPoint"],reposition:["x","y"],resize:["extent","width","height"],scale:["matrix","immediate"],"time-extent-change":["timeExtent"],"before-unload":["map"],unload:["map"],"update-end":["error"],"update-start":!0,zoom:["extent","zoomFactor","anchor"],"zoom-end":["extent","zoomFactor","anchor","level"],"zoom-start":["extent","zoomFactor","anchor","level"],click:!0,"dbl-click":!0,"key-down":!0,"key-up":!0,"mouse-down":!0,"mouse-drag":!0,"mouse-drag-end":!0,"mouse-drag-start":!0,"mouse-move":!0,"mouse-out":!0,"mouse-over":!0,"mouse-up":!0,"mouse-wheel":!0,"basic-tap":!0,"double-tap":!0,"pinch-end":!0,"pinch-move":!0,"pinch-start":!0,"processed-double-tap":!0,"processed-tap":!0,"swipe-end":!0,"swipe-move":!0,"swipe-start":!0,tap:!0,"two-finger-tap":!0},constructor:function(e,i){var n=this;this.registerConnectEvents(),te(this,{_internalLayerIds:[],_layers:[],_layerDivs:[],_layerSize:0,_connects:[],_zoomAnimDiv:null,_zoomAnim:null,_layersDiv:null,_firstLayerId:null,_delta:null,_cursor:null,_ratioW:1,_ratioH:1,_params:null,cursor:null,layerIds:[],graphicsLayerIds:[],graphics:null,_labels:null,loaded:!1,__panning:!1,__zooming:!1,__container:null,root:null,__LOD:null,__tileInfo:null,__visibleRect:null,__visibleDelta:null,_rids:[]});var s=this.container=d.byId(e),a=this.id=_.get(s,"id")||m.getUniqueId(this.declaredClass);c.add(s,"map");var r=u.getContentBox(s),o=c.add,h=p.create;this.position=new A(0,0),this._reposition();var f=this.width=r.w>0?r.w:ie.width,g=this.height=r.h>0?r.h:ie.height,y=this.root=h("div",{id:a+"_root",style:{width:f+"px",height:g+"px",direction:"ltr"}});o(y,"esriMapContainer");var x=this.__container=h("div",{id:a+"_container"},y);Y(x,"position","absolute"),o(x,"esriMapContainer"),s.appendChild(y);var v=this._params=te({slider:!0,nav:!1,zoom:-1,minZoom:-1,maxZoom:-1,scale:-1,minScale:0,maxScale:0,showInfoWindowOnClick:!0,displayGraphicsOnPan:!0,wrapAround180:!0,fitExtent:!1,optimizePanAnimation:!0},i||{});this.wrapAround180=v.wrapAround180,this.optimizePanAnimation=v.optimizePanAnimation,w.isDefined(v.resizeDelay)&&(this.resizeDelay=v.resizeDelay),v.lods&&(G({rows:512,cols:512,dpi:96,format:"JPEG",compressionQuality:75,origin:{x:-180,y:90},spatialReference:{wkid:4326},lods:v.lods},v),this.__tileInfo=v.tileInfo);this.extent=v.extent;this._extentUtil({mapCenter:v.center,targetLevel:v.zoom,targetScale:v.scale}),this.__visibleRect=new C(0,0,f,g),this.__visibleDelta=new C(0,0,f,g);var L=this._layersDiv=h("div",{id:a+"_layers"});if(o(L,"esriMapLayers"),x.appendChild(L),this._zoomAnimDiv=h("div",{style:{position:"absolute"}}),v.infoWindow)this.infoWindow=v.infoWindow;else{var b=this.infoWindow=new B(v.popupOptions,h("div"));b.startup(),b._ootb=!0,Y(b.domNode,"zIndex",pe)}v.showLabels&&(t(["./layers/LabelLayer"],function(t){V=t,n._createLabelLayer()}),this.on("load",function(){n._createLabelLayer()})),this.addPlugin(this._getAbsMid("./plugins/popupManager"),{enabled:v.showInfoWindowOnClick}),this._zoomStartHandler=Q(this,this._zoomStartHandler),this._zoomingHandler=Q(this,this._zoomingHandler),this._zoomEndHandler=Q(this,this._zoomEndHandler),this._panningHandler=Q(this,this._panningHandler),this._panEndHandler=Q(this,this._panEndHandler),this._endTranslate=Q(this,this._endTranslate),this._timedResize=Q(this,this._timedResize),this._execResize=Q(this,this._execResize),this.resize=Q(this,this.resize),l.addOnWindowUnload(this,this.destroy)},_getAbsMid:function(i){return t.toAbsMid?t.toAbsMid(i):e.id.replace(/\/[^\/]*$/gi,"/")+i},_cleanUp:function(){var t=this.infoWindow;t&&(t._ootb&&t.destroy?t.destroy():t.unsetMap(this),delete this.infoWindow),X(this._tsTimeExtentChange_connect),this.removePlugin("./plugins/popupManager"),p.destroy(this.root),this.root=null},_addLayer:function(t,e,i){if(t.id){var n=t.id.match(t instanceof H?re:ae);n&&n[1]&&(n=Number(n[1]),n>=ee&&(ee=n+1))}var s=t.id||(t instanceof H?se:ne)+ee++;t.id=s,this._layers[s]=t;var a,r;if((e===this.layerIds||e===this.graphicsLayerIds)&&(a=this._layerSize,this._layerSize++),t._isRefLayer="top"===i,i=!w.isDefined(i)||0>i||i>e.length||"top"===i?e.length:i,0===a&&(this._firstLayerId=s),!t._isRefLayer)for(;(r=this.getLayer(e[i-1]))&&r._isRefLayer;)i--;e.splice(i,0,s);var o=Q(this,this._addLayerHandler),h=this,l=this._connects,d=function(){t.loaded?h._onLoadFix?(h._onLoadFix=!1,setTimeout(function(){o(t)},0)):o(t):(h["_"+s+"_addtoken_load"]=q(t,"onLoad",h,"_addLayerHandler"),h["_"+s+"_addtoken_err"]=q(t,"onError",h,function(i){o(t,i,e)}))};return this.loaded||0===a||t.loaded&&-1===K(this.graphicsLayerIds,s)?d():l.push(q(this,"onLoad",d)),t},_addLayerHandler:function(t,e,i){var n,s,a,r,o=this.id,h=t.id,l=K(t instanceof H?this.graphicsLayerIds:this.layerIds,h),d=l,_=!1,c=this._params;if(X(this["_"+h+"_addtoken_load"]),X(this["_"+h+"_addtoken_err"]),e)return delete this._layers[h],void(-1!==l&&(i.splice(l,1),this.onLayerAddResult(t,e)));if(-1===l&&(l=K(this._internalLayerIds,h),d=ce+l,_=!0),h===this._firstLayerId){if(s=t.spatialReference,a=this.extent&&this.extent.spatialReference,!a||a.equals(s)||!t.tileInfo&&t.url||(a=null),n=this.spatialReference=a||s,this.wrapAround180=this.wrapAround180&&n&&n._isWrappable()?!0:!1,t.tileInfo&&(this.__tileInfo?(r=this.__tileInfo.lods,this.__tileInfo=te({},t.tileInfo),this.__tileInfo.lods=r):(G(te({},t.tileInfo),c),this.__tileInfo=c.tileInfo)),this.wrapAround180){var p=this.__tileInfo,u=n._getInfo();(!p||Math.abs(u.origin[0]-p.origin.x)>u.dx)&&(this.wrapAround180=!1),this.wrapAround180&&p&&R._addFrameInfo(p,u)}if(c.units=t.units,r=this.__tileInfo&&this.__tileInfo.lods,r&&r.length){var f,g=c.minScale,m=c.maxScale,y=-1,x=-1,v=!1,L=!1;for(f=0;f<r.length;f++)g>0&&!v&&g>=r[f].scale&&(y=r[f].level,v=!0),m>0&&!L&&m>=r[f].scale&&(x=f>0?r[f-1].level:-1,L=!0);for(-1===c.minZoom&&(c.minZoom=0===g?r[0].level:y),-1===c.maxZoom&&(c.maxZoom=0===m?r[r.length-1].level:x),f=0;f<r.length;f++)c.minZoom===r[f].level&&(c.minScale=r[f].scale),c.maxZoom===r[f].level&&(c.maxScale=r[f].scale)}else c.minZoom=c.maxZoom=c.zoom=-1}if(t instanceof H){if(!this._gc){this._gc=new H._GraphicsContainer;var w=this._gc._setMap(this,this._layersDiv);w.id=o+"_gc"}var b=t._setMap(this,this._gc._surface);b.id=o+"_"+h,this._layerDivs[h]=b,this._reorderLayers(this.graphicsLayerIds)}else{var E=t._setMap(this,this._layersDiv,d,this.__LOD);E.id=o+"_"+h,this._layerDivs[h]=E,this._reorderLayers(this.layerIds),_||-1===t.declaredClass.indexOf("VETiledLayer")||this._onBingLayerAdd(t)}if(h===this._firstLayerId&&(this.graphics=new H({id:o+"_graphics",displayOnPan:c.displayGraphicsOnPan}),this._addLayer(this.graphics,this._internalLayerIds,ce)),t===this.graphics){var z,I,M=this._layers[this._firstLayerId],D=c.zoom,A=c.scale,C=c.center,W=M.initialExtent||M.fullExtent;if(this._firstLayerId=null,this.extent&&(this.extent=this._convertGeometry(this,this.extent)),!this.extent&&W&&(C&&(C=this._convertGeometry(W,C)),C&&(W=W.centerAt(C),C=null)),I=this.extent||W&&new S(W.toJson()),I&&(D>-1?I=this.__getExtentForLevel(D,null,I).extent:A>0&&(I=T.getExtentForScale(this,A,I))),!I)return void console.log("Map: "+this.invalidExtent);z=this._fixExtent(I,c.fitExtent),this.extent=z.extent,this.__LOD=z.lod,this.__setExtent(this.extent),this.loaded=!0,this.attr("data-loaded",""),this.infoWindow.setMap(this),this.onLoad(this)}_||(this.onLayerAdd(t),this.onLayerAddResult(t)),X(this[h+"_addLayerHandler_connect"])},_convertGeometry:function(t,e){var i=t&&t.spatialReference,n=e&&e.spatialReference;return i&&n&&!i.equals(n)&&(i._canProject(n)?i.isWebMercator()?e=P.geographicToWebMercator(e):4326===i.wkid&&(e=P.webMercatorToGeographic(e,!0)):(console.log("Map: "+w.substitute({geometry:n.wkid||n.wkt,map:i.wkid||i.wkt},this.invalidGeometry)),e=null)),e},_reorderLayers:function(t){var e=this.onLayerReorder,i=p.place,n=this._layerDivs,s=this._layers,a=this._gc?this._gc._surface.getEventSource():null;if(t===this.graphicsLayerIds)o.forEach(t,function(t,r){var o=n[t];o&&(i(o.getEventSource(),a,r),e(s[t],r))});else{var r,h=this.graphics,l=h?h.id:null,d=this._layersDiv;o.forEach(t,function(t,a){r=n[t],t!==l&&r&&(i(r,d,a),e(s[t],a))}),this._mapImageLyr&&this._placeMapImageLyr(),a&&(a=g("ie")<9?a.parentNode:a,i(a,a.parentNode,t.length))}this.onLayersReordered([].concat(t))},_zoomStartHandler:function(){this.__zoomStart(this._zoomAnimDiv.startingExtent,this._zoomAnimDiv.anchor)},_zoomingHandler:function(t){var e=parseFloat(t.left),i=parseFloat(t.top),n=new S(e,i-parseFloat(t.height),e+parseFloat(t.width),i,this.spatialReference),s=this.extent.getWidth()/n.getWidth();this.__zoom(n,s,this._zoomAnimDiv.anchor)},_zoomEndHandler:function(){var t=this._zoomAnimDiv,e=t.extent,i=this.extent.getWidth()/e.getWidth(),n=t.anchor,s=t.newLod,a=t.levelChange;t.extent=t.anchor=t.levelChange=t.startingExtent=t.newLod=this._delta=this._zoomAnim=null,this.__zoomEnd(e,i,n,s,a)},_panningHandler:function(t){if(isNaN(parseFloat(t.left))||isNaN(parseFloat(t.top))){var e=Math.round,i=this._panAnim.node;t.left=-1*(this._delta.x-e(this.width/2))+"px",t.top=-1*(this._delta.y-e(this.height/2))+"px",f.set(i,"left",t.left),f.set(i,"top",t.top)}var n=new A(parseFloat(t.left),parseFloat(t.top)),s=this.toMap(n);this.onPan(this.extent.offset(this.extent.xmin-s.x,this.extent.ymax-s.y),n)},_panEndHandler:function(t){this.__panning=!1;var e=Math.round,i=new A(-e(parseFloat(t.style.left)),-e(parseFloat(t.style.top))),n=i.x,s=i.y,a=this.__visibleRect,r=this.__visibleDelta;a.x+=-n,a.y+=-s,r.x+=-n,r.y+=-s,Y(this._zoomAnimDiv,{left:"0px",top:"0px"});var o=this.extent,h=this._ratioW,l=this._ratioH;o=new S(o.xmin+n/h,o.ymin-s/l,o.xmax+n/h,o.ymax-s/l,this.spatialReference),i.setX(-i.x),i.setY(-i.y),this._delta=this._panAnim=null,this._updateExtent(o),this.onPanEnd(o,i),this._fireExtChg([o,i,!1,this.__LOD])},_fixExtent:function(t,e){for(var i=this._reshapeExtent(t),n=1+de;e===!0&&(i.extent.getWidth()<t.getWidth()||i.extent.getHeight()<t.getHeight())&&i.lod.level>0&&_e>=n;)i=this._reshapeExtent(t.expand(n)),n+=de;return i},_getFrameWidth:function(){var t=-1,e=this.spatialReference._getInfo();if(this.__LOD){var i=this.__LOD._frameInfo;i&&(t=i[3])}else e&&(t=Math.round(2*e.valid[1]/(this.extent.getWidth()/this.width)));return t},_fixAspectRatio:function(t){var e=t.getWidth(),i=t.getHeight(),n=e/i,s=this.width/this.height,a=0,r=0;return this.width>this.height?e>i?s>n?a=i*s-e:r=e/s-i:a=i*s-e:this.width<this.height?i>e&&s>n?a=i*s-e:r=e/s-i:i>e?a=i-e:e>i&&(r=e/s-i),a&&(t.xmin-=a/2,t.xmax+=a/2),r&&(t.ymin-=r/2,t.ymax+=r/2),t},_reshapeExtent:function(t){return t=this._fixAspectRatio(t),this._getAdjustedExtent(t)},_getAdjustedExtent:function(t){if(this.__tileInfo)return R.getCandidateTileInfo(this,this.__tileInfo,t);var e=T.getScale(this,t),i=this.getMinScale(),n=this.getMaxScale(),s=!i||i>=e,a=!n||e>=n;return s?a||(t=T.getExtentForScale(this,n,t)):t=T.getExtentForScale(this,i,t),{extent:t}},_onBingLayerAdd:function(t){this["__"+t.id+"_vis_connect"]=s.connect(t,"onVisibilityChange",this,"_toggleBingLogo"),this._toggleBingLogo(t.visible)},_onBingLayerRemove:function(t){s.disconnect(this["__"+t.id+"_vis_connect"]),delete this["__"+t.id+"_vis_connect"];var e=this.layerIds,i=o.some(e,function(e){return t=this._layers[e],t&&t.visible&&-1!==t.declaredClass.indexOf("VETiledLayer")},this);this._toggleBingLogo(i)},_toggleBingLogo:function(e){if(e&&!this._bingLogo){var i={left:this._mapParams&&this._mapParams.nav?"25px":""};6===g("ie")&&(i.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true', sizingMethod='crop', src='"+t.toUrl("./images/map/bing-logo-lg.png")+"')");var n=this._bingLogo=p.create("div",{style:i},this.root);c.add(n,"bingLogo-lg")}else!e&&this._bingLogo&&(p.destroy(this._bingLogo),delete this._bingLogo)},__panStart:function(t,e){var i=this._zoomAnim,n=this._panAnim;if(i&&i._active)i.stop(),i._fire("onEnd",[i.node]);else if(n&&n._active){n.stop(),this._panAnim=null;var s=n.curve.getValue(n._getStep()),a=Math.round(parseFloat(s.left)),r=Math.round(parseFloat(s.top)),o=this.navigationManager._dragOrigin;return this.__pan(a,r),void(o&&(o.x-=a,o.y-=r))}this.__panning=!0,this.onPanStart(this.extent,new A(t,e))},__pan:function(t,e){var i=this.extent,n=this._ratioW,s=this._ratioH;this.onPan(new S(i.xmin-t/n,i.ymin+e/s,i.xmax-t/n,i.ymax+e/s,this.spatialReference),new A(t,e))},__panEnd:function(t,e){var i=this.__visibleRect,n=this.__visibleDelta;i.x+=t,i.y+=e,n.x+=t,n.y+=e;var s=new A(t,e),a=this.extent,r=this._ratioW,o=this._ratioH;a=new S(a.xmin-t/r,a.ymin+e/o,a.xmax-t/r,a.ymax+e/o,this.spatialReference),this.__panning=!1,this._updateExtent(a),this.onPanEnd(a,s),this._fireExtChg([a,s,!1,this.__LOD])},__zoomStart:function(t,e){this.__zooming=!0,this.onZoomStart(t,1,e,this.__LOD?this.__LOD.level:null)},__zoom:function(t,e,i){this.onZoom(t,e,i)},__zoomEnd:function(t,e,i,n,s){Y(this._layersDiv,{left:"0px",top:"0px"}),this._delta=new A(0,0),this.__visibleRect.x=this.__visibleRect.y=0,t=new S(t),this.__LOD=n,this._ratioW=this.width/t.getWidth(),this._ratioH=this.height/t.getHeight();var a=this._delta;this._delta=null,this.__zooming=!1,this._updateExtent(t,s),this.onZoomEnd(t,e,i,n?n.level:null),this._fireExtChg([t,a,s,n])},_extentUtil:function(t,e,i,n,s){var o,h,l,d,_,c,p,u,f,g,m,y,x,v=new a,L=this.width,b=this.height;t&&(o=t.numLevels,h=t.targetLevel,m=w.isDefined(h),l=t.factor,d=t.mapAnchor,_=t.screenAnchor,c=t.mapCenter,y=t.levelOrFactor,p=t.targetScale,u=w.isDefined(p)&&p>0),e&&(f=e.dx,g=e.dy,c=e.mapCenter),r.isArray(c)&&(c=new D(c));var E,z,R,I,M=this._panAnim,C=this._stopAnim(),W=C?C.divExtent:this.extent,O=this.__tileInfo,P=this._params;if(!this.loaded)return i?(W&&(i=this._convertGeometry(W,i)),i&&(this.extent=i,P.zoom=P.scale=-1,P.center=null)):(c||m||u)&&(c&&(W?(c=this._convertGeometry(W,c),c&&(this.extent=W.centerAt(c),P.center=null)):P.center=c),m&&h>-1?(P.zoom=h,P.scale=-1):u&&(P.scale=p,P.zoom=-1)),v.resolve(),v;if(c&&(c=this._convertGeometry(this,c),!c))return v.reject(),v;if(d&&(d=this._convertGeometry(this,d),!d))return v.reject(),v;if(i&&(i=this._convertGeometry(this,i),!i))return v.reject(),v;if(M&&d&&_&&(d=$(this.extent,L,b,_)),C&&d&&_&&(d=$(C.divExtent,L,b,_)),m)if(O){var H=this.getMinZoom(),U=this.getMaxZoom();H>h?h=H:h>U&&(h=U),o=h-(C?C.level:this.getLevel())}else o=h>0?-1:1,x=y?h:null;if(i);else if(w.isDefined(o)){var F;if(O){var k=C?C.level:this.getLevel();F=this.__getExtentForLevel(k+o,c,W).extent}else{var j=C?C.end:this.extent;F=j.expand(x||(o>0?.5*o:2*-o)),x&&c&&(F=F.centerAt(c))}if(F)if(c)i=F;else{var Z=d||W.getCenter(),N=W.ymax-(F.getHeight()-W.getHeight())*(Z.y-W.ymax)/W.getHeight();E=W.xmin-(F.getWidth()-W.getWidth())*(Z.x-W.xmin)/W.getWidth(),i=new S(E,N-F.getHeight(),E+F.getWidth(),N,this.spatialReference)}}else if(u)i=T.getExtentForScale(this,p,W);else if(w.isDefined(l))i=W.expand(l);else if(f||g)if(C){var B=C.end,G=B.getCenter(),V=J(B,L,b,G);V.x+=f,V.y+=g,V=$(B,L,b,V),i=B.offset(V.x-G.x,V.y-G.y)}else{var q=new A(L/2+f,b/2+g),X=$(W,L,b,q);R=W.getWidth(),I=W.getHeight(),E=X.x-R/2,z=X.y-I/2,i=new S(E,z,E+R,z+I,this.spatialReference)}if(!i)if(c){var Q=C?C.end:W;R=Q.getWidth(),I=Q.getHeight(),E=c.x-R/2,z=c.y-I/2,i=new S(E,z,E+R,z+I,this.spatialReference)}else C&&(i=C.end);return i?(this._extentDfd&&-1===this._extentDfd.fired&&(this._extentDfd.then(null,oe),this._extentDfd.reject()),this._extentDfd=v,this.__setExtent(i,null,_,n,C,s)):v.reject(),v},__setExtent:function(t,e,i,n,s,a){try{if(this._firstLayerId)return void(this.extent=t);var r=!0,o=this.spatialReference,h=s?s.divExtent:this.extent,l=this._fixExtent(t,n||!1);t=l.extent;var d=t.getWidth(),_=t.getHeight(),c=Math.round;if(h){var p=c(h.getWidth()*he),u=c(d*he),f=c(h.getHeight()*he),m=c(_*he);r=p!==u||f!==m}var y,x,v,L,w=s&&s.rect,b=s&&s.divExtent;if(ie.zoomDuration&&r&&h){b=b||new S(h),w=w||{left:h.xmin,top:h.ymax,width:h.getWidth(),height:h.getHeight()},x={left:t.xmin,top:t.ymax,width:d,height:_},v=w.width/x.width,L=w.height/x.height;var z=new D(t.xmin,t.ymax,o),R=new D(t.xmin,t.ymin,o),I=new D(this.extent.xmin,this.extent.ymax,o),M=new D(this.extent.xmin,this.extent.ymin,o);y=W.getLineIntersection(I,z,M,R,o),y||s||(r=!1)}this._ratioW=this.width/d,this._ratioH=this.height/_;var T=this._zoomAnimDiv;if(r)if(Y(this._layersDiv,{left:"0px",top:"0px"}),e=new A(0,0),this.__visibleRect.x=this.__visibleRect.y=0,w&&x){this._delta=e,T.id="_zAD",T.startingExtent=b,T.extent=t,T.levelChange=r,T.newLod=l.lod,T.anchor=i?i:!y&&s?s.anchor:J(this.extent,this.width,this.height,y);var O=this.extent.getWidth()/t.getWidth(),P=1>O?1/O:O,H=P>1024;g("chrome")&&H?(this.__zoomStart(b,T.anchor),this.__zoom(b,1,T.anchor),this._fireOnScale(1,T.anchor,!0),this.__zoomEnd(t,O,T.anchor,l.lod,r)):(this._zoomAnim=E.resize({node:T,start:w,end:x,duration:ie.zoomDuration,rate:ie.zoomRate,beforeBegin:s?null:this._zoomStartHandler,onAnimate:this._zoomingHandler,onEnd:this._zoomEndHandler}).play(),this._fireOnScale(O,T.anchor,a))}else this._updateExtent(t,r),this._fireExtChg([this.extent,e,r,this.__LOD=l.lod]);else if(!this.__panning)if(this.loaded===!1||a)this._updateExtent(t,r),this._fireExtChg([this.extent,e,r,this.__LOD=l.lod]);else{this.__panning=!0,w=new C(0,0,this.width,this.height,this.spatialReference).getCenter(),w.x=c(w.x),w.y=c(w.y);var U=this._delta=this.toScreen(t.getCenter()),F=Math.abs(w.x-U.x),k=Math.abs(w.y-U.y);this.optimizePanAnimation&&(F>2*this.width||k>2*this.height)?(this.__panStart(0,0),this.__pan(0,0),this.__visibleRect.x=this.__visibleRect.y=this.__visibleDelta.x=this.__visibleDelta.y=0,this.__panning=!1,this._delta=null,this._updateExtent(t,!1),this.onPanEnd(this.extent,new A(0,0)),this._fireExtChg([this.extent,new A(0,0),!0,this.__LOD])):(this.onPanStart(this.extent,new A(0,0)),this._panAnim=E.slideTo({node:T,left:w.x-U.x,top:w.y-U.y,duration:ie.panDuration,rate:ie.panRate,onAnimate:this._panningHandler,onEnd:this._panEndHandler}),this._panAnim.play())}}catch(j){console.log(j.stack),console.error(j)}},_fireOnScale:function(t,e,i){if("css-transforms"===this.navigationMode){var n=this.__visibleDelta;this.onScale(y.scaleAt(t,{x:-1*(this.width/2-(e.x-n.x)),y:-1*(this.height/2-(e.y-n.y))}),i)}},_stopAnim:function(){var t=this._zoomAnim,e=this._panAnim;if(t&&t._active){t.stop();var i=t.curve.getValue(t._getStep()),n=parseFloat(i.left),s=parseFloat(i.top),a=t.node;return{anchor:a.anchor,start:a.startingExtent,end:a.extent,level:a.newLod&&a.newLod.level,rect:i,divExtent:new S(n,s-parseFloat(i.height),n+parseFloat(i.width),s,this.spatialReference)}}e&&e._active&&(e.stop(),e._fire("onEnd",[e.node]))},__getExtentForLevel:function(t,e,i){var n=this.__tileInfo,s=n&&n.lods;if(t=w.isDefined(t)?t:0,i=i||this.extent,e=e||i&&i.getCenter(),s){if(!e)return void console.log("Map: "+this.invalidExtent);var a=this.getMinZoom(),r=this.getMaxZoom();t>r&&(t=r),a>t&&(t=a);var o=s[t],h=this.width*o.resolution/2,l=this.height*o.resolution/2;return{extent:new S(e.x-h,e.y-l,e.x+h,e.y+l,e.spatialReference),lod:o}}return i?(t=!t||1>t?1:t,{extent:i.expand(t).centerAt(e)}):void console.log("Map: "+this.invalidExtent)},_jobs:0,_incr:function(){1===++this._jobs&&(this.updating=!0,this.attr("data-updating",""),this.onUpdateStart())},_decr:function(){var t=--this._jobs;t?0>t&&(this._jobs=0):(this.updating=!1,this.attr("data-updating"),this.onUpdateEnd())},_fireEvent:function(t,e){this[t]&&this[t].apply(this,e)},_updateExtent:function(t,e){this.extent=t,e&&this._setClipRect();var i=this.spatialReference;i&&(i.isWebMercator()?this.geographicExtent=P.webMercatorToGeographic(this._getAvailExtent(),!0):4326===i.wkid&&(this.geographicExtent=new S(this._getAvailExtent().toJson())))},_fireExtChg:function(t){this.attr("data-zoom",this.getZoom()),this.attr("data-scale",this.getScale()),this._fireEvent("onExtentChange",t);var e=this._extentDfd;e&&(delete this._extentDfd,e.resolve())},attr:function(t,e){var i=this.container;return i&&(null==e?i.removeAttribute(t):i.setAttribute(t,e)),this},onUpdateStart:function(){},onUpdateEnd:function(){},onLoad:function(){this._setClipRect()},onBeforeUnload:function(){},onUnload:function(){},onExtentChange:function(){},onTimeExtentChange:function(){},onLayerAdd:function(){},onLayerAddResult:function(){},onLayersAddResult:function(){},onLayerRemove:function(){},onLayersRemoved:function(){},onLayerReorder:function(){},onLayersReordered:function(){},onLayerSuspend:function(){},onLayerResume:function(){},onPanStart:function(){},onPan:function(){},onPanEnd:function(){},onScale:function(){},onZoomStart:function(){},onZoom:function(){},onZoomEnd:function(){},onResize:function(){this._setClipRect()},onReposition:function(){},destroy:function(){this._destroyed||(this.onBeforeUnload(this),this.removeAllLayers(),this._cleanUp(),clearTimeout(this._resizeT),this._gc&&this._gc._cleanUp(),this._destroyed=!0,this.onUnload(this))},setCursor:function(t){Y(this.__container,"cursor",this.cursor=t)},setMapCursor:function(t){this.setCursor(this._cursor=t)},resetMapCursor:function(){this.setCursor(this._cursor)},setInfoWindow:function(t){var e=this.infoWindow;e&&e.unsetMap(this),this.infoWindow=t,this.loaded&&t&&t.setMap(this)},setInfoWindowOnClick:function(t){var e=this._params;e.showInfoWindowOnClick=t,this.popupManager&&this.popupManager.set("enabled",t)},getInfoWindowAnchor:function(t){return this.infoWindow&&this.infoWindow._getAnchor&&this.infoWindow._getAnchor(t)||"upperright"},toScreen:function(t,e){return J(this.extent,this.width,this.height,t,e)},toMap:function(t){return $(this.extent,this.width,this.height,t)},addLayer:function(t,e){return t&&!this.getLayer(t.id)&&this._addLayer(t,t instanceof H?this.graphicsLayerIds:this.layerIds,e),t},addLayers:function(t){var e,i,n=[],a=t.length,r=t.length,h=function(i,r){-1!==o.indexOf(t,i)&&(a--,n.push({layer:i,success:!r,error:r}),a||(s.disconnect(e),this.onLayersAddResult(n)))};for(e=s.connect(this,"onLayerAddResult",h),i=0;r>i;i++)this.addLayer(t[i]);return this},removeLayer:function(t,e){var i=t.id,n=t instanceof H?this.graphicsLayerIds:this.layerIds,s=K(n,i);s>=0&&(n.splice(s,1),t instanceof H?(X(this["_gl_"+t.id+"_click_connect"]),t.loaded&&t._unsetMap(this,this._gc._surface)):t.loaded&&(t._unsetMap(this,this._layersDiv),-1!==t.declaredClass.indexOf("VETiledLayer")&&this._onBingLayerRemove(t)),delete this._layers[i],delete this._layerDivs[i],e||this._reorderLayers(n),this.onLayerRemove(t))},removeAllLayers:function(){var t,e=this.layerIds;for(t=e.length-1;t>=0;t--)this.removeLayer(this._layers[e[t]],1);for(e=this.graphicsLayerIds,t=e.length-1;t>=0;t--)this.removeLayer(this._layers[e[t]],1);this.onLayersRemoved()},reorderLayer:function(t,e){r.isString(t)&&(i.deprecated(this.declaredClass+": Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",null,"v2.0"),t=this.getLayer(t));var n,s=t.id,a=t instanceof H?this.graphicsLayerIds:this.layerIds;0>e?e=0:e>=a.length&&(e=a.length-1),n=K(a,s),-1!==n&&n!==e&&(a.splice(n,1),a.splice(e,0,s),this._reorderLayers(a))},getLayer:function(t){return this._layers[t]},setExtent:function(t,e){t=new S(t.toJson());var i,n=t.getWidth(),s=t.getHeight();return i=0===n&&0===s?this.centerAt(new D({x:t.xmin,y:t.ymin,spatialReference:t.spatialReference&&t.spatialReference.toJson()})):this._extentUtil(null,null,t,e)},centerAt:function(t){return this._extentUtil(null,{mapCenter:t})},centerAndZoom:function(t,e){return this._extentUtil({targetLevel:e,mapCenter:t,levelOrFactor:!0})},getScale:function(){return this.__LOD?this.__LOD.scale:T.getScale(this)},getResolution:function(){return this.__LOD?this.__LOD.resolution:this.extent?this.extent.getWidth()/this.width:0},getResolutionInMeters:function(){return this.getResolution()*T.getUnitValueForSR(this.spatialReference)},getMinScale:function(){return this._params.minScale},getMaxScale:function(){return this._params.maxScale},setScale:function(t){return this._extentUtil({targetScale:t})},getLayersVisibleAtScale:function(t){var e=[];return t=t||this.getScale(),t&&o.forEach(this.layerIds.concat(this.graphicsLayerIds),function(i){i=this.getLayer(i),i.isVisibleAtScale(t)&&e.push(i)},this),e},getNumLevels:function(){var t=this.getMinZoom(),e=this.getMaxZoom();return t===e&&0>t?0:e-t+1},getLevel:function(){return this.__LOD?this.__LOD.level:-1},setLevel:function(t){return t>-1?this._extentUtil({targetLevel:t}):void 0},getZoom:function(){return this.getLevel()},setZoom:function(t){return this.setLevel(t)},getMinZoom:function(){return this._params.minZoom},getMaxZoom:function(){return this._params.maxZoom},setBasemap:function(t){var e,i="Map.setBasemap: ";if(r.isObject(t)?(e=t,t=e.title):e=L&&L[t],e){this._basemapDfd&&-1===this._basemapDfd.fired&&this._basemapDfd.cancel();var n=[],h=[],l=0;if(o.forEach(e.baseMapLayers||e.layers,function(e){var s,a,r={id:e.id,displayLevels:e.displayLevels,opacity:w.isDefined(e.opacity)?e.opacity:null,visible:w.isDefined(e.visibility)?e.visibility:null};if(e.type)switch(e.type){case"OpenStreetMap":s=new Z(r);break;case"VectorTile":a=I._ensureProperProtocolForAGOResource(e.url),s=new N(a,r);break;default:console.log(i+w.substitute({basemapName:t,type:e.type},this.unknownLayerType))}else a=e.url,"https:"!==window.location.protocol||-1===a.search(/^http\:\/\/server\.arcgisonline\.com/i)&&-1===a.search(/^http\:\/\/services\.arcgisonline\.com/i)&&-1===a.search(/^http\:\/\/.+\.arcgis\.com/i)||(a=a.replace(/http:/i,"https:")),s=new k(a,r);s&&(n.push(s),h.push(e),e.isReference||l++)},this),!n.length||!l)return void console.log(i+w.substitute({basemapName:t},this.invalidBasemap));var d={basemapName:t,infos:h,layers:n};if(!this.loaded)return void this._basemapLoaded(d);var _=this,c=new a(z._dfdCanceller),p=function(){c._pendingLayers--;var t=o.indexOf(d.layers,this);if(t>-1){var e=c._layerEvents[t];e&&(s.disconnect(e[0]),s.disconnect(e[1]))}c._pendingLayers<=0&&(delete c._layerEvents,delete _._basemapDfd,c.fired<0&&c.callback(d))};this._basemapDfd=c,c._pendingLayers=0,c._layerEvents={},o.forEach(n,function(t,e){t&&(c._pendingLayers++,t.loaded?p(t):c._layerEvents[e]=[s.connect(t,"onLoad",t,p),s.connect(t,"onError",t,p)])}),c.addCallback(Q(this,this._basemapLoaded))}else{var u,f=[];for(u in L)f.push(u);console.log(i+w.substitute({basemapName:t,list:f.join(",")},this.unknownBasemap))}},_basemapLoaded:function(t){var e,i=t.layers,n=t.infos,s=0,a=!0;this.loaded&&(o.forEach(i,function(t,e){t.loaded&&(n[e].isReference||s++)}),a=s),a&&(this.basemapLayerIds&&(e={basemapName:this._basemap,infos:L&&L[this._basemap]&&L[this._basemap].baseMapLayers},e.basemapName||(o.forEach(this.basemapLayerIds,function(t){var i=this.getLayer(t);return i instanceof Z?(e.basemapName="osm",e.infos=L&&L.osm&&L.osm.baseMapLayers,!1):void 0},this),e.basemapName||(e=null))),this._removeBasemap(),this._basemap=t.basemapName,this.basemapLayerIds=this._addBasemap(i,n),this.attr("data-basemap",this.getBasemap()),this.emit("basemap-change",{current:t,previous:e}))},_addBasemap:function(t,e){var i=[],n=[],s=0;return o.forEach(t,function(t,a){e[a].isReference?i.push(t):(this.addLayer(t,s++),n.push(t.id))},this),i.length&&o.forEach(i,function(t){t.attr("data-reference",!0),this.addLayer(t,"top"),n.push(t.id)},this),n},_removeBasemap:function(){var t,e=this.basemapLayerIds;e&&e.length&&o.forEach(e,function(e){t=this.getLayer(e),t&&this.removeLayer(t)},this)},getBasemap:function(){return this._basemap||""},translate:function(t,e){if(t=t||0,e=e||0,!this._txTimer){this._tx=this._ty=0;var i=this.toScreen(this.extent.getCenter());this.__panStart(i.x,i.y)}this._tx+=t,this._ty+=e,this.__pan(this._tx,this._ty),clearTimeout(this._txTimer),this._txTimer=setTimeout(this._endTranslate,150)},_endTranslate:function(){clearTimeout(this._txTimer),this._txTimer=null;var t=this._tx,e=this._ty;this._tx=this._ty=0,this.__panEnd(t,e)},setTimeExtent:function(t){this.timeExtent=t;var e=t?new t.constructor(t.toJson()):null;this.onTimeExtentChange(e)},setTimeSlider:function(t){this.timeSlider&&(X(this._tsTimeExtentChange_connect),this._tsTimeExtentChange_connect=null,this.timeSlider=null),t&&(this.timeSlider=t,this.setTimeExtent(t.getCurrentTimeExtent()),this._tsTimeExtentChange_connect=q(t,"onTimeExtentChange",this,"setTimeExtent"))},setVisibility:function(t){if(this.visible!==t){if(this.visible=t,t||(this._display=this.container.style.display),this.container.style.display=t?this._display:"none",this.autoResize){var e=t?"resume":"pause";this._rszSignal[e](),this._oriSignal[e]()}t&&this.resize()}return this},resize:function(t){clearTimeout(this._resizeT),this._destroyed||(t===!0?this._execResize():this._resizeT=setTimeout(this._execResize,this.resizeDelay))},_timedResize:function(){this._resizeT||this._execResize()},_execResize:function(){clearTimeout(this._resizeT),this._resizeT=null,this.reposition(),this._resize(),this.autoResize&&this._startResizeTimer()},_resize:function(){var t=this.width,e=this.height,i=f.get(this.container,"display"),n=u.getContentBox(this.container);if(!("none"===i||n.w<=0||n.h<=0||t===n.w&&e===n.h)){var s=this._zoomAnim||this._panAnim;s&&(s.stop(),s._fire("onEnd",[s.node])),Y(this.root,{width:(this.width=n.w)+"px",height:(this.height=n.h)+"px"});var a=this.width,r=this.height;this.attribution&&this.attribution.domNode&&f.set(this.attribution.domNode,"maxWidth",Math.floor(a*this._mapParams.attributionWidth)+"px"),this.__visibleRect.update(this.__visibleRect.x,this.__visibleRect.y,a,r),this.__visibleDelta.update(this.__visibleDelta.x,this.__visibleDelta.y,a,r);var o=new C(this.extent),h=new C(o.x,o.y,o.width*(a/t),o.height*(r/e),this.spatialReference).getExtent();this.onResize(h,a,r),this._extentUtil(null,null,h,null,!0)
}},reposition:function(){var t=this.position,e=t.x,i=t.y;this._reposition(),t=this.position,(e!==t.x||i!==t.y)&&this.onReposition(t.x,t.y)},_reposition:function(){var t=u.position(this.container,!0),e=u.getPadBorderExtents(this.container);this.position.update(t.x+e.l,t.y+e.t)},_setClipRect:function(){delete this._clip;var t=g("ie")<=7||void 0===g("ie")&&g("trident")>=7?"rect(auto,auto,auto,auto)":"auto";if(this.wrapAround180){var e=this.width,i=this.height,n=this._getFrameWidth(),s=e-n;if(s>0){var a=s/2;t="rect(0px,"+(a+n)+"px,"+i+"px,"+a+"px)";var r=this.extent.getWidth(),o=r*(n/e);this._clip=[(r-o)/2,o]}}Y(this.__container,"clip",t)},_getAvailExtent:function(){var t=this.extent,e=this._clip;if(e){if(!t._clip){var i=new C(t);i.width=e[1],i.x=i.x+e[0],t._clip=i.getExtent()}return t._clip}return t},_fixedPan:function(t,e){return this._extentUtil(null,{dx:t,dy:e})},panUp:function(){return this._fixedPan(0,this.height*-le)},panUpperRight:function(){return this._fixedPan(this.width*le,this.height*-le)},panRight:function(){return this._fixedPan(this.width*le,0)},panLowerRight:function(){return this._fixedPan(this.width*le,this.height*le)},panDown:function(){return this._fixedPan(0,this.height*le)},panLowerLeft:function(){return this._fixedPan(this.width*-le,this.height*le)},panLeft:function(){return this._fixedPan(this.width*-le,0)},panUpperLeft:function(){return this._fixedPan(this.width*-le,this.height*-le)},enableSnapping:function(e){if(e=e||{},"esri.SnappingManager"===e.declaredClass)this.snappingManager=e;else{var i=["./SnappingManager"],n=ee++,s=this;this._rids&&this._rids.push(n),t(i,function(t){var i=s._rids?o.indexOf(s._rids,n):-1;-1!==i&&(s._rids.splice(i,1),s.snappingManager=new t(r.mixin({map:s},e)))})}return this.snappingManager},disableSnapping:function(){this.snappingManager&&this.snappingManager.destroy(),this.snappingManager=null},_createLabelLayer:function(){function t(){e._labels.removeAllFeatureLayers(),o.forEach(e.graphicsLayerIds,function(t){var i=e.getLayer(t);"function"==typeof i.applyEdits&&e._labels.addFeatureLayer(i)})}var e=this;!this._labels&&V&&this.loaded&&(this._labels=new V({id:"_internal_LabelLayer"}),this._labels._setMap(this,this._gc._surface),t(),this.on("layers-reordered",t))},_getMapImageLyr:function(){return this.loaded&&!this._mapImageLyr&&(this._mapImageLyr=new j,this._mapImageLyr._setMap(this,this._layersDiv),this._placeMapImageLyr()),this._mapImageLyr},_placeMapImageLyr:function(){for(var t,e,i=this.layerIds,n=this._layerDivs,s=!1,a=i.length-1;a>=0;a--){var r=i[a];if(e=this.getLayer(r),t=n[r],e&&t&&!e._isReference){p.place(this._mapImageLyr._div,t,"after"),s=!0;break}}s||p.place(this._mapImageLyr._div,this._layersDiv,"first")}});return g("extend-esri")&&(x._CoreMap=ue),ue});