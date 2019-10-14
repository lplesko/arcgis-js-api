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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../enums","../Utils","./WGLGeometryBrush","../../../../webgl/Texture","../../../../webgl/VertexArrayObject"],function(e,t,i,r,o,a,n,s){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._iconAttributeLocations={a_pos:0,a_vertexOffsetAndTex:1,a_id:2,a_color:3,a_outlineColor:4,a_sizeAndOutlineWidth:5},t._iconAttributeLocationsVV={a_pos:0,a_vertexOffsetAndTex:1,a_id:2,a_color:3,a_outlineColor:4,a_sizeAndOutlineWidth:5,a_vv:6},t._iconAttributeLocationsHeatmap={a_pos:0,a_vertexOffsetAndTex:1,a_id:2,a_color:3,a_outlineColor:4,a_sizeAndOutlineWidth:5,a_weight:6},t._iconVertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:24,normalized:!1,divisor:0},{name:"a_vertexOffsetAndTex",count:4,type:5120,offset:4,stride:24,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:8,stride:24,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:24,normalized:!0,divisor:0},{name:"a_outlineColor",count:4,type:5121,offset:16,stride:24,normalized:!0,divisor:0},{name:"a_sizeAndOutlineWidth",count:4,type:5121,offset:20,stride:24,normalized:!1,divisor:0}]},t._iconVertexAttributesWithVV={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:40,normalized:!1,divisor:0},{name:"a_vertexOffsetAndTex",count:4,type:5120,offset:4,stride:40,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:8,stride:40,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:40,normalized:!0,divisor:0},{name:"a_outlineColor",count:4,type:5121,offset:16,stride:40,normalized:!0,divisor:0},{name:"a_sizeAndOutlineWidth",count:4,type:5121,offset:20,stride:40,normalized:!1,divisor:0},{name:"a_vv",count:4,type:5126,offset:24,stride:40,normalized:!1,divisor:0}]},t._iconVertexAttributesWithHeatmap={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:28,normalized:!1,divisor:0},{name:"a_vertexOffsetAndTex",count:4,type:5120,offset:4,stride:28,normalized:!1,divisor:0},{name:"a_id",count:4,type:5121,offset:8,stride:28,normalized:!0,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:28,normalized:!0,divisor:0},{name:"a_outlineColor",count:4,type:5121,offset:16,stride:28,normalized:!0,divisor:0},{name:"a_sizeAndOutlineWidth",count:4,type:5121,offset:20,stride:28,normalized:!1,divisor:0},{name:"a_weight",count:1,type:5126,offset:24,stride:28,normalized:!1,divisor:0}]},t._spritesTextureSize=new Float32Array(2),t}return i(t,e),t.prototype.dispose=function(){},t.prototype.getGeometryType=function(){return r.WGLGeometryType.MARKER},t.prototype.drawGeometry=function(e,t,i,r){var o=e.context,a=e.painter,n=e.rendererInfo,s=e.drawPhase,u=i.indexCount,d=i.indexFrom,l=i.materialInfo,v=l.materialKeyInfo,f=v.heatmap,m=v.hasVV()?this._iconAttributeLocationsVV:this._iconAttributeLocations,p=a.materialManager.getProgram(l.materialKey,s,m);if(p){o.bindProgram(p);var _=this._getVAO(o,t,v.hasVV(),f);if(o.bindVAO(_),f){var c=this._getIntensityTexture(o,n.heatmapParameters);o.bindTexture(c,1),p.setUniform1i("u_texture",1),this._spritesTextureSize[0]=Math.round(n.heatmapParameters.radius),this._spritesTextureSize[1]=Math.round(n.heatmapParameters.radius)}else{var y=l.texBindingInfo[0],x=y.pageId;a.textureManager.bindSpritePage(o,x,y.unit),p.setUniform1i(y.semantic,y.unit);var h=a.textureManager.sprites;this._spritesTextureSize[0]=h.getWidth(x)/4,this._spritesTextureSize[1]=h.getHeight(x)/4}var z=n.vvMaterialParameters.vvRotationEnabled&&"geographic"===n.vvMaterialParameters.vvRotationType?a.extrudeMatrix:a.extrudeNoRotationMatrix;p.setUniformMatrix4fv("u_transformMatrix",t.tileTransform.transform),p.setUniformMatrix4fv("u_extrudeMatrix",z),p.setUniform2fv("u_normalized_origin",t.tileTransform.displayCoord),p.setUniform2fv("u_mosaicSize",this._spritesTextureSize),p.setUniform1f("u_opacity",1),v.vvSizeMinMaxValue&&p.setUniform4fv("u_vvSizeMinMaxValue",n.vvSizeMinMaxValue),v.vvSizeScaleStops&&p.setUniform1f("u_vvSizeScaleStopsValue",n.vvSizeScaleStopsValue),v.vvSizeFieldStops&&(p.setUniform1fv("u_vvSizeFieldStopsValues",n.vvSizeFieldStopsValues),p.setUniform1fv("u_vvSizeFieldStopsSizes",n.vvSizeFieldStopsSizes)),v.vvSizeUnitValue&&p.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",n.vvSizeUnitValueToPixelsRatio),v.vvColor&&(p.setUniform1fv("u_vvColorValues",n.vvColorValues),p.setUniform4fv("u_vvColors",n.vvColors)),v.vvOpacity&&(p.setUniform1fv("u_vvOpacityValues",n.vvOpacityValues),p.setUniform1fv("u_vvOpacities",n.vvOpacities)),v.vvRotation&&p.setUniform1f("u_vvRotationType","geographic"===n.vvMaterialParameters.vvRotationType?0:1),o.drawElements(4,u,5125,4*d),o.bindVAO(null)}},t.prototype._getVAO=function(e,t,i,r){if(t.iconGeometry.vao)return t.iconGeometry.vao;var a=t.iconGeometry.vertexBufferMap[o.C_VBO_GEOMETRY],n=t.iconGeometry.indexBuffer;return a&&n?(t.iconGeometry.vao=i?new s(e,this._iconAttributeLocationsVV,this._iconVertexAttributesWithVV,{geometry:a},n):r?new s(e,this._iconAttributeLocationsHeatmap,this._iconVertexAttributesWithHeatmap,{geometry:a},n):new s(e,this._iconAttributeLocations,this._iconVertexAttributes,{geometry:a},n),t.iconGeometry.vao):null},t.prototype._getIntensityTexture=function(e,t){if(t.intensityKernel&&!t.refreshIntensityKernel)return t.intensityKernel;t.intensityKernel&&(t.intensityKernel.dispose(),t.intensityKernel=null);for(var i=t.radius,r=t.kernelSize,o=t.blurRadius,a=i*i,s=[],u=-1;++u<r;)s[u]=Math.exp(-Math.pow(u-o,2)/(2*a))/(Math.sqrt(2*Math.PI)*(i/2));for(var d,l,v,f=[],m=0;m<r;m++)for(l=s[m],u=0;u<r;u++)v=m*r+u,d=s[u],f[4*v+0]=l*d,f[4*v+1]=0,f[4*v+2]=0,f[4*v+3]=1;var p=new n(e,{target:3553,pixelFormat:6408,internalFormat:e.capabilities.colorBufferFloat.RGBA32F,dataType:5126,samplingMode:e.capabilities.textureFloatLinear?9729:9728,wrapMode:33071,width:r,height:r},new Float32Array(f));return t.intensityKernel=p,t.refreshIntensityKernel=!1,p},t}(a.default);t.default=u});