"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[210],{2210:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var l=a(9835);const t={class:"col-12 row"},i={class:"col-12 row q-mt-md"},o={class:"col-6"},d={class:"col-6",style:{height:"100%"}};function m(e,s,a,m,n,u){const r=(0,l.up)("s-loading"),h=(0,l.up)("t-input"),p=(0,l.up)("t-select-api"),c=(0,l.up)("s-form"),b=(0,l.up)("PermissionsTable"),M=(0,l.up)("s-drawer");return(0,l.wg)(),(0,l.iD)("div",t,[(0,l.Wm)(r,{load:n.loading},null,8,["load"]),(0,l.Wm)(M,{onRefresh:e.refresh,useModal:n.useModal,form:"",onSubmit:u.submit,onBack:u.back,Meta:n.Meta},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",o,[(0,l.Wm)(c,{title:"Roles",class:"q-px-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{col:"12",label:"name",required:"",modelValue:n.model.name,"onUpdate:modelValue":s[0]||(s[0]=e=>n.model.name=e)},null,8,["modelValue"]),(0,l.Wm)(h,{col:"12",label:"slug",required:"",modelValue:n.model.slug,"onUpdate:modelValue":s[1]||(s[1]=e=>n.model.slug=e)},null,8,["modelValue"]),(0,l.Wm)(p,{col:"12",api:"master-menus",modelValue:n.model.master_menu_id,"onUpdate:modelValue":s[2]||(s[2]=e=>n.model.master_menu_id=e),optionValue:"id",optionLabel:e=>e?e.name??n.model.master_menu.name:"",label:"Master Menu"},null,8,["modelValue","optionLabel"])])),_:1})]),(0,l._)("div",d,[(0,l.Wm)(c,{class:"q-px-md",title:"Permissions Access"},{default:(0,l.w5)((()=>[n.model.permission_access?((0,l.wg)(),(0,l.j4)(b,{key:0,class:"col-12",permissions:n.model.permission_access,modelValue:n.model.permission_access,"onUpdate:modelValue":s[3]||(s[3]=e=>n.model.permission_access=e)},null,8,["permissions","modelValue"])):(0,l.kq)("",!0)])),_:1})])])])),_:1},8,["onRefresh","useModal","onSubmit","onBack","Meta"])])}a(9665);var n=a(8402),u=a(6149);const r={name:n.Z.name+"Form",props:["modal","id","submitOnModal"],components:{PermissionsTable:u.Z},created(){this.$Handle.loadingStart(),this.Meta.model={},this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.modal&&!0===this.modal.add&&(this.useModal=!0),this.modal&&!0===this.modal.edit&&(this.useModal=!0),null!==this.param&&this.findId(this.param),this.$Handle.loadingStop()},data(){return{Meta:n.Z,useModal:!1,model:n.Z.model,loading:!1,edit:!1,param:null,showPermission:!1}},watch:{submitOnModal:function(e){e.isTrusted&&this.submit()}},methods:{findId(e){let s=n.Z.module+"/"+e;this.$api.get(s,((e,s,a,l)=>{200==s&&(this.model=e,this.showPermission=!0,this.$Handle.loadingStop())}))},async submit(){this.$Handle.loadingStart(),null!==this.param?await this.editData(this.param):await this.postData(this.model)},editData(e){let s=this.Meta.module+"/"+e;this.$api.put(s,this.model,((e,s,a,l)=>{200==s&&(this.$Handle.successMessage(a),this.$Handle.loadingStop(),this.back())}))},postData(e){let s=this.Meta.module;this.$api.post(s,e,((e,s,a,l)=>{200==s&&(this.$Handle.successMessage(a),this.$Handle.loadingStop(),this.back())}))},back(){if(1!=this.useModal)return this.$router.push({name:n.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var h=a(1639);const p=(0,h.Z)(r,[["render",m]]),c=p}}]);