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

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/Logger","../../../../../../core/screenUtils","../../../../../../core/libs/gl-matrix/mat2d","../../../../../../core/libs/gl-matrix/vec2","../../color","../../definitions","../../enums","../../number","../../WGLDisplayRecord","./WGLMeshTemplate"],(function(t,e,r,i,o,s,h,p,n,u,a,l,f){Object.defineProperty(e,"__esModule",{value:!0});var _=i.getLogger("esri.views.2d.engine.webgl.WGLMeshTemplate"),d=function(t){function e(e,r,i,o,p,n,l,f,d,m,c){(l>255||f>255)&&(_.error("mapview-oversized-resource","Marker size was clamped to the maximum allowed value of 200x200 pixels"),l>f?(f*=255/l,l=255):(l*=255/f,f=255));var y=t.call(this)||this;y.geometryType=u.WGLGeometryType.MARKER;var g=h.create(),x=s.create(),w=c.sdf?.5:1;if(s.translate(x,x,new Float32Array([w*i,w*-o])),p){s.rotate(x,x,3.14159265359/180*p)}y._materialStore=e,y.vvFlags=r,y._materialId=e.createSpriteMaterial(c,y.geometryType,r),y._fillColor=n,y._outlineColor=d,y._sizeOutlineWidth=a.i8888to32(l,f,m,0);var v=Math.round(c.rect.x/4),M=Math.round(c.rect.y/4),V=v+Math.round(c.rect.width/4),L=M+Math.round(c.rect.height/4);return g.set([-.5*l,-.5*f]),h.transformMat2d(g,g,x),y._offsetUpperLeft=a.i1616to32(g[0],g[1]),y._texUpperLeft=a.i8888to32(v,M,0,0),g.set([.5*l,-.5*f]),h.transformMat2d(g,g,x),y._offsetUpperRight=a.i1616to32(g[0],g[1]),y._texUpperRight=a.i8888to32(V,M,0,0),g.set([-.5*l,.5*f]),h.transformMat2d(g,g,x),y._offsetBottomLeft=a.i1616to32(g[0],g[1]),y._texBottomLeft=a.i8888to32(v,L,0,0),g.set([.5*l,.5*f]),h.transformMat2d(g,g,x),y._offsetBottomRight=a.i1616to32(g[0],g[1]),y._texBottomRight=a.i8888to32(V,L,0,0),y.height=f,y.width=l,y.xOffset=i,y.yOffset=o,y}return r(e,t),e.fromPictureMarker=function(t,r,i,s,h){var p=Math.round(o.pt2px(i.width)),u=Math.round(o.pt2px(i.height)),a=n.PICTURE_FILL_COLOR;return new e(t,r,Math.round(o.pt2px(i.xoffset||0)),Math.round(o.pt2px(i.yoffset||0)),i.angle,a,p,u,0,0,s)},e.fromSimpleMarker=function(t,r,i,s,h){var n=p.premultiplyAlphaRGBA(i.color),u=Math.round(o.pt2px(i.size)),a=u,l=Math.round(o.pt2px(i.xoffset||0)),f=Math.round(o.pt2px(i.yoffset||0)),_=i.outline,d=0|(_&&_.color&&p.premultiplyAlphaRGBA(_.color)),m=0|(_&&_.width&&Math.round(o.pt2px(_.width)));return new e(t,r,l,f,i.angle,n,u,a,d,m,s)},e.prototype.writeMesh=function(t,e,r,i,o,s,h){var p=this._materialStore.get(this._materialId),n=e.indexVector,u=e.get("geometry"),a=new l(i,this.geometryType,this._materialId),f=this._getOffset(u,p);switch(t.push(a),a.vertexFrom=f,a.indexFrom=n.length,r){case"esriGeometryPoint":var d=o.geometry,m=d.x,c=d.y;return this._writeVertices(a,u,i,this._getPos(m,c),p,h),void this._writeIndices(a,n,f);case"esriGeometryPolyline":var y=o.geometry.paths;return void this._writeMany(a,n,u,f,i,y[0],p,h);case"esriGeometryPolygon":var g=o.centroid;if(g){m=g.x,c=g.y;this._writeVertices(a,u,i,this._getPos(m,c),p,h),this._writeIndices(a,n,f)}else _.error("Tried to render polygon geometries as markers, but found no centroid!");return;case"esriGeometryMultipoint":var x=o.geometry.points;return void this._writeMany(a,n,u,f,i,x,p,h);case"esriGeometryEnvelope":default:_.error("Unable to handle geometryType: "+r)}},e.prototype._getPos=function(t,e){return a.i1616to32(t,e)},e.prototype._writeMany=function(t,e,r,i,o,s,h,p){for(var n=0,u=0,a=0,l=0,f=s;l<f.length;l++){var _=f[l],d=_[0],m=_[1];this._writeVertices(t,r,o,this._getPos(d+n,m+u),h,p),this._writeIndices(t,e,i+a),n+=d,u+=m,a+=4}},e.prototype._getOffset=function(t,e){var r=e.materialKeyInfo.hasVV()?11:7;return t.length/r},e.prototype._writeVertices=function(t,e,r,i,o,s){e.push(i),e.push(this._offsetUpperLeft),e.push(this._texUpperLeft),e.push(r),e.push(this._fillColor),e.push(this._outlineColor),e.push(this._sizeOutlineWidth),this._writeVV(e,s,o),e.push(i),e.push(this._offsetUpperRight),e.push(this._texUpperRight),e.push(r),e.push(this._fillColor),e.push(this._outlineColor),e.push(this._sizeOutlineWidth),this._writeVV(e,s,o),e.push(i),e.push(this._offsetBottomLeft),e.push(this._texBottomLeft),e.push(r),e.push(this._fillColor),e.push(this._outlineColor),e.push(this._sizeOutlineWidth),this._writeVV(e,s,o),e.push(i),e.push(this._offsetBottomRight),e.push(this._texBottomRight),e.push(r),e.push(this._fillColor),e.push(this._outlineColor),e.push(this._sizeOutlineWidth),this._writeVV(e,s,o),t.vertexCount+=4},e.prototype._writeVV=function(t,e,r){r.materialKeyInfo.hasVV()&&(t.push(e[u.VVType.SIZE]),t.push(e[u.VVType.COLOR]),t.push(e[u.VVType.OPACITY]),t.push(e[u.VVType.ROTATION]))},e.prototype._writeIndices=function(t,e,r){var i=r;e.push(i+0),e.push(i+1),e.push(i+2),e.push(i+1),e.push(i+3),e.push(i+2),t.indexCount+=6},e}(f.default);e.default=d}));