(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{21:function(t,e,n){t.exports={loginTitle:"Login_loginTitle__3WxRD",loginForm:"Login_loginForm__1CQHu",additional:"Login_additional__luoo0",loginBtn:"Login_loginBtn__2sjBL",loginCreate:"Login_loginCreate__8MHTt"}},22:function(t,e,n){t.exports={registerTitle:"Register_registerTitle__2A8Dv",registerForm:"Register_registerForm__3gvUW",additional:"Register_additional__3KsQR",registerBtn:"Register_registerBtn__31ydd",loginCreate:"Register_loginCreate__3orPP",backImage:"Register_backImage__216KV",backBtn:"Register_backBtn__3eEoA"}},30:function(t,e,n){t.exports={header:"Header_header__2MkCy",title:"Header_title__-ZE9x",loginStatus:"Header_loginStatus__FuNuL"}},5:function(t,e,n){t.exports={board:"Board_board__K7dH1",filters:"Board_filters__1Du4Q",search:"Board_search__3WvBE",sort:"Board_sort__2aRoG",sortText:"Board_sortText__hkAOn",sortImg:"Board_sortImg__lzcXW",sortOptions:"Board_sortOptions__cCtww",sortOption:"Board_sortOption__38pkf",sortOptionContent:"Board_sortOptionContent__1Omoo",additionalOpenSortImage:"Board_additionalOpenSortImage__3QmI8",additionalOpenSortOptions:"Board_additionalOpenSortOptions__1iUDE",lists:"Board_lists__RrLM0",list:"Board_list__2oCI1",listName:"Board_listName__XRUUF",listNameContent:"Board_listNameContent__RDD44",listNameContentInput:"Board_listNameContentInput__1It9o",listCreationDate:"Board_listCreationDate__2qYPy",listTaskTypes:"Board_listTaskTypes__27lyT",removeList:"Board_removeList__1P_Ik",boardAdd:"Board_boardAdd__DKmCy",boardAddImg:"Board_boardAddImg__2Al3l"}},6:function(t,e,n){t.exports={toDoList:"ToDoList_toDoList__3pDwD",title:"ToDoList_title__1D7ha",titleContent:"ToDoList_titleContent__mxjbD",tasks:"ToDoList_tasks__MKmtT",task:"ToDoList_task__1tDMt",taskCheckBox:"ToDoList_taskCheckBox__xyeld",taskCheckBoxEmpty:"ToDoList_taskCheckBoxEmpty__27Jxs",taskCheckBoxActive:"ToDoList_taskCheckBoxActive__36Phw",taskTitle:"ToDoList_taskTitle__1utlq",taskTitleContent:"ToDoList_taskTitleContent__2l3PJ",taskTitleInput:"ToDoList_taskTitleInput__ei-0G",tasksActionsBtns:"ToDoList_tasksActionsBtns__K3fVq",tasksCancelBtn:"ToDoList_tasksCancelBtn__1Iqh2",tasksAddBtn:"ToDoList_tasksAddBtn__251ML",toDoListActionsBtns:"ToDoList_toDoListActionsBtns__31MLb",toDoListCancelBtn:"ToDoList_toDoListCancelBtn__2WFrd",toDoListSaveBtn:"ToDoList_toDoListSaveBtn__2yoIN"}},83:function(t,e,n){},84:function(t,e,n){"use strict";n.r(e);var s,a,i=n(1),o=n.n(i),c=n(26),r=n.n(c),u=n(23),d=n(3),l=n(7),j=n(14),b=n(27),O=n(28),h=O.a.div(s||(s=Object(b.a)(["\n    background-color: ",";\n    min-width: 400px;\n    min-height: 500px;\n    width: ",";\n    height: ",";\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: ",";\n    grid-template-rows: ",";\n"])),(function(t){return t.backgroundColor}),(function(t){return t.width}),(function(t){return t.height}),(function(t){return t.columns}),(function(t){return t.rows})),p=n(21),g=n.n(p),_=n(0),m=function(t){var e=Object(i.useState)(""),n=Object(j.a)(e,2),s=n[0],a=n[1],o=Object(i.useState)(""),c=Object(j.a)(o,2),r=c[0],d=c[1];return Object(_.jsxs)("div",{className:g.a.loginForm,children:[Object(_.jsx)("div",{children:Object(_.jsx)("input",{value:s,type:"text",name:"userName",placeholder:"Email or Username",onChange:function(t){return a(t.target.value)}})}),Object(_.jsx)("div",{children:Object(_.jsx)("input",{value:r,component:"input",type:"password",name:"password",placeholder:"Password",onChange:function(t){return d(t.target.value)}})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{onClick:function(){return t.getUser(s,r)},className:g.a.loginBtn,children:"Login"})}),Object(_.jsx)("div",{children:Object(_.jsx)("span",{className:g.a.additional,children:"or"})}),Object(_.jsx)("div",{children:Object(_.jsx)(u.b,{to:"/auth/register",className:g.a.loginCreate,children:"Create an account"})})]})},f=function(t){return Object(_.jsxs)(h,{backgroundColor:"#2D2D2D",columns:"100%",rows:"3fr 8fr",children:[Object(_.jsx)("div",{className:g.a.loginTitle,children:"Login"}),Object(_.jsx)(m,{getUser:t.getUser})]})},x=n(2),L=n(29),k=L.create({baseURL:"https://recruitment.ultimate.systems/"}),v=function(t,e){return k.post("auth/local",{identifier:t,password:e}).then((function(t){return t.data}))},T=function(t,e,n){return k.post("/auth/local/register",{username:t,email:e,password:n}).then((function(t){return t.data}))},C="SET_USER",y="SET_FETCHING",N="SET_IS_AUTH",D={isAuth:!1,user:"",isFetching:!1},I=function(t){return{type:C,body:t}},S=function(t){return{type:y,body:t}},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case C:return Object(x.a)(Object(x.a)({},t),{},{user:e.body,isAuth:!0});case y:return Object(x.a)(Object(x.a)({},t),{},{isFetching:e.body});case N:return Object(x.a)(Object(x.a)({},t),{},{isAuth:e.body});default:return t}},A=function(t){return{isAuth:t.user.isAuth}},w=function(t){return Object(l.b)(A)((function(e){return e.isAuth?Object(_.jsx)(d.a,{to:"/board"}):Object(_.jsx)(t,Object(x.a)({},e))}))},E=n(8),U={getUser:function(t){return t.user.user},getIsAuth:function(t){return t.user.isAuth},getIsFetching:function(t){return t.user.isFetching}},F=Object(E.c)(w,Object(l.b)((function(t){return{user:U.getUser(t),isAuth:U.getIsAuth(t),isFetching:U.getIsFetching(t)}}),{getUser:function(t,e){return function(n){n(S(!0)),v(t,e).then((function(t){"jwt"in t&&(localStorage.setItem("token",t.jwt),n(I(t.user.username))),n(S(!1))}))}}}))((function(t){return Object(_.jsx)(f,{isFetching:t.isFetching,isAuth:t.isAuth,user:t.user,getUser:t.getUser})})),R=n(22),P=n.n(R),H=function(t){var e=Object(i.useState)(""),n=Object(j.a)(e,2),s=n[0],a=n[1],o=Object(i.useState)(""),c=Object(j.a)(o,2),r=c[0],u=c[1],d=Object(i.useState)(""),l=Object(j.a)(d,2),b=l[0],O=l[1],h=Object(i.useState)(""),p=Object(j.a)(h,2),g=p[0],m=p[1];return Object(_.jsxs)("div",{className:P.a.registerForm,children:[Object(_.jsx)("div",{children:Object(_.jsx)("input",{onChange:function(t){a(t.target.value)},value:s,type:"text",name:"userName",placeholder:"Username"})}),Object(_.jsx)("div",{children:Object(_.jsx)("input",{onChange:function(t){u(t.target.value)},value:r,type:"text",name:"email",placeholder:"Email"})}),Object(_.jsx)("div",{children:Object(_.jsx)("input",{onChange:function(t){O(t.target.value)},value:b,type:"password",name:"password",placeholder:"Password"})}),Object(_.jsx)("div",{children:Object(_.jsx)("input",{onChange:function(t){m(t.target.value)},value:g,type:"password",name:"repeatPassword",placeholder:"Repeat Password"})}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{onClick:function(){!function(e,n,s,a){s===a&&t.createUser(e,n,s)}(s,r,b,g)},className:P.a.registerBtn,children:"Create"})})]})},M=function(t){var e=Object(d.g)();return Object(_.jsxs)(h,{backgroundColor:"#2D2D2D",columns:"100%",rows:"1fr 2fr 8fr",children:[Object(_.jsx)("div",{className:P.a.backBtn,children:Object(_.jsx)("img",{onClick:function(){e.push("/auth/login")},alt:"",className:P.a.backImage,src:"/Ultimate-Systems-Task/LeftArrow.png"})}),Object(_.jsx)("div",{className:P.a.registerTitle,children:"Create a new account"}),Object(_.jsx)(H,{createUser:t.createUser})]})},J=Object(E.c)(w,Object(l.b)((function(t){return{isAuth:U.getIsAuth(t),isFetching:U.getIsFetching(t)}}),{createUser:function(t,e,n){return function(s){s(S(!0)),T(t,e,n).then((function(t){"jwt"in t&&(localStorage.setItem("token",t.jwt),s(I(t.user.username)),s(S(!1)))}))}}}))((function(t){return Object(_.jsx)(M,{isFetching:t.isFetching,isAuth:t.isAuth,createUser:t.createUser})})),K=function(){return Object(_.jsxs)(d.d,{children:[Object(_.jsx)(d.b,{exact:!0,path:"/auth",children:Object(_.jsx)(d.a,{to:"/auth/login"})}),Object(_.jsx)(d.b,{exact:!0,path:"/auth/login",children:Object(_.jsx)(F,{})}),Object(_.jsx)(d.b,{exact:!0,path:"/auth/register",children:Object(_.jsx)(J,{})})]})},G=n(17),W=n(18),q=n(20),Q=n(19),V=function(t){return{isAuth:t.user.isAuth}},Y=n(5),z=n.n(Y),X=n(6),Z=n.n(X),$=function(t){var e=function(e){t.setChangeTaskId(e)},n=function(n){return n.tasks.map((function(s){return Object(_.jsxs)("div",{className:Z.a.task,children:[Object(_.jsx)("div",{className:Z.a.taskCheckBox,onClick:function(){!function(e){e.isDone=!e.isDone;var n=JSON.parse(JSON.stringify(t.openList));t.setOpenList(n)}(s)},children:Object(_.jsx)("div",{className:"".concat(Z.a.taskCheckBoxEmpty," ").concat(s.isDone&&Z.a.taskCheckBoxActive)})}),Object(_.jsx)("div",{className:Z.a.taskTitle,onClick:function(){return e(s.id)},children:t.changeTaskId===s.id?Object(_.jsx)("input",{type:"text",className:Z.a.taskTitleInput,value:s.name,onChange:function(e){return function(e,n){var s=Object(x.a)({},t.openList);s.task.map((function(t){return t.id===e?t.name=n:t})),t.setOpenList(s)}(s.id,e.target.value)},autoFocus:!0,onBlur:function(){return e("")},placeholder:"Task name"}):Object(_.jsx)("div",{className:Z.a.taskTitleContent,children:s.name})})]},"id"in s?s.id:"local".concat(n.tasks.indexOf(s)))}))};return Object(_.jsxs)("div",{className:Z.a.toDoList,children:[Object(_.jsx)("div",{className:Z.a.title,children:Object(_.jsx)("span",{className:Z.a.titleContent,children:t.openList.name})}),Object(_.jsxs)("div",{className:Z.a.tasks,children:[t.openList.task.length>0&&Object(_.jsx)(n,{tasks:t.openList.task}),t.newTaskStorage.length>0&&Object(_.jsx)(n,{tasks:t.newTaskStorage}),Object(_.jsxs)("div",{className:Z.a.tasksActionsBtns,children:[Object(_.jsx)("button",{className:Z.a.tasksCancelBtn,children:"CANCEL"}),Object(_.jsx)("button",{className:Z.a.tasksAddBtn,onClick:function(){return function(){var e=Object(x.a)({},t.openList);e.task.push({name:"New task",isDone:!1}),t.setOpenList(e)}()},children:"ADD"})]})]}),Object(_.jsxs)("div",{className:Z.a.toDoListActionsBtns,children:[Object(_.jsx)("button",{className:Z.a.toDoListCancelBtn,onClick:function(){return t.setIsOpenList(!1),void t.setOpenList({})},children:"CANCEL"}),Object(_.jsx)("button",{className:Z.a.toDoListSaveBtn,onClick:function(){return t.updateList(t.openList.id,t.openList),t.setIsOpenList(!1),void e("")},children:"SAVE"})]})]})},tt={getToDoList:function(t){return t.board.toDoLists},getIsOpenList:function(t){return t.board.isOpenList},getChangeListId:function(t){return t.board.changeListId},getSortBy:function(t){return t.board.sortBy},getOpenList:function(t){return t.board.openList},getChangeTaskId:function(t){return t.board.changeTaskId},getNewTaskStorage:function(t){return t.board.newTaskStorage}},et=L.create({baseURL:"https://recruitment.ultimate.systems/"}),nt=function(){return{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}},st=function(t){return et.get("to-do-lists",Object(x.a)(Object(x.a)({},nt()),{},{params:{_sort:t}})).then((function(t){return t.data})).catch((function(t){console.log(t)}))},at=function(t,e){return et.put("to-do-lists/".concat(t),e,nt()).then((function(t){return t.data}))},it=function(t){return et.post("to-do-lists/",t,nt()).then((function(t){return t.data}))},ot=function(t){return et.delete("to-do-lists/".concat(t),nt()).then((function(t){return t.data}))},ct="SET_LISTS",rt="SET_IS_FETCHING",ut="SET_IS_OPEN_LIST",dt="SET_OPEN_LIST",lt="UPDATE_LIST_BY_ID",jt="SET_CHANGE_TASK_ID",bt="SET_NEW_TASK_SORAGE",Ot="SET_NEW_LIST",ht="SET_CHANGE_LIST_ID",pt="REMOVE_LIST",gt="SET_SORT_BY",_t={actualSort:"",toDoLists:{},isFetching:!1,isOpenList:!1,openList:{},changeTaskId:"",newTaskStorage:[],changeListId:"",sortBy:"created_at"},mt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_t,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ct:return Object(x.a)(Object(x.a)({},t),{},{toDoLists:e.body});case rt:return Object(x.a)(Object(x.a)({},t),{},{isFetching:e.body});case ut:return Object(x.a)(Object(x.a)({},t),{},{isOpenList:e.body});case dt:return Object(x.a)(Object(x.a)({},t),{},{openList:e.body});case lt:return Object(x.a)(Object(x.a)({},t),{},{toDoLists:t.toDoLists.map((function(t){return t.id===e.body.id?e.body:t}))});case jt:return Object(x.a)(Object(x.a)({},t),{},{changeTaskId:e.body});case bt:return Object(x.a)(Object(x.a)({},t),{},{newTaskStorage:e.body});case Ot:return Object(x.a)(Object(x.a)({},t),{},{toDoLists:t.toDoLists.concat([e.body])});case ht:return Object(x.a)(Object(x.a)({},t),{},{changeListId:e.body});case pt:return Object(x.a)(Object(x.a)({},t),{},{toDoLists:t.toDoLists.filter((function(t){return t.id!==e.body}))});case gt:return Object(x.a)(Object(x.a)({},t),{},{sortBy:e.body});default:return t}},ft=function(t){return{type:rt,body:t}},xt=function(t){return{type:ut,body:t}},Lt=function(t){return{type:dt,body:t}},kt=function(t,e){return function(n){n(ft(!0)),at(t,e).then((function(t){n({type:lt,body:t}),n(ft(!1))}))}},vt=function(t){Object(q.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(G.a)(this,n),e.apply(this,arguments)}return Object(W.a)(n,[{key:"render",value:function(){return Object(_.jsx)($,Object(x.a)({},this.props))}}]),n}(o.a.Component),Tt=Object(E.c)(Object(l.b)((function(t){return{isOpenList:tt.getIsOpenList(t),openList:tt.getOpenList(t),changeTaskId:tt.getChangeTaskId(t),newTaskStorage:tt.getNewTaskStorage(t)}}),{setIsOpenList:xt,updateList:kt,setOpenList:Lt,setChangeTaskId:function(t){return{type:jt,body:t}},setNewTaskStorage:function(t){return{type:bt,body:t}}}))(vt),Ct=function(t){var e="name",n="created_at",s={name:"Name",created_at:"Creation date"},a=Object(i.useState)(""),o=Object(j.a)(a,2),c=o[0],r=o[1],u=Object(i.useState)(!1),d=Object(j.a)(u,2),l=d[0],b=d[1],O=Object(i.useState)(!1),h=Object(j.a)(O,2),p=h[0],g=h[1],m=function(){return t.toDoLists.map((function(e){return Object(_.jsxs)("div",{className:z.a.list,onDoubleClick:function(){return f(e)},children:[Object(_.jsx)("div",{className:z.a.listName,onClick:function(){return function(e){t.setChangeListId(e.id),b(!0),r(e.name)}(e)},children:t.changeListId===e.id?Object(_.jsx)("input",{className:z.a.listNameContentInput,autoFocus:!0,value:(n=e.name,""!==c||l?c:n),onBlur:function(){return(n=e).name=c,t.updateList(n.id,n),t.setChangeListId(""),r(""),void b(!1);var n},onChange:function(t){return r(t.target.value)}}):Object(_.jsx)("div",{className:z.a.listNameContent,children:e.name})}),Object(_.jsxs)("div",{className:z.a.listCreationDate,children:["Created at: ",e.created_at.split("T")[0]]}),Object(_.jsxs)("div",{className:z.a.listTaskTypes,children:[Object(_.jsxs)("div",{className:z.a.listTaskComplited,children:["Compleated: ",e.task.filter((function(t){return!0===t.isDone})).length]}),Object(_.jsxs)("div",{className:z.a.listTaskUncomplited,children:["Uncomplited: ",e.task.filter((function(t){return!1===t.isDone})).length]}),Object(_.jsxs)("div",{className:z.a.listTaskAll,children:["All: ",e.task.length]})]}),Object(_.jsx)("div",{className:z.a.removeList,children:Object(_.jsx)("img",{alt:"",src:"/Ultimate-Systems-Task/trash.png",onClick:function(){return t.removeList(e.id)}})})]},e.id);var n}))},f=function(e){t.setOpenList(JSON.parse(JSON.stringify(e))),t.setIsOpenList(!0),t.setChangeListId("")},x=function(e){t.setsortBy(e),t.getLists(e)};return Object(_.jsxs)("div",{className:z.a.content,children:[Object(_.jsxs)("div",{className:z.a.board,children:[Object(_.jsxs)("div",{className:z.a.filters,children:[Object(_.jsx)("div",{className:z.a.search,children:Object(_.jsx)("input",{type:"text",placeholder:"Search"})}),Object(_.jsxs)("div",{className:z.a.sort,onClick:function(){g(!p)},children:[Object(_.jsx)("div",{className:z.a.sortText,children:s[t.sortBy]}),Object(_.jsx)("img",{className:"".concat(z.a.sortImg," ").concat(p&&z.a.additionalOpenSortImage),src:"/Ultimate-Systems-TasksortArrow.png",alt:""}),Object(_.jsxs)("div",{className:"".concat(z.a.sortOptions," ").concat(p&&z.a.additionalOpenSortOptions),children:[Object(_.jsx)("div",{className:z.a.sortOption,children:Object(_.jsx)("div",{className:z.a.sortOptionContent,onClick:function(){return x(e)},children:s.name})}),Object(_.jsx)("div",{className:z.a.sortOption,children:Object(_.jsx)("div",{className:z.a.sortOptionContent,onClick:function(){return x(n)},children:s.created_at})})]})]})]}),Object(_.jsx)("div",{className:z.a.lists,children:t.toDoLists.length>0&&Object(_.jsx)(m,{})}),Object(_.jsx)("div",{className:z.a.boardAdd,onClick:function(){t.createNewList({name:"New List",task:[]})},children:Object(_.jsx)("img",{className:z.a.boardAddImg,alt:"",src:"/Ultimate-Systems-Task/plusOrange.png"})})]}),t.isOpenList&&Object(_.jsx)(Tt,{})]})},yt=function(t){Object(q.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(G.a)(this,n),e.apply(this,arguments)}return Object(W.a)(n,[{key:"componentDidMount",value:function(){this.props.getLists(this.props.sortBy)}},{key:"render",value:function(){return Object(_.jsx)(Ct,Object(x.a)({},this.props))}}]),n}(o.a.Component),Nt=Object(E.c)((function(t){return Object(l.b)(V)((function(e){return e.isAuth?Object(_.jsx)(t,Object(x.a)({},e)):Object(_.jsx)(d.a,{to:"/auth/login"})}))}),Object(l.b)((function(t){return{toDoLists:tt.getToDoList(t),isOpenList:tt.getIsOpenList(t),changeListId:tt.getChangeListId(t),sortBy:tt.getSortBy(t)}}),{getLists:function(t){return function(e){e(ft(!0)),st(t).then((function(t){e({type:ct,body:t}),e(ft(!1))}))}},setIsOpenList:xt,setOpenList:Lt,createNewList:function(t){return function(e){e(ft(!0)),it(t).then((function(t){e({type:Ot,body:t}),e(ft(!1))}))}},setChangeListId:function(t){return{type:ht,body:t}},updateList:kt,removeList:function(t){return function(e){e(ft(!0)),ot(t).then((function(t){e(function(t){return{type:pt,body:t}}(t.id)),e(ft(!1))}))}},setsortBy:function(t){return{type:gt,body:t}}}))(yt),Dt=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(d.d,{children:[Object(_.jsx)(d.b,{exact:!0,path:"/board",component:Nt}),Object(_.jsx)(d.b,{exact:!0,path:"/board/list/:id",component:$})]})})},It=n(30),St=n.n(It),Bt=function(t){return Object(_.jsxs)("div",{className:St.a.header,children:[Object(_.jsx)("div",{className:St.a.title,children:"ToDo-List"}),t.isAuth&&Object(_.jsx)("img",{className:St.a.loginStatus,src:"/Ultimate-Systems-Task/logout.png",alt:"",onClick:function(){return t.setIsAuth(!1)}})]})},At=function(t){Object(q.a)(n,t);var e=Object(Q.a)(n);function n(){return Object(G.a)(this,n),e.apply(this,arguments)}return Object(W.a)(n,[{key:"render",value:function(){return Object(_.jsx)(Bt,Object(x.a)({},this.props))}}]),n}(o.a.Component),wt=Object(E.c)(Object(l.b)((function(t){return{isAuth:t.user.isAuth}}),{setIsAuth:function(t){return{type:N,body:t}}}))(At),Et=O.a.div(a||(a=Object(b.a)(["\n    background-color: ",";\n    width: 100%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 100%;\n    grid-template-rows: 10% 90%;\n"])),(function(t){return t.backgroundColor}));var Ut=function(){return Object(_.jsx)(Et,{children:Object(_.jsxs)(u.a,{children:[Object(_.jsx)(wt,{}),Object(_.jsxs)(d.d,{children:[Object(_.jsx)(d.b,{exact:!0,path:"/Ultimate-Systems-Task",children:Object(_.jsx)(d.a,{to:"/auth"})}),Object(_.jsx)(d.b,{exact:!0,path:"/",children:Object(_.jsx)(d.a,{to:"/board"})}),Object(_.jsx)(d.b,{path:"/auth",component:K}),Object(_.jsx)(d.b,{path:"/board",component:Dt})]})]})})},Ft=(n(83),n(50)),Rt=Object(E.b)({user:B,board:mt}),Pt=Object(E.d)(Rt,Object(E.a)(Ft.a)),Ht=Pt;window.store=Pt,r.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(l.a,{store:Ht,children:Object(_.jsx)(Ut,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.cc83ed03.chunk.js.map