"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5357],{5357:(b,m,i)=>{i.r(m),i.d(m,{ServicecategorylistRoutingModule:()=>r});var g=i(2761),p=i(4152),t=i(4650),u=i(6915),Z=i(3038),f=i(18),y=i(7185),h=i(6895),v=i(6308);function C(s,e){if(1&s){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"img",27),t.qZA(),t.TgZ(7,"td")(8,"a",28),t.NdJ("click",function(){const l=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.edititem(l._id))}),t._UZ(9,"img",29),t.qZA(),t.TgZ(10,"a",30),t.NdJ("click",function(){const l=t.CHM(a).$implicit,n=t.oxw();return t.KtG(n.deleteitem(l._id))}),t._UZ(11,"img",31),t.qZA()()()}if(2&s){const a=e.$implicit,o=e.index;t.xp6(2),t.hij(" ",o+1," "),t.xp6(2),t.Oqu(a.categoryname),t.xp6(2),t.s9C("src",a.image,t.LSH)}}function T(s,e){1&s&&(t.TgZ(0,"tr")(1,"td",32)(2,"h5",33),t._uU(3,"No matching records found"),t.qZA()()())}class c{constructor(e,a,o,d,l,n){this.data=e,this.pagination=a,this.sweetalert=o,this.router=d,this.api=l,this.toastr=n,this.initChecked=!1,this.routes=p._j,this.selectedValue1="",this.selectedValue2="",this.selectedValue3="",this.tableData=[],this.pageSize=10,this.serialNumberArray=[],this.totalData=0,this.showFilter=!1,this.searchDataValue="",this.maind=[],this.getTableData({skip:"tt",limit:"f"})}getTableData(e){this.api.getCatagory().subscribe(a=>{console.log(a),a&&(this.tableData=a)})}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.tableData=this.dataSource.filteredData}deleteitem(e){this.api.delCatagory(e).subscribe(a=>{window.location.reload(),this.toastr.success("Category Deleted Successfully")},a=>{this.toastr.error(a.error.error.message)})}edititem(e){localStorage.setItem("id",e),localStorage.getItem("id")&&this.router.navigate(["/service/add-service-catagory/"+e])}addCatagory(){this.router.navigate(["/service/add-service-catagory"])}}c.\u0275fac=function(e){return new(e||c)(t.Y36(p.Do),t.Y36(u.N),t.Y36(Z.P),t.Y36(g.F0),t.Y36(f.m),t.Y36(y._W))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-servicecategorylist"]],decls:46,vars:2,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["matSort","","matSortActive","Sno","matSortDirection","asc","matSortDisableClear","",1,"table","datanew"],["mat-sort-header","Categoryname"],["mat-sort-header","image"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","",2,"width","60px","border-radius","50px",3,"src"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","12"],[1,"no-record"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Service Category list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search service Category"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t.NdJ("click",function(){return a.addCatagory()}),t._UZ(8,"img",4),t._uU(9,"Add Category "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8),t._UZ(14,"div",9),t.TgZ(15,"div",10)(16,"a",11),t._UZ(17,"img",12),t.qZA(),t.TgZ(18,"div",13),t._UZ(19,"label"),t.qZA()()(),t.TgZ(20,"div",14)(21,"ul")(22,"li")(23,"a",15),t._UZ(24,"img",16),t.qZA()(),t.TgZ(25,"li")(26,"a",17),t._UZ(27,"img",18),t.qZA()(),t.TgZ(28,"li")(29,"a",19),t._UZ(30,"img",20),t.qZA()()()()(),t.TgZ(31,"div",21)(32,"table",22)(33,"thead")(34,"tr")(35,"th"),t._uU(36," Sno "),t.qZA(),t.TgZ(37,"th",23),t._uU(38,"Category name"),t.qZA(),t.TgZ(39,"th",24),t._uU(40,"Image"),t.qZA(),t.TgZ(41,"th"),t._uU(42,"Action"),t.qZA()()(),t.TgZ(43,"tbody"),t.YNc(44,C,12,3,"tr",25),t.YNc(45,T,4,0,"tr",26),t.qZA()()()()()),2&e&&(t.xp6(44),t.Q6J("ngForOf",a.tableData),t.xp6(1),t.Q6J("ngIf",0==a.tableData.length))},dependencies:[h.sg,h.O5,v.YE,v.nU],styles:[".form-select[_ngcontent-%COMP%]{width:111%;font-size:14px}"]});const S=[{path:"",component:c}];class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.Bz.forChild(S),g.Bz]})}}]);