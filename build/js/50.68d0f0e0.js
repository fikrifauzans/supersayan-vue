"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[50],{1498:(e,l,a)=>{a.d(l,{Z:()=>t});const t={name:"Contacts",module:"contacts",schema:"master",module_name:"Contacts",formType:{show:!1,edit:!1,add:!1},model:{phone:null,city:null,province:null,adress:null,user_id:null},table:{columns:(e,l,a)=>[{name:"id",label:"Option",field:"id",sortable:!0,align:"left"},{name:"user-name",label:"User",field:l=>e.transformField(l,"user.name"),sortable:!0,align:"left"},{name:"user-email",label:"Email",field:l=>e.transformField(l,"user.email"),sortable:!0,align:"left"},{name:"user-username",label:"Username",field:l=>e.transformField(l,"user.email"),sortable:!0,align:"left"},{name:"phone",label:"Phone",field:"phone",sortable:!0,align:"left"},{name:"city",label:"City",field:"city",sortable:!0,align:"left"},{name:"province",label:"Province",field:"province",sortable:!0,align:"left"},{name:"adress",label:"Adress",field:"adress",sortable:!0,align:"left"}]}}},6050:(e,l,a)=>{a.r(l),a.d(l,{default:()=>m});var t=a(9835);function s(e,l,a,s,o,i){const d=(0,t.up)("s-loading"),n=(0,t.up)("t-select-api"),m=(0,t.up)("t-input"),u=(0,t.up)("s-form"),r=(0,t.up)("s-drawer");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(d,{load:o.loading},null,8,["load"]),(0,t.Wm)(r,{onRefresh:e.refresh,useModal:o.useModal,form:"",onSubmit:i.submit,onBack:i.back,Meta:o.Meta},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(u,{class:"q-px-md q-py-lg",title:"Form Contacts"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{api:"users",col:"4",label:"user",currency:"",modelValue:o.model.user_id,"onUpdate:modelValue":l[0]||(l[0]=e=>o.model.user_id=e),topLabel:"user_id",optionValue:"id"},null,8,["modelValue"]),(0,t.Wm)(n,{api:"cities",col:"4",label:"city",modelValue:o.model.city,"onUpdate:modelValue":l[1]||(l[1]=e=>o.model.city=e),topLabel:"city",search:"",optionValue:"name"},null,8,["modelValue"]),(0,t.Wm)(n,{api:"provinces",col:"4",label:"province",modelValue:o.model.province,"onUpdate:modelValue":l[2]||(l[2]=e=>o.model.province=e),topLabel:"province",search:"",optionValue:"name"},null,8,["modelValue"]),(0,t.Wm)(m,{col:"4",label:"phone",modelValue:o.model.phone,"onUpdate:modelValue":l[3]||(l[3]=e=>o.model.phone=e),topLabel:"phone"},null,8,["modelValue"]),(0,t.Wm)(m,{col:"4",label:"adress",type:"textarea",modelValue:o.model.adress,"onUpdate:modelValue":l[4]||(l[4]=e=>o.model.adress=e)},null,8,["modelValue"])])),_:1})])])),_:1},8,["onRefresh","useModal","onSubmit","onBack","Meta"])])}a(9665);var o=a(1498);const i={name:o.Z.name+"Form",props:["modal","id","submitOnModal"],created(){this.$Handle.loadingStart(),this.Meta.model={},this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.modal&&!0===this.modal.add&&(this.useModal=!0),this.modal&&!0===this.modal.edit&&(this.useModal=!0),null!==this.param&&this.findId(this.param),this.$Handle.loadingStop()},data(){return{Meta:o.Z,useModal:!1,model:o.Z.model,loading:!1,edit:!1,param:null}},watch:{submitOnModal:function(e){e.isTrusted&&this.submit()}},methods:{findId(e){let l=o.Z.module+"/"+e;this.$api.get(l,((e,l,a,t)=>{200==l&&(this.model=e,this.$Handle.loadingStop())}))},async submit(){this.$Handle.loadingStart(),null!==this.param?await this.editData(this.param):await this.postData(this.model)},editData(e){let l=this.Meta.module+"/"+e;this.$api.put(l,this.model,((e,l,a,t)=>{200==l&&(this.$Handle.successMessage(a),this.$Handle.loadingStop(),this.back())}))},postData(e){let l=this.Meta.module;this.$api.post(l,e,((e,l,a,t)=>{200==l&&(this.$Handle.successMessage(a),this.$Handle.loadingStop(),this.back())}))},back(){if(1!=this.useModal)return this.$router.push({name:o.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var d=a(1639);const n=(0,d.Z)(i,[["render",s]]),m=n}}]);