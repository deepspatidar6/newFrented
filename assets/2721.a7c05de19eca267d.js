"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2721],{2721:(x,c,n)=>{n.r(c),n.d(c,{CreatesalesreturnModule:()=>s});var g=n(6895),Z=n(906),u=n(2761),v=n(4152),e=n(4650),p=n(4006),T=n(3897),h=n(3238);function A(a,o){if(1&a&&(e.TgZ(0,"mat-option",33),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.value," ")}}function U(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"tr")(1,"td",34)(2,"a",35),e._UZ(3,"img",36),e.qZA(),e.TgZ(4,"a",12),e._uU(5),e.qZA()(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"a",37),e.NdJ("click",function(){const f=e.CHM(t).index,M=e.oxw();return e.KtG(M.delete(f))}),e._UZ(20,"img",38),e.qZA()()()}if(2&a){const t=o.$implicit;e.xp6(3),e.Q6J("src",t.img,e.LSH),e.xp6(2),e.Oqu(t.ProductName),e.xp6(2),e.Oqu(t.NetUnitPrice),e.xp6(2),e.Oqu(t.Stock),e.xp6(2),e.Oqu(t.Qty),e.xp6(2),e.Oqu(t.Discount),e.xp6(2),e.Oqu(t.Tax),e.xp6(2),e.Oqu(t.Subtotal)}}function _(a,o){if(1&a&&(e.TgZ(0,"mat-option",33),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("value",t.value),e.xp6(1),e.hij(" ",t.value," ")}}const m=function(){return{standalone:!0}};class i{constructor(){this.selectedValue2="",this.selectedValue1="",this.routes=v._j,this.selectedList2=[{value:"Choose Status"},{value:"Complete"},{value:"Inprogress"}],this.selectedList1=[{value:"Select Customer"},{value:"Customer"}],this.tableData=[{ProductName:"Apple Earpods",NetUnitPrice:"150",Stock:"500",Qty:"500",Discount:"100",Tax:"50",Subtotal:"250",img:"assets/img/product/product7.jpg"},{ProductName:"Macbook Pro",NetUnitPrice:"150",Stock:"500",Qty:"500",Discount:"100",Tax:"50",Subtotal:"250",img:"assets/img/product/product6.jpg"}],this.date=new Date}delete(o){this.tableData.splice(o,1)}}i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-createsalesreturn"]],decls:120,vars:11,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],[1,"col-lg-10","col-sm-10","col-10"],["placeholder","Select Customer",1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-2","col-sm-2","col-2","ps-0"],[1,"add-icon"],["href","javascript:void(0);"],["src","assets/img/icons/plus1.svg","alt","img"],[1,"input-groupicon"],[3,"ngModel","ngModelChange"],[1,"addonset"],["src","assets/img/icons/calendars.svg","alt","img"],["type","text"],[1,"col-lg-12","col-sm-6","col-12"],["type","text","placeholder","Scan/Search Product by code and select..."],["src","assets/img/icons/scanners.svg","alt","img"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"col-lg-12","float-md-right"],[1,"total-order"],[1,"total"],["placeholder","Choose Status",1,"select",3,"ngModel","ngModelOptions","ngModelChange"],[1,"col-lg-12"],[1,"form-control"],["href","javascript:void(0);",1,"btn","btn-submit","me-2"],[1,"btn","btn-cancel",3,"routerLink"],[3,"value"],[1,"productimgname"],[1,"product-img"],["alt","product",3,"src"],[1,"delete-set",3,"click"],["src","assets/img/icons/delete.svg","alt","svg"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Create Sales Return"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Add/Update Sales Return"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"label"),e._uU(12,"Customer Name"),e.qZA(),e.TgZ(13,"div",4)(14,"div",7)(15,"mat-select",8),e.NdJ("ngModelChange",function(r){return t.selectedValue1=r}),e.YNc(16,A,2,2,"mat-option",9),e.qZA()(),e.TgZ(17,"div",10)(18,"div",11)(19,"a",12),e._UZ(20,"img",13),e.qZA()()()()()(),e.TgZ(21,"div",5)(22,"div",6)(23,"label"),e._uU(24,"Quotation Date"),e.qZA(),e.TgZ(25,"div",14)(26,"ngx-datepicker",15),e.NdJ("ngModelChange",function(r){return t.date=r}),e.qZA(),e.TgZ(27,"div",16),e._UZ(28,"img",17),e.qZA()()()(),e.TgZ(29,"div",5)(30,"div",6)(31,"label"),e._uU(32,"Reference No."),e.qZA(),e._UZ(33,"input",18),e.qZA()(),e.TgZ(34,"div",19)(35,"div",6)(36,"label"),e._uU(37,"Product"),e.qZA(),e.TgZ(38,"div",14),e._UZ(39,"input",20),e.TgZ(40,"div",16),e._UZ(41,"img",21),e.qZA()()()()(),e.TgZ(42,"div",4)(43,"div",22)(44,"table",23)(45,"thead")(46,"tr")(47,"th"),e._uU(48,"Product Name"),e.qZA(),e.TgZ(49,"th"),e._uU(50,"Net Unit Price($)"),e.qZA(),e.TgZ(51,"th"),e._uU(52,"Stock"),e.qZA(),e.TgZ(53,"th"),e._uU(54,"QTY"),e.qZA(),e.TgZ(55,"th"),e._uU(56,"Discount($)"),e.qZA(),e.TgZ(57,"th"),e._uU(58,"Tax %"),e.qZA(),e.TgZ(59,"th"),e._uU(60,"Subtotal ($)"),e.qZA(),e._UZ(61,"th"),e.qZA()(),e.TgZ(62,"tbody"),e.YNc(63,U,21,8,"tr",24),e.qZA()()()(),e.TgZ(64,"div",4)(65,"div",25)(66,"div",26)(67,"ul")(68,"li")(69,"h4"),e._uU(70,"Order Tax"),e.qZA(),e.TgZ(71,"h5"),e._uU(72,"$ 0.00 (0.00%)"),e.qZA()(),e.TgZ(73,"li")(74,"h4"),e._uU(75,"Discount"),e.qZA(),e.TgZ(76,"h5"),e._uU(77,"$ 0.00"),e.qZA()(),e.TgZ(78,"li")(79,"h4"),e._uU(80,"Shipping"),e.qZA(),e.TgZ(81,"h5"),e._uU(82,"$ 0.00"),e.qZA()(),e.TgZ(83,"li",27)(84,"h4"),e._uU(85,"Grand Total"),e.qZA(),e.TgZ(86,"h5"),e._uU(87,"$ 0.00"),e.qZA()()()()()(),e.TgZ(88,"div",4)(89,"div",5)(90,"div",6)(91,"label"),e._uU(92,"Order Tax"),e.qZA(),e._UZ(93,"input",18),e.qZA()(),e.TgZ(94,"div",5)(95,"div",6)(96,"label"),e._uU(97,"Discount"),e.qZA(),e._UZ(98,"input",18),e.qZA()(),e.TgZ(99,"div",5)(100,"div",6)(101,"label"),e._uU(102,"Shipping"),e.qZA(),e._UZ(103,"input",18),e.qZA()(),e.TgZ(104,"div",5)(105,"div",6)(106,"label"),e._uU(107,"Status"),e.qZA(),e.TgZ(108,"mat-select",28),e.NdJ("ngModelChange",function(r){return t.selectedValue2=r}),e.YNc(109,_,2,2,"mat-option",9),e.qZA()()(),e.TgZ(110,"div",29)(111,"div",6)(112,"label"),e._uU(113,"Description"),e.qZA(),e._UZ(114,"textarea",30),e.qZA()(),e.TgZ(115,"div",29)(116,"a",31),e._uU(117,"Submit"),e.qZA(),e.TgZ(118,"a",32),e._uU(119,"Cancel"),e.qZA()()()()()),2&o&&(e.xp6(15),e.Q6J("ngModel",t.selectedValue1)("ngModelOptions",e.DdM(9,m)),e.xp6(1),e.Q6J("ngForOf",t.selectedList1),e.xp6(10),e.Q6J("ngModel",t.date),e.xp6(37),e.Q6J("ngForOf",t.tableData),e.xp6(45),e.Q6J("ngModel",t.selectedValue2)("ngModelOptions",e.DdM(10,m)),e.xp6(1),e.Q6J("ngForOf",t.selectedList2),e.xp6(9),e.Q6J("routerLink",t.routes.salesReturnLists))},dependencies:[g.sg,u.rH,Z.QB,p.JJ,p.On,T.gD,h.ey]});const q=[{path:"",component:i}];class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.Bz.forChild(q),u.Bz]});var C=n(2833);class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.ez,l,Z.ZU,C.p]})}}]);