(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),i=t.n(r),s=(t(14),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),p=t(8),d=t.n(p),h=(t(16),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement(d.a,{className:"particles",params:{particles:{line_linked:{shadow:{enable:!1,color:"#3CA9D1",blur:5,value_area:800}}}}}),l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(l.a.Component)),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/profilepicture.jpg",alt:"profile"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(l.a.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:""},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,"- ".concat(e.skillname)))}))))))}}]),a}(l.a.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Projects."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img",alt:"work"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(l.a.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(l.a.Component),g={name:"Kevin Castro",role:"Full Stack Developer",linkedinId:"https://www.linkedin.com/in/kevin-castro-953287183/",roleDescription:" I like both the front end and back end with javascript and other aspects of web development. Also I like reading about new libraries/frameworks on my free time. Video game player and developer enthusiast.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/kevin-castro-953287183/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/kevinvai",className:"fa fa-github"}],aboutme:"Software developer with love for both front end and backend, constantly interested in learning more and implementing technologies related to frontend like javascript libraries or frameworks and about best practices. Also currently interested in learning UI/UX.",address:"Mexico",website:"kevin.cbdev@gmail.com",education:[{UniversityName:"Universidad Kino",specialization:"Engineering Degree in Multimedia/web development. ",MonthOfPassing:"December",YearOfPassing:"2016"}],work:[{CompanyName:"Alio IT",specialization:"Full Stack Developer",MonthOfLeaving:"Current",YearOfLeaving:"",Achievements:"Currently working for an American company ClaimRuler as a full-stack developer and assisting in bug fixing, and feature creation or enhancement and improving system performance by improving code's performance and creating or improving stored procedures. For the frontend the tasks include using vainilla javascript and jQuery and also embedded react components. For the backend C#, .NET Framework 4.7 and for the database MySql combined with AWS apis.                                                                      Occasional support to inner projects with AngularJS 1.6    "},{CompanyName:"Sofia XT",specialization:"Junior Javascript Developer",MonthOfLeaving:"October",YearOfLeaving:"2018",Achievements:"Full-stack developer with more focus on the frontend area. Tasks involved creating interfaces and algorithms for games or activities needed for kids to learn math. Occasional support on the backend with .NET framework 4.5 and database table design in SQLServer."},{CompanyName:"Simbo Software Development",specialization:"Intern",MonthOfLeaving:"June",YearOfLeaving:"2017",Achievements:"Assisted in development of front and back end for multiple web systems and web pages using PHP with Codeigniter framework, javascript, MySQL."}],skillsDescription:"Skills",skills:[{skillname:"Javascript/ES6"},{skillname:"React js/Redux"},{skillname:"Node js"},{skillname:"HTML5"},{skillname:"CSS"},{skillname:"C# .Net Framework"},{skillname:"SQL(MySql, SQLserver, PostgreSQL)"},{skillname:"aws(S3, Lambda functions)"},{skillname:"vcs (git, gitflow, github, gitlab)"}],portfolio:[{name:"Chess for SofiaXT",description:"web application for an educational software",imgurl:"images/portfolio/chess_play_app.png",url:"https://www.sofiaxt.com"},{name:"Grocery Management",description:"personal project for grocery shopping management",imgurl:"images/portfolio/grocery-shop-app.png",url:"https://grocery-shopping-management.herokuapp.com/signin"},{name:"React Chat",description:"mobileapp",imgurl:"images/portfolio/react-chat.png",url:"#"}]},k=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:g}),l.a.createElement(f,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(v,{resumeData:g}),l.a.createElement(b,{resumeData:g}))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.e62cd919.chunk.js.map