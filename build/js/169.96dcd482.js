"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[169],{3169:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});var t=l(9835);function d(e,a,l,d,o,s){const i=(0,t.up)("s-loading"),m=(0,t.up)("t-input"),n=(0,t.up)("s-form"),u=(0,t.up)("s-drawer");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(i,{load:o.loading},null,8,["load"]),(0,t.Wm)(u,{onRefresh:e.refresh,useModal:o.useModal,form:"",onSubmit:s.submit,onBack:s.back,Meta:o.Meta},{default:(0,t.w5)((()=>[(0,t._)("div",null,[(0,t.Wm)(n,{class:"q-px-md q-py-lg",title:"Form Customers"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{col:"4",label:"code",modelValue:o.model.code,"onUpdate:modelValue":a[0]||(a[0]=e=>o.model.code=e),topLabel:"code",readonly:""},null,8,["modelValue"]),(0,t.Wm)(m,{col:"4",label:"name",modelValue:o.model.name,"onUpdate:modelValue":a[1]||(a[1]=e=>o.model.name=e),topLabel:"name",onUpdateEvent:a[2]||(a[2]=()=>o.model.code=`CUST-${e.$Help.randomString(5)}`)},null,8,["modelValue"]),(0,t.Wm)(m,{col:"4",label:"phone",modelValue:o.model.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>o.model.phone=e),topLabel:"phone"},null,8,["modelValue"]),(0,t.Wm)(m,{col:"4",label:"address",modelValue:o.model.address,"onUpdate:modelValue":a[4]||(a[4]=e=>o.model.address=e),topLabel:"address",type:"textarea"},null,8,["modelValue"])])),_:1})])])),_:1},8,["onRefresh","useModal","onSubmit","onBack","Meta"])])}l(9665);var o=l(1176);const s={name:o.Z.name+"Form",props:["modal","id","submitOnModal"],created(){this.$Handle.loadingStart(),this.Meta.model={},this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.modal&&!0===this.modal.add&&(this.useModal=!0),this.modal&&!0===this.modal.edit&&(this.useModal=!0),null!==this.param&&this.findId(this.param),this.$Handle.loadingStop()},data(){return{Meta:o.Z,useModal:!1,model:o.Z.model,loading:!1,edit:!1,param:null}},watch:{submitOnModal:function(e){e.isTrusted&&this.submit()}},methods:{findId(e){let a=o.Z.module+"/"+e;this.$api.get(a,((e,a,l,t)=>{200==a&&(this.model=e,this.$Handle.loadingStop())}))},async submit(){this.$Handle.loadingStart(),null!==this.param?await this.editData(this.param):await this.postData(this.model)},editData(e){let a=this.Meta.module+"/"+e;this.$api.put(a,this.model,((e,a,l,t)=>{200==a&&(this.$Handle.successMessage(l),this.$Handle.loadingStop(),this.back())}))},postData(e){let a=this.Meta.module;this.$api.post(a,e,((e,a,l,t)=>{200==a&&(this.$Handle.successMessage(l),this.$Handle.loadingStop(),this.back())}))},back(){if(1!=this.useModal)return this.$router.push({name:o.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var i=l(1639);const m=(0,i.Z)(s,[["render",d]]),n=m}}]);