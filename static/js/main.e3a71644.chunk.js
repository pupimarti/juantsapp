(this.webpackJsonpjuantsapp=this.webpackJsonpjuantsapp||[]).push([[0],[,,,function(e,a,t){e.exports=t.p+"static/media/check.3dc8183f.svg"},function(e,a,t){e.exports=t.p+"static/media/search.11a139fb.svg"},function(e){e.exports=JSON.parse('[{"user":"default","name":"Default","picture":"https://scontent-mrs2-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-mrs2-2.cdninstagram.com&_nc_ohc=Jf9Z_lzbyhIAX8Goisq&oh=a40f9aed80ddfc70f97243fbb84d4611&oe=5EE4368F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2","desc":"Usuario creado por default.","contacts":["leomessi","thisisbillgates","pupi_marti","samantha"]},{"user":"leomessi","name":"Leonel Messi","picture":"https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_ohc=6db8qi4phwQAX-MThZZ&oh=b506e9a72d15d64ff278666f9e5eb296&oe=5EDFBD8A","desc":"Disponible"},{"user":"thisisbillgates","name":"Bill Gates","picture":"https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/23421109_395975004156731_7495220206470430720_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_ohc=Ie9qVJBNveQAX9eLkGT&oh=f527226d23f8a5455db2b4bed6e81404&oe=5EDF254A","desc":"Disponible"},{"user":"pupi_marti","name":"Juan Mart\xed","picture":"https://media-exp1.licdn.com/dms/image/C5603AQFVcVFUn_cNnQ/profile-displayphoto-shrink_200_200/0?e=1595462400&v=beta&t=3hBMjZ8Pnxe3MlvCbb8QPm_zs8S6I4S5hxVi0P8p_S4","desc":"Disponible"},{"user":"samantha","name":"Samantha Jhonson","picture":"https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg","desc":"Disponible"},{"user":"martin_senz","name":"Martin Senz","picture":"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","desc":"Disponible"}]')},,,,function(e,a,t){e.exports=t.p+"static/media/message.6faa0a43.svg"},,function(e,a,t){e.exports=t.p+"static/media/send.7aeab33c.svg"},function(e,a,t){e.exports=t.p+"static/media/emoji.27890e05.svg"},function(e,a,t){e.exports=t.p+"static/media/laptop.d43dd5af.svg"},function(e,a,t){e.exports=t.p+"static/media/clip.d21734f4.svg"},function(e){e.exports=JSON.parse('[{"user":"default","directs":[{"user":"pupi_marti","unread":2,"messages":[{"message":"\xa1Bienvenido! Te comento que todo visitante entra con la cuenta \'default\' para facilitar la visita a la web. Podes cambiar los colores entre modo oscuro o claro y responder mensajes!","time":"Sun May 22 2020 23:52:41 GMT-0300"},{"message":"\xa1Gracias por visitar JuantsApp!","time":"Sun May 24 2020 23:52:41 GMT-0300"}]},{"user":"leomessi","unread":1,"messages":[{"message":"Bienvenido!!","time":"Sun May 19 2020 23:52:41 GMT-0300"}]}]}]')},function(e,a,t){e.exports=t.p+"static/media/history.c244d23a.svg"},function(e,a,t){e.exports=t(35)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(8),r=t.n(s),l=(t(22),t(1)),i=t(2);t(23);function m(){return c.a.createElement("div",{className:"content-loading"},c.a.createElement("div",{className:"loadingio-spinner-spinner-0weqdade60oe"},c.a.createElement("div",{className:"ldio-wghgll2tit8"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))))}var u=t(3),o=t.n(u);t(24);function d(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=new Date(e),n=t.getTime()-(new Date).getTime(),c=n/864e5;if(c>-1&&t.getDay()===(new Date).getDay())return a?f(t):"HOY";if(c>-2&&t.getDay()===(new Date).getDay()-1)return"AYER";if(c>-7){var s=["DOMINGO","LUNES","MARTES","MI\xc9RCOLES","JUEVES","VIERNES","S\xc1BADO"];return s[t.getDay()]}return t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()}var f=function(e){return new Date(e).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})};function v(e){return c.a.createElement("div",{onClick:function(){e.onClick({user:e.user,picture:e.picture,name:e.name})},className:function(){var a="content-direct";return e.unread&&e.unread>0&&(a+=" unread"),e.viewDirect&&e.viewDirect.user===e.user&&(a+=" select"),a}()},c.a.createElement("div",{className:"direct"},c.a.createElement("div",{className:"content-img-username"},c.a.createElement("img",{className:"img-account",src:e.picture,alt:"profile_picture"})),c.a.createElement("div",null,c.a.createElement("div",{className:"direct-user"},c.a.createElement("p",null,e.name)),!e.onlyUser&&c.a.createElement("p",{className:"direct-message"},e.own&&c.a.createElement("span",null,c.a.createElement("img",{src:o.a,alt:"check",className:"chat-message-check"})),e.message.length>25?e.message.substring(0,25)+"...":e.message))),!e.onlyUser&&c.a.createElement(c.a.Fragment,null,null!==e.time&&c.a.createElement("p",{className:"time-notif"},d(e.time,!0)),c.a.createElement("div",{className:e.unread<=0?"invisible":"direct-unread"},e.unread)),c.a.createElement("hr",{className:"direct-line-bottom"}))}var p=t(9),h=t.n(p),g=(t(25),t(10)),E=t.n(g),N=t(11),b=t.n(N),j=t(12),w=t.n(j);t(27);function y(e){var a=Object(n.useState)(""),t=Object(l.a)(a,2),s=t[0],r=t[1],i=Object(n.useState)(null),m=Object(l.a)(i,2),u=m[0],o=m[1],d=Object(n.useState)(!1),f=Object(l.a)(d,2),v=f[0],p=f[1];Object(n.useEffect)((function(){e.focus&&u&&u.focus()}));var h=function(){s.length>0&&(e.send(s),r(""))};return c.a.createElement("div",{className:"message-post"},v&&c.a.createElement("div",{className:"content-emojis"},c.a.createElement(E.a,{onEmojiClick:function(e,a){var t=s+a.emoji;r(t),p(!1),u.focus()}})),c.a.createElement("div",{className:"center-width content-message"},c.a.createElement("img",{onClick:function(){return p(!v)},src:w.a,alt:"emoji",className:"icon-emoji-message"}),c.a.createElement("input",{ref:function(e){o(e)},className:"message",value:s,onChange:function(e){r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&h()},placeholder:"Escribe un mensaje aqu\xed"}),c.a.createElement("img",{onClick:h,src:b.a,alt:"send",className:"icon-send-message"})))}var O=t(13),D=t.n(O),_=t(4),k=t.n(_),S=t(14),C=t.n(S);t(28);function x(e){var a;return c.a.createElement("div",{className:e.own?"content-chat-message own":"content-chat-message"},c.a.createElement("div",{className:e.own?"chat-message own":"chat-message"},c.a.createElement("p",{className:"message-chat"},e.message),c.a.createElement("p",{className:"chat-message-time"},(a=e.time,new Date(a).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})),e.own&&c.a.createElement("span",null,c.a.createElement("img",{src:o.a,alt:"check",className:"chat-message-check"})))))}t(29);function M(e){return c.a.createElement("div",{className:"content-chat-day"},c.a.createElement("p",{className:"chat-day"},d(e.time)))}function A(e){var a=Object(n.useState)(null),t=Object(l.a)(a,2),s=t[0],r=t[1],u=function(e,a){var t=new Date(e),n=new Date(a);return t.getDate()===n.getDate()||(a=t,!1)};Object(n.useEffect)((function(){if(null!==e.direct){var a=function(e,a,t){var n,c=Object(i.a)(t);try{for(c.s();!(n=c.n()).done;){var s=n.value;if(s.user===e){var r,l=Object(i.a)(s.directs);try{for(l.s();!(r=l.n()).done;){var m=r.value;if(m.user===a)return m.messages}}catch(u){l.e(u)}finally{l.f()}return"none"}}}catch(u){c.e(u)}finally{c.f()}return null}("default",e.direct.user,e.directs);"none"===a?(e.addChat("default",e.direct.user),r([])):r(a)}}),[s,e]);return null===e.direct?c.a.createElement("div",{className:"content-chat pc"},c.a.createElement("div",{className:"content-default"},c.a.createElement("div",{className:"content-chat-default"},c.a.createElement("div",{className:"content-chat-logo-default"},c.a.createElement("img",{className:"chat-logo-default",src:"https://web.whatsapp.com/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg",alt:"Direct"})),c.a.createElement("p",{className:"chat-title-default"},"Mant\xe9n tu telefono conectado"),c.a.createElement("p",{className:"chat-desc-default"},"JuantsApp se conecta a tu tel\xe9fono para sincronizar los mensajes. Para reducir el consumo de tus datos, conecta tu tel\xe9fono a una red Wi-Fi."),c.a.createElement("hr",{className:"chat-line-default"}),c.a.createElement("p",{className:"chat-desc-default"},c.a.createElement("span",null,c.a.createElement("img",{src:D.a,alt:"Laptop",className:"chat-icon-laptop-default"})),"JuantsApp est\xe1 disponible para Windows.",c.a.createElement("a",{className:"chat-url-default",href:"www.google.com"},"Obtenlo aqu\xed."))),c.a.createElement("div",{className:"chat-border-bottom"}))):c.a.createElement("div",{className:"content-chat"},c.a.createElement("header",{className:"content-header-chat"},c.a.createElement("div",{className:"chat-back mobile",onClick:function(){r(null),e.back(null)}}),c.a.createElement("div",{className:"content-header-chat"},c.a.createElement("div",{className:"header-chat"},c.a.createElement("div",{className:"content-header-user"},c.a.createElement("img",{className:"chat-user-img",src:e.direct.picture,alt:"user-img"}),c.a.createElement("p",{className:"chat-user-name"},e.direct.name)),c.a.createElement("div",{className:"content-actions-header"},c.a.createElement("img",{src:k.a,alt:"search",className:"icon"}),c.a.createElement("img",{src:C.a,alt:"clip",className:"icon"}),c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"point"}),c.a.createElement("div",{className:"point"}),c.a.createElement("div",{className:"point"})))))),c.a.createElement("div",{className:"chat-content-messages"},c.a.createElement("div",{className:"center-width"},function(){var e=[];if(s)for(var a=0;a<s.length;a++){var t=void 0;t=a>0?new Date(s[a-1].time):new Date,u(s[a].time,t)||e.push(c.a.createElement(M,{key:a,time:s[a].time})),e.push(c.a.createElement(x,{key:a+s[a].message,time:s[a].time,message:s[a].message,own:s[a].own}))}return e}())),null===s&&c.a.createElement(m,null),c.a.createElement("div",{className:"chat-content-comment"},c.a.createElement(y,{send:function(a){(function(e,a,t,n,c){var s,r=n,l=Object(i.a)(r);try{for(l.s();!(s=l.n()).done;){var m=s.value;if(m.user===e){var u,o=Object(i.a)(m.directs);try{for(o.s();!(u=o.n()).done;){var d=u.value;if(d.user===a)return d.messages.push({message:t,time:Date(),own:!0}),d.read=!0,c(r),!0}}catch(f){o.e(f)}finally{o.f()}}}}catch(f){l.e(f)}finally{l.f()}return!1})("default",e.direct.user,a,e.directs,e.setDirects)&&r(null)},message:!0})))}t(30);var J=t(5),B=t(15),T=c.a.createContext({});function G(e){var a=e.children,t=Object(n.useState)(J),s=Object(l.a)(t,2),r=s[0],i=s[1],m=Object(n.useState)(B),u=Object(l.a)(m,2),o=u[0],d=u[1];return c.a.createElement(T.Provider,{value:{users:r,setUsers:i,directs:o,setDirects:d}},a)}var V=T;t(31);function F(e){var a=Object(n.useState)(""),t=Object(l.a)(a,2),s=t[0],r=t[1];return c.a.createElement("div",{className:"content-search"},c.a.createElement("div",{className:"center-width search"},c.a.createElement("img",{src:k.a,alt:"search",className:"icon-search"}),c.a.createElement("input",{type:"text",className:"input-search",placeholder:e.contacts?"Buscar contactos":"Buscar o empezar un chat nuevo",onChange:function(e){return r(e.target.value)},value:s})))}function U(e){var a,t=Object(i.a)(J);try{for(t.s();!(a=t.n()).done;){var n=a.value;if(n.user===e)return n}}catch(c){t.e(c)}finally{t.f()}return null}function q(e){var a=Object(n.useContext)(V).users,t=Object(n.useState)(null),s=Object(l.a)(t,2),r=s[0],m=s[1];Object(n.useEffect)((function(){if(null===r){var t=function(e,a){var t,n=Object(i.a)(a);try{for(n.s();!(t=n.n()).done;){var c=t.value;if(c.user===e)return c}}catch(s){n.e(s)}finally{n.f()}return null}(e.user,a);null!==t&&m(t.contacts)}}),[r,e,a]);var u=function(a){null!==a&&(e.setViewDirect(a),e.setNewChat(!1))};return c.a.createElement("div",{className:"content-new-chat"},c.a.createElement("header",{className:"content-new-chat-header"},c.a.createElement("div",{className:"new-chat-header"},c.a.createElement("div",{onClick:function(){return e.setNewChat(!1)},className:"chat-back"}),c.a.createElement("h5",{className:"new-chat-title-header"},"Nuevo chat"))),c.a.createElement(F,{contacts:!0}),r&&r.map((function(e,a){var t=U(e);return c.a.createElement(v,{key:a,onlyUser:!0,user:t.user,picture:t.picture,name:t.name,onClick:u})})))}var z=t(16),I=t.n(z);t(32);function L(e){return c.a.createElement("button",{className:"switch-mode",onClick:e.setMode},c.a.createElement("span",{role:"img",className:"moon","aria-label":"crescent moon"},"\ud83c\udf19"),c.a.createElement("span",{role:"img",className:"sun","aria-label":"sun with face"},"\ud83c\udf1e"))}t(33);function P(e){var a=Object(n.useState)("loading"),t=Object(l.a)(a,2),s=t[0],r=t[1],u=Object(n.useState)(null),o=Object(l.a)(u,2),d=o[0],f=o[1],p=Object(n.useState)(null),g=Object(l.a)(p,2),E=g[0],N=g[1],b=Object(n.useState)(!1),j=Object(l.a)(b,2),w=j[0],y=j[1],O=Object(n.useContext)(V),D=O.directs,_=O.setDirects,k=function(e){null===e?f(null):(f(e),function(e,a,t,n){var c,s=t,r=Object(i.a)(s);try{for(r.s();!(c=r.n()).done;){var l=c.value;if(l.user===e){var m,u=Object(i.a)(l.directs);try{for(u.s();!(m=u.n()).done;){var o=m.value;if(o.user===a)return o.unread=0,n(s),!0}}catch(d){u.e(d)}finally{u.f()}}}}catch(d){r.e(d)}finally{r.f()}}("default",e.user,D,_))};return Object(n.useEffect)((function(){if("loading"===s){var e=U("default");N(e);var a=function(e,a){if(a){var t,n=Object(i.a)(a);try{for(n.s();!(t=n.n()).done;){var c=t.value;if(c.user===e)return c}}catch(s){n.e(s)}finally{n.f()}}return null}("default",D);r(a?a.directs:[])}}),[s,D]),"loading"===s?c.a.createElement(m,null):c.a.createElement("div",{className:"content-directs"},c.a.createElement("div",{className:null===d?"content-list-directs":"content-list-directs viewdirect"},w&&c.a.createElement(q,{user:"default",setNewChat:y,setViewDirect:k}),c.a.createElement("header",{className:"content-directs-header"},c.a.createElement("div",{className:"center-width header"},c.a.createElement("img",{className:"directs-header-img",src:E.picture,alt:"your img"}),c.a.createElement("div",{className:"content-actions-header"},c.a.createElement(L,{setMode:e.setMode}),c.a.createElement("img",{className:"icon",src:I.a,alt:"history"}),c.a.createElement("img",{onClick:function(){y(!0)},className:"icon",src:h.a,alt:"nuevo mensaje"}),c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"point"}),c.a.createElement("div",{className:"point"}),c.a.createElement("div",{className:"point"})))),c.a.createElement(F,null)),c.a.createElement("div",{className:"content-directs-messages"},s&&s.map((function(e,a){var t=U(e.user);if(null!==t){if(e.messages.length>0)return c.a.createElement(v,{key:a,user:t.user,name:t.name,picture:t.picture,verify:t.verify,message:e.messages[e.messages.length-1].message,time:e.messages[e.messages.length-1].time,own:e.messages[e.messages.length-1].own,unread:e.unread,viewDirect:d,onClick:k});if(e.messages.length<=0)return c.a.createElement(v,{key:a,user:t.user,name:t.name,picture:t.picture,verify:t.verify,message:"",time:null,own:!1,unread:0,viewDirect:d,onClick:k})}return null})))),c.a.createElement(A,{direct:d,back:k,directs:D,setDirects:_,setNewChat:y,addChat:function(e,a){!function(e,a,t,n){var c,s=t,r=Object(i.a)(s);try{for(r.s();!(c=r.n()).done;){var l=c.value;if(l.user===e)return l.directs.push({user:a,unread:0,messages:[]}),n(s),!0}}catch(m){r.e(m)}finally{r.f()}}(e,a,D,_)}}))}t(34);var Q=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],s=a[1];return c.a.createElement("div",{className:t?"content-app dark":"content-app"},c.a.createElement("div",{className:"header-app"}),c.a.createElement("div",{className:"app"},c.a.createElement(G,null,c.a.createElement(P,{setMode:function(){s(!t)}}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Q,null)),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.e3a71644.chunk.js.map