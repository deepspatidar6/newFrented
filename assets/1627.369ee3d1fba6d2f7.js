"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1627],{1627:(T,u,e)=>{e.r(u),e.d(u,{LightboxModule:()=>s});var d=e(6895),l=e(2761),p=e(1563),o=e(4650),h=e(4806);function x(i,n){if(1&i){const t=o.EpF();o.TgZ(0,"div",16)(1,"img",17),o.NdJ("click",function(){o.CHM(t);const a=o.oxw().index,g=o.oxw();return o.KtG(g.open(a,g.albumsOne))}),o.qZA()()}if(2&i){const t=o.oxw().$implicit;o.xp6(1),o.Q6J("src",t.src,o.LSH)}}function b(i,n){if(1&i&&(o.ynx(0),o.YNc(1,x,2,1,"div",15),o.BQk()),2&i){const t=n.index;o.xp6(1),o.Q6J("ngIf",t<2)}}function _(i,n){if(1&i){const t=o.EpF();o.TgZ(0,"div",16)(1,"img",17),o.NdJ("click",function(){o.CHM(t);const a=o.oxw().index,g=o.oxw();return o.KtG(g.open(a,g.albumsTwo))}),o.qZA()()}if(2&i){const t=o.oxw().$implicit;o.xp6(1),o.Q6J("src",t.src,o.LSH)}}function v(i,n){if(1&i&&(o.ynx(0),o.YNc(1,_,2,1,"div",15),o.BQk()),2&i){const t=n.index;o.xp6(1),o.Q6J("ngIf",t>2)}}class r{constructor(n){this._lightbox=n,this.routes=p._,this.albumsOne=[],this.albumsTwo=[];for(let t=1;t<=5;t++){const m="assets/img/img-0"+t+".jpg",a="Image "+t+" caption here";this.albumsOne.push({src:m}),this.albumsTwo.push({src:m,caption:a})}}open(n,t){this._lightbox.open(t,n)}close(){this._lightbox.close()}}r.\u0275fac=function(n){return new(n||r)(o.Y36(h.ey))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-lightbox"]],decls:29,vars:3,consts:[[1,"cardhead"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-md-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[4,"ngFor","ngForOf"],["class","col-md-4 mb-2 mb-md-0",4,"ngIf"],[1,"col-md-4","mb-2","mb-md-0"],[1,"img-fluid",3,"src","click"]],template:function(n,t){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),o._uU(5,"Lightbox"),o.qZA(),o.TgZ(6,"ul",5)(7,"li",6)(8,"a",7),o._uU(9,"Dashboard"),o.qZA()(),o.TgZ(10,"li",8),o._uU(11,"Lightbox"),o.qZA()()()()(),o.TgZ(12,"div",2)(13,"div",9)(14,"div",10)(15,"div",11)(16,"h5",12),o._uU(17,"Single Image Lightbox"),o.qZA()(),o.TgZ(18,"div",13)(19,"div",2),o.YNc(20,b,2,1,"ng-container",14),o.qZA()()()(),o.TgZ(21,"div",9)(22,"div",10)(23,"div",11)(24,"h5",12),o._uU(25,"Image with Description"),o.qZA()(),o.TgZ(26,"div",13)(27,"div",2),o.YNc(28,v,2,1,"ng-container",14),o.qZA()()()()()()),2&n&&(o.xp6(8),o.Q6J("routerLink",t.routes.dashboard),o.xp6(12),o.Q6J("ngForOf",t.albumsOne),o.xp6(8),o.Q6J("ngForOf",t.albumsTwo))},dependencies:[d.sg,d.O5,l.rH]});const f=[{path:"",component:r}];class c{}c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=o.oAB({type:c}),c.\u0275inj=o.cJS({imports:[l.Bz.forChild(f),l.Bz]});var L=e(3936);class s{}s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[d.ez,c,L.b]})}}]);