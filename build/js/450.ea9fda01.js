"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[450],{9450:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var i=s(9835);const n={class:"window-height window-width row"},r={key:0,class:"col-md-4 col-12 row justify-center"},a={key:1,class:"col-md-5 col-12 row justify-center bg-primary"},u={key:2,class:"col-md-7 relative-position bg-secondary"},o={class:"fit column justify-center items-center relative-position bg-secondary"},l=(0,i._)("div",{class:"col-12 q-mb-md text-primary absolute-bottom text-center"}," Aplikasi ini dibuat untuk kebutuhan interview ",-1);function c(e,t,s,c,m,d){const h=(0,i.up)("router-view"),g=(0,i.up)("q-img");return(0,i.wg)(),(0,i.iD)("div",n,[e.$q.screen.lt.md?((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(h)])):(0,i.kq)("",!0),e.$q.screen.gt.sm?((0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(h)])):(0,i.kq)("",!0),e.$q.screen.gt.sm?((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",o,[(0,i.Wm)(g,{src:"http://yubiteck.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyubi_logo.8243810c.png&w=3840&q=75",style:{width:"100px"}}),l])])):(0,i.kq)("",!0)])}s(9665);const m={name:"LoginLayout",created(){if(this.user=this.$Handle.getLS("_user"),this.$Handle.getLS("_user")&&this.$Handle.getLS("_token"))if(1==this.user.is_customer)this.$router.push({name:"cms-jamaah-index"});else{this.menus=this.$Handle.getLS("menus");let e=this.menus&&void 0!=this.menus[0].menu?this.menus[0].menu:{path:"login"};this.$router.push({name:e.path})}},data(){return{user:null,menus:null,tab:"login",dataModel:{username:null,password:null},errors:null}},methods:{}};var d=s(1639),h=s(335),g=s(9984),p=s.n(g);const w=(0,d.Z)(m,[["render",c]]),y=w;p()(m,"components",{QImg:h.Z})}}]);