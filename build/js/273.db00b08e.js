"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[273],{9273:(s,e,a)=>{a.r(e),a.d(e,{default:()=>c});var t=a(9835);const i={class:"col-12 row q-mt-md"},l={class:"col-md-6 col-12 q-mb-sm"},o={class:"col-md-6 col-12",style:{height:"100%"}};function d(s,e,a,d,m,n){const r=(0,t.up)("s-loading"),u=(0,t.up)("t-list"),h=(0,t.up)("s-form"),c=(0,t.up)("PermissionsTable"),p=(0,t.up)("s-drawer");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(r,{load:m.loading},null,8,["load"]),(0,t.Wm)(p,{onRefresh:s.refresh,useModal:m.useModal,form:"",detail:"",onBack:n.back,Meta:m.Meta},{default:(0,t.w5)((()=>[(0,t._)("div",i,[(0,t._)("div",l,[(0,t.Wm)(h,{class:"q-px-md py-sm",title:"Detail "+m.Meta.name},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{list:m.mainList},null,8,["list"])])),_:1},8,["title"])]),(0,t._)("div",o,[(0,t.Wm)(h,{class:"q-px-md",title:"Permissions Access"},{default:(0,t.w5)((()=>[m.showPermission?((0,t.wg)(),(0,t.j4)(c,{key:0,class:"col-12",status:"",permissions:m.model.permission_access,modelValue:m.model.permission_access,"onUpdate:modelValue":e[0]||(e[0]=s=>m.model.permission_access=s)},null,8,["permissions","modelValue"])):(0,t.kq)("",!0)])),_:1})])])])),_:1},8,["onRefresh","useModal","onBack","Meta"])])}a(9665);var m=a(8402),n=a(6149);const r={name:m.Z.name+"Detail",props:["modal","id","submitOnModal"],components:{PermissionsTable:n.Z},created(){this.$Handle.loadingStart(),this.modal&&!0===this.modal.show&&(this.useModal=!0),this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.param?this.findId(this.param):this.$Handle.loadingStop()},data(){return{Meta:m.Z,useModal:!1,model:m.Z.model,mainList:null,loading:!1,param:null,setup:{destroy:["id","permission_access","master_menu_id","master_menu","deleted_at","created_at","updated_at"],money:[],date:[]},showPermission:!1}},watch:{},methods:{findId(s){let e=m.Z.module+"/"+s;this.$api.get(e,((s,e,a,t)=>{200==e&&(this.mainList=this.$Help.transformList(s,this.setup),this.$Handle.loadingStop(),this.showPermission=!0,this.model=s)}))},back(){if(1!=this.useModal)return this.$router.push({name:m.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var u=a(1639);const h=(0,u.Z)(r,[["render",d]]),c=h}}]);