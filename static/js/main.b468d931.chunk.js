(this.webpackJsonplogistic_map_chaos=this.webpackJsonplogistic_map_chaos||[]).push([[0],{19:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(12),r=a.n(i),o=a(3),s=a(13),l=a(5),b=a(8),j=a(4),u=(a(19),a(2)),h=Object(l.a)().mark(f);function f(e,t,a,c,n,i,r,o,s){var b,j,u,f,O,d,m,x,p,v,g,k,w,y;return Object(l.a)().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:b=(n-c)/t,j=1e3*Math.pow(1.5,Math.log(1/(n-c))),u=0;case 3:if(!(u<t)){l.next=11;break}return l.next=6,u+1;case 6:for(f=u*b+c,O=0,d=0;O<o&&d<100;d++){for(m=Math.random(),x=0;x<Math.max(j,1e4);x++)m=f*m*(1-m);if(s)for(p=0;p<500;p++)g=a*((f-c)/(n-c)),(v=t*((m-i)/(r-i)))>0&&v<t&&(e.fillRect(v,g,.7,.7),O++),m=f*m*(1-m);else for(k=0;k<500;k++)y=t*((f-c)/(n-c)),(w=a*((m-i)/(r-i)))>0&&w<a&&(e.fillRect(y,w,.7,.7),O++),m=f*m*(1-m)}case 8:u++,l.next=3;break;case 11:case"end":return l.stop()}}),h)}var O=a(14),d=a.n(O),m=a(1);function x(e){return new Promise((function(t){return setTimeout(t,e)}))}var p=function(){var e=Object(c.useState)(),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(),h=Object(j.a)(r,2),O=h[0],p=h[1],v=Object(u.e)({minX:Object(u.f)(u.b,0),maxX:Object(u.f)(u.b,1),minR:Object(u.f)(u.b,2),maxR:Object(u.f)(u.b,4),opacity:Object(u.f)(u.d,"0.3"),resolution:Object(u.f)(u.d,"1000"),animate:Object(u.f)(u.a,!0),drawWithWasm:Object(u.f)(u.a,!1),vertical:Object(u.f)(u.a,!1),scaleFactor:Object(u.f)(u.d,"2")}),g=Object(j.a)(v,2),k=g[0],w=g[1],y=Object(c.useState)(),N=Object(j.a)(y,2),R=N[0],S=N[1],C=Object(c.useState)(),M=Object(j.a)(C,2),X=M[0],F=M[1],W=Object(c.useState)(),_=Object(j.a)(W,2),z=_[0],E=_[1],B=Object(c.useState)(!0),D=Object(j.a)(B,2),T=D[0],P=D[1],A=Object(c.useState)(),I=Object(j.a)(A,2),J=I[0],L=I[1],Y=Object(c.useState)(0),G=Object(j.a)(Y,2),U=G[0],V=G[1],q=function(){var e=Object(c.useState)(0),t=Object(j.a)(e,2)[1];return Object(c.useCallback)((function(){t((function(e){return e+1}))}),[])}();Object(c.useEffect)((function(){Object(b.a)(Object(l.a)().mark((function e(){var t;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.e(3).then(a.bind(null,39));case 3:t=e.sent,L(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]);var H=k.drawWithWasm,K=k.minX,Q=k.maxX,Z=k.minR,$=k.maxR,ee=k.opacity,te=k.resolution,ae=k.animate,ce=k.vertical,ne=k.scaleFactor,ie=+ne;return Object(c.useEffect)((function(){var e=!1;return Object(b.a)(Object(l.a)().mark((function t(){var a,c,i,r;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!J||Number.isNaN(ie)||Number.isNaN(+ee)||Number.isNaN(+te)){t.next=12;break}if(n){t.next=3;break}return t.abrupt("return");case 3:if(a=n.getContext("2d")){t.next=6;break}return t.abrupt("return");case 6:c=n.getBoundingClientRect(),i=c.width,r=c.height,n.width=i*ie,n.height=r*ie,P(!0),V(0),setTimeout(Object(b.a)(Object(l.a)().mark((function t(){var c,n,o;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.fillStyle="white",a.fillRect(0,0,i*ie,r*ie),a.fillStyle="rgba(0,0,0,".concat(+ee,")"),!H){t.next=7;break}J.draw(a,i*ie,r*ie,Z,$,K,Q,+te,ce),t.next=28;break;case 7:c=Object(s.a)(f(a,i*ie,r*ie,Z,$,K,Q,+te,ce)),t.prev=8,c.s();case 10:if((n=c.n()).done){t.next=20;break}if(o=n.value,!ae){t.next=16;break}return V(o/(i*ie)),t.next=16,x(1);case 16:if(!e){t.next=18;break}return t.abrupt("break",20);case 18:t.next=10;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(8),c.e(t.t0);case 25:return t.prev=25,c.f(),t.finish(25);case 28:e||(P(!1),V(0));case 29:case"end":return t.stop()}}),t,null,[[8,22,25,28]])}))),100);case 12:case"end":return t.stop()}}),t)})))(),function(){e=!0}}),[Z,$,K,Q,ie,ce,ae,H,ee,te,n,J]),Object(c.useEffect)((function(){if(O){var e=O.getContext("2d");if(e){var t=O.getBoundingClientRect(),a=t.width,c=t.height;if(O.width=a,O.height=c,R){e.clearRect(0,0,a,c);var n=Object(j.a)(R,2),i=n[0],r=n[1],o=Object(j.a)(z,2),s=o[0],l=o[1];e.fillStyle="rgba(255,0,0,0.3)",e.fillRect(i,r,s-i,l-r)}}}}),[R,z,O]),Object(m.jsxs)("div",{style:{margin:20},children:[Object(m.jsx)("h1",{children:Object(m.jsx)("a",{href:"https://github.com/cmdcolin/logistic_chaos_map",children:"f(x)=rx(x-1)"})}),Object(m.jsx)("p",{children:"The function above is iterated for values of r between [2,4] and x between [0,1] and points. Click and drag a region to zoom in. The program iterates until it draws N points in the zoomed in region, which results in higher computation time at zoomed in values. When zoomed in, it has to iterate the logistic map longer to find that many points to draw resulting in it being slower when zoomed in. The scale factor makes the canvas size larger, allowing the code to render higher resolution (larger) images."}),Object(m.jsxs)("div",{className:"controls",children:[Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("label",{htmlFor:"opacity",children:"Opacity"}),Object(m.jsx)("input",{id:"opacity",type:"text",value:ee,onChange:function(e){w(Object(o.a)(Object(o.a)({},k),{},{opacity:e.target.value})),q()}})]}),Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("label",{htmlFor:"resolution",children:"N"}),Object(m.jsx)("input",{id:"resolution",type:"text",value:te,onChange:function(e){w(Object(o.a)(Object(o.a)({},k),{},{resolution:e.target.value})),q()}})]}),Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("label",{htmlFor:"scalefactor",children:"Scale factor"}),Object(m.jsx)("input",{id:"scalefactor",type:"text",value:ne,onChange:function(e){w(Object(o.a)(Object(o.a)({},k),{},{scaleFactor:e.target.value})),q()}})]}),Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("label",{htmlFor:"wasm",children:"Draw with WASM"}),Object(m.jsx)("input",{id:"wasm",type:"checkbox",checked:H,onChange:function(e){w(Object(o.a)(Object(o.a)({},k),{},{drawWithWasm:e.target.checked})),q()}})]}),Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("label",{htmlFor:"vertical",children:"Vertical"}),Object(m.jsx)("input",{id:"vertical",type:"checkbox",checked:ce,onChange:function(e){w(Object(o.a)(Object(o.a)({},k),{},{vertical:e.target.checked})),q()}})]}),H?null:Object(m.jsxs)("div",{className:"block",children:[Object(m.jsx)("label",{htmlFor:"animate",children:"Animate?"}),Object(m.jsx)("input",{id:"animate",disabled:H,type:"checkbox",checked:k.animate,onChange:function(e){w(Object(o.a)(Object(o.a)({},k),{},{animate:e.target.checked})),q()}})]}),Object(m.jsx)("p",{children:T?"Loading...".concat(U?(100*U).toPrecision(3)+"%":""):null}),Object(m.jsx)("button",{onClick:function(){n.toBlob((function(e){d()(e,"logistic_map_".concat(+Date.now(),".png"))}))},children:"Save as PNG"}),Object(m.jsx)("button",{onClick:function(){w(Object(o.a)(Object(o.a)({},k),{},{minX:0,maxX:1,minR:2,maxR:4})),q()},children:"Reset"})]}),Object(m.jsxs)("div",{style:{position:"relative"},children:[Object(m.jsx)("canvas",{ref:function(e){return i(e)},style:{background:"white",width:"100%",height:"100vh",position:"absolute",left:0,top:0}}),Object(m.jsx)("canvas",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100vh",zIndex:1e3},ref:function(e){return p(e)},onMouseDown:function(e){var t=e.nativeEvent,a=t.offsetX,c=t.offsetY;S([a,c]),E([a,c])},onMouseMove:function(e){var t=e.nativeEvent,a=t.offsetX,c=t.offsetY;R&&E([a,c])},onMouseLeave:function(){S(),E(),F(+Date.now())},onMouseUp:function(){if(+Date.now()-X>100){console.log("t1");var e=Math.min(R[0],z[0]),t=Math.max(R[0],z[0]),a=Math.min(R[1],z[1]),c=Math.max(R[1],z[1]),n=O.getBoundingClientRect(),i=n.width,r=n.height,s=ce?{minR:($-Z)*a/r+Z,maxR:($-Z)*c/r+Z,minX:(Q-K)*e/i+K,maxX:(Q-K)*t/i+K}:{minR:($-Z)*e/i+Z,maxR:($-Z)*t/i+Z,minX:(Q-K)*a/r+K,maxX:(Q-K)*c/r+K};w(Object(o.a)(Object(o.a)({},k),s)),q(),S(),E()}else console.log("t2"),F(),S(),E()}})]})]})};r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(u.c,{children:Object(m.jsx)(p,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b468d931.chunk.js.map