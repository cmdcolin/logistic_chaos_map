(this.webpackJsonplogistic_map_chaos=this.webpackJsonplogistic_map_chaos||[]).push([[0],{21:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),i=a.n(c),r=a(12),o=a.n(r),s=a(3),b=a(13),l=a(5),u=a.n(l),j=a(8),h=a(4),f=(a(21),a(2)),d=u.a.mark(O);function O(e,t,a,n,c,i,r,o,s){var b,l,j,h,f,O,m,x,p,v,g,w,k,y;return u.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:b=(c-n)/t,l=1e3*Math.pow(1.5,Math.log(1/(c-n))),j=0;case 3:if(!(j<s?a:t)){u.next=11;break}return u.next=6,j+1;case 6:for(h=j*b+n,f=0,O=0;f<o&&O<100;O++){for(m=Math.random(),x=0;x<Math.max(l,1e4);x++)m=h*m*(1-m);if(s)for(p=0;p<500;p++)g=a*((h-n)/(c-n)),(v=t*((m-i)/(r-i)))>0&&v<t&&(e.fillRect(v,g,.7,.7),f++),m=h*m*(1-m);else for(w=0;w<500;w++)y=t*((h-n)/(c-n)),(k=a*((m-i)/(r-i)))>0&&k<a&&(e.fillRect(y,k,.7,.7),f++),m=h*m*(1-m)}case 8:j++,u.next=3;break;case 11:case"end":return u.stop()}}),d)}var m=a(14),x=a.n(m);function p(e){return new Promise((function(t){return setTimeout(t,e)}))}var v=function(){var e=Object(c.useState)(),t=Object(h.a)(e,2),i=t[0],r=t[1],o=Object(c.useState)(),l=Object(h.a)(o,2),d=l[0],m=l[1],v=Object(f.e)({minX:Object(f.f)(f.b,0),maxX:Object(f.f)(f.b,1),minR:Object(f.f)(f.b,2),maxR:Object(f.f)(f.b,4),opacity:Object(f.f)(f.d,"0.1"),resolution:Object(f.f)(f.d,"500"),animate:Object(f.f)(f.a,!0),drawWithWasm:Object(f.f)(f.a,!1),vertical:Object(f.f)(f.a,!1)}),g=Object(h.a)(v,2),w=g[0],k=g[1],y=Object(c.useState)(),R=Object(h.a)(y,2),M=R[0],N=R[1],S=Object(c.useState)(),C=Object(h.a)(S,2),X=C[0],W=C[1],_=Object(c.useState)(),z=Object(h.a)(_,2),E=z[0],B=z[1],D=Object(c.useState)(!0),F=Object(h.a)(D,2),T=F[0],P=F[1],A=Object(c.useState)(),I=Object(h.a)(A,2),J=I[0],L=I[1],Y=Object(c.useState)(0),G=Object(h.a)(Y,2),U=G[0],V=G[1],q=function(){var e=Object(c.useState)(0),t=Object(h.a)(e,2)[1];return Object(c.useCallback)((function(){t((function(e){return e+1}))}),[])}();Object(c.useEffect)((function(){Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.e(3).then(a.bind(null,39));case 3:t=e.sent,L(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]);var H=w.drawWithWasm,K=w.minX,Q=w.maxX,Z=w.minR,$=w.maxR,ee=w.opacity,te=w.resolution,ae=w.animate,ne=w.vertical;return Object(c.useEffect)((function(){var e=!1;return Object(j.a)(u.a.mark((function t(){var a,n,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!J||Number.isNaN(+ee)||Number.isNaN(+te)){t.next=13;break}if(i){t.next=3;break}return t.abrupt("return");case 3:if(a=i.getContext("2d")){t.next=6;break}return t.abrupt("return");case 6:n=i.getBoundingClientRect(),c=n.width,r=n.height,i.width=2*c,i.height=2*r,a.scale(2,2),P(!0),V(0),setTimeout(Object(j.a)(u.a.mark((function t(){var n,i,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.fillStyle="white",a.fillRect(0,0,c,r),a.fillStyle="rgba(0,0,0,".concat(+ee,")"),!H){t.next=7;break}J.draw(a,c,r,Z,$,K,Q,+te,ne),t.next=28;break;case 7:n=Object(b.a)(O(a,c,r,Z,$,K,Q,+te,ne)),t.prev=8,n.s();case 10:if((i=n.n()).done){t.next=20;break}if(o=i.value,!ae){t.next=16;break}return V(o/(ne?r:c)),t.next=16,p(1);case 16:if(!e){t.next=18;break}return t.abrupt("break",20);case 18:t.next=10;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t.catch(8),n.e(t.t0);case 25:return t.prev=25,n.f(),t.finish(25);case 28:e||(P(!1),V(0));case 29:case"end":return t.stop()}}),t,null,[[8,22,25,28]])}))),100);case 13:case"end":return t.stop()}}),t)})))(),function(){e=!0}}),[Z,$,K,Q,ne,ae,H,ee,te,i,J]),Object(c.useEffect)((function(){if(d){var e=d.getContext("2d");if(e){var t=d.getBoundingClientRect(),a=t.width,n=t.height;if(d.width=a,d.height=n,M){e.clearRect(0,0,a,n);var c=Object(h.a)(M,2),i=c[0],r=c[1],o=Object(h.a)(E,2),s=o[0],b=o[1];e.fillStyle="rgba(255,0,0,0.3)",e.fillRect(i,r,s-i,b-r)}}}}),[M,E,d]),Object(n.jsxs)("div",{style:{margin:20},children:[Object(n.jsx)("h1",{children:Object(n.jsx)("a",{href:"https://github.com/cmdcolin/logistic_chaos_map",children:"f(x)=rx(x-1)"})}),Object(n.jsx)("p",{children:"The function above is iterated for values of r between [2,4] and x between [0,1] and points. Click and drag a region to zoom in. The program iterates until it draws N points in the zoomed in region, which results in higher computation time at zoomed in values. When zoomed in, it has to iterate the logistic map longer to find that many points to draw resulting in it being slower when zoomed in."}),Object(n.jsxs)("div",{className:"controls",children:[Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("label",{htmlFor:"opacity",children:"Opacity"}),Object(n.jsx)("input",{id:"opacity",type:"text",value:ee,onChange:function(e){k(Object(s.a)(Object(s.a)({},w),{},{opacity:e.target.value})),q()}})]}),Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("label",{htmlFor:"resolution",children:"N"}),Object(n.jsx)("input",{id:"resolution",type:"text",value:te,onChange:function(e){k(Object(s.a)(Object(s.a)({},w),{},{resolution:e.target.value})),q()}})]}),Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("label",{htmlFor:"wasm",children:"Draw with WASM"}),Object(n.jsx)("input",{id:"wasm",type:"checkbox",checked:H,onChange:function(e){k(Object(s.a)(Object(s.a)({},w),{},{drawWithWasm:e.target.checked})),q()}})]}),Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("label",{htmlFor:"vertical",children:"Vertical"}),Object(n.jsx)("input",{id:"vertical",type:"checkbox",checked:ne,onChange:function(e){k(Object(s.a)(Object(s.a)({},w),{},{vertical:e.target.checked})),q()}})]}),H?null:Object(n.jsxs)("div",{className:"block",children:[Object(n.jsx)("label",{htmlFor:"animate",children:"Animate?"}),Object(n.jsx)("input",{id:"animate",disabled:H,type:"checkbox",checked:w.animate,onChange:function(e){k(Object(s.a)(Object(s.a)({},w),{},{animate:e.target.checked})),q()}})]}),Object(n.jsx)("p",{children:T?"Loading...".concat(U?(100*U).toPrecision(3):""):null}),Object(n.jsx)("button",{onClick:function(){i.toBlob((function(e){x()(e,"logistic_map_".concat(+Date.now(),".png"))}))},children:"Save as PNG"}),Object(n.jsx)("button",{onClick:function(){k(Object(s.a)(Object(s.a)({},w),{},{minX:0,maxX:1,minR:2,maxR:4})),q()},children:"Reset"})]}),Object(n.jsxs)("div",{style:{position:"relative"},children:[Object(n.jsx)("canvas",{ref:function(e){return r(e)},style:{background:"white",width:"100%",height:"100vh",position:"absolute",left:0,top:0}}),Object(n.jsx)("canvas",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100vh",zIndex:1e3},ref:function(e){return m(e)},onMouseDown:function(e){var t=e.nativeEvent,a=t.offsetX,n=t.offsetY;N([a,n]),B([a,n])},onMouseMove:function(e){var t=e.nativeEvent,a=t.offsetX,n=t.offsetY;M&&B([a,n])},onMouseLeave:function(){N(),B(),W(+Date.now())},onMouseUp:function(){if(+Date.now()-X>100){var e=Math.min(M[0],E[0]),t=Math.max(M[0],E[0]),a=Math.min(M[1],E[1]),n=Math.max(M[1],E[1]),c=d.getBoundingClientRect(),i=c.width,r=c.height,o=ne?{minR:($-Z)*a/r+Z,maxR:($-Z)*n/r+Z,minX:(Q-K)*e/i+K,maxX:(Q-K)*t/i+K}:{minR:($-Z)*e/i+Z,maxR:($-Z)*t/i+Z,minX:(Q-K)*a/r+K,maxX:(Q-K)*n/r+K};k(Object(s.a)(Object(s.a)({},w),o)),q(),N(),B()}else W(),N(),B()}})]})]})};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f.c,{children:Object(n.jsx)(v,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5214bb0a.chunk.js.map