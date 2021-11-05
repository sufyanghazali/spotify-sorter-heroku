(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(20),r=a.n(s),i=a(3),l=a.n(i),o=a(8),u=a(4),j=a(6),d=a.n(j),b=(a(19),a(21)),f=a(5),p=a(0);var h=function(e){var t=e.song;return Object(p.jsxs)("div",{className:"song",children:[Object(p.jsx)("img",{className:"song-image",src:t.track.album.images[2].url,alt:"song"}),Object(p.jsxs)("div",{className:"song-info",children:[Object(p.jsx)("div",{className:"song-title",children:t.track.name}),Object(p.jsx)("div",{className:"song-artist",children:t.track.artists[0].name})]})]})};var m=function(e){var t=e.onClick;return Object(p.jsx)("button",{onClick:function(){return t()},children:"Sort"})};var O=function(e){var t=e.onClick,a=e.sorted;return Object(p.jsx)("button",{onClick:function(){return t()},disabled:!a,children:"Save"})},v=function(e,t){var a=0;return e<t?a=-1:e>t&&(a=1),a},x=function(e,t){var a=e.track.track_number,n=t.track.track_number;return v(a,n)},y=function(e,t){var a,n;return a=Date.parse(e[0].track.album.release_date),n=Date.parse(t[0].track.album.release_date),v(n,a)};var k=function(e){var t=e.playlist,a=e.access_token,c=e.onExit,s=Object(n.useState)(!1),r=Object(u.a)(s,2),i=r[0],j=r[1],v=Object(n.useState)([]),k=Object(u.a)(v,2),g=k[0],w=k[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var n,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(t.tracks.href,{headers:{Authorization:"Bearer ".concat(a)}});case 2:n=e.sent,c=n.data.items;case 4:if(!(c.length<n.data.total)){e.next=11;break}return e.next=7,d.a.get(t.tracks.href,{params:{offset:c.length,limit:100},headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){return e.data.items}));case 7:s=e.sent,c=[].concat(Object(f.a)(c),Object(f.a)(s)),e.next=4;break;case 11:w(c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j(!1),function(){e.apply(this,arguments)}()}),[t,a]);var N=g.map((function(e,t){return Object(p.jsx)(h,{song:e},e.track.id)})),S=function(){var e=Object(o.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=5;break}return n=g.map((function(e){return e.track.uri})),e.next=4,d.a.put("https://api.spotify.com/v1/playlists/".concat(t.id,"/tracks"),{uris:n.slice(0,100)},{headers:{Authorization:"Bearer ".concat(a)}}).then(Object(o.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>100)){e.next=8;break}c=100;case 2:if(!(c<n.length)){e.next=8;break}return e.next=5,d.a.post("https://api.spotify.com/v1/playlists/".concat(t.id,"/tracks"),{uris:n.slice(c,c+100)},{headers:{Authorization:"Bearer ".concat(a)}});case 5:c+=100,e.next=2;break;case 8:case"end":return e.stop()}}),e)})))).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}));case 4:j(!i);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"playlist",children:[Object(p.jsx)("button",{className:"playlist--button-exit",onClick:function(){return c()},children:Object(p.jsx)("svg",{role:"img",focusable:"false",height:"24",width:"24",viewBox:"0 0 24 24",className:"button-back",children:Object(p.jsx)("polyline",{points:"16 4 7 12 16 20",fill:"none",stroke:"#181818"})})}),Object(p.jsxs)("div",{className:"playlist-header",children:[Object(p.jsx)("div",{className:"playlist-image",children:Object(p.jsx)("img",{src:t.images[0].url,alt:t.name})}),Object(p.jsxs)("div",{className:"metadata",children:[Object(p.jsx)("h1",{className:"playlist-name",children:t.name}),Object(p.jsx)("span",{children:t.owner.display_name}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(m,{onClick:function(){var e=[],t=g.reduce((function(e,t){return e[t.track.album.name]=[].concat(Object(f.a)(e[t.track.album.name]||[]),[t]),e}),{});for(var a in t){var n=Object(f.a)(t[a]).sort(x);e=[].concat(Object(f.a)(e),[n])}e=Object(f.a)(e).sort(y);var c,s=[],r=Object(b.a)(e);try{for(r.s();!(c=r.n()).done;){var l=c.value;s=[].concat(Object(f.a)(s),Object(f.a)(l))}}catch(o){r.e(o)}finally{r.f()}w(s),!i&&j(!i)}}),Object(p.jsx)(O,{onClick:S,sorted:i})]})]})]}),Object(p.jsx)("div",{children:N})]})},g=function(){var e=Object(n.useState)(window.innerWidth),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(){return c(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:a}},w=function(e){var t=e.playlist,a=e.onPlaylistSelect,n=e.selectedPlaylist;return Object(p.jsxs)("div",{className:"playlist-item ".concat(n&&n.name===t.name?"active":""),onClick:function(){return a(t)},children:[Object(p.jsx)("div",{className:"list-image",children:Object(p.jsx)("img",{src:t.images[1].url,alt:t.name})}),Object(p.jsx)("div",{className:"list-info",children:t.name})]})};var N=function(e){var t=e.playlist,a=e.onPlaylistSelect,n=e.selectedPlaylist;return Object(p.jsx)("div",{className:"playlist-item ".concat(n&&n.name===t.name?"active":""),onClick:function(){return a(t)},children:t.name})},S=function(e){var t=e.playlist,a=e.onPlaylistSelect,n=e.selectedPlaylist,c=g().width;return console.log(t),c<768?Object(p.jsx)(w,{playlist:t,onPlaylistSelect:a,selectedPlaylist:n}):Object(p.jsx)(N,{playlist:t,onPlaylistSelect:a,selectedPlaylist:n})};var P=function(e){var t=e.playlists,a=e.onPlaylistSelect,n=e.selectedPlaylist,c=t.map((function(e){return Object(p.jsx)(S,{playlist:e,onPlaylistSelect:a,selectedPlaylist:n},e.id)}));return Object(p.jsxs)("div",{className:"playlists ".concat(n?"disable-scroll":""),children:[Object(p.jsx)("h1",{className:"playlists-header",children:"Your Playlists"}),c]})},_=function(e){var t=e.access_token,a=Object(n.useState)([]),c=Object(u.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(!1),j=Object(u.a)(i,2),b=j[0],f=j[1],h=Object(n.useState)(null),m=Object(u.a)(h,2),O=m[0],v=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.data.items}));case 2:a=e.sent,r(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);return Object(p.jsxs)("div",{className:"dashboard",children:[Object(p.jsx)(P,{playlists:s,onPlaylistSelect:function(e){f(!0),v(e)},selectedPlaylist:O}),Object(p.jsx)("div",{className:"playlist-container ".concat(b?"playlist-slidein":""),children:O?Object(p.jsx)(k,{playlist:O,access_token:t,onExit:function(){f(!1),setTimeout((function(){return v(null)}),400)}}):null})]})};var C=function(){return Object(p.jsxs)("div",{className:"login-container",children:[Object(p.jsx)("h1",{className:"login-header",children:"Sortify"}),Object(p.jsx)("a",{className:"spotify spotify-btn spotify-btn-login",href:"https://spotify-sorting-app.herokuapp.com/login",children:"Login with Spotify"})]})},E=new URLSearchParams(window.location.search).get("access_token");var z=function(){return E?Object(p.jsx)(_,{access_token:E}):Object(p.jsx)(C,{})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.bbb520bf.chunk.js.map