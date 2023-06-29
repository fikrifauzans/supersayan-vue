"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[714],{3289:(e,t,a)=>{a.d(t,{Z:()=>s});const s={name:"Master Menus",module:"master-menus",schema:"auth",module_name:"Management Account",formType:{show:!1,edit:!1,add:!1},model:{name:null,menu_details:[]},table:{columns:(e,t,a)=>[{name:"id",label:"Option",field:"id",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"}]}}},6714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=a(9835),l=a(6970);function r(e,t,a,r,i,o){const n=(0,s.up)("s-loading"),h=(0,s.up)("s-top-table"),d=(0,s.up)("s-filter-table"),u=(0,s.up)("q-td"),b=(0,s.up)("s-table-option"),c=(0,s.up)("q-table"),p=(0,s.up)("s-drawer");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(n,{load:i.loading},null,8,["load"]),(0,s.Wm)(p,{wrapCard:"",onRefresh:o.refresh,Meta:i.Meta,"onUpdate:modelValue":o.refresh,table:i.Meta.table},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{"virtual-scroll":"",class:"q-my-sm",rows:i.table.rows,columns:i.table.columns,"row-key":"id",selection:"multiple",selected:i.table.selected,"onUpdate:selected":t[5]||(t[5]=e=>i.table.selected=e),pagination:i.table.pagination,"onUpdate:pagination":t[6]||(t[6]=e=>i.table.pagination=e),style:(0,l.j5)(e.$Static.table.height()),dense:e.$Static.table.dense(),flat:e.$Static.table.flat(),color:e.$Static.table.color(),"rows-per-page-label":e.$Static.table.rowPerPageLabel(),"rows-per-page-options":e.$Static.table.rowPerPageOption(),square:e.$Static.table.square(),bordered:e.$Static.table.bordered(),"binary-state-sort":"","visible-columns":i.table.visibleColumns,onRequest:o.getData,loading:i.loading,filter:i.table.search,separator:e.$Static.table.separator()},{top:(0,s.w5)((()=>[(0,s.Wm)(h,{Meta:i.Meta,table:i.table,modelValue:i.table.search,"onUpdate:modelValue":t[0]||(t[0]=e=>i.table.search=e),onDelete:o.daleteData,trash:i.trash,onTrash:o.setTrash,onRestore:o.restoreData,onAdd:o.addData,onSeachReset:t[1]||(t[1]=e=>i.table.search=""),onUpdateVisibilityColumn:t[2]||(t[2]=e=>i.table.visibleColumns=e)},null,8,["Meta","table","modelValue","onDelete","trash","onTrash","onRestore","onAdd"])])),header:(0,s.w5)((()=>[(0,s.Wm)(d,{vcolumn:i.table.visibleColumns,columns:i.table.columns,onUpdateEvent:o.getData,modelValue:i.filter.query,"onUpdate:modelValue":t[3]||(t[3]=e=>i.filter.query=e),onSelectedAll:t[4]||(t[4]=e=>i.table.selected=e?i.table.rows:[])},null,8,["vcolumn","columns","onUpdateEvent","modelValue"])])),"body-cell-id":(0,s.w5)((e=>[1==i.trash?((0,s.wg)(),(0,s.j4)(u,{key:0})):((0,s.wg)(),(0,s.j4)(b,{key:1,onShow:t=>o.detail(e.key),onEdit:t=>o.edit(e.key),Meta:i.Meta},null,8,["onShow","onEdit","Meta"]))])),_:1},8,["rows","columns","selected","pagination","style","dense","flat","color","rows-per-page-label","rows-per-page-options","square","bordered","visible-columns","onRequest","loading","filter","separator"])])),_:1},8,["onRefresh","Meta","onUpdate:modelValue","table"])])}a(9665);var i=a(3289);const o={name:i.Z.name,data(){return{Meta:i.Z,table:i.Z.table,loading:!1,modal:!1,trash:!1,filter:{value:!1,query:{like:"",orderBy:""},visibleColumns:[]}}},created(){this.table=this.$Handle.structureTable(this.table.columns(this.$Help,this.$Lang,this.Static)),this.$route.query.trash&&(this.trash=JSON.parse(this.$route.query.trash)),this.$route.query.search&&(this.trash=JSON.parse(this.$route.query.search)),this.$route.query.page&&(this.table.pagination={...this.$route.query}),this.refresh()},methods:{refresh(){this.getData()},getData(e){this.loading=!0,e&&(this.table.pagination=e.pagination);let{page:t,rowsPerPage:a,sortBy:s,descending:l}={...this.table.pagination},r=this.Meta.module+"?table=";r+=this.trash?"&trash=true":"",r+="&like="+this.filter.query.like,r+="&order="+this.filter.query.orderBy,r+="&page="+t,r+="&limit="+a,this.table.search&&(r+="&search="+this.table.search),this.$api.get(r,((e,t,a,s)=>{200==t&&(this.table.rows=e.data.filter((e=>this.trash&&this.table.search?null!==e.deleted_at:e)),this.table.pagination.rowsNumber=this.table.search?this.table.rows.length:e.total,this.table.pagination.page=e.current_page,this.table.pagination.rowsPerPage=e.per_page,this.loading=!1)}),(e=>{})),this.$router.replace({query:{...this.table.pagination,search:this.table.search,trash:this.trash}})},async daleteData(){this.loading=!0,await this.table.selected.forEach((e=>{let t=this.Meta.module;t+=1==this.trash?"/force/":"/",t+=e.id,this.$api.delete(t,((e,t,a,s)=>{this.$Handle.successMessage(a),this.table.selected=[],this.refresh()}))}))},async restoreData(){this.loading=!0,await this.table.selected.forEach((e=>{let t=this.Meta.module;t+="/restore/",t+=e.id,this.$api.put(t,e,((e,t,a,s)=>{this.$Handle.successMessage(a),this.table.selected=[],this.refresh()}))}))},setTrash(){this.trash=JSON.parse(this.trash),this.trash=!this.trash,this.table.selected=[],this.table.search=null,this.table.pagination.page=1,this.table.pagination.rowsNumber=1,this.refresh()},detail(e){this.$router.push({params:{id:e},name:"view-"+this.Meta.module,query:{...this.$route.query}})},edit(e){this.$router.push({params:{id:e},name:"edit-"+this.Meta.module,query:{...this.$route.query}})},addData(){this.$router.push({name:"add-"+this.Meta.module,query:{...this.$route.query}})},setFilter(){this.filter.value=!0}}};var n=a(1639),h=a(1227),d=a(7220),u=a(9984),b=a.n(u);const c=(0,n.Z)(o,[["render",r]]),p=c;b()(o,"components",{QTable:h.Z,QTd:d.Z})}}]);