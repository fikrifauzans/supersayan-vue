"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[706],{706:(e,l,a)=>{a.r(l),a.d(l,{default:()=>u});var o=a(9835);function d(e,l,a,d,t,s){const i=(0,o.up)("s-loading"),m=(0,o.up)("t-input"),u=(0,o.up)("t-select-api"),n=(0,o.up)("s-form"),r=(0,o.up)("s-drawer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i,{load:t.loading},null,8,["load"]),(0,o.Wm)(r,{onRefresh:e.refresh,useModal:t.useModal,form:"",onSubmit:s.submit,onBack:s.back,Meta:t.Meta},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(n,{class:"q-px-md q-py-lg",title:"Data User"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{col:"4",label:"name","r-icon":"person",modelValue:t.model.name,"onUpdate:modelValue":l[0]||(l[0]=e=>t.model.name=e)},null,8,["modelValue"]),(0,o.Wm)(m,{col:"4",label:"username","r-icon":"person",modelValue:t.model.username,"onUpdate:modelValue":l[1]||(l[1]=e=>t.model.username=e)},null,8,["modelValue"]),(0,o.Wm)(m,{col:"4",label:"email","r-icon":"mail",modelValue:t.model.email,"onUpdate:modelValue":l[2]||(l[2]=e=>t.model.email=e)},null,8,["modelValue"]),(0,o.Wm)(m,{col:"4",type:"password",label:"password","r-icon":"lock",modelValue:t.model.password,"onUpdate:modelValue":l[3]||(l[3]=e=>t.model.password=e)},null,8,["modelValue"]),(0,o.Wm)(m,{col:"4",label:"address","r-icon":"home",modelValue:t.model.address,"onUpdate:modelValue":l[4]||(l[4]=e=>t.model.address=e)},null,8,["modelValue"]),(0,o.Wm)(m,{col:"4",label:"phone",modelValue:t.model.phone,"onUpdate:modelValue":l[5]||(l[5]=e=>t.model.phone=e)},null,8,["modelValue"]),(0,o.Wm)(u,{col:"4",api:"roles",modelValue:t.model.role_id,"onUpdate:modelValue":l[6]||(l[6]=e=>t.model.role_id=e),optionValue:"id",optionLabel:"name",label:"role"},null,8,["modelValue"])])),_:1})])])),_:1},8,["onRefresh","useModal","onSubmit","onBack","Meta"])])}a(9665);var t=a(5442);const s={name:t.Z.name+"Form",props:["modal","id","submitOnModal"],created(){this.$Handle.loadingStart(),this.Meta.model={},this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.modal&&!0===this.modal.add&&(this.useModal=!0),this.modal&&!0===this.modal.edit&&(this.useModal=!0),null!==this.param&&this.findId(this.param),this.$Handle.loadingStop()},data(){return{Meta:t.Z,useModal:!1,model:t.Z.model,loading:!1,edit:!1,param:null}},watch:{submitOnModal:function(e){e.isTrusted&&this.submit()}},methods:{findId(e){let l=t.Z.module+"/"+e;this.$api.get(l,((e,l,a,o)=>{200==l&&(this.model=e,this.$Handle.loadingStop())}))},async submit(){this.$Handle.loadingStart(),null!==this.param?await this.editData(this.param):await this.postData(this.model)},editData(e){let l=this.Meta.module+"/"+e;this.$api.put(l,this.model,((e,l,a,o)=>{200==l&&(this.$Handle.successMessage(a),this.$Handle.loadingStop(),this.back())}))},postData(e){let l=this.Meta.module;this.$api.post(l,e,((e,l,a,o)=>{200==l&&(this.$Handle.successMessage(a),this.$Handle.loadingStop(),this.back())}))},back(){if(1!=this.useModal)return this.$router.push({name:t.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var i=a(1639);const m=(0,i.Z)(s,[["render",d]]),u=m}}]);