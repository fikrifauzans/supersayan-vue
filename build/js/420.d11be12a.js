"use strict";(globalThis["webpackChunksupersayan"]=globalThis["webpackChunksupersayan"]||[]).push([[420],{3289:(e,l,t)=>{t.d(l,{Z:()=>n});const n={name:"Master Menus",module:"master-menus",schema:"auth",module_name:"Management Account",formType:{show:!1,edit:!1,add:!1},model:{name:null,menu_details:[]},table:{columns:(e,l,t)=>[{name:"id",label:"Option",field:"id",sortable:!0,align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"}]}}},9626:(e,l,t)=>{t.r(l),t.d(l,{default:()=>F});var n=t(9835);const a={class:"q-px-md q-py-md"},s={class:"row"},i={class:"col-md-12 col-12"},o={class:"col-md-4 col-12 q-mb-md"},u={class:"q-gutter-xs"},d={key:0,class:"col-12 row"},m={class:"col-12 row"},r={class:"col-2 text-center"},c={class:"col-md-8 col-12"};function p(e,l,t,p,h,w){const k=(0,n.up)("s-loading"),_=(0,n.up)("t-input"),g=(0,n.up)("s-form"),y=(0,n.up)("q-btn"),f=(0,n.up)("t-select"),b=(0,n.up)("t-select-api"),v=(0,n.up)("MenuForm"),q=(0,n.up)("s-drawer");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(k,{load:h.loading},null,8,["load"]),(0,n.Wm)(q,{onRefresh:e.refresh,useModal:h.useModal,form:"",onSubmit:w.submit,onBack:w.back,Meta:h.Meta},{default:(0,n.w5)((()=>[(0,n._)("div",a,[(0,n._)("div",s,[(0,n._)("div",i,[(0,n.Wm)(g,{class:"q-px-sm q-pb-md",title:h.Meta.name},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{col:"12",label:"name",required:"",modelValue:h.model.name,"onUpdate:modelValue":l[0]||(l[0]=e=>h.model.name=e)},null,8,["modelValue"])])),_:1},8,["title"])]),(0,n._)("div",o,[(0,n.Wm)(g,{class:"q-px-sm",title:"Add Menus"},{right:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n.Wm)(y,{color:"parent"==h.menus.type?"orange-3":"orange",label:"parent",size:"sm",onClick:l[1]||(l[1]=e=>this.menus.type="parent")},null,8,["color"]),(0,n.Wm)(y,{color:"child"==h.menus.type?"orange-3":"orange",label:"child",size:"sm",onClick:l[2]||(l[2]=e=>this.menus.type="child")},null,8,["color"])])])),default:(0,n.w5)((()=>["parent"!=h.menus.type?((0,n.wg)(),(0,n.iD)("div",d,[(0,n.Wm)(f,{label:"Select Parent",modelValue:h.menus.sort,"onUpdate:modelValue":l[3]||(l[3]=e=>h.menus.sort=e),col:"10",option:h.model.menu_details,filterField:"menu.name",optionValue:e=>null==e||void 0==e.menu?"":e.sort,optionLabel:e=>null==e||void 0==e.menu?"":e.menu.name},null,8,["modelValue","option","filterField","optionValue","optionLabel"])])):(0,n.kq)("",!0),(0,n._)("div",m,[(0,n.Wm)(b,{label:"Menus",api:"menus",field:"name",modelValue:h.menus.value,"onUpdate:modelValue":l[4]||(l[4]=e=>h.menus.value=e),multiple:"",col:"10",full:""},null,8,["modelValue"]),(0,n._)("div",r,[(0,n.Wm)(y,{color:"primary",class:"q-mt-xs",rounded:"",round:"",icon:"add",size:"sm",noCaps:"",onClick:l[5]||(l[5]=e=>w.pushParent())})])])])),_:1})]),(0,n._)("div",c,[(0,n.Wm)(g,{class:"q-px-sm",title:"List Menus"},{default:(0,n.w5)((()=>[(0,n.Wm)(v,{menus:h.model.menu_details},null,8,["menus"])])),_:1})])])])])),_:1},8,["onRefresh","useModal","onSubmit","onBack","Meta"])])}t(9665);var h=t(3289),w=t(6970),k=t(1957);const _={class:"col-12"},g={class:"row col-12"},y={class:"column col-2 q-mt-xs q-pt-sm"},f={class:"q-gutter-xs text-center"},b={class:"col-10"},v={class:"q-gutter-xs text-center col-3"},q={class:"col-9"};function C(e,l,t,a,s,i){const o=(0,n.up)("q-btn"),u=(0,n.up)("q-icon"),d=(0,n.up)("q-item-section"),m=(0,n.up)("q-item"),r=(0,n.up)("q-expansion-item"),c=(0,n.up)("q-list"),p=(0,n.Q2)("ripple");return(0,n.wg)(),(0,n.iD)("div",_,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.menus,((e,h)=>(0,n.wy)(((0,n.wg)(),(0,n.j4)(c,{class:"text-primary",key:h},{default:(0,n.w5)((()=>[(0,n._)("div",g,[(0,n._)("div",y,[(0,n._)("div",f,[(0,n.Wm)(o,{size:"xs",round:"",rounded:"",flat:"",icon:"edit",color:s.utils.ParentBtnSwap[h]?"orange-3":"orange",onClick:e=>s.utils.ParentBtnSwap[h]=!s.utils.ParentBtnSwap[h]},null,8,["color","onClick"]),s.utils.ParentBtnSwap[h]?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(o,{key:0,flat:"",size:"xs",round:"",rounded:"",icon:"delete",color:(s.utils.ParentBtnSwap[h],"negative"),onClick:e=>t.menus.splice(h,1)},null,8,["color","onClick"])),s.utils.ParentBtnSwap[h]&&h>0?((0,n.wg)(),(0,n.j4)(o,{key:1,size:"xs",round:"",rounded:"",icon:"expand_less",color:"primary",onClick:e=>i.swapArray(t.menus,s.utils.ParentBtnSwap,h,h-1)},null,8,["onClick"])):(0,n.kq)("",!0),s.utils.ParentBtnSwap[h]&&t.menus.length!=h+1?((0,n.wg)(),(0,n.j4)(o,{key:2,size:"xs",round:"",rounded:"",icon:"keyboard_arrow_down",color:"primary",onClick:e=>i.swapArray(t.menus,s.utils.ParentBtnSwap,h,h+1)},null,8,["onClick"])):(0,n.kq)("",!0)])]),(0,n._)("div",b,[e.menu?((0,n.wg)(),(0,n.j4)(r,{key:0,icon:e.menu.icon,label:e.menu.name,color:"primary",class:"text-primary",modelValue:s.utils.colapse,"onUpdate:modelValue":l[0]||(l[0]=e=>s.utils.colapse=e),item:h,"hide-expand-icon":""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.childs,((l,t)=>((0,n.wg)(),(0,n.iD)("div",{class:"row col-12 items-center",key:t},[(0,n._)("div",v,[(0,n.Wm)(o,{flat:"",size:"xs",round:"",rounded:"",icon:"edit",color:s.utils.ChildBtnSwap[t]?"orange-3":"orange",onClick:e=>s.utils.ChildBtnSwap[t]=!s.utils.ChildBtnSwap[t]},null,8,["color","onClick"]),s.utils.ChildBtnSwap[t]?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(o,{key:0,flat:"",size:"xs",round:"",rounded:"",icon:"delete",color:(s.utils.ChildBtnSwap[t],"negative"),onClick:l=>e.childs.splice(t,1)},null,8,["color","onClick"])),s.utils.ChildBtnSwap[t]&&t>0?((0,n.wg)(),(0,n.j4)(o,{key:1,size:"xs",round:"",rounded:"",icon:"expand_less",color:"primary",onClick:l=>i.swapArray(e.childs,s.utils.ChildBtnSwap,t,t-1)},null,8,["onClick"])):(0,n.kq)("",!0),s.utils.ChildBtnSwap[t]&&e.childs.length!=t+1?((0,n.wg)(),(0,n.j4)(o,{key:2,size:"xs",round:"",rounded:"",icon:"keyboard_arrow_down",color:"primary",onClick:l=>i.swapArray(e.childs,s.utils.ChildBtnSwap,t,t+1)},null,8,["onClick"])):(0,n.kq)("",!0)]),(0,n._)("div",q,[l&&l.menu?(0,n.wy)(((0,n.wg)(),(0,n.j4)(m,{key:0,child:t,clickable:"",active:l.menu&&a.link===l.menu.path,"active-class":"my-menu-link"},{default:(0,n.w5)((()=>[l&&l.menu?((0,n.wg)(),(0,n.j4)(d,{key:0,avatar:"",class:"q-ml-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{name:l?l.menu.icon:""},null,8,["name"])])),_:2},1024)):(0,n.kq)("",!0),(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,w.zw)(l&&l.menu?l.menu.name:""),1)])),_:2},1024)])),_:2},1032,["child","active"])),[[p]]):(0,n.kq)("",!0)])])))),128))])),_:2},1032,["icon","label","modelValue","item"])):(0,n.kq)("",!0)])])])),_:2},1024)),[[k.F8,t.menus]]))),128))])}var M=t(499);const S={name:"MenuComponent",setup(){return{link:(0,M.iH)("inbox")}},props:["menus"],created(){},data(){return{expansion:[],utils:{ParentBtnSwap:[],ChildBtnSwap:[],colapse:!0}}},methods:{swapArray(e,l,t,n){[e[t],e[n]]=[e[n],e[t]],[l[t],l[n]]=[l[n],l[t]]}}};var x=t(1639),B=t(3246),$=t(8879),W=t(1123),Z=t(490),V=t(1233),P=t(2857),z=t(1136),H=t(9984),j=t.n(H);const D=(0,x.Z)(S,[["render",C]]),Q=D;j()(S,"components",{QList:B.Z,QBtn:$.Z,QExpansionItem:W.Z,QItem:Z.Z,QItemSection:V.Z,QIcon:P.Z}),j()(S,"directives",{Ripple:z.Z});const A={name:h.Z.name+"Form",props:["modal","id","submitOnModal"],components:{MenuForm:Q},async created(){this.$Handle.loadingStart(),this.$route.params.id&&(this.param=this.$route.params.id?this.$route.params.id:null),this.id&&(this.param=this.id?this.id:null),this.modal&&!0===this.modal.add&&(this.useModal=!0),this.modal&&!0===this.modal.edit&&(this.useModal=!0),null!==this.param?this.findId(this.param):this.$Handle.loadingStop(),this.filterMenus()},data(){return{Meta:h.Z,useModal:!1,model:h.Z.model,loading:!1,edit:!1,param:null,menus:{sort:null,value:[],type:"parent"},menusOption:[]}},watch:{submitOnModal:function(e){e.isTrusted&&this.submit()},"model.menu_details":{handler:function(e){e.forEach(((e,l)=>{e.sort=l+1,e.childs.forEach(((e,l)=>{e.sort=l+1}))}))},deep:!0}},methods:{async findId(e){let l=h.Z.module+"/"+e;await this.$api.get(l,((e,l,t,n)=>{200==l&&(this.model=e,this.$Handle.loadingStop())}))},async submit(){this.$Handle.loadingStart(),null!==this.param?await this.editData(this.param,this.model,this.Meta.module):await this.postData(this.model,this.Meta.module)},editData(e,l,t){let n=t+"/"+e;this.$api.put(n,l,((e,l,t,n)=>{200==l&&(this.$Handle.successMessage(t),this.$Handle.loadingStop(),this.Meta.model={},this.back())}))},postData(e,l){let t=l;this.$api.post(t,e,((e,l,t,n)=>{200==l&&(this.$Handle.successMessage(t),this.$Handle.loadingStop(),this.Meta.model={},this.back())}))},back(){if(1!=this.useModal)return this.$router.push({name:h.Z.module,query:{...this.$route.query}});this.$emit("closeModal")},pushParent(){if("child"==this.menus.type){let e=this.model.menu_details.filter((e=>e.sort==this.menus.sort));this.menus.value.forEach((l=>{e[0].childs.push({parent_id:this.menus.sort,menu_id:l.id,master_menu_id:this.model.id,sort:e[0].childs.length+1,deleted_at:null,created_at:null,updated_at:null,menu:l,childs:[]})}))}"parent"==this.menus.type&&this.menus.value.forEach((e=>{console.log(e),this.model.menu_details.push({parent_id:null,menu_id:e.id,master_menu_id:this.model.id,sort:this.model.menu_details.length+1,deleted_at:null,created_at:null,updated_at:null,menu:e,childs:[]})})),this.menus.value=[],this.menus.sort=null},filterMenus(){this.model.menu_details&&this.model.menu_details.forEach((e=>{this.menusOption.push(e.menu)}))}}},E=(0,x.Z)(A,[["render",p]]),F=E;j()(A,"components",{QBtn:$.Z})}}]);