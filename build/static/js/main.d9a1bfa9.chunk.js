(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(t,e,s){},30:function(t,e){var s=function(t,e,s,a){var r,c,i;r=t[a],t[a]=t[s],t[s]=r,c=e;for(var o=e;o<s;o++)if(n(t[o],r)){var l=[t[c],t[o]];t[o]=l[0],t[c]=l[1],c++}return i=c,t[s]=t[i],t[i]=r,i},a=function t(e,a,n){var r,c;n>a&&(r=Math.floor((a+n)/2),t(e,a,(c=s(e,a,n,r))-1),t(e,c+1,n))},n=function(t,e){return Date.parse(t.track.album.release_date)<Date.parse(e.track.album.release_date)};t.exports={partition:s,quickSort:function(t){a(t,0,t.length-1)},quickSortRecursive:a,compareTracks:n,compare:function(t,e){var s,a,n=0;return(s=Date.parse(t.track.album.release_date))<(a=Date.parse(e.track.album.release_date))?n=-1:a>s&&(n=1),n}}},57:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s.n(a),r=s(27),c=s.n(r),i=s(7),o=s.n(i),l=s(11),u=s(28),d=s(29),p=s(32),h=s(31),j=s(10),f=s.n(j),m=(s(25),s(30)),b=s(12),v=s(13),k=s(14),x=s(8),y=s(1);var g=function(t){var e=t.song;return Object(y.jsx)(x.a.Item,{className:"song",children:Object(y.jsx)(b.a,{children:Object(y.jsxs)(v.a,{children:[Object(y.jsx)("div",{className:"song-title",children:e.track.name}),Object(y.jsx)("div",{className:"song-artist",children:e.track.artists[0].name})]})})})};var O=function(t){var e=t.songs,s=t.name,a=e.map((function(t,e){return Object(y.jsx)(g,{song:t},t.track.id)}));return Object(y.jsxs)("div",{className:"playlist",children:[Object(y.jsx)("h1",{className:"playlist-header",children:s}),Object(y.jsx)(x.a,{children:a})]})};var S=function(t){var e=t.playlist,s=t.onPlaylistSelect,a=t.selectedPlaylist;return Object(y.jsx)(x.a.Item,{className:"playlist-item item ".concat(a&&a.name===e.name?"active":""),onClick:function(){return s(e)},children:e.name})};var P=function(t){var e=t.playlists,s=t.onPlaylistSelect,a=t.selectedPlaylist,n=e.map((function(t){return Object(y.jsx)(S,{playlist:t,onPlaylistSelect:s,selectedPlaylist:a},t.id)}));return Object(y.jsx)(x.a,{className:"playlists",children:n})},w=s(9);var C=function(t){var e=t.onClick;return Object(y.jsx)(w.a,{variant:"primary",onClick:function(){return e()},children:"Sort"})};var N=function(t){var e=t.onClick,s=t.sorted;return Object(y.jsx)(w.a,{variant:"light",onClick:function(){return e()},disabled:s,children:"Save"})},_=function(t){Object(p.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(u.a)(this,s),(a=e.call(this,t)).onPlaylistSelect=function(){var t=Object(l.a)(o.a.mark((function t(e){var s,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get(e.tracks.href,{headers:{Authorization:"Bearer ".concat(a.props.access_token)}});case 2:s=t.sent,n=s.data.items;case 4:if(!(n.length<s.data.total)){t.next=11;break}return t.next=7,f.a.get(e.tracks.href,{params:{offset:n.length,limit:100},headers:{Authorization:"Bearer ".concat(a.props.access_token)}}).then((function(t){return t.data.items}));case 7:r=t.sent,n=n.concat(r),t.next=4;break;case 11:console.log(n),a.setState({selectedPlaylist:e,songs:n,sorted:!1});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.onSortButtonClicked=function(){var t=a.state.songs.sort(m.compare).reverse();a.setState({songs:t,sorted:!0})},a.onSaveButtonClicked=Object(l.a)(o.a.mark((function t(){var e,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.state.sorted){t.next=6;break}return e=a.state.songs,s=e.map((function(t){return t.track.uri})),t.next=5,f.a.put("https://api.spotify.com/v1/playlists/".concat(a.state.selectedPlaylist.id,"/tracks"),{uris:s.slice(0,100)},{headers:{Authorization:"Bearer ".concat(a.props.access_token)}}).then(Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(s.length>100)){t.next=8;break}e=100;case 2:if(!(e<s.length)){t.next=8;break}return t.next=5,f.a.post("https://api.spotify.com/v1/playlists/".concat(a.state.selectedPlaylist.id,"/tracks"),{uris:s.slice(e,e+100)},{headers:{Authorization:"Bearer ".concat(a.props.access_token)}});case 5:e+=100,t.next=2;break;case 8:case"end":return t.stop()}}),t)})))).catch((function(t){t.response?(console.log(t.response.data),console.log(t.response.status),console.log(t.response.headers)):t.request?console.log(t.request):console.log("Error",t.message),console.log(t.config)}));case 5:a.setState({sorted:!1});case 6:case"end":return t.stop()}}),t)}))),a.state={playlists:[],selectedPlaylist:null,songs:[],sorted:!1},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=Object(l.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://api.spotify.com/v1/me/playlists",{headers:{Authorization:"Bearer ".concat(this.props.access_token)}}).then((function(t){return t.data.items}));case 2:e=t.sent,this.setState({playlists:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(y.jsx)(b.a,{className:"dashboard",children:Object(y.jsxs)(v.a,{children:[Object(y.jsx)(k.a,{md:3,children:Object(y.jsx)(P,{playlists:this.state.playlists,onPlaylistSelect:this.onPlaylistSelect,selectedPlaylist:this.state.selectedPlaylist})}),Object(y.jsx)(k.a,{fluid:!0,children:this.state.selectedPlaylist?Object(y.jsx)(O,{songs:this.state.songs,name:this.state.selectedPlaylist.name}):null}),this.state.selectedPlaylist?Object(y.jsx)(k.a,{md:2,children:Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsx)(C,{onClick:this.onSortButtonClicked}),Object(y.jsx)(N,{onClick:this.onSaveButtonClicked,sorted:!this.state.sorted})]})}):null]})})}}]),s}(n.a.Component);var B=function(){return Object(y.jsxs)("div",{className:"login-container",children:[Object(y.jsx)("h1",{className:"login-header",children:"Sortify"}),Object(y.jsx)(w.a,{className:"spotify spotify-btn spotify-btn-login",href:"https://spotify-sorting-app.herokuapp.com/login",children:"Login with Spotify"})]})},z=new URLSearchParams(window.location.search).get("access_token");var A=function(){return z?Object(y.jsx)(_,{access_token:z}):Object(y.jsx)(B,{})};c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(A,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.d9a1bfa9.chunk.js.map