"use strict";(self["webpackChunkping_fan_green"]=self["webpackChunkping_fan_green"]||[]).push([[455],{8557:function(e,t,s){function a(e){return{all:e=e||new Map,on:function(t,s){var a=e.get(t);a?a.push(s):e.set(t,[s])},off:function(t,s){var a=e.get(t);a&&(s?a.splice(a.indexOf(s)>>>0,1):e.set(t,[]))},emit:function(t,s){var a=e.get(t);a&&a.slice().map((function(e){e(s)})),(a=e.get("*"))&&a.slice().map((function(e){e(t,s)}))}}}s.d(t,{Z:function(){return r}});const l=a();var r=l},5888:function(e,t,s){s.d(t,{Z:function(){return r}});var a={methods:{successFire(e){this.$swal({icon:"success",title:e})},warningFire(e){this.$swal({icon:"warning",title:e})},failFire(e){this.$swal({icon:"error",title:e})}}};const l=a;var r=l},5455:function(e,t,s){s.r(t),s.d(t,{default:function(){return at}});var a=s(3396),l=s(7139);const r={class:"container pt-7 pt-md-8 pb-12"},o={class:"stepper ps-0 mb-7"},n={class:"stepper-name"},i=(0,a._)("h2",{class:"text-primary text-center mb-5 mb-md-7"},"完成訂購",-1),c=(0,a._)("p",{class:"text-center"},[(0,a.Uk)(" 感謝您本次的購買"),(0,a._)("br"),(0,a.Uk)(" 出貨時會寄送確認信件"),(0,a._)("br"),(0,a.Uk)(" 請您留意"),(0,a._)("br")],-1),d={class:"text-center mb-5 mb-md-7"},m=(0,a.Uk)(" 訂單編號："),u=(0,a._)("br",null,null,-1),p={class:"fs-5 text-green-500"},h={class:"d-flex justify-content-center"},g=["onClick"];function _(e,t,s,_,f,b){const x=(0,a.up)("StepOne"),w=(0,a.up)("StepTwo"),v=(0,a.up)("StepThree"),k=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("ul",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.steps,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{class:(0,l.C_)(["stepper-item",{active:f.currentStep===t,completed:f.currentStep>t}]),key:t+"step"},[(0,a._)("div",n,(0,l.zw)(e),1)],2)))),128))]),((0,a.wg)(),(0,a.j4)(a.Ob,null,[0===f.currentStep?((0,a.wg)(),(0,a.j4)(x,{key:0,onEmitNext:b.goNext},null,8,["onEmitNext"])):1===f.currentStep?((0,a.wg)(),(0,a.j4)(w,{key:1,onEmitOrderid:b.getOrderId,onEmitNext:b.goNext},null,8,["onEmitOrderid","onEmitNext"])):2===f.currentStep?((0,a.wg)(),(0,a.j4)(v,{key:2,"order-id":f.orderId,onEmitNext:b.goNext},null,8,["order-id","onEmitNext"])):3===f.currentStep?((0,a.wg)(),(0,a.iD)(a.HY,{key:3},[i,c,(0,a._)("p",d,[m,u,(0,a._)("span",p,(0,l.zw)(f.orderId),1)]),(0,a._)("div",h,[(0,a.Wm)(k,{to:"/",custom:""},{default:(0,a.w5)((({navigate:e})=>[(0,a._)("button",{onClick:e,role:"link",class:"btn btn-lg btn-green-500 text-white"},"返回首頁",8,g)])),_:1})])],64)):(0,a.kq)("",!0)],1024))])}var f=s(9242);const b={id:"step_CheckCart"},x=(0,a._)("h2",{class:"text-primary text-center mb-7 mb-md-7"},"購物車",-1),w={class:"table-responsive"},v={class:"table align-middle"},k=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"商品"),(0,a._)("th",{scope:"col"},"售價"),(0,a._)("th",{scope:"col",width:"100px"},"購買數量"),(0,a._)("th",{scope:"col",class:"text-center"},"總計"),(0,a._)("th",{scope:"col",class:"text-end pe-4"},"操作")])],-1),y={class:"d-flex align-items-center"},C=["src","alt"],F={class:"mb-0"},U={key:0,class:"text-muted fs-sm"},$={class:"mb-0"},z=["onUpdate:modelValue","onChange"],D=["value","selected"],N={class:"text-center"},V={class:"text-end"},S=["onClick"],q={class:"d-flex flex-column align-items-start flex-md-row justify-content-md-between align-items-md-center mb-3"},j={key:0},T={key:1,class:"mb-3"},O=(0,a._)("span",{class:"form-label me-3"},"折扣: ",-1),W=(0,a._)("p",{class:"fs-sm mb-0"},[(0,a.Uk)(" 新綠優惠碼: "),(0,a._)("span",{class:"user-select-all"},"ILoveGreen")],-1),I={class:"align-self-end text-end fs-5"},E={class:"mb-0"},Z={class:"mb-0"},M=(0,a.Uk)(" 折價後： "),H={class:"fs-4"},Y=(0,a.Uk)(" 元 "),B={key:0,class:"text-primary"},K={class:"text-end"},P=["disabled"],A=(0,a._)("span",{class:"d-block text-muted"},"最低出貨金額為 NT$ 600",-1),G={key:1,class:"text-center"},L=(0,a._)("p",{class:"fs-5 mb-5"},"目前尚未選購商品喔！",-1),J=(0,a.Uk)("前往商品頁");function Q(e,t,s,r,o,n){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",b,[x,0!==o.carts.length?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("div",w,[(0,a._)("table",v,[k,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,[(0,a._)("div",y,[(0,a._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"object-fit-cover table-img-sm d-none d-md-block me-3"},null,8,C),(0,a._)("p",F,(0,l.zw)(e.product.title),1)])]),(0,a._)("td",null,[e.product.origin_price!==e.product.price?((0,a.wg)(),(0,a.iD)("del",U,(0,l.zw)(e.product.origin_price)+" 元",1)):(0,a.kq)("",!0),(0,a._)("p",$,(0,l.zw)(e.product.price)+" 元",1)]),(0,a._)("td",null,[(0,a.wy)((0,a._)("select",{class:"form-select form-select-sm",name:"productNum","onUpdate:modelValue":t=>e.qty=t,onChange:t=>n.updateCart(e)},[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)(10,(t=>(0,a._)("option",{key:t+"dfafaew",value:t,selected:t===e.qty},(0,l.zw)(t),9,D))),64))],40,z),[[f.bM,e.qty]])]),(0,a._)("td",N,(0,l.zw)(e.final_total)+" 元",1),(0,a._)("td",V,[(0,a._)("button",{class:"btn btn-light text-primary",type:"button",onClick:t=>n.deleteCart(e.product.title,e.id)}," 刪除 ",8,S)])])))),128))])])]),(0,a._)("div",q,[o.isDiscount?((0,a.wg)(),(0,a.iD)("div",j,(0,l.zw)(o.coupoun),1)):((0,a.wg)(),(0,a.iD)("label",T,[O,(0,a.wy)((0,a._)("input",{class:"form-control-sm mb-2",type:"text",placeholder:"輸入 ILoveGreen 打九折","onUpdate:modelValue":t[0]||(t[0]=e=>o.coupoun=e),onChange:t[1]||(t[1]=(...e)=>n.useCoupon&&n.useCoupon(...e))},null,544),[[f.nr,o.coupoun]]),W])),(0,a._)("div",I,[(0,a._)("p",E,"總價： "+(0,l.zw)(o.total)+" 元",1),(0,a._)("p",Z,[M,(0,a._)("span",H,(0,l.zw)(o.finalTotal),1),Y]),o.finalTotal!==o.total?((0,a.wg)(),(0,a.iD)("span",B,"省下 "+(0,l.zw)(o.total-o.finalTotal)+" 元",1)):(0,a.kq)("",!0)])]),(0,a._)("div",K,[(0,a._)("button",{class:"btn btn-lg btn-green-500 text-white px-10",type:"button",disabled:!o.canCheck,onClick:t[2]||(t[2]=(...e)=>n.goNext&&n.goNext(...e))},(0,l.zw)(o.canCheck?"開始結帳":"未達低消"),9,P),A])],64)):((0,a.wg)(),(0,a.iD)("div",G,[L,(0,a.Wm)(i,{to:"/products",class:"btn btn-green-500 text-white"},{default:(0,a.w5)((()=>[J])),_:1})]))])}var R=s(8557),X=s(5888),ee={data(){return{carts:[],total:0,finalTotal:0,coupoun:"",canCheck:!1,isDiscount:!1}},mixins:[X.Z],methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/pingfangreen/cart").then((e=>{this.carts=e.data.data.carts,this.total=e.data.data.total,this.finalTotal=e.data.data.final_total})).catch((e=>{this.failFire(e.response.data.message)}))},updateCart(e){const t={data:{product_id:e.product_id,qty:e.qty}};this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/pingfangreen/cart/${e.id}`,t).then((e=>{this.getCart(),this.successFire(e.data.message)})).catch((e=>{this.failFire(e.response.data.message)}))},deleteCart(e,t){console.log(t),this.$swal({icon:"warning",title:`刪除商品： ${e} ？`,showCancelButton:!0,timer:3e4}).then((e=>{e.isConfirmed&&this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/pingfangreen/cart/${t}`).then((e=>{this.getCart(),this.successFire(e.data.message),R.Z.emit("change-cart")})).catch((e=>{this.failFire(e.response.data.message)}))}))},useCoupon(){const e={data:{code:this.coupoun}};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/pingfangreen/coupon",e).then((e=>{this.successFire(e.data.message),this.isDiscount=!0,this.coupoun=e.data.message,this.finalTotal=e.data.data.final_total})).catch((e=>{this.failFire(e.response.data.message),this.getCart()}))},reachAmount(){this.finalTotal>600?this.canCheck=!0:this.canCheck=!1},goNext(){this.$emit("emit-next")}},watch:{finalTotal(){this.reachAmount()}},created(){this.getCart()}},te=s(89);const se=(0,te.Z)(ee,[["render",Q]]);var ae=se;const le=(0,a._)("h2",{class:"text-primary text-center mb-7 mb-md-7"},"填寫購買資訊",-1),re={class:"row justify-content-center"},oe={class:"col-md-6 col-lg-4"},ne={class:"mb-3"},ie=(0,a._)("label",{for:"email",class:"form-label"},[(0,a.Uk)(" Email"),(0,a._)("span",{class:"text-sm text-primary ms-2"},"必填")],-1),ce={class:"mb-3"},de=(0,a._)("label",{for:"name",class:"form-label"},[(0,a.Uk)(" 收件人姓名"),(0,a._)("span",{class:"text-sm text-primary ms-2"},"必填")],-1),me={class:"mb-3"},ue=(0,a._)("label",{for:"tel",class:"form-label"},[(0,a.Uk)(" 收件人電話"),(0,a._)("span",{class:"text-sm text-primary ms-2"},"必填")],-1),pe={class:"mb-3"},he=(0,a._)("label",{for:"address",class:"form-label"},[(0,a.Uk)(" 收件人地址"),(0,a._)("span",{class:"text-sm text-primary ms-2"},"必填")],-1),ge={class:"mb-4"},_e=(0,a._)("label",{for:"payMethod",class:"form-label"},[(0,a.Uk)(" 付款方式"),(0,a._)("span",{class:"text-sm text-primary ms-2"},"必填")],-1),fe=(0,a._)("option",{value:"",disabled:"{disabled: true}"},"請選擇付款方式",-1),be=(0,a._)("option",{value:"銀行轉帳"},"銀行轉帳",-1),xe=(0,a._)("option",{value:"信用卡"},"信用卡",-1),we=(0,a._)("option",{value:"行動支付"},"行動支付",-1),ve={class:"mb-4"},ke=(0,a._)("label",{for:"message",class:"form-label"},"留言",-1),ye={class:"d-flex justify-content-end"},Ce=["disabled"];function Fe(e,t,s,r,o,n){const i=(0,a.up)("v-field"),c=(0,a.up)("error-message"),d=(0,a.up)("v-form");return(0,a.wg)(),(0,a.iD)("div",null,[le,(0,a._)("div",re,[(0,a._)("div",oe,[(0,a.Wm)(d,{ref:"form",onSubmit:n.submitOrder},{default:(0,a.w5)((({errors:e})=>[(0,a._)("div",ne,[ie,(0,a.Wm)(i,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control bg-whites",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:o.userForm.user.email,"onUpdate:modelValue":t[0]||(t[0]=e=>o.userForm.user.email=e)},null,8,["class","modelValue"]),(0,a.Wm)(c,{name:"email",class:"invalid-feedback"})]),(0,a._)("div",ce,[de,(0,a.Wm)(i,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.userForm.user.name,"onUpdate:modelValue":t[1]||(t[1]=e=>o.userForm.user.name=e)},null,8,["class","modelValue"]),(0,a.Wm)(c,{name:"姓名",class:"invalid-feedback"})]),(0,a._)("div",me,[ue,(0,a.Wm)(i,{id:"tel",name:"電話",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:n.isPhone,modelValue:o.userForm.user.tel,"onUpdate:modelValue":t[2]||(t[2]=e=>o.userForm.user.tel=e)},null,8,["class","rules","modelValue"]),(0,a.Wm)(c,{name:"電話",class:"invalid-feedback"})]),(0,a._)("div",pe,[he,(0,a.Wm)(i,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:o.userForm.user.address,"onUpdate:modelValue":t[3]||(t[3]=e=>o.userForm.user.address=e)},null,8,["class","modelValue"]),(0,a.Wm)(c,{name:"地址",class:"invalid-feedback"})]),(0,a._)("div",ge,[_e,(0,a.Wm)(i,{id:"payMethod",name:"付款方式",class:(0,l.C_)(["form-select",{"is-invalid":e["地址"],"border-green-500":""!==o.userForm.payMethod}]),placeholder:"請輸入地址",rules:"required",modelValue:o.userForm.payMethod,"onUpdate:modelValue":t[4]||(t[4]=e=>o.userForm.payMethod=e),as:"select"},{default:(0,a.w5)((()=>[fe,be,xe,we])),_:2},1032,["class","modelValue"]),(0,a.Wm)(c,{name:"付款方式",class:"invalid-feedback"})]),(0,a._)("div",ve,[ke,(0,a.wy)((0,a._)("textarea",{id:"message",class:(0,l.C_)(["form-control",{"border-green-500":""!==o.userForm.message}]),cols:"30",rows:"10","onUpdate:modelValue":t[5]||(t[5]=e=>o.userForm.message=e)},null,2),[[f.nr,o.userForm.message]])]),(0,a._)("div",ye,[(0,a._)("button",{type:"submit",class:"btn btn-green-500 text-white",disabled:Object.keys(e).length>0}," 訂單確認 ",8,Ce)])])),_:1},8,["onSubmit"])])])])}var Ue={data(){return{userForm:{user:{name:"",email:"",tel:"",address:""},message:"",payMethod:""}}},mixins:[X.Z],methods:{isPhone(e){const t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"},submitOrder(){this.$http.post("https://vue3-course-api.hexschool.io/v2/api/pingfangreen/order",{data:this.userForm}).then((e=>{this.successFire(e.data.message),this.$emit("emit-orderid",e.data.orderId),this.goNext()})).catch((e=>{this.failFire(e.response.data.message)}))},goNext(){this.$emit("emit-next")}}};const $e=(0,te.Z)(Ue,[["render",Fe]]);var ze=$e,De=s(2079);const Ne=(0,a._)("h2",{class:"text-primary text-primary text-center mb-7 mb-md-7"},"確認訂單",-1),Ve=(0,a._)("h4",{class:"text-center"},"購買人資料",-1),Se={class:"d-flex align-items-center mb-7"},qe=(0,a._)("div",{class:"d-none d-md-block w-50 me-3"},[(0,a._)("img",{class:"object-fit-cover img-h-md",src:De,alt:"circlePlants"})],-1),je={class:"w-50 list-style-none ps-0"},Te={key:0},Oe=(0,a.Uk)(" 留言： "),We={class:"ps-2"},Ie=(0,a._)("h4",{class:"text-center"},"訂單內容",-1),Ee={class:"table-responsive"},Ze={class:"table align-middle"},Me=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col"},"商品"),(0,a._)("th",{scope:"col"},"售價"),(0,a._)("th",{scope:"col",width:"100px"},"購買數量"),(0,a._)("th",{scope:"col",class:"text-center"},"總計")])],-1),He={class:"d-flex align-items-center"},Ye=["src","alt"],Be={class:"mb-0"},Ke={key:0,class:"text-muted fs-sm"},Pe={class:"mb-0"},Ae={class:"text-center"},Ge={class:"fs-4 text-primary text-end"},Le=(0,a._)("span",{class:"fs-6 text-muted"},"訂單金額： ",-1),Je={class:"d-flex justify-content-end"};function Qe(e,t,s,r,o,n){return(0,a.wg)(),(0,a.iD)("div",null,[Ne,Ve,(0,a._)("div",Se,[qe,(0,a._)("ul",je,[(0,a._)("li",null,"姓名： "+(0,l.zw)(o.userForm.name),1),(0,a._)("li",null,"信箱： "+(0,l.zw)(o.userForm.email),1),(0,a._)("li",null,"電話： "+(0,l.zw)(o.userForm.tel),1),(0,a._)("li",null,"地址： "+(0,l.zw)(o.userForm.address),1),""!==o.message?((0,a.wg)(),(0,a.iD)("li",Te,[Oe,(0,a._)("p",We,(0,l.zw)(o.userForm.message),1)])):(0,a.kq)("",!0)])]),Ie,(0,a._)("div",Ee,[(0,a._)("table",Ze,[Me,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.carts,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,[(0,a._)("div",He,[(0,a._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"object-fit-cover table-img-sm d-none d-md-block me-3"},null,8,Ye),(0,a._)("p",Be,(0,l.zw)(e.product.title),1)])]),(0,a._)("td",null,[e.product.origin_price!==e.product.price?((0,a.wg)(),(0,a.iD)("del",Ke,(0,l.zw)(e.product.origin_price)+" 元",1)):(0,a.kq)("",!0),(0,a._)("p",Pe,(0,l.zw)(e.product.price)+" 元",1)]),(0,a._)("td",null,(0,l.zw)(e.qty),1),(0,a._)("td",Ae,(0,l.zw)(e.final_total)+" 元",1)])))),128))])]),(0,a._)("p",Ge,[Le,(0,a.Uk)("NT$ "+(0,l.zw)(o.total),1)])]),(0,a._)("div",Je,[(0,a._)("button",{class:"btn btn-lg btn-green-500 text-white",type:"button",onClick:t[0]||(t[0]=(...e)=>n.checkout&&n.checkout(...e))}," 確認付款 ")])])}var Re={data(){return{carts:[],total:0,userForm:{},message:""}},props:["orderId"],methods:{getOrder(){this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/pingfangreen/order/${this.orderId}`).then((e=>{this.carts=e.data.order.products,this.total=e.data.order.total,this.userForm=e.data.order.user,this.message=e.data.order.message||""})).catch((e=>{this.$swal({icon:"error",title:e.response.data.message,showCloseButton:!0})}))},checkout(){this.$http.post(`https://vue3-course-api.hexschool.io/v2/api/pingfangreen/pay/${this.orderId}`).then((e=>{this.$swal({icon:"success",title:e.data.message,showCloseButton:!0}),this.goNext()})).catch((e=>{this.$swal({icon:"error",title:e.response.data.message,showCloseButton:!0})}))},goNext(){this.$emit("emit-next")}},mounted(){this.getOrder()}};const Xe=(0,te.Z)(Re,[["render",Qe]]);var et=Xe,tt={data(){return{steps:["確認購買商品","填寫購買資訊","確認訂單與付款","完成購買"],currentStep:0,orderId:"",canChange:!0}},components:{StepOne:ae,StepTwo:ze,StepThree:et},methods:{goNext(){this.currentStep+=1},getOrderId(e){this.orderId=e}},created(){this.currentStep=0}};const st=(0,te.Z)(tt,[["render",_]]);var at=st},2079:function(e,t,s){e.exports=s.p+"img/lastStep.307f8df5.jpg"}}]);
//# sourceMappingURL=455.6d461957.js.map