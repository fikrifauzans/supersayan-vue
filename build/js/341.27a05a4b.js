"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[341],{8870:(e,a,l)=>{l.d(a,{Z:()=>t});const t={name:"Files",module:"files",schema:"auth",module_name:"Management Account",formType:{show:!1,edit:!1,add:!1},model:{name:null,directory:null,path:null,description:null,reference_id:null,reference_module:null,status_file:null},table:{columns:(e,a,l)=>[{name:"id",label:"Option",field:"id",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"},{name:"path",label:"Path",field:"path",sortable:!0,align:"left"},{name:"description",label:"Description",field:"description",sortable:!0,align:"left"},{name:"directory",label:"directory",field:"directory",sortable:!0,align:"left"},{name:"reference_id",label:"Reference id",field:"reference_id",sortable:!0,align:"left"},{name:"reference_table",label:"Reference Table",field:"reference_table",sortable:!0,align:"left"},{name:"description",label:"Description",field:"description",sortable:!0,align:"left"}]}}},1341:(e,a,l)=>{l.r(a),l.d(a,{default:()=>o});var t=l(9835);function i(e,a,l,i,s,n){const d=(0,t.up)("s-loading"),r=(0,t.up)("t-list"),o=(0,t.up)("s-form"),u=(0,t.up)("s-drawer");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(d,{load:s.loading},null,8,["load"]),(0,t.Wm)(u,{onRefresh:e.refresh,useModal:s.useModal,form:"",detail:"",Meta:s.Meta,onBack:n.back},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{class:"q-px-md py-sm q-mt-lg",title:"File"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{list:s.mainList},null,8,["list"])])),_:1})])),_:1},8,["onRefresh","useModal","Meta","onBack"])],64)}l(9665);var s=l(8870);const n={name:s.Z.name+"Detail",props:["modal","id","submitOnModal"],created(){this.$Handle.loadingStart(),this.modal&&!0===this.modal.show&&(this.useModal=!0),this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.param?this.findId(this.param):this.$Handle.loadingStop()},data(){return{Meta:s.Z,useModal:!1,model:s.Z.model,mainList:null,loading:!1,param:null,setup:{destroy:["id","deleted_at","created_at","updated_at"],money:[],date:[]}}},watch:{},methods:{findId(e){let a=s.Z.module+"/"+e;this.$api.get(a,((e,a,l,t)=>{200==a&&(this.mainList=this.$Help.transformList(e,this.setup),this.$Handle.loadingStop())}))},back(){if(1!=this.useModal)return this.$router.push({name:s.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var d=l(1639);const r=(0,d.Z)(n,[["render",i]]),o=r}}]);