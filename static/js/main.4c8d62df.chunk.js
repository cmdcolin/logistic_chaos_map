(this.webpackJsonplogistic_map_chaos=this.webpackJsonplogistic_map_chaos||[]).push([[0],{21:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),i=a.n(n),r=a(12),o=a.n(r),s=a(3),b=a(13),l=a(5),u=a.n(l),j=a(8),h=a(4),f=(a(21),a(2)),O=u.a.mark(d);function d(e,t,a,c,n,i,r,o,s){var b,l,j,h,f,d,x,m,v,p,g,k,w,y;return u.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:b=(n-c)/t,l=1e3*Math.pow(1.5,Math.log(1/(n-c))),j=0;case 3:if(!(j<t)){u.next=11;break}return u.next=6,j+1;case 6:for(h=j*b+c,f=0,d=0;f<o&&d<100;d++){for(x=Math.random(),m=0;m<Math.max(l,1e4);m++)x=h*x*(1-x);if(s)for(v=0;v<500;v++)g=a*((h-c)/(n-c)),(p=t*((x-i)/(r-i)))>0&&p<t&&(e.fillRect(p,g,.7,.7),f++),x=h*x*(1-x);else for(k=0;k<500;k++)y=t*((h-c)/(n-c)),(w=a*((x-i)/(r-i)))>0&&w<a&&(e.fillRect(y,w,.7,.7),f++),x=h*x*(1-x)}case 8:j++,u.next=3;break;case 11:case"end":return u.stop()}}),O)}var x=a(14),m=a.n(x);function v(e){return new Promise((function(t){return setTimeout(t,e)}))}var p=function(){var e=Object(n.useState)(),t=Object(h.a)(e,2),i=t[0],r=t[1],o=Object(n.useState)(),l=Object(h.a)(o,2),O=l[0],x=l[1],p=Object(f.e)({minX:Object(f.f)(f.b,0),maxX:Object(f.f)(f.b,1),minR:Object(f.f)(f.b,2),maxR:Object(f.f)(f.b,4),opacity:Object(f.f)(f.d,"0.1"),resolution:Object(f.f)(f.d,"500"),animate:Object(f.f)(f.a,!0),drawWithWasm:Object(f.f)(f.a,!1),vertical:Object(f.f)(f.a,!1)}),g=Object(h.a)(p,2),k=g[0],w=g[1],y=Object(n.useState)(),R=Object(h.a)(y,2),M=R[0],S=R[1],C=Object(n.useState)(),N=Object(h.a)(C,2),X=N[0],_=N[1],W=Object(n.useState)(),E=Object(h.a)(W,2),B=E[0],D=E[1],F=Object(n.useState)(!0),P=Object(h.a)(F,2),T=P[0],z=P[1],A=Object(n.useState)(),I=Object(h.a)(A,2),J=I[0],L=I[1],Y=Object(n.useState)(0),G=Object(h.a)(Y,2),U=G[0],V=G[1],q=function(){var e=Object(n.useState)(0),t=Object(h.a)(e,2)[1];return Object(n.useCallback)((function(){t((function(e){return e+1}))}),[])}();Object(n.useEffect)((function(){Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.e(3).then(a.bind(null,39));case 3:t=e.sent,L(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]);var H=k.drawWithWasm,K=k.minX,Q=k.maxX,Z=k.minR,$=k.maxR,ee=k.opacity,te=k.resolution,ae=k.animate,ce=k.vertical;return Object(n.useEffect)((function(){var e=!1;return Object(j.a)(u.a.mark((function t(){var a,c,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!J||Number.isNaN(+ee)||Number.isNaN(+te)){t.next=13;break}if(i){t.next=3;break}return t.abrupt("return");case 3:if(a=i.getContext("2d")){t.next=6;break}return t.abrupt("return");case 6:c=i.getBoundingClientRect(),n=c.width,r=c.height,i.width=2*n,i.height=2*r,a.scale(2,2),z(!0),V(0),setTimeout(Object(j.a)(u.a.mark((function t(){var c,i,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.fillStyle="white",a.fillRect(0,0,n,r),a.fillStyle="rgba(0,0,0,".concat(+ee,")"),!H){t.next=7;break}J.draw(a,n,r,Z,$,K,Q,+te,ce),t.next=28;break;case 7:c=Object(b.a)(d(a,n,r,Z,$,K,Q,+te,ce)),t.prev=8,c.s();case 10:if((i=c.n()).done){t.next=20;break}if(o=i.value,!ae){t.next=16;break}return V(o/n),t.next=16,v(1);case 16:if(!e){t.next=18;break}return t.abrupt("break",20);case 18:t.next=10;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(8),c.e(t.t0);case 25:return t.prev=25,c.f(),t.finish(25);case 28:e||(z(!1),V(0));case 29:case"end":return t.stop()}}),t,null,[[8,22,25,28]])}))),100);case 13:case"end":return t.stop()}}),t)})))(),function(){e=!0}}),[Z,$,K,Q,ce,ae,H,ee,te,i,J]),Object(n.useEffect)((function(){if(O){var e=O.getContext("2d");if(e){var t=O.getBoundingClientRect(),a=t.width,c=t.height;if(O.width=a,O.height=c,M){e.clearRect(0,0,a,c);var n=Object(h.a)(M,2),i=n[0],r=n[1],o=Object(h.a)(B,2),s=o[0],b=o[1];e.fillStyle="rgba(255,0,0,0.3)",e.fillRect(i,r,s-i,b-r)}}}}),[M,B,O]),Object(c.jsxs)("div",{style:{margin:20},children:[Object(c.jsx)("h1",{children:Object(c.jsx)("a",{href:"https://github.com/cmdcolin/logistic_chaos_map",children:"f(x)=rx(x-1)"})}),Object(c.jsx)("p",{children:"The function above is iterated for values of r between [2,4] and x between [0,1] and points. Click and drag a region to zoom in."}),Object(c.jsxs)("div",{className:"controls",children:[Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("label",{htmlFor:"opacity",children:"Opacity"}),Object(c.jsx)("input",{id:"opacity",type:"text",value:ee,onChange:function(e){w(Object(s.a)(Object(s.a)({},k),{},{opacity:e.target.value})),q()}})]}),Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("label",{htmlFor:"resolution",children:"Points to draw at each X"}),Object(c.jsx)("input",{id:"resolution",type:"text",value:te,onChange:function(e){w(Object(s.a)(Object(s.a)({},k),{},{resolution:e.target.value})),q()}})]}),Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("label",{htmlFor:"wasm",children:"Draw with WASM"}),Object(c.jsx)("input",{id:"wasm",type:"checkbox",checked:H,onChange:function(e){w(Object(s.a)(Object(s.a)({},k),{},{drawWithWasm:e.target.checked})),q()}})]}),Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("label",{htmlFor:"vertical",children:"Vertical"}),Object(c.jsx)("input",{id:"vertical",type:"checkbox",checked:ce,onChange:function(e){w(Object(s.a)(Object(s.a)({},k),{},{vertical:e.target.checked})),q()}})]}),H?null:Object(c.jsxs)("div",{className:"block",children:[Object(c.jsx)("label",{htmlFor:"animate",children:"Animate?"}),Object(c.jsx)("input",{id:"animate",disabled:H,type:"checkbox",checked:k.animate,onChange:function(e){w(Object(s.a)(Object(s.a)({},k),{},{animate:e.target.checked})),q()}})]}),Object(c.jsx)("p",{children:T?"Loading...".concat(U?(100*U).toPrecision(3):""):null}),Object(c.jsx)("button",{onClick:function(){i.toBlob((function(e){m()(e,"logistic_map_".concat(+Date.now(),".png"))}))},children:"Save as PNG"}),Object(c.jsx)("button",{onClick:function(){w(Object(s.a)(Object(s.a)({},k),{},{minX:0,maxX:1,minR:2,maxR:4})),q()},children:"Reset"})]}),Object(c.jsxs)("div",{style:{position:"relative"},children:[Object(c.jsx)("canvas",{ref:function(e){return r(e)},style:{background:"white",width:"100%",height:"100vh",position:"absolute",left:0,top:0}}),Object(c.jsx)("canvas",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100vh",zIndex:1e3},ref:function(e){return x(e)},onMouseDown:function(e){var t=e.nativeEvent,a=t.offsetX,c=t.offsetY;S([a,c]),D([a,c])},onMouseMove:function(e){var t=e.nativeEvent,a=t.offsetX,c=t.offsetY;M&&D([a,c])},onMouseLeave:function(){S(),D(),_(+Date.now())},onMouseUp:function(){if(+Date.now()-X>200){var e=Math.min(M[0],B[0]),t=Math.max(M[0],B[0]),a=Math.min(M[1],B[1]),c=Math.max(M[1],B[1]),n=O.getBoundingClientRect(),i=n.width,r=n.height;w(Object(s.a)(Object(s.a)({},k),{},{minR:($-Z)*e/i+Z,maxR:($-Z)*t/i+Z,minX:(Q-K)*a/r+K,maxX:(Q-K)*c/r+K})),q(),S(),D()}else _(),S(),D()}})]})]})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(f.c,{children:Object(c.jsx)(p,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.4c8d62df.chunk.js.map