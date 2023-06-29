"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[273],{8402:(e,t,s)=>{s.d(t,{Z:()=>a});const a={name:"Roles",module:"roles",schema:"auth",module_name:"Management Account",formType:{show:!1,edit:!1,add:!1},model:{name:null,access_permission:[]},table:{columns:(e,t,s)=>[{name:"id",label:"Option",field:"id",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"},{name:"slug",label:"Slug",field:"slug",sortable:!0,align:"left"}]}}},6149:(e,t,s)=>{s.d(t,{Z:()=>g});var a=s(9835),l=s(6970);function i(e,t,s,i,o,n){const r=(0,a.up)("t-input"),d=(0,a.up)("q-th"),u=(0,a.up)("q-btn"),m=(0,a.up)("q-td"),c=(0,a.up)("q-table");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{col:"12",label:"search",modelValue:o.table.search,"onUpdate:modelValue":t[0]||(t[0]=e=>o.table.search=e)},null,8,["modelValue"]),(0,a.Wm)(c,{"virtual-scroll":"",class:"q-my-sm",rows:o.table.rows,columns:o.table.columns,"row-key":"id",selection:"multiple",selected:o.table.selected,"onUpdate:selected":[t[1]||(t[1]=e=>o.table.selected=e),t[3]||(t[3]=e=>n.update(o.table.selected))],pagination:o.table.pagination,"onUpdate:pagination":t[2]||(t[2]=e=>o.table.pagination=e),style:(0,l.j5)(e.$Static.table.height("300px")),dense:e.$Static.table.dense(),flat:e.$Static.table.flat(),color:e.$Static.table.color(),"rows-per-page-label":e.$Static.table.rowPerPageLabel(),"rows-per-page-options":e.$Static.table.rowPerPageOption(0),square:e.$Static.table.square(),bordered:e.$Static.table.bordered(),"binary-state-sort":"","visible-columns":o.table.visibleColumns,onRequest:n.getData,loading:e.loading,filter:o.table.search,separator:e.$Static.table.separator()},(0,a.Nv)({"header-cell-status":(0,a.w5)((()=>[""==s.status?((0,a.wg)(),(0,a.j4)(d,{key:0},{default:(0,a.w5)((()=>[(0,a.Uk)(" Status ")])),_:1})):(0,a.kq)("",!0)])),"body-cell-status":(0,a.w5)((e=>[""==s.status?((0,a.wg)(),(0,a.j4)(m,{key:0,class:"text-center"},{default:(0,a.w5)((()=>[e.row.status?((0,a.wg)(),(0,a.j4)(u,{key:0,icon:"check",size:"xs",color:"positive",round:"",rounded:""})):((0,a.wg)(),(0,a.j4)(u,{key:1,icon:"close",size:"xs",color:"negative",round:"",rounded:""}))])),_:2},1024)):(0,a.kq)("",!0)])),_:2},[""==s.status?{name:"body-selection",fn:(0,a.w5)((()=>[])),key:"0"}:void 0,""==s.status?{name:"header-selection",fn:(0,a.w5)((()=>[])),key:"1"}:void 0]),1032,["rows","columns","selected","pagination","style","dense","flat","color","rows-per-page-label","rows-per-page-options","square","bordered","visible-columns","onRequest","loading","filter","separator"])])}s(9665);const o={name:"Permissions",module:"permissions",schema:"auth",module_name:"Management Account",formType:{show:!0,edit:!0,add:!1},model:{name:null,username:null,email:null,address:null,password:null},table:{columns:(e,t,s)=>[{name:"status",label:"Status",field:"status",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"center"},{name:"slug",label:"Slug",field:"slug",sortable:!0,align:"left"}]}},n={components:{},props:["permissions","status"],data(){return{Meta:o,id:null,table:o.table,filter:{value:!1,query:null}}},created(){this.table=this.$Handle.structureTable(this.table.columns(this.$Help,this.$Lang,this.Static)),this.refresh()},watch:{},methods:{refresh(){this.getData()},getData(e){this.loading=!0,e&&(this.table.pagination=e.pagination);let{page:t,rowsPerPage:s,sortBy:a,descending:l}={...this.table.pagination},i=this.Meta.module+"?table=";i+="&like="+this.$Help.transformQuery(this.filter.query),i+=this.trash?"&trash=true":"",i+="&page="+t,i+="&limit=0",i+="&order="+this.$Handle.transformDesc(a,l),this.table.search&&(i+="&search="+this.table.search),this.$api.get(i,((e,t,s,a)=>{if(200==t){this.table.rows=e.data.filter((e=>this.trash&&this.table.search?null!==e.deleted_at:e)),this.loading=!1;for(let e=0;e<this.permissions.length;e++)for(let t=0;t<this.table.rows.length;t++)this.permissions[e].permission_id==this.table.rows[t].id&&(this.table.rows[t].status=!0,this.table.selected.push(this.table.rows[t]));this.update(this.table.selected)}}),(e=>{}))},update(e){this.$emit("update:modelValue",e)}}};var r=s(1639),d=s(1227),u=s(1682),m=s(7220),c=s(8879),h=s(9984),p=s.n(h);const b=(0,r.Z)(n,[["render",i]]),g=b;p()(n,"components",{QTable:d.Z,QTh:u.Z,QTd:m.Z,QBtn:c.Z})},9273:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(9835);const l={class:"col-12 row q-mt-md"},i={class:"col-md-6 col-12 q-mb-sm"},o={class:"col-md-6 col-12",style:{height:"100%"}};function n(e,t,s,n,r,d){const u=(0,a.up)("s-loading"),m=(0,a.up)("t-list"),c=(0,a.up)("s-form"),h=(0,a.up)("PermissionsTable"),p=(0,a.up)("s-drawer");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(u,{load:r.loading},null,8,["load"]),(0,a.Wm)(p,{onRefresh:e.refresh,useModal:r.useModal,form:"",detail:"",onBack:d.back,Meta:r.Meta},{default:(0,a.w5)((()=>[(0,a._)("div",l,[(0,a._)("div",i,[(0,a.Wm)(c,{class:"q-px-md py-sm",title:"Detail "+r.Meta.name},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{list:r.mainList},null,8,["list"])])),_:1},8,["title"])]),(0,a._)("div",o,[(0,a.Wm)(c,{class:"q-px-md",title:"Permissions Access"},{default:(0,a.w5)((()=>[r.showPermission?((0,a.wg)(),(0,a.j4)(h,{key:0,class:"col-12",status:"",permissions:r.model.permission_access,modelValue:r.model.permission_access,"onUpdate:modelValue":t[0]||(t[0]=e=>r.model.permission_access=e)},null,8,["permissions","modelValue"])):(0,a.kq)("",!0)])),_:1})])])])),_:1},8,["onRefresh","useModal","onBack","Meta"])])}s(9665);var r=s(8402),d=s(6149);const u={name:r.Z.name+"Detail",props:["modal","id","submitOnModal"],components:{PermissionsTable:d.Z},created(){this.$Handle.loadingStart(),this.modal&&!0===this.modal.show&&(this.useModal=!0),this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.param?this.findId(this.param):this.$Handle.loadingStop()},data(){return{Meta:r.Z,useModal:!1,model:r.Z.model,mainList:null,loading:!1,param:null,setup:{destroy:["id","permission_access","master_menu_id","master_menu","deleted_at","created_at","updated_at"],money:[],date:[]},showPermission:!1}},watch:{},methods:{findId(e){let t=r.Z.module+"/"+e;this.$api.get(t,((e,t,s,a)=>{200==t&&(this.mainList=this.$Help.transformList(e,this.setup),this.$Handle.loadingStop(),this.showPermission=!0,this.model=e)}))},back(){if(1!=this.useModal)return this.$router.push({name:r.Z.module,query:{...this.$route.query}});this.$emit("closeModal")}}};var m=s(1639);const c=(0,m.Z)(u,[["render",n]]),h=c}}]);