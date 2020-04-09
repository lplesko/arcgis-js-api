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

define(["require","exports","../../shaders/hlShaderSnippets","../../../../../webgl/BufferObject","../../../../../webgl/ShaderVariations","../../../../../webgl/Texture","../../../../../webgl/VertexArrayObject"],(function(e,i,t,o,r,s,h){var n=[void 0,void 0,void 0,1],a=[3,4],u=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],l=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];return function(){function e(){this._width=void 0,this._height=void 0,this._highlightOptions={fillColor:[.2,.6,.9,.75],outlineColor:[.2,.6,.9,.9],outlinePosition:0,outlineWidth:3.4,innerHaloWidth:2,outerHaloWidth:3.3},this._resources=null}return e.prototype.dispose=function(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources.shadeTex.dispose(),this._resources=null)},e.prototype.preBlur=function(e,i){e.bindTexture(i,a[0]),e.bindProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",u),e.bindVAO(this._resources.quadVAO),e.drawArrays(5,0,4),e.bindVAO()},e.prototype.finalBlur=function(e,i){e.bindTexture(i,a[0]),e.bindProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",l),e.bindVAO(this._resources.quadVAO),e.drawArrays(5,0,4),e.bindVAO()},e.prototype.renderHighlight=function(e,i){e.bindTexture(i,a[0]),e.bindTexture(this._resources.shadeTex,a[1]),e.bindProgram(this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.drawArrays(5,0,4),e.bindVAO()},e.prototype._initialize=function(e,i,u){this._width=i,this._height=u;var l=new o(e,34962,35044,new Int8Array([-128,-128,0,0,127,-128,255,0,-128,127,0,255,127,127,255,255]).buffer),d=new h(e,{a_position:0,a_texcoord:1},{geometry:[{name:"a_position",count:2,type:5120,offset:0,stride:4,normalized:!0},{name:"a_texcoord",count:2,type:5121,offset:2,stride:4,normalized:!0}]},{geometry:l}),g=new r("hl",["texturedVS","highlightFS"],[],t,e,{a_position:0,a_texcoord:1}).getProgram([]),c=new r("hl",["texturedVS","blurFS"],[],t,e,{a_position:0,a_texcoord:1}).getProgram([]);g.setUniform1i("u_texture",a[0]),g.setUniform1i("u_shade",a[1]),g.setUniform4fv("u_sigmas",n),c.setUniform1i("u_texture",a[0]),c.setUniform4fv("u_sigmas",n);var f=new s(e,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:256,height:1,samplingMode:9728});this._resources={quadGeometry:l,quadVAO:d,highlightProgram:g,blurProgram:c,shadeTex:f}},e.prototype.setHighlightOptions=function(e){if(this._highlightOptions=e,this._resources){var i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,t=e.outlinePosition-e.outlineWidth/2,o=e.outlinePosition+e.outlineWidth/2,r=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,s=Math.sqrt(Math.PI/2)*n[3],h=Math.abs(i)>s?Math.round(10*(Math.abs(i)-s))/10:0,a=Math.abs(r)>s?Math.round(10*(Math.abs(r)-s))/10:0;h&&!a?console.warn("The outer rim of the highlight is "+h+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!h&&a?console.warn("The inner rim of the highlight is "+a+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):h&&a&&console.warn("The highlight is "+Math.max(h,a)+"px away from the edge of the feature; consider reducing some width values.");for(var u,l=new Uint8Array(1024),d=[void 0,void 0,void 0,void 0],g=0;g<256;++g)(u=i+g/255*(r-i))<i?(l[4*g+0]=0,l[4*g+1]=0,l[4*g+2]=0,l[4*g+3]=0):u<t?c([0,0,0,0],e.outlineColor,(u-i)/(t-i)):u<o?(d[0]=e.outlineColor[0],d[1]=e.outlineColor[1],d[2]=e.outlineColor[2],d[3]=e.outlineColor[3]):u<r?c(e.outlineColor,e.fillColor,(u-o)/(r-o)):(l[4*g+0]=e.fillColor[0],l[4*g+1]=e.fillColor[1],l[4*g+2]=e.fillColor[2],l[4*g+3]=e.fillColor[3]),l[4*g+0]=255*d[0]*d[3],l[4*g+1]=255*d[1]*d[3],l[4*g+2]=255*d[2]*d[3],l[4*g+3]=255*d[3];this._resources.highlightProgram.setUniform2fv("u_minMaxDistance",[i,r]),this._resources.shadeTex.updateData(0,0,0,256,1,l)}function c(e,i,t){d[0]=(1-t)*e[0]+t*i[0],d[1]=(1-t)*e[1]+t*i[1],d[2]=(1-t)*e[2]+t*i[2],d[3]=(1-t)*e[3]+t*i[3]}},e.prototype.setup=function(e,i,t){this._resources?(this._width=i,this._height=t):(this._initialize(e,i,t),this.setHighlightOptions(this._highlightOptions))},e}()}));