(this["webpackJsonpretro-app"]=this["webpackJsonpretro-app"]||[]).push([[0],{117:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r(0),c=r.n(a),i=r(11),o=r.n(i),s=r(14),l=r(158),j=r(10),d=r(155),u=r(156),p=r(157),b=r(29),m=r(154),h=r(172),O="production"===Object({NODE_ENV:"production",PUBLIC_URL:"/retro-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://retro-server-api.herokuapp.com/",REACT_APP_APP_NAME:"MEGA RETRO",REACT_APP_APP_URL:"abcc.com"}).REACT_APP_STAGE?{API_URL:"https://retro-server-api.herokuapp.com/",APP_NAME:"MEGA RETRO",APP_URL:"abcc.com"}:{API_URL:"http://localhost:3000",APP_NAME:"RETRO APP",APP_URL:"localhost"},x=function(){return Object(n.jsxs)(b.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(m.a,{color:"inherit",href:"https://material-ui.com/",children:O.APP_URL})," ",(new Date).getFullYear(),"."]})},f=Object(d.a)((function(e){return{footer:Object(j.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}})),g=[{title:"Company",description:["Team","History","Contact us","Locations"]},{title:"Features",description:["Cool stuff","Random feature","Team feature","Developer stuff","Another one"]},{title:"Resources",description:["Resource","Resource name","Another resource","Final resource"]},{title:"Legal",description:["Privacy policy","Terms of use"]}],v=function(){var e=f();return Object(n.jsxs)(u.a,{maxWidth:"md",component:"footer",className:e.footer,children:[Object(n.jsx)(p.a,{container:!0,spacing:4,justify:"space-evenly",children:g.map((function(e){return Object(n.jsxs)(p.a,{item:!0,xs:6,sm:3,children:[Object(n.jsx)(b.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,children:e.title}),Object(n.jsx)("ul",{children:e.description.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(m.a,{href:"#",variant:"subtitle1",color:"textSecondary",children:e})},e)}))})]},e.title)}))}),Object(n.jsx)(h.a,{mt:5,children:Object(n.jsx)(x,{})})]})},y=r(159),P=r(160),A=r(173),R=Object(d.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)}}})),_=function(e){var t=e.openForm,r=R();return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(l.a,{}),Object(n.jsx)(y.a,{position:"static",color:"default",elevation:0,className:r.appBar,children:Object(n.jsxs)(P.a,{className:r.toolbar,children:[Object(n.jsx)(b.a,{variant:"h6",color:"inherit",noWrap:!0,className:r.toolbarTitle,children:Object(n.jsx)(A.a,{href:"/",children:O.APP_NAME})}),Object(n.jsxs)("nav",{children:[Object(n.jsx)(A.a,{variant:"button",color:"textPrimary",href:"#",className:r.link,children:"HOME"}),Object(n.jsx)(A.a,{variant:"button",color:"textPrimary",className:r.link,onClick:function(){return t()},children:"NEW BOARD"})]}),Object(n.jsx)(A.a,{href:"#",color:"primary",variant:"outlined",className:r.link,children:"Login"})]})})]})},T=r(21),C=r.n(T),E=r(30),k=r(161),N=r(162),S=r(163),w=r(164),L=Object(d.a)((function(e){return{cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)}}})),B=function(e){var t=e.title,r=e.description,a=L();return Object(n.jsx)(p.a,{item:!0,xs:12,sm:"Enterprise"===t?12:6,md:4,children:Object(n.jsxs)(k.a,{children:[Object(n.jsx)(N.a,{title:t,titleTypographyProps:{align:"center"},subheaderTypographyProps:{align:"center"},className:a.cardHeader}),Object(n.jsx)(S.a,{children:Object(n.jsx)("ul",{children:r})}),Object(n.jsx)(w.a,{children:Object(n.jsx)(A.a,{fullWidth:!0,variant:"outlined",color:"primary",children:"Detail"})})]})},t)},I=r(66),F=r.n(I),M=r(67),U=r.n(M),W=F.a.create({baseURL:O.API_URL,headers:{"content-type":"application/json"},paramsSerializer:function(e){return U.a.stringify(e)}});W.interceptors.request.use((function(e){return e})),W.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var D=W,H={getAll:function(){var e=Object(E.a)(C.a.mark((function e(t){var r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/board",e.next=3,D.get("/board",{params:t});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},G={getAll:function(){var e=Object(E.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getAll();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},z=r(34),J=r(165),K=Object(d.a)((function(e){return{root:{textAlign:"center"},bottom:{color:e.palette.grey["light"===e.palette.type?200:700]},top:{position:"absolute",color:"#1a90ff",animationDuration:"550ms",left:0},circle:{strokeLinecap:"round",position:"relative"},case:{position:"relative"}}})),Y=function(e){var t=K();return Object(n.jsx)("div",{className:t.root,children:Object(n.jsxs)("span",{className:t.case,children:[Object(n.jsx)(J.a,Object(z.a)(Object(z.a)({variant:"determinate",className:t.bottom,size:40,thickness:4},e),{},{value:100})),Object(n.jsx)(J.a,Object(z.a)({variant:"indeterminate",disableShrink:!0,className:t.top,classes:{circle:t.circle},size:40,thickness:4},e))]})})},q=Object(d.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},heroContent:{padding:e.spacing(8,0,6)}}})),V=function(){var e=q(),t=Object(a.useState)([]),r=Object(s.a)(t,2),i=r[0],o=r[1];return Object(a.useEffect)((function(){console.log("Hello"),function(){var e=Object(E.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.getAll();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(u.a,{maxWidth:"sm",component:"main",className:e.heroContent,children:Object(n.jsx)(b.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"MY BOARD"})}),Object(n.jsx)(u.a,{maxWidth:"md",component:"main",children:Object(n.jsx)(p.a,{container:!0,spacing:5,alignItems:"flex-end",children:0===i.length?Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(Y,{})}):i.map((function(e){var t=e.title,r=e.description;return Object(n.jsx)(B,{title:t,description:r})}))})})]})},Q=r(171),X=r(175),Z=r(170),$=r(168),ee=r(169),te=r(167),re=r(166),ne=c.a.forwardRef((function(e,t){return Object(n.jsx)(re.a,Object(z.a)({direction:"up",ref:t},e))})),ae=function(e){var t=e.isOpen,r=e.clickClose;return Object(n.jsx)("div",{children:Object(n.jsxs)(X.a,{open:t,TransitionComponent:ne,keepMounted:!0,onClose:function(){return r()},"aria-labelledby":"form-dialog-title",children:[Object(n.jsx)(te.a,{id:"form-dialog-title",children:"Create New Board"}),Object(n.jsxs)($.a,{children:[Object(n.jsxs)(ee.a,{children:[Object(n.jsx)("i",{children:"\u201cI\u2019ve missed more than 9000 shots in my career. I\u2019ve lost almost 300 games. 26 times I\u2019ve been trusted to take the game winning shot and missed. I\u2019ve failed over and over and over again in my life. And that is why I succeed.\u201d"})," ","\u2013 ",Object(n.jsx)("b",{children:"Michael Jordan"})]}),Object(n.jsx)(Q.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name of newboard",type:"text",fullWidth:!0})]}),Object(n.jsxs)(Z.a,{children:[Object(n.jsx)(A.a,{onClick:function(){return r()},color:"primary",children:"Cancel"}),Object(n.jsx)(A.a,{onClick:function(){return r()},color:"primary",children:"Create"})]})]})})};var ce=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),r=t[0],i=t[1];return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(l.a,{}),r?Object(n.jsx)(ae,{isOpen:r,clickClose:function(){i(!1)}}):Object(n.jsx)(n.Fragment,{}),Object(n.jsx)(_,{openForm:function(){i(!0)}}),Object(n.jsx)(V,{}),Object(n.jsx)(v,{})]})};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ce,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.af100074.chunk.js.map