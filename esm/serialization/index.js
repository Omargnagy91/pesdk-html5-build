import{F as X,I as q,V as f,d as h,f as K,k as b,q as $,z as S}from"../chunk.6QXMKAVR.js";var F="@photoeditorsdk/root",w="5.10.0",M="The most comprehensive photo editor SDK for HTML5",E="http://github.com/imgly/pesdk-html5",j="PhotoEditorSDK (img.ly GmbH) <contact@img.ly>",A="SEE LICENSE IN LICENSE.md",H=!0,L={},V={start:"yarn workspace @example/react start",build:"yarn sdk-script build","build:rollup":"yarn sdk-script build rollup","package:release":"cd dist/photoeditorsdk && npm publish","package:pre-release":"cd dist/photoeditorsdk && npm publish --tag next","lint:css":"stylelint './packages/**/*.tsx'","lint:ts":"eslint ./packages","lint:ts-engine":"eslint ./engine","lint:types":"tsc --noEmit -p tsconfig.json --skipLibCheck","lint:types-engine":"tsc --noEmit -p engine/tsconfig.json --skipLibCheck",lint:"run-p lint:*",test:"$(npm bin)/jest",e2e:"cypress open","e2e:server":"sdk-script ui -P 3000 -D build","e2e:ci":"CYPRESS_RETRIES=2 cypress run --browser chrome --headless",deploy:"yarn workspace examp run deploy:pages",docs:"rm -rf ./docs && typedoc",postinstall:"yarn sdk-script server:build"},D={"@elv1n/cypress-plugin-snapshots":"1.4.4","@types/jest":"^24.0.11","@types/pixelmatch":"^5.2.2","@types/pngjs":"^3.4.2","@types/react":"^16.8.13","@types/react-dom":"^16.8.4","@types/styled-components":"4.4.0","@typescript-eslint/eslint-plugin":"4.6.0","@typescript-eslint/parser":"4.6.0",autoprefixer:"^9.7.4","cross-env":"^7.0.2",cypress:"5.6.0",eslint:"7.10.0","eslint-config-airbnb":"18.2.0","eslint-config-prettier":"6.12.0","eslint-import-resolver-typescript":"^2.3.0","eslint-plugin-cypress":"^2.11.2","eslint-plugin-import":"2.22.1","eslint-plugin-jsx-a11y":"6.3.1","eslint-plugin-no-only-tests":"^2.4.0","eslint-plugin-prettier":"3.1.4","eslint-plugin-react":"7.21.3",husky:"4.3.0",jest:"24.9.0",jsdoc:"^3.6.3","lint-staged":"10.4.0","lodash.defaults":"^4.2.0","mobx-react-devtools":"^6.1.1","npm-run-all":"^4.1.5","native-url":"0.3.4",prettier:"^2.0.5",react:"16.8.6","react-dom":"16.8.6","start-server-and-test":"1.11.5","styled-components":"4.4.1",stylelint:"^13.7.2","stylelint-config-recommended":"^3.0.0","stylelint-config-standard":"^20.0.0","stylelint-config-styled-components":"^0.1.1","stylelint-processor-styled-components":"^1.10.0","ts-jest":"24.3.0",typedoc:"^0.17.8",typescript:"3.8.3","utility-types":"^3.10.0"},B={"@juggle/resize-observer":"3.2.0","can-use-dom":"0.1.0","lodash.debounce":"4.0.8","lodash.memoize":"4.1.2","lodash.throttle":"4.1.1",mobx:"4.15.7","mobx-react":"6.3.1",photoeditorsdk:"1.0.0","react-app-polyfill":"1.0.6"},G={node:"10.x || 11.x || 12.x || 13.x || 14.x || 15.x"},N={eslint:"7.10.0"},U=["examples/server","examples/material-ui","examples/react","packages/*","!packages/ui","packages/ui/*","!packages/ui/components","packages/ui/components/*","engine/*","test/*","scripts"],_={hooks:{"pre-commit":"lint-staged","pre-push":"true"}},I={name:F,version:w,description:M,repository:E,author:j,license:A,private:H,bin:L,scripts:V,devDependencies:D,dependencies:B,devEngines:G,resolutions:N,workspaces:U,husky:_};var u=class{constructor(e,i,t,o,p,s){this.mapImagePointToRelativeCropPoint=e=>{let i=f.pointFromSpaceToSpace(e,this.imageSpace,this.cropSpace,!1);return f.absoluteToRelativePoint(i,this.cropSpace,!1)};this.mapSizeToRelativeUnscaledCropSize=e=>e/Math.min(this.outputSize.height,this.outputSize.width);this.mapSizeToRelativeScaledCropSize=e=>e/Math.min(this.outputSize.height*this.outputScale.x,this.outputSize.width*this.outputScale.y);this.getPointInDirection=(e,i=0,t=3)=>{let o=Math.tan(i),p=Math.sqrt(o**2+1);return{x:e.x+t/p,y:e.y+t*o/p}};this.previewPosition=e,this.previewSize=i,this.outputSize=t,this.imageSize=o,this.imageSpace=p,this.cropSpace=s,this.outputScale=s.getScale()}static serializeFilters(e){return{type:"filter",options:{intensity:e.intensity,identifier:e.identifier}}}static serializeAdjustments(e){return{type:"adjustments",options:e}}static serializeOverlay(e){return{type:"overlay",options:{identifier:e.identifier,intensity:e.opacity,blendMode:e.blendMode.replace(/[A-Z]/g,i=>` ${i.toLowerCase()}`)}}}static serializeMetaData(){return{platform:"html5",version:I.version,createdAt:new Date().toISOString()}}serialise(e,i,t){let o=u.serializeMetaData(),p={width:this.imageSize.width,height:this.imageSize.height};i&&(p.type=t,p.data=i);let s=[],d=[],{adjustment:z}=e;Object.keys(z).map(r=>z[r]).filter(Boolean).length&&s.push(u.serializeAdjustments(z));let{filter:a}=e;a.identifier!=="identity"&&s.push(u.serializeFilters(a));let{overlay:c}=e;if(c.identifier!=="identity"&&d.push(u.serializeOverlay(c)),e.transform){let{transform:r,orientation:m}=this.serializeTransform(e.transform),v=[r.options.start.x!==0,r.options.start.y!==0,r.options.end.x!==1,r.options.end.y!==1,r.options.rotation!==0],y=[m.options.rotation!==0,m.options.flipVertically!==!1,m.options.flipHorizontally!==!1];v.some(g=>g)&&s.push(r),y.some(g=>g)&&s.push(m)}let{frame:C}=e;C.identifier!=="identity"&&d.push(this.serialzeFrame(C));let{focus:R}=e;if(R.identifier!=="identity"&&s.push(this.serializeFocus(R)),e.sprite&&e.sprite.spriteIdList.forEach(r=>{let m=e.sprite.common[r];switch(m.tool){case"sticker":let v=e.sprite.sticker[r];d.push(this.serializeSticker(v,m,e.transform));break;case"text":let y=e.sprite.text[r];d.push(this.serializeText(y,m));break;case"textdesign":let g=e.sprite.textdesign[r];d.push(this.serializeTextDesign(g,m));break}}),e.brush.strokes.length&&d.push({type:"brush",options:{paths:e.brush.strokes.map(r=>({points:r.path.controlPoints.map(this.mapImagePointToRelativeCropPoint),brush:{color:{rgba:r.brush.color},size:r.brush.size,hardness:r.brush.hardness}}))}}),d.length){let r={type:"sprite",options:{sprites:d}};s.push(r)}let x={assets:{stickers:e.customStickers}};return{version:u.version,meta:o,image:p,operations:s,assetLibrary:x}}serialzeFrame(e){return{type:"frame",options:{identifier:e.identifier,alpha:e.opacity,tintColor:{rgba:e.color},size:this.mapSizeToRelativeUnscaledCropSize(e.width)}}}serializeFocus(e){let i=Math.sqrt(this.previewSize.width**2+this.previewSize.height**2);switch(e.identifier){case b.LINEAR:return{type:"focus",options:{type:"linear",options:{start:this.mapImagePointToRelativeCropPoint(e.linear.start),end:this.mapImagePointToRelativeCropPoint(e.linear.end),blurRadius:this.mapSizeToRelativeScaledCropSize(e.linear.blurRadius)}}};case b.RADIAL:return{type:"focus",options:{type:"radial",options:{start:this.mapImagePointToRelativeCropPoint(e.radial.center),end:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(e.radial.center,0,e.radial.radius)),blurRadius:this.mapSizeToRelativeScaledCropSize(e.radial.blurRadius),gradientRadius:.1}}};case b.MIRRORED:let{mirrored:t}=e;return{type:"focus",options:{type:"mirrored",options:{start:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(t.origin,t.rotation,i/2)),end:this.mapImagePointToRelativeCropPoint(this.getPointInDirection(t.origin,t.rotation,-i/2)),size:this.mapSizeToRelativeScaledCropSize(e.mirrored.size),blurRadius:this.mapSizeToRelativeScaledCropSize(e.mirrored.blurRadius),gradientSize:.1}}};default:return{type:"focus",options:{type:"gaussian",options:{blurRadius:this.mapSizeToRelativeScaledCropSize(e.gaussian.blurRadius)}}}}}serializeSticker(e,i,t){return{type:"sticker",options:{position:this.mapImagePointToRelativeCropPoint(i.position),dimensions:{x:this.mapSizeToRelativeScaledCropSize(i.size.width),y:this.mapSizeToRelativeScaledCropSize(i.size.height)},rotation:i.rotation,flipVertically:(i.flipVertically||!1)!==(t.flipVertically||!1),flipHorizontally:(i.flipHorizontally||!1)!==(t.flipHorizontally||!1),identifier:e.identifier,alpha:e.opacity,tintColor:{rgba:e.tintColor},tintMode:e.tintMode}}}serializeText(e,i){return{type:"text",options:{position:this.mapImagePointToRelativeCropPoint(i.position),rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,fontIdentifier:e.identifier,fontSize:this.mapSizeToRelativeScaledCropSize(e.fontSize),maxWidth:this.mapSizeToRelativeScaledCropSize(e.width),text:e.text,lineHeight:e.lineHeight,color:{rgba:e.textColor},backgroundColor:{rgba:e.backgroundColor},alignment:e.alignment}}}serializeTextDesign(e,i){return{type:"textdesign",options:{position:this.mapImagePointToRelativeCropPoint(i.position),rotation:i.rotation,flipVertically:!1,flipHorizontally:!1,identifier:e.identifier,inverted:e.isInverted,text:e.text,seed:e.seed,width:this.mapSizeToRelativeScaledCropSize(e.width),padding:this.mapSizeToRelativeScaledCropSize(e.padding),color:{rgba:e.color}}}}serializeTransform(e){let{start:i,end:t}=e,o={type:"transform",options:{start:i,end:t,rotation:e.rotation,meta:{identifier:e.identifier}}},p={type:"orientation",options:{rotation:e.outputRotation,flipHorizontally:e.flipHorizontally,flipVertically:e.flipVertically}};return{transform:o,orientation:p}}},O=u;O.version="3.9.0";var k=(P=K.PNG)=>`data:${P};base64,`,n=class{constructor(e){this.spriteOrder=0;this.mapRelativeCropPointToImageSpace=e=>{let i=f.relativeToAbsolutePoint(e,this.cropSpace,!1);return f.pointFromSpaceToSpace(i,this.cropSpace,this.imageSpace,!1)};this.mapRelativeCropSizeToScaledImageSize=e=>e*Math.min(this.outputSize.height*this.outputScale.x,this.outputSize.width*this.outputScale.y);this.mapRelativeCropSizeToUnscaledImageSize=e=>e*Math.min(this.outputSize.height,this.outputSize.width);this.editor=e}static deserializeFilter(e){return{intensity:e.intensity,identifier:e.identifier}}static deserializeAdjustments(e){return q({},e)}static deserializeOverlay(e){return{identifier:e.identifier,opacity:e.intensity,blendMode:e.blendMode.replace(/([ _][a-z])/g,i=>i.toUpperCase().replace(" ","").replace("_",""))}}static initializeEmptyTransform(){return{outputRotation:0,flipHorizontally:!1,flipVertically:!1,start:{x:0,y:0},end:{x:1,y:1},rotation:0}}static deserialzeColor(e){return e&&e.rgba?e.rgba:[0,0,0,0]}static validateVersion(e){return n.version===e}static checkIfPlatformHTML(e){return e==="html5"}static deserializeStickers(e){return{identifier:e.identifier,opacity:e.alpha||0,tintMode:e.tintMode||"none",tintColor:n.deserialzeColor(e.tintColor)}}static checkIsSerialisationValid(e){if(typeof e!="string"&&n.validateVersion(e.version))return!0;if(typeof e=="string")throw new Error("Invalid input of type string, please provide an object");return!1}static deserializeImage(e){let i={};return e.image&&(i.image={width:e.image.width,height:e.image.height,data:e.image.data?e.image.data.replace(k(),""):""},i.image.data=i.image.data?k()+i.image.data:""),i}deserializeTransformation(e){let i={},t=e.operations.find(s=>s.type==="orientation"),o=e.operations.find(s=>s.type==="transform"),[p]=this.editor.engine.getRootContainers();return this.previewPosition=this.editor.transformToolStore.defaultCropMaskPosition,this.previewSize=this.editor.transformToolStore.maxCropMaskSize,this.imageSpace=p,i.transform=n.initializeEmptyTransform(),t!=null&&(i.transform.outputRotation=t.options.rotation,i.transform.flipHorizontally=t.options.flipHorizontally||!1,i.transform.flipVertically=t.options.flipVertically||!1),o&&(i.transform.start=o.options.start,i.transform.end=o.options.end,i.transform.rotation=o.options.rotation||0,i.transform.identifier=o.options.meta?o.options.meta.identifier:""),i}deserialize(e){var p,s;let i={};(e.meta?!n.checkIfPlatformHTML(e.meta.platform):!1)&&console.warn("Read serialisation from another Platform");let t=this.editor.engineMediator.output.container.getResolution(),{size:o}=this.editor.engineMediator.image.container.getBounds();return this.outputSize=t,this.imageSize=o,this.cropSpace=this.editor.engine.getOutputContainer(),this.outputScale=this.cropSpace.getScale(),e.operations.forEach(d=>{switch(d.type){case"filter":i.filter=n.deserializeFilter(d.options);break;case"adjustments":i.adjustment=n.deserializeAdjustments(d.options);break;case"focus":i.focus=this.deserializeFocus(d.options);break;case"sprite":let{sprites:z}=d.options;z.forEach(a=>{switch(a.type){case"frame":i.frame=this.deserializeFrame(a.options);break;case"overlay":i.overlay=n.deserializeOverlay(a.options);break;case"brush":i.brush?i.brush.strokes.push(...this.deserializeBrush(a.options).strokes):i.brush=this.deserializeBrush(a.options);break;case"sticker":case"text":case"textdesign":i.sprite||(i.sprite={spriteIdList:[],sticker:{},text:{},textdesign:{},common:{}});let c=X();i.sprite.spriteIdList.push(c),i.sprite.common[c]={order:this.spriteOrder,position:this.mapRelativeCropPointToImageSpace(a.options.position),tool:h.STICKER,rotation:a.options.rotation||0,flipHorizontally:a.options.flipHorizontally,flipVertically:a.options.flipVertically},this.spriteOrder+=1,a.type===h.STICKER?(i.sprite.common[c].tool=h.STICKER,i.sprite.common[c].size={width:this.mapRelativeCropSizeToScaledImageSize(a.options.dimensions.x),height:this.mapRelativeCropSizeToScaledImageSize(a.options.dimensions.y)},i.sprite.sticker[c]=n.deserializeStickers(a.options)):a.type===h.TEXT?(i.sprite.common[c].tool=h.TEXT,i.sprite.text[c]=this.deserializeTexts(a.options)):a.type===h.TEXT_DESIGN&&(i.sprite.common[c].tool=h.TEXT_DESIGN,i.sprite.textdesign[c]=this.deserializeTextDesign(a.options));break;default:break}});break;default:break}}),e.assetLibrary&&(i.customStickers=((s=(p=e.assetLibrary)==null?void 0:p.assets)==null?void 0:s.stickers)||[]),i}deserializeFrame(e){return{identifier:e.identifier,opacity:e.alpha,width:this.mapRelativeCropSizeToUnscaledImageSize(e.size),color:n.deserialzeColor(e.tintColor)}}deserializeFocus(e){switch(e.type){case"linear":return{identifier:"linear",linear:this.deserializeLinearFocus(e.options)};case"gaussian":return{identifier:"gaussian",gaussian:this.deserializeGaussianFocus(e.options)};case"radial":return{identifier:"radial",radial:this.deserializeRadialFocus(e.options)};case"mirrored":return{identifier:"mirrored",mirrored:this.deserializeMirroredFocus(e.options)}}}deserializeRadialFocus(e){return{center:this.mapRelativeCropPointToImageSpace(e.start),radius:new S(this.mapRelativeCropPointToImageSpace(e.start)).subtract(new S(this.mapRelativeCropPointToImageSpace(e.end))).magnitude,blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeLinearFocus(e){return{start:this.mapRelativeCropPointToImageSpace(e.start),end:this.mapRelativeCropPointToImageSpace(e.end),blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeGaussianFocus(e){return{blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeMirroredFocus(e){let i=new S(this.mapRelativeCropPointToImageSpace(e.start)).subtract(new S(this.mapRelativeCropPointToImageSpace(e.end)));return{origin:new S(this.mapRelativeCropPointToImageSpace(e.start)).add(new S(this.mapRelativeCropPointToImageSpace(e.end))).divide(2),rotation:Math.atan2(i.y,i.x),size:this.mapRelativeCropSizeToScaledImageSize(e.size),blurRadius:this.mapRelativeCropSizeToScaledImageSize(e.blurRadius)}}deserializeTexts(e){return{identifier:$(e.fontIdentifier),fontSize:this.mapRelativeCropSizeToScaledImageSize(e.fontSize),width:this.mapRelativeCropSizeToScaledImageSize(e.maxWidth),alignment:e.alignment,textColor:n.deserialzeColor(e.color),backgroundColor:n.deserialzeColor(e.backgroundColor),lineHeight:e.lineHeight,text:e.text}}deserializeTextDesign(e){return{identifier:e.identifier,width:this.mapRelativeCropSizeToScaledImageSize(e.width),padding:this.mapRelativeCropSizeToScaledImageSize(e.padding),color:n.deserialzeColor(e.color),seed:e.seed,text:e.text,isInverted:e.inverted}}deserializeBrush(e){return{strokes:e.paths.map(i=>({path:{controlPoints:i.points.map(this.mapRelativeCropPointToImageSpace)},brush:{id:"imgly_brush_radial",color:n.deserialzeColor(i.brush.color),size:i.brush.size,hardness:i.brush.hardness}}))}}},T=n;T.version="3.9.0";export{T as Deserializer,O as Serializer};
