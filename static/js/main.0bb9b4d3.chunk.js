(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(20),a(2)),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FireGram"),r.a.createElement("h2",null,"Your Pictures"))},u=a(3),o=a(8),m=a.n(o),f=a(14),d=a(5);a(28),a(22);d.initializeApp({apiKey:"AIzaSyAb9YYXFLFY0JIx3oT8TQqN6uMNMJGb2u8",authDomain:"vtx-firegram.firebaseapp.com",databaseURL:"https://vtx-firegram.firebaseio.com",projectId:"vtx-firegram",storageBucket:"vtx-firegram.appspot.com",messagingSenderId:"535422989495",appId:"1:535422989495:web:82c403f5f4bafd0fdd0932"});var p=d.storage(),g=d.firestore(),b=d.firestore.FieldValue.serverTimestamp,v=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],o=s[1],d=Object(n.useState)(null),v=Object(i.a)(d,2),E=v[0],j=v[1];return Object(n.useEffect)((function(){var t=p.ref(e.name),a=g.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){o(e)}),Object(f.a)(m.a.mark((function e(){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:return n=e.sent,r=b(),e.next=6,a.add({url:n,createdAt:r});case 6:j(n);case 7:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:E,error:u}},E=function(e){var t=e.file,a=e.setFile,c=v(t),l=c.url,i=c.progress;return console.log(i,l),Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(u.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})},j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],o=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o("")):(c(null),o("Please select an image file (png or jpg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},u&&r.a.createElement("div",{className:"error"},u),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(E,{file:a,setFile:c})))},O=a(9),y=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=g.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},h=function(e){var t=e.setSelectedImg,a=y("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(u.a.div,{layout:!0,whileHover:{opacity:1},className:"img-wrap",key:e.id,onClick:function(){t(e.url)}},r.a.createElement(u.a.img,{src:e.url,alt:"image",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},S=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(u.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(u.a.img,{src:t,alt:"enlarged image",initial:{y:"-100vh"},animate:{y:"0"}}))};var I=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(j,null),r.a.createElement(h,{setSelectedImg:c}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0bb9b4d3.chunk.js.map