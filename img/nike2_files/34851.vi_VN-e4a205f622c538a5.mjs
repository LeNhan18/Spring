"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[34851,93810],{471125:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});let i={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"skipUnauthFragment"}],kind:"Fragment",metadata:null,name:"StructuredFeedStoryModule_story",selections:[{alias:null,args:null,concreteType:"StoryAction",kind:"LinkedField",name:"action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"location",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"containerType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"contentIds",storageKey:null},{alias:null,args:null,concreteType:"StoryDisplayOptions",kind:"LinkedField",name:"displayOptions",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryContentDisplay",kind:"LinkedField",name:"contentDisplay",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"componentType",storageKey:null}],storageKey:null}],storageKey:null},{alias:"storyId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyType",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"trackingParams",storageKey:null},{args:[{kind:"Variable",name:"skipUnauthFragment",variableName:"skipUnauthFragment"}],kind:"FragmentSpread",name:"CarouselModule_story"},{args:null,kind:"FragmentSpread",name:"HeaderModule_story"}],type:"Story",abstractKey:null};i.hash="058a61f5e0b72dbde337960de273d6a5";let r=i},589410:(e,t,n)=>{n.d(t,{i:()=>l});var i=n(883119),r=n(213377),a=n(785893);function o(){return(0,a.jsx)(i.xu,{width:r.yF})}function l(e){return Array(e).fill().map((e,t)=>(0,a.jsx)(o,{},t))}},155161:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(883119),r=n(201526),a=n(785893);let o=new Map([["pin",4],["explorearticle",2]]);function l({children:e,itemType:t,overrideMargin:n}){return(0,a.jsx)(i.xu,{marginBottom:n||o.get(t)||r.mT,children:e})}},734851:(e,t,n)=>{n.r(t),n.d(t,{default:()=>J}),n(167912);var i,r=n(883119),a=n(54977),o=n(666472),l=n(106581),s=n(263071),d=n(213377),c=n(536793),u=n(780510),p=n(359177),y=n(201526),m=n(266794),g=n(785893);let h=()=>(0,g.jsx)(r.xu,{color:"secondary",height:d.yF,width:d.yF}),x={1:{itemRep:u.Z,deprecatedActionShape:"square",deprecatedGetActionImage:e=>e.images?.orig?.url||""},4:{itemRep:c.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.images?.orig?.url||""},2:{itemRep:p.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.image_large_url}};function j({auxData:e,componentFallback:t,showExpanded:n=!0,story:i,view:a,viewParameter:o}){let l=(x[(i.display_options?.content_display||{}).model_type]||y.g5).itemRep||h,s=i.display_options?.content_display?.component_type??t;return(0,g.jsx)(r.xu,{marginBottom:2,children:(0,g.jsxs)(r.kC,{alignItems:"stretch",direction:"column",justifyContent:"center",children:[i.title&&(0,g.jsx)(m.Z,{showExpanded:n,storyKey:{type:"deprecated",data:i}}),(0,g.jsx)(r.kC,{gap:2,justifyContent:"center",wrap:!0,children:i.objects?.map(function(t,n){return(0,g.jsx)(l,{auxData:e,component:s,imagePlaceholderColor:"rgba(0, 0, 0, 0)",index:n,item:t,story:i,view:a,viewParameter:o},n)})})]})})}var f=n(667294),_=n(401111),w=n(340523),v=n(269842),I=n(589410),k=n(155161),b=n(451562),S=n(70903),C=n(554786);let F="rgba(0, 0, 0, 0)",T=()=>(0,g.jsx)(r.xu,{color:"secondary",height:d.yF,width:d.yF}),A={1:{itemRep:u.Z,deprecatedActionShape:"square",deprecatedGetActionImage:e=>e.images?.orig?.url||""},4:{itemRep:c.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.images?.orig?.url||""},2:{itemRep:p.Z,deprecatedActionShape:"circle",deprecatedGetActionImage:e=>e.image_large_url}};function Z({auxData:e,componentFallback:t,dangerouslySetActionUrl:n,dangerouslySetContentVisibleItemCount:i,disableHeader:a,dynamicItemWidth:o,gutterWidth:l,initialSlotIndex:s=0,showExpanded:c,story:u,surface:p,view:h,viewParameter:x,width:j}){let Z=(0,C.HG)(),{checkExperiment:D}=(0,w.F)(),K=u.display_options?.content_display||{},P=A[K.model_type]||y.g5,E=P.itemRep||T,{action:L}=u,R=n||u.action?.url||"",W=u.display_options?.content_display?.component_type??t,G=K.grid_layout?.rows,z="number"==typeof G?G:1,M=K.grid_layout?.cols,N="number"==typeof M?M:-1,B=-1===N,O=Z&&u.story_type?.includes("related_searches")&&2===N&&D("dweb_search_related_searches_2col").anyEnabled,H=i??K.content_visible_item_count?.web,U=H&&j&&o?(0,d.Wv)({contentVisibleItemCount:H,gap:l??d.oX,isDesktop:Z,moduleWidth:"number"==typeof j?j:parseInt(j,10)}):d.yF,{containerRef:X,itemsToRender:q,actionItem:Y}=(0,S.n)({items:u.objects||[],itemWidth:(0,b.Z)()?d.tG:U,itemGap:l??d.oX,actionItemType:L?"one":void 0,numRows:z}),V=Y&&P.deprecatedGetActionImage?P.deprecatedGetActionImage(Y):void 0,J=B?q:u.objects||[],{anyEnabled:Q,experimentalGutterBoints:$}=(0,_.Z)(),ee=J.map((t,n)=>(0,g.jsx)(k.Z,{itemType:"string"==typeof t.type?t.type:null,overrideMargin:O?3:void 0,children:(0,g.jsx)(E,{auxData:e,component:W,imagePlaceholderColor:F,imageWidth:U,index:n,item:t,slotIndex:s+n,story:u,surface:p,view:h,viewParameter:x})},n)),et=!!R&&!!L?.text&&V&&(0,g.jsx)(v.Z,{auxData:e,buttonText:L.text,component:W,contentIds:u.content_ids,element:179,imageWidth:U,previewImageSrc:V,shape:P.deprecatedActionShape,storyId:u.id,storyType:u.story_type,url:R,view:h,viewParameter:x});return(0,g.jsxs)(r.xu,{alignItems:"stretch",borderStyle:O?"sm":void 0,color:"default",dangerouslySetInlineStyle:{__style:{paddingBottom:O?4:void 0}},direction:"column",display:"flex",justifyContent:"start",marginBottom:O?2:void 0,padding:O?4:void 0,rounding:O?4:void 0,children:[(0,g.jsx)(r.xu,{marginStart:O&&2||O&&1||void 0,children:u.title&&!a&&(0,g.jsx)(m.Z,{showExpanded:c,storyKey:{type:"deprecated",data:u}})}),B?(0,g.jsxs)(S.Z,{containerRef:X,itemGap:l??d.oX,numRows:z,rowAlignment:"center",children:[ee,et,z>1&&(0,I.i)(12)]}):(0,g.jsxs)(f.Fragment,{children:[N>1?Array(z).fill(null).map((e,t)=>(0,g.jsx)(r.kC,{alignItems:"stretch",gap:$??(O&&3||(Z?d.jC:d.D6)),justifyContent:"start",width:Q?"100%":void 0,wrap:N<=1,children:N>0&&Array(N).fill(null).map((e,n)=>{let i=ee[t*N+n];return Q?(0,g.jsx)(r.kC.Item,{flex:"grow",children:i}):i})},J[t].id)):(0,g.jsx)(r.kC,{direction:"column",children:ee}),et]})]})}function D({auxData:e,componentFallback:t,showExpanded:n=!0,story:i,view:a,viewParameter:o}){let l=(A[(i.display_options?.content_display||{}).model_type]||y.g5).itemRep||T,s=i.display_options?.content_display?.component_type??t,c=(0,b.Z)()?d.tG:d.yF;return(0,g.jsxs)(r.kC,{alignItems:"stretch",direction:"column",justifyContent:"start",children:[i.title&&(0,g.jsx)(m.Z,{showExpanded:n,storyKey:{type:"deprecated",data:i}}),(0,g.jsx)(r.Rk,{columnWidth:c,gutterWidth:d.oX,items:i.objects||[],layout:"flexible",renderItem:({data:t,itemIdx:n})=>(0,g.jsx)(l,{auxData:e,component:s,imagePlaceholderColor:F,index:n,item:t,story:i,view:a,viewParameter:o},n)})]})}function K(e){switch(e.story.display_options?.content_display?.pins_display){case 3:case 1:return(0,g.jsx)(D,{...e});default:return(0,g.jsx)(Z,{...e})}}var P=n(207229),E=n(616550),L=n(214877),R=n(205841),W=n(140017),G=n(546213);let z=({actionText:e,actionUrl:t,articleId:n,author:i,authorAvatar:a,auxData:l,component:s,contentIds:d,coverImage:c,debug:u,index:p,isFullWidth:y=!1,onImageLoad:m,storyId:h,storyType:x,subtitle:j,title:_,view:w,viewParameter:v,width:I,windowWidth:k})=>{let b=(0,W.ZP)(),S=(0,E.k6)(),{logContextEvent:C}=(0,L.v)(),[F,T]=(0,f.useState)(!1),A=(0,o.Z)({loggingId:n,objectIdStr:n,impressionType:"Article",contextLogData:{content_ids:d,story_id:h,story_type:x,article_id:n,...l},slotIndex:p,viewParameter:v,viewType:w,componentType:s});return(0,g.jsx)(r.xu,{"data-test-id":"sf-hero",children:(0,g.jsxs)(r.xu,{ref:A,height:"auto",onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),width:I,children:[(0,g.jsx)(r.iP,{onTap:()=>{C({event_type:101,view_type:w,view_parameter:v,component:s,aux_data:{article_id:n,content_ids:d,story_id:h,story_type:x,...l}}),S.push(t)},children:(0,g.jsxs)(r.xu,{height:y?400:"35vw",maxHeight:500,overflow:"hidden",position:"relative",children:[(0,g.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{transition:"transform 0.4s",transform:F?"scale(1.5)":"scale(1)"}},height:"100%",width:"100%",children:(0,g.jsx)(r.Ee,{alt:b.bt("Ảnh bìa của spotlight mua sắm này", "Cover image of this shopping spotlight", "hero.heroCoverImage", undefined, true),color:"#fff",fit:"cover",naturalHeight:400,naturalWidth:400,onLoad:m,src:c,children:(0,g.jsx)(r.xu,{color:"transparentDarkGray",display:"block",height:"100%",opacity:.3,width:"100%"})})}),(0,g.jsx)(r.xu,{bottom:!0,marginBottom:y?12:0,padding:6,position:"absolute",width:"100%",children:(0,g.jsxs)(r.kC,{direction:"column",height:"100%",justifyContent:"end",children:[(0,g.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{transition:"transform 0.4s",transform:F?"translateY(-20px)":"translateY(20px)"}},children:(0,g.jsx)(r.X6,{color:"light",size:k<=822?"600":k<1e3?"400":k<1100?"500":"600",children:_})}),(0,g.jsxs)(r.xu,{dangerouslySetInlineStyle:{__style:{opacity:F?1:0,transition:F?"opacity 0.4s ease-in":"opacity 0.4s ease-out"}},display:"block",height:F?"auto":20,overflow:"hidden",children:[(0,g.jsx)(r.xv,{color:"inverse",children:j}),i&&(0,g.jsx)(r.xu,{marginTop:4,children:(0,g.jsxs)(r.kC,{alignItems:"center",direction:"row",children:[(0,g.jsx)(R.qE,{name:i,size:"md",src:a})," ",(0,g.jsx)(r.xv,{color:"inverse",children:i})]})})]}),(0,g.jsx)(r.xu,{marginTop:4,width:"74px",children:(0,g.jsx)(r.zx,{color:"white",onClick:()=>{S.push(t)},size:"lg",text:e})})]})})]})}),void 0!==u&&(0,g.jsx)(G.ZP,{data:u})]})})};var M=n(134447),N=n(419128),B=n(737754);function O({auxData:e,onImageLoad:t,story:n,view:i,viewParameter:a,component:o,width:l}){let[s,d]=(0,f.useState)(0),c=(0,f.useRef)(null),u=n.objects?.slice(0,3)||[];return(0,g.jsxs)(r.xu,{ref:c,alignItems:"end",display:"flex",height:400,justifyContent:"center",position:"relative",width:l,children:[(0,g.jsx)(M.Z,{containerRef:c,id:n.id,index:s,slideWidth:l,children:u.map((r,s)=>(0,g.jsx)(z,{actionText:r.action?.text||"",actionUrl:r.action?.url||"",articleId:r.id,auxData:e,component:o,coverImage:r.cover_images&&r.cover_images[0].originals?.url||"",debug:r.debug,index:s,isFullWidth:!0,onImageLoad:t,storyId:n.id,storyType:n.story_type,subtitle:r.subtitle?.format||"",title:r.title?.format||"",view:i,viewParameter:a,width:l,windowWidth:l},r.id))}),(0,g.jsx)(r.xu,{display:"inlineBlock",height:"auto",paddingY:5,position:"absolute",width:"60%",children:(0,g.jsx)(N.default,{addEllipsis:!0,backNode:(0,g.jsx)(B.Z,{iconColor:"inverse",iconType:"back",showFab:!0}),carouselData:{index:s,entityId:"",carouselSlots:u.map(e=>({id:e.id,title:null}))},carouselIndex:s,forwardNode:(0,g.jsx)(B.Z,{iconColor:"inverse",iconType:"forward",showFab:!0}),handleCarouselSwipe:e=>{d(e)},pinKey:null})})]})}function H({auxData:e,component:t,onImageLoad:n,story:i,view:a,viewParameter:o,windowWidth:l}){let s=i.objects?.slice(0,3)||[];return(0,g.jsxs)(f.Fragment,{children:[(0,g.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:s[0].dominant_colors[0]}},flex:"grow"}),s.map((r,s)=>(0,g.jsx)(z,{actionText:r.action?.text||"",actionUrl:r.action?.url||"",articleId:r.id,auxData:e,component:t,coverImage:r.cover_images&&r.cover_images[0].originals?.url||"",debug:r.debug,index:s,onImageLoad:n,storyId:i.id,storyType:i.story_type,subtitle:r.subtitle?.format||"",title:r.title?.format||"",view:a,viewParameter:o,width:500,windowWidth:l},r.id)),(0,g.jsx)(r.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:s[2].dominant_colors[0]}},flex:"grow"})]})}function U({auxData:e,component:t,pwtSurfaceContext:n,story:i,view:a,viewParameter:o}){let{width:l}=(0,P.Z)()||{},s=()=>{n&&n.markConstraintComplete("RenderHeroImages")},d=!l||l>822?3:1;return(0,g.jsx)(f.Fragment,{children:(0,g.jsx)(r.kC,{alignItems:"stretch",direction:"row",justifyContent:"start",width:l,children:3===d?(0,g.jsx)(H,{auxData:e,component:t,onImageLoad:s,story:i,view:a,viewParameter:o,windowWidth:l}):(0,g.jsx)(O,{auxData:e,component:t,onImageLoad:s,story:i,view:a,viewParameter:o,width:l})})})}function X({story:e}){let t=(0,E.k6)(),{user:n,custom_properties:i,action:a}=e||{},{full_name:o,username:l,image_medium_url:s}=n||{},c=o||e.title?.format||"",{url:u,text:p}=a||{},{image:y}=i||{};if(!u||!p)return null;let m=(0,g.jsxs)(r.xu,{alignItems:"center",color:"transparentDarkGray",display:"flex",height:"100%",justifyContent:"center",padding:2,position:"relative",children:[l&&s&&(0,g.jsx)(r.xu,{left:!0,padding:2,position:"absolute",top:!0,children:(0,g.jsx)(R.qE,{name:l,size:"sm",src:s})}),c&&(0,g.jsx)(r.xv,{color:"inverse",weight:"bold",children:c})]});return(0,g.jsxs)(r.xu,{marginBottom:4,width:d.yF,children:[(0,g.jsx)(r.iP,{onTap:()=>t.push(u),children:(0,g.jsx)(r.zd,{height:d.yF,rounding:2,wash:!0,children:"string"==typeof y&&y?(0,g.jsx)(r.Ee,{alt:c,fit:"contain",naturalHeight:d.yF,naturalWidth:d.yF,src:y,children:m}):(0,g.jsx)(r.xu,{height:d.yF,width:d.yF,children:m})})}),(0,g.jsx)(r.xu,{marginTop:3,children:(0,g.jsx)(r.ZP,{fullWidth:!0,href:u,text:p})})]})}let q=new Set([101]),Y="UNKNOWN_CONTAINER_TYPE",V=void 0!==i?i:i=n(471125);function J(e){var t;let{auxData:n,componentFallback:i,initialSlotIndex:d,view:c,viewParameter:u,width:p}=e,{story:y,storyKey:h,...x}=e,f=(0,a.Z)(V,h),_=f?.displayOptions?.contentDisplay?.componentType??i,w={...x,component:_},v=(0,o.Z)({clientTrackingParams:f?.trackingParams,componentType:_,contextLogData:{story_id:f?.storyId,story_type:f?.storyType,content_ids:f?.contentIds,...n},impressionType:"Story",loggingId:f?.storyId,slotIndex:d||0,viewParameter:u,viewType:c}),I=(()=>{switch(f?.containerType){case 90:return(0,g.jsx)(l.default,{...w,story:y,storyKey:f,width:"number"==typeof p?p:void 0});case 88:return(0,g.jsx)(m.Z,{...w,storyKey:f});case 89:let{location:e,text:t,url:n}=f?.action||{};return(0,g.jsx)(s.Z,{location:e,text:t,url:n});case 91:return!!y&&(0,g.jsx)(K,{...w,story:y});case 101:return!!y&&(0,g.jsx)(U,{...w,story:y});case 92:return!!y&&(0,g.jsx)(X,{...w,story:y});case 131:return!!y&&(0,g.jsx)(j,{...w,story:y});default:return Y}})();return I===Y?null:(0,g.jsxs)(r.xu,{ref:v,width:(t=f?.containerType,q.has(t))?void 0:p,children:[I,(0,g.jsx)(r.xu,{})]})}},70903:(e,t,n)=>{n.d(t,{Z:()=>s,n:()=>o});var i=n(883119),r=n(667294),a=n(785893);function o({items:e,itemWidth:t,itemGap:n,numRows:i=1,actionItemType:a}){let o;let[l,s]=function(){let[e,t]=(0,r.useState)(0),n=(0,r.useRef)(null),i=(0,r.useCallback)(()=>{n.current&&t(n.current.clientWidth)},[n]);return(0,r.useEffect)(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[i]),(0,r.useEffect)(i),[e,n]}(),d=Math.floor((l+n)/(t+n))*i||i,c=e.slice(0,d),u=[];switch(a){case"nextFour":d>=e.length?u=[c.pop()]:(c.pop(),u=e.slice(d-1,d+3));break;case"one":o=d>e.length?e[Math.floor(e.length/2)]:c.pop()}return{containerRef:s,itemsToRender:c,actionItem:o,nextFourItems:u}}let l={center:{outer:"center",inner:"center"},left:{outer:"start",inner:"start"},right:{outer:"end",inner:"end"}};function s({children:e,itemGap:t,containerRef:n,numRows:r=1,rowAlignment:o="center"}){let s=l[o];return(0,a.jsx)(i.xu,{ref:n,width:"100%",children:(0,a.jsx)(i.kC,{alignItems:"center",justifyContent:s.outer,children:(0,a.jsx)(i.kC,{gap:{row:Math.floor(t/4),column:0},justifyContent:s.inner,wrap:r>1,children:e})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/34851.vi_VN-e4a205f622c538a5.mjs.map