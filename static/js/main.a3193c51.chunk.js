(this.webpackJsonps=this.webpackJsonps||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),c=n.n(a),r=n(4),o=n.n(r),s=n(2);var f=function(){var t=Object(a.useState)(),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(),o=Object(s.a)(r,2),f=o[0],l=o[1],u=Object(a.useState)({minX:0,maxX:1,minR:2,maxR:4}),h=Object(s.a)(u,2),d=h[0],b=h[1],j=Object(a.useState)(),x=Object(s.a)(j,2),m=x[0],v=x[1],O=Object(a.useState)(),g=Object(s.a)(O,2),R=g[0],p=g[1],w=Object(a.useState)(!0),X=Object(s.a)(w,2),M=X[0],S=X[1];Object(a.useEffect)((function(){var t=d.minX,e=d.maxX,i=d.minR,a=d.maxR;if(n){var c=n.getContext("2d");if(c){var r=n.getBoundingClientRect(),o=r.width,s=r.height;n.width=o,n.height=s,requestIdleCallback((function(){!function(){c.fillStyle="rgba(0,0,0,0.5)";for(var n=(a-i)/o,r=(e-t)/s,f=i;f<a;f+=n)for(var l=t;l<e;l+=10*r){for(var u=l,h=0;h<100;h++)u=f*u*(1-u);for(var d=0;d<10;d++)c.fillRect(o*((f-i)/(a-i)),u*s,.5,.5),u=f*u*(1-u)}}(),S(!1)}))}}}),[d,n]),Object(a.useEffect)((function(){if(f){var t=f.getContext("2d");if(t){var e=f.getBoundingClientRect(),n=e.width,i=e.height;if(f.width=n,f.height=i,M&&(t.clearRect(0,0,n,i),t.font="100px Verdana",t.textAlign="center",t.textBaseline="middle",t.fillText("Loading...",n/2,i/2)),m){t.clearRect(0,0,n,i);var a=Object(s.a)(m,2),c=a[0],r=a[1],o=Object(s.a)(R,2),l=o[0],u=o[1];t.fillStyle="rgba(255,0,0,0.3)",t.fillRect(c,r,l-c,u-r)}}}}),[m,R,f,M]);var C=d.minR,y=d.maxR,k=d.minX,B=d.maxX;return Object(i.jsxs)("div",{style:{margin:20},children:[Object(i.jsx)("h1",{children:"f(x)=rx(x-1)"}),Object(i.jsx)("p",{children:"The function above is iterated for values of r between [2,4] and x between [0,1] and points where it lands after 100 initial warm up iterations are plotted"}),Object(i.jsxs)("p",{children:["Current params: r=[",C,",",y,"] x=[",k,",",B,"]"]}),Object(i.jsx)("button",{onClick:function(){return b({minR:2,maxR:4,minX:0,maxX:1})},children:"Reset"}),Object(i.jsxs)("div",{style:{position:"relative"},children:[Object(i.jsx)("canvas",{ref:function(t){return c(t)},style:{background:"white",width:"100%",height:"100vh",position:"absolute",left:0,top:0}}),Object(i.jsx)("canvas",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100vh",zIndex:100},ref:function(t){return l(t)},onMouseDown:function(t){var e=t.nativeEvent,n=e.offsetX,i=e.offsetY;v([n,i]),p([n,i])},onMouseMove:function(t){var e=t.nativeEvent,n=e.offsetX,i=e.offsetY;m&&p([n,i])},onMouseUp:function(){var t=Math.min(m[0],R[0]),e=Math.max(m[0],R[0]),n=Math.min(m[1],R[1]),i=Math.max(m[1],R[1]),a=d.maxR,c=d.minR,r=d.maxX,o=d.minX,s=f.getBoundingClientRect(),l=s.width,u=s.height;b({minR:(a-c)*t/l+c,maxR:(a-c)*e/l+c,minX:(r-o)*n/u+o,maxX:(r-o)*i/u+r}),v(void 0),p(void 0),S(!0)}})]})]})};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a3193c51.chunk.js.map