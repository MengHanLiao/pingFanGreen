"use strict";(self["webpackChunkping_fan_green"]=self["webpackChunkping_fan_green"]||[]).push([[951],{3843:function(e,s,a){a.d(s,{Z:function(){return M}});var t=a(3396),o=a(7139);const l={class:"modal fade",id:"contactModal",tabindex:"-1",ref:"modal","aria-labelledby":"contactModalLabel","aria-hidden":"true"},m={class:"modal-dialog modal-fullscreen-sm-down"},c={class:"modal-content"},r=(0,t._)("div",{class:"modal-header"},[(0,t._)("h5",{class:"modal-title",id:"contactModalLabel"},"聯絡我們"),(0,t._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),i={class:"modal-body"},n={class:"mb-3"},d=(0,t._)("label",{for:"customName",class:"form-label"},[(0,t.Uk)(" 姓名"),(0,t._)("span",{class:"text-sm text-primary ms-2"},"必填")],-1),u={class:"mb-3"},b=(0,t._)("label",{for:"customEmail",class:"form-label"},[(0,t.Uk)(" 聯絡信箱"),(0,t._)("span",{class:"text-sm text-primary ms-2"},"必填")],-1),p={class:"mb-4"},g=(0,t._)("label",{for:"customMessage",class:"form-label"},[(0,t.Uk)(" 留言"),(0,t._)("span",{class:"text-sm text-primary ms-2"},"必填")],-1),f=["disabled"];function v(e,s,a,v,h,_){const x=(0,t.up)("v-field"),k=(0,t.up)("error-message"),M=(0,t.up)("v-form");return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",m,[(0,t._)("div",c,[r,(0,t._)("div",i,[(0,t.Wm)(M,{ref:"form",onSubmit:_.submitMessage},{default:(0,t.w5)((({errors:e})=>[(0,t._)("div",n,[d,(0,t.Wm)(x,{id:"customName",name:"customName",type:"text",placeholder:"請輸入姓名",class:(0,o.C_)(["form-control",{"is-invalid":e["customName"]}]),rules:"required",modelValue:h.customForm.name,"onUpdate:modelValue":s[0]||(s[0]=e=>h.customForm.name=e)},null,8,["class","modelValue"]),(0,t.Wm)(k,{name:"customName",class:"invalid-feedback"})]),(0,t._)("div",u,[b,(0,t.Wm)(x,{id:"customEmail",name:"customEmail",type:"email",class:(0,o.C_)(["form-control",{"is-invalid":e["customEmail"]}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:h.customForm.email,"onUpdate:modelValue":s[1]||(s[1]=e=>h.customForm.email=e)},null,8,["class","modelValue"]),(0,t.Wm)(k,{name:"customEmail",class:"invalid-feedback"})]),(0,t._)("div",p,[g,(0,t.Wm)(x,{id:"customMessage",name:"customMessage",modelValue:h.customForm.message,"onUpdate:modelValue":s[2]||(s[2]=e=>h.customForm.message=e),class:(0,o.C_)(["form-control",{"is-invalid":e["customMessage"],"border-green-500":""!==h.customForm.message}]),cols:"30",rows:"5",as:"textarea",rules:"required"},null,8,["modelValue","class"]),(0,t.Wm)(k,{name:"customMessage",class:"invalid-feedback"})]),(0,t._)("button",{type:"submit",class:"w-100 btn btn-green-500 text-white",disabled:Object.keys(e).length>0}," 送出 ",8,f)])),_:1},8,["onSubmit"])])])])],512)}var h=a(8290),_={data(){return{customForm:{name:"",email:"",message:""}}},mixins:[h.Z],methods:{submitMessage(){this.$http.post("https://script.google.com/macros/s/AKfycbx5g4naRlVkpyAJrGQWTWliuTb9-HYUJuAiv4BaEMv3IxngeAv7pQsUD7oZvQ_cLRknKg/exec",{name:this.customForm.name,email:this.customForm.email,message:this.customForm.message}),this.closeModal()}}},x=a(89);const k=(0,x.Z)(_,[["render",v]]);var M=k},5951:function(e,s,a){a.r(s),a.d(s,{default:function(){return v}});var t=a(3396),o=a(9857),l=a(1701),m=a(2649),c=a(3889);const r={class:"container pt-7 pt-md-8 pb-9 pb-md-12"},i=(0,t.uE)('<h2 class="text-center mb-7 mb-md-7">客製化產品</h2><img class="object-fit-cover img-h-lg mb-7" src="'+o+'" alt="banner"><div class="text-center mb-7"><h3 class="text-primary fs-4 mb-5">客製化多肉盆栽實現你的願望</h3><p>普通的多肉盆栽，送禮顯得不夠用心？<br> 單一種的多肉植栽太過單調？<br> 好想要送出獨一無二的禮物啊！</p><p>這些願望，我們都知道，<br> 平方綠通通願意為您實現。</p></div><h3 class="text-primary text-center fs-4 mb-5">給您參考，我們的作品</h3><div class="row gy-3 gy-md-0 mb-7"><div class="col-md-4"><img class="object-fit-cover img-h-lg" src="'+l+'" alt="work1"></div><div class="col-md-4"><img class="object-fit-cover img-h-lg" src="'+m+'" alt="work2"></div><div class="col-md-4"><img class="object-fit-cover img-h-lg" src="'+c+'" alt="work3"></div></div><div class="text-center mb-7"><h3 class="text-primary fs-4 mb-5">離您的理想更近一點</h3><p>無論是多肉的品種組合或是盆栽選擇，<br> 都歡迎與我們討論。<br></p><p>提醒您，好的作品需要一定的時間完成，<br> 平方綠想要離您的理想更近一點，<br> 心動不如馬上行動。</p></div>',6),n={class:"row justify-content-center"},d={class:"col-4"};function u(e,s,a,o,l,m){const c=(0,t.up)("ContactModal");return(0,t.wg)(),(0,t.iD)("div",r,[i,(0,t._)("div",n,[(0,t._)("div",d,[(0,t._)("button",{class:"w-100 btn btn-green-500 text-white",type:"button",onClick:s[0]||(s[0]=(...e)=>m.openContactModal&&m.openContactModal(...e))},"聯絡我們")])]),(0,t.Wm)(c,{ref:"contactModal"},null,512)])}var b=a(3843),p={components:{ContactModal:b.Z},methods:{openContactModal(){this.$refs.contactModal.openModal()}}},g=a(89);const f=(0,g.Z)(p,[["render",u]]);var v=f},9857:function(e,s,a){e.exports=a.p+"img/gift.989c10b4.jpg"},1701:function(e,s,a){e.exports=a.p+"img/work1.60ed8999.jpg"},2649:function(e,s,a){e.exports=a.p+"img/work2.a9f6b41d.jpg"},3889:function(e,s,a){e.exports=a.p+"img/work3.f6add9d9.jpg"}}]);
//# sourceMappingURL=951.59b9e52b.js.map