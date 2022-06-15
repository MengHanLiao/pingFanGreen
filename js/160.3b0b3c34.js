"use strict";(self["webpackChunkping_fan_green"]=self["webpackChunkping_fan_green"]||[]).push([[160],{5888:function(e,t,o){o.d(t,{Z:function(){return s}});var n={methods:{successFire(e){this.$swal({icon:"success",title:e})},warningFire(e){this.$swal({icon:"warning",title:e})},failFire(e){this.$swal({icon:"error",title:e})}}};const l=n;var s=l},3770:function(e,t,o){o.d(t,{Z:function(){return f}});var n=o(3396),l=o(7139);const s={class:"modal fade",id:"deleteModal",tabindex:"-1","aria-labelledby":"deleteModal","aria-hidden":"true",ref:"modal"},a={class:"modal-dialog"},i={class:"modal-content"},d=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title"},"再次確認"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),u={class:"modal-body"},p={class:"modal-footer"},c=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function r(e,t,o,r,m,h){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",s,[(0,n._)("div",a,[(0,n._)("div",i,[d,(0,n._)("div",u,[(0,n._)("p",null,"確認刪除 "+(0,l.zw)(e.deleteItem.title)+" ？",1)]),(0,n._)("div",p,[c,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=(...e)=>h.executeDelete&&h.executeDelete(...e))},"確認")])])])],512)])}var m=o(8290),h={props:["delete-item"],mixins:[m.Z],methods:{executeDelete(){this.$emit("emit-delete")}}},b=o(89);const _=(0,b.Z)(h,[["render",r]]);var f=_},160:function(e,t,o){o.r(t),o.d(t,{default:function(){return G}});var n=o(3396),l=o(7139);const s={class:"container my-5"},a={class:"d-flex justify-content-between mb-3"},i=(0,n._)("h2",null,"優惠券列表",-1),d={class:"table mt-4"},u=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),p={key:0,class:"text-success"},c={key:1,class:"text-muted"},r={class:"btn-group"},m=["onClick"],h=["onClick"];function b(e,t,o,b,_,f){const C=(0,n.up)("CouponModal"),g=(0,n.up)("deleteConfirm");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n._)("div",a,[i,(0,n._)("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=e=>f.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,n._)("table",d,[u,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(_.coupons,((e,t)=>((0,n.wg)(),(0,n.iD)("tr",{key:t},[(0,n._)("td",null,(0,l.zw)(e.title),1),(0,n._)("td",null,(0,l.zw)(e.percent)+"%",1),(0,n._)("td",null,(0,l.zw)(f.dateChange(e.due_date)),1),(0,n._)("td",null,[1===e.is_enabled?((0,n.wg)(),(0,n.iD)("span",p,"啟用")):((0,n.wg)(),(0,n.iD)("span",c,"未啟用"))]),(0,n._)("td",null,[(0,n._)("div",r,[(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>f.openCouponModal(!1,e)}," 編輯 ",8,m),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>f.openDelCouponModal(e)}," 刪除 ",8,h)])])])))),128))])]),(0,n.Wm)(C,{coupon:_.tempCoupon,"is-new":_.isNew,ref:"couponModal",onUpdateCoupon:f.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),(0,n.Wm)(g,{ref:"deleteModal","delete-item":_.tempCoupon,onEmitDelete:f.deleteCoupon},null,8,["delete-item","onEmitDelete"])])}var _=o(9242);const f={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog",role:"document"},g={class:"modal-content"},w={class:"modal-header"},v={class:"modal-title",id:"exampleModalLabel"},y={key:0},M={key:1},k=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body"},D={class:"mb-3"},$=(0,n._)("label",{for:"title"},"標題",-1),Z={class:"mb-3"},F=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),N={class:"mb-3"},U=(0,n._)("label",{for:"due_date"},"到期日",-1),z={class:"mb-3"},V=(0,n._)("label",{for:"price"},"折扣百分比",-1),O={class:"mb-3"},S={class:"form-check"},j=(0,n._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),I={class:"modal-footer"},T=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function E(e,t,o,s,a,i){return(0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("div",C,[(0,n._)("div",g,[(0,n._)("div",w,[(0,n._)("h5",v,[o.isNew?((0,n.wg)(),(0,n.iD)("span",y,"新增優惠卷")):((0,n.wg)(),(0,n.iD)("span",M,"編輯優惠卷"))]),k]),(0,n._)("div",x,[(0,n._)("div",D,[$,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>a.tempCoupon.title=e),placeholder:"請輸入標題"},null,512),[[_.nr,a.tempCoupon.title]])]),(0,n._)("div",Z,[F,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=e=>a.tempCoupon.code=e),placeholder:"請輸入優惠碼"},null,512),[[_.nr,a.tempCoupon.code]])]),(0,n._)("div",N,[U,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=e=>a.due_date=e)},null,512),[[_.nr,a.due_date]])]),(0,n._)("div",z,[V,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[3]||(t[3]=e=>a.tempCoupon.percent=e),placeholder:"請輸入折扣百分比"},null,512),[[_.nr,a.tempCoupon.percent,void 0,{number:!0}]])]),(0,n._)("div",O,[(0,n._)("div",S,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=e=>a.tempCoupon.is_enabled=e),id:"is_enabled"},null,512),[[_.e8,a.tempCoupon.is_enabled]]),j])])]),(0,n._)("div",I,[T,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",a.tempCoupon))},(0,l.zw)(o.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}var L=o(8290),W={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[L.Z]},B=o(89);const H=(0,B.Z)(W,[["render",E]]);var K=H,P=o(3770),Y=o(5888),q={data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!1}},mixins:[Y.Z],components:{CouponModal:K,deleteConfirm:P.Z},props:{config:Object},methods:{openCouponModal(e,t){this.isNew=e,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3,is_enabled:0}:this.tempCoupon={...t},this.$refs.couponModal.openModal()},openDelCouponModal(e){this.tempCoupon={...e};const t=this.$refs.deleteModal;t.openModal()},getCoupons(){const e=this.$loading.show();this.$http.get("https://vue3-course-api.hexschool.io/v2/api/pingfangreen/admin/coupons",this.tempProduct).then((t=>{this.coupons=t.data.coupons,e.hide()})).catch((t=>{e.hide(),this.failFire(t.response.data.message)}))},updateCoupon(e){const t=this.$loading.show();let o="https://vue3-course-api.hexschool.io/v2/api/pingfangreen/admin/coupon",n="post",l=e;this.isNew||(o=`https://vue3-course-api.hexschool.io/v2/api/pingfangreen/admin/coupon/${this.tempCoupon.id}`,n="put",l=this.tempCoupon),this.$http[n](o,{data:l}).then((e=>{t.hide(),this.getCoupons(),this.$refs.couponModal.closeModal(),this.successFire(e.data.message)})).catch((e=>{t.hide(),this.failFire(e.response.data.message)}))},deleteCoupon(){const e=this.$loading.show();this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/pingfangreen/admin/coupon/${this.tempCoupon.id}`).then((t=>{e.hide();const o=this.$refs.deleteModal;o.closeModal(),this.getCoupons(),this.successFire(t.data.message)})).catch((t=>{e.hide(),this.failFire(t.response.data.message)}))},dateChange(e){const t=new Date(1e3*e).toISOString().split("T");return t.shift()}},created(){this.getCoupons()}};const A=(0,B.Z)(q,[["render",b]]);var G=A}}]);
//# sourceMappingURL=160.3b0b3c34.js.map