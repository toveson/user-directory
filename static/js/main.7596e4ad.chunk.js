(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),r=n.n(a),o=n(6),l=n.n(o);var s=function(){return Object(i.jsx)("h1",{children:"Employee Directory"})},c=n(4),m=n(8),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=r.a.useState(t),i=Object(c.a)(n,2),a=i[0],o=i[1],l=r.a.useMemo((function(){var t=Object(m.a)(e);return null!==a&&t.sort((function(e,t){return e[a.key]<t[a.key]?"ascending"===a.direction?-1:1:e[a.key]>t[a.key]?"ascending"===a.direction?1:-1:0})),t}),[e,a]),s=function(e){var t="ascending";a&&a.key===e&&"ascending"===a.direction&&(t="descending"),o({key:e,direction:t})};return{employees:l,sort:s,sortConfig:a}},h=function(e){var t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],o=n[1],l=d(e.employees),s=l.employees,m=l.sort;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{type:"text",autoComplete:"off",placeholder:"Search",value:r,onChange:function(e){return o(e.target.value)}}),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsx)("button",{type:"button",onClick:function(){return m("first_name")},children:"First Name"})}),Object(i.jsx)("th",{children:Object(i.jsx)("button",{type:"button",onClick:function(){return m("last_name")},children:"Last Name"})}),Object(i.jsx)("th",{children:Object(i.jsx)("button",{type:"button",onClick:function(){return m("title")},children:"Title"})}),Object(i.jsx)("th",{children:Object(i.jsx)("button",{type:"button",onClick:function(){return m("email")},children:"Email"})}),Object(i.jsx)("th",{children:Object(i.jsx)("button",{type:"button",onClick:function(){return m("phone")},children:"Phone Number"})})]})}),Object(i.jsx)("tbody",{children:s.filter((function(e){return!r||!!(e.title.toLowerCase().includes(r.toLowerCase())||e.first_name.toLowerCase().includes(r.toLowerCase())||e.last_name.toLowerCase().includes(r.toLowerCase())||e.email.toLowerCase().includes(r.toLowerCase())||e.phone.toLowerCase().includes(r.toLowerCase()))})).map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.first_name}),Object(i.jsx)("td",{children:e.last_name}),Object(i.jsx)("td",{children:e.title}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.phone})]},e.id)}))})]})]})},u=n(7);function b(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(s,{}),Object(i.jsx)(h,{employees:u})]})}l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":1,"first_name":"Roda","last_name":"Lippi","title":"General Manager","email":"rlippi0@xing.com","phone":"394-609-8283"},{"id":2,"first_name":"Bradly","last_name":"Reedy","title":"Food Chemist","email":"breedy1@toplist.cz","phone":"140-439-3557"},{"id":3,"first_name":"Pippo","last_name":"Gidney","title":"Food Chemist","email":"pgidney2@indiegogo.com","phone":"386-888-0618"},{"id":4,"first_name":"Konstance","last_name":"Saffran","title":"Assistant Manager","email":"ksaffran3@ihg.com","phone":"448-207-4606"},{"id":5,"first_name":"Ulric","last_name":"Burnall","title":"Design Engineer","email":"uburnall4@linkedin.com","phone":"849-418-3628"},{"id":6,"first_name":"Selie","last_name":"Coltart","title":"Community Outreach Specialist","email":"scoltart5@shutterfly.com","phone":"609-491-8218"},{"id":7,"first_name":"Kile","last_name":"Audus","title":"Social Worker","email":"kaudus6@reverbnation.com","phone":"446-703-7325"},{"id":8,"first_name":"Olympia","last_name":"Yegorkin","title":"Pharmacist","email":"oyegorkin7@mtv.com","phone":"881-219-4214"},{"id":9,"first_name":"Godwin","last_name":"Asmus","title":"Pharmacist","email":"gasmus8@about.me","phone":"559-236-8374"},{"id":10,"first_name":"Rochella","last_name":"Dundendale","title":"Junior Executive","email":"rdundendale9@eventbrite.com","phone":"650-467-8569"},{"id":11,"first_name":"Merilyn","last_name":"Dinkin","title":"Health Coach IV","email":"mdinkina@addthis.com","phone":"300-742-3960"},{"id":12,"first_name":"Helen-elizabeth","last_name":"Vescovo","title":"Media Manager III","email":"hvescovob@opera.com","phone":"590-216-0009"},{"id":13,"first_name":"Irvine","last_name":"Esby","title":"Web Designer II","email":"iesbyc@nationalgeographic.com","phone":"240-822-6410"},{"id":14,"first_name":"Carla","last_name":"Verbeke","title":"Research Nurse","email":"cverbeked@gizmodo.com","phone":"766-908-9285"},{"id":15,"first_name":"Selig","last_name":"Sessuns","title":"Analog Circuit Design manager","email":"ssessunse@java.com","phone":"334-460-8872"},{"id":16,"first_name":"Flossy","last_name":"Warde","title":"Payment Adjustment Coordinator","email":"fwardef@ftc.gov","phone":"172-857-8693"},{"id":17,"first_name":"Allis","last_name":"Grubbe","title":"Information Systems Manager","email":"agrubbeg@mozilla.com","phone":"453-186-2114"},{"id":18,"first_name":"Elyn","last_name":"Enticknap","title":"Librarian","email":"eenticknaph@thetimes.co.uk","phone":"862-326-5798"},{"id":19,"first_name":"Rae","last_name":"Bransden","title":"GIS Technical Architect","email":"rbransdeni@blogs.com","phone":"362-951-4401"},{"id":20,"first_name":"Maribeth","last_name":"Malham","title":"Accountant IV","email":"mmalhamj@bloglines.com","phone":"703-217-6936"},{"id":21,"first_name":"Mahalia","last_name":"Bolstridge","title":"Software Test Engineer III","email":"mbolstridgek@icq.com","phone":"860-378-0387"},{"id":22,"first_name":"Jorie","last_name":"Rallin","title":"Occupational Therapist","email":"jrallinl@cbc.ca","phone":"954-223-6275"},{"id":23,"first_name":"Daron","last_name":"Barde","title":"Accountant III","email":"dbardem@google.co.jp","phone":"443-468-1760"},{"id":24,"first_name":"Torrey","last_name":"Sandland","title":"Senior Sales Associate","email":"tsandlandn@google.co.uk","phone":"362-404-3721"},{"id":25,"first_name":"Morgen","last_name":"Aylmore","title":"Computer Systems Analyst II","email":"maylmoreo@wikia.com","phone":"313-730-6085"}]')}},[[14,1,2]]]);
//# sourceMappingURL=main.7596e4ad.chunk.js.map