(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[0],{65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},74:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(20),i=a.n(n),r=(a(65),a(66),a(40)),j=a.n(r),o=(a(67),a(3));var d=function(e){var t=e.active,a=e.text,s=e.Icon;return Object(o.jsxs)("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),children:[Object(o.jsx)(s,{}),Object(o.jsx)("h2",{children:a})]})},l=a(45),b=a.n(l),x=a(35),u=a.n(x),p=a(46),m=a.n(p),O=a(47),h=a.n(O),f=a(48),v=a.n(f),_=a(49),g=a.n(_),N=a(50),w=a.n(N),I=a(51),y=a.n(I),S=a(98);var B=function(){return Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)(j.a,{className:"sidebar__twitterIcon"}),Object(o.jsx)(d,{active:!0,Icon:b.a,text:"Home"}),Object(o.jsx)(d,{Icon:u.a,text:"Explore"}),Object(o.jsx)(d,{Icon:m.a,text:"Notifications"}),Object(o.jsx)(d,{Icon:h.a,text:"Messages"}),Object(o.jsx)(d,{Icon:v.a,text:"Bookmarks"}),Object(o.jsx)(d,{Icon:g.a,text:"Lists"}),Object(o.jsx)(d,{Icon:w.a,text:"Profile"}),Object(o.jsx)(d,{Icon:y.a,text:"More"}),Object(o.jsx)(S.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0,children:"Tweet"})]})},k=a(23),C=(a(74),a(99)),A=a(58).a.initializeApp({apiKey:"AIzaSyAaZeDAlN1CQJ32LAO9AYd0Et7aRw35b2M",authDomain:"tweet-72b98.firebaseapp.com",projectId:"tweet-72b98",storageBucket:"tweet-72b98.appspot.com",messagingSenderId:"579720875587",appId:"1:579720875587:web:697f613621ef96920e0ef6",measurementId:"G-MW16JX4KVV"}).firestore();var D=function(){var e=Object(s.useState)(""),t=Object(k.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(k.a)(n,2),r=i[0],j=i[1];return Object(o.jsx)("div",{className:"tweetBox",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"tweetBox_input",children:[Object(o.jsx)(C.a,{src:"https://media-exp1.licdn.com/dms/image/C4D03AQG6XBdiWWOUZw/profile-displayphoto-shrink_400_400/0/1616661630170?e=1628121600&v=beta&t=YqamYq6gviGXL-VQrRLQOUsjuwuJ9mr0GcRXpy58DgM"}),Object(o.jsx)("input",{className:"tweetBox_input",onChange:function(e){return c(e.target.value)},value:a,placeholder:"What's happening?",type:"text"})]}),Object(o.jsx)("input",{className:"tweetBox_inputImage",value:r,onChange:function(e){return j(e.target.value)},placeholder:"Enter image URL",type:"text"}),Object(o.jsx)(S.a,{onClick:function(e){e.preventDefault(),A.collection("test").add({displayName:"Anushka B",username:"anushkaaaaa",verified:!0,text:a,image:r,avatar:"https://media-exp1.licdn.com/dms/image/C4D03AQG6XBdiWWOUZw/profile-displayphoto-shrink_400_400/0/1616661630170?e=1628121600&v=beta&t=YqamYq6gviGXL-VQrRLQOUsjuwuJ9mr0GcRXpy58DgM"}),c(""),j("")},type:"submit",className:"tweetBox__tweetButton",children:"Tweet"})]})})},L=(a(79),a(52)),W=a.n(L),G=a(53),M=a.n(G),Q=a(54),R=a.n(Q),X=a(55),z=a.n(X),J=a(56),T=a.n(J),E=Object(s.forwardRef)((function(e,t){var a=e.displayName,s=e.username,c=(e.verified,e.text),n=e.image,i=e.avatar;return Object(o.jsxs)("div",{className:"post",ref:t,children:[Object(o.jsx)("div",{className:"post__avatar",children:Object(o.jsx)(C.a,{src:i})}),Object(o.jsxs)("div",{className:"post__body",children:[Object(o.jsxs)("div",{className:"post__header",children:[Object(o.jsx)("div",{className:"post__headerText",children:Object(o.jsxs)("h3",{children:[a," ",Object(o.jsxs)("span",{className:"post__headerSpecial",children:[Object(o.jsx)(W.a,{className:"post__badge"})," @",s]})]})}),Object(o.jsx)("div",{className:"post__headerDescription",children:Object(o.jsxs)("p",{children:[c," "]})})]}),Object(o.jsx)("img",{src:n,alt:""}),Object(o.jsxs)("div",{className:"post__footer",children:[Object(o.jsx)(M.a,{fontSize:"small"}),Object(o.jsx)(R.a,{fontSize:"small"}),Object(o.jsx)(z.a,{fontSize:"small"}),Object(o.jsx)(T.a,{fontSize:"small"})]})]})]})})),U=(a(80),a(57));var Y=function(){var e=Object(s.useState)([]),t=Object(k.a)(e,2),a=t[0],c=t[1];return Object(s.useEffect)((function(){A.collection("test").onSnapshot((function(e){return c(e.docs.map((function(e){return e.data()})))}))}),[]),Object(o.jsxs)("div",{className:"feed",children:[Object(o.jsx)("div",{className:"feed__header",children:Object(o.jsx)("h2",{children:"Home"})}),Object(o.jsx)(D,{}),Object(o.jsx)(U.a,{children:a.map((function(e){return Object(o.jsx)(E,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image},e.text)}))})]})};a(81);var q=function(){return Object(o.jsxs)("div",{className:"widgets",children:[Object(o.jsxs)("div",{className:"widgets__input",children:[Object(o.jsx)(u.a,{className:"widgets__searchIcon"}),Object(o.jsx)("input",{placeholder:"Search Twitter",type:"text"})]}),Object(o.jsx)("div",{className:"widgets__widgetContainer",children:Object(o.jsx)("h2",{children:"What's happening"})})]})};a(82);var F=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(B,{}),Object(o.jsx)(Y,{}),Object(o.jsx)(q,{})]})},V=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,100)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),V()}},[[84,1,2]]]);
//# sourceMappingURL=main.76325bb5.chunk.js.map