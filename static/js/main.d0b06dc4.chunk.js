(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,function(t,e,n){t.exports={section:"Section_section__3w3J8",title:"Section_title__2pb_M"}},,function(t,e,n){t.exports={statList:"Statistics_statList__2AVhW",list:"Statistics_list__2Rw2b"}},function(t,e,n){t.exports={buttonContainer:"FeedbackOptions_buttonContainer__3B4XC",button:"FeedbackOptions_button__wkm5l"}},function(t,e,n){t.exports={notification:"Notification_notification__25yNV"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(5),s=n.n(a),o=n(2),r=n(4),b=n.n(r),u=n(0),l=function(t){var e=t.title,n=t.children;return Object(u.jsxs)("section",{className:b.a.section,children:[Object(u.jsx)("h2",{className:b.a.title,children:e}),n]})},j=n(6),d=n.n(j),O=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,a=t.positivePercentage;return Object(u.jsxs)("ul",{className:d.a.list,children:[Object(u.jsxs)("li",{children:["Good: ",e]}),Object(u.jsxs)("li",{children:["Neutral: ",n]}),Object(u.jsxs)("li",{children:["Bad: ",c]}),Object(u.jsxs)("li",{children:["Total: ",i]}),Object(u.jsxs)("li",{children:["Positive feedback: ",a,"%"]})]})},f=n(7),h=n.n(f),x=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(u.jsx)(u.Fragment,{children:e.map((function(t){return Object(u.jsx)("button",{className:h.a.button,type:"button",name:t,onClick:n,children:t},t)}))})},_=n(8),p=n.n(_),k=function(t){var e=t.message;return Object(u.jsx)("p",{className:p.a.notification,children:e})};var g=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(0),s=Object(o.a)(a,2),r=s[0],b=s[1],j=Object(c.useState)(0),d=Object(o.a)(j,2),f=d[0],h=d[1],_=Object(c.useState)(0),p=Object(o.a)(_,2),g=p[0],m=p[1],v=Object(c.useState)(0),S=Object(o.a)(v,2),N=S[0],w=S[1];return Object(c.useEffect)((function(){m(n+r+f)}),[n,r,f]),Object(c.useEffect)((function(){w(Math.ceil(100/g*n))}),[g,n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{title:"Please leave feedback",children:Object(u.jsx)(x,{options:["good","neutral","bad"],onLeaveFeedback:function(t){switch(t.target.name){case"good":i((function(t){return t+1}));break;case"neutral":b((function(t){return t+1}));break;case"bad":h((function(t){return t+1}));break;default:return}}})}),Object(u.jsx)(l,{title:"Statistics",children:g>0?Object(u.jsx)(O,{good:n,neutral:r,bad:f,total:g,positivePercentage:N}):Object(u.jsx)(k,{message:"No feedback given"})})]})};n(14),n(15);s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d0b06dc4.chunk.js.map