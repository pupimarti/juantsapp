(this.webpackJsonpjuantsapp=this.webpackJsonpjuantsapp||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/check.3dc8183f.svg"},function(e,t,a){e.exports=a.p+"static/media/search.11a139fb.svg"},function(e){e.exports=JSON.parse('[{"user":"default","name":"Default","picture":"https://firebasestorage.googleapis.com/v0/b/pupigram.appspot.com/o/users%2Fdefault?alt=media","desc":"Usuario creado por default.","contacts":["leomessi","thisisbillgates","pupi_marti","samantha"]},{"user":"leomessi","name":"Leonel Messi","picture":"https://firebasestorage.googleapis.com/v0/b/pupigram.appspot.com/o/users%2Fleomessi?alt=media","desc":"Disponible"},{"user":"thisisbillgates","name":"Bill Gates","picture":"https://firebasestorage.googleapis.com/v0/b/pupigram.appspot.com/o/users%2Fthisisbillgates?alt=media","desc":"Disponible"},{"user":"pupi_marti","name":"Juan Mart\xed","picture":"https://firebasestorage.googleapis.com/v0/b/pupigram.appspot.com/o/users%2Fpupi_marti?alt=media","desc":"Disponible"},{"user":"samantha","name":"Samantha Jhonson","picture":"https://firebasestorage.googleapis.com/v0/b/pupigram.appspot.com/o/users%2Fsamantha?alt=media","desc":"Disponible"},{"user":"martin_senz","name":"Martin Senz","picture":"https://firebasestorage.googleapis.com/v0/b/pupigram.appspot.com/o/users%2Fmartin_senz?alt=media","desc":"Disponible"}]')},,,,function(e,t,a){e.exports=a.p+"static/media/message.6faa0a43.svg"},,function(e,t,a){e.exports=a.p+"static/media/send.7aeab33c.svg"},function(e,t,a){e.exports=a.p+"static/media/emoji.27890e05.svg"},function(e,t,a){e.exports=a.p+"static/media/laptop.d43dd5af.svg"},function(e,t,a){e.exports=a.p+"static/media/clip.d21734f4.svg"},function(e,t,a){e.exports=a.p+"static/media/edit.53e3a713.svg"},function(e,t,a){e.exports=a.p+"static/media/confirm.35993b38.svg"},function(e){e.exports=JSON.parse('[{"user":"default","directs":[{"user":"pupi_marti","unread":2,"messages":[{"message":"\xa1Bienvenido! Te comento que todo visitante entra con la cuenta \'default\' para facilitar la visita a la web. Podes cambiar los colores entre modo oscuro o claro y responder mensajes!","time":"Sun May 22 2020 23:52:41 GMT-0300"},{"message":"\xa1Gracias por visitar JuantsApp!","time":"Sun May 24 2020 23:52:41 GMT-0300"}]},{"user":"leomessi","unread":1,"messages":[{"message":"Bienvenido!!","time":"Sun May 19 2020 23:52:41 GMT-0300"}]}]}]')},function(e,t,a){e.exports=a.p+"static/media/camera.14943488.svg"},function(e,t,a){e.exports=a.p+"static/media/history.c244d23a.svg"},function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),r=a.n(s),i=(a(25),a(1)),l=a(2);a(26);function o(){return c.a.createElement("div",{className:"content-loading"},c.a.createElement("div",{className:"loadingio-spinner-spinner-0weqdade60oe"},c.a.createElement("div",{className:"ldio-wghgll2tit8"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))))}var m=a(3),u=a.n(m);a(27);function d(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=new Date(e),n=a.getTime()-(new Date).getTime(),c=n/864e5;if(c>-1&&a.getDay()===(new Date).getDay())return t?f(a):"HOY";if(c>-2&&a.getDay()===(new Date).getDay()-1)return"AYER";if(c>-7){var s=["DOMINGO","LUNES","MARTES","MI\xc9RCOLES","JUEVES","VIERNES","S\xc1BADO"];return s[a.getDay()]}return a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()}var f=function(e){return new Date(e).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})};function p(e){return c.a.createElement("div",{onClick:function(){e.onClick({user:e.user,picture:e.picture,name:e.name,desc:e.desc})},className:function(){var t="content-direct";return e.unread&&e.unread>0&&(t+=" unread"),e.viewDirect&&e.viewDirect.user===e.user&&(t+=" select"),t}()},c.a.createElement("div",{className:"direct"},c.a.createElement("div",{className:"content-img-username"},c.a.createElement("img",{className:"img-account",src:e.picture,alt:"profile_picture"})),c.a.createElement("div",null,c.a.createElement("div",{className:"direct-user"},c.a.createElement("p",null,e.name)),!e.onlyUser&&c.a.createElement("p",{className:"direct-message"},e.own&&c.a.createElement("span",null,c.a.createElement("img",{src:u.a,alt:"check",className:"chat-message-check"})),e.message.length>25?e.message.substring(0,25)+"...":e.message))),!e.onlyUser&&c.a.createElement(c.a.Fragment,null,null!==e.time&&c.a.createElement("p",{className:"time-notif"},d(e.time,!0)),c.a.createElement("div",{className:e.unread<=0?"invisible":"direct-unread"},e.unread)),c.a.createElement("hr",{className:"direct-line-bottom"}))}var E=a(9),v=a.n(E),g=(a(28),a(10)),h=a.n(g),N=a(11),b=a.n(N),w=a(12),j=a.n(w);a(30);function O(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)(!1),f=Object(i.a)(d,2),p=f[0],E=f[1];Object(n.useEffect)((function(){e.focus&&m&&m.focus()}));var v=function(){s.length>0&&(e.send(s),r(""))};return c.a.createElement("div",{className:"message-post"},p&&c.a.createElement("div",{className:"content-emojis"},c.a.createElement(h.a,{onEmojiClick:function(e,t){var a=s+t.emoji;r(a),E(!1),m.focus()}})),c.a.createElement("div",{className:"center-width content-message"},c.a.createElement("img",{onClick:function(){return E(!p)},src:j.a,alt:"emoji",className:"icon-emoji-message"}),c.a.createElement("input",{ref:function(e){u(e)},className:"message",value:s,onChange:function(e){r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&v()},placeholder:"Escribe un mensaje aqu\xed"}),c.a.createElement("img",{onClick:v,src:b.a,alt:"send",className:"icon-send-message"})))}var y=a(13),S=a.n(y),k=a(4),x=a.n(k),D=a(14),C=a.n(D);a(31);function M(e){var t;return c.a.createElement("div",{className:e.own?"content-chat-message own":"content-chat-message"},c.a.createElement("div",{className:e.own?"chat-message own":"chat-message"},c.a.createElement("p",{className:"message-chat"},e.message),c.a.createElement("p",{className:"chat-message-time"},(t=e.time,new Date(t).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"})),e.own&&c.a.createElement("span",null,c.a.createElement("img",{src:u.a,alt:"check",className:"chat-message-check"})))))}a(32);function P(e){return c.a.createElement("div",{className:"content-chat-day"},c.a.createElement("p",{className:"chat-day"},d(e.time)))}var F=a(15),I=a.n(F),J=a(16),T=a.n(J);a(33);function A(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(e.desc),o=Object(i.a)(l,2),m=o[0],u=o[1];return e.isEditable?c.a.createElement("div",{className:"content-stat"},c.a.createElement("div",{className:"center-stat"},c.a.createElement("p",{className:"title-stat"},e.title),s?c.a.createElement("div",{className:"content-input-stat"},c.a.createElement("textarea",{type:"text",value:m,onKeyDown:function(t){if(m.length>=e.max&&8===t.keyCode){var a=m.substring(0,m.length-1);u(a)}},onChange:function(t){m.length<e.max&&u(t.target.value)},className:"stat-input"}),c.a.createElement("span",{className:"max-length"},e.max-m.length),c.a.createElement("img",{src:T.a,alt:"confirm",onClick:function(){e.edit(m)&&r(!1)},className:"edit-stat edit-input"})):c.a.createElement("p",{className:"stat"},m,c.a.createElement("span",null,c.a.createElement("img",{src:I.a,alt:"editar",onClick:function(){r(!0)},className:"edit-stat"}))))):c.a.createElement("div",{className:"content-stat"},c.a.createElement("div",{className:"center-stat"},c.a.createElement("p",{className:"title-stat"},e.title),e.content))}a(34);function B(e){return c.a.createElement("div",{className:"content-profile-contact"},c.a.createElement("header",{className:"center-width content-profile-contact-header"},c.a.createElement("div",{onClick:function(){return e.back()},className:"close"},c.a.createElement("div",{className:"close-line"}),c.a.createElement("div",{className:"close-line"})),c.a.createElement("p",{className:"profile-contact-header-text"},"Info. de contacto")),c.a.createElement("div",{onClick:function(){e.setShowPicture({user:e.user,img:e.img})},className:"box-profile-contact content-profile-info-user"},c.a.createElement("img",{className:"profile-contact-img",src:e.img,alt:"profile-img"}),c.a.createElement("p",{className:"profile-contact-name center-width"},e.name)),c.a.createElement("div",{className:"box-profile-contact"},c.a.createElement(A,{title:"Archivos, enlaces y documentos",content:c.a.createElement("p",{className:"no-multimedia"},"Sin archivos multimedia, enlaces ni documentos")})),c.a.createElement("div",{className:"box-profile-contact content-stat"},c.a.createElement("p",{className:"center-stat only-action only-action-text hr-bb"},"Silenciar notificaciones"),c.a.createElement("p",{className:"center-stat only-action only-action-text"},"Mensajes destacados")),c.a.createElement("div",{className:"box-profile-contact"},c.a.createElement(A,{title:"Info. y nombre de usuario",content:c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"only-action only-action-text hr-bb"},e.desc),c.a.createElement("p",{className:"only-action only-action-text"},e.user))})),c.a.createElement("div",{className:"box-profile-contact content-stat"},c.a.createElement("p",{className:"center-stat only-action-text"},"Bloquear")),c.a.createElement("div",{className:"box-profile-contact content-stat"},c.a.createElement("p",{className:"center-stat only-action-text-red"},"Reportar contacto")),c.a.createElement("div",{className:"box-profile-contact content-stat"},c.a.createElement("p",{className:"center-stat only-action-text-red"},"Eliminar chat")))}a(35);function U(e){return c.a.createElement("div",{className:"content-options"},e.options&&e.options.map((function(e,t){return c.a.createElement("div",{key:t,onClick:function(){return e.action()},className:"option"},c.a.createElement("p",{className:"option-text"},e.name))})))}function _(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),s=a[0],r=a[1],m=Object(n.useState)(!1),u=Object(i.a)(m,2),d=u[0],f=u[1],p=function(e,t){var a=new Date(e),n=new Date(t);return a.getDate()===n.getDate()||(t=a,!1)},E=Object(n.useState)(!1),v=Object(i.a)(E,2),g=v[0],h=v[1],N=[{name:"Info. del contacto",action:function(){return f(!0)}},{name:"Seleccionar mensajes",action:function(){return console.log("seleccionar mensajes")}},{name:"Silenciar notificaciones",action:function(){return console.log("Silenciar notificaciones")}},{name:"Vaciar mensajes",action:function(){return console.log("Vaciar mensajes")}},{name:"Eliminar chat",action:function(){return console.log("eliminar chat")}}];Object(n.useEffect)((function(){if(null!==e.direct){f(!1);var t=function(e,t,a){var n,c=Object(l.a)(a);try{for(c.s();!(n=c.n()).done;){var s=n.value;if(s.user===e){var r,i=Object(l.a)(s.directs);try{for(i.s();!(r=i.n()).done;){var o=r.value;if(o.user===t)return o.messages}}catch(m){i.e(m)}finally{i.f()}return"none"}}}catch(m){c.e(m)}finally{c.f()}return null}("default",e.direct.user,e.directs);"none"===t?(e.addChat("default",e.direct.user),r([])):r(t)}}),[s,e]);return d?c.a.createElement("div",{className:"content-chat"},c.a.createElement(B,{back:function(){return f(!1)},name:e.direct.name,img:e.direct.picture,desc:e.direct.desc,user:e.direct.user,setShowPicture:e.setShowPicture})):null===e.direct?c.a.createElement("div",{className:"content-chat pc"},c.a.createElement("div",{className:"content-default"},c.a.createElement("div",{className:"content-chat-default"},c.a.createElement("div",{className:"content-chat-logo-default"},c.a.createElement("img",{className:"chat-logo-default",src:"https://web.whatsapp.com/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg",alt:"Direct"})),c.a.createElement("p",{className:"chat-title-default"},"Mant\xe9n tu telefono conectado"),c.a.createElement("p",{className:"chat-desc-default"},"JuantsApp se conecta a tu tel\xe9fono para sincronizar los mensajes. Para reducir el consumo de tus datos, conecta tu tel\xe9fono a una red Wi-Fi."),c.a.createElement("hr",{className:"chat-line-default"}),c.a.createElement("p",{className:"chat-desc-default"},c.a.createElement("span",null,c.a.createElement("img",{src:S.a,alt:"Laptop",className:"chat-icon-laptop-default"})),"JuantsApp est\xe1 disponible para Windows.",c.a.createElement("a",{className:"chat-url-default",href:"www.google.com"},"Obtenlo aqu\xed."))),c.a.createElement("div",{className:"chat-border-bottom"}))):c.a.createElement("div",{className:"content-chat"},c.a.createElement("header",{className:"content-header-chat"},c.a.createElement("div",{className:"chat-back mobile",onClick:function(){r(null),e.back(null)}}),c.a.createElement("div",{className:"content-header-chat"},c.a.createElement("div",{className:"header-chat"},c.a.createElement("div",{onClick:function(){return f(!0)},className:"content-header-user"},c.a.createElement("img",{className:"chat-user-img",src:e.direct.picture,alt:"user-img"}),c.a.createElement("p",{className:"chat-user-name"},e.direct.name)),c.a.createElement("div",{className:"content-actions-header"},c.a.createElement("img",{src:x.a,alt:"search",className:"icon"}),c.a.createElement("img",{src:C.a,alt:"clip",className:"icon"}),c.a.createElement("div",{onClick:function(){return h(!g)},className:g?"content-menu menu-select":"content-menu"},c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"point"}),c.a.createElement("div",{className:"point"}),c.a.createElement("div",{className:"point"})),c.a.createElement("div",{className:"content-options-header"},g&&c.a.createElement(U,{options:N}))))))),c.a.createElement("div",{className:"chat-content-messages"},c.a.createElement("div",{className:"center-width"},function(){var e=[];if(s)for(var t=0;t<s.length;t++){var a=void 0;a=t>0?new Date(s[t-1].time):new Date,p(s[t].time,a)||e.push(c.a.createElement(P,{key:t,time:s[t].time})),e.push(c.a.createElement(M,{key:t+s[t].message,time:s[t].time,message:s[t].message,own:s[t].own}))}return e}())),null===s&&c.a.createElement(o,null),c.a.createElement("div",{className:"chat-content-comment"},c.a.createElement(O,{send:function(t){(function(e,t,a,n,c){var s,r=n,i=Object(l.a)(r);try{for(i.s();!(s=i.n()).done;){var o=s.value;if(o.user===e){var m,u=Object(l.a)(o.directs);try{for(u.s();!(m=u.n()).done;){var d=m.value;if(d.user===t)return d.messages.push({message:a,time:Date(),own:!0}),d.read=!0,c(r),!0}}catch(f){u.e(f)}finally{u.f()}}}}catch(f){i.e(f)}finally{i.f()}return!1})("default",e.direct.user,t,e.directs,e.setDirects)&&r(null)},message:!0})))}a(36);var L=a(5),R=a(17),V=c.a.createContext({});function G(e){var t=e.children,a=Object(n.useState)(L),s=Object(i.a)(a,2),r=s[0],l=s[1],o=Object(n.useState)(R),m=Object(i.a)(o,2),u=m[0],d=m[1];return c.a.createElement(V.Provider,{value:{users:r,setUsers:l,directs:u,setDirects:d}},t)}var q=V;a(37);function z(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),s=a[0],r=a[1];return c.a.createElement("div",{className:"content-search"},c.a.createElement("div",{className:"center-width search"},c.a.createElement("img",{src:x.a,alt:"search",className:"icon-search"}),c.a.createElement("input",{type:"text",className:"input-search",placeholder:e.contacts?"Buscar contactos":"Buscar o empezar un chat nuevo",onChange:function(e){return r(e.target.value)},value:s})))}function Y(e){var t,a=Object(l.a)(L);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n.user===e)return n}}catch(c){a.e(c)}finally{a.f()}return null}function K(e){var t=Object(n.useContext)(q).users,a=Object(n.useState)(null),s=Object(i.a)(a,2),r=s[0],o=s[1];Object(n.useEffect)((function(){if(null===r){var a=function(e,t){var a,n=Object(l.a)(t);try{for(n.s();!(a=n.n()).done;){var c=a.value;if(c.user===e)return c}}catch(s){n.e(s)}finally{n.f()}return null}(e.user,t);null!==a&&o(a.contacts)}}),[r,e,t]);var m=function(t){null!==t&&(e.setViewDirect(t),e.setNewChat(!1))};return c.a.createElement("div",{className:"content-new-chat"},c.a.createElement("header",{className:"content-new-chat-header"},c.a.createElement("div",{className:"new-chat-header"},c.a.createElement("div",{onClick:function(){return e.setNewChat(!1)},className:"chat-back"}),c.a.createElement("h5",{className:"new-chat-title-header"},"Nuevo chat"))),c.a.createElement(z,{contacts:!0}),r&&r.map((function(e,t){var a=Y(e);return c.a.createElement(p,{key:t,onlyUser:!0,user:a.user,picture:a.picture,name:a.name,onClick:m})})))}var W=a(18),H=a.n(W);a(38);function Q(e){var t=Object(n.useContext)(q),a=t.users,s=t.setUsers,r=function(e){return function(e,t,a){var n,c=t,s=Object(l.a)(c);try{for(s.s();!(n=s.n()).done;){var r=n.value;if(r===e)return r=e,a(c),!0}}catch(i){s.e(i)}finally{s.f()}return!1}(e,a,s)},o=Object(n.useState)(!1),m=Object(i.a)(o,2),u=m[0],d=m[1],f=[{name:"Ver foto",action:function(){return e.handleSetShowPicture(e.user.user,e.user.picture)}},{name:"Subir foto",action:function(){return console.log("subir foto")}},{name:"Eliminar foto",action:function(){return console.log("eliminar foto")}}];return c.a.createElement("div",{className:"content-new-chat"},c.a.createElement("header",{className:"content-new-chat-header"},c.a.createElement("div",{className:"new-chat-header"},c.a.createElement("div",{onClick:function(){return e.setProfile(!1)},className:"chat-back"}),c.a.createElement("h5",{className:"new-chat-title-header"},"Perfil"))),c.a.createElement("div",{className:"content-profile-stats"},c.a.createElement("div",{onClick:function(){return d(!u)},className:"center-stat content-profile-img"},c.a.createElement("img",{src:e.user.picture,alt:"profile-img",className:"profile-img"}),c.a.createElement("div",{className:u?"hover-img select":"hover-img"},c.a.createElement("img",{src:H.a,alt:"camera",className:"stat-camera-hover"}),c.a.createElement("p",{className:"stat-text-hover"},"CAMBIAR FOTO DE PERFIL")),u&&c.a.createElement(U,{options:f})),c.a.createElement(A,{isEditable:!0,max:25,edit:function(t){var a=e.user;return t&&(a.name=t),r(a)},title:"Tu nombre",desc:e.user.name}),c.a.createElement("div",{className:"center-stat"},c.a.createElement("p",{className:"info-stat"},"Este no es tu nombre de usuario ni un PIN. Este nombre ser\xe1 visible para tus contactos de JuantsApp.")),c.a.createElement(A,{isEditable:!0,max:50,edit:function(t){var a=e.user;return t&&(a.desc=t),r(a)},title:"Info.",desc:e.user.desc})))}var X=a(19),Z=a.n(X);a(39);function $(e){return c.a.createElement("button",{className:"switch-mode",onClick:e.setMode},c.a.createElement("span",{role:"img",className:"moon","aria-label":"crescent moon"},"\ud83c\udf19"),c.a.createElement("span",{role:"img",className:"sun","aria-label":"sun with face"},"\ud83c\udf1e"))}a(40);function ee(e){return c.a.createElement("div",{className:"content-show-picture"},c.a.createElement("header",{className:"show-picture-header center-width"},c.a.createElement("div",{className:"show-picture-user"},c.a.createElement("img",{src:e.img,alt:"profile",className:"show-picture-img-profile-user"}),c.a.createElement("p",{className:"show-picture-name"},e.user)),c.a.createElement("div",{onClick:function(){return e.setShowPicture(null)},className:"close"},c.a.createElement("div",{className:"close-line"}),c.a.createElement("div",{className:"close-line"}))),c.a.createElement("div",{className:"content-picture-show-picture"},c.a.createElement("img",{src:e.img,alt:"the-pic",className:"show-picture-img"})))}a(41);function te(e){var t=Object(n.useState)("loading"),a=Object(i.a)(t,2),s=a[0],r=a[1],m=Object(n.useState)(null),u=Object(i.a)(m,2),d=u[0],f=u[1],E=Object(n.useState)(null),g=Object(i.a)(E,2),h=g[0],N=g[1],b=Object(n.useState)(!1),w=Object(i.a)(b,2),j=w[0],O=w[1],y=Object(n.useState)(!1),S=Object(i.a)(y,2),k=S[0],x=S[1],D=Object(n.useContext)(q),C=D.directs,M=D.setDirects,P=Object(n.useState)(null),F=Object(i.a)(P,2),I=F[0],J=F[1],T=Object(n.useState)(!1),A=Object(i.a)(T,2),B=A[0],L=A[1],R=[{name:"Perfil",action:function(){L(!1),x(!0)}},{name:"Nuevo chat",action:function(){L(!1),O(!0)}}],V=function(e){null===e?f(null):(f(e),function(e,t,a,n){var c,s=a,r=Object(l.a)(s);try{for(r.s();!(c=r.n()).done;){var i=c.value;if(i.user===e){var o,m=Object(l.a)(i.directs);try{for(m.s();!(o=m.n()).done;){var u=o.value;if(u.user===t)return u.unread=0,n(s),!0}}catch(d){m.e(d)}finally{m.f()}}}}catch(d){r.e(d)}finally{r.f()}}("default",e.user,C,M))};return Object(n.useEffect)((function(){if("loading"===s){var e=Y("default");N(e);var t=function(e,t){if(t){var a,n=Object(l.a)(t);try{for(n.s();!(a=n.n()).done;){var c=a.value;if(c.user===e)return c}}catch(s){n.e(s)}finally{n.f()}}return null}("default",C);r(t?t.directs:[])}}),[s,C]),"loading"===s?c.a.createElement(o,null):I?c.a.createElement(ee,{setShowPicture:J,img:I.img,user:I.user}):c.a.createElement("div",{className:"content-directs"},c.a.createElement("div",{className:null===d?"content-list-directs":"content-list-directs viewdirect"},j&&c.a.createElement(K,{user:"default",setNewChat:O,setViewDirect:V}),k&&c.a.createElement(Q,{handleSetShowPicture:function(e,t){J({user:e,img:t})},setProfile:x,user:h}),c.a.createElement("header",{className:"content-directs-header"},c.a.createElement("div",{className:"center-width header"},c.a.createElement("img",{onClick:function(){x(!0)},className:"directs-header-img",src:h.picture,alt:"your img"}),c.a.createElement("div",{className:"content-actions-header"},c.a.createElement($,{setMode:e.setMode}),c.a.createElement("img",{className:"icon",src:Z.a,alt:"history"}),c.a.createElement("img",{onClick:function(){O(!0)},className:"icon",src:v.a,alt:"nuevo mensaje"}),c.a.createElement("div",{onClick:function(){return L(!B)},className:B?"content-menu menu-select":"content-menu"},c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"point"}),c.a.createElement("div",{className:"point"}),c.a.createElement("div",{className:"point"})),c.a.createElement("div",{className:"content-options-header"},B&&c.a.createElement(U,{options:R}))))),c.a.createElement(z,null)),c.a.createElement("div",{className:"content-directs-messages"},s&&s.map((function(e,t){var a=Y(e.user);if(null!==a){if(e.messages.length>0)return c.a.createElement(p,{key:t,user:a.user,name:a.name,picture:a.picture,desc:a.desc,message:e.messages[e.messages.length-1].message,time:e.messages[e.messages.length-1].time,own:e.messages[e.messages.length-1].own,unread:e.unread,viewDirect:d,onClick:V});if(e.messages.length<=0)return c.a.createElement(p,{key:t,user:a.user,name:a.name,picture:a.picture,desc:a.desc,message:"",time:null,own:!1,unread:0,viewDirect:d,onClick:V})}return null})))),c.a.createElement(_,{direct:d,back:V,directs:C,setDirects:M,setNewChat:O,addChat:function(e,t){!function(e,t,a,n){var c,s=a,r=Object(l.a)(s);try{for(r.s();!(c=r.n()).done;){var i=c.value;if(i.user===e)return i.directs.push({user:t,unread:0,messages:[]}),n(s),!0}}catch(o){r.e(o)}finally{r.f()}}(e,t,C,M)},setShowPicture:J}))}a(42);var ae=function(){var e=Object(n.useState)(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches||!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return c.a.createElement("div",{className:a?"content-app dark":"content-app"},c.a.createElement("div",{className:"header-app"}),c.a.createElement("div",{className:"app"},c.a.createElement(G,null,c.a.createElement(te,{setMode:function(){s(!a)}}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ae,null)),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.a44ceecf.chunk.js.map