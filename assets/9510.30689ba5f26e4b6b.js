"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9510],{9510:(F,l,s)=>{s.r(l),s.d(l,{AddvatModule:()=>a});var v=s(6895),n=s(2761),m=s(1563),t=s(4650),i=s(4006),h=s(18),p=s(7185);class o{constructor(e,c,u,A,y){this.router=e,this.Ar=c,this.formBuilder=u,this.service=A,this.toastr=y,this.routes=m._,this.id=null}ngOnInit(){this.Ar.params.subscribe(e=>this.id=e.id),this.createForm(),null!=this.id&&this.setEditData()}setEditData(){this.service.getVATbyId(this?.id).subscribe(e=>{console.log(e),this.myForm.patchValue(e)})}createForm(){this.myForm=this.formBuilder.group({vat:[]})}saveService(){this.myForm.invalid||(null==this.id?this.service.saveVAT(this.myForm?.value).subscribe(e=>{console.log(e),e&&this.toastr.success("VAT created successfully"),this.router.navigate(["service/vat-list"])}):this.service.updateVAT(this.myForm?.value,this.id).subscribe(e=>{console.log(e),e&&this.toastr.success("VAT updated successfully"),this.router.navigate(["service/vat-list"])}))}}o.\u0275fac=function(e){return new(e||o)(t.Y36(n.F0),t.Y36(n.gz),t.Y36(i.qu),t.Y36(h.m),t.Y36(p._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-addvat"]],decls:22,vars:1,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"register-form"],["novalidate","",3,"formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group"],["type","text","formControlName","vat","placeholder","Please enter VAT Name",1,"form-control"],[1,"form-group","pt-2","pb-2"],[1,"col-lg-12"],["href","javascript:void(0);","type","Submit",1,"btn","btn-submit","me-2",3,"click"],["routerLink","/service/vat-list",1,"btn","btn-cancel"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Service Add Category"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new service Category"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"form",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Unit Name"),t.qZA(),t._UZ(15,"input",9),t.qZA()()(),t.TgZ(16,"div",10)(17,"div",11)(18,"a",12),t.NdJ("click",function(){return c.saveService()}),t._uU(19,"Submit"),t.qZA(),t.TgZ(20,"a",13),t._uU(21,"Cancel"),t.qZA()()()()()()()),2&e&&(t.xp6(9),t.Q6J("formGroup",c.myForm))},dependencies:[n.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]});const f=[{path:"",component:o},{path:":id",component:o}];class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[n.Bz.forChild(f),n.Bz]});var g=s(2833);class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[v.ez,r,g.p,i.UX]})}}]);