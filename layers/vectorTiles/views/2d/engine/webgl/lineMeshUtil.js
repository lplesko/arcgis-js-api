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

define(["require","exports","../../../../core/screenUtils","./color","./LineTess","./MeshData","./number","./TileClipper","./Utils","./visualVariablesUtils"],(function(e,i,t,r,o,a,n,s,l,u){Object.defineProperty(i,"__esModule",{value:!0});var v=new o.Tessellator({distanceAlongCorrection:!0}),c=new Float32Array(1),d=new Uint32Array(c.buffer),p=[o.allocExtrudeVectors(),o.allocExtrudeVectors()],f=o.allocExtrudeVectors(),x=o.allocTriangles(20),y=o.allocTriangles(20),h=new s.TileClipper(0,0,0,1,8);function b(e,i,t,r,a,n,s){var l=t[i],u=[void 0,void 0],c=[void 0,void 0];if(i>0&&i<r-1){var d=t[(i+r-1)%r],p=t[(i+1)%r];o.normalize(u,[l.x-d.x,l.y-d.y]),o.normalize(c,[p.x-l.x,p.y-l.y])}else if(0===i){p=t[(i+1)%r];if(o.normalize(c,[p.x-l.x,p.y-l.y]),a){var f=t[r-2];o.normalize(u,[l.x-f.x,l.y-f.y])}else u=c}else{if(i!==r-1)return void console.error("Vertex index 'i' out of range.");d=t[(i+r-1)%r];if(o.normalize(u,[l.x-d.x,l.y-d.y]),a){var x=t[1];o.normalize(c,[x.x-l.x,x.y-l.y])}else c=u}a||0!==i?a||i!==r-1?function(e,i,t,r){var a=o.getRads(i,t);if(a>Math.PI-.05)v.rectJoin(e,i,t);else if("miter"===r||a<.1)a<.05?v.fastMiterJoin(e,i,t):a<o.MITER_SAFE_RADS?v.miterJoin(e,i,t):v.bevelJoin(e,i,t,o.SYSTEM_MAG_LIMIT);else if("bevel"===r)v.bevelJoin(e,i,t,1);else if("round"===r){var n=o.getNumberOfSlices(a);a<2.3?n<2||a<.5?v.bevelJoin(e,i,t,1):v.roundJoin(e,i,t,n):v.unitRoundJoin(e,i,t,n)}}(e,u,c,s):m(e,u,c,o.CapPosition.END,n):m(e,u,c,o.CapPosition.START,n)}function m(e,i,t,r,a){"butt"===a?v.buttCap(e,i,t):"round"===a?v.roundCap(e,i,t,r,o.getNumberOfSlices(Math.PI),r===o.CapPosition.START?-1:1):"square"===a?v.squareCap(e,i,t,r):(v.buttCap(e,i,t),console.error("Unknown cap type!"))}function g(e,i,t,r,o,a,s,l,u,v,c,d){var p,f=0;for(p=0;p<c.vectors.count;++p){var x=c.vectors.items[p].vector[0],y=c.vectors.items[p].vector[1],h=c.vectors.items[p].texCoords[0],b=c.vectors.items[p].texCoords[1],m=c.vectors.items[p].direction[0],g=c.vectors.items[p].direction[1],S=u+f;++f,d.push(n.i1616to32(e,i),s,r,n.i8888to32(Math.round(31*x),Math.round(31*y),Math.round(31*h),Math.round(31*b)),n.i1616to32(t,31*l),n.i1616to32(o[0],o[1]),n.i1616to32(a[0],a[1]),n.i8888to32(Math.round(31*m),Math.round(31*g),0,0)),v&&d.push(v.size,v.color,v.opacity),c.vectors.items[p].base={index:S,point:[e,i]}}return f}function S(e,i,t){var r;for(v.bridge(x,e,i),r=0;r<x.count;++r){var o=x.items[r];t.push(o.v1.base.index,o.v2.base.index,o.v3.base.index)}}function M(e,i){var t;for(v.pie(y,e),t=0;t<y.count;++t){var r=y.items[t];i.push(r.v1.base.index,r.v2.base.index,r.v3.base.index)}}h.setExtent(512),i.createLineMeshData=function(e,i,s,y,m,z,V){var C=null!=y?y.spriteMosaicItem:null,T=z.geometry,N=!l.isPictureSymbol(V)&&V.color?r.copyAndPremultiply(V.color):[255,255,255,1],E=n.numTo32(e),R=1/m,w=Math.round(m*t.pt2px(V.width>0?.5*(V.width+R):0)),A=null!=C,J=s.vvColor||s.vvOpacity||s.vvSizeMinMaxValue||s.vvSizeScaleStops||s.vvSizeFieldStops||s.vvSizeUnitValue,P=0,U=0,I=0;if(J){var _=i.vvFields,D=_.opacity?i.getValue(z,_.opacity):0,F=_.color?i.getValue(z,_.color):0,O=_.size&&!s.vvSizeScaleStops?i.getValue(z,_.size):0;s.vvSizeUnitValue&&(O=u.getVisualVariableSizeValueRepresentationRatio(O,i.vvRanges.size.unitValue.valueRepresentation)),(null===O||isNaN(O))&&(O=NaN),(null===F||isNaN(F))&&(F=NaN),(null===D||isNaN(D))&&(D=NaN),c[0]=O,I=d[0],c[0]=D,P=d[0],c[0]=F,U=d[0]}var q=n.i8888to32(N[0],N[1],N[2],N[3]),L=[0,0],k=[0,0];if(C){var j=C.rect.x,G=C.rect.y,W=C.width,Y=C.height;L[0]=j+1,L[1]=G+1,k[0]=j+1+W,k[1]=G+1+Y}for(var B=T.rings||T.paths,H=[],K=B.length,Q=0,X=!1;Q<K;){var Z=B[Q],$=[];h.reset(2);var ee=Z[0][0],ie=Z[0][1];if(X)h.moveTo(ee,ie);else{if(ee<-8||ee>520||ie<-8||ie>520){X=!0;continue}$.push({x:ee,y:ie})}for(var te=!1,re=Z.length,oe=1;oe<re;++oe)if(ee+=Z[oe][0],ie+=Z[oe][1],X)h.lineTo(ee,ie);else{if(ee<-8||ee>520||ie<-8||ie>520){te=!0;break}$.push({x:ee,y:ie})}if(te)X=!0;else{if(X){var ae=h.resultWithStarts();if(ae)for(var ne=0,se=ae;ne<se.length;ne++){var le=se[ne];H.push(le)}}else H.push({line:$,start:0});Q++,X=!1}}for(var ue=0,ve=[],ce=[],de=0,pe=H;de<pe.length;de++){var fe=pe[de],xe=($=fe.line,fe.start);if(!($.length<2)){var ye=$.length,he=$[0],be=$[ye-1],me=be.x-he.x,ge=be.y-he.y,Se=me*me+ge*ge<1e-6,Me=xe%65535,ze=p[1],Ve=void 0,Ce=J?{size:I,color:U,opacity:P}:null;for(Ve=0;Ve<ye;++Ve){var Te=$[Ve],Ne=ze===p[Ve%2]?p[(Ve+1)%2]:p[Ve%2];if(Ve<ye-1||!Se||A?(b(Ne,Ve,$,ye,Se,"round","round"),ue+=g(Te.x,Te.y,Me,q,L,k,E,w,ue,Ce,Ne,ve),!Ne.capCenter||Se&&Ve===ye-1||M(Ne,ce),Se&&0===Ve&&!A&&o.copyExtrudeVectors(f,Ne)):o.copyExtrudeVectors(Ne,f),Ve>0&&S(ze,Ne,ce),Ve<ye-1){var Ee=$[Ve+1],Re=[Ee.x-Te.x,Ee.y-Te.y],we=o.length(Re),Ae=[Re[0]/we,Re[1]/we],Je=Me+we;if(Je>65535){var Pe=(65535-Me)/(Je-Me),Ue=Te.x+(Ee.x-Te.x)*Pe,Ie=Te.y+(Ee.y-Te.y)*Pe,_e=ze;v.buttCap(_e,Ae,Ae),ue+=g(Ue,Ie,65535,q,L,k,e,w,ue,Ce,_e,ve),v.bridge(x,Ne,_e),S(Ne,_e,ce),v.buttCap(_e,Ae,Ae),ue+=g(Ue,Ie,0,q,L,k,e,w,ue,Ce,_e,ve),Me=Je-65535}else Me=Je,ze=Ne}}}}var De=new a;return De.update({geometry:ve},ue,ce),De}}));