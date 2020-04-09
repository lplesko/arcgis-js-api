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

define(["dojo/_base/Color","dojox/gfx","dojox/gfx/utils","../pictureUtil/Converter","../../../../supportClasses/images/ImageDataHolder","../supportClasses/WaffleDirections","../supportClasses/WaffleFlowStyles"],(function(e,s,a,i,o,n,r){var t=function(e){var s=e.w,a=e.h,i=e.W,o=e.H,n=e.num,r=e.preserveRectShape,t=e.numColumns,f=e.numRows;if(!n||1===n){var l=Math.min(i/s,o/a);return{w:s*l,h:a*l,numColumns:1,numRows:1}}var c=s/a;a*=c,o*=c;for(var u=Math.sqrt(i*o/n),h=Math.max(1,Math.round(i/u)),w=Math.max(1,Math.round(o/u)),m=0,p={bestSquareSide:0,numColumns:null,numRows:null},g=0,_=0,S=-100;S<101;S++)for(var C=-100;C<101;C++){var R=h+S,v=w+C;if(!(R<1||v<1||(r?R*v!==n:R*v<n))){var d=Math.min(i/R,o/v);d>m&&(m=d,g=R,_=v),(f||t)&&d>p.bestSquareSide&&(f&&f!==v||t&&t!==R||(p.bestSquareSide=d,p.numColumns=R,p.numRows=v))}}return p.bestSquareSide?{w:p.bestSquareSide,h:p.bestSquareSide/c,numColumns:p.numColumns,numRows:p.numRows}:{w:m,h:m/c,numColumns:g,numRows:_}},f={_configHV:null,_configDiagonal:null,calcPosition:function(e,s,a,i,o){var n=i*o;this._initConfig();var t,f,l,c,u=(s===r.DIAGONAL||s===r.DIAGONAL_ZIG_ZAG?this._configDiagonal:this._configHV)[e],h=u[0],w=u[1],m=u[2],p=u[3];t=l=1===h||0===h&&1===m?0:o-1,f=c=1===w||0===w&&1===p?0:i-1;for(var g=0;g<n&&g!==a;g++){if(0!==m&&!(1===m?t<o-1:t>0)||0!==p&&!(1===p?f<i-1:f>0)){s===r.DIAGONAL_ZIG_ZAG&&g&&(m*=-1,p*=-1,l=t,c=f);var _=l,S=c;0===h||h===m?(1===w?c<i-1:c>0)?c+=w:l+=h:(1===h?l<o-1:l>0)?l+=h:c+=w,s===r.DIAGONAL_ZIG_ZAG&&g&&(_!==l?c=f:S!==c&&(l=t)),t=l,f=c}else t+=m,f+=p}return{x:t,y:f}},_initConfig:function(){this._configHV||(this._configHV={},this._configHV[n.DOWN_RIGHT]=[0,1,1,0],this._configHV[n.DOWN_LEFT]=[0,1,-1,0],this._configHV[n.UP_RIGHT]=[0,-1,1,0],this._configHV[n.UP_LEFT]=[0,-1,-1,0],this._configHV[n.RIGHT_UP]=[1,0,0,-1],this._configHV[n.RIGHT_DOWN]=[1,0,0,1],this._configHV[n.LEFT_UP]=[-1,0,0,-1],this._configHV[n.LEFT_DOWN]=[-1,0,0,1],this._configDiagonal={},this._configDiagonal[n.DOWN_RIGHT]=[1,1,1,-1],this._configDiagonal[n.DOWN_LEFT]=[-1,1,-1,-1],this._configDiagonal[n.UP_RIGHT]=[1,-1,1,1],this._configDiagonal[n.UP_LEFT]=[-1,-1,-1,1],this._configDiagonal[n.RIGHT_UP]=[1,-1,-1,-1],this._configDiagonal[n.RIGHT_DOWN]=[1,1,-1,1],this._configDiagonal[n.LEFT_UP]=[-1,-1,1,-1],this._configDiagonal[n.LEFT_DOWN]=[-1,1,1,1])}},l={renderShape:function(e,s,a,i,o){var n=[],r=[],t=[];if(e.map((function(e){if(e.icon){n.push(e.icon);var i=a.createGroup();s.series.isEditMode&&(i.rawNode.style.cursor="pointer"),i.openBatch(),r.push(i)}})),n.length){var f=l._calcIconParams(n,i,s);r.forEach((function(e,a){var o=n[a],r=[];t.push(r);for(var c=0;c<f.numRows;c++)for(var u=0;u<f.numColumns&&(!s.series.waffleNumIcons||r.length!==s.series.waffleNumIcons);u++)r.push(l._renderIcon(r.length,c,u,e,o,i,s,f))}))}r.forEach((function(e){e.closeBatch()}));var c=function(a){return l._fillIcons(a,n,r,t,e,s,f)};return o.push({isShape:!0,func:c}),c},_calcIconParams:function(e,s,a){var i,o,n,r,f=e[0],l=f.shapeJson||f.imageJson;if(a.series.waffleNumIcons){o=(i=40)*l.style.height/l.style.width;var c=t({w:i+a.series.waffleColumnSpace,h:o+a.series.waffleRowSpace,W:s.w+a.series.waffleColumnSpace,H:s.h+a.series.waffleRowSpace,num:a.series.waffleNumIcons,preserveRectShape:!0,numColumns:a.series.waffleNumColumns,numRows:a.series.waffleNumRows}),u=c.w-a.series.waffleColumnSpace,h=c.h-a.series.waffleRowSpace;if(u<0||h<0)(w=Math.max((i+a.series.waffleColumnSpace)/c.w,(o+a.series.waffleRowSpace)/c.h))>1&&(i/=2*w,o/=2*w);else i=u,o=h;n=c.numColumns,r=c.numRows}else{if(o=(i=40*(l.style.zoom||1))*l.style.height/l.style.width,a.series.waffleNumColumns||a.series.waffleNumRows){var w,m=1e6,p=1e6;a.series.waffleNumColumns&&((m=(s.w+a.series.waffleColumnSpace)/a.series.waffleNumColumns-a.series.waffleColumnSpace)<0&&(m=(s.w+a.series.waffleColumnSpace)/a.series.waffleNumColumns/2),n=a.series.waffleNumColumns),a.series.waffleNumRows&&((p=(s.h+a.series.waffleRowSpace)/a.series.waffleNumRows-a.series.waffleRowSpace)<0&&(p=(s.h+a.series.waffleRowSpace)/a.series.waffleNumRows/2),r=a.series.waffleNumRows),(w=Math.max(i/m,o/p))>1&&(i/=w,o/=w)}n=n||Math.max(1,Math.floor((s.w+a.series.waffleColumnSpace)/(i+a.series.waffleColumnSpace))),r=r||Math.max(1,Math.floor((s.h+a.series.waffleRowSpace)/(o+a.series.waffleRowSpace)))}var g=0,_=0;return a.series.waffleStretchIconsToFill?(1===n?i=s.w:(i=(s.w-a.series.waffleColumnSpace*(n-1))/n,g=a.series.waffleColumnSpace),1===r?o=s.h:(o=(s.h-a.series.waffleRowSpace*(r-1))/r,_=a.series.waffleRowSpace)):(g=1===n?0:(s.w-i*n)/(n-1),_=1===r?0:(s.h-o*r)/(r-1)),{iconW:i,iconH:o,numColumns:Math.min(n,1e3),numRows:Math.min(r,1e3),columnSpace:g,rowSpace:_,waffleDirection:a.series.waffleDirection}},_renderIcon:function(n,r,t,l,c,u,h,w){var m=w.numRows,p=w.numColumns,g=w.iconW,_=w.iconH,S=w.columnSpace,C=w.rowSpace,R=c.shapeJson||c.imageJson,v=l.createGroup();if(c.shapeJson){var d=i.shapeJsonToGFXJson(R);try{a.deserialize(v,d)}catch(e){console.log(e)}}else v.createImage({x:0,y:0,width:g,height:_,src:o.getImageData(R.fileName)}),v.rawNode.style.opacity=R.style.opacity;v.createRect({x:0,y:0,width:g+S,height:_+C}).setFill(new e([0,0,0,.001]));var y=u.x,N=u.y,D=f.calcPosition(h.series.waffleDirection,h.series.waffleFlowStyle,n,m,p);return y+=D.x*(g+S),N+=D.y*(_+C),1===p&&(y+=(u.w-g)/2),1===m&&(N+=(u.h-_)/2),v.applyTransform(s.matrix.translate(y,N)),c.shapeJson&&(h.series.waffleStretchIconsToFill?v.applyTransform(s.matrix.scale(g/R.style.width,_/R.style.height)):v.applyTransform(s.matrix.scale(g/R.style.width))),v},_fillIcons:function(e,s,a,i,o,r,t){var f=t.iconW,l=t.iconH,c=t.numColumns,u=t.numRows,h=t.waffleDirection;a.forEach((function(e){e.openBatch()}));var w=u*c,m=0;o.forEach((function(e){m+=e.y||0}));var p=1,g=o.map((function(s,a){var i=e*(s.y||0)/m;return r.series.waffleShowWholePictures&&(i=Math.round(w*i)/w),i=Math.max(0,Math.min(1,i)),a<o.length-1&&(p-=i),i}));o.length>1&&(g[g.length-1]=p);var _=0;return i.forEach((function(e,a){var i=0,o=_;_+=g[a];for(var r=o*w,t=_*w,m=0;m<u;m++)for(var p=0;p<c;p++){var S=e[i];if(!S)break;if(S.setClip(null),S.rawNode.style.display="none",++i>r&&i-1<t){S.rawNode.style.display="";var C=Math.max(0,r-(i-1)),R=Math.max(0,i-t);if(C>0||R>0){var v=s[a],d=v.shapeJson?v.shapeJson.style.width:f,y=v.shapeJson?v.shapeJson.style.height:l;n.isLeftRightStartPosition(h)?n.isDownGrowth(h)?S.setClip({x:0,y:y*C,width:d,height:y*(1-(C+R))}):S.setClip({x:0,y:y*R,width:d,height:y*(1-(C+R))}):n.isLeftGrowth(h)?S.setClip({x:d*R,y:0,width:d*(1-(C+R)),height:y}):S.setClip({x:d*C,y:0,width:d*(1-(C+R)),height:y})}}}})),a.forEach((function(e){e.closeBatch()})),{shapes:a}},DEFAULT_ICON_SIZE:40};return l}));