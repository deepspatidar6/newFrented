"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5611],{5611:(J,h,o)=>{o.r(h),o.d(h,{CurrencysettingsModule:()=>d});var m=o(6895),p=o(2761),b=o(671),Z=o(4152),t=o(4650),y=o(6915),_=o(3038),C=o(6308),A=o(3897),f=o(3238),u=o(4006),T=o(8106);function U(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",56)(3,"input",24),t.NdJ("ngModelChange",function(n){const g=t.CHM(e).$implicit;return t.KtG(g.isSelected=n)}),t.qZA(),t._UZ(4,"span",25),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",57)(13,"input",58),t.NdJ("ngModelChange",function(n){const g=t.CHM(e).$implicit;return t.KtG(g.isStatus=n)}),t.qZA(),t.TgZ(14,"label",59),t._uU(15,"checkbox"),t.qZA()()(),t.TgZ(16,"td",29)(17,"a",60),t._UZ(18,"img",61),t.qZA(),t.TgZ(19,"a",62),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.deleteBtn())}),t._UZ(20,"img",63),t.qZA()()()}if(2&s){const e=a.$implicit,i=a.index;t.xp6(3),t.Q6J("ngModel",e.isSelected),t.xp6(3),t.Oqu(e.Currencyname),t.xp6(2),t.Oqu(e.Currencycode),t.xp6(2),t.Oqu(e.Currencysymbol),t.xp6(3),t.s9C("id",i+"-Div"),t.Q6J("ngModel",e.isStatus),t.xp6(1),t.s9C("for",i+"-Div")}}function M(s,a){1&s&&(t.TgZ(0,"tr")(1,"td",64)(2,"h5",65),t._uU(3,"No matching records found"),t.qZA()()())}function q(s,a){if(1&s&&(t.TgZ(0,"mat-option",66),t._uU(1),t.qZA()),2&s){const e=a.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}function D(s,a){if(1&s&&(t.TgZ(0,"mat-option",66),t._uU(1),t.qZA()),2&s){const e=a.$implicit;t.Q6J("value",e.value),t.xp6(1),t.hij(" ",e.value," ")}}const v=function(){return{standalone:!0}};class c{constructor(a,e,i,n){this.data=a,this.pagination=e,this.sweetalert=i,this.router=n,this.selectedValue1="",this.selectedValue2="",this.selectedList1=[{value:"Choose Status"},{value:"Active"},{value:"InActive"}],this.selectedList2=[{value:"Active"},{value:"InActive"}],this.initChecked=!1,this.tableData=[],this.routes=Z._j,this.pageSize=10,this.serialNumberArray=[],this.totalData=0,this.showFilter=!1,this.searchDataValue="",this.pagination.tablePageSize.subscribe(l=>{this.router.url==this.routes.currencySettings&&(this.getTableData({skip:l.skip,limit:l.limit}),this.pageSize=l.pageSize)})}getTableData(a){this.data.getCurrencySettings().subscribe(e=>{this.tableData=[],this.serialNumberArray=[],this.totalData=e.totalData,e.data.map((i,n)=>{const l=n+1;n>=a.skip&&l<=a.limit&&(i.sNo=l,this.tableData.push(i),this.serialNumberArray.push(l))}),this.dataSource=new b.by(this.tableData),this.pagination.calculatePageSize.next({totalData:this.totalData,pageSize:this.pageSize,tableData:this.tableData,serialNumberArray:this.serialNumberArray})})}searchData(a){this.dataSource.filter=a.trim().toLowerCase(),this.tableData=this.dataSource.filteredData}sortData(a){const e=this.tableData.slice();this.tableData=a.active&&""!==a.direction?e.sort((i,n)=>(i[a.active]<n[a.active]?-1:1)*("asc"===a.direction?1:-1)):e}selectAll(a){this.tableData.forEach(a?e=>{e.isSelected=!1}:e=>{e.isSelected=!0})}deleteBtn(){this.sweetalert.deleteBtn()}}c.\u0275fac=function(a){return new(a||c)(t.Y36(Z.Do),t.Y36(y.N),t.Y36(_.P),t.Y36(p.F0))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-currencysettings"]],decls:135,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["data-bs-toggle","modal","data-bs-target","#addpayment",1,"btn","btn-added","btn-colr"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...",1,"form-control",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["matSort","","matSortActive","Sno","matSortDirection","asc","matSortDisableClear","",1,"table","datanew",3,"matSortChange"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],["mat-sort-header","Currencyname"],["mat-sort-header","Currencycode"],["mat-sort-header","Currencysymbol"],[1,"text-end"],[4,"ngFor","ngForOf"],[4,"ngIf"],["id","addpayment","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"col-12"],[1,"form-group"],[1,"manitory"],["type","text"],[1,"form-group","mb-0"],["placeholder","Choose Status",1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-submit"],["type","button","data-bs-dismiss","modal",1,"btn","btn-cancel"],["id","editpayment","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["type","text","placeholder","India - Indian rupee"],["type","text","placeholder","INR"],["type","text","placeholder","\u20b9"],["placeholder","Active",1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[1,"checkboxs"],[1,"status-toggle","d-flex","justify-content-between","align-items-center"],["type","checkbox",1,"check",3,"id","ngModel","ngModelChange"],[1,"checktoggle",3,"for"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#editpayment",1,"me-3"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","12"],[1,"no-record"],[3,"value"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Currency Settings"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage Currency Settings"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add New Currency"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.qZA(),t.TgZ(17,"div",12)(18,"label")(19,"input",13),t.NdJ("ngModelChange",function(n){return e.searchDataValue=n})("ngModelChange",function(){return e.searchData(e.searchDataValue)}),t.qZA()()()()(),t.TgZ(20,"div",14)(21,"ul")(22,"li")(23,"a",15),t._UZ(24,"img",16),t.qZA()(),t.TgZ(25,"li")(26,"a",17),t._UZ(27,"img",18),t.qZA()(),t.TgZ(28,"li")(29,"a",19),t._UZ(30,"img",20),t.qZA()()()()(),t.TgZ(31,"div",21)(32,"table",22),t.NdJ("matSortChange",function(n){return e.sortData(n)}),t.TgZ(33,"thead")(34,"tr")(35,"th")(36,"label",23),t.NdJ("click",function(){return e.selectAll(e.initChecked)}),t.TgZ(37,"input",24),t.NdJ("ngModelChange",function(n){return e.initChecked=n}),t.qZA(),t._UZ(38,"span",25),t.qZA()(),t.TgZ(39,"th",26),t._uU(40,"Currency name"),t.qZA(),t.TgZ(41,"th",27),t._uU(42,"Currency code"),t.qZA(),t.TgZ(43,"th",28),t._uU(44,"Currency symbol"),t.qZA(),t.TgZ(45,"th"),t._uU(46,"Status"),t.qZA(),t.TgZ(47,"th",29),t._uU(48,"Action"),t.qZA()()(),t.TgZ(49,"tbody"),t.YNc(50,U,21,7,"tr",30),t.YNc(51,M,4,0,"tr",31),t.qZA()(),t._UZ(52,"app-custom-pagination"),t.qZA()()(),t.TgZ(53,"div",32)(54,"div",33)(55,"div",34)(56,"div",35)(57,"h5",36),t._uU(58,"Add Currency "),t.qZA(),t.TgZ(59,"button",37)(60,"span",38),t._uU(61,"\xd7"),t.qZA()()(),t.TgZ(62,"div",39)(63,"div",40)(64,"div",41)(65,"div",42)(66,"label"),t._uU(67,"Currency Name"),t.TgZ(68,"span",43),t._uU(69,"*"),t.qZA()(),t._UZ(70,"input",44),t.qZA()(),t.TgZ(71,"div",41)(72,"div",42)(73,"label"),t._uU(74,"Currency Code"),t.qZA(),t._UZ(75,"input",44),t.qZA()(),t.TgZ(76,"div",41)(77,"div",42)(78,"label"),t._uU(79,"Currency Symbol"),t.TgZ(80,"span",43),t._uU(81,"*"),t.qZA()(),t._UZ(82,"input",44),t.qZA()(),t.TgZ(83,"div",41)(84,"div",45)(85,"label"),t._uU(86,"Status"),t.qZA(),t.TgZ(87,"mat-select",46),t.NdJ("ngModelChange",function(n){return e.selectedValue1=n}),t.YNc(88,q,2,2,"mat-option",47),t.qZA()()()()(),t.TgZ(89,"div",48)(90,"button",49),t._uU(91,"Confirm"),t.qZA(),t.TgZ(92,"button",50),t._uU(93,"Cancel"),t.qZA()()()()(),t.TgZ(94,"div",51)(95,"div",33)(96,"div",34)(97,"div",35)(98,"h5",36),t._uU(99,"Edit Currency"),t.qZA(),t.TgZ(100,"button",37)(101,"span",38),t._uU(102,"\xd7"),t.qZA()()(),t.TgZ(103,"div",39)(104,"div",40)(105,"div",41)(106,"div",42)(107,"label"),t._uU(108,"Currency Name"),t.TgZ(109,"span",43),t._uU(110,"*"),t.qZA()(),t._UZ(111,"input",52),t.qZA()(),t.TgZ(112,"div",41)(113,"div",42)(114,"label"),t._uU(115,"Currency Code"),t.qZA(),t._UZ(116,"input",53),t.qZA()(),t.TgZ(117,"div",41)(118,"div",42)(119,"label"),t._uU(120,"Currency Symbol"),t.TgZ(121,"span",43),t._uU(122,"*"),t.qZA()(),t._UZ(123,"input",54),t.qZA()(),t.TgZ(124,"div",41)(125,"div",45)(126,"label"),t._uU(127,"Status"),t.qZA(),t.TgZ(128,"mat-select",55),t.NdJ("ngModelChange",function(n){return e.selectedValue2=n}),t.YNc(129,D,2,2,"mat-option",47),t.qZA()()()()(),t.TgZ(130,"div",48)(131,"button",49),t._uU(132,"Update"),t.qZA(),t.TgZ(133,"button",50),t._uU(134,"Cancel"),t.qZA()()()()()),2&a&&(t.xp6(19),t.Q6J("ngModel",e.searchDataValue),t.xp6(18),t.Q6J("ngModel",e.initChecked),t.xp6(13),t.Q6J("ngForOf",e.tableData),t.xp6(1),t.Q6J("ngIf",0===e.tableData.length),t.xp6(36),t.Q6J("ngModel",e.selectedValue1)("ngModelOptions",t.DdM(10,v)),t.xp6(1),t.Q6J("ngForOf",e.selectedList1),t.xp6(40),t.Q6J("ngModel",e.selectedValue2)("ngModelOptions",t.DdM(11,v)),t.xp6(1),t.Q6J("ngForOf",e.selectedList2))},dependencies:[m.sg,m.O5,C.YE,C.nU,A.gD,f.ey,u.Fj,u.Wl,u.JJ,u.On,T.W]});const S=[{path:"",component:c}];class r{}r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[p.Bz.forChild(S),p.Bz]});var N=o(2833);class d{}d.\u0275fac=function(a){return new(a||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[m.ez,r,N.p]})}}]);