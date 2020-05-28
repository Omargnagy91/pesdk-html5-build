import{_ as e,n as i,J as t,I as r,K as o,T as s,M as n}from"./index-4ccbf950.js";import"react";import"react-dom";import"./engine.production.min.js";import"styled-components";import"react-dom/server";var a="5.1.0",l=function(){function o(e,i,r,o){var s=this;this.serializeFontSize=function(e){return e/Math.min(s.transformedImageSize.width,s.transformedImageSize.height)},this.serializeMaxWidth=function(e){return e/Math.min(s.transformedImageSize.width,s.transformedImageSize.height)},this.previewRelativeToImageDimensions=function(e){return s.relativeToOutputContainer(e).divide(t.fromSize(s.previewSize))},this.relativeToOutputContainer=function(e){return new t(e).subtract(new t(s.previewPosition))},this.relativeToImageDimensions=function(e){return new t(e).divide(t.fromSize(s.previewSize))},this.relativeToUntransformedImageDimensions=function(e){return new t(e).divide(t.fromSize(s.untransformedImageSize))},this.relativeToShortestImageEdge=function(e){return e/Math.min(s.transformedImageSize.height,s.transformedImageSize.width)},this.getPointInDirection=function(e,i,t){void 0===i&&(i=0),void 0===t&&(t=3);var r=Math.tan(i),o=Math.sqrt(Math.pow(r,2)+1);return{x:e.x+t/o,y:e.y+t*r/o}},this.previewPosition=e,this.previewSize=i,this.transformedImageSize=r,this.untransformedImageSize=o}return o.serializeFilters=function(e){return{type:"filter",options:{intensity:e.intensity,identifier:e.identifier}}},o.serializeAdjustments=function(e){return{type:"adjustments",options:e}},o.serialzeOverlay=function(e){return{type:"overlay",options:{identifier:e.identifier,intensity:e.opacity,blendMode:e.blendMode.replace(/[A-Z]/g,(function(e){return" "+e.toLowerCase()}))}}},o.serializeMetaData=function(){return{platform:"html5",version:a,createdAt:(new Date).toISOString()}},o.prototype.serialise=function(i,t){var s=this,n=o.serializeMetaData(),a={width:this.transformedImageSize.width,height:this.transformedImageSize.height};t&&(a.data=t);var l=[],d=[],p=i.adjustment;Object.keys(p).map((function(e){return p[e]})).filter(Boolean).length&&l.push(o.serializeAdjustments(p));var u=i.filter;"identity"!==u.identifier&&l.push(o.serializeFilters(u));var m=i.overlay;"identity"!==m.identifier&&d.push(o.serialzeOverlay(m));var h=i.frame;"identity"!==h.identifier&&d.push(this.serialzeFrame(h));var f=i.focus;if("identity"!==f.identifier&&l.push(this.serialzeFocus(f)),i.transform){var c=this.serializeTransform(i.transform),g=c.transform,v=c.orientation,z=[0!==g.options.start.x,0!==g.options.start.y,1!==g.options.end.x,1!==g.options.end.y,0!==g.options.rotation],y=[0!==v.options.rotation,!1!==v.options.flipVertically,!1!==v.options.flipHorizontally];z.some((function(e){return e}))&&l.push(g),y.some((function(e){return e}))&&l.push(v)}if(i.sprite&&i.sprite.spriteIdList.forEach((function(e){var t=i.sprite.common[e];switch(t.tool){case"sticker":var r=i.sprite.sticker[e];d.push(s.serializeSticker(r,t));break;case"text":var o=i.sprite.text[e];d.push(s.serializeText(o,t));break;case"textdesign":var n=i.sprite.textdesign[e];d.push(s.serializeTextDesign(n,t))}})),i.brush.strokes.length&&d.push({type:"brush",options:{paths:i.brush.strokes.map((function(e){return{points:e.path.controlPoints.map(s.relativeToUntransformedImageDimensions),brush:{color:{rgba:e.brush.color},size:s.relativeToShortestImageEdge(e.brush.size),hardness:e.brush.hardness}}}))}}),d.length){var I={type:"sprite",options:{sprites:d}};l.push(I)}var S={assets:{stickers:i.customStickers?i.customStickers.map((function(i){return e({},i,{raster:e({},i.raster,{data:i.raster.data.replace((t=i.raster.type,void 0===t&&(t=r.PNG),"data:"+t+";base64,"),"")})});var t})):[]}};return{version:o.version,meta:n,image:a,operations:l,assetLibrary:S}},o.prototype.serialzeFrame=function(e){return{type:"frame",options:{identifier:e.identifier,alpha:e.opacity,tintColor:{rgba:e.color},size:this.relativeToShortestImageEdge(e.width)}}},o.prototype.serialzeFocus=function(e){var t=Math.sqrt(Math.pow(this.previewSize.width,2)+Math.pow(this.previewSize.height,2));switch(e.identifier){case i.LINEAR:return{type:"focus",options:{type:"linear",options:{start:this.previewRelativeToImageDimensions(e.linear.start),end:this.previewRelativeToImageDimensions(e.linear.end),blurRadius:this.relativeToShortestImageEdge(e.linear.blurRadius)}}};case i.RADIAL:return{type:"focus",options:{type:"radial",options:{start:this.previewRelativeToImageDimensions(e.radial.center),end:this.previewRelativeToImageDimensions(this.getPointInDirection(e.radial.center,0,e.radial.radius)),blurRadius:this.relativeToShortestImageEdge(e.radial.blurRadius),gradientRadius:.1}}};case i.MIRRORED:var r=e.mirrored;return{type:"focus",options:{type:"mirrored",options:{start:this.previewRelativeToImageDimensions(this.getPointInDirection(r.origin,r.rotation,t/2)),end:this.previewRelativeToImageDimensions(this.getPointInDirection(r.origin,r.rotation,-t/2)),size:this.relativeToShortestImageEdge(e.mirrored.size),blurRadius:this.relativeToShortestImageEdge(e.mirrored.blurRadius),gradientSize:.1}}};default:return{type:"focus",options:{type:"gaussian",options:{blurRadius:this.relativeToShortestImageEdge(e.gaussian.blurRadius)}}}}},o.prototype.serializeSticker=function(e,i){return{type:"sticker",options:{position:this.relativeToUntransformedImageDimensions(i.position),dimensions:{x:this.relativeToShortestImageEdge(i.size.width),y:this.relativeToShortestImageEdge(i.size.height)},rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,identifier:e.identifier,alpha:e.opacity,tintColor:{rgba:e.tintColor},tintMode:e.tintMode}}},o.prototype.serializeText=function(e,i){return{type:"text",options:{position:this.relativeToUntransformedImageDimensions(i.position),rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,fontIdentifier:e.identifier,fontSize:this.serializeFontSize(e.fontSize),maxWidth:this.serializeMaxWidth(e.width),text:e.text,lineHeight:e.lineHeight,color:{rgba:e.textColor},backgroundColor:{rgba:e.backgroundColor},alignment:e.alignment}}},o.prototype.serializeTextDesign=function(e,i){return{type:"textdesign",options:{position:this.relativeToUntransformedImageDimensions(i.position),rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,identifier:e.identifier,inverted:e.isInverted,width:this.serializeMaxWidth(e.width),seed:e.seed,padding:this.relativeToShortestImageEdge(e.padding),text:e.text,color:{rgba:e.color}}}},o.prototype.serializeTransform=function(e){var i=this.getUnRotatedPreviewSize(e.outputRotation);return{transform:{type:"transform",options:{start:new t(e.start).divide(t.fromSize(i)),end:new t(e.end).divide(t.fromSize(i)),rotation:e.rotation,meta:{identifier:e.identifier}}},orientation:{type:"orientation",options:{rotation:e.outputRotation,flipHorizontally:e.flipHorizontally,flipVertically:e.flipVertically}}}},o.prototype.getUnRotatedPreviewSize=function(e){switch(e){case 90:case 270:return{width:this.previewSize.height,height:this.previewSize.width};default:return this.previewSize}},o.version="3.8.0",o}(),d=function(e){return void 0===e&&(e=r.PNG),"data:"+e+";base64,"},p=function(){function i(e,i,r,o){var s=this;this.spriteOrder=0,this.deserializeFontSize=function(e){return e*Math.min(s.transformedImageSize.width,s.transformedImageSize.height)},this.deserializeMaxWidth=function(e){return e*Math.min(s.transformedImageSize.width,s.transformedImageSize.height)},this.previewRelativeToImageDimensions=function(e){return s.relativeToOutputContainer(new t(e).multiply(t.fromSize(s.previewSize)))},this.relativeToOutputContainer=function(e){return new t(e).add(new t(s.previewPosition))},this.relativeToImageDimensions=function(e){return new t(e).multiply(t.fromSize(s.previewSize))},this.relativeToUntransformedImageDimensions=function(e){return new t(e).multiply(t.fromSize(s.untransformedImageSize))},this.relativeToShortestImageEdge=function(e){return e*Math.min(s.transformedImageSize.height,s.transformedImageSize.width)},this.previewPosition=e,this.previewSize=i,this.transformedImageSize=r,this.untransformedImageSize=o}return i.deserializeFilter=function(e){return{intensity:e.intensity,identifier:e.identifier}},i.deserializeAdjustments=function(i){return e({},i)},i.deserializeOverlay=function(e){return{identifier:e.identifier,opacity:e.intensity,blendMode:e.blendMode.replace(/([ _][a-z])/g,(function(e){return e.toUpperCase().replace(" ","").replace("_","")}))}},i.initializeEmptyOrientation=function(){return{outputRotation:0,flipHorizontally:!1,flipVertically:!1}},i.initializeEmptyTransform=function(){return{start:{x:0,y:0},end:{x:1,y:1},rotation:0}},i.deserialzeColor=function(e){return e&&e.rgba?e.rgba:[0,0,0,0]},i.validateVersion=function(e){return i.version===e},i.checkIfPlatformHTML=function(e){return"html5"===e},i.deserializeStickers=function(e){return{identifier:e.identifier,opacity:e.alpha||0,tintMode:e.tintMode||"none",tintColor:i.deserialzeColor(e.tintColor)}},i.prototype.deserialise=function(r,a){var l=this;if("string"!=typeof r){var p={};return i.validateVersion(r.version)?(r.meta&&!i.checkIfPlatformHTML(r.meta.platform)&&console.warn("Platform mismatch"),r.image&&(p.image={width:r.image.width,height:r.image.height,data:r.image.data?r.image.data.replace(d(),""):""},p.image.data=p.image.data?d()+p.image.data:""),r.operations.forEach((function(e){switch(e.type){case"filter":p.filter=i.deserializeFilter(e.options);break;case"adjustments":p.adjustment=i.deserializeAdjustments(e.options);break;case"focus":p.focus=l.deserializeFocus(e.options);break;case"transform":p.transform||(p.transform=i.initializeEmptyOrientation());var r=new t(e.options.start).multiply(t.fromSize(l.previewSize)),a=new t(e.options.end).multiply(t.fromSize(l.previewSize));p.transform.start=r,p.transform.end=a,p.transform.rotation=e.options.rotation||0,p.transform.identifier=e.options.meta?e.options.meta.identifier:"";break;case"orientation":p.transform||(p.transform=i.initializeEmptyTransform()),p.transform.outputRotation=e.options.rotation,p.transform.flipHorizontally=e.options.flipHorizontally||!1,p.transform.flipVertically=e.options.flipVertically||!1;break;case"sprite":e.options.sprites.forEach((function(e){var t;switch(e.type){case"frame":p.frame=l.deserializeFrame(e.options);break;case"overlay":p.overlay=i.deserializeOverlay(e.options);break;case"brush":p.brush?(t=p.brush.strokes).push.apply(t,n(l.deserializeBrush(e.options).strokes)):p.brush=l.deserializeBrush(e.options);break;case"sticker":case"text":case"textdesign":p.sprite||(p.sprite={spriteIdList:[],sticker:{},text:{},textdesign:{},common:{}});var r=o();p.sprite.spriteIdList.push(r),p.sprite.common[r]={order:l.spriteOrder,position:l.relativeToUntransformedImageDimensions(e.options.position),tool:s.STICKER,rotation:e.options.rotation||0,flipHorizontally:e.options.flipHorizontally,flipVertically:e.options.flipVertically},l.spriteOrder+=1,e.type===s.STICKER?(p.sprite.common[r].size={width:l.relativeToShortestImageEdge(e.options.dimensions.x),height:l.relativeToShortestImageEdge(e.options.dimensions.y)},p.sprite.sticker[r]=i.deserializeStickers(e.options)):e.type===s.TEXT?(p.sprite.common[r].tool=s.TEXT,p.sprite.text[r]=l.deserializeTexts(e.options)):e.type===s.TEXT_DESIGN&&(p.sprite.common[r].tool=s.TEXT_DESIGN,p.sprite.textdesign[r]=l.deserializeTextDesign(e.options))}}))}})),r.assetLibrary&&(p.customStickers=r.assetLibrary&&r.assetLibrary.assets&&r.assetLibrary.assets.stickers||[],p.customStickers=p.customStickers.map((function(i){var t=i.raster.data.replace(d(i.raster.type),"");return e({},i,{raster:e({},i.raster,{data:d(i.raster.type)+t})})}))),p):(a({identifier:"unsupportedVersion",message:r.version}),null)}throw new Error("Invalid input of type string, please provide an object")},i.prototype.deserializeFrame=function(e){return{identifier:e.identifier,opacity:e.alpha,width:this.relativeToShortestImageEdge(e.size),color:i.deserialzeColor(e.tintColor)}},i.prototype.deserializeFocus=function(e){switch(e.type){case"linear":return{identifier:"linear",linear:this.deserializeLinearFocus(e.options)};case"gaussian":return{identifier:"gaussian",gaussian:this.deserializeGaussianFocus(e.options)};case"radial":return{identifier:"radial",radial:this.deserializeRadialFocus(e.options)};case"mirrored":return{identifier:"mirrored",mirrored:this.deserializeMirroredFocus(e.options)}}},i.prototype.deserializeRadialFocus=function(e){return{center:this.previewRelativeToImageDimensions(e.start),radius:this.previewRelativeToImageDimensions(e.start).subtract(this.previewRelativeToImageDimensions(e.end)).magnitude,blurRadius:this.relativeToShortestImageEdge(e.blurRadius)}},i.prototype.deserializeLinearFocus=function(e){return{start:this.previewRelativeToImageDimensions(e.start),end:this.previewRelativeToImageDimensions(e.end),blurRadius:this.relativeToShortestImageEdge(e.blurRadius)}},i.prototype.deserializeGaussianFocus=function(e){return{blurRadius:this.relativeToShortestImageEdge(e.blurRadius)}},i.prototype.deserializeMirroredFocus=function(e){var i=this.previewRelativeToImageDimensions(e.start).subtract(this.previewRelativeToImageDimensions(e.end));return{origin:this.previewRelativeToImageDimensions(e.start).add(this.previewRelativeToImageDimensions(e.end)).divide(2),rotation:Math.atan2(i.y,i.x),size:this.relativeToShortestImageEdge(e.size),blurRadius:this.relativeToShortestImageEdge(e.blurRadius)}},i.prototype.deserializeTexts=function(e){return{identifier:e.fontIdentifier,fontSize:this.deserializeFontSize(e.fontSize),width:this.deserializeMaxWidth(e.maxWidth),alignment:e.alignment,textColor:i.deserialzeColor(e.color),backgroundColor:i.deserialzeColor(e.backgroundColor),lineHeight:e.lineHeight,text:e.text}},i.prototype.deserializeTextDesign=function(e){return{identifier:e.identifier,width:this.deserializeMaxWidth(e.width),padding:this.relativeToShortestImageEdge(e.padding),color:i.deserialzeColor(e.color),seed:e.seed,text:e.text,isInverted:e.inverted}},i.prototype.deserializeBrush=function(e){var t=this;return{strokes:e.paths.map((function(e){return{path:{controlPoints:e.points.map(t.relativeToUntransformedImageDimensions)},brush:{id:"imgly_brush_radial",color:i.deserialzeColor(e.brush.color),size:t.relativeToShortestImageEdge(e.brush.size),hardness:e.brush.hardness}}}))}},i.version="3.8.0",i}();export{p as Deserializer,l as Serializer};
