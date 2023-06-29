"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[454],{5442:(e,a,l)=>{l.d(a,{Z:()=>s});const s={name:"Users",module:"users",schema:"auth",module_name:"Management Account",formType:{show:!1,edit:!1,add:!1},model:{name:null,username:null,email:null,address:null,password:null},table:{columns:(e,a,l)=>[{name:"id",label:"Option",field:"id",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"},{name:"username",label:"Username",field:"username",sortable:!0,align:"left"},{name:"role-name",label:"Role",field:a=>e.transformField(a,"role.name"),sortable:!0,align:"left"},{name:"role-master_menu_id",label:"Master Menu",field:a=>e.transformField(a,"role.master_menu.name"),sortable:!0,align:"left"}]}}},3454:(e,a,l)=>{l.r(a),l.d(a,{default:()=>_});var s=l(9835);const t={class:"row"},i={class:"row col-12"},o={class:"col-12"},d=(0,s._)("div",{class:"text-bold"},"Users",-1),n={class:"col-12"},r=(0,s._)("div",{class:"text-bold q-mt-md"},"Roles",-1);function m(e,a,l,m,u,c){const h=(0,s.up)("s-loading"),p=(0,s.up)("t-list"),_=(0,s.up)("s-form"),f=(0,s.up)("s-drawer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(h,{load:u.loading},null,8,["load"]),(0,s.Wm)(f,{onRefresh:e.refresh,useModal:u.useModal,form:"",detail:"",Meta:u.Meta,onBack:c.back},{default:(0,s.w5)((()=>[(0,s._)("div",t,[(0,s._)("div",i,[(0,s.Wm)(_,{class:"q-px-md py-sm q-mt-lg col-6"},{default:(0,s.w5)((()=>[(0,s._)("div",o,[d,(0,s.Wm)(p,{list:u.mainList},null,8,["list"])]),(0,s._)("div",n,[r,(0,s.Wm)(p,{list:u.roleList},null,8,["list"])])])),_:1})])])])),_:1},8,["onRefresh","useModal","Meta","onBack"])])}l(9665);var u=l(5442);const c={name:u.Z.name+"Detail",props:["modal","id","submitOnModal"],created(){this.$Handle.loadingStart(),this.modal&&!0===this.modal.show&&(this.useModal=!0),this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.param?this.findId(this.param):this.$Handle.loadingStop()},data(){return{Meta:u.Z,useModal:!1,model:u.Z.model,mainList:null,roleList:null,loading:!1,param:null,setup:{destroy:["id","deleted_at","created_at","updated_at","role_id","is_customer","avatar_id","created_by","updated_by","school","role","avatar","class","class_id","class_id","school_id","deleted_by"],money:[],date:[]}}},watch:{},methods:{findId(e){let a=u.Z.module+"/"+e;this.$api.get(a,((e,a,l,s)=>{if(200==a){let a={...e,school_name:e.school&&e.school.name?e.school.name:"",class_name:e.class&&e.class.name?e.class.name:""};this.mainList=this.$Help.transformList(a,this.setup),this.roleList=this.$Help.transformList(a.role,{destroy:["master_menu_id","master_menu","permission_access_index","updated_by"]}),this.$Handle.loadingStop()}}))},back(){if(1!=this.useModal)return this.$router.push({name:u.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var h=l(1639);const p=(0,h.Z)(c,[["render",m]]),_=p}}]);