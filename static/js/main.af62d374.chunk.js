(this.webpackJsonpe2e=this.webpackJsonpe2e||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),r=n(11),s=n.n(r),o=n(57),i=n(55),l=n(10),u=(n(68),n(50)),p=n(78),d=n.n(p),j=n(79),h=n.n(j),b=n(80),g=n.n(b),m=n(81),O=n.n(m),f=n(82),v=n.n(f),x=n(83),y=n.n(x),w=n(84),k=n.n(w),N=n(61),S=function(e){var t=e.data.includes(".com/")?e.data.split(".com/")[1]:e.data;if(N.isAndroid){var n="intent://".concat(e.type,".com/").concat(t,"/#Intent;scheme=https;package=com.").concat(e.type,".android;end");window.location.replace(n)}else N.isIOS?(window.location.replace("".concat(e.type,"://user?username=").concat(t)),setTimeout((function(){window.location.replace("https://apps.apple.com/us/app/".concat(e.type,"/").concat(_[e.type]))}),1e3)):window.open("https://".concat(e.type,".com/").concat(t,"/"))},_={instagram:"id389801252"};function I(e){var t=e.link,n=S;switch(t.type){case"whatsapp":return Object(a.jsx)("div",{className:"".concat(t.type,"-link"),children:Object(a.jsx)(d.a,{})});case"phone":return Object(a.jsx)("div",{className:"".concat(t.type,"-link"),children:Object(a.jsx)(h.a,{})});case"mail":return Object(a.jsx)("div",{className:"".concat(t.type,"-link"),children:Object(a.jsx)(g.a,{})});case"facebook":return Object(a.jsx)("div",{onClick:function(){return n(t)},className:"".concat(t.type,"-link"),children:Object(a.jsx)(O.a,{})});case"instagram":return Object(a.jsx)("div",{onClick:function(){return n(t)},className:"".concat(t.type,"-link"),children:Object(a.jsx)(v.a,{})});case"twitter":return Object(a.jsx)("div",{className:"".concat(t.type,"-link"),children:Object(a.jsx)(y.a,{})});case"linkedin":return Object(a.jsx)("div",{className:"".concat(t.type,"-link"),children:Object(a.jsx)(k.a,{})});default:return null}}var U={getById:function(e){return T}},T={style:{},data:{firstName:"nadav",lastName:"cohen",description:"bla bla",cover:"https://scontent.fsdv1-2.fna.fbcdn.net/v/t31.18172-1/p200x200/26024051_1818285081539034_3774082411493373660_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Z3K1o2B1qbcAX9RyPdT&_nc_ht=scontent.fsdv1-2.fna&tp=6&oh=37466c071b0b8ddafef67e7671af824e&oe=60D2C57D",links:[{type:"phone",data:"0533034303"},{type:"facebook",data:"https://www.facebook.com/nadav.cohen.792"},{type:"instagram",data:"https://www.instagram.com/nadav__co"},{type:"mail",data:"nadav1999@gmail.com"}]}};function C(){var e=Object(l.g)(),t=Object(c.useState)(null),n=Object(u.a)(t,2),r=n[0],s=n[1];if(Object(c.useEffect)((function(){s(U.getById(e))}),[e]),!r)return Object(a.jsx)("h1",{children:"Loading"});var o=r.data,i=o.logo,p=o.cover,d=o.description,j=o.firstName,h=o.lastName;return Object(a.jsxs)("main",{className:"card-details",children:[Object(a.jsx)("img",{src:p,className:"cover",alt:""}),i?Object(a.jsx)("img",{src:i,className:"logo",alt:""}):Object(a.jsx)("h1",{className:"name",children:"".concat(j," ").concat(h)}),Object(a.jsx)("p",{className:"description",children:d}),Object(a.jsx)("div",{className:"links",children:r.data.links.map((function(e){return Object(a.jsx)(I,{link:e},Math.random())}))})]})}function L(){return Object(a.jsxs)("section",{className:"home-page",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Task Management Have Never Been Easier"})}),Object(a.jsx)(i.b,{to:"/card/edit",children:"Let's Start!"})]})}var E=n(12),D=n.n(E),J=n(18),B=n(56),P=n(35),F=n(178),G=n(171),W=n(169),M=n(174),q=n(170),A=n(177),R=n(173),X=n(172),H=n(176),V=n(86),K=n.n(V),Z=n(89),z=n(168),Q=n(85),Y="/api",$=n.n(Q).a.create({withCredentials:!0}),ee=function(e,t){return ne(e,"GET",t)},te=function(e,t){return ne(e,"POST",t)};function ne(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(J.a)(D.a.mark((function e(t){var n,a,c,r=arguments;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"GET",a=r.length>2&&void 0!==r[2]?r[2]:null,e.prev=2,e.next=5,$({url:"".concat(Y).concat(t),method:n,data:a});case 5:return c=e.sent,e.abrupt("return",c.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(JSON.stringify(a,"",2))),console.dir(e.t0),e.t0.response&&401===e.t0.response.status&&window.location.assign("/#/login"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var ce={signup:function(e){return re.apply(this,arguments)},loggin:function(e){return se.apply(this,arguments)},logout:function(){return oe.apply(this,arguments)},getUsers:function(){return ie.apply(this,arguments)},getUser:function(e){return le.apply(this,arguments)}};function re(){return(re=Object(J.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te("/auth/signup",t);case 3:return(n=e.sent)&&localStorage.setItem("loggedUser",JSON.stringify(n)),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function se(){return(se=Object(J.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te("/auth/login",t);case 3:return n=e.sent,t.isStayLogged&&localStorage.setItem("loggedUser",JSON.stringify(n)),sessionStorage.setItem("loggedUser",JSON.stringify(n)),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function oe(){return(oe=Object(J.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te("/auth/logout");case 3:localStorage.removeItem("loggedUser"),sessionStorage.removeItem("loggedUser"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ie(){return(ie=Object(J.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("/user");case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function le(){return(le=Object(J.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee("/user/"+t);case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function ue(e){return function(){var t=Object(J.a)(D.a.mark((function t(n){var a;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ce.loggin(e);case 3:return a=t.sent,n({type:"LOGIN",user:a}),t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}function pe(e){var t=Object(o.b)(),n=Object(l.f)(),r=Object(c.useState)({username:"",password:"",isStayLogged:!1}),s=Object(u.a)(r,2),i=s[0],p=s[1],d=Object(c.useState)(""),j=Object(u.a)(d,2),h=j[0],b=j[1],g=function(e){var t=e.target,n=t.name,a=t.value,c=t.type,r=t.checked,s="checkbox"!==c?a:r;p(Object(P.a)(Object(P.a)({},i),{},Object(B.a)({},n,s)))},m=function(){var e=Object(J.a)(D.a.mark((function e(a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),b(""),e.next=4,t(ue(i));case 4:e.sent?n.push("/"):b("Wrong username or password!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(z.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(W.a,{}),Object(a.jsxs)("div",{style:{marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(a.jsx)(F.a,{style:{margin:"10px",backgroundColor:"blue"},children:Object(a.jsx)(K.a,{})}),Object(a.jsx)(Z.a,{component:"h2",variant:"h5",children:"Sign in"}),Object(a.jsxs)("form",{onSubmit:m,style:{width:"100%",marginTop:"5px"},noValidate:!0,children:[Object(a.jsx)(M.a,{onChange:g,variant:"filled",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"UserName",name:"username",autoFocus:!0}),Object(a.jsx)(M.a,{onChange:g,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(a.jsx)(q.a,{control:Object(a.jsx)(A.a,{name:"isStayLogged",onChange:g,color:"primary"}),label:"Remember me"}),Object(a.jsx)("p",{style:{color:"red"},children:h}),Object(a.jsx)(G.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",style:{marginTop:"10px"},children:"Sign In"}),Object(a.jsx)(X.a,{container:!0,children:Object(a.jsx)(X.a,{item:!0,children:Object(a.jsx)(R.a,{href:"#/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),Object(a.jsx)(H.a,{mt:8})]})}function de(){return Object(a.jsx)("div",{className:"App main-layout",children:Object(a.jsx)(i.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/card/edit",component:L}),Object(a.jsx)(l.a,{path:"/card/:id",component:C}),Object(a.jsx)(l.a,{path:"/login",component:pe}),Object(a.jsx)(l.a,{path:"/",component:L})]})})})}var je=n(34),he=n(87),be={loggedUser:JSON.parse(sessionStorage.getItem("loggedUser"))||JSON.parse(localStorage.getItem("loggedUser"))};var ge=Object(je.c)({userModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(P.a)(Object(P.a)({},e),{},{loggedUser:t.user});case"LOGOUT":return Object(P.a)(Object(P.a)({},e),{},{loggedUser:null});default:return e}}}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,Oe=Object(je.e)(ge,me(Object(je.a)(he.a))),fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,181)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(o.a,{store:Oe,children:Object(a.jsx)(de,{})}),document.getElementById("root")),fe()},68:function(e,t,n){}},[[130,1,2]]]);
//# sourceMappingURL=main.af62d374.chunk.js.map