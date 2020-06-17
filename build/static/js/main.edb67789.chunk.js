(this.webpackJsonphealthbeat_client=this.webpackJsonphealthbeat_client||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(42),c=a.n(s),o=(a(54),a(12)),l=a(18),i=(a(55),a(56),a(6)),u=a(7),m=a(9),p=a(8),d=a(2),h=a(19),f=a(4),g=a.n(f),v=a(14),b=a(1),E=a(5),w=(a(25),{USER_BASE_URL:"http://localhost:5000/api/user"}),O=function(){var e=Object(v.a)(g.a.mark((function e(t,a){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("create user called"),e.next=3,fetch(w.USER_BASE_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("result ",e),e.json()})).then((function(e){var t;console.log("data ",e),e.hasOwnProperty("error")?t=e.error.code&&11e3==e.error.code?r.a.createElement("div",null,"Email or Username already exist"):e.error:(t=r.a.createElement("div",{className:"text-success"},"User Registered Successfully"),a.props.history.push("/")),a.changeState({submitText:"SignUp",errors:{form:t}})})).catch((function(e){console.log("error while signup",e);var t=e.message;a.changeState({submitText:"SignUp",errors:{form:t}})}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=a(20),S=a.n(j),y=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",confpassword:"",username:"",submitText:"SIGNUP",errors:{email:null,password:null,confpassword:null,username:null,form:null}},n.SubmitForm=n.SubmitForm.bind(Object(E.a)(n)),n.isValid=n.isValid.bind(Object(E.a)(n)),n.onChange=n.onChange.bind(Object(E.a)(n)),n.changeState=n.changeState.bind(Object(E.a)(n)),n}return Object(u.a)(a,[{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"isValid",value:function(){var e=this.state,t=e.email,a=e.password,n=e.confpassword,r=e.username,s=e.errors;return t&&a&&r?this.validateEmail(t)?a==n||(this.setState({errors:Object(b.a)(Object(b.a)({},s),{},{form:"Password not matched"})}),!1):(this.setState({errors:Object(b.a)(Object(b.a)({},s),{},{form:"Invalid email Format"})}),!1):(this.setState({errors:Object(b.a)(Object(b.a)({},s),{},{form:"Please fill out required fields"})}),!1)}},{key:"changeState",value:function(e){this.setState(e)}},{key:"SubmitForm",value:function(){var e=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!this.isValid()){e.next=8;break}return this.setState({submitText:"Loading"}),console.log("call to signup api which will return promise"),a={username:this.state.username,email:this.state.email,password:this.state.password,confpassword:this.state.confpassword},e.next=7,O(a,{changeState:this.changeState,props:this.props});case 7:e.sent;case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(h.a)({},a,n))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row vw-100 ml-0 mr-0",style:{background:"#13273B"}},r.a.createElement("div",{className:"text-white logo"},r.a.createElement("img",{src:S.a,className:"ml-5 pl-3 ",alt:"calendly"}),"Chat Mate"),r.a.createElement("div",{class:"login100-more back col-lg-7 d-none d-lg-block"}),r.a.createElement("form",{noValidate:!0,autoComplete:"none",class:"login100-form validate-form col-lg-5 pt-0 pb-0  pl-md-5 pr-md-5 d-flex ",onSubmit:this.SubmitForm},r.a.createElement("div",{className:"pl-md-5 pr-md-5"},r.a.createElement("span",{class:"login100-form-title p-b-34"},"Create Account"),r.a.createElement("div",{className:"error text-center mb-3"},this.state.errors.form),r.a.createElement("div",{className:""},r.a.createElement("div",{class:"wrap-input100 rs1-wrap-input100 validate-input m-b-20","data-validate":"Type user name"},r.a.createElement("input",{autoComplete:"none",id:"username",class:"input100",type:"text",name:"username",placeholder:"Username",onChange:this.onChange}),r.a.createElement("span",{class:"focus-input100"})),r.a.createElement("div",{class:"wrap-input100 rs1-wrap-input100 validate-input m-b-20","data-validate":"Type user name"},r.a.createElement("input",{autoComplete:"none",id:"email",class:"input100",type:"email",name:"email",placeholder:"Email Address",onChange:this.onChange}),r.a.createElement("span",{class:"focus-input100"})),r.a.createElement("div",{class:"wrap-input100 rs2-wrap-input100 validate-input m-b-20","data-validate":"Type password"},r.a.createElement("input",{autoComplete:"new-password",class:"input100",type:"password",name:"password",placeholder:"Password",onChange:this.onChange}),r.a.createElement("span",{class:"focus-input100"})),r.a.createElement("div",{class:"wrap-input100 rs2-wrap-input100 validate-input m-b-20","data-validate":"Type password"},r.a.createElement("input",{autoComplete:"new-password",class:"input100",type:"password",name:"confpassword",placeholder:"Confirm password",onChange:this.onChange}),r.a.createElement("span",{class:"focus-input100"}))),r.a.createElement("div",{class:"container-login100-form-btn"},r.a.createElement("input",{type:"submit",class:"login100-form-btn",value:this.state.submitText})),r.a.createElement("div",{class:"w-full text-center mt-5 txt1"},"Already Have an Account ?\xa0",r.a.createElement("span",{onClick:function(){console.log(e.props),e.props.updateWidget({widgetName:"SIGNIN"})},class:"txt3 cur-pointer"},"Sign In")))))}}]),a}(n.Component),N=Object(d.f)(y);function x(e){return r.a.createElement("div",null,"This page is temporarly unavailable",r.a.createElement("button",{onClick:function(){e.history.push("/")}},"GO back to Home Page"))}a(63);var C=Object(n.createContext)(),k=function(e){var t=JSON.parse(localStorage.getItem("user"))||{isAuthenticated:!1,token:null},a=Object(n.useState)({user:t}),s=Object(o.a)(a,2),c=s[0],l=s[1];return r.a.createElement(C.Provider,{value:[c,l]},e.children)},I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",submitText:"SignIn",errors:{email:null,password:null,form:null}},n.login=n.login.bind(Object(E.a)(n)),n.isValid=n.isValid.bind(Object(E.a)(n)),n.onChange=n.onChange.bind(Object(E.a)(n)),n.changeState=n.changeState.bind(Object(E.a)(n)),n}return Object(u.a)(a,[{key:"changeState",value:function(e){this.setState(e)}},{key:"validateEmail",value:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}},{key:"isValid",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errors;return t&&a?!!this.validateEmail(t)||(this.setState({errors:Object(b.a)(Object(b.a)({},n),{},{form:"Invalid email Format"})}),!1):(this.setState({errors:Object(b.a)(Object(b.a)({},n),{},{form:"Please fill out required fields"})}),!1)}},{key:"login",value:function(e){var t=Object(o.a)(this.context,2),a=t[0],n=t[1];(console.log(a),e.preventDefault(),this.setState({submitText:"Loading"}),this.isValid())&&function(e,t){console.log("signIn user called"),fetch(w.USER_BASE_URL+"/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return console.log("result ",e),e.json()})).then((function(e){if(console.log("data ",e),e.hasOwnProperty("message")){var a=r.a.createElement("div",{className:"text-success"},e.message);t.changeState({submitText:"SingnIn",errors:{form:a}}),localStorage.setItem("user",JSON.stringify({isAuthenticated:!0,token:e.token,userInfo:e.userInfo})),t.updateStore(Object(b.a)(Object(b.a)({},t.store),{},{user:{isAuthenticated:!0,token:e.token,userInfo:e.userInfo}}))}else if(e.hasOwnProperty("errorMsg")){a=e.errorMsg;t.changeState({submitText:"SignIn",errors:{form:a}})}})).catch((function(e){console.log("error while sigining in",e);var a=e.message;t.changeState({submitText:"SignIn",errors:{form:a}})}))}({email:this.state.email,password:this.state.password},{changeState:this.changeState,updateStore:n,store:a})}},{key:"onChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(h.a)({},a,n))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row  ml-0 mr-0 w-100",style:{background:"#13273B"}},r.a.createElement("div",{className:"text-white logo"},r.a.createElement("img",{src:S.a,className:"ml-5 pl-3 ",alt:"calendly"}),"Chat Mate"),r.a.createElement("div",{class:"login100-more back col-lg-7 d-none d-lg-block"},r.a.createElement("div",{className:"row m-auto w-100",style:{height:"100%"}})),r.a.createElement("form",{autoComplete:"none",class:"login100-form validate-form col-lg-5 pt-0 pb-0  pl-md-5 pr-md-5 d-flex ",onSubmit:this.login},r.a.createElement("div",{className:"pl-md-5 pr-md-5"},r.a.createElement("span",{class:"login100-form-title p-b-34"},"Account Login"),r.a.createElement("div",{className:"error text-center mb-3"},this.state.errors.form),r.a.createElement("div",{className:""},r.a.createElement("div",{class:"wrap-input100 rs1-wrap-input100 validate-input m-b-20","data-validate":"Type user name"},r.a.createElement("input",{autoComplete:"none",id:"email",class:"input100",type:"email",name:"email",placeholder:"Email Address",onChange:this.onChange}),r.a.createElement("span",{class:"focus-input100"})),r.a.createElement("div",{class:"wrap-input100 rs2-wrap-input100 validate-input m-b-20","data-validate":"Type password"},r.a.createElement("input",{autoComplete:"new-password",class:"input100",type:"password",name:"password",placeholder:"Password",onChange:this.onChange}),r.a.createElement("span",{class:"focus-input100"}))),r.a.createElement("div",{class:"container-login100-form-btn"},r.a.createElement("button",{type:"submit",class:"login100-form-btn"},this.state.submitText)),r.a.createElement("div",{class:"w-full text-center txt1 mt-5"},"New User ? \xa0",r.a.createElement("span",{onClick:function(){console.log(e.props),e.props.updateWidget({widgetName:"SIGNUP"})},class:"txt3 cur-pointer"},"Sign Up")))))}}]),a}(n.Component);I.contextType=C;var T=Object(d.f)(I),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={widgetName:"SIGNIN"},n.updateWidget=n.updateWidget.bind(Object(E.a)(n)),n}return Object(u.a)(a,[{key:"updateWidget",value:function(e){this.setState(e)}},{key:"render",value:function(){switch(console.log(this.state),this.state.widgetName){case"SIGNIN":return r.a.createElement(T,{updateWidget:this.updateWidget});case"SIGNUP":return r.a.createElement(N,{updateWidget:this.updateWidget});default:return r.a.createElement("div",null,"Error")}}}]),a}(n.Component),A=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{class:"limiter "},r.a.createElement("div",{class:"container-fluid vh-100 "},r.a.createElement("div",{class:"row vh-100"},r.a.createElement(U,null))))}}]),a}(n.Component),W=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/SignUp",component:N}),r.a.createElement(d.a,{exact:!0,path:"/SignIn",component:T}),r.a.createElement(d.a,{component:x}))}}]),a}(n.Component),M=a(44),R=a.n(M);a(64);function P(e){return r.a.createElement("div",{className:"row conversation w-100 mr-0 ml-0",onClick:function(){return e.setIsConversationOpen(!0)}},r.a.createElement("div",{className:"col-2 d-flex "},r.a.createElement("img",{src:R.a,className:"avatar"})),r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"receiver"},e.name),r.a.createElement("div",{className:"last-msg"},"Last Message")))}a(65);var H=a(45),_=a.n(H),F=a(46),B=a.n(F),L=(a(66),a(47)),V=a.n(L);function G(e){return r.a.createElement("div",{className:"message card"},V.a.emojify(e.msg))}var J=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).renderMessage=function(e){return["Hi Raahul","Hi Ravi","Whatts Upp","Hi ","I am Ok ","Thank god","Hi Raahul","Hi Ravi","Whatts Upp","Hi ","I am Ok ","Thank god","Hi Raahul","Hi Ravi","Whatts Upp","Hi ","I am Ok ","Thank god","Hi Raahul","Hi Ravi","Whatts Upp","Hi ","I am Ok ","Thank god","New Feature We can Inset Emoji using Emoji code <3 :p New Feature We can Inset Emoji using Emoji code New Feature We can Inset Emoji using Emoji code","my Emojis :)",":) :( ","(\u2299\uff3f\u2299)"].map((function(e){return r.a.createElement(G,{msg:e})}))},e.renderMessage=e.renderMessage.bind(Object(E.a)(e)),e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderMessage())}}]),a}(n.Component),z=a(48),D=a.n(z),Z=function(){var e=Object(v.a)(g.a.mark((function e(t){var a,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.parse(localStorage.getItem("user")),n=a.token,e.next=4,fetch(w.USER_BASE_URL,{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer "+n}}).then((function(e){return 401==e.status&&(localStorage.clear(),window.location.href("/")),e.json()})).then((function(e){console.log("users details",e);var n=e.filter((function(e){return e._id!==a.userInfo._id}));t(n)})).catch((function(e){console.log("Something Went Wrong!! ",e)}));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function q(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),s=a[0],c=a[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),u=i[0],m=i[1],p=Object(n.useState)([]),d=Object(o.a)(p,2),h=d[0],f=d[1];Object(n.useEffect)((function(){Z(f)}),[]);var g=function(e){e.preventDefault()};return r.a.createElement("div",{className:"container-fluid pl-0 pr-0"},r.a.createElement("div",{className:"row w-100 m-0"},r.a.createElement("div",{className:"col-4 conversation-header "},r.a.createElement("img",{src:_.a,className:"avatar sender"})),r.a.createElement("div",{className:"col-8 chat-header "})),r.a.createElement("div",{className:"row w-100 m-0"},r.a.createElement("div",{className:"col-4  conversation-wrapper pr-0 pl-0"},function(e){return console.log(e),e.map((function(e){return r.a.createElement(P,{name:e.username,otherInfo:e,setIsConversationOpen:c})}))}(h)),r.a.createElement("div",{className:"col-8 chat-wrapper pr-0"},s&&r.a.createElement(D.a,{className:"chat-limiter"},r.a.createElement(J,null)),!s&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:B.a,className:"start-chat"})),r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"mb-4 mt-2 chatmate-head"},"ChatMate Business App"),r.a.createElement("div",{className:"chatmate-desc"},"ChatMate Connects you with your customers easily by using tools to automate, sort and quickly respond to messages. ChatMate can also help medium and large businesses provide customer support and deliver important notifications to customers."))),r.a.createElement("div",{class:"footer fixed-bottom typing-box"},r.a.createElement("form",{className:"d-flex"},r.a.createElement("input",{type:"text",className:"input-msg-box",placeholder:"Type Message Here",value:u,onChange:function(e){return m(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?g(e):null}}),r.a.createElement("input",{type:"submit",value:"Send message",className:"primary-btn ml-4 pl-3 pr-3",onClick:function(e){return g(e)}}))))))}a(111);function $(){var e=Object(n.useContext)(C),t=Object(o.a)(e,2),a=t[0],s=t[1];console.log(a);return r.a.createElement("header",{className:"header d-flex justify-content-between"},r.a.createElement("div",{className:"pull-left pl-4"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:S.a,className:"logo1 ",alt:"logo"}),r.a.createElement("span",null,r.a.createElement("span",{className:"health"},"Chat"),r.a.createElement("span",{className:"beat"},"Mate")))),r.a.createElement("div",{className:"d-flex pr-4"},r.a.createElement("div",{className:"username text-white mt-auto mb-auto mr-4 text-capitalize d-none d-md-block"},"Welcome \xa0",a.user.userInfo.username),r.a.createElement("div",{className:"logout-btn",onClick:function(){!function(e,t){localStorage.removeItem("user"),t(Object(b.a)(Object(b.a)({},e),{},{user:{isAuthenticated:!1,token:null}}))}(a,s)}},"Sign Out")))}var K=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:q}),r.a.createElement(d.a,{component:x})))}}]),a}(n.Component);function Q(){var e=Object(n.useContext)(C),t=Object(o.a)(e,2),a=t[0];t[1];return r.a.createElement(r.a.Fragment,null,a.user.isAuthenticated?r.a.createElement(K,null):r.a.createElement(W,null))}var X=function(e){var t=Object(n.useContext)(C);return console.log(t),r.a.createElement(l.a,null,r.a.createElement(k,null,r.a.createElement("div",{className:"App  "},r.a.createElement(Q,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,a){e.exports=a.p+"static/media/logo.be2cf3cb.png"},25:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/user.d75f0f17.png"},45:function(e,t,a){e.exports=a.p+"static/media/sender_avatar.e67e358c.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/start_chat.cd3b9534.svg"},49:function(e,t,a){e.exports=a(112)},54:function(e,t,a){},56:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.edb67789.chunk.js.map