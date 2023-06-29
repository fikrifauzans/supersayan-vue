"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[520],{5442:(e,l,a)=>{a.d(l,{Z:()=>t});const t={name:"Users",module:"users",schema:"auth",module_name:"Management Account",formType:{show:!1,edit:!1,add:!1},model:{name:null,username:null,email:null,address:null,password:null},table:{columns:(e,l,a)=>[{name:"id",label:"Option",field:"id",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"},{name:"email",label:"Email",field:"email",sortable:!0,align:"left"},{name:"username",label:"Username",field:"username",sortable:!0,align:"left"},{name:"role-name",label:"Role",field:l=>e.transformField(l,"role.name"),sortable:!0,align:"left"},{name:"role-master_menu_id",label:"Master Menu",field:l=>e.transformField(l,"role.master_menu.name"),sortable:!0,align:"left"}]}}},4520:(e,l,a)=>{a.r(l),a.d(l,{default:()=>n});var t=a(9835);function o(e,l,a,o,s,d){const i=(0,t.up)("s-loading"),m=(0,t.up)("t-input"),n=(0,t.up)("t-select-api"),u=(0,t.up)("s-form"),r=(0,t.up)("s-drawer");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(i,{load:s.loading},null,8,["load"]),(0,t.Wm)(r,{onRefresh:e.refresh,useModal:s.useModal,form:"",onSubmit:d.submit,onBack:d.back,Meta:s.Meta},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(u,{class:"q-px-md q-py-lg",title:"Data User"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{col:"4",label:"name","r-icon":"person",modelValue:s.model.name,"onUpdate:modelValue":l[0]||(l[0]=e=>s.model.name=e)},null,8,["modelValue"]),(0,t.Wm)(m,{col:"4",label:"username","r-icon":"person",modelValue:s.model.username,"onUpdate:modelValue":l[1]||(l[1]=e=>s.model.username=e)},null,8,["modelValue"]),(0,t.Wm)(m,{col:"4",label:"email","r-icon":"mail",modelValue:s.model.email,"onUpdate:modelValue":l[2]||(l[2]=e=>s.model.email=e)},null,8,["modelValue"]),(0,t.Wm)(m,{col:"4",type:"password",label:"password","r-icon":"lock",modelValue:s.model.password,"onUpdate:modelValue":l[3]||(l[3]=e=>s.model.password=e)},null,8,["modelValue"]),(0,t.Wm)(n,{col:"4",api:"roles",modelValue:s.model.role_id,"onUpdate:modelValue":l[4]||(l[4]=e=>s.model.role_id=e),optionValue:"id",optionLabel:"name",label:"role"},null,8,["modelValue"])])),_:1})])])),_:1},8,["onRefresh","useModal","onSubmit","onBack","Meta"])])}a(9665);var s=a(5442);const d={name:s.Z.name+"Form",props:["modal","id","submitOnModal"],created(){this.$Handle.loadingStart(),this.Meta.model={},this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.modal&&!0===this.modal.add&&(this.useModal=!0),this.modal&&!0===this.modal.edit&&(this.useModal=!0),null!==this.param&&this.findId(this.param),this.$Handle.loadingStop()},data(){return{Meta:s.Z,useModal:!1,model:s.Z.model,loading:!1,edit:!1,param:null}},watch:{submitOnModal:function(e){e.isTrusted&&this.submit()}},methods:{findId(e){let l=s.Z.module+"/"+e;this.$api.get(l,((e,l,a,t)=>{200==l&&(this.model=e,this.$Handle.loadingStop())}))},async submit(){this.$Handle.loadingStart(),null!==this.param?await this.editData(this.param):await this.postData(this.model)},editData(e){let l=this.Meta.module+"/"+e;this.$api.put(l,this.model,((e,l,a,t)=>{200==l&&(this.$Handle.successMessage(a),this.$Handle.loadingStop(),this.back())}))},postData(e){let l=this.Meta.module;this.$api.post(l,e,((e,l,a,t)=>{200==l&&(this.$Handle.successMessage(a),this.$Handle.loadingStop(),this.back())}))},back(){if(1!=this.useModal)return this.$router.push({name:s.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var i=a(1639);const m=(0,i.Z)(d,[["render",o]]),n=m}}]);